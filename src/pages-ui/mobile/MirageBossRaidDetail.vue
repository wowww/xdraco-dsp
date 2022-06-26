<template>
  <main id="contents" class="contents mirage">
    <section class="section boss-raid-detail">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="wrap-my-mirage">
          <div class="util-list">
            <div class="mirage-inventory">
              <div class="mirage-inventory-item">
                <span class="currency">
                  <img src="@/assets/img/common/mirage/img-24-mirage-scroll.webp" width="24" height="22" alt="enhance" />
                  <em class="volume">99</em>
                </span>
                <button type="button" class="btn-enhance">Enhance</button>
              </div>
              <div class="mirage-inventory-item">
                <span class="currency">
                  <img src="@/assets/img/common/mirage/ico-20-energy.webp" width="20" height="20" alt="energy" />
                  <em class="volume">99</em>
                </span>
                <button type="button" class="btn-charge">Charge</button>
              </div>
            </div>
          </div>
        </div>

        <!-- for UI pages -->
        <button type="button" class="btn-ui-status" :class="{ 'btn--active': isStatusLocked }" @click="onClickHandlerStatusLocked">
          valley locked
        </button>
        <button type="button" class="btn-ui-status" :class="{ 'btn--active': isStatusInBattle }" @click="onClickHandlerStatusInBattle">
          in Battle
        </button>
        <button type="button" class="btn-ui-status" :class="{ 'btn--active': isStatusDefeat }" @click="onClickHandlerStatusDefeat">
          status Defeat
        </button>
        <!-- //for UI pages -->

        <mirage-boss-breifing :isLocked="isStatusLocked" :isInBattle="isStatusInBattle" :isDefeat="isStatusDefeat" />
        <hr />
        <mirage-boss-raid-result :isInBattle="isStatusInBattle" />
        <mirage-my-squadron />
        <hr />
        <mirage-latest-raid-result />
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
import MirageBossBreifing from '@/components-ui/common/MirageBossBreifing';
import MirageMySquadron from '@/components-ui/common/MirageMySquadron';
import MirageBossRaidResult from '@/components-ui/common/MirageBossRaidResult';
import MirageLatestRaidResult from '@/components-ui/common/MirageLatestRaidResult';
import MirageInventory from '@/components/mirage/common/MirageInventory';

export default defineComponent({
  name: 'MirageBossRaidDetail',
  components: {
    Footer,
    MirageBattleReport,
    MirageBossBreifing,
    MirageMySquadron,
    MirageBossRaidResult,
    MirageLatestRaidResult,
    MirageInventory,
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
@import '~@/assets/sass/mobile/app';
@import '~@/assets/sass/components/mirage-dialog';
@import '~@/assets/sass/mobile/pages/mirage/mirage-list';
@import '~@/assets/sass/mobile/pages/mirage/boss-raid-detail';
</style>
<style lang="scss" scoped>
// UI 확인용 스타일
.btn-ui-status {
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);

  &.btn--active {
    background-color: #600a24;
  }
}
</style>
