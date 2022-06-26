<template>
  <div class="item-manual">
    <h2 class="item-title">{{ itemName }}</h2>
    <h3 class="item-subtitle">LANCER Sub Weapon</h3>
    <ul class="item-detail-table" v-if="showType == 'normal'">
      <li class="rank">
        <span>Rank</span>
        <!-- rare -->
        <!-- epic -->
        <!-- legendary -->
        <strong class="grade-5" v-if="rankType == 'grade-5'">LEGENDARY</strong>
        <strong class="grade-4" v-if="rankType == 'grade-4'">EPIC</strong>
        <strong class="grade-3" v-if="rankType == 'grade-3'">RARE</strong>
      </li>
      <li class="tire">
        <span>Tier</span>
        <strong>IV</strong>
      </li>
      <li class="enhance">
        <span>Enhance</span>
        <strong>+10</strong>
      </li>
      <li class="sncode">
        <span>Serial NO.</span>
        <strong>#12345678</strong>
      </li>
    </ul>
    <ul class="item-detail-table" v-if="showType == 'noprice'">
      <li class="rank">
        <span>Rank</span>
        <strong class="grade-5" v-if="rankType == 'grade-5'">LEGENDARY</strong>
        <strong class="grade-4" v-if="rankType == 'grade-4'">EPIC</strong>
        <strong class="grade-3" v-if="rankType == 'grade-3'">RARE</strong>
      </li>
      <li class="tire">
        <span>Tier</span>
        <strong>IV</strong>
      </li>
      <li class="enhance">
        <span>Enhance</span>
        <strong>+10</strong>
      </li>
    </ul>
    <ul class="item-detail-table" v-if="showType == 'allrank'">
      <li class="rank">
        <span>Rank</span>
        <strong class="grade-5">LEGENDARY</strong>
      </li>
      <li class="rank">
        <span>Rank</span>
        <strong class="grade-4">EPIC</strong>
      </li>
      <li class="rank">
        <span>Rank</span>
        <strong class="grade-3">RARE</strong>
      </li>
      <li class="tire">
        <span>Tier</span>
        <strong>IV</strong>
      </li>
      <li class="enhance">
        <span>Enhance</span>
        <strong>+10</strong>
      </li>
    </ul>
    <ul class="item-detail-table" v-if="showType == 'rankonly'">
      <li class="rank">
        <span>Rank</span>
        <strong class="grade-5" v-if="rankType == 'grade-5'">LEGENDARY</strong>
        <strong class="grade-4" v-if="rankType == 'grade-4'">EPIC</strong>
        <strong class="grade-3" v-if="rankType == 'grade-3'">RARE</strong>
      </li>
    </ul>

    <div class="description" v-if="desc != 'none'">
      Legend has it that this staff can deceive the entire world. This staff’s power is too great that only mages who have mastered all spells can
      wield it.
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ItemManual',
  props: {
    itemType: {
      type: String,
      required: false,
    },
    itemName: {
      type: String,
      required: false,
      default: () => 'Shineworld Dragon Gloves',
    },
    showType: {
      type: String,
      required: false,
    },
    rankType: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: false,
    },
  },
  data: () => ({
    // number: 0,
  }),
  methods: {},
  mounted() {},
});
</script>

<style lang="scss"></style>
