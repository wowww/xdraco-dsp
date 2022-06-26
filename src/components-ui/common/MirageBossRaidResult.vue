<template>
  <div class="mirage-boss-raid-result">
    <div class="section-title-bar" v-if="isInBattle">
      <h2 class="section-title">
        Top Raiders
        <v-tooltip content-class="mirage-tooltip" attach=".section-title" top max-width="240">
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" class="icon-mirage-tooltip">icon</v-icon>
          </template>
          <div class="tooltip-wrap">
            <p>툴팁 내용 내용 내용 내용 내용 내용</p>
          </div>
        </v-tooltip>
      </h2>
    </div>

    <div class="section-title-bar" v-else>
      <h2 class="section-title">Raid Result</h2>
      <div class="result-msg">
        <span class="txt-msg">Ranking 기준</span>
        <v-tooltip content-class="mirage-tooltip" attach=".result-msg" max-width="320" top>
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on" class="icon-mirage-tooltip">icon</v-icon>
          </template>
          <div class="mirage-tooltip-title">랭킹 기준</div>
          <div class="mirage-tooltip-desc">
            입찰 순위 10위까지 보스레이드에 참가할 수 있고, 이 10위 까지의 캐릭터들의 MIRAGE Score 순으로 최종 랭킹이 결정됩니다.
          </div>
        </v-tooltip>
      </div>
    </div>
    <mirage-result-list :isInBattle="isInBattle" :rankData="resultRankData" />
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';
import MirageResultList from '@/components-ui/common/MirageResultList';

export default defineComponent({
  name: 'MirageBossRaidResult',
  components: {
    MirageResultList,
  },
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
    resultRankData: [
      { rank: 1, class: '1', damage: '0', hasSpecialReward: true },
      { rank: 2, class: '2', damage: '1', hasSpecialReward: true, isHighlight: true },
      { rank: 3, class: '3', damage: '2', hasSpecialReward: false },
      { rank: 4, class: '4', damage: '3', hasSpecialReward: true },
      { rank: 5, class: '5', damage: '0', hasSpecialReward: false },
      { rank: 6, class: '1', damage: '0', hasSpecialReward: true },
      { rank: 7, class: '2', damage: '1', hasSpecialReward: true },
      { rank: 8, class: '3', damage: '2', hasSpecialReward: false },
      { rank: 9, class: '4', damage: '3', hasSpecialReward: true },
      { rank: 10, class: '5', damage: '0', hasSpecialReward: false },
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
@import '~@/assets/sass/components/mirage-boss-raid-result';
</style>
