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
    @click="$emit('click')"
    @change="change"
  ></v-select>
</template>

<script>
import { computed, defineComponent, reactive, toRefs, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';

const { useState: useNftState, useMutations } = createNamespacedHelpers('nft');

export default defineComponent({
  name: 'NftListOrder',
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
    collectible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { t } = useI18n();

    const state = reactive({
      items: [
        { text: t('w.exd.filter.order.latest'), value: 'latest' },
        { text: t('w.exd.filter.order.oldest'), value: 'oldest' },
        { text: t('w.exd.filter.order.pricehigh'), value: 'pricehigh' },
        { text: t('w.exd.filter.order.pricelow'), value: 'pricelow' },
        { text: t('w.exd.filter.order.lvhigh'), value: 'lvhigh' },
        { text: t('w.exd.filter.order.pshigh'), value: 'pshigh' },
      ],
    });

    const { locale } = useState(['locale']);
    const { itemsFilter } = useNftState(['itemsFilter']);
    const { setItemsFilter } = useMutations(['setItemsFilter']);

    const itemValue = computed(() => {
      return state.items.find((item) => item.value === itemsFilter.value.sort);
    });

    const change = (value) => {
      const changedFilter = { ...itemsFilter.value };
      changedFilter.sort = value.value;

      setItemsFilter(changedFilter);
    };

    watch(
      () => locale.value,
      () => {
        state.items = [
          { text: t('w.exd.filter.order.latest'), value: 'latest' },
          { text: t('w.exd.filter.order.oldest'), value: 'oldest' },
          { text: t('w.exd.filter.order.pricehigh'), value: 'pricehigh' },
          { text: t('w.exd.filter.order.pricelow'), value: 'pricelow' },
          { text: t('w.exd.filter.order.lvhigh'), value: 'lvhigh' },
          { text: t('w.exd.filter.order.pshigh'), value: 'pshigh' },
        ];
      },
    );

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
