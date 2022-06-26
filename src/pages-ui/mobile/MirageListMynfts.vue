<template>
  <main id="contents" class="contents mirage">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="wrap-my-mirage">
          <v-tabs class="tab-rounds" v-model="selectedTab" :hide-slider="true">
            <v-tab to="/ui-mirage-list-myroster">My Roster</v-tab>
            <v-tab to="/ui-mirage-NFT-enhancement">NFT Enhancement</v-tab>
            <v-tab to="/ui-mirage-list-mynfts">My NFTs</v-tab>
          </v-tabs>

          <!-- empty case for UI -->
          <button type="button" class="btn-ui-empty" :class="{ 'btn--active': isDataEmpty }" @click="toggleEmptyState">
            Empty case: {{ isDataEmpty }}
          </button>
          <!-- //empty case for UI -->

          <template v-if="isDataEmpty">
            <div class="no-data">
              <p class="desc">
                <em>보유중인 NFT가 없습니다.</em>
                <span>MIR4 NFT를 구매하거나, MIR4 캐릭터를 NFT로 만들어 MIRAGE 전쟁에 참전하세요.</span>
              </p>
            </div>
            <div class="list-bar">
              <h2 class="section-title">Recommend NFTs</h2>
              <v-tabs v-model="tabGrade" class="tab-grade" background-color="transparent">
                <v-tab v-for="item in recommNFTCards" :key="item.id">{{ item.grade }}</v-tab>
              </v-tabs>
            </div>
            <v-tabs-items v-model="tabGrade">
              <v-tab-item v-for="item in recommNFTCards" :key="item.id">
                <ul class="list-my-mirage recommend">
                  <li v-for="card in item.class" :key="card.id">
                    <card-nft :itemGrade="item.gradeNum > 1 ? item.gradeNum : getRandomGrade()" :characterClass="card" smaller="xs"></card-nft>
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
                <div class="wrap-button">
                  <router-link class="btn-viewmore" to="/view-more">VIEW MORE</router-link>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </template>

          <template v-else>
            <div class="util-list">
              <div class="summary">
                <em>{{ nftCards.length }}</em> NFTs
              </div>
              <SelectOrder
                class="list-ordering"
                :items="[
                  { title: 'Time: Newest', abc: 0 },
                  { title: 'Time: Oldest', abc: 1 },
                  { title: 'Time: Highest', abc: 2 },
                  { title: 'Time: Lowest', abc: 3 },
                ]"
                :selectedValue="{ title: 'Time: Newest', abc: 0 }"
              ></SelectOrder>
            </div>

            <mirage-notice-inlist
              message="동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록 동해물과 백두산이 마르고 닳도록"
            />

            <ul class="list-my-mirage">
              <li v-for="item in nftCards" :key="item.id" :aria-disabled="item.disabled">
                <card-nft :itemGrade="item.grade" characterClass="arbalist" smaller="xs"></card-nft>
                <div class="wrap-button">
                  <v-dialog
                    content-class="dialog-mirage dialog-scorepop-type2 dialog-mirage-score"
                    v-model="item.isDialogOpen"
                    width="100%"
                    scrollable
                    transition="dialog-bottom-transition"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <button
                        type="button"
                        v-bind="attrs"
                        v-on="on"
                        class="btn btn-sm"
                        :class="{ 'btn-primary-mirage': !item.disabled }"
                        :disabled="item.disabled"
                      >
                        Send to roster
                      </button>
                    </template>

                    <div class="content">
                      <v-btn class="btn-close btn-miragepop-close" @click="item.isDialogOpen = false" fab plain x-small></v-btn>
                      <div class="info">
                        <card-nft :itemGrade="item.grade" characterClass="arbalist" smaller="xs"></card-nft>
                        <div class="info-box">
                          <dl class="info-score">
                            <dt>MIRAGE Score</dt>
                            <dd>
                              <span class="volume">162,436</span>
                              <div class="mirax">
                                <span>MiraX</span>
                                <span class="value">510</span>
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                      <div class="mirage-popup-scorepopdesc">
                        <p>In order to enlist your Character NFT in MIRAGE, you must first transfer your NFT to your roster.</p>
                        <p>
                          NFTs transferred to the roster CAN NOT be unsealed for gameplay or registered on NFT Marketplace for sale until they have
                          been removed from the roster.
                        </p>
                      </div>
                      <button type="button" class="btn btn-red-mirage"><span class="single">Transfer to Roster</span></button>
                    </div>
                  </v-dialog>
                </div>
              </li>
            </ul>
          </template>
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
import SelectOrder from '@/components-ui/desktop/SelectOrder';
import CardNft from '@/components-ui/common/CardNft';
import MirageNoticeInlist from '@/components-ui/common/MirageNoticeInlist';

export default defineComponent({
  name: 'MirageListMynfts',
  components: {
    Footer,
    SelectOrder,
    CardNft,
    MirageNoticeInlist,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',

    selectedTab: null,
    tabGrade: null,
    isDataEmpty: false,
    nftCards: [
      { isDialogOpen: false, grade: 2, isMirage: true, disabled: true },
      { isDialogOpen: false, grade: 3, disabled: true },
      { isDialogOpen: false, grade: 4, isMirage: true },
      { isDialogOpen: false, grade: 5 },
      { isDialogOpen: false, grade: 2 },
    ],
    recommNFTCards: [
      { grade: 'All', gradeNum: 0, class: ['warrior', 'taoist', 'sorcerer', 'lancer', 'arbalist', 'taoist'] },
      { grade: 'Legendary', gradeNum: 5, class: ['warrior', 'taoist', 'sorcerer', 'lancer'] },
      { grade: 'Epic', gradeNum: 4, class: ['warrior', 'taoist', 'sorcerer', 'lancer', 'arbalist'] },
      { grade: 'Rare', gradeNum: 3, class: ['warrior', 'taoist'] },
      { grade: 'Uncommon', gradeNum: 2, class: ['warrior', 'taoist', 'sorcerer'] },
    ],
  }),
  methods: {
    getRandomGrade() {
      return Math.floor(Math.random() * (5 - 2 + 1)) + 2;
    },
    toggleEmptyState() {
      this.isDataEmpty = !this.isDataEmpty;
    },
  },
  mounted() {
    this.selectedTab = 1;
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
@import '~@/assets/sass/components/mirage-dialog';
@import '~@/assets/sass/mobile/pages/mirage/mirage-list';

// empty case for UI
.btn-ui-empty {
  margin: 20px 0;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);

  &.btn--active {
    background-color: #600a24;
  }
}
</style>
