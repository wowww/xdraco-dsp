<template>
  <main id="contents" class="contents mirage">
    <banner-mirage-top />
    <mirage-notice />
    <div class="section-wrapper">
      <div class="section-title-bar">
        <h2 class="section-title">MIRAGE Dashboard</h2>
        <div class="mirage-inventory-roster">
          <div class="roster-item">
            <img src="@/assets/img/common/mirage/logo-20-mirage.webp" width="20" height="20" alt="mirage" />
            <span class="volume">14<span class="max-volume"> / 18</span></span>
          </div>
          <div class="roster-item">
            <img src="@/assets/img/common/mirage/ico-20-damage.webp" width="20" height="20" alt="wound" />
            <span class="volume">10</span>
          </div>
          <div class="roster-item">
            <router-link class="link-roster" to="/ui-mirage-list-myroster">Roster</router-link>
          </div>
        </div>
      </div>
      <mirage-dashboard />

      <!-- for UI pages -->
      <button type="button" class="btn-ui-status" :class="{ 'btn--active': isLocked }" @click="onClickHandlerStatusLocked">
        valley locked: {{ isLocked }}
      </button>
      <!-- //for UI pages -->

      <mirage-hidden-valley-capture v-show="isLocked" isLocked />
      <mirage-hidden-valley-capture v-show="!isLocked" />
      <!-- for UI pages -->
      <button type="button" class="btn-ui-status" :class="{ 'btn--active': isRoundOnGoing }" @click="onClickHandlerRoundOnGoing">
        boss-open: {{ isRoundOnGoing }}
      </button>
      <button type="button" class="btn-ui-status" :class="{ 'btn--active': isBreakTime }" @click="onClickHandlerBreakTime">
        boss-break: {{ isBreakTime }}
      </button>
      <!-- //for UI pages -->
      <mirage-boss-raid :isOnGoing="isRoundOnGoing" :isBreakTime="isBreakTime" />
      <section class="section">
        <div class="section__inner">
          <div class="wrap-my-mirage">
            <div class="list-bar">
              <h2 class="section-title">Recommend NFTs</h2>
              <v-tabs v-model="tabGrade" class="tab-grade" background-color="transparent">
                <v-tab v-for="item in recommNFTCards" :key="item.id">{{ item.grade }}</v-tab>
              </v-tabs>
            </div>
            <v-tabs-items v-model="tabGrade">
              <v-tab-item v-for="item in recommNFTCards" :key="item.id">
                <ul class="list-my-mirage recommend">
                  <li v-for="card in item.class" :key="card.id">
                    <card-nft :itemGrade="item.gradeNum > 1 ? item.gradeNum : getRandomGrade()" :characterClass="card" smaller="xs"></card-nft>
                    <div class="wrap-button">
                      <router-link to="productId" class="btn btn-price btn-primary-nft">
                        <em class="price">
                          <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                          <span class="rate">$ 400,000</span>
                        </em>
                      </router-link>
                    </div>
                  </li>
                </ul>
                <div class="wrap-button">
                  <router-link class="btn-viewmore" to="/view-more">VIEW MORE</router-link>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </div>
      </section>
    </div>

    <Footer />
    <mirage-bottom />
  </main>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';

// eslint-disable-next-line import/extensions
import useI18n from '@/utils/useI18n';
import Footer from '@/partials/common/Footer';
import BannerMirageTop from '@/components/banner/MirageTop';
import MirageHiddenValleyCapture from '@/components-ui/common/MirageHiddenValleyCapture';
import MirageDashboard from '@/components-ui/common/MirageDashboard';
import MirageBottom from '@/components-ui/common/MirageBottom';
import CardNft from '@/components-ui/common/CardNft';
import MirageBossRaid from '@/components-ui/common/MirageBossRaid';
import MirageNotice from '@/components-ui/common/MirageNotice';

export default defineComponent({
  name: 'Mirage',
  components: {
    Footer,
    BannerMirageTop,
    MirageHiddenValleyCapture,
    MirageDashboard,
    MirageBottom,
    CardNft,
    MirageBossRaid,
    MirageNotice,
  },
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
    isDevelopment: process.env.NODE_ENV === 'development',

    tabGrade: null,
    recommNFTCards: [
      { grade: 'All', gradeNum: 0, class: ['warrior', 'taoist', 'sorcerer', 'lancer', 'arbalist', 'taoist'] },
      { grade: 'Legendary', gradeNum: 5, class: ['warrior', 'taoist', 'sorcerer', 'lancer'] },
      { grade: 'Epic', gradeNum: 4, class: ['warrior', 'taoist', 'sorcerer', 'lancer', 'arbalist'] },
      { grade: 'Rare', gradeNum: 3, class: ['warrior', 'taoist'] },
      { grade: 'Uncommon', gradeNum: 2, class: ['warrior', 'taoist', 'sorcerer'] },
    ],
    isLocked: false,
    isRoundOnGoing: false,
    isBreakTime: false,
  }),
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
  },
  methods: {
    getRandomGrade() {
      return Math.floor(Math.random() * (5 - 2 + 1)) + 2;
    },
    onClickHandlerStatusLocked() {
      this.isLocked = !this.isLocked;
      console.log(this.isLocked);
    },
    onClickHandlerRoundOnGoing() {
      this.isRoundOnGoing = !this.isRoundOnGoing;
    },
    onClickHandlerBreakTime() {
      this.isBreakTime = !this.isBreakTime;
    },
  },
  setup() {
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
</style>
<style lang="scss" scoped>
// UI 확인용 스타일
.btn-ui-status {
  margin: 20px 0;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);

  &.btn--active {
    background-color: #600a24;
  }
}
</style>
