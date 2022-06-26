<template>
  <main class="contents nft">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="myitem-list">
          <v-tabs v-model="tabTraded" class="tab-rounds" :hide-slider="true">
            <v-tab>
              <span>TOP Traded</span>
            </v-tab>
            <v-tab>
              <span>Recently Traded</span>
            </v-tab>
          </v-tabs>
        </div>
        <div class="exd-ranking nft-ranking">
          <div class="exd-ranking-list" v-if="tabTraded === 0">
            <nft-item-ranking :itemRank="1" itemType="rare"></nft-item-ranking>
            <nft-item-ranking :itemRank="2" itemType="epic"></nft-item-ranking>
            <nft-item-ranking :itemRank="3" itemType="legendary"></nft-item-ranking>
            <nft-item-ranking :itemRank="4" itemType="rare"></nft-item-ranking>
            <nft-item-ranking :itemRank="5" itemType="epic"></nft-item-ranking>
            <nft-item-ranking :itemRank="6" itemType="legendary"></nft-item-ranking>
            <nft-item-ranking :itemRank="7" itemType="rare"></nft-item-ranking>
            <nft-item-ranking :itemRank="8" itemType="epic"></nft-item-ranking>
            <nft-item-ranking :itemRank="9" itemType="legendary"></nft-item-ranking>
            <nft-item-ranking :itemRank="10" itemType="rare"></nft-item-ranking>
            <div class="wrap-button">
              <button type="button" class="btn-viewmore">VIEW MORE</button>
            </div>
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
                      <card-nft :itemGrade="2" characterClass="sorcerer" smaller="sm"></card-nft>
                      <button type="button" class="btn-close-dialog" @click="dialogCardItem8 = false">Close Dialog</button>
                    </v-card>
                  </v-dialog>

                  <div class="myitem" data-sale-type="soldout">
                    <NftItemInfo
                      itemCategory="grade-5"
                      itemName="Shineworld Dragon Boots"
                      itemCount="+10"
                      infoCode="Pw.250,000 Lv.99 ASIA12"
                      snCode="NFT ID 100000240002"
                      characterClass="arbalist"
                    ></NftItemInfo>
                    <div class="myitem-detail">
                      <ul class="spec">
                        <li class="settlement">
                          <span>Traded Price</span>
                          <strong class="ico-wemixcredit ico-xs add-inside">
                            <span>4950.45</span>
                          </strong>
                        </li>
                        <li class="seller">
                          <span>Seller</span>
                          <div class="seller-info">
                            <div class="server">Asia 21 <span>Lv.64</span></div>
                            <span class="nickname">AbcdeAbcdeAb</span>
                          </div>
                        </li>
                        <li class="date">
                          <span>Transaction Time</span>
                          <strong>1 hour ago</strong>
                        </li>
                        <li class="scorp">
                          <a href="#">WEMIX SCOPE</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="myitem" data-sale-type="soldout">
                    <NftItemInfo
                      itemCategory="grade-4"
                      itemName="Shineworld Dragon Boots"
                      itemCount="+10"
                      character="arbalist-grade2"
                      infoCode="Pw.250,000 Lv.99 ASIA12"
                      snCode="NFT ID 100000240002"
                      characterClass="lancer"
                    ></NftItemInfo>
                    <div class="myitem-detail">
                      <ul class="spec">
                        <li class="settlement">
                          <span>Traded Price</span>
                          <strong class="ico-wemixcredit ico-xs add-inside">
                            <span>4950.45</span>
                          </strong>
                        </li>
                        <li class="seller">
                          <span>Seller</span>
                          <div class="seller-info">
                            <div class="server"></div>
                            <span class="nickname">AbcdeAbcdeAb</span>
                          </div>
                        </li>
                        <li class="date">
                          <span>Transaction Time</span>
                          <strong>1 hour ago</strong>
                        </li>
                        <li class="scorp">
                          <a href="#">WEMIX SCOPE</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="myitem" data-sale-type="soldout">
                    <NftItemInfo
                      itemCategory="grade-3"
                      itemName="Shineworld Dragon Boots"
                      itemCount="+10"
                      infoCode="Pw.250,000 Lv.99 ASIA12"
                      snCode="NFT ID 100000240002"
                      characterClass="arbalist"
                    ></NftItemInfo>
                    <div class="myitem-detail">
                      <ul class="spec">
                        <li class="settlement">
                          <span>Traded Price</span>
                          <strong class="ico-wemixcredit ico-xs add-inside">
                            <span>4950.45</span>
                          </strong>
                        </li>
                        <li class="seller">
                          <span>Seller</span>
                          <div class="seller-info">
                            <div class="server">Asia 21 <span>Lv.64</span></div>
                            <span class="nickname">AbcdeAbcdeAb</span>
                          </div>
                        </li>
                        <li class="date">
                          <span>Transaction Time</span>
                          <strong>1 hour ago</strong>
                        </li>
                        <li class="scorp">
                          <a href="#">WEMIX SCOPE</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="myitem" data-sale-type="soldout">
                    <NftItemInfo
                      itemCategory="grade-2"
                      itemName="Shineworld Dragon Boots"
                      itemCount="+10"
                      infoCode="Pw.250,000 Lv.99 ASIA12"
                      snCode="NFT ID 100000240002"
                      characterClass="taoist"
                    ></NftItemInfo>
                    <div class="myitem-detail">
                      <ul class="spec">
                        <li class="settlement">
                          <span>Traded Price</span>
                          <strong class="ico-wemixcredit ico-xs add-inside">
                            <span>4950.45</span>
                          </strong>
                        </li>
                        <li class="seller">
                          <span>Seller</span>
                          <div class="seller-info">
                            <div class="server">Asia 21 <span>Lv.64</span></div>
                            <span class="nickname">AbcdeAbcdeAb</span>
                          </div>
                        </li>
                        <li class="date">
                          <span>Transaction Time</span>
                          <strong>1 hour ago</strong>
                        </li>
                        <li class="scorp">
                          <a href="#">WEMIX SCOPE</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="myitem" data-sale-type="soldout">
                    <NftItemInfo
                      itemCategory="grade-2"
                      itemName="Shineworld Dragon Boots"
                      itemCount="+10"
                      infoCode="Pw.250,000 Lv.99 ASIA12"
                      snCode="NFT ID 100000240002"
                      characterClass="arbalist"
                    ></NftItemInfo>
                    <div class="myitem-detail">
                      <ul class="spec">
                        <li class="settlement">
                          <span>Traded Price</span>
                          <strong class="ico-wemixcredit ico-xs add-inside">
                            <span>4950.45</span>
                          </strong>
                        </li>
                        <li class="seller">
                          <span>Seller</span>
                          <div class="seller-info">
                            <div class="server">Asia 21 <span>Lv.64</span></div>
                            <span class="nickname">AbcdeAbcdeAb</span>
                          </div>
                        </li>
                        <li class="date">
                          <span>Transaction Time</span>
                          <strong>1 hour ago</strong>
                        </li>
                        <li class="scorp">
                          <a href="#">WEMIX SCOPE</a>
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
// import ItemRanking from '@/components-ui/common/ItemRanking';
import NftItemRanking from '@/components-ui/common/NftItemRanking';
import Footer from '@/partials/common/Footer';
// import Card from '@/components-ui/common/Card';
import CardNft from '@/components-ui/common/CardNft';
// import ItemInfo from '@/components-ui/mobile/ItemInfo';
import NftItemInfo from '@/components-ui/mobile/NftItemInfo';
import MyItem from '@/components-ui/mobile/MyItem';

export default defineComponent({
  name: 'ExdRanking',
  props: {},
  components: {
    // ItemRanking,
    NftItemRanking,
    Footer,
    // Card,
    CardNft,
    // ItemInfo,
    NftItemInfo,
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

.myitem-list {
  padding-top: 8px;
}
.exd-ranking-list {
  padding-top: 24px;
}
.exd-ranking.nft-ranking {
  padding-top: 0;
  .tab-soldout .list-myitem > li {
    margin-top: 0;
  }
}
.myitem-list {
  .v-tabs.tab-rounds {
    .v-tabs-bar {
      .v-tab.v-tab--active {
        background-color: #330044;
      }
    }
  }
}
.myitem {
  .myitem-detail {
    .spec {
      li {
        > span {
          color: #fff;
        }
        &.scorp {
          margin-top: 8px;
          a {
            position: relative;
            margin: 0 auto;
            &:before {
              content: '';
              display: block;
              position: absolute;
              bottom: -3px;
              left: 0;
              width: 100%;
              height: 1px;
              background-color: #fff;
            }
          }
        }
        strong {
          font-size: 18px;
        }
      }
    }
  }
}
.myitem-list {
  .tab-soldout {
    .list-myitem {
      > li {
        margin-top: 0;
        padding: 16px 0 23px;
        border-bottom: 1px solid rgba($color: #fff, $alpha: 0.3);
      }
    }
  }
}
.wrap-button {
  margin-top: 16px;
  .btn-viewmore {
    width: 100%;
    min-height: 48px;
    font-size: 12px;
    font-weight: normal;
    line-height: normal;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.05);
  }
}
.btn-open-dialog {
  z-index: 1;
}
</style>
