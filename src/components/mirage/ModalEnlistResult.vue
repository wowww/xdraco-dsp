<template>
  <v-dialog
    attach="#contents"
    content-class="dialog-mirage dialog-mirage-play"
    :value="visibleEnlistResult"
    :width="!isMobile ? '560px' : '100%'"
    scrollable
    persistent
    :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
  >
    <div class="content" v-if="enlistResultResponse">
      <v-btn class="btn-close btn-miragepop-close" @click="setVisibleEnlistResult(false)" fab plain x-small />
      <p
        class="mirage-popup-playdesc"
        v-if="enlistResultResponse && enlistResultResponse.isKick == '1'"
        v-html="
          t('s.mirage.message.assault.kick', [
            selectedCharacter.CharacterName,
            enlistResultResponse.VictimCharacterName,
            t(`t.mirage.valley-type.${modalSelectedValley.valleyId}`),
          ])
        "
      />
      <p class="mirage-popup-playdesc" v-if="selectedCharacter && enlistResultResponse.isKick != '1'">
        <strong>{{ selectedCharacter.CharacterName }}</strong
        ><br />
        has joined in the <strong>‘{{ t(`t.mirage.valley-type.${modalSelectedValley.valleyId}`) }}’</strong> Hidden Valley Capture.
      </p>
      <div class="play-wrap" v-if="selectedCharacter">
        <div class="char">
          <mirage-valley-character-item :character="selectedCharacter" hide-action hide-character-name hide-mirage-score />
        </div>
        <div class="play-info">
          <dl class="play-score">
            <dt>MIRAGE Score</dt>
            <dd>
              <span class="volume">{{ selectedCharacter.MirageScore | currency(0) }}</span>
              <div class="mirax">
                <span>MiraX</span>
                <span class="value">{{ selectedCharacter.MiraX }}</span>
              </div>
            </dd>
          </dl>
          <dl class="play-stage">
            <dt>{{ t('t.mirage.sanctuary') }}</dt>
            <dd>
              <p>Stage</p>
              <span>{{ selectedCharacter.SanctuaryOfHydraLevel }}</span>
            </dd>
          </dl>
        </div>
      </div>
      <p class="break-in" v-if="enlistResultResponse.isKick === '1' && savedVigor">{{ t('s.mirage.assault.base.vigor') }}</p>
      <div class="remain-energy type2" v-if="enlistResultResponse && enlistResultResponse.isKick === '1'">
        <span>{{ t('w.mirage.used.vigor') }}</span
        ><span class="remain">{{ vigorAmount }}</span>
      </div>
      <button type="button" class="btn btn-black-mirage" @click="setVisibleEnlistResult(false)">OK</button>
    </div>
  </v-dialog>
</template>

<script>
import { computed, defineComponent, watch } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';

import MirageValleyCharacterItem from '@/components/mirage/MirageValleyCharacterItem';
import { useMobile } from '@/composables/common';
import useI18n from '@/utils/useI18n';

const { useState: useMirageState, useMutations: useMirageMutations } = createNamespacedHelpers('mirage');

export default defineComponent({
  name: 'ModalEnlistResult',
  components: { MirageValleyCharacterItem },
  setup() {
    const { rosters, modalSelectedValley, visibleEnlistResult, modalSelectedCharacterUID, enlistResultResponse } = useMirageState([
      'rosters',
      'modalSelectedValley',
      'visibleEnlistResult',
      'modalSelectedCharacterUID',
      'enlistResultResponse',
    ]);
    const { setVisibleEnlistResult, setEnlistResultResponse } = useMirageMutations(['setVisibleEnlistResult', 'setEnlistResultResponse']);

    const selectedCharacter = computed(() => {
      if (modalSelectedCharacterUID.value) {
        return rosters.value.find((item) => item.CharacterUID === modalSelectedCharacterUID.value);
      }

      return null;
    });

    const savedVigor = computed(() => {
      if (enlistResultResponse.value) {
        return Number(enlistResultResponse.value.VigorAmount) < Number(enlistResultResponse.value.BetVigorAmount);
      }

      return false;
    });

    const vigorAmount = computed(() => {
      if (enlistResultResponse.value) {
        return enlistResultResponse.value.VigorAmount;
      }

      return 0;
    });

    watch(
      () => visibleEnlistResult.value,
      () => {
        if (!visibleEnlistResult.value) {
          setEnlistResultResponse(null);
        }
      },
    );

    return {
      ...useI18n(),
      ...useMobile(),
      modalSelectedValley,
      visibleEnlistResult,
      enlistResultResponse,
      setVisibleEnlistResult,
      selectedCharacter,
      savedVigor,
      vigorAmount,
    };
  },
});
</script>

<style scoped></style>
