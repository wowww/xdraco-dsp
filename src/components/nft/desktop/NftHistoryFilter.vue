<template>
  <v-select
    class="select-filter"
    :placeholder="placeholder"
    :value="historyFilter[filterKey]"
    @change="change"
    :items="filterItems"
    :menu-props="{ bottom: true, offsetY: true, contentClass: 'select-filter-layer' }"
    dark
    dense
    outlined
  ></v-select>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';

const { useState, useMutations } = createNamespacedHelpers('nft');
const { useState: useCollectibleState, useMutations: useCollectibleMutations } = createNamespacedHelpers('collectible');

export default defineComponent({
  name: 'NftHistoryFilter',
  props: {
    placeholder: {
      type: String,
    },
    filterKey: {
      type: String,
    },
    filterItems: {
      type: Array,
      default: () => [],
    },
  },
  setup({ filterKey }) {
    const { historyFilter } = useState(['historyFilter']);
    const { setHistoryFilter } = useMutations(['setHistoryFilter']);

    const { t } = useI18n();

    const change = (value) => {
      const changedFilter = historyFilter.value;
      changedFilter[filterKey] = value;

      setHistoryFilter({ ...changedFilter });
    };

    return {
      t,
      historyFilter,
      change,
    };
  },
});
</script>

<style scoped></style>
