<template>
  <main class="contents">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="wrap-grid">
          <!-- 타임라인 -->
          <div class="grid-timeline">
            <div class="myitem-list">
              <v-tabs v-model="tab" class="tab-rounds">
                <v-tab>
                  <span>봉인 중</span>
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

              <div class="wrap-list">
                <!-- v-tabs-items 안에 들어가면 sticky disabled. -->

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
                        <MyItem
                          myitemType="seal"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount="+20"
                          itemEnhance="+12"
                          snCode="Unique No. S15"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="seal"
                          itemCategory="grade-4"
                          itemName="Shineworld Dragon Boots"
                          itemEnhance="-"
                          snCode="Unique No. S15"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="seal"
                          itemCategory="grade-3"
                          itemName="Magic stone of Destruction"
                          itemEnhance="+12"
                          snCode="Unique No. S15"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="seal"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemEnhance="+12"
                          snCode="Unique No. S15"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="seal"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemEnhance="+0"
                          snCode="Unique No. S15"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="seal"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemEnhance="+0"
                          snCode="Unique No. S15"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="seal"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemEnhance="+0"
                          snCode="Unique No. S15"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="seal"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemEnhance="+12"
                          snCode="Unique No. S15"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="seal"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemEnhance="+12"
                          snCode="Unique No. S15"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="seal"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemEnhance="+12"
                          snCode="Unique No. S15"
                        ></MyItem>
                      </li>
                    </ul>
                    <div class="wrap-button">
                      <button type="button" class="btn-viewmore">VIEW MORE</button>
                    </div>
                  </v-tab-item>
                  <v-tab-item class="tab-sale">
                    <ul class="list-myitem">
                      <li>
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

                        <MyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+12"
                          itemPower="11,563"
                          itemPrice="5,185,100"
                          ButtonType="판매대기중"
                        ></MyItem>
                      </li>
                      <li class="wait">
                        <MyItem
                          myitemType="sale"
                          itemCategory="grade-4"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+12"
                          itemPower="11,563"
                          itemPrice="5,185,100"
                          ButtonType="판매취소중"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="sale"
                          itemCategory="grade-3"
                          itemName="Magic stone of Destruction"
                          itemCount=""
                          itemEnhance="-"
                          itemPower="-"
                          itemPrice="85,100"
                          ButtonType="판매취소"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+12"
                          itemPower="11,563"
                          itemPrice="5,185,100"
                          ButtonType="판매취소"
                          itemRate=""
                          itemSettlement=""
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+0"
                          itemPower="11,563"
                          itemPrice="985,100"
                          ButtonType="판매취소"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+0"
                          itemPower="11,563"
                          itemPrice="985,100"
                          ButtonType="판매취소"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+0"
                          itemPower="11,563"
                          itemPrice="985,100"
                          ButtonType="판매취소"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+12"
                          itemPower="11,563"
                          itemPrice="5,185,100"
                          ButtonType="판매취소"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+12"
                          itemPower="11,563"
                          itemPrice="5,185,100"
                          ButtonType="판매취소"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots Dragon Bots Shiworld Dgon Bts"
                          itemCount="+22"
                          itemEnhance="+12"
                          itemPower="11,563"
                          itemPrice="5,185,1005,185,100"
                          ButtonType="판매취소"
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
                          snCode="Serial NO. #12345678"
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
                          snCode="Serial NO. #12345678"
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
                          snCode="Serial NO. #12345678"
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
                          snCode="Serial NO. #12345678"
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
                          snCode="Serial NO. #12345678"
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
                      <li>
                        <MyItem
                          myitemType="purchase"
                          itemCategory="grade-3"
                          itemName="Magic stone of Destruction"
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
          </div>

          <!-- 사이드영역 -->
          <div class="grid-side">
            <aside class="sidebar">
              <AccountInfo profile-type="signUp" more-active></AccountInfo>
              <sidebar-contact-us />
            </aside>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Footer from '@/partials/common/Footer';
import AccountInfo from '@/components-ui/desktop/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import SelectOrder from '@/components-ui/desktop/SelectOrder';
import MyItem from '@/components-ui/desktop/MyItem';

export default defineComponent({
  props: {},
  components: {
    Footer,
    AccountInfo,
    SelectOrder,
    MyItem,
    SidebarContactUs,
  },
  data: () => ({
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
@import '~@/assets/sass/desktop/app.scss';
</style>
