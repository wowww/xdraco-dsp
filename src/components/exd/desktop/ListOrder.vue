<template>
  <v-select
    class="select-filter orderby"
    :attach="attach"
    :items="items"
    :menu-props="{ bottom: true, offsetY: true, contentClass: 'select-filter-layer' }"
    persistent-hint
    return-object
    single-line
    dark
    dense
    outlined
    :value="itemValue"
    @change="change"
  />
</template>

<script>
import { computed, defineComponent, onMounted, reactive, toRefs, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';

const { useState: useSearchState, useMutations: useSearchMutations } = createNamespacedHelpers('search');

export default defineComponent({
  name: 'ListOrder',
  props: {
    attach: {
      type: String,
      required: false,
    },
    menuProps: {
      type: Object,
      required: false,
      default() {
        return { bottom: true, offsetY: true };
      },
    },
    hidePrice: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { t } = useI18n();

    const state = reactive({
      items: [
        { text: t('w.exd.filter.order.latest'), value: 'latest' },
        { text: t('w.exd.filter.order.oldest'), value: 'oldest' },
      ],
    });

    const { locale } = useState(['locale']);
    const { filter } = useSearchState(['filter']);
    const { setFilter } = useSearchMutations(['setFilter']);

    const itemValue = computed(() => {
      return state.items.find((item) => item.value === filter.value.sort);
    });

    const change = (value) => {
      const changedFilter = { ...filter.value };
      changedFilter.sort = value.value;

      setFilter(changedFilter);
    };

    watch(
      () => locale.value,
      () => {
        if (props.hidePrice) {
          state.items = [
            { text: t('w.exd.filter.order.latest'), value: 'latest' },
            { text: t('w.exd.filter.order.oldest'), value: 'oldest' },
          ];
        } else {
          state.items = [
            { text: t('w.exd.filter.order.latest'), value: 'latest' },
            { text: t('w.exd.filter.order.oldest'), value: 'oldest' },
            { text: t('w.exd.filter.order.pricehigh'), value: 'pricehigh' },
            { text: t('w.exd.filter.order.pricelow'), value: 'pricelow' },
          ];
        }
      },
    );

    onMounted(() => {
      if (!props.hidePrice) {
        state.items = [
          ...state.items,
          { text: t('w.exd.filter.order.pricehigh'), value: 'pricehigh' },
          { text: t('w.exd.filter.order.pricelow'), value: 'pricelow' },
        ];
      }
    });

    return {
      t,
      itemValue,
      ...toRefs(state),
      change,
    };
  },
});
</script>
<style lang="scss"></style>
