<template>
  <div class="round-title">
    <div class="category">
      <span class="grade-5" v-if="Math.random() > 0.5">LEGENDARY</span>
      <span class="grade-4" v-if="Math.random() > 0.5">EPIC</span>
      <span class="grade-3" v-if="Math.random() > 0.5">RARE</span>
      <!-- <span class="tier">TIER I</span> -->
      <!-- <span class="tier">TIER II</span> -->
      <!-- <span class="tier">TIER III</span> -->
      <span class="tier">TIER IV</span>
    </div>
    <h4 class="item-name">{{ value }}<em>+10</em></h4>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'RoundTitle',
  props: {
    value: {
      type: String,
      required: false,
      default: () => 'Mythic Ring',
    },
  },
  data: () => ({
    //
  }),
});
</script>

<style lang="scss"></style>
