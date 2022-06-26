<template>
  <v-carousel-item content-class="d-flex justify-center align-center">
    <div class="coin">
      <router-link to="/price">
        <div class="coin__name">
          <div class="name">WEMIX / DRACO</div>
        </div>
        <div class="coin__volume">
          <span class="amount wemix">
            {{ dracoWemix | currency(4) }}
          </span>
          <span class="change" :class="{ plus: dracoWemixChange > 0, minus: dracoWemixChange < 0 }">
            {{ dracoWemixChange > 0 ? '+' : '' }}{{ dracoWemixChange === 0 ? dracoWemixChange.toFixed(0) : dracoWemixChange.toFixed(2) }}%
          </span>
        </div>
        <div class="coin__date" v-if="dracoDate">{{ dracoDate }}</div>
      </router-link>
    </div>
  </v-carousel-item>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api';
import { useGetters, useState } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';
import { dateFormatFromString } from '@/filters/date';

export default defineComponent({
  name: 'DracoWemixDraco',
  setup() {
    const { t } = useI18n();
    const { dracoRate } = useState(['dracoRate']);
    const { dracoWemix, dracoWemixChange } = useGetters(['dracoWemix', 'dracoWemixChange']);

    const dracoDate = computed(() => {
      if (dracoRate.value) {
        return t('date.format.decoration', [dateFormatFromString(dracoRate.value.CreatedDT)]);
      }

      return null;
    });

    return {
      dracoWemix,
      dracoWemixChange,
      dracoDate,
    };
  },
});
</script>

<style scoped></style>
