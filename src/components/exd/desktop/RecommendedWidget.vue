<template>
  <ul
    class="list-item"
    :class="{ 'recommended rank': recommendedItems && recommendedItems.length > 0 }"
    :data-empty-message="recommendedItems && recommendedItems.length > 0 ? '' : t('s.exd.sale.no-item')"
  >
    <exchange-item
      v-for="(item, itemIdx) in recommendedItems"
      :exchange-item="item"
      :key="`recommended-item-${item.tradeUID}`"
      :rank="itemIdx"
      :collectible="!!item.item.uniqueNo"
    />
  </ul>
</template>

<script>
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import { defineComponent, onMounted, watch } from '@vue/composition-api';
import ExchangeItem from '@/components/exd/common/ExchangeItem';
import useI18n from '@/utils/useI18n';

const { useState: useExdState, useActions: useExdActions, useMutations: useExdMutations } = createNamespacedHelpers('exd');
export default defineComponent({
  name: 'RecommendedWidget',
  components: { ExchangeItem },
  setup() {
    const { locale } = useState(['locale']);
    const { recommendedLoading, recommendedItems } = useExdState(['recommendedLoading', 'recommendedItems']);
    const { fetchRecommended } = useExdActions(['fetchRecommended']);

    watch(
      () => locale.value,
      () => {
        fetchRecommended();
      },
    );

    return {
      ...useI18n(),
      recommendedItems,
    };
  },
});
</script>

<style scoped></style>
