<template>
  <main class="contents nft">
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
              </v-tabs>

              <div class="wrap-list">
                <!-- v-tabs-items 안에 들어가면 sticky disabled. -->

                <v-tabs-items v-model="tab">
                  <v-tab-item class="tab-seal">
                    <!-- 업데이트 예정: 봉인 캐릭터 업데이트 예정 -->
                    <div class="continued">
                      <dl>
                        <dt>봉인 캐릭터 목록 기능은 업데이트 예정입니다.</dt>
                        <dd>내 봉인 캐릭터는 WEMIX WALLET 앱에서 확인 할 수 있습니다.</dd>
                      </dl>
                    </div>

                    <div class="list-bar">
                      <div class="list-bar__title"><em>10</em><strong>아이템</strong></div>

                      <!-- <div id="wrapFilterList" class="wrap-filter">
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
                      </div> -->
                    </div>
                    <ul class="list-myitem">
                      <li>
                        <NftMyItem
                          myitemType="seal"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount="+20"
                          itemKlass="Warrior"
                          itemLevel="85"
                          itemPower="211,563"
                          snCode="Unique No. S15"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="seal"
                          itemCategory="grade-4"
                          itemName="Shineworld Dragon Boots"
                          itemKlass="Lancer"
                          itemLevel="85"
                          itemPower="211,563"
                          snCode="Unique No. S15"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="seal"
                          itemCategory="grade-3"
                          itemName="Magic stone of Destruction"
                          itemKlass="Sorcerer"
                          itemLevel="85"
                          itemPower="211,563"
                          snCode="Unique No. S15"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="seal"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemKlass="Taoist"
                          itemLevel="85"
                          itemPower="211,563"
                          snCode="Unique No. S15"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="seal"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemKlass="Arbalist"
                          itemLevel="85"
                          itemPower="211,563"
                          snCode="Unique No. S15"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="seal"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount="+20"
                          itemKlass="Warrior"
                          itemLevel="85"
                          itemPower="211,563"
                          snCode="Unique No. S15"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="seal"
                          itemCategory="grade-4"
                          itemName="Shineworld Dragon Boots"
                          itemKlass="Lancer"
                          itemLevel="85"
                          itemPower="211,563"
                          snCode="Unique No. S15"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="seal"
                          itemCategory="grade-3"
                          itemName="Magic stone of Destruction"
                          itemKlass="Sorcerer"
                          itemLevel="85"
                          itemPower="211,563"
                          snCode="Unique No. S15"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="seal"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemKlass="Taoist"
                          itemLevel="85"
                          itemPower="211,563"
                          snCode="Unique No. S15"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="seal"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemKlass="Arbalist"
                          itemLevel="85"
                          itemPower="211,563"
                          snCode="Unique No. S15"
                        ></NftMyItem>
                      </li>
                    </ul>
                    <div class="wrap-button">
                      <button type="button" class="btn-viewmore">VIEW MORE</button>
                    </div>
                  </v-tab-item>
                  <v-tab-item class="tab-sale">
                    <!-- 업데이트 예정: 판매 캐릭터 목록 업데이트 예정 -->
                    <div class="continued">
                      <dl>
                        <dt>판매 캐릭터 목록 기능은 업데이트 예정입니다.</dt>
                        <dd>WEMIX WALLET 앱의 NFT 메뉴에서 확인 할 수 있습니다.</dd>
                      </dl>
                    </div>
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

                        <NftMyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+12"
                          itemKlass="Warrior"
                          itemLevel="85"
                          itemPower="211,563"
                          itemPrice="5,185,100"
                          ButtonType="판매대기중"
                        ></NftMyItem>
                      </li>
                      <li class="wait">
                        <NftMyItem
                          myitemType="sale"
                          itemCategory="grade-4"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+12"
                          itemKlass="Lancer"
                          itemLevel="85"
                          itemPower="211,563"
                          itemPrice="5,185,100"
                          ButtonType="판매취소중"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="sale"
                          itemCategory="grade-3"
                          itemName="Magic stone of Destruction"
                          itemCount=""
                          itemEnhance="-"
                          itemKlass="Lancer"
                          itemLevel="85"
                          itemPower="211,563"
                          itemPrice="5,185,100"
                          ButtonType="판매취소"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+12"
                          itemKlass="Lancer"
                          itemLevel="85"
                          itemPower="211,563"
                          itemPrice="5,185,100"
                          ButtonType="판매취소"
                          itemRate=""
                          itemSettlement=""
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+0"
                          itemKlass="Lancer"
                          itemLevel="85"
                          itemPower="211,563"
                          itemPrice="5,185,100"
                          ButtonType="판매취소"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+0"
                          itemKlass="Lancer"
                          itemLevel="85"
                          itemPower="211,563"
                          itemPrice="5,185,100"
                          ButtonType="판매취소"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+0"
                          itemKlass="Lancer"
                          itemLevel="85"
                          itemPower="211,563"
                          itemPrice="5,185,100"
                          ButtonType="판매취소"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+12"
                          itemKlass="Lancer"
                          itemLevel="85"
                          itemPower="211,563"
                          itemPrice="5,185,100"
                          ButtonType="판매취소"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+12"
                          itemKlass="Lancer"
                          itemLevel="85"
                          itemPower="211,563"
                          itemPrice="5,185,100"
                          ButtonType="판매취소"
                        ></NftMyItem>
                      </li>
                      <li>
                        <NftMyItem
                          myitemType="sale"
                          itemCategory="grade-5"
                          itemName="Shineworld Dragon Boots Dragon Bots Shiworld Dgon Bts"
                          itemCount="+22"
                          itemEnhance="+12"
                          itemKlass="Lancer"
                          itemLevel="85"
                          itemPower="211,563"
                          itemPrice="5,185,100"
                          ButtonType="판매취소"
                        ></NftMyItem>
                      </li>
                    </ul>
                    <div class="wrap-button">
                      <button type="button" class="btn-viewmore">VIEW MORE</button>
                    </div>

                    <div class="list-empty">리스트 내용 없을때</div>
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
// import MyItem from '@/components-ui/desktop/MyItem';
import NftMyItem from '@/components-ui/desktop/NftMyItem';

export default defineComponent({
  props: {},
  components: {
    Footer,
    AccountInfo,
    SelectOrder,
    // MyItem,
    NftMyItem,
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

.continued {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 25px;
  height: 400px;
  box-sizing: content-box;
  text-align: center;
  dl {
    dt {
      font-size: 20px;
      font-weight: bold;
      color: #fff;
    }
    dd {
      font-size: 14px;
      color: rgba($color: #fff, $alpha: 0.6);
    }
  }
}
</style>
