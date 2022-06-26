<template>
  <div class="wrap-spirit">
    <v-tabs v-model="tabMagicStone">
      <v-tab class="tab-spirit-item">
        <span>Deck 1</span>
      </v-tab>
      <v-tab class="tab-spirit-item">
        <span>Deck 2</span>
      </v-tab>
      <v-tab class="tab-spirit-item">
        <span>Deck 3</span>
      </v-tab>
      <v-tab class="tab-spirit-item">
        <span>Deck 4</span>
      </v-tab>
      <v-tab class="tab-spirit-item" disabled>
        <span>Deck 5</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items class="wrap-tabs-item" v-model="tabMagicStone">
      <v-tab-item class="wrap-item-circle size-md no-gutters">
        <ul class="list-item">
          <li class="uncommon">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="rare">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item06.webp" width="64" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="epic">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="legendary">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="common">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
            <div class="locked">
              <span>Locked</span>
            </div>
          </li>
          <li class="legendary">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
        </ul>
      </v-tab-item>
      <v-tab-item class="wrap-item-circle size-md no-gutters">
        <ul class="list-item">
          <li class="uncommon">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="rare">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item06.webp" width="64" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="epic">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="legendary">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="common">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
            <div class="locked">
              <span>Locked</span>
            </div>
          </li>
          <li class="legendary">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
        </ul>
      </v-tab-item>
      <v-tab-item class="wrap-item-circle size-md no-gutters">
        <ul class="list-item">
          <li class="uncommon">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="rare">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item06.webp" width="64" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="epic">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="legendary">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="common">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
            <div class="locked">
              <span>Locked</span>
            </div>
          </li>
          <li class="legendary">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
        </ul>
      </v-tab-item>
      <v-tab-item class="wrap-item-circle size-md no-gutters">
        <ul class="list-item">
          <li class="uncommon">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="rare">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item06.webp" width="64" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="epic">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="legendary">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="common">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
            <div class="locked">
              <span>Locked</span>
            </div>
          </li>
          <li class="legendary">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@item05.webp" width="64" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
        </ul>
      </v-tab-item>
      <v-tab-item class="wrap-item-circle size-md no-gutters"></v-tab-item>
    </v-tabs-items>
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
    tabMagicStone: null,
  }),
});
</script>

<style lang="scss"></style>
