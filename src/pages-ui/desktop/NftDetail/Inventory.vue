<template>
  <div class="wrap-inventory">
    <v-tabs v-model="tabInventory" class="tab-rounds">
      <v-tab>
        <span>All</span>
      </v-tab>
      <v-tab>
        <span>Equipment</span>
      </v-tab>
      <v-tab>
        <span>Material</span>
      </v-tab>
      <v-tab>
        <span>Magic Stone</span>
      </v-tab>
      <v-tab>
        <span>Spirit Stone</span>
      </v-tab>
      <v-tab>
        <span>Sundry</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items class="wrap-tabs-item" v-model="tabInventory">
      <v-tab-item class="wrap-item-square inventory">
        <div class="total"><em class="number">36</em> item</div>
        <ul class="list-item">
          <li class="legendary">
            <img src="@/assets/img/common/nft-detail/@item01.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">I</span>
            <span class="quantity">x10</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@item02.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">II</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">III</span>
          </li>
          <li class="rare">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">IV</span>
            <span class="quantity">x10</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">III</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">III</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">III</span>
            <span class="quantity">x10</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">III</span>
            <span class="quantity">x10</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">III</span>
            <span class="quantity">x10</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">III</span>
            <span class="quantity">x10</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">III</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">III</span>
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="wrap-btn">
          <button type="button" class="btn">VIEW MORE</button>
        </div>
      </v-tab-item>
      <v-tab-item class="wrap-item-square inventory">
        <div class="total"><em class="number">3</em> item</div>
        <ul class="list-item">
          <li class="legendary">
            <img src="@/assets/img/common/nft-detail/@item01.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">I</span>
            <span class="quantity">x10</span>
          </li>
          <li class="epic">
            <img src="@/assets/img/common/nft-detail/@item02.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">II</span>
          </li>
          <li class="rare">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">III</span>
          </li>
        </ul>
        <div class="wrap-btn">
          <button type="button" class="btn">VIEW MORE</button>
        </div>
      </v-tab-item>
      <v-tab-item class="wrap-item-square inventory">
        <div class="total"><em class="number">3</em> item</div>
        <ul class="list-item">
          <li class="common">
            <img src="@/assets/img/common/nft-detail/@item01.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">I</span>
            <span class="quantity">x10</span>
          </li>
          <li class="uncommon">
            <img src="@/assets/img/common/nft-detail/@item02.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">II</span>
          </li>
          <li class="rare">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">III</span>
          </li>
        </ul>
        <div class="wrap-btn">
          <button type="button" class="btn">VIEW MORE</button>
        </div>
      </v-tab-item>
      <v-tab-item class="wrap-item-square inventory">
        <div class="total"><em class="number">3</em> item</div>
        <ul class="list-item">
          <li class="common">
            <img src="@/assets/img/common/nft-detail/@item01.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">I</span>
            <span class="quantity">x10</span>
          </li>
          <li class="uncommon">
            <img src="@/assets/img/common/nft-detail/@item02.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">II</span>
          </li>
          <li class="rare">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">III</span>
          </li>
        </ul>
        <div class="wrap-btn">
          <button type="button" class="btn">VIEW MORE</button>
        </div>
      </v-tab-item>
      <v-tab-item class="wrap-item-square inventory">
        <div class="total"><em class="number">3</em> item</div>
        <ul class="list-item">
          <li class="common">
            <img src="@/assets/img/common/nft-detail/@item01.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">I</span>
            <span class="quantity">x10</span>
          </li>
          <li class="uncommon">
            <img src="@/assets/img/common/nft-detail/@item02.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">II</span>
          </li>
          <li class="rare">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">III</span>
          </li>
        </ul>
        <div class="wrap-btn">
          <button type="button" class="btn">VIEW MORE</button>
        </div>
      </v-tab-item>
      <v-tab-item class="wrap-item-square inventory">
        <div class="total"><em class="number">3</em> item</div>
        <ul class="list-item">
          <li class="common">
            <img src="@/assets/img/common/nft-detail/@item01.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">I</span>
            <span class="quantity">x10</span>
          </li>
          <li class="uncommon">
            <img src="@/assets/img/common/nft-detail/@item02.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">II</span>
          </li>
          <li class="rare">
            <img src="@/assets/img/common/nft-detail/@item03.webp" width="80" alt="" />
            <span class="enhance">+12</span>
            <span class="tier">III</span>
          </li>
        </ul>
        <div class="wrap-btn">
          <button type="button" class="btn">VIEW MORE</button>
        </div>
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
    tabInventory: null,
  }),
});
</script>

<style lang="scss"></style>
