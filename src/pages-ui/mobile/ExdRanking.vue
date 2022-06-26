<template>
  <main class="contents">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="myitem-list">
          <v-tabs v-model="tabTraded" class="tab-rounds" :hide-slider="true">
            <v-tab>
              <span>Top Traded</span>
            </v-tab>
            <v-tab>
              <span>Recently Traded</span>
            </v-tab>
          </v-tabs>
        </div>
        <div class="exd-ranking">
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

          <div class="myitem-list" v-if="tabTraded === 1">
            <div class="tab-soldout">
              <ul class="list-myitem">
                <li>
                  <!-- 상품 Dialog -->
                  <v-dialog content-class="dialog-card" v-model="dialogCardItem8">
                    <template v-slot:activator="{ on, attrs }">
                      <button type="button" class="btn-open-dialog" v-bind="attrs" v-on="on">상품 카드 보기</button>
                    </template>
                    <v-card>
                      <Card itemType="legendary"></Card>
                      <button type="button" class="btn-close-dialog" @click="dialogCardItem8 = false">Close Dialog</button>
                    </v-card>
                  </v-dialog>

                  <div class="myitem" data-sale-type="soldout">
                    <ItemInfo itemCategory="grade-5" itemName="Shineworld Dragon Boots" itemCount="+10" snCode="Unique No. S15"></ItemInfo>
                    <div class="myitem-detail">
                      <ul class="spec">
                        <li class="date">
                          <span>Transaction Time</span>
                          <strong>2021.11.20 15:35:27 UTC+8</strong>
                        </li>
                        <li class="seller">
                          <span>Seller</span>
                          <div class="seller-info">
                            <div class="server">Asia 21</div>
                            <span class="nickname">AbcdeAbcdeAb</span>
                          </div>
                        </li>
                        <li class="settlement">
                          <span>Traded Price</span>
                          <strong class="ico-hydra ico-xs add-inside">
                            <span>4950.45</span>
                          </strong>
                        </li>
                      </ul>
                    </div>
                  </div>
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

                  <div class="myitem" data-sale-type="soldout">
                    <ItemInfo itemCategory="grade-4" itemName="Shineworld Dragon Boots" itemCount="+10" snCode="Unique No. S15"></ItemInfo>
                    <div class="myitem-detail">
                      <ul class="spec">
                        <li class="date">
                          <span>Transaction Time</span>
                          <strong>2021.11.20 15:35:27 UTC+8</strong>
                        </li>
                        <li class="seller">
                          <span>Seller</span>
                          <div class="seller-info">
                            <div class="server">Asia 21</div>
                            <span class="nickname">AbcdeAbcdeAb</span>
                          </div>
                        </li>
                        <li class="settlement">
                          <span>Traded Price</span>
                          <strong class="ico-darco ico-xs add-inside">
                            <span>4950.45</span>
                          </strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <!-- 상품 Dialog -->
                  <v-dialog content-class="dialog-card" v-model="dialogCardItem6">
                    <template v-slot:activator="{ on, attrs }">
                      <button type="button" class="btn-open-dialog" v-bind="attrs" v-on="on">상품 카드 보기</button>
                    </template>
                    <v-card>
                      <Card itemType="rare"></Card>
                      <button type="button" class="btn-close-dialog" @click="dialogCardItem6 = false">Close Dialog</button>
                    </v-card>
                  </v-dialog>

                  <div class="myitem" data-sale-type="soldout">
                    <ItemInfo itemCategory="grade-3" itemName="Shineworld Dragon Boots" itemCount="+10" snCode="Unique No. S15"></ItemInfo>
                    <div class="myitem-detail">
                      <ul class="spec">
                        <li class="date">
                          <span>Transaction Time</span>
                          <strong>2021.11.20 15:35:27 UTC+8</strong>
                        </li>
                        <li class="seller">
                          <span>Seller</span>
                          <div class="seller-info">
                            <div class="server">Asia 21</div>
                            <span class="nickname">AbcdeAbcdeAb</span>
                          </div>
                        </li>
                        <li class="settlement">
                          <span>Traded Price</span>
                          <strong class="ico-darco ico-xs add-inside">
                            <span>4950.45</span>
                          </strong>
                        </li>
                      </ul>
                    </div>
                  </div>
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

                  <div class="myitem" data-sale-type="soldout">
                    <ItemInfo itemCategory="grade-2" itemName="Shineworld Dragon Boots" itemCount="+10" snCode="Unique No. S15"></ItemInfo>
                    <div class="myitem-detail">
                      <ul class="spec">
                        <li class="date">
                          <span>Transaction Time</span>
                          <strong>2021.11.20 15:35:27 UTC+8</strong>
                        </li>
                        <li class="seller">
                          <span>Seller</span>
                          <div class="seller-info">
                            <div class="server">Asia 21</div>
                            <span class="nickname">AbcdeAbcdeAb</span>
                          </div>
                        </li>
                        <li class="settlement">
                          <span>Traded Price</span>
                          <strong class="ico-darco ico-xs add-inside">
                            <span>4950.45</span>
                          </strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="wrap-button">
                <button type="button" class="btn-viewmore">VIEW MORE</button>
              </div>
            </div>
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
import Card from '@/components-ui/common/Card';
import ItemInfo from '@/components-ui/mobile/ItemInfo';
import MyItem from '@/components-ui/mobile/MyItem';

export default defineComponent({
  name: 'ExdRanking',
  props: {},
  components: {
    ItemRanking,
    Footer,
    Card,
    ItemInfo,
    MyItem,
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
@import '~@/assets/sass/mobile/app.scss';
// @import '~@/assets/sass/mobile/ui-guide.scss';
</style>
