<template>
  <main id="contents" class="contents" :class="[$route.meta && $route.meta.className ? $route.meta.className : '']">
    <currency-notice v-if="$route.path.includes('coin') && !$route.path.includes('drain')" />
    <router-view />
    <app-footer />
  </main>
</template>

<script>
import { defineComponent, onMounted } from '@vue/composition-api';
import { createNamespacedHelpers, useActions, useState } from 'vuex-composition-helpers/dist';

import AppFooter from '@/components/common/AppFooter';
import CurrencyNotice from '@/components/common/CurrencyNotice';

const { useState: useMirageState, useActions: useMirageActions } = createNamespacedHelpers('mirage');

export default defineComponent({
  name: 'CoinTemplate',
  components: {
    CurrencyNotice,
    AppFooter,
  },
  setup(_, { root }) {
    const { accessToken } = useState(['accessToken']);
    const { fetchDracoLastest, fetchHydraLastest, fetchDerby, fetchHydraSupply, fetchDraco, fetchHydra } = useActions([
      'fetchDracoLastest',
      'fetchHydraLastest',
      'fetchHydraSupply',
    ]);

    onMounted(() => {
      // console.log('template mounted');
      // fetchDracoLastest();
      // fetchHydraLastest();
      // fetchHydraSupply();
    });

    return {
      accessToken,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app';
</style>
