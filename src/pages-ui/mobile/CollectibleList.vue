<template>
  <main class="contents collectible">
    <banner-collectible-top />

    <section class="section">
      <div class="section__inner">
        <div class="exchange-list for-list">
          <!-- List Bar -->
          <div class="list-bar">
            <div class="list-bar__title">Collectible Exchange</div>
          </div>

          <!-- Filter -->
          <div id="wrapFilterList" class="wrap-swiper sticky">
            <swiper ref="swiperFilter" class="wrap-filter" :options="swiperFilterOptions" @click-slide="handleClickSwiperFilter">
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
                <card-collectible :itemGrade="3" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-collectible :itemGrade="4" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-collectible :itemGrade="5" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-collectible :itemGrade="3" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-collectible :itemGrade="4" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-collectible :itemGrade="5" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-collectible :itemGrade="4" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-collectible :itemGrade="3" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-collectible :itemGrade="3" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-collectible :itemGrade="4" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-collectible :itemGrade="5" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-collectible :itemGrade="5" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-collectible :itemGrade="5" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-collectible :itemGrade="5" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-collectible :itemGrade="5" flipped smaller="xs"></card-collectible>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price-exd btn-sm">
                  <em class="price">
                    <strong class="ico-darco ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 1,700</span>
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
import BannerCollectibleTop from '@/components/banner/CollectibleTop';
import CardCollectible from '@/components-ui/common/CardCollectible';
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
    BannerCollectibleTop,
    CardCollectible,
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
    handleClickSwiperFilter(index) {
      this.swiperFilter.slideTo(index);
    },
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app.scss';
// @import '~@/assets/sass/mobile/ui-guide.scss';
</style>
