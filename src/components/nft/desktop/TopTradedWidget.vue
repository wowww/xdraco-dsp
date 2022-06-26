<template>
  <ul
    class="list-item"
    :class="{ recommended: items && items.length > 0, rank: selectedWidget === 0 }"
    :data-empty-message="items && items.length > 0 ? '' : t('s.exd.sale.no-item')"
  >
    <exchange-item
      v-for="(item, itemIdx) in items.slice(0, 3)"
      :exchange-item="item"
      :key="`top-widget-item-${itemIdx}`"
      :use-rank="selectedWidget === 0"
      use-top
      use-relative-date
      :rank="itemIdx"
    />
  </ul>
</template>

<script>
import { computed, defineComponent, onMounted, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import ExchangeItem from '@/components/exd/common/ExchangeItem';
import useI18n from '@/utils/useI18n';

const { useState: useExdState, useActions: useExdActions, useMutations: useExdMutations } = createNamespacedHelpers('exd');

export default defineComponent({
  name: 'TopTradedWidget',
  components: { ExchangeItem },
  setup() {
    const { locale } = useState(['locale']);
    const { selectedWidget, topTradedLoading, topTradedItems, recentlyItems } = useExdState([
      'selectedWidget',
      'topTradedLoading',
      'topTradedItems',
      'recentlyItems',
    ]);
    const { fetchTopTraded, fetchRecently } = useExdActions(['fetchTopTraded', 'fetchRecently']);

    const items = computed(() => {
      if (selectedWidget.value === 0) {
        return topTradedItems.value;
      }
      return recentlyItems.value;
    });

    watch(
      () => locale.value,
      () => {
        fetchTopTraded();
        fetchRecently();
      },
    );

    return {
      ...useI18n(),
      selectedWidget,
      items,
    };
  },
});
</script>

<style scoped></style>
