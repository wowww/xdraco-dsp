<template>
  <main class="contents nft">
    <banner-nft-top-video />

    <section class="section">
      <div class="section__inner">
        <div class="wrap-grid">
          <div class="grid-timeline">
            <div class="exchange-list">
              <h2 class="title-for-list">
                <span>Character NFTs</span>
              </h2>
              <div class="tab-score">
                <div class="tab-score__title">VIEW :</div>
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
              <nft-list-tab-bar :value="selectedTab" @input="setSelectedTab" />

              <nft-traded-section v-if="selectedTab === 0" :data="topTradedItems" use-rank use-badge />
              <nft-traded-section v-if="selectedTab === 1" :data="recentItems" />

              <nft-list-section-title>{{ t('t.exd.recommended') }}</nft-list-section-title>

              <ul class="list-item" :data-empty-message="recommendedItems.list && recommendedItems.list.length > 0 ? '' : t('s.nft.empty.sales')">
                <nft-item v-for="item in recommendedItems.list" :key="`nft-recommended-item-${item.seq || item.info.seq}`" :item="item" use-link />
              </ul>

              <nft-list-section-title>
                {{ t('w.nft.character') }}
                <span class="total-count nft" v-if="items.totalCount > 0">{{ items.totalCount | currency(0) }}</span>
              </nft-list-section-title>

              <nft-list-filter :value="itemsFilter" @change="setItemsFilter" />

              <ul class="list-item" :data-empty-message="items.list && items.list.length > 0 ? '' : t('s.nft.empty.sales')" style="margin-top: 24px">
                <nft-item v-for="item in items.list" :key="`nft-list-item-${item.seq || item.info.seq}`" :item="item" use-link />
              </ul>

              <div v-if="loading" :style="{ display: 'flex', width: '100%', justifyContent: 'center', margin: '10rem auto' }">
                <v-progress-circular class="ml-2" :size="24" :width="4" color="#f0f0f0" indeterminate />
              </div>

              <div class="wrap-button" v-if="items.more">
                <button type="button" class="btn-viewmore" @click="fetchNftItems(items.page + 1)">VIEW MORE</button>
              </div>
            </div>
          </div>

          <!-- 사이드영역 -->
          <div class="grid-side">
            <aside class="sidebar">
              <account-info />
              <sidebar-contact-us />
            </aside>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script>
import { defineComponent, onMounted, watch } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';
import BannerNftTop from '@/components/banner/NftTop';
import BannerNftTopVideo from '@/components/banner/NftTopVideo';
import NftIntroWallet from '@/components/nft/common/NftIntroWallet';
import AccountInfo from '@/components/account/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import NftCard from '@/components/nft/common/NftCard';
import NftItem from '@/components/nft/common/NftItem';
import Footer from '@/partials/common/Footer';
import NftCharacterClassFilter from '@/components/nft/desktop/NftCharacterClassFilter';
import NftListOrder from '@/components/nft/desktop/NftListOrder';
import NftTradedSection from '@/components/nft/desktop/NftTradedSection';
import NftListTabBar from '@/components/nft/common/NftListTabBar';
import NftListSectionTitle from '@/components/nft/common/NftListSectionTitle';
import NftListFilter from '@/components/nft/desktop/NftListFilter';
import CurrencyNotice from '@/components/common/CurrencyNotice';

const { useState: useNftState, useMutations: useNftMutations, useActions: useNftActions } = createNamespacedHelpers('nft');

export default defineComponent({
  name: 'NftList',
  components: {
    CurrencyNotice,
    SidebarContactUs,
    NftTradedSection,
    NftListTabBar,
    NftListOrder,
    NftListSectionTitle,
    NftCharacterClassFilter,
    NftListFilter,
    BannerNftTop,
    BannerNftTopVideo,
    NftIntroWallet,
    NftItem,
    NftCard,
    AccountInfo,
    Footer,
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
      setSelectedTab(0);
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
      setSelectedTab,
      setItemsFilter,
      setViewMode,
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
@import '~@/assets/sass/desktop/app';
@import '~@/assets/sass/components/tab-score';
</style>
