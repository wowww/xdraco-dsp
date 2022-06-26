<template>
  <ul
    class="list-item"
    :class="{ recommended: items && items.length > 0, rank: selectedTab === 0 }"
    :data-empty-message="loading || (items && items.length) > 0 ? '' : t('s.exd.sale.no-item')"
  >
    <div v-if="loading" :style="{ display: 'flex', width: '100%', justifyContent: 'center', margin: '10rem auto' }">
      <v-progress-circular class="ml-2" :size="24" :width="4" color="#f0f0f0" indeterminate />
    </div>
    <exchange-item
      v-for="(item, itemIdx) in items.slice(0, 3)"
      :exchange-item="item"
      :key="`${collectibles ? 'collectibles' : 'exd'}-${selectedTab === 0 ? 'top-traded' : 'recently'}-${itemIdx}`"
      :use-rank="selectedTab === 0"
      use-top
      use-relative-date
      :rank="itemIdx"
      use-info
      :collectible="!!item.item.uniqueNo"
    />
  </ul>
</template>

<script>
import { computed, defineComponent, onMounted, reactive, ref, toRefs, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import ExchangeItem from '@/components/exd/common/ExchangeItem';
import useI18n from '@/utils/useI18n';

const { useState: useExdState, useMutations: useExdMutations, useActions: useExdActions } = createNamespacedHelpers('exd');
const {
  useState: useCollectiblesState,
  useMutations: useCollectiblesMutations,
  useActions: useCollectiblesActions,
} = createNamespacedHelpers('collectible');

export default defineComponent({
  name: 'TopTradedWidget',
  components: { ExchangeItem },
  props: {
    collectibles: {
      type: Boolean,
      default: false,
    },
  },
  setup({ collectibles }) {
    const { locale } = useState(['locale']);
    const {
      selectedTab: exdSelectedTab,
      topTradedLoading: exdTopTradedLoading,
      recentlyLoading: exdRecentlyLoading,
      topTradedItems: exdTopTradedItems,
      recentlyItems: exdRecentlyItems,
    } = useExdState(['selectedTab', 'topTradedLoading', 'recentlyLoading', 'topTradedItems', 'recentlyItems']);
    const { fetchTopTraded: fetchExdTopTraded, fetchRecently: fetchExdRecently } = useExdActions(['fetchTopTraded', 'fetchRecently']);

    const {
      selectedTab: collectiblesSelectedTab,
      topTradedLoading: collectiblesTopTradedLoading,
      recentlyLoading: collectiblesRecentlyLoading,
      topTradedItems: collectiblesTopTradedItems,
      recentlyItems: collectiblesRecentlyItems,
    } = useCollectiblesState(['selectedTab', 'topTradedLoading', 'recentlyLoading', 'topTradedItems', 'recentlyItems']);
    const { fetchCollectiblesTopTraded, fetchCollectiblesRecently } = useCollectiblesActions([
      'fetchCollectiblesTopTraded',
      'fetchCollectiblesRecently',
    ]);

    const state = reactive({
      items: [],
    });

    const selectedTab = computed(() => {
      if (collectibles) {
        return collectiblesSelectedTab.value;
      }

      return exdSelectedTab.value;
    });

    const loading = computed(() => {
      if (collectibles) {
        if (collectiblesSelectedTab === 0) {
          return collectiblesTopTradedLoading.value;
        }
        return collectiblesRecentlyLoading.value;
      }
      if (exdSelectedTab === 0) {
        return exdTopTradedLoading.value;
      }
      return exdRecentlyLoading.value;
    });

    const fetch = () => {
      if (collectibles) {
        fetchCollectiblesTopTraded();
        fetchCollectiblesRecently();
      } else {
        fetchExdTopTraded();
        fetchExdRecently();
      }
    };

    const loadCollectiblesItems = () => {
      if (collectiblesSelectedTab.value === 0) {
        state.items = collectiblesTopTradedItems.value;
      } else {
        state.items = collectiblesRecentlyItems.value;
      }
    };

    const loadExdItems = () => {
      console.log('loadExdItems', exdSelectedTab.value, exdTopTradedItems.value);
      if (exdSelectedTab.value === 0) {
        state.items = exdTopTradedItems.value;
      } else {
        state.items = exdRecentlyItems.value;
      }
    };

    const loadItems = () => {
      state.items = [];
      console.log('loadItems', collectibles, collectiblesSelectedTab.value, exdSelectedTab.value);
      if (collectibles) {
        loadCollectiblesItems();
      } else {
        loadExdItems();
      }
    };

    watch([exdSelectedTab, collectiblesSelectedTab], () => {
      console.log('watch tab');
      loadItems();
    });

    watch(
      () => loading.value,
      () => {
        loadItems();
      },
    );

    watch(
      () => locale.value,
      () => {
        fetch();
      },
    );

    watch(
      () => exdTopTradedItems.value,
      () => {
        loadItems();
      },
    );

    watch(
      () => collectiblesTopTradedItems.value,
      () => {
        loadItems();
      },
    );

    onMounted(() => {
      fetch();
    });

    return {
      ...useI18n(),
      loading,
      selectedTab,
      ...toRefs(state),
    };
  },
});
</script>

<style scoped></style>
