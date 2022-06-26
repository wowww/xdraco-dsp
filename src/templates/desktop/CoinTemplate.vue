<template>
  <main id="contents" class="contents" :class="[$route.meta && $route.meta.className ? $route.meta.className : '']">
    <currency-notice v-if="$route.path.includes('coin') && !$route.path.includes('drain')" />
    <router-view />

    <xdraco-footer />
  </main>
</template>

<script>
import { defineComponent, onMounted, watch } from '@vue/composition-api';
import { useActions, useState } from 'vuex-composition-helpers/dist';

import AccountInfo from '@/components/account/AccountInfo';
import XdracoFooter from '@/components/common/AppFooter';
import CurrencyNotice from '@/components/common/CurrencyNotice';
import CurrencyNotice2 from '@/components/common/CurrencyNotice2';
import SidebarContactUs from '@/components/common/SidebarContactUs';

export default defineComponent({
  name: 'CoinTemplate',
  components: { CurrencyNotice, CurrencyNotice2, SidebarContactUs, AccountInfo, XdracoFooter },
  setup(_, { root }) {
    const { accessToken } = useState(['accessToken']);
    const { fetchDracoLastest, fetchHydraLastest, fetchDerby, fetchHydraSupply, fetchDraco, fetchHydra } = useActions([
      'fetchDracoLastest',
      'fetchHydraLastest',
      'fetchDerby',
      'fetchHydraSupply',
      'fetchDraco',
      'fetchHydra',
    ]);

    onMounted(() => {
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

<style scoped></style>
