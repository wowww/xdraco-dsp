<template>
  <div class="banner-drain">
    <div class="banner-drain__inner">
      <h2 class="bi-drain" v-html="$t('t.drain-teaser.banner')"></h2>
      <p class="message" v-html="$t('s.drain-teaser.banner.date')"></p>
      <a :href="getDracoHost + '/drain'" class="link" target="_blank">{{ $t('s.drain-teaser.banner.link') }}</a>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  name: 'DrainMain',
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
.banner-drain {
  --banner-height: 460px;
  --inner-width: 660px;

  height: var(--banner-height);
  line-height: normal;
  background: #090041 url('~@/assets/img/desktop/banner-drain/bg-banner.webp') 50% 0 / auto 100% no-repeat;
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
  .bi-drain {
    margin-top: 235px;
    width: 579px;
    height: 58px;
    font-size: 0;
    background: url('~@/assets/img/desktop/banner-drain/bi-banner.webp') no-repeat 50% 0 / 100% auto;
  }
  .message {
    margin-top: 6px;
    font-size: 24px;
    line-height: 1.33;
  }
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
    height: 48px;
    margin-top: 22px;
    padding: 0 15px;
    border-style: solid;
    border-width: 1px;
    border-image-source: linear-gradient(to bottom, #ff33c6 0%, #9001e8 100%);
    border-image-slice: 1;
    background-image: linear-gradient(102deg, #11002e 0%, #4f005c 50%, #0f002e 100%);
    font-size: 20px;
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

    background-image: url('~@/assets/img/mobile/banner-drain/bg-banner.webp');
    text-align: center;

    .bi-drain {
      margin-top: 190px;
      width: 285px;
      height: 81px;
      background-image: url('~@/assets/img/mobile/banner-drain/bi-banner.webp');
      background-size: auto 100%;
    }
    .message {
      display: none;
    }
    .link {
      margin-top: 32px;

      &::after {
        background-image: url('~@/assets/img/mobile/banner-drain/icon-link-arrow.webp');
      }
    }
  }
}
</style>
