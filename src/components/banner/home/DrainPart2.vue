<template>
  <div class="banner-drain-part2">
    <div class="banner-drain-part2__inner">
      <h2 class="banner-title">{{ $t('t.hsp') }}</h2>
      <p class="message">Meet the ‘Mystery Trader’ on WEMIX DEX</p>
      <p class="date">beginning on Feb. 16th, 2022 06:00 UTC+8</p>
      <a :href="getDracoHost + '/drain'" class="link" target="_blank">Learn more</a>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  name: 'DrainPart2',
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
.banner-drain-part2 {
  --banner-height: 460px;
  --inner-width: 660px;

  height: var(--banner-height);
  line-height: normal;
  background-position: 50% 0;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-image: url('~@/assets/img/desktop/banner-drain-part2/bg-banner.webp'), linear-gradient(180deg, #090b3d 0%, #36236b 83.7%);
  color: #fff;
  font-weight: 600;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 140px;
    width: var(--inner-width);
    margin: 0 auto;
    height: 100%;
    box-sizing: border-box;
  }
  .banner-title {
    margin-bottom: 24px;
    width: 492px;
    height: 58px;
    font-size: 0;
    background: url('~@/assets/img/desktop/banner-drain-part2/title-banner.webp') 50% 50% / auto 100% no-repeat;
  }
  .message {
    line-height: 1;
    font-size: 32px;
    text-align: center;

    span {
      + span {
        margin-left: 6px;
      }
    }
  }
  .date {
    margin-top: 8px;
    line-height: 1.6;
    font-size: 20px;
  }
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    padding: 0 15px;
    border-style: solid;
    border-width: 1px;
    border-image-source: linear-gradient(to bottom, #7da9ff 0%, #0187e8 100%);
    border-image-slice: 1;
    min-width: 180px;
    height: 48px;
    font-size: 20px;
    box-shadow: 0 16px 16px 0 rgba(0, 0, 0, 0.25);
    background-image: linear-gradient(105deg, #11002e 0%, #002a68 50%, #0f002e 100%);
    color: #fff;
    box-sizing: border-box;

    &::after {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-left: 4px;
      background: url('~@/assets/img/desktop/banner-drain-part2/icon-link-arrow.webp') no-repeat 0 0 / 100%;
    }
  }
  .is-mobile & {
    --banner-height: 400px;
    --inner-width: 320px;

    background-image: url('~@/assets/img/mobile/banner-drain-part2/bg-banner.webp'), linear-gradient(to bottom, #010332 57%, #030356 97%),
      linear-gradient(to bottom, #010332 0%, #030356 100%);
    text-align: center;

    .banner-drain-part2__inner {
      padding-top: 190px;
    }
    .banner-title {
      margin-bottom: 0;
      width: 215px;
      height: 81px;
      background-image: url('~@/assets/img/mobile/banner-drain-part2/title-banner.webp');
    }
    .message {
      display: none;
    }
    .date {
      font-size: 14px;
    }
    .link {
      margin-top: 12px;
      min-width: 180px;

      &::after {
        background-image: url('~@/assets/img/mobile/banner-drain-part2/icon-link-arrow.webp');
      }
    }
  }
}
</style>
