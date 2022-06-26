<template>
  <main class="contents ntf">
    <section class="section">
      <div class="section__inner">
        <div class="exchange-list for-list">
          <div class="subnav-block"></div>
          <div class="myitem-list">
            <v-tabs v-model="selectedTab" class="tab-rounds" :hide-slider="true" @change="setSelectedTab">
              <v-tab>
                <span>{{ t('t.exd.top.traded') }}</span>
              </v-tab>
              <v-tab>
                <span>{{ t('t.exd.recent.traded') }}</span>
              </v-tab>
            </v-tabs>
          </div>
          <div class="exd-ranking nft-ranking">
            <!-- Top Traded -->
            <div class="exd-ranking-list" v-if="selectedTab === 0">
              <nft-top-traded-item
                v-for="(item, itemIdx) in topTradedItems.list"
                :key="`ntf-top-traded-item-${item.seq || item.info.seq}`"
                :item="item"
                :rank="itemIdx + 1"
              />
              <ul class="list" v-if="!topTradedItems.list || topTradedItems.list.length === 0" :data-empty-message="t('s.nft.empty.traded')" />

              <div class="wrap-button" v-if="topTradedItems.more && topTradedItems.page < 10">
                <button type="button" class="btn-viewmore" @click="fetchNftTopTradedItems(topTradedItems.page + 1)">VIEW MORE</button>
              </div>
            </div>

            <!-- Recently Traded -->
            <div class="myitem-list" v-if="selectedTab === 1">
              <nft-list-filter :value="historyFilter" @change="setHistoryFilter" variants="class level power price chip" />
              <div class="tab-soldout">
                <ul
                  class="list"
                  v-if="!recentHistoryItems.list || recentHistoryItems.list.length === 0"
                  :data-empty-message="t('s.nft.empty.traded')"
                />
                <ul class="list-myitem">
                  <li v-for="item in recentHistoryItems.list" :key="`nft-recent-item-${item.seq || item.info.seq}`">
                    <div class="myitem" data-sale-type="soldout">
                      <nft-info
                        :character-name="item.info.characterName"
                        :character-class="item.info.class"
                        :world-name="item.info.worldName"
                        :power-score="item.info.powerScore"
                        :lv="item.info.lv"
                        :nft-id="item.info.nftID"
                        :seq="`${item.info.seq}`"
                      />

                      <div class="myitem-detail">
                        <ul class="spec">
                          <li class="settlement">
                            <span>Traded Price</span>
                            <strong class="ico-wemixcredit ico-xs add-inside">
                              <span>{{ item.info.price | currency(0) }}</span>
                            </strong>
                          </li>
                          <li class="seller">
                            <span>Seller</span>
                            <div class="seller-info">
                              <span class="nickname">
                                <v-tooltip bottom>
                                  <template v-slot:activator="{ on, attrs }">
                                    <span v-bind="attrs" v-on="on">{{ item.seller.userAddress | truncateMiddle }}</span>
                                  </template>
                                  <span>{{ item.seller.userAddress }}</span>
                                </v-tooltip>
                              </span>
                            </div>
                          </li>
                          <li class="date">
                            <span>Transaction Time</span>
                            <strong>{{ item.info.tradeDT | fromNow }} </strong>
                          </li>
                          <li class="scorp">
                            <a
                              :href="`https://scope.wemixnetwork.com/1003/nft/0xc234e58cb077ccf4fbe57d3ac27db0d1cdfe0473/${item.info.nftID}`"
                              target="_blank"
                            >
                              WEMIX SCOPE
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="wrap-button" v-if="recentHistoryItems.more">
                  <button type="button" class="btn-viewmore" @click="fetchNftRecentHistoryItems(recentHistoryItems.page + 1)">VIEW MORE</button>
                </div>

                <!-- Case : No data -->
                <ul class="list" data-empty-message="데이터가 없습니다."></ul>
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
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import 'swiper/swiper-bundle.css'; // (>= Swiper 6.x)
import 'swiper/css/swiper.css'; // (<= Swiper 5.x)
import { computed, defineComponent, onMounted, reactive, ref, toRefs, watch } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import AccountInfo from '@/components/account/AccountInfo';
import BackButton from '@/components/common/BackButton';
import NftTopTradedItem from '@/components/nft/desktop/NftTopTradedItem';
import NftRecentItem from '@/components/nft/desktop/NftRecentItem';
import NftItemRanking from '@/components-ui/common/NftItemRanking';
import Footer from '@/partials/common/Footer';
import CardNft from '@/components-ui/common/CardNft';
import NftItemInfo from '@/components-ui/mobile/NftItemInfo';
import MyItem from '@/components-ui/mobile/MyItem';
import NftInfo from '@/components/nft/desktop/NftInfo';
import useI18n from '@/utils/useI18n';
import NftHistoryFilter from '@/components/nft/desktop/NftHistoryFilter';
import NftListFilter from '@/components/nft/mobile/NftListFilter';

const { useState: useNftState, useMutations: useNftMutations, useActions: useNftActions } = createNamespacedHelpers('nft');

export default defineComponent({
  name: 'NftTradeHistory',
  props: {},
  components: {
    Swiper,
    SwiperSlide,
    NftItemRanking,
    NftHistoryFilter,
    NftListFilter,
    Footer,
    CardNft,
    NftItemInfo,
    NftInfo,
    MyItem,
    NftRecentItem,
    NftTopTradedItem,
    BackButton,
    AccountInfo,
  },
  setup() {
    const { topTradedItems, selectedTab, historyFilter, recentHistoryItems } = useNftState([
      'topTradedItems',
      'selectedTab',
      'historyFilter',
      'recentHistoryItems',
    ]);

    const { setSelectedTab, setHistoryFilter } = useNftMutations(['setSelectedTab', 'setHistoryFilter']);

    const { fetchNftTopTradedItems, fetchNftRecentHistoryItems } = useNftActions(['fetchNftTopTradedItems', 'fetchNftRecentHistoryItems']);

    onMounted(() => {
      fetchNftTopTradedItems();
      fetchNftRecentHistoryItems();
    });

    watch(
      () => historyFilter.value,
      (current, before) => {
        fetchNftRecentHistoryItems();
      },
    );

    return {
      ...useI18n(),
      topTradedItems,
      selectedTab,
      setSelectedTab,
      historyFilter,
      setHistoryFilter,
      recentHistoryItems,
      fetchNftTopTradedItems,
      fetchNftRecentHistoryItems,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app.scss';
// @import '~@/assets/sass/mobile/ui-guide.scss';

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
