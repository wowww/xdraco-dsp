<template>
  <main class="contents">
    <banner-exd-top />

    <section class="section">
      <div class="section__inner">
        <div class="wrap-grid">
          <!-- 타임라인 -->
          <div class="grid-timeline">
            <div class="exchange-list">
              <!-- TOP Traded -->
              <div class="list-bar">
                <v-tabs v-model="tabTraded" class="tab-traded" background-color="transparent">
                  <v-tab>Top Traded</v-tab>
                  <v-tab>Recently Traded</v-tab>
                </v-tabs>
                <v-tabs class="list-bar__tab" background-color="transparent" hide-slider>
                  <v-tab class="v-tab--active" to="/more-top-traded">More</v-tab>
                </v-tabs>
              </div>

              <!-- Top Traded List -->
              <ul class="list-item recommended rank" v-if="tabTraded === 0">
                <li>
                  <em class="rank-badge">1st</em>
                  <Card itemType="rare"></Card>
                  <div class="wrap-button">
                    <router-link to="productId" class="btn btn-price-exd" aria-disabled="true">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </router-link>
                  </div>
                  <div class="date-complete-stake">
                    <span>Complete</span>
                    <span class="date">2021.11.24 00:45 UTC+8</span>
                  </div>
                </li>
                <li>
                  <em class="rank-badge">2nd</em>
                  <Card itemType="epic"></Card>
                  <div class="wrap-button">
                    <router-link to="productId" class="btn btn-price-exd" aria-disabled="true">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </router-link>
                  </div>
                  <div class="date-complete-stake">
                    <span>Complete</span>
                    <span class="date">2021.11.24 00:45 UTC+8</span>
                  </div>
                </li>
                <li>
                  <em class="rank-badge">3rd</em>
                  <Card itemType="legendary"></Card>
                  <div class="wrap-button">
                    <router-link to="productId" class="btn btn-price-exd" aria-disabled="true">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </router-link>
                  </div>
                  <div class="date-complete-stake">
                    <span>Complete</span>
                    <span class="date">2021.11.24 00:45 UTC+8</span>
                  </div>
                </li>
              </ul>

              <!-- Recently Traded List -->
              <ul class="list-item recommended" v-if="tabTraded === 1">
                <li>
                  <Card itemType="legendary"></Card>
                  <div class="wrap-button">
                    <router-link to="productId" class="btn btn-price-exd" aria-disabled="true">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </router-link>
                  </div>
                  <div class="date-complete-stake">
                    <span>Complete</span>
                    <span class="date">2021.11.24 00:45 UTC+8</span>
                  </div>
                </li>
                <li>
                  <Card itemType="epic"></Card>
                  <div class="wrap-button">
                    <router-link to="productId" class="btn btn-price-exd" aria-disabled="true">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </router-link>
                  </div>
                  <div class="date-complete-stake">
                    <span>Complete</span>
                    <span class="date">2021.11.24 00:45 UTC+8</span>
                  </div>
                </li>
                <li>
                  <Card itemType="rare"></Card>
                  <div class="wrap-button">
                    <router-link to="productId" class="btn btn-price-exd" aria-disabled="true">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </router-link>
                  </div>
                  <div class="date-complete-stake">
                    <span>Complete</span>
                    <span class="date">2021.11.24 00:45 UTC+8</span>
                  </div>
                </li>
              </ul>

              <!-- Recommended Items -->
              <div class="list-bar">
                <div class="list-bar__title">Recommended Items</div>
                <v-tabs class="list-bar__tab" background-color="transparent" v-model="itemsRecommend">
                  <v-tab>Legendary</v-tab>
                  <v-tab>Epic</v-tab>
                  <v-tab>Rare</v-tab>
                </v-tabs>
              </div>
              <ul class="list-item recommended">
                <li>
                  <Card itemType="rare"></Card>
                  <div class="wrap-button">
                    <router-link to="productId" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </router-link>
                  </div>
                </li>
                <li>
                  <Card itemType="epic"></Card>
                  <div class="wrap-button">
                    <router-link to="productId" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </router-link>
                  </div>
                </li>
                <li>
                  <Card itemType="legendary"></Card>
                  <div class="wrap-button">
                    <router-link to="productId" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </router-link>
                  </div>
                </li>
              </ul>

              <!-- List Bar -->
              <div class="list-bar">
                <div class="list-bar__title">Explorer</div>
                <v-tabs class="list-bar__tab" background-color="transparent" v-model="itemsExplorer">
                  <v-tab>All</v-tab>
                  <v-tab>Dark Steel</v-tab>
                </v-tabs>
              </div>

              <!-- Filter -->
              <div id="wrapFilterList" class="wrap-filter">
                <div class="wrap-filter__inner">
                  <SelectCheckFilter :label="'Collectibles'" :selectedValue.sync="filters.collectibles" />
                  <SelectFilter
                    placeholder="Class"
                    :items="['All', 'Warrior', 'Sorcerer', 'Taoist', 'Lancer', 'Arbalist']"
                    :selectedValue.sync="filters.class"
                  ></SelectFilter>
                  <SelectFilter
                    placeholder="Category"
                    :items="['All', 'Category1', 'Category2', 'Category3']"
                    :selectedValue.sync="filters.category"
                  ></SelectFilter>
                  <SelectFilter placeholder="Rank" :items="['All', 'Rank1', 'Rank2', 'Rank3']" :selectedValue.sync="filters.rank"></SelectFilter>
                  <SelectFilter
                    placeholder="Tier"
                    :items="['All', 'Tier1', 'TierTierTier2', 'Tier3']"
                    :selectedValue.sync="filters.tier"
                  ></SelectFilter>
                  <SelectFilter
                    placeholder="Enhance"
                    :items="['All', 'Enhance1', 'Enhance2', 'Enhance3']"
                    :selectedValue.sync="filters.enhance"
                  ></SelectFilter>
                  <!-- <div class="wrap-price-range">
                    <button type="button" class="btn-price-range" @click="toogleLayerPriceRange">Price Range</button>
                    <div class="layer-price-range" v-if="showLayerPriceRange">
                      <div class="wrap-range">
                        <v-text-field
                          type="tel"
                          class="input-range"
                          label="From"
                          id="inputFrom"
                          prepend-inner-icon="mdi-map-marker"
                          dense
                          solo
                          flat
                        ></v-text-field>
                        <v-text-field type="tel" class="input-range" label="To" prepend-inner-icon="mdi-map-marker" dense solo flat></v-text-field>
                      </div>
                      <div class="wrap-button">
                        <button type="button" class="btn btn-primary2 btn-sm">Apply</button>
                      </div>
                    </div>
                  </div> -->
                </div>

                <div class="wrap-filter-chip">
                  <div class="wrap-chips">
                    <v-chip v-if="!!filters.collectibles" outlined label>
                      Collectibles
                      <img @click="removeCollectiblesFilter" src="@/assets/img/desktop/dsp/ico-close.webp" />
                    </v-chip>
                    <v-chip v-if="!!filters.class" outlined label>
                      {{ filters.class }}
                      <img @click="removeSelectFilter('class')" src="@/assets/img/desktop/dsp/ico-close.webp" />
                    </v-chip>
                    <v-chip v-if="!!filters.category" outlined label>
                      {{ filters.category }}
                      <img @click="removeSelectFilter('category')" src="@/assets/img/desktop/dsp/ico-close.webp" />
                    </v-chip>
                    <v-chip v-if="!!filters.rank" outlined label>
                      {{ filters.rank }}
                      <img @click="removeSelectFilter('rank')" src="@/assets/img/desktop/dsp/ico-close.webp" />
                    </v-chip>
                    <v-chip v-if="!!filters.tier" outlined label>
                      {{ filters.tier }}
                      <img @click="removeSelectFilter('tier')" src="@/assets/img/desktop/dsp/ico-close.webp" />
                    </v-chip>
                    <v-chip v-if="!!filters.enhance" outlined label>
                      {{ filters.enhance }}
                      <img @click="removeSelectFilter('enhance')" src="@/assets/img/desktop/dsp/ico-close.webp" />
                    </v-chip>
                    <v-chip v-if="!!filters.date" outlined label>
                      {{ filters.date.title }}
                      <img @click="removeDateFilter" src="@/assets/img/desktop/dsp/ico-close.webp" />
                    </v-chip>

                    <div class="btn-filter-reset" v-if="isSelectFilter" @click="resetFilters">
                      <span>Reset</span>
                      <img src="@/assets/img/common/btn-reset-filter.webp" width="16" />
                    </div>
                  </div>

                  <SelectOrder
                    :items="[
                      { title: 'Date Listed: Newest', abc: 0 },
                      { title: 'Date Listed: Oldest', abc: 1 },
                      { title: 'Date Listed: Highest', abc: 2 },
                      { title: 'Date Listed: Lowest', abc: 3 },
                    ]"
                    :selectedValue.sync="filters.date"
                  ></SelectOrder>
                </div>
              </div>

              <!-- Item List Empty Case -->
              <ul class="list-item" data-empty-message="판매중 아이템이 없습니다."></ul>

              <!-- Item List -->
              <ul class="list-item">
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="rare" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="epic" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="legendary" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="rare" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="epic" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="legendary" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="rare" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="epic" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="legendary" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="rare" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="epic" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="legendary" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="rare" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="epic" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <Card itemType="legendary" flipped smaller="sm"></Card>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
              </ul>

              <div class="wrap-button">
                <!-- <button type="button" class="btn-viewmore">VIEW MORE</button> -->
                <router-link class="btn-viewmore" to="/view-more">VIEW MORE</router-link>
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
import BannerExdTop from '@/components/banner/ExdTop';
import Card from '@/components-ui/common/Card';
import Footer from '@/partials/common/Footer';
import AccountInfo from '@/components-ui/desktop/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import SelectFilter from '@/components-ui/desktop/SelectFilter';
import SelectOrder from '@/components-ui/desktop/SelectOrder';
import SelectCheckFilter from '@/components-ui/desktop/SelectCheckFilter';

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
  props: {},
  components: {
    BannerExdTop,
    Card,
    Footer,
    AccountInfo,
    SelectFilter,
    SelectOrder,
    SelectCheckFilter,
    SidebarContactUs,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',

    // for TabTraded
    tabTraded: null,

    // for layer-price-range
    showLayerPriceRange: false,

    // for nav in .list-bar
    itemsRecommend: null,
    itemsExplorer: null,
    filters: genarateFilter(),
  }),
  computed: {
    isSelectFilter() {
      return Object.values(this.filters).some((f) => !!f);
    },
  },
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
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
// @import '~@/assets/sass/desktop/ui-guide.scss';
</style>
