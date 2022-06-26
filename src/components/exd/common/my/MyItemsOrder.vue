<template>
  <div id="wrapFilterList" class="wrap-filter">
    <v-select
      class="select-filter orderby"
      attach="#wrapFilterList .v-select--is-menu-active"
      :value="myItemsOrder"
      @change="setMyItemsOrder"
      :items="items"
      :menu-props="{ bottom: true, offsetY: true }"
      :placeholder="'my-items-order'"
      item-text="title"
      item-value="abc"
      persistent-hint
      return-object
      single-line
      dark
      dense
      outlined
    ></v-select>
  </div>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';

const { useState, useMutations } = createNamespacedHelpers('exd');

export default defineComponent({
  name: 'MyItemsOrder',
  setup() {
    const { t } = useI18n();

    const items = [
      { text: t('w.exd.filter.order.latest'), value: 'latest' },
      { text: t('w.exd.filter.order.oldest'), value: 'oldest' },
      { text: t('w.exd.filter.order.pricehigh'), value: 'pricehigh' },
      { text: t('w.exd.filter.order.pricelow'), value: 'pricelow' },
    ];
    const { myItemsOrder } = useState(['myItemsOrder']);
    const { setMyItemsOrder } = useMutations(['setMyItemsOrder']);

    return { items, myItemsOrder, setMyItemsOrder };
  },
});
</script>

<style scoped></style>
