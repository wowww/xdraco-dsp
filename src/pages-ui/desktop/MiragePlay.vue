<template>
  <main id="contents" class="contents mirage">
    <section class="section mirage-play">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <mirage-notice inDetail />
        <div class="wrap-grid">
          <!-- 타임라인 -->
          <div class="grid-timeline">
            <!-- for UI pages -->
            <div class="side-sticky-button">
              <button type="button" class="button btn-locked" :class="{ 'btn--active': statusLocked }" @click="onClickHandlerStatusLocked">
                button
              </button>
            </div>

            <h2 class="section-title">Valley 01</h2>
            <mirage-valley-dashboard v-show="statusLocked" isLocked />
            <mirage-valley-dashboard v-show="!statusLocked" />
            <hr />
            <mirage-battle-report-rolling />
            <mirage-hidden-valley-play v-show="statusLocked" isLocked />
            <mirage-hidden-valley-play v-show="!statusLocked" />
            <hr />
            <h2 class="section-title">MIRAGE Log</h2>
            <mirage-battle-report />
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
import MirageBattleReport from '@/components-ui/common/MirageBattleReport';
import MirageBattleReportRolling from '@/components-ui/common/MirageBattleReportRolling';
import MirageValleyDashboard from '@/components-ui/common/MirageValleyDashboard';
import MirageHiddenValleyPlay from '@/components-ui/common/MirageHiddenValleyPlay';
import MirageNotice from '@/components-ui/common/MirageNotice';

export default defineComponent({
  name: 'MiragePlay',
  components: {
    Footer,
    AccountInfo,
    SidebarContactUs,
    MirageBattleReport,
    MirageBattleReportRolling,
    MirageValleyDashboard,
    MirageHiddenValleyPlay,
    MirageNotice,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    isPreStake: true,
    statusLocked: true,
  }),
  methods: {
    onClickHandlerStatusLocked() {
      this.statusLocked = !this.statusLocked;
      console.log(this.statusLocked);
    },
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
@import '~@/assets/sass/desktop/ui-guide';
@import '~@/assets/sass/desktop/app';
@import '~@/assets/sass/components/mirage-dialog';
@import '~@/assets/sass/desktop/pages/mirage/play';

// below for UI pages
.v-application .wrap-grid {
  position: relative;
}
</style>
