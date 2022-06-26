<template>
  <div class="item-info nft-info" :data-item-type="itemCategory">
    <div class="item__layer">
      <div class="wrap-item">
        <img :src="require('@' + '/assets/img/common/card/' + characterClass + '-grade4.webp')" class="item" width="56" :alt="itemName" />
      </div>
    </div>
    <div class="item-desc" v-if="showType != 'itemonly'">
      <h4 class="item-name">
        {{ itemName }}
      </h4>
      <p v-if="infoCode" class="infoCode">{{ infoCode }}</p>
      <h5 v-if="snCode" class="sncode">{{ snCode }}</h5>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'NftItemInfo',
  props: {
    itemCategory: {
      type: String,
      required: false,
    },
    itemName: {
      type: String,
      required: false,
      default: () => 'Shineworld Dragon Gloves',
    },
    itemCount: {
      type: String,
      required: false,
    },
    infoCode: {
      type: String,
      required: false,
    },
    snCode: {
      type: String,
      required: false,
    },
    showType: {
      type: String,
      required: false,
      default: () => 'itemall',
    },
    characterClass: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    number: 0,
  }),
  filters: {
    uppercase(value) {
      if (!value) return '';
      value = value.toString();
      return value.toUpperCase();
    },
  },
  methods: {
    randomNum() {
      const N = Math.floor(Math.random() * 6);
      this.number = N;
      // const type = ['legendary', 'epic', 'rare', 'uncommon', 'common', 'none'];
      const type = ['grade-5', 'grade-4', 'grade-3', 'grade-2', 'grade-1', 'grade-0'];
      this.itemType = type[N];
    },
  },
  mounted() {
    this.randomNum();
  },
});
</script>

<style lang="scss"></style>
