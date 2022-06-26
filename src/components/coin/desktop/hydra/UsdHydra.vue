<template>
  <div class="coin">
    <router-link to="/price">
      <div class="coin__name">
        <div class="name">USD / HYDRA</div>
      </div>
      <div class="coin__volume">
        <span class="amount">${{ hydraUsd | currency(4) }}</span>
        <span class="change" :class="{ plus: hydraUsdChange > 0, minus: hydraUsdChange < 0 }">
          {{ hydraUsdChange > 0 ? '+' : '' }}{{ hydraUsdChange.toFixed(2) }}%
        </span>
      </div>
      <div class="coin__date">{{ $t('date.format.decoration', [hydraRate ? hydraRate.CreatedDT : '']) }}</div>
    </router-link>
  </div>
</template>

<script>
import { useGetters, useState } from 'vuex-composition-helpers/dist';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'UsdHydra',
  setup() {
    const { hydraRate } = useState(['hydraRate']);
    const { hydraUsd, hydraUsdChange } = useGetters(['hydraUsd', 'hydraUsdChange']);

    return {
      hydraRate,
      hydraUsd,
      hydraUsdChange,
    };
  },
});
</script>

<style scoped></style>
