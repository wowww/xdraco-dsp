<template>
  <div class="wrap-button">
    <button type="button" class="btn btn-price-exd" @click="goToDetail">
      <exd-hydra-price :price="price" :hide-label="true" icon-size="ss" />
    </button>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';
import { useFormattedNumber } from '@/composables/common';
import { useToUsd } from '@/composables/exchange';
import ExdHydraPrice from '@/components/exd/common/ExdHydraPrice';

export default defineComponent({
  name: 'RecommendedWidgetButton',
  components: { ExdHydraPrice },
  props: {
    tradeUid: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '0',
    },
  },
  setup(props, { root }) {
    const formattedPrice = useFormattedNumber(props.price);
    const { usd } = useToUsd(props.price);

    const goToDetail = () => {
      root.$router.push(`/exd/trade/${props.tradeUid}`);
    };

    return {
      ...useI18n(),
      formattedPrice,
      usd,
      goToDetail,
    };
  },
});
</script>

<style scoped></style>
