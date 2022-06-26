<template>
  <div class="float-bottom" v-if="item" v-show="item.tradeType === 1">
    <div class="sale-item">
      <!-- ItemInfo -->
      <div class="wrap-buy">
        <div class="price">
          <strong class="ico-wemixcredit ico-sm add-inside">{{ item.price | currency(0) }}</strong>
          <span class="rate">${{ priceUSD | currency(0, true) }}</span>
        </div>
        <button
          type="button"
          @click="onClickPurchase"
          class="btn"
          :class="{ 'btn-primary-nft': item.tradeType === 1 }"
          :disabled="item.tradeType !== 1"
        >
          <template v-if="item.tradeType === 1">
            {{ t('w.exd.event.purchase') }}
          </template>
          <em class="btn-message" v-else-if="item.tradeType === 2">{{ t('t.exd.sales.cancel') }}</em>
          <em class="btn-message" v-else-if="item.tradeType === 3">{{ t('w.exd.my-items.tab.sold-out') }}</em>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import useI18n from '@/utils/useI18n';

export default {
  name: 'NftBottomFixedBar',
  computed: {
    priceUSD() {
      return this.item.price * Number(this.priceRate.USDWemixRate);
    },
  },
  props: {
    item: {
      type: Object,
    },
    priceRate: {
      type: Object,
    },
    onClickPurchase: {
      type: Function,
    },
  },
  setup() {
    return {
      ...useI18n(),
    };
  },
};
</script>

<style scoped></style>
