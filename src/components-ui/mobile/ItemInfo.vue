<template>
  <div class="item-info" :data-item-type="itemCategory">
    <div class="item__layer">
      <span class="by-what draco"></span>
      <div class="wrap-item">
        <img src="@/assets/img/common/card/@item-5.webp" class="item" width="48" :alt="itemName" />
      </div>
    </div>
    <div class="item-desc" v-if="showType != 'itemonly'">
      <div class="category">
        <span :class="itemCategory" v-if="itemCategory == 'grade-5'">LEGENDARY</span>
        <span :class="itemCategory" v-if="itemCategory == 'grade-4'">EPIC</span>
        <span :class="itemCategory" v-if="itemCategory == 'grade-3'">RARE</span>
        <span class="tire" v-if="number == 0">TIER I</span>
        <span class="tire" v-if="number == 1">TIER II</span>
        <span class="tire" v-if="number == 2">TIER III</span>
        <span class="tire" v-if="number >= 3">TIER IV</span>
      </div>
      <h4 class="item-name">
        {{ itemName }}<em>{{ itemCount }}</em>
      </h4>
      <h5 v-if="snCode" class="sncode">{{ snCode }}</h5>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ItemInfo',
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
    snCode: {
      type: String,
      required: false,
    },
    showType: {
      type: String,
      required: false,
      default: () => 'itemall',
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
