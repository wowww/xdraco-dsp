<template>
  <div
    id="introTrinity"
    ref="introTrinity"
    class="intro-trinity"
    :class="{ 'intro-trinity--open': isOpen }"
  >
    <div class="intro-trinity__inner">
      <h3 class="title">{{ $t('t.intro-trinity.title') }}</h3>
      <p>{{ $t('s.intro-trinity.begin')}}</p>
      <p>{{ $t('s.intro-trinity.time.refresh')}}</p>
      <button type="button" class="btn-close" @click="closeMessage">close layer</button>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'IntroTrinity',
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
      sessionStorage.setItem(`read-intro-trinity`, true);
      this.isOpen = false;
    },
  },
  mounted() {
    const showMessage = sessionStorage.getItem(`read-intro-trinity`);

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

<style lang="scss" scoped>
.intro-trinity {
  --btn-close-size: 28px;
  --font-size: 14px;

  overflow: hidden;
  position: absolute;
  top: var(--header-height);
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0;
  background-color: #8200dc;
  line-height: 1.4;
  font-size: var(--font-size);
  color: rgba(#fff, 0.75);
  transition: height 400ms ease-out;

  &__inner {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    position: relative;
    margin: 0 auto;
    padding-top: 32px;
    max-width: var(--price-draco-maxwidth);
    height: 100%;
    box-sizing: border-box;

    .title {
      display: flex;
      align-content: center;
      gap: 10px;
      margin-bottom: 12px;
      line-height: 1.2;
      color: #fff;
      font-weight: 700;
      font-size: calc(var(--font-size) + 6px) !important;

      &::before {
        content: '';
        display: block;
        width: 22px;
        height: 21px;
        background: url('~@/assets/img/desktop/draco/icon-trinity.webp') 0 0 / cover no-repeat;
      }
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
  }

  &.intro-trinity--open {
    height: 152px;
  }

  .is-mobile & {
    .intro-trinity__inner {
      padding-right: 24px;
      padding-left: 24px;
      max-width: calc(var(--intro-draco-maxwidth) + 30px);

      .title {
        margin-bottom: 16px;
      }
      .btn-close {
        top: 24px;
        right: 20px;
        width: calc(var(--btn-close-size) + 4px);
        height: calc(var(--btn-close-size) + 4px);
      }
    }
    &.intro-trinity--open {
      height: 216px;
      padding-bottom: 10px;
      box-sizing: content-box;
    }
  }
}
</style>
