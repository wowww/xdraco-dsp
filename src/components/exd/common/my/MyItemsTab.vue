<template>
  <v-tabs class="tab-rounds" :value="myItemTab" @change="setMyItemTab">
    <v-tab>
      <span>{{ t('w.exd.my-items.tab.sale') }}</span>
    </v-tab>
    <v-tab>
      <span>{{ t('w.exd.my-items.tab.sold-out') }}</span>
    </v-tab>
    <v-tab>
      <span>{{ t('w.exd.my-items.tab.purchase') }}</span>
    </v-tab>
  </v-tabs>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';

const { useState, useMutations } = createNamespacedHelpers('exd');

export default defineComponent({
  name: 'MyItemsTab',
  setup() {
    const { myItemTab } = useState(['myItemTab']);
    const { setMyItemTab } = useMutations(['setMyItemTab']);
    const tab = computed(() => ({
      get() {
        return myItemTab.value;
      },
      set(value) {
        setMyItemTab(value);
      },
    }));

    return {
      ...useI18n(),
      tab,
      myItemTab,
      setMyItemTab,
    };
  },
});
</script>

<style scoped></style>
