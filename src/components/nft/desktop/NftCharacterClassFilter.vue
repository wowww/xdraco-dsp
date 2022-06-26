<template>
  <v-select
    class="select-filter"
    :placeholder="placeholder"
    :value="itemsFilter[filterKey]"
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
  name: 'NftCharacterClassFilter',
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
    const { itemsFilter } = useState(['itemsFilter']);
    const { setItemsFilter } = useMutations(['setItemsFilter']);

    const change = (value) => {
      const changedFilter = itemsFilter.value;
      changedFilter[filterKey] = value;

      setItemsFilter({ ...changedFilter });
    };

    return {
      ...useI18n(),
      itemsFilter,
      change,
    };
  },
});
</script>

<style scoped></style>
