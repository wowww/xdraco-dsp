<template>
  <div class="banner-mirage">
    <div class="banner-mirage__inner">
      <h2 class="banner-title">MULTIVERSE OF MIR4</h2>
      <router-link to="/mirage" class="link">MIRAGE Hidden Valley Capture</router-link>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  name: 'MirageMain',
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
.banner-mirage {
  --banner-height: 460px;
  --inner-width: 660px;

  height: var(--banner-height);
  line-height: normal;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: auto 100%;
  background-image: url('~@/assets/img/desktop/banner-mirage/bg-banner-open.webp'), linear-gradient(to bottom, #784237 0%, #96593d 39%, #1b1e27 56%, #0c2532 73%), linear-gradient(to bottom, #180b14, #180b14);
  color: #fff;
  box-sizing: border-box;

  .banner-mirage__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 16px;
    margin: 0 auto;
    padding-top: 302px;
    width: var(--inner-width);
    height: 100%;
  }
  .banner-title {
    font-size: 32px;
  }
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
    height: 48px;
    padding: 0 32px 0 44px;
    border-style: solid;
    border-width: 1px;
    border-image-source: linear-gradient(to bottom, #dd714e 0%, #620 100%);
    border-image-slice: 1;
    background-image: linear-gradient(to right, #620 0%, #f40 51%, #620 100%);
    font-weight: 700;
    font-size: 16px;
    box-sizing: border-box;

    &::after {
      content: '';
      display: block;
      width: 16px;
      height: 16px;
      margin-left: 4px;
      background: url('~@/assets/img/desktop/banner-mirage/icon-link-arrow.webp') no-repeat 0 0 / 100%;
    }
  }
  .is-mobile & {
    --banner-height: 400px;
    --inner-width: 320px;

    background-image: url('~@/assets/img/mobile/banner-mirage/bg-banner-open.webp'), linear-gradient(to bottom, #784237 0%, #96593d 39%, #1b1e27 56%, #0c2532 73%), linear-gradient(to bottom, #180b14, #180b14);
    text-align: center;

    .banner-mirage__inner {
      padding-top: 212px;
    }
    .link {
      padding: 0 12px 0 24px;

      &::after {
        background-image: url('~@/assets/img/mobile/banner-mirage/icon-link-arrow.webp');
      }
    }
  }
}
</style>
