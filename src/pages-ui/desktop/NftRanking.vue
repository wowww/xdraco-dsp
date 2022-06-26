<template>
  <main class="contents nft">
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

              <!-- Recently Traded -->
              <div class="wrap-suggest" v-if="tabTraded === 1">
                <div class="suggest-list type3">
                  <ul class="list">
                    <li>
                      <!-- 상품 Dialog -->
                      <v-dialog content-class="dialog-card" v-model="dialogCardItem8">
                        <template v-slot:activator="{ on, attrs }">
                          <button type="button" class="btn-open-dialog" v-bind="attrs" v-on="on">상품 카드 보기</button>
                        </template>
                        <v-card>
                          <card-nft :itemGrade="3" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                          <button type="button" class="btn-close-dialog" @click="dialogCardItem8 = false">Close Dialog</button>
                        </v-card>
                      </v-dialog>

                      <NftItemInfo itemCategory="grade-3" itemName="[U] Overwhelming Mystical Piece" itemCount="+1"></NftItemInfo>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-wemixcredit ico-ss add-inside"><span>3,100</span></strong>
                        </dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="lancer" name="nonososomama" server="ASIA 22"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>a few seconds ago</dd>
                      </dl>
                      <div class="scope">
                        <a href="#">WEMIX SCOPE</a>
                      </div>
                    </li>
                    <li>
                      <NftItemInfo itemCategory="grade-4" itemName="Shineworld Dragon Boots" itemCount="+1"></NftItemInfo>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-wemixcredit ico-ss add-inside"><span>3,100</span></strong>
                        </dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="lancer" name="nonososomama" server="ASIA 22"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>a few seconds ago</dd>
                      </dl>
                      <div class="scope">
                        <a href="#">WEMIX SCOPE</a>
                      </div>
                    </li>
                    <li>
                      <NftItemInfo itemCategory="grade-5" itemName="Deep Secret Martial Uniform Top" itemCount="+20"></NftItemInfo>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-wemixcredit ico-ss add-inside"><span>3,100</span></strong>
                        </dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="" name="nonososomama" server="-"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>a few seconds ago</dd>
                      </dl>
                      <div class="scope">
                        <a href="#">WEMIX SCOPE</a>
                      </div>
                    </li>
                    <li>
                      <NftItemInfo itemCategory="grade-2" itemName="Shineworld Dragon Boots" itemCount="+10"></NftItemInfo>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-wemixcredit ico-ss add-inside"><span>3,100</span></strong>
                        </dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="lancer" name="nonososomama" server="ASIA 22"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>a few seconds ago</dd>
                      </dl>
                      <div class="scope">
                        <a href="#">WEMIX SCOPE</a>
                      </div>
                    </li>
                    <li>
                      <NftItemInfo itemCategory="grade-3" itemName="[U] Overwhelming Mystical Piece" itemCount="+1"></NftItemInfo>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-wemixcredit ico-ss add-inside"><span>3,100</span></strong>
                        </dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="lancer" name="nonososomama" server="ASIA 22"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>a few seconds ago</dd>
                      </dl>
                      <div class="scope">
                        <a href="#">WEMIX SCOPE</a>
                      </div>
                    </li>
                    <li>
                      <NftItemInfo itemCategory="grade-4" itemName="Shineworld Dragon Boots" itemCount="+1"></NftItemInfo>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-wemixcredit ico-ss add-inside"><span>3,100</span></strong>
                        </dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="lancer" name="nonososomama" server="ASIA 22"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>a few seconds ago</dd>
                      </dl>
                      <div class="scope">
                        <a href="#">WEMIX SCOPE</a>
                      </div>
                    </li>
                    <li>
                      <NftItemInfo itemCategory="grade-5" itemName="Deep Secret Martial Uniform Top" itemCount="+20"></NftItemInfo>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-wemixcredit ico-ss add-inside"><span>3,100</span></strong>
                        </dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="lancer" name="nonososomama" server="ASIA 22"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>a few seconds ago</dd>
                      </dl>
                      <div class="scope">
                        <a href="#">WEMIX SCOPE</a>
                      </div>
                    </li>
                    <li>
                      <NftItemInfo itemCategory="grade-2" itemName="Shineworld Dragon Boots" itemCount="+10"></NftItemInfo>
                      <dl class="price">
                        <dt>Price</dt>
                        <dd>
                          <strong class="ico-wemixcredit ico-ss add-inside"><span>3,100</span></strong>
                        </dd>
                      </dl>
                      <dl class="seller">
                        <dt>Seller</dt>
                        <dd>
                          <CharInfo character="lancer" name="nonososomama" server="ASIA 22"></CharInfo>
                        </dd>
                      </dl>
                      <dl class="date">
                        <dt>Transaction Time</dt>
                        <dd>a few seconds ago</dd>
                      </dl>
                      <div class="scope">
                        <a href="#">WEMIX SCOPE</a>
                      </div>
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
// import ItemRanking from '@/components-ui/common/ItemRanking';
import NftItemRanking from '@/components-ui/common/NftItemRanking';
import Footer from '@/partials/common/Footer';
import AccountInfo from '@/components-ui/desktop/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import MyItem from '@/components-ui/desktop/MyItem';
// import ItemInfo from '@/components-ui/desktop/ItemInfo';
import NftItemInfo from '@/components-ui/desktop/NftItemInfo';
import CharInfo from '@/components-ui/desktop/CharInfo';
// import Card from '@/components-ui/common/Card';
import CardNft from '@/components-ui/common/CardNft';

export default defineComponent({
  name: 'NftRanking',
  props: {},
  components: {
    // ItemRanking,
    NftItemRanking,
    Footer,
    AccountInfo,
    MyItem,
    // ItemInfo,
    NftItemInfo,
    CharInfo,
    // Card,
    CardNft,
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
.nft {
  .exd-ranking-list {
    .wrap-button {
      margin-top: 24px;
      .btn-viewmore {
        --viewmore-height: 62px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0 12px;
        min-height: var(--viewmore-height);
        font-size: 12px;
        font-weight: 400;
        color: #fff;
        background-color: rgba(255, 255, 255, 0.05);
        vertical-align: top;
        box-sizing: border-box;
      }
    }
  }
  .btn-open-dialog {
    z-index: 1;
  }
}
</style>
