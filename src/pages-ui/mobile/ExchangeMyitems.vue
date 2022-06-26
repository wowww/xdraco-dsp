<template>
  <main class="contents">
    <section class="section">
      <!-- <Round>태그에 적용된 'uiType' props는 UI를 위한 용도일뿐입니다 -->
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="myitem-list">
          <v-tabs v-model="tab" class="tab-rounds" :hide-slider="true">
            <v-tab>
              <span>봉인</span>
            </v-tab>
            <v-tab>
              <span>판매중</span>
            </v-tab>
            <v-tab>
              <span>판매 완료</span>
            </v-tab>
            <v-tab>
              <span>구매 완료</span>
            </v-tab>
          </v-tabs>

          <div class="list-bar">
            <div class="list-bar__title"><em>10</em><strong>아이템</strong></div>
            <div id="wrapFilterList" class="wrap-filter">
              <SelectOrder
                :items="[
                  { title: 'Date Listed: Newest', abc: 0 },
                  { title: 'Date Listed: Oldest', abc: 1 },
                  { title: 'Date Listed: Highest', abc: 2 },
                  { title: 'Date Listed: Lowest', abc: 3 },
                ]"
                :selectedValue="{ title: 'Date Listed: Newest', abc: 0 }"
                v-on:update="emitSelectOrder"
              ></SelectOrder>
            </div>
          </div>

          <v-tabs-items v-model="tab">
            <v-tab-item class="tab-seal">
              <ul class="list-myitem">
                <li>
                  <MyItem myitemType="seal" itemCategory="grade-5" itemName="World Deceiver Cane" itemCount="+10" snCode="Unique No. S15"></MyItem>
                </li>
                <li>
                  <MyItem myitemType="seal" itemCategory="grade-4" itemName="Venomblood Longstaff" itemCount="+10" snCode="Unique No. S15"></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="seal"
                    itemCategory="grade-3"
                    itemName="Magic stone of Destruction"
                    itemCount=""
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
                <li>
                  <MyItem myitemType="seal" itemCategory="grade-5" itemName="Mythic Ring" itemCount="+5" snCode="Unique No. S15"></MyItem>
                </li>
                <li>
                  <MyItem myitemType="seal" itemCategory="grade-5" itemName="Mythic Ring" itemCount="" snCode="Unique No. S15"></MyItem>
                </li>
                <li>
                  <MyItem myitemType="seal" itemCategory="grade-5" itemName="Mana Treasure Outfit" itemCount="+5" snCode="Unique No. S15"></MyItem>
                </li>
              </ul>

              <div class="wrap-button">
                <button type="button" class="btn-viewmore">VIEW MORE</button>
              </div>
            </v-tab-item>
            <v-tab-item class="tab-sale">
              <ul class="list-myitem">
                <li>
                  <MyItem
                    myitemType="sale"
                    itemCategory="grade-5"
                    itemName="Shineworld Dragon Boots"
                    itemCount=""
                    ButtonType="판매대기중"
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="sale"
                    itemCategory="grade-4"
                    itemName="Shineworld Dragon Boots"
                    itemCount="+1"
                    ButtonType="판매취소"
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="sale"
                    itemCategory="grade-3"
                    itemName="Magic stone of Destruction"
                    itemCount=""
                    ButtonType="판매취소"
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="sale"
                    itemCategory="grade-5"
                    itemName="Shineworld Dragon Boots"
                    itemCount=""
                    ButtonType="판매취소"
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="sale"
                    itemCategory="grade-5"
                    itemName="Shineworld Dragon Boots"
                    itemCount=""
                    ButtonType="판매취소"
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="sale"
                    itemCategory="grade-5"
                    itemName="Shineworld Dragon Boots"
                    itemCount=""
                    ButtonType="판매취소"
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="sale"
                    itemCategory="grade-5"
                    itemName="Shineworld Dragon Boots"
                    itemCount=""
                    ButtonType="판매취소"
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="sale"
                    itemCategory="grade-5"
                    itemName="Shineworld Dragon Boots"
                    itemCount=""
                    ButtonType="판매취소"
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="sale"
                    itemCategory="grade-5"
                    itemName="Shineworld Dragon Boots"
                    itemCount=""
                    ButtonType="판매취소"
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="sale"
                    itemCategory="grade-5"
                    itemName="Shineworld Dragon Boots Magic stone of Destruction"
                    itemCount=""
                    ButtonType="판매대기중"
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
              </ul>
              <div class="wrap-button">
                <button type="button" class="btn-viewmore">VIEW MORE</button>
              </div>
              <div class="list-empty">리스트 내용 없을때</div>
            </v-tab-item>
            <v-tab-item class="tab-soldout">
              <ul class="list-myitem">
                <li>
                  <MyItem
                    myitemType="soldout"
                    itemCategory="grade-5"
                    itemName="Shineworld Dragon Boots"
                    itemCount="+10"
                    itemPrice="5,211"
                    itemRate="-260.55"
                    itemSettlement="4950.45"
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="soldout"
                    itemCategory="grade-4"
                    itemName="Shineworld Dragon Boots"
                    itemCount=""
                    itemPrice="5,211"
                    itemRate="-260.55"
                    itemSettlement="4950.45"
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="soldout"
                    itemCategory="grade-3"
                    itemName="Shineworld Dragon Boots"
                    itemCount=""
                    itemPrice="5,211"
                    itemRate="-260.55"
                    itemSettlement="4950.45"
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="soldout"
                    itemCategory="grade-5"
                    itemName="Shineworld Dragon Boots"
                    itemCount=""
                    itemPrice="5,211"
                    itemRate="-260.55"
                    itemSettlement="4950.45"
                    snCode="Unique No. S15"
                  ></MyItem>
                </li>
              </ul>
              <div class="wrap-button">
                <button type="button" class="btn-viewmore">VIEW MORE</button>
              </div>
            </v-tab-item>
            <v-tab-item class="tab-purchase">
              <ul class="list-myitem">
                <li>
                  <MyItem
                    myitemType="purchase"
                    itemCategory="grade-5"
                    itemName="World Deceiver Cane"
                    itemCount="+10"
                    itemSettlement="4950.45"
                    snCode="Serial NO. #12345678"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="purchase"
                    itemCategory="grade-4"
                    itemName="Mythic Ring"
                    itemCount="+5"
                    itemSettlement="4950.45"
                    snCode="Serial NO. #12345678"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="purchase"
                    itemCategory="grade-3"
                    itemName="Magic stone of Destruction"
                    itemSettlement="4950.45"
                    snCode="Serial NO. #12345678"
                  ></MyItem>
                </li>
                <li>
                  <MyItem
                    myitemType="purchase"
                    itemCategory="grade-5"
                    itemName="Shineworld Dragon Boots"
                    itemSettlement="4950.45"
                    snCode="Serial NO. #12345678"
                  ></MyItem>
                </li>
              </ul>
              <div class="wrap-button">
                <button type="button" class="btn-viewmore">VIEW MORE</button>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
// eslint-disable-next-line import/extensions
import Footer from '@/partials/common/Footer';
import SelectOrder from '@/components-ui/desktop/SelectOrder';
import MyItem from '@/components-ui/mobile/MyItem';

export default defineComponent({
  components: {
    Footer,
    SelectOrder,
    MyItem,
  },
  data: () => ({
    SortType: 'Newest',

    tab: null,
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
  methods: {
    emitSelectOrder() {
      if (!this.showLayerPriceRange) {
        return;
      }
      this.showLayerPriceRange = false;
    },
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app.scss';
</style>
