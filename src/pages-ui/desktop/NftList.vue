<template>
  <main class="contents nft">
    <banner-nft-top />

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
                <router-link to="/exd/history" class="list-bar__more">{{ t('w.rounds.view.more') }}</router-link>
              </div>

              <!-- Top Traded List -->
              <ul class="list-item recommended rank" v-if="tabTraded === 0">
                <li>
                  <card-nft :itemGrade="5" characterClass="arbalist"></card-nft>
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
                </li>
                <li>
                  <card-nft :itemGrade="3" characterClass="sorcerer"></card-nft>
                  <em class="rank-badge">2nd</em>
                  <div class="traded-info">
                    <div class="wrap-price" data-new="true">
                      <strong class="ico-wemixcredit ico-ss add-inside">99,000</strong>
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
                </li>
                <li>
                  <card-nft :itemGrade="4" characterClass="warrior"></card-nft>
                  <em class="rank-badge">3rd</em>
                  <div class="traded-info">
                    <div class="wrap-price">
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
                </li>
              </ul>

              <!-- Recently Traded List -->
              <ul class="list-item recommended rank" v-if="tabTraded === 1">
                <li>
                  <card-nft :itemGrade="5" characterClass="lancer"></card-nft>
                  <div class="traded-info">
                    <!-- data-new="true" 최고가 거래에 신규 건 추가시 빨간점 표시 (24시간 동안 표시) -->
                    <div class="wrap-price" data-new="true">
                      <strong class="ico-wemixcredit ico-ss add-inside">2,150,000</strong>
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
                </li>
                <li>
                  <card-nft :itemGrade="4" characterClass="taoist"></card-nft>
                  <div class="traded-info">
                    <div class="wrap-price">
                      <strong class="ico-wemixcredit ico-ss add-inside">2,150,000</strong>
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
                </li>
                <li>
                  <card-nft :itemGrade="2" characterClass="lancer"></card-nft>
                  <div class="traded-info">
                    <div class="wrap-price">
                      <strong class="ico-wemixcredit ico-ss add-inside">2,150,000</strong>
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
                </li>
              </ul>

              <!-- Recommended Items -->
              <div class="list-bar">
                <div class="list-bar__title">Recommended</div>
              </div>
              <ul class="list-item">
                <li>
                  <card-nft :itemGrade="4" characterClass="arbalist" smaller="sm"></card-nft>
                  <div class="wrap-button">
                    <router-link to="productId" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </router-link>
                  </div>
                </li>
                <li>
                  <card-nft :itemGrade="2" characterClass="arbalist" smaller="sm"></card-nft>
                  <div class="wrap-button">
                    <router-link to="productId" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </router-link>
                  </div>
                </li>
                <li>
                  <card-nft :itemGrade="3" characterClass="arbalist" smaller="sm"></card-nft>
                  <div class="wrap-button">
                    <router-link to="productId" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </router-link>
                  </div>
                </li>
                <li>
                  <card-nft :itemGrade="5" characterClass="arbalist" smaller="sm"></card-nft>
                  <div class="wrap-button">
                    <router-link to="productId" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </router-link>
                  </div>
                </li>
              </ul>

              <!-- List Bar -->
              <div class="list-bar">
                <div class="list-bar__title">Character</div>
              </div>

              <!-- Filter -->
              <div id="wrapFilterList" class="wrap-filter equally-child">
                <div class="wrap-filter__inner">
                  <SelectFilter
                    placeholder="Class"
                    :items="['All', 'Warrior', 'Sorcerer', 'Taoist', 'Lancer', 'Arbalist']"
                    :selectedValue.sync="filters.class"
                    @click="hideLayerFilter"
                  ></SelectFilter>

                  <div class="wrap-filter-button">
                    <!-- btn-select-filter버튼 상황별 class
                    클릭 후 레이어 오픈 : btn--active
                    값이 설정된 후 : btn--set
                     -->
                    <button type="button" class="btn-select-filter" :class="{ 'btn--active': showLayer.level }" @click="toggleLayerFilter('level')">
                      Level
                    </button>
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
                        <button type="button" class="btn btn-primary2 btn-sm">Apply</button>
                      </div>
                    </div>
                  </div>

                  <div class="wrap-filter-button">
                    <button type="button" class="btn-select-filter" :class="{ 'btn--active': showLayer.power }" @click="toggleLayerFilter('power')">
                      Power
                    </button>
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
                        <button type="button" class="btn btn-primary2 btn-sm">Apply</button>
                      </div>
                    </div>
                  </div>

                  <div class="wrap-filter-button">
                    <button type="button" class="btn-select-filter" :class="{ 'btn--active': showLayer.price }" @click="toggleLayerFilter('price')">
                      Price
                    </button>
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
                        <button type="button" class="btn btn-primary2 btn-sm">Apply</button>
                      </div>
                    </div>
                  </div>
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
              <ul class="list-item" data-empty-message="판매중인 캐릭터가 없습니다."></ul>

              <!-- Item List -->
              <ul class="list-item">
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="2" characterClass="lancer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="3" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="5" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="5" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="3" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="4" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="4" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="5" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="3" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="2" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="4" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="5" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="4" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="3" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
                      <em class="price">
                        <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 400,000</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-nft :itemGrade="2" characterClass="sorcerer" flipped smaller="sm"></card-nft>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price btn-primary-nft">
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
import useI18n from '@/utils/useI18n';
import BannerNftTop from '@/components/banner/NftTop';
import CardNft from '@/components-ui/common/CardNft';
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
  name: 'NftList',
  props: {},
  components: {
    BannerNftTop,
    CardNft,
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

    // dialog for filters
    showLayerPriceRange: false,
    showLayerPower: false,
    showLayerLevel: false,
    showLayer: {
      level: false,
      power: false,
      price: false,
    },

    filters: genarateFilter(),

    // for range slider
    rangeLevel: [0, 120],
    rangePower: [0, 300000],
    seasons: ['Winter', 'Spring', 'Summer', 'Fall'],
    icons: ['mdi-snowflake', 'mdi-leaf', 'mdi-fire', 'mdi-water'],
  }),
  computed: {
    isSelectFilter() {
      return Object.values(this.filters).some((f) => !!f);
    },
  },
  methods: {
    season(val) {
      return this.icons[val];
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
  setup() {
    return {
      ...useI18n(),
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
// @import '~@/assets/sass/desktop/ui-guide.scss';
</style>
