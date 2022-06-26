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

export default defineComponent({
  name: 'ListFilter',
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup({ filterKey }) {
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
