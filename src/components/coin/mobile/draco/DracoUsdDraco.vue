<template>
  <v-carousel-item content-class="d-flex justify-center align-center">
    <div class="coin">
      <router-link to="/price">
        <div class="coin__name">
          <div class="name">USD / DRACO</div>
        </div>
        <div class="coin__volume">
          <span class="amount">${{ dracoUsd | currency(4) }} </span>
          <span class="change" :class="{ plus: dracoUsdChange > 0, minus: dracoUsdChange < 0 }">
            {{ dracoUsdChange > 0 ? '+' : '' }}{{ dracoUsdChange === 0 ? dracoUsdChange.toFixed(0) : dracoUsdChange.toFixed(2) }}%
          </span>
        </div>
        <div class="coin__date" v-if="dracoDate">{{ dracoDate }}</div>
      </router-link>
    </div>
  </v-carousel-item>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api/dist/vue-composition-api';
import { useGetters, useState } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';
import { dateFormatFromString } from '@/filters/date';

export default defineComponent({
  name: 'DracoUsdDraco',
  setup() {
    const { t } = useI18n();
    const { dracoRate } = useState(['dracoRate']);
    const { dracoUsd, dracoUsdChange } = useGetters(['dracoUsd', 'dracoUsdChange']);

    const dracoDate = computed(() => {
      if (dracoRate.value) {
        return t('date.format.decoration', [dateFormatFromString(dracoRate.value.CreatedDT)]);
      }

      return null;
    });

    return {
      dracoUsd,
      dracoUsdChange,
      dracoDate,
    };
  },
});
</script>

<style scoped></style>
