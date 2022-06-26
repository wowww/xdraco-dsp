<template>
  <main class="contents">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="function">
          <div>
            <a href="#"><span class="backtolist">Back to list</span></a>
          </div>
        </div>
        <div class="wrap-grid">
          <!-- 타임라인 -->
          <div class="grid-timeline">
            <div class="exd-ranking">
              <v-tabs v-model="tabTraded" class="tab-rounds" background-color="transparent">
                <v-tab>Top Traded</v-tab>
                <v-tab>Recently Traded</v-tab>
              </v-tabs>

              <!-- Top Traded -->
              <div class="exd-ranking-list" v-if="tabTraded === 0">
                <item-ranking :itemRank="1" itemType="rare"></item-ranking>
                <item-ranking :itemRank="2" itemType="epic"></item-ranking>
                <item-ranking :itemRank="3" itemType="legendary"></item-ranking>
                <item-ranking :itemRank="4" itemType="rare"></item-ranking>
                <item-ranking :itemRank="5" itemType="epic"></item-ranking>
                <item-ranking :itemRank="6" itemType="legendary"></item-ranking>
                <item-ranking :itemRank="7" itemType="rare"></item-ranking>
                <item-ranking :itemRank="8" itemType="epic"></item-ranking>
                <item-ranking :itemRank="9" itemType="legendary"></item-ranking>
                <item-ranking :itemRank="10" itemType="rare"></item-ranking>
              </div>

              <!-- Recently Traded -->
              <div class="wrap-suggest" v-if="tabTraded === 1">
                <div class="suggest-list type2">
                  <ul class="list">
                    <li>
                      <!-- 상품 Dialog -->
                      <v-dialog content-class="dialog-card" v-model="dialogCardItem8">
                        <template v-slot:activator="{ on, attrs }">
                          <button type="button" class="btn-open-dialog" v-bind="attrs" v-on="on">상품 카드 보기</button>
                        </template>
                        <v-card>
                          <Card itemType="rare"></Card>
                          <button type="button" class="btn-close-dialog" @click="dialogCardItem8 = false">Close Dialog</button>
                        </v-card>
                      </v-dialog>

                      <ItemInfo itemCategory="grade-3" itemName="[U] Overwhelming Mystical Piece" itemCount="+1"></ItemInfo>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>Now</dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="lancer" name="nonososomama" server="ASIA 22"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-hydra ico-ss add-inside"><span>3,100</span></strong>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <!-- 상품 Dialog -->
                      <v-dialog content-class="dialog-card" v-model="dialogCardItem7">
                        <template v-slot:activator="{ on, attrs }">
                          <button type="button" class="btn-open-dialog" v-bind="attrs" v-on="on">상품 카드 보기</button>
                        </template>
                        <v-card>
                          <Card itemType="epic"></Card>
                          <button type="button" class="btn-close-dialog" @click="dialogCardItem7 = false">Close Dialog</button>
                        </v-card>
                      </v-dialog>

                      <ItemInfo itemCategory="grade-4" itemName="Shineworld Dragon Boots" itemCount="+1"></ItemInfo>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>5 min ago</dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="taoist" name="woerekwkk" server="EAST 02"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-darco ico-ss add-inside"><span>9,185,100</span></strong>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <!-- 상품 Dialog -->
                      <v-dialog content-class="dialog-card" v-model="dialogCardItem6">
                        <template v-slot:activator="{ on, attrs }">
                          <button type="button" class="btn-open-dialog" v-bind="attrs" v-on="on">상품 카드 보기</button>
                        </template>
                        <v-card>
                          <Card itemType="legendary"></Card>
                          <button type="button" class="btn-close-dialog" @click="dialogCardItem6 = false">Close Dialog</button>
                        </v-card>
                      </v-dialog>

                      <ItemInfo itemCategory="grade-5" itemName="Deep Secret Martial Uniform Top" itemCount="+20"></ItemInfo>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>1 hour ago</dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="warrior" name="Warriworry" server="ASIA 22"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-darco ico-ss add-inside"><span>555,185,100</span></strong>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <!-- 상품 Dialog -->
                      <v-dialog content-class="dialog-card" v-model="dialogCardItem5">
                        <template v-slot:activator="{ on, attrs }">
                          <button type="button" class="btn-open-dialog" v-bind="attrs" v-on="on">상품 카드 보기</button>
                        </template>
                        <v-card>
                          <Card itemType="grade2"></Card>
                          <button type="button" class="btn-close-dialog" @click="dialogCardItem5 = false">Close Dialog</button>
                        </v-card>
                      </v-dialog>

                      <ItemInfo itemCategory="grade-2" itemName="Shineworld Dragon Boots" itemCount="+10"></ItemInfo>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>Dec. 01, 2022 17:32 UTC +8</dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="taoist" name="woerekwkk" server="EAST 02"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-darco ico-ss add-inside"><span>9,185,100</span></strong>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <!-- 상품 Dialog -->
                      <v-dialog content-class="dialog-card" v-model="dialogCardItem4">
                        <template v-slot:activator="{ on, attrs }">
                          <button type="button" class="btn-open-dialog" v-bind="attrs" v-on="on">상품 카드 보기</button>
                        </template>
                        <v-card>
                          <Card itemType="rare"></Card>
                          <button type="button" class="btn-close-dialog" @click="dialogCardItem4 = false">Close Dialog</button>
                        </v-card>
                      </v-dialog>

                      <ItemInfo itemCategory="grade-3" itemName="[U] Overwhelming Mystical Piece" itemCount="+1"></ItemInfo>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>Dec. 01, 2022 17:32 UTC +8</dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="lancer" name="nonososomama" server="ASIA 22"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-darco ico-ss add-inside"><span>3,100</span></strong>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <!-- 상품 Dialog -->
                      <v-dialog content-class="dialog-card" v-model="dialogCardItem3">
                        <template v-slot:activator="{ on, attrs }">
                          <button type="button" class="btn-open-dialog" v-bind="attrs" v-on="on">상품 카드 보기</button>
                        </template>
                        <v-card>
                          <Card itemType="epic"></Card>
                          <button type="button" class="btn-close-dialog" @click="dialogCardItem3 = false">Close Dialog</button>
                        </v-card>
                      </v-dialog>

                      <ItemInfo itemCategory="grade-4" itemName="Shineworld Dragon Boots" itemCount="+1"></ItemInfo>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>Dec. 01, 2022 17:32 UTC +8</dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="taoist" name="woerekwkk" server="EAST 02"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-darco ico-ss add-inside"><span>9,185,100</span></strong>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <!-- 상품 Dialog -->
                      <v-dialog content-class="dialog-card" v-model="dialogCardItem2">
                        <template v-slot:activator="{ on, attrs }">
                          <button type="button" class="btn-open-dialog" v-bind="attrs" v-on="on">상품 카드 보기</button>
                        </template>
                        <v-card>
                          <Card itemType="legendary"></Card>
                          <button type="button" class="btn-close-dialog" @click="dialogCardItem2 = false">Close Dialog</button>
                        </v-card>
                      </v-dialog>

                      <ItemInfo itemCategory="grade-5" itemName="Deep Secret Martial Uniform Top" itemCount="+20"></ItemInfo>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>Dec. 01, 2022 17:32 UTC +8</dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="warrior" name="Warriworry" server="ASIA 22"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-darco ico-ss add-inside"><span>555,185,100</span></strong>
                        </dd>
                      </dl>
                    </li>
                    <li>
                      <!-- 상품 Dialog -->
                      <v-dialog content-class="dialog-card" v-model="dialogCardItem1">
                        <template v-slot:activator="{ on, attrs }">
                          <button type="button" class="btn-open-dialog" v-bind="attrs" v-on="on">상품 카드 보기</button>
                        </template>
                        <v-card>
                          <Card itemType="grade2"></Card>
                          <button type="button" class="btn-close-dialog" @click="dialogCardItem1 = false">Close Dialog</button>
                        </v-card>
                      </v-dialog>

                      <ItemInfo itemCategory="grade-2" itemName="Shineworld Dragon Boots" itemCount="+10"></ItemInfo>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>Dec. 01, 2022 17:32 UTC +8</dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="taoist" name="woerekwkk" server="EAST 02"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-darco ico-ss add-inside"><span>9,185,100</span></strong>
                        </dd>
                      </dl>
                    </li>
                  </ul>
                  <div class="wrap-button">
                    <button type="button" class="btn-viewmore">VIEW MORE</button>
                  </div>

                  <!-- Case : No data -->
                  <ul class="list" data-empty-message="데이터가 없습니다."></ul>
                </div>
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
import ItemRanking from '@/components-ui/common/ItemRanking';
import Footer from '@/partials/common/Footer';
import AccountInfo from '@/components-ui/desktop/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import MyItem from '@/components-ui/desktop/MyItem';
import ItemInfo from '@/components-ui/desktop/ItemInfo';
import CharInfo from '@/components-ui/desktop/CharInfo';
import Card from '@/components-ui/common/Card';

export default defineComponent({
  name: 'ExdRanking',
  props: {},
  components: {
    ItemRanking,
    Footer,
    AccountInfo,
    MyItem,
    ItemInfo,
    CharInfo,
    Card,
    SidebarContactUs,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',

    // for TabTraded
    tabTraded: null,

    dialogCardItem8: false,
    dialogCardItem7: false,
    dialogCardItem6: false,
    dialogCardItem5: false,
    dialogCardItem4: false,
    dialogCardItem3: false,
    dialogCardItem2: false,
    dialogCardItem1: false,
  }),
  methods: {
    //
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
</style>
