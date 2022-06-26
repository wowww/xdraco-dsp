<template>
  <main id="contents" class="contents mirage">
    <banner-mirage-top />

    <section class="section">
      <div class="section__inner">
        <div class="wrap-grid">
          <!-- 타임라인 -->
          <div class="grid-timeline">
            <mirage-dialog />
          </div>

          <!-- 사이드영역 -->
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
import { defineComponent, onBeforeMount, onMounted } from '@vue/composition-api';

// eslint-disable-next-line import/extensions
import useI18n from '@/utils/useI18n';
import Footer from '@/partials/common/Footer';
import AccountInfo from '@/components/account/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import BannerMirageTop from '@/components/banner/MirageTop';
import MirageHiddenValleyCapture from '@/components-ui/common/MirageHiddenValleyCapture';
import MirageDialog from '@/components-ui/common/MirageDialog';

export default defineComponent({
  name: 'Mirage',
  components: {
    Footer,
    AccountInfo,
    SidebarContactUs,
    BannerMirageTop,
    MirageHiddenValleyCapture,
    MirageDialog,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',

    isPreStake: true,
  }),
  methods: {
    //
  },
  setup() {
    onBeforeMount(() => {
      //
    });

    onMounted(() => {
      //
    });

    return {
      ...useI18n(),
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app';
@import '~@/assets/sass/components/mirage-dialog';
</style>
