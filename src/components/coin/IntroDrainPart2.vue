<template>
  <div
    id="IntroDrain"
    ref="IntroDrain"
    class="intro-banner intro-drain"
    :class="{ 'intro-drain--open': isOpen }"
  >
    <div class="intro-drain__inner">
      <div class="logo">
        <img src="~@/assets/img/common/intro-drain-banner/symbol-hydra.webp" width="96" alt="HYDRA">
      </div>
      <div class="cont">
        <h3 class="title">DRAIN : Be Hydrated</h3>
        <p class="desc">The <strong>Mystery Trader</strong> has come to procure HYDRA in preparation for the future trade medium, <strong>WEMIX-HYDRA Swap.</strong><br>Meet the <strong>Mystery Trader</strong> on WEMIX DEX beginning on <em>Feb. 16th, 2022 06:00 UTC+8</em></p>
        <router-link to="/drain" class="link">Learn more</router-link>
      </div>
      <button type="button" class="btn-close" @click="closeMessage">close layer</button>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'IntroDrainPart2',
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
      sessionStorage.setItem(`read-intro-drain`, true);
      this.isOpen = false;
    },
  },
  mounted() {
    const showMessage = sessionStorage.getItem(`read-intro-drain`);

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
.intro-drain {
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
  line-height: 1.29;
  font-size: var(--font-size);
  color: #000;
  background: #6df url('~@/assets/img/common/intro-drain-banner/bg-intro-drain-part2.webp') calc(50% - 426px) -182px / 520px auto no-repeat;
  transition: max-height 400ms ease-out;

  &__inner {
    display: flex;
    position: relative;
    margin: 0 auto;
    padding: 28px 0;
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
    .desc {
      font-size: 14px;
      color: rgba(#000, .75);
      opacity: 1;

      strong {
        font-weight: 700;
        color: #000;
      }
      em {
        font-weight: 700;
        color: rgba(#f00, .75);
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
        background-color: #000;
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
      color: #000;
      margin-top: 8px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 1px;
        background-color: #000;
        transform: translateX(-100%);
        transition: transform 0.2s linear;
      }

      &::after {
        content: '';
        display: inline-block;
        margin-left: 4px;
        width: 10px;
        height: 10px;
        background: url('~@/assets/img/common/intro-drain-banner/icon-link-arrow.webp') 0 0 / 100% auto no-repeat;
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
  .sub-caution {
    line-height: 1.286;
    font-size: 14px;
    color: #000;

    dt {
      display: block;
      font-weight: 700;
    }
    &:first-of-type {
      margin-top: 0;
    }
    dd {
      em {
        font-weight: bold;
      }
    }
  }

  &.intro-drain--open {
    max-height: 300px;
  }

  .is-mobile & {
    background-position: -404px -366px;

  &__inner {
    column-gap: 16px;
  }

    &.intro-drain--open {
      max-height: 480px;
    }

    .intro-drain__inner {
      padding: 24px;
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

      .link {
        border-bottom: 0px;
      }
    }

    @media screen and (min-width: 550px) {
      background-position-x: calc(50% - 198px);
    }
  }
}
</style>
