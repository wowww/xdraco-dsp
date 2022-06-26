<template>
  <main id="contents" class="contents mirage">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="wrap-my-mirage for-list">
          <v-tabs class="tab-rounds" v-model="selectedTab" :hide-slider="true">
            <v-tab to="/ui-mirage-list-myroster">My Roster</v-tab>
            <v-tab to="/ui-mirage-NFT-enhancement">NFT Enhancement</v-tab>
            <v-tab to="/ui-mirage-list-mynfts">My NFTs</v-tab>
          </v-tabs>
          <div class="util-list">
            <div class="summary"><em>10</em> Characters</div>
            <div class="mirage-inventory">
              <div class="mirage-inventory-item">
                <span class="currency">
                  <img src="@/assets/img/common/mirage/img-24-mirage-scroll.webp" width="24" height="22" alt="enhance" />
                  <em class="volume">99</em>
                </span>
                <button type="button" class="btn-enhance">Enhance</button>
              </div>
              <div class="mirage-inventory-item">
                <span class="currency">
                  <img src="@/assets/img/common/mirage/ico-20-energy.webp" width="20" height="20" alt="energy" />
                  <em class="volume">99</em>
                </span>
                <button type="button" class="btn-charge">Charge</button>
              </div>
            </div>
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
                  placeholder="Rank"
                  :items="['All', 'legendary', 'epic', 'rare', 'uncommon', 'common']"
                  :selectedValue.sync="filters.rank"
                ></SelectFilter>
              </swiper-slide>
              <swiper-slide>
                <SelectFilter
                  placeholder="Sanctuary of Hydra"
                  :items="['All', 'value1', 'value2', 'value3', 'value4']"
                  :selectedValue.sync="filters.sanctuary"
                ></SelectFilter>
              </swiper-slide>
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
            <v-chip v-if="!!filters.class" outlined label>
              {{ filters.class }}
              <img @click="removeSelectFilter('class')" src="@/assets/img/mobile/dsp/ico-close.webp" />
            </v-chip>
            <v-chip v-if="!!filters.rank" outlined label>
              {{ filters.rank }}
              <img @click="removeSelectFilter('rank')" src="@/assets/img/mobile/dsp/ico-close.webp" />
            </v-chip>
            <v-chip v-if="!!filters.sanctuary" outlined label>
              {{ filters.sanctuary }}
              <img @click="removeSelectFilter('sanctuary')" src="@/assets/img/mobile/dsp/ico-close.webp" />
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

          <mirage-notice-inlist
            message="동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록"
          />

          <ul class="list-my-mirage">
            <li>
              <!-- Class: Warrior -->
              <mirage-character
                :characterClass="1"
                :characterGrade="1"
                buttonType="reinforce"
                :curseScissors="true"
                :curseStink="true"
                :status="14"
              />
            </li>
            <li>
              <!-- Class: Taoist -->
              <mirage-character :characterClass="2" :characterGrade="1" buttonType="reinforce" />
            </li>
            <li>
              <!-- Class: Sorcerer -->
              <mirage-character :characterClass="3" :characterGrade="1" buttonType="reinforce" />
            </li>
            <li>
              <!-- Class: Lancer -->
              <mirage-character :characterClass="4" :characterGrade="1" buttonType="reinforce" />
            </li>
            <li>
              <!-- Class: Arbalist -->
              <mirage-character :characterClass="5" :characterGrade="1" buttonType="reinforce" />
            </li>

            <li>
              <!-- 상태이상 제외 miraX 노출 -->
              <mirage-character
                characterName="캐릭터이르으음"
                endCooltime="2022-03-27T07:00:00"
                :status="1"
                :showStatusString="true"
                :characterClass="1"
                :characterGrade="5"
                :rank="3"
                :rankChange="-1"
                :rank2="4"
                :rank2Change="2"
                :takeDamage="true"
                :curseScissors="true"
                :curseStink="true"
                :mirageScore="253130"
                :mirageScoreChange="3.32"
                :miraX="510"
                :rankingBonus="1243980"
                buttonType="primary"
              />
            </li>
            <li>
              <mirage-character
                characterName="charName001"
                endSealedTime="2022-02-28T11:12:00"
                :status="2"
                :characterClass="1"
                :characterGrade="4"
                :mirageScore="192460"
                :miraX="510"
              />
            </li>
            <li>
              <mirage-character
                characterName="캐릭터이르으음2"
                endCooltime="2022-03-20T07:00:17"
                :status="3"
                :showStatusString="true"
                :characterClass="1"
                :characterGrade="3"
                :takeDamage="true"
                buttonType="recover"
              />
            </li>
            <li>
              <mirage-character
                characterName="charName002"
                endCooltime="2022-03-17T07:00:00"
                :status="4"
                :showStatusString="true"
                :characterClass="1"
                :characterGrade="2"
                :takeDamage="true"
                buttonType="recover"
              />
            </li>
            <li>
              <mirage-character
                characterName="캐릭터이르으음3"
                endCooltime="2022-03-16T07:12:10"
                :status="5"
                :showStatusString="true"
                :characterClass="1"
                :characterGrade="1"
                :takeDamage="true"
                buttonType="recover"
              />
            </li>

            <li>
              <mirage-character
                characterName="캐릭터이르으음"
                :enlisted="true"
                :status="3"
                :characterClass="4"
                :characterGrade="4"
                :mirageScore="253130"
                :miraX="510"
                buttonType="enlisted"
              />
            </li>
            <li>
              <mirage-character
                characterName="charName001"
                :enlisted="true"
                :status="4"
                :characterClass="4"
                :characterGrade="5"
                :mirageScore="253130"
                :miraX="510"
                buttonType="enlisted"
              />
            </li>
            <li>
              <mirage-character
                characterName="캐릭터이르으음2"
                :status="1"
                :characterClass="2"
                :characterGrade="3"
                :rank="3"
                :rankChange="-1"
                :rank2="4"
                :rank2Change="2"
                :mirageScore="253130"
                :miraX="510"
                buttonType="reinforce"
              />
            </li>
            <li>
              <mirage-character
                characterName="캐릭터이르으음2"
                :status="1"
                :characterClass="4"
                :characterGrade="2"
                :rank="3"
                :rankChange="-1"
                :rank2="4"
                :rank2Change="2"
                :mirageScore="253130"
                :miraX="510"
                buttonType="assault"
              />
            </li>
            <li>
              <mirage-character
                characterName="캐릭터이르으음2"
                :status="1"
                :characterClass="5"
                :characterGrade="1"
                :rank="3"
                :rankChange="-1"
                :rank2="4"
                :rank2Change="2"
                :mirageScore="253130"
                :miraX="510"
                :disabledButton="true"
                buttonType="disabled"
              />
            </li>
          </ul>

          <!-- Data Empty Case -->
          <div class="no-data">
            <p class="desc">
              <em>There is no Character NFT available in your roster.</em>
              <span>Transfer your Character NFTs from your WEMIX WALLET to your MIRAGE roster.</span>
            </p>
            <div>
              <button type="button" class="btn-mirage btn-primary">Import My NFT</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted } from '@vue/composition-api';

import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import 'swiper/swiper-bundle.css'; // (>= Swiper 6.x)
import 'swiper/css/swiper.css'; // (<= Swiper 5.x)

// eslint-disable-next-line import/extensions
import useI18n from '@/utils/useI18n';
import Footer from '@/partials/common/Footer';
import SelectFilter from '@/components-ui/mobile/SelectFilter';
import SelectOrder from '@/components-ui/mobile/SelectOrder';
import SelectCheckFilter from '@/components-ui/mobile/SelectCheckFilter';
import MirageCharacter from '@/components-ui/common/MirageCharacter';
import MirageNoticeInlist from '@/components-ui/common/MirageNoticeInlist';

const genarateFilter = (isReset) => {
  return {
    class: '',
    rank: '',
    sanctuary: '',
    date: !isReset ? { title: 'Date Listed: Newest', abc: 0 } : undefined,
  };
};

export default defineComponent({
  name: 'MirageListMyRoster',
  components: {
    Footer,
    Swiper,
    SwiperSlide,
    SelectFilter,
    SelectOrder,
    SelectCheckFilter,
    MirageCharacter,
    MirageNoticeInlist,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    isPreStake: true,
    selectedTab: null,

    // for filter
    filters: genarateFilter(),
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
  }),
  computed: {
    swiperFilter() {
      return this.$refs.swiperFilter.$swiper;
    },
    isSelectFilter() {
      return Object.values(this.filters).some((f) => !!f);
    },
  },
  methods: {
    removeSelectFilter(item) {
      this.filters[item] = '';
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
  setup() {
    onBeforeMount(() => {
      //
    });

    onMounted(() => {
      //
    });

    return {
      ...useI18n(),
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app';
@import '~@/assets/sass/components/mirage-common';
@import '~@/assets/sass/components/mirage-dialog';
@import '~@/assets/sass/mobile/pages/mirage/mirage-list';
</style>
