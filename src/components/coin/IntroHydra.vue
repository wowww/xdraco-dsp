<template>
  <div
    id="introHydra"
    ref="introHydra"
    class="intro-banner intro-hydra"
    :class="{ 'intro-hydra--open': isOpen }"
  >
    <div class="intro-hydra__inner">
      <div class="logo">
        <img src="~@/assets/img/desktop/draco/logo-hydra.webp" width="96" alt="">
      </div>
      <div class="cont">
        <h3 class="title">{{ $t('t.hydra-teaser.seoul-spooning') }}</h3>
        <p v-html="$t('s.hydra-teaser.layer.content')"></p> 
        <router-link to="/hydra" class="link">{{ $t('s.hydra-teaser.layer.link') }}</router-link>
      </div>
      <button type="button" class="btn-close" @click="closeMessage">close layer</button>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'introHydra',
  components: {
    //
  },
  props: {
    //
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    md: new MobileDetect(window.navigator.userAgent),
    isOpen: false,
  }),
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
  },
  methods: {
    closeMessage() {
      sessionStorage.setItem(`read-intro-hydra`, true);
      this.isOpen = false;
    },
  },
  mounted() {
    const showMessage = sessionStorage.getItem(`read-intro-hydra`);

    if (!showMessage) {
      setTimeout(() => {
        this.isOpen = !this.isOpen;
      }, 1000);
    }
  },
  destroyed() {
    document.documentElement.classList.remove('init--nft-intro-wallet');
  },
});
</script>

<style lang="scss">
.intro-hydra {
  --btn-close-size: 28px;
  --font-size: 14px;
  --inner-width: 960px;

  overflow: hidden;
  position: absolute;
  top: var(--header-height);
  left: 0;
  z-index: 1;
  width: 100%;
  max-height: 0;
  line-height: 1.29;
  font-size: var(--font-size);
  color: #fff;
  background: #0022bb url('~@/assets/img/common/intro-hydra-banner/bg-intro-hydra.webp') calc(50% - 419px) calc(50% - 1px) / 960px auto no-repeat;
  background-position-y: -405px;
  transition: max-height 400ms ease-out;

  &__inner {
    display: flex;
    position: relative;
    margin: 0 auto;
    padding: 28px 40px 28px 0;
    max-width: var(--inner-width);
    box-sizing: border-box;
    column-gap: 16px;

    .logo {
      img {
        vertical-align: top;
      }
    }

    .title {
      margin-bottom: 8px;
      line-height: 1.2;
      font-weight: 700;
      font-size: calc(var(--font-size) + 6px) !important;
    }

    .btn-close {
      position: absolute;
      top: calc(var(--btn-close-size) - 4px);
      right: 0;
      width: var(--btn-close-size);
      height: var(--btn-close-size);
      line-height: 0;
      font-size: 0;

      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #fff;
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }

    p {
      opacity: 0.75;
    }

    .link {
      display: inline-block;
      position: relative;
      overflow: hidden;
      text-decoration: none;
      color: #fff;
      margin-top: 8px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background-color: #fff;
        transform: translateX(-100%);
        transition: transform 0.2s linear;
      }

      &::after {
        content: '';
        display: inline-block;
        margin-left: 4px;
        width: 10px;
        height: 10px;
        background: url('~@/assets/img/desktop/draco/icon-link-arrow.webp') 0 0 / 100% auto no-repeat;
      }

      &:hover {
        &::before {
          transform: translateX(0);
        }
      }
    }

    em {
      font-style: normal;
      font-weight: 700;
    }
  }

  &.intro-hydra--open {
    max-height: 300px;
  }

  .is-mobile & {
    background-position: -394px -366px;

    &.intro-hydra--open {
      max-height: 480px;
    }

    .intro-hydra__inner {
      padding: 24px 24px 42px;
      max-width: calc(var(--intro-draco-maxwidth) + 30px);

      .logo {
        padding-top: 40px;
      }

      .title {
        margin-left: -112px;
        margin-bottom: 16px;
        padding-right: 30px;
      }

      .btn-close {
        top: 20px;
        right: 20px;
        width: calc(var(--btn-close-size) + 4px);
        height: calc(var(--btn-close-size) + 4px);
      }
    }

    @media screen and (min-width: 550px) {
      background-position-x: calc(50% - 190px);
    }
  }
}
</style>
