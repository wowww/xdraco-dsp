<template>
  <main class="contents" :class="[$route.meta.className]">
    <exd-top v-if="$route.path === '/exd/list'" />
    <section class="section">
      <div class="section__inner">
        <back-button v-if="$route.path !== '/exd/list'" />
        <div class="wrap-grid">
          <router-view class="grid-timeline" />
          <div class="grid-side">
            <aside class="sidebar">
              <account-info />
              <sidebar-contact-us />
            </aside>
          </div>
        </div>
      </div>
    </section>
    <app-footer />
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import AccountInfo from '@/components/account/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import AppFooter from '@/components/common/AppFooter';
import ExdTop from '@/components/banner/ExdTop';
import BackButton from '@/components/common/BackButton';

export default defineComponent({
  name: 'ExdTemplate',
  components: { BackButton, ExdTop, AppFooter, SidebarContactUs, AccountInfo },
});
</script>

<style scoped></style>
