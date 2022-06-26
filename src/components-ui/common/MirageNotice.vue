<template>
  <div
    id="mirageNotice"
    ref="mirageNotice"
    class="mirage-notice"
    :class="{ 'mirage-notice--open': isOpen, 'mirage-notice--indetail': inDetail, 'is-mobile': isMobile }"
  >
    <div class="mirage-notice__inner">
      <h3 class="mirage-notice-title" v-html="$t('t.mirage-notice.0325')"></h3>
      <p class="desc" v-html="$t('s.mirage-notice.0325')"></p>
      <button type="button" class="btn-close" @click="closeMessage">close layer</button>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';
import { useMobile } from '@/composables/common';

export default defineComponent({
  name: 'MirageNotice',
  props: {
    inDetail: {
      type: Boolean,
      required: false,
    },
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    isOpen: false,
  }),
  methods: {
    closeMessage() {
      if (process.env.VUE_APP_DRACO_PROFILE !== 'production') {
        sessionStorage.setItem(`read-mirage-open-notice-0325-${this.inDetail ? 'detail' : 'base'}`, true);
      } else {
        localStorage.setItem(`read-mirage-open-notice-0325-${this.inDetail ? 'detail' : 'base'}`, true);
      }
      this.isOpen = false;
    },
  },
  mounted() {
    const showMessage =
      process.env.VUE_APP_DRACO_PROFILE !== 'production'
        ? sessionStorage.getItem(`read-mirage-open-notice-0325-${this.inDetail ? 'detail' : 'base'}`)
        : localStorage.getItem(`read-mirage-open-notice-0325-${this.inDetail ? 'detail' : 'base'}`);

    if (!showMessage) {
      setTimeout(() => {
        this.isOpen = !this.isOpen;
      }, 1000);
    }
  },
  setup() {
    return {
      ...useI18n(),
      ...useMobile(),
    };
  },
});
</script>
<style lang="scss">
.mirage-notice {
  --btn-close-size: 28px;
  --font-size: 14px;
  --inner-width: 1200px;

  overflow: hidden;
  width: 100%;
  height: 0;
  line-height: 1.29;
  font-size: var(--font-size);
  color: #000;
  letter-spacing: -0.14px;
  background-color: #fe0;
  background-position-y: -408px;
  transition: height 400ms ease-out;

  &__inner {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    padding: 24px 40px 16px 64px;
    max-width: var(--inner-width);
    box-sizing: border-box;
    row-gap: 4px;
    background: url('~@/assets/img/common/mirage-notice/logo-notice.webp') 0 24px / 48px 56px no-repeat;

    .mirage-notice-title {
      font-size: 16px;
      line-height: 1.13;
      letter-spacing: -0.16px;
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

    .desc {
      color: rgba(0, 0, 0, 0.6);
      max-width: 960px;
      em {
        font-style: normal;
        font-weight: 500;
        color: #f00;
      }

      strong {
        color: #f00;
      }
    }
  }

  &.mirage-notice--open {
    height: 106px;
  }

  &.mirage-notice--indetail {
    --inner-width: 848px;
    margin-bottom: 24px;
  }

  .is-mobile & {
    --btn-close-size: 24px;

    position: relative;
    margin-bottom: 36px;

    .mirage-notice__inner {
      position: static;
      row-gap: 8px;
      padding-left: 96px;
      padding-right: 64px;
      background-position-x: 24px;
      // max-width: calc(var(--intro-draco-maxwidth) + 30px);
      overflow-y: auto;
      height: 100%;

      .btn-close {
        right: 24px;
      }
    }

    &.mirage-notice--open {
      height: 182px;
    }

    &.mirage-notice--indetail {
      margin-bottom: 0;
    }
  }
}

@media (max-width: 1080px) {
  .mirage-notice {
    &.is-mobile {
      &.mirage-notice--open {
        height: 120px;
      }
    }
  }
}

@media (max-width: 752px) {
  .mirage-notice {
    &.is-mobile {
      &.mirage-notice--open {
        height: 142px;
      }
    }
  }
}

@media (max-width: 620px) {
  .mirage-notice {
    &.is-mobile {
      &.mirage-notice--open {
        height: 152px;
      }
    }
  }
}

@media (max-width: 514px) {
  .mirage-notice {
    &.is-mobile {
      &.mirage-notice--open {
        height: 172px;
      }
    }
  }
}

@media (max-width: 480px) {
  .mirage-notice {
    &.is-mobile {
      &.mirage-notice--open {
        height: 172px;
      }
    }
  }
}

@media (max-width: 375px) {
  .mirage-notice {
    &.is-mobile {
      &.mirage-notice--open {
        height: 194px;
      }
    }
  }
}

@media (max-width: 320px) {
  .mirage-notice {
    &.is-mobile {
      &.mirage-notice--open {
        height: 260px;
      }
    }
  }
}
</style>
