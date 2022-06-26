<template>
  <main id="contents" class="contents mirage">
    <section class="section mirage-play">
      <div class="section__inner">
        <div class="subnav-block"></div>

        <div class="wrap-my-mirage">
          <div class="util-list">
            <div class="mirage-inventory mobile">
              <div class="mirage-inventory-item">
                <span class="currency">
                  <img src="@/assets/img/common/mirage/ico-20-darksteel.webp" width="20" height="20" alt="darksteel" />
                  <em class="volume">10</em>
                </span>
              </div>
              <div class="mirage-inventory-item">
                <span class="currency">
                  <img src="@/assets/img/common/mirage/ico-20-septaria.webp" width="20" height="20" alt="septaria" />
                  <em class="volume">100</em>
                </span>
              </div>
              <div class="mirage-inventory-item">
                <span class="currency">
                  <img src="@/assets/img/common/mirage/ico-20-energy.webp" width="20" height="20" alt="energy" />
                  <em class="volume">2,200</em>
                  <button type="button" class="btn-charge">Charge</button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <mirage-notice inDetail />
        <mirage-valley-dashboard isLocked />
        <mirage-valley-dashboard />
        <mirage-battle-report-rolling />
        <mirage-hidden-valley-play isLocked />
        <mirage-hidden-valley-play />
        <hr />
        <div class="section-wrapper">
          <h2 class="section-title">MIRAGE Log</h2>
          <mirage-battle-report />
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
import MirageBattleReport from '@/components-ui/common/MirageBattleReport';
import MirageBattleReportRolling from '@/components-ui/common/MirageBattleReportRolling';
import MirageValleyDashboard from '@/components-ui/common/MirageValleyDashboard';
import MirageHiddenValleyPlay from '@/components-ui/common/MirageHiddenValleyPlay';
import MirageNotice from '@/components-ui/common/MirageNotice';

export default defineComponent({
  name: 'MiragePlay',
  components: {
    Footer,
    MirageBattleReport,
    MirageBattleReportRolling,
    MirageValleyDashboard,
    MirageHiddenValleyPlay,
    MirageNotice,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    isPreStake: true,
    statusLocked: false,
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
@import '~@/assets/sass/mobile/app';
@import '~@/assets/sass/components/mirage-dialog';
@import '~@/assets/sass/mobile/pages/mirage/play';
@import '~@/assets/sass/mobile/pages/mirage/mirage-list';
</style>
