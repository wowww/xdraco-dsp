<template>
  <div class="wrap-inventory">
    <SelectFilter placeholder="All" :items="['All', 'Equipment', 'Material', 'Magic Stone', 'Spirit Stone', 'Sundry']"></SelectFilter>
    <div class="wrap-item-square inventory">
      <div class="total"><em class="number">36</em> item</div>
      <ul class="list-item">
        <li class="legendary">
          <img src="@/assets/img/common/nft-detail/@item01.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">I</span>
          <span class="quantity">x10</span>
        </li>
        <li class="epic">
          <img src="@/assets/img/common/nft-detail/@item02.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">II</span>
        </li>
        <li class="epic">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">III</span>
        </li>
        <li class="rare">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">IV</span>
          <span class="quantity">x10</span>
        </li>
        <li class="epic">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">III</span>
        </li>
        <li class="epic">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">III</span>
        </li>
        <li class="epic">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">III</span>
          <span class="quantity">x10</span>
        </li>
        <li class="epic">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">III</span>
          <span class="quantity">x10</span>
        </li>
        <li class="epic">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">III</span>
          <span class="quantity">x10</span>
        </li>
        <li class="epic">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">III</span>
          <span class="quantity">x10</span>
        </li>
        <li class="epic">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">III</span>
        </li>
        <li class="epic">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">III</span>
        </li>
        <li class="common">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">III</span>
        </li>
        <li class="uncommon">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">III</span>
        </li>
        <li class="rare">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">III</span>
        </li>
        <li class="epic">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">III</span>
        </li>
        <li class="legendary">
          <img src="@/assets/img/common/nft-detail/@item03.webp" width="50" alt="" />
          <span class="enhance">+12</span>
          <span class="tier">III</span>
        </li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div class="wrap-btn">
        <button type="button" class="btn">VIEW MORE</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount } from '@vue/composition-api';
import SelectFilter from '@/components-ui/mobile/SelectFilter';

export default defineComponent({
  components: {
    // DspNav,
    SelectFilter,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
});
</script>

<style lang="scss"></style>
