<template>
  <main class="contents nft">
    <banner-nft-top />

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
                <card-nft :itemGrade="3" characterClass="sorcerer"></card-nft>
                <em class="rank-badge">1st</em>
                <div class="traded-info">
                  <!-- data-new="true" 최고가 거래에 신규 건 추가시 빨간점 표시 (24시간 동안 표시) -->
                  <div class="wrap-price" data-new="true">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                  </div>
                  <dl class="seller">
                    <dt>Seller</dt>
                    <dd class="seller-nickname">AbcdeAbcdeAbcde</dd>
                    <dd class="seller-info">
                      <span>ASIA13</span>
                      <span>Lv.64</span>
                    </dd>
                  </dl>
                  <dl class="date">Dec. 02, 2021 21:25 UTC+8</dl>
                </div>
              </swiper-slide>
              <swiper-slide class="list-item__item">
                <card-nft :itemGrade="5" characterClass="taoist"></card-nft>
                <em class="rank-badge">2nd</em>
                <div class="traded-info">
                  <!-- data-new="true" 최고가 거래에 신규 건 추가시 빨간점 표시 (24시간 동안 표시) -->
                  <div class="wrap-price" data-new="true">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                  </div>
                  <dl class="seller">
                    <dt>Seller</dt>
                    <dd class="seller-nickname">AbcdeAbcdeAbcde</dd>
                    <dd class="seller-info">
                      <span>ASIA13</span>
                      <span>Lv.64</span>
                    </dd>
                  </dl>
                  <dl class="date">Dec. 02, 2021 21:25 UTC+8</dl>
                </div>
              </swiper-slide>
              <swiper-slide class="list-item__item">
                <card-nft :itemGrade="4" characterClass="lancer"></card-nft>
                <em class="rank-badge">3rd</em>
                <div class="traded-info">
                  <!-- data-new="true" 최고가 거래에 신규 건 추가시 빨간점 표시 (24시간 동안 표시) -->
                  <div class="wrap-price" data-new="true">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                  </div>
                  <dl class="seller">
                    <dt>Seller</dt>
                    <dd class="seller-nickname">AbcdeAbcdeAbcde</dd>
                    <dd class="seller-info">
                      <span>ASIA13</span>
                      <span>Lv.64</span>
                    </dd>
                  </dl>
                  <dl class="date">Dec. 02, 2021 21:25 UTC+8</dl>
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <!-- Recently Traded List -->
          <div class="wrap-swiper" v-if="tabTraded === 1">
            <swiper ref="swiperRecentlyTraded" class="list-item recommended" :options="swiperOptions">
              <swiper-slide class="list-item__item">
                <card-nft :itemGrade="5" characterClass="sorcerer"></card-nft>
                <div class="traded-info">
                  <!-- data-new="true" 최고가 거래에 신규 건 추가시 빨간점 표시 (24시간 동안 표시) -->
                  <div class="wrap-price" data-new="true">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                  </div>
                  <dl class="seller">
                    <dt>Seller</dt>
                    <dd class="seller-nickname">AbcdeAbcdeAbcde</dd>
                    <dd class="seller-info">
                      <span>ASIA13</span>
                      <span>Lv.64</span>
                    </dd>
                  </dl>
                  <dl class="date">Dec. 02, 2021 21:25 UTC+8</dl>
                </div>
              </swiper-slide>
              <swiper-slide class="list-item__item">
                <card-nft :itemGrade="4" characterClass="taoist"></card-nft>
                <div class="traded-info">
                  <!-- data-new="true" 최고가 거래에 신규 건 추가시 빨간점 표시 (24시간 동안 표시) -->
                  <div class="wrap-price" data-new="true">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                  </div>
                  <dl class="seller">
                    <dt>Seller</dt>
                    <dd class="seller-nickname">AbcdeAbcdeAbcde</dd>
                    <dd class="seller-info">
                      <span>ASIA13</span>
                      <span>Lv.64</span>
                    </dd>
                  </dl>
                  <dl class="date">Dec. 02, 2021 21:25 UTC+8</dl>
                </div>
              </swiper-slide>
              <swiper-slide class="list-item__item">
                <card-nft :itemGrade="2" characterClass="lancer"></card-nft>
                <div class="traded-info">
                  <!-- data-new="true" 최고가 거래에 신규 건 추가시 빨간점 표시 (24시간 동안 표시) -->
                  <div class="wrap-price" data-new="true">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                  </div>
                  <dl class="seller">
                    <dt>Seller</dt>
                    <dd class="seller-nickname">AbcdeAbcdeAbcde</dd>
                    <dd class="seller-info">
                      <span>ASIA13</span>
                      <span>Lv.64</span>
                    </dd>
                  </dl>
                  <dl class="date">Dec. 02, 2021 21:25 UTC+8</dl>
                </div>
              </swiper-slide>
            </swiper>
          </div>

          <!-- Recommended -->
          <div class="list-bar">
            <div class="list-bar__title">Recommended</div>
          </div>
          <ul class="list-item">
            <li class="list-item__item">
              <router-link to="productId">
                <card-nft :itemGrade="5" characterClass="arbalist" smaller="xs" flipped></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-sm btn-price btn-primary-nft" to="productId">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="productId">
                <card-nft :itemGrade="3" characterClass="sorcerer" smaller="xs" flipped></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-sm btn-price btn-primary-nft" to="productId">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="productId">
                <card-nft :itemGrade="4" characterClass="lancer" smaller="xs" flipped></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-sm btn-price btn-primary-nft" to="productId">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="productId">
                <card-nft :itemGrade="3" characterClass="warrior" smaller="xs" flipped></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-sm btn-price btn-primary-nft" to="productId">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
          </ul>

          <!-- List Bar -->
          <div class="list-bar">
            <div class="list-bar__title">Character</div>
          </div>

          <!-- Filter -->
          <div id="wrapFilterList" class="wrap-swiper sticky">
            <swiper ref="swiperFilter" class="wrap-filter" :options="swiperFilterOptions" @click-slide="handleClickSwiperFilter">
              <swiper-slide>
                <SelectFilter
                  placeholder="Class"
                  :items="['All', 'Warrior', 'Sorcerer', 'Taoist', 'Lancer', 'Arbalist']"
                  :selectedValue.sync="filters.class"
                  @click="hideLayerFilter"
                ></SelectFilter>
              </swiper-slide>
              <swiper-slide>
                <div class="wrap-filter-button">
                  <!-- btn-select-filter버튼 상황별 class
                    클릭 후 레이어 오픈 : btn--active
                    값이 설정된 후 : btn--set
                     -->
                  <button type="button" class="btn-select-filter" :class="{ 'btn--active': showLayer.level }" @click="toggleLayerFilter('level')">
                    Level
                  </button>
                </div>
              </swiper-slide>

              <swiper-slide>
                <div class="wrap-filter-button">
                  <button type="button" class="btn-select-filter" :class="{ 'btn--active': showLayer.power }" @click="toggleLayerFilter('power')">
                    Power
                  </button>
                </div>
              </swiper-slide>
              <swiper-slide>
                <div class="wrap-filter-button">
                  <button type="button" class="btn-select-filter" :class="{ 'btn--active': showLayer.price }" @click="toggleLayerFilter('price')">
                    Price
                  </button>
                </div>
              </swiper-slide>
            </swiper>

            <!-- Filter for Level -->
            <div class="layer-price-range" v-if="showLayer.level">
              <dl class="filter-status">
                <dt>Level</dt>
                <dd>
                  <span>Min</span>
                  <span>{{ rangeLevel[0] }}</span>
                  <span>~</span>
                  <span>Max</span>
                  <span>{{ rangeLevel[1] }}</span>
                </dd>
              </dl>
              <div>
                <v-range-slider
                  class="filter-range-slider"
                  v-model="rangeLevel"
                  min="0"
                  max="120"
                  track-color="#ffffff33"
                  track-fill-color="#fff"
                  thumb-color="#aa00ff"
                >
                  <template v-slot:thumb-label="props">
                    <span>{{ props.value }}</span>
                  </template>
                </v-range-slider>
              </div>
              <div class="wrap-button">
                <button type="button" class="btn btn-primary2 btn-sm" @click="toggleLayerFilter('level')">Apply</button>
              </div>
            </div>

            <!-- Filter for Power -->
            <div class="layer-price-range" v-if="showLayer.power">
              <dl class="filter-status">
                <dt>Power</dt>
                <dd>
                  <span>Min</span>
                  <span>{{ rangePower[0] | currency(0) }}</span>
                  <span>~</span>
                  <span>Max</span>
                  <span>{{ rangePower[1] | currency(0) }}</span>
                </dd>
              </dl>
              <div>
                <v-range-slider
                  class="filter-range-slider"
                  v-model="rangePower"
                  min="0"
                  max="300000"
                  track-color="#ffffff33"
                  track-fill-color="#fff"
                  thumb-color="#aa00ff"
                >
                </v-range-slider>
              </div>
              <div class="wrap-button">
                <button type="button" class="btn btn-primary2 btn-sm" @click="toggleLayerFilter('power')">Apply</button>
              </div>
            </div>

            <!-- Filter for Price -->
            <div class="layer-price-range" v-if="showLayer.price">
              <p class="mb-3">가격 범위를 설정해주세요</p>
              <div class="wrap-range">
                <v-text-field
                  type="tel"
                  class="input-range wemixcredit"
                  label="From"
                  id="inputFrom"
                  prepend-inner-icon="mdi-map-marker"
                  dense
                  solo
                  flat
                ></v-text-field>
                <v-text-field
                  type="tel"
                  class="input-range wemixcredit"
                  label="To"
                  prepend-inner-icon="mdi-map-marker"
                  dense
                  solo
                  flat
                ></v-text-field>
              </div>
              <div class="wrap-button">
                <button type="button" class="btn btn-primary2 btn-sm" @click="toggleLayerFilter('price')">Apply</button>
              </div>
            </div>
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
          <ul class="list-item" data-empty-message="판매중인 캐릭터가 없습니다."></ul>

          <!-- Item List -->
          <ul class="list-item">
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="4" characterClass="arbalist" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="5" characterClass="taoist" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="5" characterClass="sorcerer" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="3" characterClass="arbalist" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="2" characterClass="sorcerer" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="4" characterClass="arbalist" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="5" characterClass="taoist" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="5" characterClass="arbalist" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="4" characterClass="taoist" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="4" characterClass="arbalist" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="3" characterClass="sorcerer" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="2" characterClass="sorcerer" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="2" characterClass="taoist" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="2" characterClass="arbalist" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </em>
                </button>
              </div>
            </li>
            <li class="list-item__item">
              <router-link to="/productId" class="link">
                <card-nft :itemGrade="2" characterClass="sorcerer" smaller="xs"></card-nft>
              </router-link>
              <div class="wrap-button">
                <button type="button" class="btn btn-price btn-primary-nft btn-sm">
                  <em class="price">
                    <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
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
import BannerNftTop from '@/components/banner/NftTop';
import CardNft from '@/components-ui/common/CardNft';
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
    BannerNftTop,
    CardNft,
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

    // layer for filter
    showLayer: {
      level: false,
      power: false,
      price: false,
    },

    swiperOptions: {
      slidesPerView: 'auto',
    },
    swiperFilterOptions: {
      freeMode: true,
      slidesPerView: 'auto',
      spaceBetween: 8,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
    },
    filters: genarateFilter(),

    // for range slider
    rangeLevel: [0, 120],
    rangePower: [0, 300000],
  }),
  computed: {
    swiperTopTraded() {
      return this.$refs.swiperTopTraded.$swiper;
    },
    swiperRecentlyTraded() {
      return this.$refs.swiperRecentlyTraded.$swiper;
    },
    swiperFilter() {
      return this.$refs.swiperFilter.$swiper;
    },
    isSelectFilter() {
      return Object.values(this.filters).some((f) => !!f);
    },
  },
  methods: {
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
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app';
@import '~@/assets/sass/components/tab-score';
</style>
