<template>
  <div class="banner-hsp-teaser">
    <div class="banner-hsp-teaser__inner">
      <h2 class="banner-title">Hydra Staking Program</h2>
      <p class="message">
        <span v-html="$t('s.hsp-teaser.pre-staking.on')"></span>
        <span v-html="$t('s.hsp-teaser.pre-staking.date')"></span>
      </p>
      <router-link to="/hsp" class="link">HSP</router-link>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  name: 'HspTeaser',
  components: {
    //
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    md: new MobileDetect(window.navigator.userAgent),
  }),
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
    getDracoHost() {
      return process.env.VUE_APP_DRACO_HOST;
    },
  },
});
</script>

<style lang="scss" scoped>
.banner-hsp-teaser {
  --banner-height: 460px;
  --inner-width: 660px;

  height: var(--banner-height);
  line-height: normal;
  background-position: 50% 0;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-image: url('~@/assets/img/desktop/banner-hsp-teaser/bg-banner.webp'), linear-gradient(to bottom, #010332 0%, #030356 100%);
  color: #fff;
  font-weight: 600;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 230px;
    width: var(--inner-width);
    margin: 0 auto;
    height: 100%;
    box-sizing: border-box;
  }
  .banner-title {
    width: 684px;
    height: 72px;
    font-size: 0;
    background: url('~@/assets/img/desktop/banner-hsp-teaser/title-hsp.webp') no-repeat 50% 50% / 100% auto;
  }
  .message {
    margin-top: 4px;
    line-height: 1.15;
    font-size: 20px;
    text-align: center;

    span {
      + span {
        margin-left: 6px;
      }
    }
  }
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    padding: 0 15px;
    border-width: 1px;
    border-style: solid;
    min-width: 180px;
    height: 48px;
    font-size: 20px;
    border-image-source: linear-gradient(to bottom, #33ceff 0%, #016ce8 100%);
    border-image-slice: 1;
    background-image: linear-gradient(105deg, #04002e 0%, #001a5c 50%, #04002e 100%);
    box-sizing: border-box;

    &::after {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-left: 4px;
      background: url('~@/assets/img/desktop/banner-drain/icon-link-arrow.webp') no-repeat 0 0 / 100%;
    }
  }
  .is-mobile & {
    --banner-height: 400px;
    --inner-width: 320px;

    background-image: url('~@/assets/img/mobile/banner-hsp-teaser/bg-banner.webp');
    text-align: center;

    .banner-hsp-teaser__inner {
      padding-top: 187px;
    }
    .banner-title {
      width: 296px;
      height: 78px;
      background-image: url('~@/assets/img/mobile/banner-hsp-teaser/title-hsp.webp');
      background-size: auto 100%;
    }
    .message {
      display: none;
    }
    .link {
      margin-top: 22px;
      min-width: 140px;

      &::after {
        background-image: url('~@/assets/img/mobile/banner-drain/icon-link-arrow.webp');
      }
    }
  }
}
</style>
