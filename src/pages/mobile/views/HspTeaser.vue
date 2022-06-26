<template>
  <main class="contents hsp-teaser">
    <banner-hsp-top />

    <section class="section section-count">
      <div class="section__inner">
        <!-- Teaser 카운트다운 -->
        <div class="teaser-hsp-countdown">
          <p>HSP <span v-html="t('s.hsp-teaser.pre-staking.on')"></span></p>
          <p class="date" v-html="t('s.hsp-teaser.pre-staking.date')"></p>
          <teaser-countdown targetDate="2022-01-28T12:00:00+08:00" />
          <p class="description">
            <!-- <span v-html="t('s.hsp-teaser.reward.desc')"></span>
            <span> {{ t('s.hsp-teaser.reward.date') }}</span> -->
            <span v-html="t('s.draco.hsp.countdown')"></span>
          </p>
        </div>
      </div>
    </section>

    <section class="section section-feature">
      <div class="section__inner">
        <dl class="list-feature">
          <div>
            <dt v-html="t('t.hsp-teaser.pre-staking.desc1')"></dt>
            <dd>
              <p v-html="t('s.hsp-teaser.pre-staking.desc1')"></p>
            </dd>
          </div>
          <div>
            <dt v-html="t('t.hsp-teaser.pre-staking.desc2')"></dt>
            <dd>
              <p v-html="t('s.hsp-teaser.pre-staking.desc2')"></p>
            </dd>
          </div>
          <div>
            <dt v-html="t('t.hsp-teaser.pre-staking.desc3')"></dt>
            <dd>
              <p v-html="t('s.hsp-teaser.pre-staking.desc3')"></p>
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="section section-forecasted">
      <div class="section__inner">
        <h3 class="section-title" v-html="t('t.hsp-teaser.forecasted.title')"></h3>
        <p class="desc" v-html="t('s.hsp-teaser.forecasted.desc')"></p>
        <h4 class="sub-title" v-html="t('t.hsp-teaser.forecasted.summary.caption')"></h4>
        <ul class="list-summary">
          <li v-html="t('s.hsp-teaser.forecasted.summary.desc1')"></li>
          <li v-html="t('s.hsp-teaser.forecasted.summary.desc2')"></li>
        </ul>
        <div class="tbl-wrap">
          <table class="tbl-stake">
            <thead>
              <tr>
                <th scope="col">
                  <span>Total Staked Volume</span>
                </th>
                <th scope="col">
                  <span>APR</span>
                </th>
                <th scope="col">
                  <span>APY</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100,000 HYD</td>
                <td>977.62%</td>
                <td>1,074,654.09%</td>
              </tr>
              <tr>
                <td>200,000 HYD</td>
                <td>488.81%</td>
                <td>10,279.79%</td>
              </tr>
              <tr>
                <td>300,000 HYD</td>
                <td>325.87%</td>
                <td>2,109.25%</td>
              </tr>
              <tr>
                <td>400,000 HYD</td>
                <td>244.40%</td>
                <td>919.13%</td>
              </tr>
              <tr>
                <td>500,000 HYD</td>
                <td>195.52%</td>
                <td>540.62%</td>
              </tr>
              <tr>
                <td>600,000 HYD</td>
                <td>162.94%</td>
                <td>370.09%</td>
              </tr>
              <tr>
                <td>700,000 HYD</td>
                <td>139.66%</td>
                <td>276.85%</td>
              </tr>
              <tr>
                <td>800,000 HYD</td>
                <td>122.20%</td>
                <td>219.26%</td>
              </tr>
              <tr>
                <td>900,000 HYD</td>
                <td>108.62%</td>
                <td>180.63%</td>
              </tr>
              <tr>
                <td>1,000,000 HYD</td>
                <td>97.76%</td>
                <td>153.12%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul class="list-caution">
          <li v-html="t('s.hsp-teaser.forecasted.caution1')"></li>
          <li v-html="t('s.hsp-teaser.forecasted.caution2')"></li>
          <li v-html="t('s.hsp-teaser.forecasted.caution3')"></li>
        </ul>
      </div>
    </section>

    <section class="section section-caution">
      <div class="section__inner">
        <dl class="meaning">
          <dt v-html="t('t.hsp-teaser.caution.title')"></dt>
          <dd v-html="t('s.hsp-teaser.caution.content')"></dd>
        </dl>
        <ul class="list-caution">
          <li v-html="t('s.hsp-teaser.caution.desc1')"></li>
          <li v-html="t('s.hsp-teaser.caution.desc2')"></li>
          <li v-html="t('s.hsp-teaser.caution.desc3')"></li>
          <li v-html="t('s.hsp-teaser.caution.desc4')"></li>
        </ul>
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
import BannerHspTop from '@/components/banner/HspTop';
import TeaserCountdown from '@/components/hsp/TeaserCountdown';
import hspDialog from '@/components-ui/common/HspDialog';
import HspMyStake from '@/components-ui/common/HspMyStake';

export default defineComponent({
  name: 'HspTeaser',
  components: {
    Footer,
    AccountInfo,
    BannerHspTop,
    SidebarContactUs,
    TeaserCountdown,
    hspDialog,
    HspMyStake,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
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
@import '~@/assets/sass/mobile/app.scss';
@import '~@/assets/sass/mobile/pages/hsp-teaser';
</style>
