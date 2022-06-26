<template>
  <main class="contents">
    <banner-exd-top />

    <section class="section">
      <div class="section__inner">
        <div class="exchange-list for-list">
          <!-- TOP Traded -->
          <div class="list-bar">
            <v-tabs v-model="tabTraded" class="tab-traded" background-color="transparent" @change="changeTabTraded">
              <v-tab>Top Traded</v-tab>
              <v-tab>Recently Traded</v-tab>
            </v-tabs>
            <v-tabs class="list-bar__tab" background-color="transparent" hide-slider>
              <v-tab class="v-tab--active" to="/more-top-traded">More</v-tab>
            </v-tabs>
          </div>

          <!-- Top Traded List -->
          <div class="wrap-swiper" v-if="tabTraded === 0">
            <swiper ref="swiperTopTraded" class="list-item recommended rank" :options="swiperOptions">
              <swiper-slide class="list-item__item">
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
              </swiper-slide>
              <swiper-slide class="list-item__item">
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
              </swiper-slide>
              <swiper-slide class="list-item__item">
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
              </swiper-slide>
            </swiper>
          </div>

          <!-- Recently Traded List -->
          <div class="wrap-swiper" v-if="tabTraded === 1">
            <swiper ref="swiperRecentlyTraded" class="list-item recommended" :options="swiperOptions">
              <swiper-slide class="list-item__item">
                <Card itemType="legendary"></Card>
                <div class="wrap-button">
                  <router-link to="productId" class="btn btn-price-exd" aria-disabled="true">
                    <em class="price">
                      <strong class="ico-hydra ico-ss add-inside">50,000</strong>
                      <span class="rate">$ 400,000</span>
                    </em>
                  </router-link>
                </div>
                <div class="date-complete-stake">
                  <span>Complete</span>
                  <span class="date">2021.11.24 00:45 UTC+8</span>
                </div>
              </swiper-slide>
              <swiper-slide class="list-item__item">
                <Card itemType="epic"></Card>
                <div class="wrap-button">
                  <router-link to="productId" class="btn btn-price-exd" aria-disabled="true">
                    <em class="price">
                      <strong class="ico-hydra ico-ss add-inside">40,000</strong>
                      <span class="rate">$ 300,000</span>
                    </em>
                  </router-link>
                </div>
                <div class="date-complete-stake">
                  <span>Complete</span>
                  <span class="date">2021.11.24 00:45 UTC+8</span>
                </div>
              </swiper-slide>
              <swiper-slide class="list-item__item">
                <Card itemType="rare"></Card>
                <div class="wrap-button">
                  <router-link to="productId" class="btn btn-price-exd" aria-disabled="true">
                    <em class="price">
                      <strong class="ico-hydra ico-ss add-inside">30,000</strong>
                      <span class="rate">$ 200,000</span>
                    </em>
                  </router-link>
                </div>
                <div class="date-complete-stake">
                  <span>Complete</span>
                  <span class="date">2021.11.24 00:45 UTC+8</span>
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <!-- Recommended Items -->
          <div class="list-bar">
            <div class="list-bar__title">Recommended Items</div>
            <v-tabs class="list-bar__tab" background-color="transparent" v-model="itemsRecommend">
              <v-tab>Legendary</v-tab>
              <v-tab>Epic</v-tab>
              <v-tab>Rare</v-tab>
            </v-tabs>
          </div>
          <div class="wrap-swiper">
            <swiper ref="swiperRecommended" class="list-item recommended" :options="swiperOptions">
              <swiper-slide class="list-item__item">
                <Card itemType="rare"></Card>
                <div class="wrap-button">
                  <router-link to="productId" class="btn btn-price-exd">
                    <em class="price">
                      <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                      <span class="rate">$ 400,000</span>
                    </em>
                  </router-link>
                </div>
              </swiper-slide>
              <swiper-slide class="list-item__item">
                <Card itemType="epic"></Card>
                <div class="wrap-button">
                  <router-link to="productId" class="btn btn-price-exd">
                    <em class="price">
                      <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                      <span class="rate">$ 400,000</span>
                    </em>
                  </router-link>
                </div>
              </swiper-slide>
              <swiper-slide class="list-item__item">
                <Card itemType="legendary"></Card>
                <div class="wrap-button">
                  <router-link to="productId" class="btn btn-price-exd">
                    <em class="price">
                      <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                      <span class="rate">$ 400,000</span>
                    </em>
                  </router-link>
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <!-- List Bar -->
          <div class="list-bar">
            <div class="list-bar__title">Explorer</div>
            <v-tabs class="list-bar__tab" background-color="transparent" v-model="itemsExplorer">
              <v-tab>All</v-tab>
              <v-tab>Dark Steel</v-tab>
            </v-tabs>
          </div>

          <!-- Filter -->
          <div id="wrapFilterList" class="wrap-swiper sticky">
            <swiper ref="swiperFilter" class="wrap-filter" :options="swiperFilterOptions">
              <swiper-slide>
                <SelectCheckFilter :label="'Collectibles'" :selectedValue.sync="filters.collectibles" />
              </swiper-slide>
              <swiper-slide>
                <SelectFilter
                  placeholder="Class"
                  :items="['All', 'Warrior', 'Sorcerer', 'Taoist', 'Lancer', 'Arbalist']"
                  :selectedValue.sync="filters.class"
                ></SelectFilter>
              </swiper-slide>
              <swiper-slide>
                <SelectFilter
                  placeholder="Category"
                  :items="['All', 'Category1', 'Category2', 'Category3']"
                  :selectedValue.sync="filters.category"
                ></SelectFilter>
              </swiper-slide>
              <swiper-slide>
                <SelectFilter placeholder="Rank" :items="['All', 'Rank1', 'Rank2', 'Rank3']" :selectedValue.sync="filters.rank"></SelectFilter>
              </swiper-slide>
              <swiper-slide>
                <SelectFilter
                  placeholder="Tier"
                  :items="['All', 'Tier1', 'TierTierTier2', 'Tier3']"
                  :selectedValue.sync="filters.tier"
                ></SelectFilter>
              </swiper-slide>
              <swiper-slide>
                <SelectFilter
                  placeholder="Enhance"
                  :items="['All', 'Enhance1', 'Enhance2', 'Enhance3']"
                  :selectedValue.sync="filters.enhance"
                ></SelectFilter>
              </swiper-slide>
              <!-- <swiper-slide class="wrap-price-range">
                <button type="button" class="btn-price-range" @click="toogleLayerPriceRange">Price Range</button>
              </swiper-slide> -->
            </swiper>

            <!-- <div class="layer-price-range" v-if="showLayerPriceRange">
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
            </div> -->
          </div>

          <div id="wrapDateOrder" class="wrap-date-order">
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

          <div class="wrap-filter-chip">
            <v-chip v-if="!!filters.collectibles" outlined label>
              Collectibles
              <img @click="removeCollectiblesFilter" src="@/assets/img/mobile/dsp/ico-close.webp" />
            </v-chip>
            <v-chip v-if="!!filters.class" outlined label>
              {{ filters.class }}
              <img @click="removeSelectFilter('class')" src="@/assets/img/mobile/dsp/ico-close.webp" />
            </v-chip>
            <v-chip v-if="!!filters.category" outlined label>
              {{ filters.category }}
              <img @click="removeSelectFilter('category')" src="@/assets/img/mobile/dsp/ico-close.webp" />
            </v-chip>
            <v-chip v-if="!!filters.rank" outlined label>
              {{ filters.rank }}
              <img @click="removeSelectFilter('rank')" src="@/assets/img/mobile/dsp/ico-close.webp" />
            </v-chip>
            <v-chip v-if="!!filters.tier" outlined label>
              {{ filters.tier }}
              <img @click="removeSelectFilter('tier')" src="@/assets/img/mobile/dsp/ico-close.webp" />
            </v-chip>
            <v-chip v-if="!!filters.enhance" outlined label>
              {{ filters.enhance }}
              <img @click="removeSelectFilter('enhance')" src="@/assets/img/mobile/dsp/ico-close.webp" />
            </v-chip>
            <v-chip v-if="!!filters.date" outlined label>
              {{ filters.date.title }}
              <img @click="removeDateFilter" src="@/assets/img/mobile/dsp/ico-close.webp" />
            </v-chip>

            <div class="btn-filter-reset" v-if="isSelectFilter" @click="resetFilters">
              <span>Reset</span>
              <img src="@/assets/img/common/btn-reset-filter.webp" width="16" />
            </div>
          </div>

          <!-- Item List Empty Case -->
          <ul class="list-item" data-empty-message="판매중 아이템이 없습니다."></ul>

          <!-- Item List -->
          <ul class="list-item">
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="rare" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="epic" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="legendary" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="rare" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="epic" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="legendary" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="rare" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="epic" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="legendary" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="rare" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="epic" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="legendary" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="rare" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="epic" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <Card itemType="legendary" flipped smaller="xs"></Card>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
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
    </section>

    <Footer></Footer>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import 'swiper/swiper-bundle.css'; // (>= Swiper 6.x)
import 'swiper/css/swiper.css'; // (<= Swiper 5.x)

import { defineComponent } from '@vue/composition-api';
import BannerExdTop from '@/components/banner/ExdTop';
import Card from '@/components-ui/common/Card';
import Footer from '@/partials/common/Footer';
import SelectFilter from '@/components-ui/mobile/SelectFilter';
import SelectOrder from '@/components-ui/mobile/SelectOrder';
import SelectCheckFilter from '@/components-ui/mobile/SelectCheckFilter';

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
    SelectFilter,
    SelectOrder,
    Swiper,
    SwiperSlide,
    SelectCheckFilter,
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

    swiperOptions: {
      slidesPerView: 'auto',
      // centeredSlides: true,
      // spaceBetween: 30,
      // loop: true,
      // autoplay:{
      //   delay:1000
      // },
      // pagination: {
      //   el: '.swiper-pagination',
      // },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      // allowTouchMove: false,
    },
    swiperFilterOptions: {
      freeMode: true,
      slidesPerView: 'auto',
      spaceBetween: 8,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
    },
    filters: genarateFilter(),
  }),
  computed: {
    swiperTopTraded() {
      return this.$refs.swiperTopTraded.$swiper;
    },
    swiperRecentlyTraded() {
      return this.$refs.swiperRecentlyTraded.$swiper;
    },
    swiperRecommended() {
      return this.$refs.swiperRecommended.$swiper;
    },
    swiperFilter() {
      return this.$refs.swiperFilter.$swiper;
    },
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
    changeTabTraded(value) {
      console.log(`value: ${value}`);
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
@import '~@/assets/sass/mobile/app.scss';
// @import '~@/assets/sass/mobile/ui-guide.scss';
</style>
