<template>
  <main id="contents" class="contents mirage">
    <section class="section boss-raid-detail">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="wrap-grid">
          <!-- 타임라인 -->
          <div class="grid-timeline">
            <!-- for UI pages -->
            <div class="side-sticky-button">
              <button type="button" class="button btn-locked" :class="{ 'btn--active': isStatusLocked }" @click="onClickHandlerStatusLocked">
                status Locked
              </button>
              <button type="button" class="button btn-locked" :class="{ 'btn--active': isStatusInBattle }" @click="onClickHandlerStatusInBattle">
                in Battle
              </button>
              <button type="button" class="button btn-locked" :class="{ 'btn--active': isStatusDefeat }" @click="onClickHandlerStatusDefeat">
                status Defeat
              </button>
            </div>
            <div class="wrap-my-mirage">
              <div class="util-list">
                <back-button />
                <div class="mirage-inventory">
                  <div class="mirage-inventory-item">
                    <span class="currency">
                      <img src="@/assets/img/common/mirage/ico-20-darksteel.webp" width="20" height="20" alt="darksteel" />
                      <em class="volume">0</em>
                    </span>
                  </div>
                  <div class="mirage-inventory-item">
                    <span class="currency">
                      <img src="@/assets/img/common/mirage/ico-20-septaria.webp" width="20" height="20" alt="septaria" />
                      <em class="volume">0</em>
                    </span>
                  </div>
                  <div class="mirage-inventory-item">
                    <span class="currency">
                      <img src="@/assets/img/common/mirage/img-24-mirage-scroll.webp" width="24" height="22" alt="enhance" />
                      <em class="volume">0</em>
                    </span>
                    <button type="button" class="btn-enhance">Enhance</button>
                  </div>
                  <div class="mirage-inventory-item">
                    <span class="currency">
                      <img src="@/assets/img/common/mirage/ico-20-energy.webp" width="20" height="20" alt="energy" />
                      <em class="volume">0</em>
                    </span>
                    <button type="button" class="btn-charge">Charge</button>
                  </div>
                </div>
              </div>
            </div>
            <mirage-boss-breifing :isLocked="isStatusLocked" :isInBattle="isStatusInBattle" :isDefeat="isStatusDefeat" />
            <hr />
            <mirage-boss-raid-result :isInBattle="isStatusInBattle" />
            <mirage-my-squadron />
            <hr />
            <mirage-latest-raid-result />
            <hr />
            <h2 class="section-title">Battle Report</h2>
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
import BackButton from '@/components/common/BackButton';
import MirageBossBreifing from '@/components-ui/common/MirageBossBreifing';
import MirageMySquadron from '@/components-ui/common/MirageMySquadron';
import MirageBossRaidResult from '@/components-ui/common/MirageBossRaidResult';
import MirageLatestRaidResult from '@/components-ui/common/MirageLatestRaidResult';

export default defineComponent({
  name: 'MirageBossRaidDetail',
  components: {
    Footer,
    AccountInfo,
    SidebarContactUs,
    MirageBattleReport,
    BackButton,
    MirageBossBreifing,
    MirageMySquadron,
    MirageBossRaidResult,
    MirageLatestRaidResult,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    isStatusLocked: false,
    isStatusInBattle: false,
    isStatusDefeat: false,
  }),
  methods: {
    onClickHandlerStatusLocked() {
      this.isStatusLocked = !this.isStatusLocked;
    },
    onClickHandlerStatusInBattle() {
      this.isStatusDefeat = false;
      this.isStatusInBattle = !this.isStatusInBattle;
    },
    onClickHandlerStatusDefeat() {
      this.isStatusInBattle = false;
      this.isStatusDefeat = !this.isStatusDefeat;
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
@import '~@/assets/sass/desktop/pages/mirage/mirage-list';
@import '~@/assets/sass/desktop/pages/mirage/boss-raid-detail';
</style>

<style scoped>
/* UI 확인용 스타일입니다 */
.side-sticky-button {
  margin-bottom: -242px;
}
.side-sticky-button .button {
  flex-direction: column;
  height: 80px;
  font-size: inherit;
  line-height: normal;
}
</style>
