<template>
  <main class="contents nft">
    <banner-nft-top-video />

    <section class="section">
      <div class="section__inner">
        <div class="exchange-list for-list">
          <h2 class="title-for-list">
            <span>Character NFTs</span>
          </h2>
          <div class="tab-score">
            <div class="tab-score__title">VIEW :</div>
            <div class="wrap-score-button">
              <div>
                <template v-if="viewMode === 'ms'">MIRAGE Score</template>
                <template v-else>POWER Score</template>
              </div>
              <div class="tab-score__button">
                <button type="button" class="button" :class="{ 'button--active': viewMode === 'ps' }" @click="setViewMode('ps')">
                  <img src="@/assets/img/common/tab-score/icon-power.webp" class="icon" height="20" alt="Power Score" />
                  <span class="text">Power Score</span>
                </button>
                <button type="button" class="button" :class="{ 'button--active': viewMode === 'ms' }" @click="setViewMode('ms')">
                  <img src="@/assets/img/common/tab-score/icon-mirage.webp" class="icon" height="20" alt="MIRAGE Score" />
                  <span class="text">MIRAGE Score</span>
                </button>
              </div>
            </div>
          </div>

          <nft-list-tab-bar :value="selectedTab" @input="setSelectedTab" />
          <nft-traded-section v-if="selectedTab === 0" :data="topTradedItems" use-rank use-badge />
          <nft-traded-section v-if="selectedTab === 1" :data="recentItems" />

          <!-- Recommended -->
          <div class="list-bar">
            <div class="list-bar__title">{{ t('t.exd.recommended') }}</div>
          </div>
          <ul class="list-item" :data-empty-message="recommendedItems.list && recommendedItems.list.length > 0 ? '' : t('s.nft.empty.sales')">
            <nft-item
              v-for="item in recommendedItems.list"
              :key="`nft-recommended-item-${item.seq || item.info.seq}`"
              :item="item"
              size="xs"
              use-link
            />
          </ul>

          <!-- List Bar -->
          <div class="list-bar">
            <div class="list-bar__title">
              {{ t('w.nft.character') }}
              <span class="total-count nft" v-if="items.totalCount > 0">{{ items.totalCount | currency(0) }}</span>
            </div>
          </div>

          <nft-list-filter :value="itemsFilter" @change="setItemsFilter" />

          <ul class="list-item" :data-empty-message="items.list && items.list.length > 0 ? '' : t('s.exd.sale.no-item')" style="margin-top: 24px">
            <nft-item v-for="item in items.list" :key="`nft-list-item-${item.seq || item.info.seq}`" size="xs" :item="item" use-link />
          </ul>

          <div class="wrap-button" v-if="items.more">
            <button type="button" class="btn-viewmore" @click="fetchNftItems(items.page + 1)">VIEW MORE</button>
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
import { defineComponent, onMounted, watch } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import BannerNftTop from '@/components/banner/NftTop';
import BannerNftTopVideo from '@/components/banner/NftTopVideo';
import NftIntroWallet from '@/components/nft/common/NftIntroWallet';
import NftItem from '@/components/nft/common/NftItem';
import CardNft from '@/components-ui/common/CardNft';
import Footer from '@/partials/common/Footer';
import NftListOrder from '@/components/nft/desktop/NftListOrder';
import NftCharacterClassFilter from '@/components/nft/desktop/NftCharacterClassFilter';
import SelectFilter from '@/components-ui/mobile/SelectFilter';
import SelectOrder from '@/components-ui/mobile/SelectOrder';
import SelectCheckFilter from '@/components-ui/mobile/SelectCheckFilter';
import useI18n from '@/utils/useI18n';
import NftTradedSection from '@/components/nft/mobile/NftTradedSection';
import NftListTabBar from '@/components/nft/common/NftListTabBar';
import NftListFilter from '@/components/nft/mobile/NftListFilter';
import CurrencyNotice from '@/components/common/CurrencyNotice';

const { useState: useNftState, useMutations: useNftMutations, useActions: useNftActions } = createNamespacedHelpers('nft');

const genarateFilter = (isReset) => {
  return {
    class: '',
    category: '',
    rank: '',
    tier: '',
    enhance: '',
    collectibles: false,
    date: !isReset ? { title: 'Date Listed: Newest', abc: 0 } : undefined,
  };
};

export default defineComponent({
  name: 'NftList',
  components: {
    CurrencyNotice,
    BannerNftTop,
    BannerNftTopVideo,
    NftListTabBar,
    NftListFilter,
    NftTradedSection,
    NftIntroWallet,
    NftItem,
    CardNft,
    Footer,
    NftListOrder,
    NftCharacterClassFilter,
    SelectFilter,
    SelectOrder,
    Swiper,
    SwiperSlide,
    SelectCheckFilter,
  },
  methods: {
    emitSelectOrder() {
      if (!this.showLayerPriceRange) {
        return;
      }
      this.showLayerPriceRange = false;
    },
    removeSelectFilter(item) {
      this.filters[item] = '';
    },
    removeCollectiblesFilter() {
      this.filters.collectibles = !this.filters.collectibles;
    },
    removeDateFilter() {
      this.filters.date = undefined;
    },
    resetFilters() {
      this.filters = genarateFilter(true);
    },
    hideLayerFilter(target) {
      Object.keys(this.showLayer).forEach((layer) => {
        if (layer === target) {
          return;
        }
        this.showLayer[layer] = false;
      });
    },
    toggleLayerFilter(target) {
      if (!target) {
        return;
      }
      this.hideLayerFilter(target);
      this.showLayer[target] = !this.showLayer[target];
    },
    handleClickSwiperFilter(index) {
      this.swiperFilter.slideTo(index);
    },
  },
  setup() {
    const { loading, selectedTab, items, itemsFilter, topTradedItems, recommendedItems, recentItems, viewMode } = useNftState([
      'loading',
      'selectedTab',
      'items',
      'itemsFilter',
      'topTradedItems',
      'recommendedItems',
      'recentItems',
      'viewMode',
    ]);
    const { setSelectedTab, setItemsFilter, setViewMode } = useNftMutations(['setSelectedTab', 'setItemsFilter', 'setViewMode']);
    const { fetchNftItems, fetchNftTopTradedItems, fetchNftRecommendedItems, fetchNftRecentItems } = useNftActions([
      'fetchNftItems',
      'fetchNftTopTradedItems',
      'fetchNftRecommendedItems',
      'fetchNftRecentItems',
    ]);

    onMounted(() => {
      fetchNftItems();
      fetchNftTopTradedItems();
      fetchNftRecommendedItems();
      fetchNftRecentItems();
    });

    watch(
      () => itemsFilter.value,
      () => {
        fetchNftItems();
      },
    );

    return {
      ...useI18n(),
      loading,
      selectedTab,
      setItemsFilter,
      setViewMode,
      setSelectedTab,
      items,
      itemsFilter,
      topTradedItems,
      recommendedItems,
      recentItems,
      viewMode,
      fetchNftItems,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app.scss';
@import '~@/assets/sass/components/tab-score';
</style>
