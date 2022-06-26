<template>
  <div class="banner-nft-main">
    <div class="banner-nft-main__inner">
      <h2 class="bi-nft">NFT</h2>
      <p class="message">CHARACTER NFT GRAND OPEN!</p>
      <router-link to="/nft/list" class="link">Character NFT</router-link>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  name: 'NftMain',
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
  },
  mounted() {
    setTimeout(() => {
      document.documentElement.classList.add('init--banner-nft-main');
    }, 10);
    setTimeout(() => {
      if (!document.querySelector('#videoBgCollectible')) {
        return;
      }
      const video = document.querySelector('#videoBgCollectible');
      video.play();
    }, 1000);
  },
  destroyed() {
    document.documentElement.classList.remove('init--banner-nft-main');
  },
});
</script>

<style lang="scss" scoped>
.banner-nft-main {
  --banner-height: 460px;
  --inner-width: 640px;

  height: var(--banner-height);
  line-height: normal;
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-size: auto 100%;
  background-image: url('~@/assets/img/desktop/banner-nft/bg-banner.webp'), linear-gradient(to bottom, #000 0%, #1b0036 100%);
  color: #fff;
  font-weight: 600;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: var(--inner-width);
    margin: 0 auto;
    height: 100%;
  }
  .bi-nft {
    margin-bottom: 16px;
    width: 225px;
    height: 96px;
    font-size: 0;
    background: url('~@/assets/img/desktop/banner-nft/bi-banner.webp') no-repeat 50% 0 / auto 100%;
  }
  .message {
    font-size: 40px;
  }
  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 60px;
    height: 48px;
    margin-top: 40px;
    padding: 0 20px;
    border-style: solid;
    border-width: 1px;
    border-image-source: linear-gradient(to bottom, #ff4bac 0%, #89005a 100%);
    border-image-slice: 1;
    background-image: linear-gradient(103deg, #140000 0%, #320030 51%, #140000 100%);
    font-size: 20px;
    box-sizing: border-box;

    &::after {
      content: '';
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-left: 4px;
      background: url('~@/assets/img/desktop/banner-nft/icon-link-arrow.webp') no-repeat 0 0 / 100%;
    }
  }
  .is-mobile & {
    --banner-height: 400px;
    --inner-width: 320px;

    background-image: url('~@/assets/img/mobile/banner-nft/bg-banner.webp'), linear-gradient(to bottom, #000 0%, #1b0036 100%);
    text-align: center;

    .bi-nft {
      width: 151px;
      height: 64px;
      margin-bottom: 9px;
      background-image: url('~@/assets/img/mobile/banner-nft/bi-banner.webp');
    }
    .message {
      font-size: 32px;
    }
    .link {
      margin-top: 24px;

      &::after {
        background-image: url('~@/assets/img/mobile/banner-nft/icon-link-arrow.webp');
      }
    }
  }

  .init--banner-nft-main & {
    .wrap-video {
      .video {
        opacity: 1;
      }
    }
  }
}
</style>
