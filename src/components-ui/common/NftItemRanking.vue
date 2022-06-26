<template>
  <div class="item-ranking nft-ranking">
    <div class="item-ranking__rank" v-html="stringRank"></div>

    <!-- itemType은 이미 사용중인 grade로 적용해주세요 -->
    <!-- <card :itemType="itemType"></card> -->
    <card-nft :itemGrade="5" characterClass="arbalist"></card-nft>

    <div class="item-ranking__content">
      <div class="item-ranking__name">
        <div class="item-name">masterSorcer</div>
        <div class="item-category">ASIA 112 Server</div>
      </div>
      <div class="wrap-define-detail">
        <dl class="define-detail">
          <dt>Sorcerer</dt>
          <dd>
            <img src="@/assets/img/common/ranking/ico_klass_taoist.webp" width="40" />
          </dd>
        </dl>
        <dl class="define-detail">
          <dt>Level</dt>
          <dd>IV</dd>
        </dl>
        <dl class="define-detail">
          <dt>Power Score</dt>
          <dd>11,097</dd>
        </dl>
      </div>
      <div class="wrap-define-trade">
        <dl class="define-trade price">
          <dt>Price</dt>
          <dd class="price">
            <span class="ico-darco ico-sm add-inside"></span>
            <span>150,000</span>
          </dd>
        </dl>
        <dl class="define-trade seller">
          <dd class="character">
            <!-- <img src="@/assets/img/desktop/popup/profile-warrior.webp" width="48" height="48" alt="warrior" /> -->
            <img src="@/assets/img/desktop/popup/profile-sorcerer.webp" width="32" height="33" alt="sorcerer" />
            <!-- <img src="@/assets/img/desktop/popup/profile-taoist.webp" width="48" height="48" alt="taoist" /> -->
            <!-- <img src="@/assets/img/desktop/popup/profile-lancer.webp" width="48" height="48" alt="lancer" /> -->
            <!-- <img src="@/assets/img/desktop/popup/profile-arbalist.webp" width="48" height="48" alt="arbalist" /> -->
          </dd>
          <dt>Seller</dt>
          <dd>
            <span>英雄钢铁箱</span>
            <span class="data-info">
              <span class="data-info__lv">Lv.64</span>
              <span class="data-info__server">ASIA12</span>
            </span>
          </dd>
        </dl>
        <dl class="define-trade">
          <dt>Transaction time</dt>
          <dd>Nov, 11. 2021. 23:56:44 UTC+8</dd>
        </dl>
        <ul class="define-scorp">
          <li><a>WEMIX SCOPE</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
// import Card from '@/components-ui/common/Card';
import CardNft from '@/components-ui/common/CardNft';

export default defineComponent({
  name: 'NftItemRanking',
  components: {
    // Card,
    CardNft,
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
