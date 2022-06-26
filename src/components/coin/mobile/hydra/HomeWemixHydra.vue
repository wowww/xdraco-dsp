<template>
  <v-carousel-item content-class="d-flex justify-center align-center">
    <div class="coin">
      <router-link to="/price">
        <div class="coin__name">
          <div class="name">WEMIX / HYDRA</div>
        </div>
        <div class="coin__volume">
          <span class="amount wemix">
            {{ hydraWemix | currency(4) }}
          </span>
          <span class="change" :class="{ plus: hydraWemixChange > 0, minus: hydraWemixChange < 0 }">
            {{ hydraWemixChange > 0 ? '+' : '' }}{{ hydraWemixChange === 0 ? hydraWemixChange.toFixed(0) : hydraWemixChange.toFixed(2) }}%
          </span>
        </div>
        <div class="coin__date" v-if="hydraDate">{{ hydraDate }}</div>
      </router-link>
    </div>
  </v-carousel-item>
</template>

<script>
import { useGetters, useState } from 'vuex-composition-helpers/dist';
import { defineComponent, computed } from '@vue/composition-api';
import { dateFormatFromString } from '@/filters/date';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'HomeWemixHydra',
  setup() {
    const { t } = useI18n();
    const { hydraRate } = useState(['hydraRate']);
    const { hydraWemix, hydraWemixChange } = useGetters(['hydraWemix', 'hydraWemixChange']);

    const hydraDate = computed(() => {
      if (hydraRate.value) {
        return t('date.format.decoration', [dateFormatFromString(hydraRate.value.CreatedDT)]);
      }
      return null;
    });

    return {
      hydraRate,
      hydraWemix,
      hydraWemixChange,
      hydraDate,
    };
  },
});
</script>

<style scoped></style>
