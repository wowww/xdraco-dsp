<template>
  <dl class="display-price">
    <dt>Total Refining Cost of HYDRA<span class="sub-title">Refining Stage 3</span></dt>
    <dd>
      <span class="symbol" v-if="isShowSymbol">
        <img src="@/assets/img/desktop/symbol-draco.webp" width="56" alt="HYDRA" />
        <span>{{ valueShowSymbol }}</span>
        <span class="eqaul">=</span>
      </span>
      <span class="amount"> -- </span>
      <sup class="sup">DS</sup>
      <span class="change"> -- </span>
    </dd>
  </dl>
</template>

<script>
export default {
  name: 'HydraRefiningCostEmpty',
  data: () => ({
    //
  }),
  props: {
    isShowSymbol: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    valueShowSymbol: {
      type: Number,
      required: false,
      default: () => 1,
    },
  },
};
</script>
