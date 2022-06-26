<template>
  <v-dialog attach="#contents" content-class="dialog-mirage dialog-mirage-captureresult" :value="visibleRanking" :fullscreen="isMobile" persistent>
    <div class="content" v-if="valleyRank">
      <div class="dialog-header">
        {{ t('t.mirage.valley.result') }}
        <v-btn class="btn-close btn-miragepop-close" @click="setVisibleRanking(false)" fab plain x-small />
      </div>
      <div class="valley valley-type1">
        <div class="name">Valley</div>
        <div class="info-wrap">
          <div class="info">
            <p class="day">Day {{ valleyRank.schedule.Daily }} /</p>
            <p class="half">
              {{ t(`w.mirage.${valleyRank.schedule.Battle}.half`) }}
            </p>
          </div>
        </div>
        <p class="date">{{ valleyRank.schedule.EndDT | dateFormat }}</p>
      </div>
      <div class="desc-wrap">
        <div class="desc-inner">
          <p class="desc-title">Total Rank Bonus Draksteels</p>
          <p class="desc-info">{{ t('s.mirage.message.ranking-bonus') }}</p>
        </div>
        <div class="bonus">
          <p class="bonus-left">Total Darksteel Ranking Bonus</p>
          <p class="bonus-right">
            <img src="@/assets/img/common/mirage-popup/icon-darksteel-sm.webp" width="20" />{{ valleyRank.TotalBonusAmount | currency(0) }}
          </p>
        </div>
      </div>
      <div class="result-content" v-if="valleyRank">
        <div class="char-wrap">
          <ul class="char-list">
            <li v-for="(rankItem, rankItemIdx) in rankList" :key="`mirage-rank-${rankItemIdx}`">
              <mirage-rank-character-item
                v-if="rankItemIdx < 50"
                :character="{
                  ...rankItem,
                  State: MirageCharacterState.READY,
                }"
                :current-rank="Number(rankItem.Ranking)"
                :rank-change="Number(rankItem.RankChange || 0)"
                :key="`mirage-rank-character-${rankItemIdx}-${rankItem.CharacterUID}`"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import { useMobile } from '@/composables/common';
import MirageRankCharacterItem from '@/components/mirage/MirageRankCharacterItem';
import MirageCharacterState from '@/constants/mirage/mirage-character-state';
import useI18n from '@/utils/useI18n';

const { useState: useMirageState, useMutations: useMirageMutations } = createNamespacedHelpers('mirage');

export default defineComponent({
  name: 'ModalMirageRanking',
  components: { MirageRankCharacterItem },
  setup() {
    const { visibleRanking, valleyRank, valleyResult } = useMirageState(['visibleRanking', 'valleyRank', 'valleyResult']);
    const { setVisibleRanking } = useMirageMutations(['setVisibleRanking']);

    const rankList = computed(() => {
      if (valleyRank.value && valleyRank.value.Rank) {
        return valleyRank.value.Rank.sort((a, b) => a.Ranking - b.Ranking);
      }
      return [];
    });

    return {
      ...useI18n(),
      ...useMobile(),
      MirageCharacterState,
      visibleRanking,
      setVisibleRanking,
      valleyRank,
      rankList,
    };
  },
});
</script>

<style scoped></style>
