<template>
  <main id="contents" class="contents mirage">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="wrap-grid">
          <!-- 타임라인 -->
          <div class="grid-timeline">
            <!-- for UI pages -->
            <div class="side-sticky-button">
              <button type="button" class="button" :class="{ 'btn--active': isDataEmpty }" @click="toggleEmptyState">Empty</button>
            </div>

            <div class="wrap-my-mirage">
              <v-tabs class="tab-rounds" v-model="selectedTab">
                <v-tab to="/ui-mirage-list-myroster">My Roster</v-tab>
                <v-tab to="/ui-mirage-NFT-enhancement">NFT Enhancement</v-tab>
                <v-tab to="/ui-mirage-list-mynfts">My NFTs</v-tab>
              </v-tabs>

              <template v-if="isDataEmpty">
                <div class="no-data">
                  <p class="desc">
                    <em>There is no Character NFT available in your roster.</em>
                    <span>Transfer your Character NFTs from your WEMIX WALLET to your MIRAGE roster.</span>
                  </p>
                  <div>
                    <button type="button" class="btn-mirage btn-primary">Import My NFT</button>
                  </div>
                </div>
              </template>

              <template v-else>
                <div class="util-list">
                  <div class="summary"><em>10</em> Characters</div>
                  <div class="mirage-inventory">
                    <div class="mirage-inventory-item">
                      <span class="currency">
                        <img src="@/assets/img/common/mirage/ico-20-darksteel.webp" width="20" height="20" alt="darksteel" />
                        <em class="volume">0</em>
                      </span>
                    </div>
                    <div class="mirage-inventory-item">
                      <span class="currency">
                        <img src="@/assets/img/common/mirage/ico-20-septaria.webp" width="20" height="20" alt="septaria" />
                        <em class="volume">0</em>
                      </span>
                    </div>
                    <div class="mirage-inventory-item">
                      <span class="currency">
                        <img src="@/assets/img/common/mirage/img-24-mirage-scroll.webp" width="24" height="22" alt="enhance" />
                        <em class="volume">0</em>
                        <button type="button" class="btn-enhance">Enhance</button>
                      </span>
                    </div>
                    <div class="mirage-inventory-item">
                      <span class="currency">
                        <img src="@/assets/img/common/mirage/ico-20-energy.webp" width="20" height="20" alt="energy" />
                        <em class="volume">0</em>
                        <button type="button" class="btn-charge">Charge</button>
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Filter -->
                <div id="wrapFilterList" class="wrap-filter equally-child">
                  <div class="wrap-filter__inner">
                    <SelectFilter
                      placeholder="Class"
                      :items="['All', 'Warrior', 'Sorcerer', 'Taoist', 'Lancer', 'Arbalist']"
                      :selectedValue.sync="filters.class"
                    ></SelectFilter>
                    <SelectFilter
                      placeholder="Rank"
                      :items="['All', 'legendary', 'epic', 'rare', 'uncommon', 'common']"
                      :selectedValue.sync="filters.rank"
                    ></SelectFilter>
                    <SelectFilter
                      placeholder="Sanctuary of Hydra"
                      :items="['All', 'value1', 'value2', 'value3', 'value4']"
                      :selectedValue.sync="filters.sanctuary"
                    ></SelectFilter>
                  </div>

                  <div class="wrap-filter-chip">
                    <div class="wrap-chips">
                      <v-chip v-if="!!filters.class" outlined label>
                        {{ filters.class }}
                        <img @click="removeSelectFilter('class')" src="@/assets/img/desktop/dsp/ico-close.webp" />
                      </v-chip>
                      <v-chip v-if="!!filters.rank" outlined label>
                        {{ filters.rank }}
                        <img @click="removeSelectFilter('rank')" src="@/assets/img/desktop/dsp/ico-close.webp" />
                      </v-chip>
                      <v-chip v-if="!!filters.sanctuary" outlined label>
                        {{ filters.sanctuary }}
                        <img @click="removeSelectFilter('sanctuary')" src="@/assets/img/desktop/dsp/ico-close.webp" />
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

                <mirage-notice-inlist
                  message="동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록"
                />

                <ul class="list-mirage-roster">
                  <li>
                    <!-- Class: Warrior -->
                    <mirage-character :characterClass="1" :characterGrade="1" buttonType="reinforce" />
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
                      :miraX="10"
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
                      :curseStink="true"
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
                      :curseScissors="true"
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
              </template>
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
import { defineComponent, onBeforeMount, onMounted } from '@vue/composition-api';

// eslint-disable-next-line import/extensions
import useI18n from '@/utils/useI18n';
import Footer from '@/partials/common/Footer';
import AccountInfo from '@/components/account/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import MirageCharacter from '@/components-ui/common/MirageCharacter';
import MirageNoticeInlist from '@/components-ui/common/MirageNoticeInlist';
import SelectFilter from '@/components-ui/desktop/SelectFilter';
import SelectOrder from '@/components-ui/desktop/SelectOrder';

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
    AccountInfo,
    SidebarContactUs,
    MirageCharacter,
    MirageNoticeInlist,
    SelectFilter,
    SelectOrder,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',

    isPreStake: true,
    selectedTab: null,

    filters: genarateFilter(),

    isDataEmpty: false,
  }),
  computed: {
    isSelectFilter() {
      return Object.values(this.filters).some((f) => !!f);
    },
  },
  methods: {
    toggleEmptyState() {
      this.isDataEmpty = !this.isDataEmpty;
    },
    removeSelectFilter(item) {
      this.filters[item] = '';
    },
    removeDateFilter() {
      this.filters.date = undefined;
    },
    resetFilters() {
      this.filters = genarateFilter(true);
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
@import '~@/assets/sass/desktop/ui-guide';
@import '~@/assets/sass/desktop/app';
@import '~@/assets/sass/components/mirage-common';
@import '~@/assets/sass/components/mirage-dialog';
@import '~@/assets/sass/desktop/pages/mirage/mirage-list';
</style>
