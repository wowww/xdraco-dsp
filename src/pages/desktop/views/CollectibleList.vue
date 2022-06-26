<template>
  <main class="contents collectible">
    <banner-collectible-top />

    <section class="section">
      <div class="section__inner">
        <div class="wrap-grid">
          <div class="grid-timeline">
            <div class="exchange-list">
              <top-traded-title collectibles v-if="collectiblesTopTradedItems.length > 2" />
              <top-traded-widget collectibles v-if="collectiblesTopTradedItems.length > 2" />

              <div class="list-bar">
                <div class="list-bar__title">
                  {{ t('w.collectible.items') }}
                  <span class="total-count" v-if="itemsTotal > 0">{{ itemsTotal | currency(0) }}</span>
                </div>
                <v-tabs class="list-bar__tab" background-color="transparent" v-show="false">
                  <v-tab>All</v-tab>
                  <v-tab>Dark Steel</v-tab>
                </v-tabs>
              </div>

              <!-- Filter -->
              <div id="wrapFilterList" class="wrap-filter">
                <div class="wrap-filter__inner">
                  <list-filter
                    :placeholder="t('w.common.item.class')"
                    filter-key="class"
                    :items="[
                      { text: `${t('w.common.item.class')} (${t('w.common.all')})`, value: 0 },
                      { text: t('w.rounds.item.class.1'), value: 1 },
                      { text: t('w.rounds.item.class.2'), value: 2 },
                      { text: t('w.rounds.item.class.3'), value: 3 },
                      { text: t('w.rounds.item.class.5'), value: 5 },
                      { text: t('w.rounds.item.class.4'), value: 4 },
                    ]"
                  />
                  <list-filter
                    :placeholder="t('w.common.item.type')"
                    filter-key="itemType"
                    :items="[
                      { text: `${t('w.common.item.type')} (${t('w.common.all')})`, value: '0' },
                      { text: t('w.exd.item-type.2_1'), value: '2_1' },
                      { text: t('w.exd.item-type.2_2'), value: '2_2' },
                      { text: t('w.exd.item-type.2_3'), value: '2_3' },
                      { text: t('w.exd.item-type.2_5'), value: '2_5' },
                      { text: t('w.exd.item-type.2_4'), value: '2_4' },
                      { text: t('w.exd.item-type.3_1.base'), value: '3_1' },
                      { text: t('w.exd.item-type.3_2.base'), value: '3_2' },
                      { text: t('w.exd.item-type.3_3.base'), value: '3_3' },
                      { text: t('w.exd.item-type.3_4.base'), value: '3_4' },
                      { text: t('w.exd.item-type.4_1'), value: '4_1' },
                      { text: t('w.exd.item-type.4_2'), value: '4_2' },
                      { text: t('w.exd.item-type.4_3'), value: '4_3' },
                      // { text: t('w.exd.item-type.4_4'), value: '4_4' },
                      { text: t('w.exd.item-type.6_33'), value: '6_33' },
                      { text: t('w.exd.item-type.8_1'), value: '8_1' },
                      { text: t('w.exd.item-type.8_2'), value: '8_2' },
                      { text: t('w.exd.item-type.8_3'), value: '8_3' },
                      { text: t('w.exd.item-type.8_4'), value: '8_4' },
                      { text: t('w.exd.item-type.8_5'), value: '8_5' },
                      { text: t('w.exd.item-type.8_6'), value: '8_6' },
                      { text: t('w.exd.item-type.8_7'), value: '8_7' },
                      // { text: t('w.exd.item-type.8_8'), value: '8_8' },
                      { text: t('w.exd.item-type.17_2'), value: '17_2' },
                      // { text: t('w.exd.item-type.20_1'), value: '20_1' },
                      { text: t('w.exd.item-type.21_1'), value: '21_1' },
                      { text: t('w.exd.item-type.21_2'), value: '21_2' },
                    ]"
                  />
                  <list-filter
                    :placeholder="t('w.common.item.grade')"
                    filter-key="grade"
                    :items="[
                      { text: `${t('w.common.item.grade')} (${t('w.common.all')})`, value: 0 },
                      { text: t('w.rounds.item.grade.5'), value: 5 },
                      { text: t('w.rounds.item.grade.4'), value: 4 },
                      { text: t('w.rounds.item.grade.3'), value: 3 },
                      { text: t('w.rounds.item.grade.2'), value: 2 },
                    ]"
                  />
                  <list-filter
                    :placeholder="t('w.common.item.tier')"
                    filter-key="tier"
                    :items="[
                      { text: `${t('w.common.item.tier')} (${t('w.common.all')})`, value: 0 },
                      { text: 'IV', value: 4 },
                      { text: 'III', value: 3 },
                      { text: 'II', value: 2 },
                      { text: 'I', value: 1 },
                    ]"
                  />
                  <list-filter
                    :placeholder="t('w.common.item.enhance')"
                    filter-key="enhance"
                    :items="[
                      { text: `${t('w.common.item.enhance')} (${t('w.common.all')})`, value: -1 },
                      { text: '+0', value: 0 },
                      { text: '+1', value: 1 },
                      { text: '+2', value: 2 },
                      { text: '+3', value: 3 },
                      { text: '+4', value: 4 },
                      { text: '+5', value: 5 },
                      { text: '+6', value: 6 },
                      { text: '+7', value: 7 },
                      { text: '+8', value: 8 },
                      { text: '+9', value: 9 },
                      { text: '+10', value: 10 },
                      { text: '+11', value: 11 },
                      { text: '+12', value: 12 },
                    ]"
                  />
                  <div class="wrap-price-range" v-show="false">
                    <button type="button" class="btn-price-range" @click="toogleLayerPriceRange">Price Range</button>
                    <div class="layer-price-range" v-if="showLayerPriceRange">
                      <div class="wrap-range">
                        <v-text-field
                          type="number"
                          class="input-range"
                          label="From"
                          id="inputFrom"
                          prepend-inner-icon="mdi-map-marker"
                          dense
                          solo
                          flat
                          hide-spin-buttons
                          v-model="minDraco"
                        />
                        <v-text-field
                          type="number"
                          class="input-range"
                          label="To"
                          prepend-inner-icon="mdi-map-marker"
                          dense
                          solo
                          flat
                          hide-spin-buttons
                          v-model="maxDraco"
                        />
                      </div>
                      <div class="wrap-button">
                        <button type="button" class="btn btn-primary2 btn-sm" :disabled="invalidatePrice" @click="applyPrice">Apply</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="wrap-filter-chip">
                <div class="wrap-chips">
                  <v-chip v-if="filter.class !== 0" outlined label @click="resetFilter('class', 0)">
                    {{ t(`w.rounds.item.class.${filter.class}`) }}
                    <img src="@/assets/img/desktop/dsp/ico-close.webp" />
                  </v-chip>

                  <v-chip v-if="filter.itemType !== '0'" outlined label @click="resetFilter('itemType', '0')">
                    {{ t(`w.exd.item-type.${filter.itemType}${filter.itemType.startsWith('3_') ? '.base' : ''}`) }}
                    <img src="@/assets/img/desktop/dsp/ico-close.webp" />
                  </v-chip>

                  <v-chip v-if="filter.grade !== 0" outlined label @click="resetFilter('grade', 0)">
                    {{ t(`w.rounds.item.grade.${filter.grade}`) }}
                    <img src="@/assets/img/desktop/dsp/ico-close.webp" />
                  </v-chip>

                  <v-chip v-if="filter.tier !== 0" outlined label @click="resetFilter('tier', 0)">
                    Tier {{ filter.tier | roman }}
                    <img src="@/assets/img/desktop/dsp/ico-close.webp" />
                  </v-chip>

                  <v-chip v-if="filter.enhance !== -1" outlined label @click="resetFilter('enhance', -1)">
                    + {{ filter.enhance }}
                    <img src="@/assets/img/desktop/dsp/ico-close.webp" />
                  </v-chip>

                  <v-chip v-if="filter.sort !== 'latest'" outlined label @click="resetFilter('sort', 'latest')">
                    {{ t(`w.exd.filter.order.${filter.sort}`) }}
                    <img src="@/assets/img/desktop/dsp/ico-close.webp" />
                  </v-chip>

                  <div class="btn-filter-reset" v-if="hasFilter" @click="resetAllFilter(1)">
                    <span>Reset</span>
                    <img src="@/assets/img/common/btn-reset-filter.webp" width="16" />
                  </div>

                  <div class="filter-divider"></div>
                </div>
                <list-order collectible />
              </div>
              <!-- Item List -->
              <ul class="list-item" :data-empty-message="items && items.length > 0 ? '' : t('s.exd.sale.no-item')" style="margin-top: 24px">
                <exchange-item
                  use-link
                  v-for="item in items"
                  :key="`exchange-item-${item.tradeUID}`"
                  :exchange-item="item"
                  card-size="sm"
                  collectible
                />
              </ul>

              <div class="wrap-button" v-if="itemsHasMore && !loading">
                <button type="button" class="btn-viewmore" @click="fetchCollectibleItems(itemsPage + 1)">VIEW MORE</button>
              </div>
            </div>
          </div>

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
import { computed, defineComponent, onBeforeMount, onMounted, onUnmounted, ref, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';

// eslint-disable-next-line import/extensions
import Card from '@/components-ui/common/Card';
import AccountInfo from '@/components/account/AccountInfo';
import BannerCollectibleTop from '@/components/banner/CollectibleTop';
import CurrencyNotice2 from '@/components/common/CurrencyNotice2';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import DspRoundSeason1 from '@/components/dsp/round/banner/DspRoundSeason1';
import ExchangeItem from '@/components/exd/common/ExchangeItem';
import TopTradedTitle from '@/components/exd/common/TopTradedTitle';
import ListFilter from '@/components/exd/desktop/ListFilter';
import ListOrder from '@/components/exd/desktop/ListOrder';
import ListUniqueFilter from '@/components/exd/desktop/ListUniqueFilter';
import TopTradedWidget from '@/components/exd/desktop/TopTradedWidget';
import Footer from '@/partials/common/Footer';
import useI18n from '@/utils/useI18n';

const { useState: useSearchState, useMutations: useSearchMutations, useActions: useSearchActions } = createNamespacedHelpers('search');

const {
  useState: useCollectibleState,
  useActions: useCollectibleActions,
  useMutations: useCollectibleMutations,
} = createNamespacedHelpers('collectible');

export default defineComponent({
  name: 'CollectibleList',
  components: {
    CurrencyNotice2,
    BannerCollectibleTop,
    TopTradedWidget,
    TopTradedTitle,
    ListUniqueFilter,
    ListOrder,
    ListFilter,
    ExchangeItem,
    Footer,
    AccountInfo,
    DspRoundSeason1,
    Card,
    SidebarContactUs,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
  methods: {
    toogleLayerPriceRange() {
      this.showLayerPriceRange = !this.showLayerPriceRange;

      setTimeout(() => {
        if (this.showLayerPriceRange) {
          const inputFrom = this.$el.querySelector('#inputFrom');
          inputFrom.focus();
        }
      }, 10);
    },
  },
  setup() {
    const { filter } = useSearchState(['filter']);
    const { setFilter } = useSearchMutations(['setFilter']);
    const { resetAllFilter } = useSearchActions(['resetAllFilter']);

    const showLayerPriceRange = ref(false);
    const {
      loading,
      items,
      itemsHasMore,
      itemsPage,
      itemsTotal,
      topTradedItems: collectiblesTopTradedItems,
      recentlyItems: collectiblesRecentlyItems,
    } = useCollectibleState(['loading', 'items', 'itemsHasMore', 'itemsPage', 'itemsTotal', 'topTradedItems', 'recentlyItems']);
    const { fetchCollectibleItems, fetchCollectiblesTopTraded, fetchCollectiblesRecently } = useCollectibleActions([
      'fetchCollectibleItems',
      'fetchCollectiblesTopTraded',
      'fetchCollectiblesRecently',
    ]);
    const { locale, dracoAccessToken, accessToken } = useState(['locale', 'dracoAccessToken', 'accessToken']);

    const changeSort = ref(false);
    const minDraco = ref('');
    const maxDraco = ref('');

    const refresh = () => {
      fetchCollectibleItems();
      fetchCollectiblesRecently();
      fetchCollectiblesTopTraded();
    };

    onBeforeMount(() => {
      //
    });

    onMounted(() => {
      resetAllFilter(1);
      console.log('collectibles mounted');
      refresh();
    });

    onUnmounted(() => {
      console.log('collectibles unmounted');
    });

    watch(
      () => filter.value,
      (current, before) => {
        if (current.sort !== before.sort) {
          changeSort.value = true;
        }
        fetchCollectibleItems();
      },
    );

    watch(
      () => locale.value,
      () => {
        refresh();
      },
    );

    watch(
      () => dracoAccessToken.value,
      () => {
        refresh();
      },
    );

    const invalidatePrice = computed(() => {
      console.log(minDraco.value, maxDraco.value);

      if (!minDraco.value || !maxDraco.value) {
        return true;
      }

      if (Number(maxDraco.value) < Number(minDraco.value)) {
        return true;
      }

      return false;
    });

    const applyPrice = () => {
      if (!invalidatePrice.value) {
        setFilter({ ...filter.value, minPrice: minDraco.value, maxPrice: maxDraco.value });
        showLayerPriceRange.value = false;
      }
    };

    watch(
      () => showLayerPriceRange.value,
      (open) => {
        if (open) {
          minDraco.value = filter.value.minPrice;
          maxDraco.value = filter.value.maxPrice;
        }
      },
    );

    const hasFilter = computed(() => {
      if (filter.value.class !== 0) {
        return true;
      }

      if (filter.value.itemType !== '0') {
        return true;
      }

      if (filter.value.grade !== 0) {
        return true;
      }

      if (filter.value.tier !== 0) {
        return true;
      }

      if (filter.value.enhance !== -1) {
        return true;
      }

      if (filter.value.sort !== 'latest') {
        return true;
      }

      return false;
    });

    const resetFilter = (type, initValue) => {
      const value = { ...filter.value };
      value[type] = initValue;
      setFilter(value);
    };

    return {
      filter,
      resetFilter,
      resetAllFilter,
      hasFilter,
      changeSort,
      items,
      itemsHasMore,
      itemsPage,
      itemsTotal,
      fetchCollectibleItems,
      locale,
      ...useI18n(),
      minDraco,
      maxDraco,
      invalidatePrice,
      applyPrice,
      showLayerPriceRange,
      loading,
      collectiblesTopTradedItems,
      collectiblesRecentlyItems,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
</style>
