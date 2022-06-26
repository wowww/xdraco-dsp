<template>
  <div class="banner-collectible">
    <div class="banner-collectible__inner">
      <h2 class="bi-collectible">Collectible</h2>
      <p class="message">Beyond Expectation. Beyond Game. Beyond MIR4.</p>
      <div class="wrap-button">
        <router-link to="/collectibles" class="btn btn-primary-collectible">Collectible Items</router-link>
      </div>
    </div>

    <div class="wrap-video">
      <video id="videoBgCollectible" class="video" loop muted playsinline>
        <!-- <source src="@/assets/video/desktop/bg-collectible-banner.mp4" type="video/mp4" v-if="!isMobile" />
        <source src="@/assets/video/mobile/bg-collectible-banner.mp4" type="video/mp4" v-if="isMobile" /> -->
        <source :src="staticHost + '/xdraco-dsp/video/desktop/bg-collectible-banner.mp4'" type="video/mp4" v-if="!isMobile" />
        <source :src="staticHost + '/xdraco-dsp/video/mobile/bg-collectible-banner.mp4'" type="video/mp4" v-if="isMobile" />
      </video>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  name: 'CollectibleMain',
  components: {
    //
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    md: new MobileDetect(window.navigator.userAgent),
    staticHost: process.env.VUE_APP_STATIC_HOST,
  }),
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
  },
  mounted() {
    setTimeout(() => {
      document.documentElement.classList.add('init--banner-collectible');
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
    document.documentElement.classList.remove('init--banner-collectible');
  },
});
</script>

<style lang="scss" scoped>
.banner-collectible {
  --banner-height: 460px;

  height: var(--banner-height);
  line-height: 1.2;
  font-size: 28px;
  background-color: #000;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgba(13, 13, 57, 0.66), rgba(2, 2, 25, 0.5));
  }
  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    height: 100%;
    font-weight: 700;
    color: #fff;
    text-align: center;
  }
  .bi-collectible {
    margin-bottom: 12px;
    width: 423px;
    height: 80px;
    font-size: 0;
    background: url('~@/assets/img/common/banner/collectible-main-banner/bi-collectibles.webp') 50% 0 / auto 100% no-repeat;
  }
  .wrap-button {
    margin-top: 36px;
    text-align: center;
  }
  .wrap-video {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;

    .video {
      // width: 1200px;
      height: 100%;
      opacity: 0;
      transition: opacity 800ms 0.2s ease-in;
    }
  }
  .is-mobile & {
    --banner-height: 400px;

    line-height: 1.6;
    font-size: 20px;

    .bi-collectible {
      width: calc(340px * 0.9);
      height: calc(65px * 0.9);
    }
  }

  .init--banner-collectible & {
    .wrap-video {
      .video {
        opacity: 1;
      }
    }
  }
}
</style>
