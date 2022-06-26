<template>
  <div class="myitem" :data-sale-type="myitemType">
    <!--
      myitemType={sale, soldout, seal}

      //itemCategory={legendary, epic, rare, uncommon, common, none}
      itemCategory={grade-5, grade-4, grade-3, grade-2, grade-1, grade-0}
      itemName="Shineworld Dragon Gloves22"
      itemCount="+20"
      itemEnhance="+12"
      itemPower="11,563"
      itemPrice="5,185,100"
      ButtonType={판매취소, 판매 대기중, 판매하기}
      itemRate="-260.55"
      itemSettlement="4950.45"
    -->
    <ItemInfo :itemCategory="itemCategory" :itemName="itemName" :itemCount="itemCount" :snCode="snCode"></ItemInfo>
    <div class="myitem-detail sale" v-if="myitemType == 'sale'">
      <ul class="list">
        <li class="enhance">
          <span>Enhance</span>
          <strong>{{ itemEnhance }}</strong>
        </li>
        <li class="score">
          <span>Power Score</span>
          <strong>{{ itemPower }}</strong>
        </li>
        <li class="price">
          <span>Sale Price</span>
          <strong class="ico-darco ico-xs add-inside"
            ><span>{{ itemPrice }}</span></strong
          >
        </li>
        <li class="apply">
          <button type="button" disabled="disabled" class="btn btn-sm" v-if="ButtonType == '판매대기중'">판매 대기중</button>
          <button type="button" disabled="disabled" class="btn btn-sm" v-if="ButtonType == '판매취소중'">판매 취소</button>
          <button type="button" class="btn btn-primary2 btn-sm" v-if="ButtonType == '판매취소'">판매 취소</button>
        </li>
      </ul>
    </div>
    <div class="myitem-detail" v-if="myitemType == 'soldout'">
      <ul class="spec">
        <li class="date">
          <span>거래일시</span>
          <strong>2021.11.20 15:35:27 UTC+8</strong>
        </li>
        <li class="price">
          <span>판매 가격</span>
          <strong>{{ itemPrice }}</strong>
        </li>
        <li class="rate">
          <span>판매 수수료(5%)</span>
          <strong class="negative">{{ itemRate }}</strong>
        </li>
        <li class="settlement">
          <span>최종 정산 DRACO</span>
          <strong class="ico-darco ico-xs add-inside"
            ><span>{{ itemSettlement }}</span></strong
          >
        </li>
      </ul>
    </div>
    <div class="myitem-detail" v-if="myitemType == 'seal'">
      <ul class="list">
        <li class="enhance">
          <span>Enhance Level</span>
          <strong>{{ itemEnhance }}</strong>
        </li>
        <li class="apply">
          <button type="button" class="btn-sell">판매하기</button>
        </li>
      </ul>
    </div>
    <div class="myitem-detail" v-if="myitemType == 'purchase'">
      <ul class="spec">
        <li class="date">
          <span>거래일시</span>
          <strong>2021.11.20 15:35:27 UTC+8</strong>
        </li>
        <li class="purchase">
          <span>구매 가격</span>
          <strong class="ico-darco ico-xs add-inside"
            ><span>{{ itemSettlement }}</span></strong
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import ItemInfo from '@/components-ui/desktop/ItemInfo';

export default defineComponent({
  name: 'MyItem',
  components: {
    ItemInfo,
  },
  props: {
    myitemType: {
      type: String,
      required: false,
      default: () => 'sale',
    },
    itemCategory: {
      type: String,
      required: false,
      default: () => '',
    },
    itemName: {
      type: String,
      required: false,
      default: () => '',
    },
    itemCount: {
      type: String,
      required: false,
      default: () => '',
    },
    snCode: {
      type: String,
      required: false,
      default: () => '',
    },
    itemEnhance: {
      type: String,
      required: false,
      default: () => '',
    },
    itemPower: {
      type: String,
      required: false,
      default: () => '',
    },
    itemPrice: {
      type: String,
      required: false,
      default: () => '',
    },
    ButtonType: {
      type: String,
      required: false,
      default: () => '',
    },
    itemRate: {
      type: String,
      required: false,
      default: () => '',
    },
    itemSettlement: {
      type: String,
      required: false,
      default: () => '',
    },
  },
  data: () => ({}),
  methods: {},
  mounted() {},
});
</script>

<style lang="scss"></style>
