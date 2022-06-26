<template>
  <div class="asset">
    <div class="wrap-item-asset">
      <div class="asset-info-box">
        <img src="~@/assets/img/common/nft-detail/icon-coin.webp" width="40" alt="image" />
        <div class="asset-desc">
          <p class="asset-name">Copper</p>
          <p class="asset-data">21,234,567</p>
        </div>
      </div>
      <div class="asset-info-box">
        <img src="~@/assets/img/common/nft-detail/icon-spirit.webp" width="40" alt="image" />
        <div class="asset-desc">
          <p class="asset-name">Energy</p>
          <p class="asset-data">1,340,567</p>
        </div>
      </div>
      <div class="asset-info-box">
        <img src="~@/assets/img/common/nft-detail/icon-blackIron.webp" width="40" alt="image" />
        <div class="asset-desc">
          <p class="asset-name">Darksteel</p>
          <p class="asset-data">1,234,567</p>
        </div>
      </div>
      <div class="asset-info-box">
        <img src="~@/assets/img/common/nft-detail/icon-skillstone.webp" width="40" alt="image" />
        <div class="asset-desc">
          <p class="asset-name">Dragon jade</p>
          <p class="asset-data">567</p>
        </div>
      </div>
      <div class="asset-info-box">
        <img src="~@/assets/img/common/nft-detail/icon-speedup.webp" width="40" alt="image" />
        <div class="asset-desc">
          <p class="asset-name">Speed-ups</p>
          <p class="asset-data">34,567</p>
        </div>
      </div>
      <div class="asset-info-box">
        <img src="~@/assets/img/common/nft-detail/icon-guildcoin.webp" width="40" alt="image" />
        <div class="asset-desc">
          <p class="asset-name">Ancient Coins</p>
          <p class="asset-data">94,567</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  components: {
    // DspNav,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
});
</script>

<style lang="scss"></style>
