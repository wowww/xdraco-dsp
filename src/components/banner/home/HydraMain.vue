<template>
  <div class="banner-hydra">
    <div class="banner-hydra__inner">
      <h2 class="bi-hydra">SEOUL SPOONING 2022</h2>
      <p class="message">{{ $t('s.banner.hydra-main.desc') }}</p>
      <a :href="getDracoHost + '/hydra'" class="link" target="_blank">HYDRA</a>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  name: 'HydraMain',
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
.banner-hydra {
  --banner-height: 460px;
  --inner-width: 660px;

  height: var(--banner-height);
  line-height: normal;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: auto 100%;
  background-image: url('~@/assets/img/desktop/banner-hydra/bg-banner.webp'), linear-gradient(to bottom, rgba(0, 17, 36, 0) 58%, #001124 100%);
  background-color: #003452;
  color: #fff;
  font-weight: 600;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: var(--inner-width);
    margin: 0 auto;
    height: 100%;
  }
  .bi-hydra {
    margin-top: 221px;
    width: 430px;
    height: 83px;
    font-size: 0;
    background: url('~@/assets/img/desktop/banner-hydra/bi-banner.webp') no-repeat 50% 0 / auto 100%;
  }
  .message {
    margin-top: -6px;
    max-width: 450px;
    line-height: 1.2;
    font-size: 18px;
    text-align: center;
  }
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
    height: 48px;
    margin-top: 15px;
    padding: 0 46px;
    border-style: solid;
    border-width: 1px;
    border-image-source: linear-gradient(to bottom, #33ceff 0%, #016ce8 100%);
    border-image-slice: 1;
    background-image: linear-gradient(105deg, #04002e 0%, #001a5c 50%, #04002e 100%);
    font-size: 20px;
    box-sizing: border-box;

    &::after {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-left: 4px;
      background: url('~@/assets/img/desktop/banner-hydra/icon-link-arrow.webp') no-repeat 0 0 / 100%;
    }
  }
  .is-mobile & {
    --banner-height: 400px;
    --inner-width: 320px;

    background-image: url('~@/assets/img/mobile/banner-hydra/bg-banner.webp'), linear-gradient(to bottom, rgba(0, 17, 36, 0) 54%, #001124 95%);
    text-align: center;

    .bi-hydra {
      margin-top: 213px;
      width: 295px;
      height: 57px;
      background-image: url('~@/assets/img/mobile/banner-hydra/bi-banner.webp');
    }
    .message {
      margin-top: 0;
      max-width: 300px;
      font-size: 14px;
    }
    .link {
      margin-top: 6px;

      &::after {
        background-image: url('~@/assets/img/mobile/banner-hydra/icon-link-arrow.webp');
      }
    }
  }
}
</style>
