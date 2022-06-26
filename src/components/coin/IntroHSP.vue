<template>
  <div
    id="IntroHSP"
    ref="IntroHSP"
    class="intro-banner intro-hsp"
    :class="{ 'intro-hsp--open': isOpen }"
  >
    <div class="intro-hsp__inner">
      <div class="logo">
        <img src="~@/assets/img/common/intro-hsp-banner/img-icon-hydra.webp" width="96" alt="">
      </div>
      <div class="cont">
        <h3 class="title" v-html="$t('t.notice.hsp-open')"></h3>
        <p class="sub-caution" v-html="$t('s.notice.hsp-open.caution1')"></p> 
        <a href="https://www.xdraco.com/hsp" class="link" v-html="$t('s.notice.hsp-open.link')"></a>
      </div>
      <button type="button" class="btn-close" @click="closeMessage">close layer</button>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'IntroHSP',
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
      sessionStorage.setItem(`read-intro-hsp`, true);
      this.isOpen = false;
    },
  },
  mounted() {
    const showMessage = sessionStorage.getItem(`read-intro-hsp`);

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
.intro-hsp {
  --btn-close-size: 28px;
  --font-size: 14px;
  --inner-width: 960px;

  overflow: hidden;
  position: absolute;
  top: var(--header-height);
  left: 0;
  z-index: 2;
  width: 100%;
  max-height: 0;
  background-color: #ffdd00;
  line-height: 1.29;
  font-size: var(--font-size);
  color: #000;
  transition: max-height 400ms ease-out;

  &__inner {
    display: flex;
    position: relative;
    margin: 0 auto;
    padding: 27px 40px 28px 124px;
    max-width: var(--inner-width);
    box-sizing: border-box;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -139px;
      width: 377px;
      height: 143px;
      background: url('~@/assets/img/common/intro-hsp-banner/bg-intro-hsp.webp') 0 0 / 100% no-repeat;
    }

    .logo {
      display: none;

      img {
        vertical-align: top;
      }
    }

    .cont {
      position: relative;
    }

    .title {
      margin-bottom: 4px;
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
        background-color: #000;
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
    .link {
      display: inline-block;
      position: relative;
      text-decoration: none !important;
      color: #000 !important;
      margin-top: 4px;
      border-bottom: 1px solid #000;

      &::after {
        content: '';
        display: inline-block;
        margin-left: 4px;
        width: 10px;
        height: 10px;
        background: url('~@/assets/img/common/intro-hsp-banner/icon-link-arrow.webp') 0 0 / 100% auto no-repeat;
      }
    }

    em {
      font-style: normal;
      font-weight: 700;
    }
  }
  .sub-caution {
    color: rgba(0, 0, 0, 0.75);
  }

  &.intro-hsp--open {
    max-height: 300px;
  }

  .is-mobile & {
    &__inner {
      column-gap: 16px;

      &::before {
        left: 0;
        width: 261px;
        height: 378px;
        background: #ffdd00 url('~@/assets/img/common/intro-hsp-banner/bg-m-intro-hsp.webp') 0 -78px / 261px 378px no-repeat;
      }
    }

    &.intro-hsp--open {
      max-height: 480px;
    }

    .intro-hsp__inner {
      padding: 24px 24px 42px;
      max-width: calc(var(--intro-draco-maxwidth) + 30px);

      .logo {
        display: block;
        position: relative;
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

      .link {
        margin-top: 8px;
        border-bottom: 0px;
      }
    }
  }
}
</style>
