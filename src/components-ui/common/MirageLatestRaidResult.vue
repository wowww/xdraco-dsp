<template>
  <div class="mirage-latest-raid-result">
    <div class="section-title-bar">
      <h2 class="section-title">Latest Raid Result</h2>
      <span class="raid-date" v-if="isMobile">{{ roundRaidData.date }}</span>
    </div>
    <div class="wrap-round-raid-info">
      <img src="@/assets/img/common/mirage/thumb-40-horang.webp" width="40" alt="" />
      <mirage-round-raid-info :roundRaidData="roundRaidData" />

      <div class="wrap-btn">
        <!-- Ranking Dialog -->
        <v-dialog
          attach="#contents"
          content-class="dialog-mirage dialog-mirage-raid-info"
          v-model="dialogRaidRanking"
          scrollable
          :width="!isMobile ? '960px' : '100%'"
          :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
        >
          <template v-slot:activator="{ on, attrs }">
            <button type="button" class="btn-mirage btn-primary" v-bind="attrs" v-on="on">Ranking</button>
          </template>
          <div class="dialog-header">
            Latest Raid Result Ranking
            <v-btn class="btn-close btn-miragepop-close" @click="dialogRaidRanking = false" fab plain x-small></v-btn>
          </div>
          <div class="content">
            <div class="wrap-raid-info">
              <img src="@/assets/img/desktop/mirage/thumb-96-horang.webp" width="96" alt="" />
              <mirage-round-raid-info :roundRaidData="roundRaidData" />
            </div>
            <mirage-result-list :rankData="resultRankData" />
          </div>
        </v-dialog>
      </div>
      <!-- //Ranking Dialog -->
    </div>
    <mirage-result-list :rankData="historyRankData" />
    <div class="wrap-button">
      <!-- my Raid History Dialog -->
      <v-dialog
        attach="#contents"
        content-class="dialog-mirage dialog-mirage-raid-info"
        v-model="dialogRaidHistory"
        scrollable
        :width="!isMobile ? '960px' : '100%'"
        :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
      >
        <template v-slot:activator="{ on, attrs }">
          <button type="button" class="btn btn-sm" v-bind="attrs" v-on="on">
            <span class="ico-calendar">My Boss Raid History</span>
          </button>
        </template>
        <div class="dialog-header">
          My Boss Raid Enlist History
          <v-btn class="btn-close btn-miragepop-close" @click="dialogRaidHistory = false" fab plain x-small></v-btn>
        </div>
        <div class="content">
          <ul class="list-history-round">
            <li>
              <mirage-round-raid-info :roundRaidData="roundRaidData" />
              <mirage-result-list :rankData="historyRankData" />
            </li>
            <li>
              <mirage-round-raid-info :roundRaidData="roundRaidData" />
              <mirage-result-list :rankData="historyRankData" />
            </li>
            <li>
              <mirage-round-raid-info :roundRaidData="roundRaidData" />
              <mirage-result-list :rankData="historyRankData" />
            </li>
            <li>
              <mirage-round-raid-info :roundRaidData="roundRaidData" />
              <mirage-result-list :rankData="historyRankData" />
            </li>
          </ul>
        </div>
      </v-dialog>
      <!-- //my Raid History Dialog -->
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';
import MirageResultList from '@/components-ui/common/MirageResultList';
import MirageRoundRaidInfo from '@/components-ui/common/MirageRoundRaidInfo';

export default defineComponent({
  name: 'MirageLatestRaidResult',
  components: {
    MirageResultList,
    MirageRoundRaidInfo,
  },
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
    dialogRaidRanking: false,
    dialogRaidHistory: false,
    roundRaidData: {
      round: 'Round 11',
      boss: 'HORANG the Mad Stable Keeper',
      date: 'March. 5th 2022 00:00 UTC+8',
    },
    resultRankData: [
      { rank: 1, class: '1', damage: '0', hasSpecialReward: true },
      { rank: 2, class: '2', damage: '1', hasSpecialReward: true },
      { rank: 3, class: '3', damage: '2', hasSpecialReward: false },
      { rank: 4, class: '4', damage: '3', hasSpecialReward: true },
      { rank: 5, class: '5', damage: '0', hasSpecialReward: false },
      { rank: 6, class: '1', damage: '0', hasSpecialReward: true },
      { rank: 7, class: '2', damage: '1', hasSpecialReward: true },
      { rank: 8, class: '3', damage: '2', hasSpecialReward: false },
      { rank: 9, class: '4', damage: '3', hasSpecialReward: true },
      { rank: 10, class: '5', damage: '0', hasSpecialReward: false },
    ],
    historyRankData: [
      { rank: 3, class: '1', damage: '1', hasSpecialReward: true },
      { rank: 9, class: '4', damage: '3', hasSpecialReward: false },
    ],
  }),
  props: {
    isInBattle: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    //
  },
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-latest-raid-result';
</style>
