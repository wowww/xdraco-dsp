<template>
  <div class="wrap-currency-notice" :class="{ 'wrap-currency-notice--open': isOpen, 'wrap-currency-notice--indetail': inDetail }">
    <div class="wrap-currency-notice__inner">
      <strong>DRAIN: Hydration Report</strong>
      <p v-html="t('s.coin.drain.hydration-report.notice')"></p>
      <router-link to="/coin/drain" class="more">
        Learn More
        <img src="~@/assets/img/common/icon-arrow@2x.webp" height="9" alt="Learn More" class="ml-2" />
      </router-link>
      <button type="button" @click="closeMessage" class="btn-close">close</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import MobileDetect from 'mobile-detect';

import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'CurrencyNotice',
  components: {
    //
  },
  props: {
    inDetail: {
      type: Boolean,
      required: false,
    },
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
      if (process.env.VUE_APP_DRACO_PROFILE !== 'production') {
        sessionStorage.setItem(`currency-notice-${this.inDetail ? 'detail' : 'base'}-v3`, true);
      } else {
        localStorage.setItem(`currency-notice-${this.inDetail ? 'detail' : 'base'}-v3`, true);
      }
      this.isOpen = false;
    },
  },
  mounted() {
    const showMessage =
      process.env.VUE_APP_DRACO_PROFILE !== 'production'
        ? sessionStorage.getItem(`currency-notice-${this.inDetail ? 'detail' : 'base'}-v3`)
        : localStorage.getItem(`currency-notice-${this.inDetail ? 'detail' : 'base'}-v3`);
    if (!showMessage) {
      setTimeout(() => {
        // document.documentElement.classList.add('init--nft-intro-wallet');
        // this.$refs.introNftWallet.classList.add('wrap-currency-notice--open');
        this.isOpen = !this.isOpen;
      }, 1000);
    }
  },
  destroyed() {
    // document.documentElement.classList.remove('init--nft-intro-wallet');
  },
  setup() {
    return {
      ...useI18n(),
    };
  },
});
</script>

<style lang="scss">
.wrap-currency-notice {
  --btn-close-size: 28px;
  --font-size: 14px;

  overflow: hidden;
  width: 100%;
  height: 0;
  line-height: normal;
  font-size: var(--font-size);
  color: #000;
  transition: height 400ms ease-out;
  z-index: 10;
  background: #c5dcff url('~@/assets/img/common/intro-drain-banner/bg-intro-drain.webp') calc(50% - 550px) calc(50% - 12px) / 960px auto no-repeat;

  &__inner {
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    position: relative;
    margin: 0 auto;
    padding: 20px 20px 20px 126px;
    max-width: var(--section-inner-width);
    height: 100%;
    box-sizing: border-box;

    > strong {
      display: flex;
      align-items: center;
      column-gap: 4px;
      min-height: 24px;
      font-size: 20px;

      /*
      &::before {
        content: '';
        align-self: stretch;
        flex-shrink: 0;
        margin-top: 4px;
        width: 16px;
        height: 16px;
        background: url('~@/assets/img/common/currency-notice/ico-exclaim.webp') 0 0 / cover no-repeat;
      }
       */
    }

    > p {
      position: relative;
      font-size: 14px;
      line-height: 18px;
      color: rgba($color: #000, $alpha: 0.75);
      max-width: 800px;
      padding-top: 8px;
      padding-bottom: 8px;

      &::before {
        content: '';
        position: absolute;
        top: -26px;
        left: -126px;
        width: 96px;
        height: 96px;
        background: url('~@/assets/img/common/img-coin-hydra@2x.webp') 0 0 / cover no-repeat;
      }

      em {
        color: #000;
        font-weight: 700;

        &.date {
          color: red;
        }
      }
    }

    .more {
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 0.75);
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

    .exchange-market & {
      padding: 24px 24px 24px 144px;
      row-gap: 8px;

      > strong {
        padding-right: 32px;
      }

      .btn-close {
        right: calc(var(--btn-close-size) - 4px);
      }
    }
  }

  &.wrap-currency-notice--open {
    height: 152px;
  }

  &.wrap-currency-notice--indetail {
    height: 130px;
  }

  .is-mobile & {
    background-position: -404px -366px;

    .wrap-currency-notice__inner {
      padding: 24px;
      row-gap: 16px;
      max-width: 640px;
      overflow: auto;

      > strong {
        min-height: auto;
        padding-right: 32px;
        line-height: 1.14;

        &::before {
          margin-top: 0;
        }
      }

      > p {
        padding-left: 118px;
        min-height: 64px;

        &::before {
          top: 4px;
          left: 0;
        }
      }

      .more {
        margin-top: 12px;
        padding-left: 118px;
      }
      .btn-close {
        top: calc(var(--btn-close-size) - 12px);
        right: calc(var(--btn-close-size) - 4px);

        &::before,
        &::after {
          left: 4px;
          width: 65%;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .wrap-currency-notice {
    &.wrap-currency-notice--open {
      height: 220px;
    }
  }
}

@media (max-width: 586px) {
  .wrap-currency-notice {
    &.wrap-currency-notice--open {
      height: 220px;
    }
  }
}

@media (max-width: 360px) {
  .wrap-currency-notice {
    &.wrap-currency-notice--open {
      height: 240px;
    }
  }
}

@media (max-width: 320px) {
  .wrap-currency-notice {
    &.wrap-currency-notice--open {
      height: 315px;
    }
  }
}
</style>
