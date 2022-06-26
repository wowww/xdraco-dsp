<template>
  <div class="item-ranking">
    <div class="item-ranking__rank" v-html="stringRank"></div>

    <!-- itemType은 이미 사용중인 grade로 적용해주세요 -->
    <card :itemType="itemType"></card>

    <div class="item-ranking__content">
      <div class="item-ranking__name">
        <div class="item-name">Dark Moon Axe</div>
        <div class="item-category">Warrior Weapon</div>
      </div>
      <div class="wrap-define-detail">
        <dl class="define-detail">
          <dt>Rank</dt>
          <dd>
            <span class="grade" :class="gradeClass">{{ itemType }}</span>
          </dd>
        </dl>
        <dl class="define-detail">
          <dt>Tier</dt>
          <dd>IV</dd>
        </dl>
        <dl class="define-detail">
          <dt>Enchange</dt>
          <dd>+10</dd>
        </dl>
        <dl class="define-detail">
          <dt>Power Score</dt>
          <dd>11,097</dd>
        </dl>
        <dl class="define-detail">
          <dt>Serial Number</dt>
          <dd>#12345678</dd>
        </dl>
      </div>
      <div class="wrap-define-trade">
        <dl class="define-trade serial-number">
          <dt>Serial Number</dt>
          <dd>#12345678</dd>
        </dl>
        <dl class="define-trade price">
          <dt>거래완료 가격</dt>
          <dd class="price">
            <span class="ico-hydra ico-sm add-inside"></span>
            <span>150,000</span>
          </dd>
        </dl>
        <dl class="define-trade seller">
          <dd class="character">
            <!-- <img src="@/assets/img/desktop/popup/profile-warrior.webp" width="48" height="48" alt="warrior" /> -->
            <img src="@/assets/img/desktop/popup/profile-sorcerer.webp" width="48" height="48" alt="sorcerer" />
            <!-- <img src="@/assets/img/desktop/popup/profile-taoist.webp" width="48" height="48" alt="taoist" /> -->
            <!-- <img src="@/assets/img/desktop/popup/profile-lancer.webp" width="48" height="48" alt="lancer" /> -->
            <!-- <img src="@/assets/img/desktop/popup/profile-arbalist.webp" width="48" height="48" alt="arbalist" /> -->
          </dd>
          <dt>Seller</dt>
          <dd>sellernickname</dd>
        </dl>
        <dl class="define-trade">
          <dt>거래일시</dt>
          <dd>2021.12.24 00:45 UTC+8</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Card from '@/components-ui/common/Card';

export default defineComponent({
  name: 'ItemRanking',
  components: {
    Card,
  },
  props: {
    itemRank: {
      type: Number,
      required: true,
    },
    itemType: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    stringRank: '1st',
    gradeClass: 'rare',
  }),
  methods: {
    setRankString() {
      if (this.itemRank === 1) {
        this.stringRank = `<em class="number">1</em>st`;
      } else if (this.itemRank === 2) {
        this.stringRank = `<em class="number">2</em>nd`;
      } else if (this.itemRank === 3) {
        this.stringRank = `<em class="number">3</em>rd`;
      } else {
        this.stringRank = `<em class="number">${this.itemRank}</em>th`;
      }
    },
    setGradeClassName() {
      switch (this.itemType) {
        case 'rare':
          this.gradeClass = 'grade-3';
          break;
        case 'epic':
          this.gradeClass = 'grade-4';
          break;
        case 'legendary':
          this.gradeClass = 'grade-5';
          break;
        default:
          this.gradeClass = 'grade-1';
      }
    },
  },
  mounted() {
    this.setRankString();
    this.setGradeClassName();
  },
});
</script>
<style lang="scss"></style>
