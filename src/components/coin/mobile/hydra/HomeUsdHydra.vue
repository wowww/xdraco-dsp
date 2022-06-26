<template>
  <v-carousel-item content-class="d-flex justify-center align-center">
    <div class="coin">
      <router-link to="/price">
        <div class="coin__name">
          <div class="name">USD / HYDRA</div>
        </div>
        <div class="coin__volume">
          <span class="amount">${{ hydraUsd | currency(4) }} </span>
          <span class="change" :class="{ plus: hydraUsdChange > 0, minus: hydraUsdChange < 0 }">
            {{ hydraUsdChange > 0 ? '+' : '' }}{{ hydraUsdChange === 0 ? hydraUsdChange.toFixed(0) : hydraUsdChange.toFixed(2) }}%
          </span>
        </div>
        <div class="coin__date" v-if="hydraDate">{{ hydraDate }}</div>
      </router-link>
    </div>
  </v-carousel-item>
</template>

<script>
import { useState, useGetters } from 'vuex-composition-helpers/dist';
import { defineComponent, computed } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';
import { dateFormatFromString } from '@/filters/date';

export default defineComponent({
  name: 'HomeUsdHydra',
  setup() {
    const { t } = useI18n();
    const { hydraRate } = useState(['hydraRate']);
    const { hydraUsd, hydraUsdChange } = useGetters(['hydraUsd', 'hydraUsdChange']);

    const hydraDate = computed(() => {
      if (hydraRate.value) {
        return t('date.format.decoration', [dateFormatFromString(hydraRate.value.CreatedDT)]);
      }
      return null;
    });

    return {
      hydraRate,
      hydraUsd,
      hydraUsdChange,
      hydraDate,
    };
  },
});
</script>

<style scoped></style>
