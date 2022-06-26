<template>
  <div class="wrap-spirit">
    <v-tabs v-model="tabSpirit">
      <v-tab class="tab-spirit-item">
        <span>Deck1</span>
      </v-tab>
      <v-tab class="tab-spirit-item">
        <span>Deck2</span>
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
      <v-tab class="tab-spirit-item">
        <span>보유정령</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items class="wrap-tabs-item" v-model="tabSpirit">
      <v-tab-item class="wrap-item-circle">
        <ul class="list-item">
          <li class="uncommon">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@character01.webp" width="72" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Bunny Guru Hoppy</span>
              <span class="category">Forest Spirit</span>
            </div>
          </li>
          <li class="rare">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@character02.webp" width="72" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Little Azure Dragon Horyong</span>
              <span class="category">Wind Spirit</span>
            </div>
          </li>
          <li class="epic">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@character03.webp" width="72" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Little Azure Dragon</span>
              <span class="category">Wind Spirit</span>
            </div>
          </li>
          <li class="legendary">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@character04.webp" width="72" alt="" />
                <span class="tier-badge">IV</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Little Azure Dragon Horyong</span>
              <span class="category">Wind Spirit</span>
            </div>
          </li>
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
          </li>
        </ul>
      </v-tab-item>

      <v-tab-item class="wrap-item-circle">
        <ul class="list-item">
          <li class="common">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@character01.webp" width="72" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Bunny</span>
            </div>
          </li>
          <li class="uncommon">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@character02.webp" width="72" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Little Azure Dragon Horyong Little Azure Dragon Horyong Little Azure Dragon Horyong</span>
              <span class="category">Wind Spirit</span>
            </div>
          </li>
          <li class="rare">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@character03.webp" width="72" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Little Azure Dragon</span>
              <span class="category">Wind Spirit Wind Spirit Wind Spirit Wind Spirit</span>
            </div>
          </li>
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
          </li>
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
          </li>
        </ul>
      </v-tab-item>

      <v-tab-item class="wrap-item-circle">
        <ul class="list-item">
          <li class="common">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@character01.webp" width="72" alt="" />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Bunny Guru Hoppy</span>
              <span class="category">Forest Spirit</span>
            </div>
          </li>
          <li class="uncommon">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@character02.webp" width="72" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Little Azure Dragon Horyong</span>
              <span class="category">Wind Spirit</span>
            </div>
          </li>
          <li class="rare">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@character03.webp" width="72" alt="" />
              </span>
            </div>
            <div class="desc">
              <span class="name">Little Azure Dragon</span>
              <span class="category">Wind Spirit</span>
            </div>
          </li>
          <li class="epic">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@character04.webp" width="72" alt="" />
                <span class="tier-badge">IV</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Little Azure Dragon Horyong</span>
              <span class="category">Wind Spirit</span>
            </div>
          </li>
          <li class="legendary">
            <div class="wrap-thumb">
              <span class="bg">
                <img src="@/assets/img/common/nft-detail/@character04.webp" width="72" alt="" />
                <span class="tier-badge">IV</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Little Azure Dragon Horyong</span>
              <span class="category">Wind Spirit</span>
            </div>
          </li>
        </ul>
      </v-tab-item>
      <v-tab-item class="wrap-item-circle">
        <ul class="list-item">
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
          </li>
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
          </li>
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
          </li>
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
          </li>
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
          </li>
        </ul>
      </v-tab-item>
      <v-tab-item></v-tab-item>
      <v-tab-item class="wrap-item-square">
        <ul class="list-item">
          <li class="legendary">
            <img src="@/assets/img/common/nft-detail/@character01.webp" width="82" alt="" />
            <span class="tier">I</span>
            <span class="quantity">x10</span>
          </li>
          <li class="legendary">
            <img src="@/assets/img/common/nft-detail/@character02.webp" width="82" alt="" />
            <span class="tier">II</span>
          </li>
          <li class="common">
            <img src="@/assets/img/common/nft-detail/@character03.webp" width="82" alt="" />
            <span class="tier">II</span>
          </li>
          <li class="rare">
            <img src="@/assets/img/common/nft-detail/@character04.webp" width="82" alt="" />
            <span class="tier">II</span>
            <span class="quantity">x2</span>
          </li>
          <li class="rare">
            <img src="@/assets/img/common/nft-detail/@character04.webp" width="82" alt="" />
            <span class="tier">II</span>
            <span class="quantity">x2</span>
          </li>
          <li class="uncommon">
            <img src="@/assets/img/common/nft-detail/@character04.webp" width="82" alt="" />
            <span class="tier">II</span>
            <span class="quantity">x2</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@character04.webp" width="82" alt="" />
            <span class="tier">II</span>
            <span class="quantity">x2</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@character04.webp" width="82" alt="" />
            <span class="tier">II</span>
            <span class="quantity">x2</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@character04.webp" width="82" alt="" />
            <span class="tier">II</span>
            <span class="quantity">x2</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@character04.webp" width="82" alt="" />
            <span class="tier">I</span>
          </li>
          <li class="legendary">
            <img src="@/assets/img/common/nft-detail/@character04.webp" width="82" alt="" />
            <span class="tier">I</span>
          </li>
          <li class="legendary">
            <img src="@/assets/img/common/nft-detail/@character04.webp" width="82" alt="" />
            <span class="tier">II</span>
          </li>
          <li class="legendary">
            <img src="@/assets/img/common/nft-detail/@character04.webp" width="82" alt="" />
            <span class="tier">II</span>
            <span class="quantity">x10</span>
          </li>
          <li class="legendary">
            <img src="@/assets/img/common/nft-detail/@character04.webp" width="82" alt="" />
            <span class="tier">II</span>
            <span class="quantity">x10</span>
          </li>
          <li></li>
          <li></li>
        </ul>
      </v-tab-item>
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
    tabSpirit: null,
  }),
});
</script>

<style lang="scss"></style>
