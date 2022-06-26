<template>
  <v-select
    :key="`list-filter-${filterKey}`"
    class="select-filter"
    :placeholder="placeholder"
    :value="filter[filterKey]"
    @change="change"
    :items="items"
    :menu-props="{ bottom: true, offsetY: true, contentClass: 'select-filter-layer' }"
    dark
    dense
    outlined
    :disabled="disabled"
  />
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';

const { useState, useMutations } = createNamespacedHelpers('search');

// const { useState, useMutations } = createNamespacedHelpers('exd');
// const { useState: useCollectibleState, useMutations: useCollectibleMutations } = createNamespacedHelpers('collectible');

export default defineComponent({
  name: 'ListSearchIdFilter',
  props: {
    placeholder: {
      type: String,
    },
    filterKey: {
      type: String,
    },
    items: {
      type: Array,
      default: () => [],
    },
    collectible: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup({ collectible, filterKey }) {
    const { filter } = useState(['filter']);
    const { setFilter } = useMutations(['setFilter']);

    const change = (value) => {
      const changedFilter = { ...filter.value };
      changedFilter[filterKey] = value;

      setFilter(changedFilter);
    };

    return {
      ...useI18n(),
      filter,
      change,
    };
  },
});
</script>

<style scoped></style>
