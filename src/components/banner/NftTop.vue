<template>
  <div class="nft-top-banner">
    <div class="nft-top-banner__inner">
      <h2 class="bi-banner">NFT</h2>
      <p class="bi-headline">My Character, Your Legacy</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  name: 'NftTop',
  components: {
    // DspNav,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
  setup() {
    onBeforeMount(() => {
      //
    });
  },
});
</script>

<style lang="scss" scoped>
.nft-top-banner {
  width: 100%;
  height: 320px;
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: 50% 0;
  background-image: url('~@/assets/img/common/banner/nft-top/bg-banner-desktop.webp'), linear-gradient(to bottom, #000 0%, #1b0036 100%);
  color: #fff;
  line-height: normal;

  &__inner {
    display: flex;
    align-items: center;
    flex-flow: column wrap;
    margin: 0 auto;
    padding-top: 159px;
    width: var(--section-inner-width);
    height: 100%;
  }

  .bi-banner {
    width: 132px;
    height: 56px;
    font-size: 0;
    background: url('~@/assets/img/common/banner/nft-top/bi-banner.webp') no-repeat 0 0 / 100%;
  }

  .bi-headline {
    margin-top: 8px;
    font-size: 32px;
    font-weight: 600;
  }

  .is-mobile & {
    height: 240px;
    background-image: url('~@/assets/img/common/banner/nft-top/bg-banner-mobile.webp'),
      radial-gradient(circle at 38% 50%, rgba(2, 2, 25, 0), #020219 35%);

    &__inner {
      padding-top: 117px;
      width: 100%;
      max-width: 960px;
    }
    .bi-banner {
      width: 104px;
      height: 44px;
    }
    .bi-headline {
      margin-top: 0;
      font-size: 16px;
    }
  }
}
</style>
