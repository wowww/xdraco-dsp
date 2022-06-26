<template>
  <main class="contents mywarehouse">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="wrap-grid">
          <div class="grid-timeline">
            <div class="before-login" v-if="!accessToken">
              <p>Log in with WEMIX Wallet and join HSP.</p>
              <div class="wrap-button"><button type="button" class="btn btn-wemix-login btn-sm btn-max">LOGIN</button></div>
            </div>
            <router-view v-else />
          </div>
          <div class="grid-side">
            <aside class="sidebar">
              <account-info />
              <sidebar-contact-us />
            </aside>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<script>
import { defineComponent, onMounted, watch } from '@vue/composition-api';
import AccountInfo from '@/components/account/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import Footer from '@/partials/common/Footer';
import { useState } from 'vuex-composition-helpers/dist';

export default defineComponent({
  name: 'InventoryTemplate',
  components: { Footer, SidebarContactUs, AccountInfo },
  setup(_, { root }) {
    const { accessToken } = useState(['accessToken']);

    watch(
      () => accessToken.value,
      () => {
        if (!accessToken.value) {
          root.$router.replace('/exd/list');
        }
      },
    );

    onMounted(() => {
      if (!accessToken.value) {
        root.$router.replace('/exd/list');
      }
    });

    return {
      accessToken,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
@import '~@/assets/sass/desktop/pages/_mywarehouse.scss';
@import '~@/assets/sass/components/_tab-style1.scss';
</style>
