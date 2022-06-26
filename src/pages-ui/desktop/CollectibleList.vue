<template>
  <main class="contents collectible">
    <banner-collectible-top />

    <section class="section">
      <div class="section__inner">
        <div class="wrap-grid">
          <!-- 타임라인 -->
          <div class="grid-timeline">
            <div class="exchange-list">
              <!-- List Bar -->
              <div class="list-bar">
                <div class="list-bar__title">Collectible Exchange</div>
              </div>

              <!-- Filter -->
              <div id="wrapFilterList" class="wrap-filter">
                <div class="wrap-filter__inner">
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
                    <card-collectible :itemGrade="5" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-collectible :itemGrade="4" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-collectible :itemGrade="3" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-collectible :itemGrade="5" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-collectible :itemGrade="4" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-collectible :itemGrade="3" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-collectible :itemGrade="4" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-collectible :itemGrade="5" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-collectible :itemGrade="5" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-collectible :itemGrade="5" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-collectible :itemGrade="5" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-collectible :itemGrade="5" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-collectible :itemGrade="5" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-collectible :itemGrade="5" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
                      </em>
                    </button>
                  </div>
                </li>
                <li>
                  <router-link to="/productId" class="link">
                    <card-collectible :itemGrade="5" flipped smaller="sm"></card-collectible>
                  </router-link>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-price-exd">
                      <em class="price">
                        <strong class="ico-darco ico-ss add-inside">150,000</strong>
                        <span class="rate">$ 1,200</span>
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
import BannerCollectibleTop from '@/components/banner/CollectibleTop';
import CardCollectible from '@/components-ui/common/CardCollectible';
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
    BannerCollectibleTop,
    CardCollectible,
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

    filters: genarateFilter(),
  }),
  computed: {
    isSelectFilter() {
      return Object.values(this.filters).some((f) => !!f);
    },
  },
  methods: {
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
