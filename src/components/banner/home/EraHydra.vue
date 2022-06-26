<template>
  <div class="banner-era-hydra">
    <div class="banner-era-hydra__inner">
      <h2 class="banner-title">{{ $t('t.banner.erahydra.title') }}</h2>
      <p class="message" v-html="$t('s.banner.erahydra.message2')"></p>
      <router-link to="/exd" class="btn btn-primary-exd link">EXD</router-link>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  name: 'EraHydra',
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
.banner-era-hydra {
  --banner-height: 460px;
  --inner-width: 631px;

  height: var(--banner-height);
  line-height: normal;
  background-position: 50% 0;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-image: url('~@/assets/img/desktop/banner-era-hydra/bg-banner.webp'), linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 50, 1) 100%);
  color: #fff;
  font-weight: 600;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 267px;
    width: var(--inner-width);
    margin: 0 auto;
    height: 100%;
    box-sizing: border-box;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 631px;
      height: 430px;
      background: url('~@/assets/img/desktop/banner-era-hydra/erahydra.webp') 50% 0 / cover no-repeat;
    }
    .link {
      flex-direction: row;
      position: relative;
      width: 160px;
      height: 48px;
      margin-top: 18px;

      &::after {
        content: '';
        display: block;
        width: 16px;
        height: 16px;
        margin-left: 4px;
        background: url('~@/assets/img/desktop/banner-era-hydra/icon-link-arrow.webp') no-repeat 0 0 / 100%;
      }
    }
  }
  .banner-title {
    position: relative;
    line-height: 28px;
    font-size: 32px;
    color: #ffe600;

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #ffe600;
    }
  }
  .message {
    margin-top: 11px;
    line-height: 24px;
    font-size: 16px;
    text-align: center;
    font-weight: normal;

    em {
      font-weight: 700 !important;
    }
  }
  .message-day {
    margin-top: 4px;
    line-height: 28px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
  .is-mobile & {
    --banner-height: 400px;
    --inner-width: 345px;

    background-image: url('~@/assets/img/mobile/banner-era-hydra/bg-banner.webp'),
      linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 50, 1) 100%);
    text-align: center;

    .banner-era-hydra__inner {
      padding-top: 213px;

      &::before {
        top: 0;
        left: calc(50% + (-243px));
        width: 486px;
        height: 283px;
        background: url('~@/assets/img/mobile/banner-era-hydra/erahydra.webp') 50% 0 / cover no-repeat;
      }
    }
    .banner-title {
      font-size: 24px;
    }
    .message {
      margin-top: 13px;
      font-size: 14px;
      line-height: 20px;
    }
    .link {
      width: 160px;
      min-height: 48px;
      margin-top: 16px;

      &::after {
        background-image: url('~@/assets/img/mobile/banner-era-hydra/icon-link-arrow.webp');
      }
    }
  }
}
</style>
