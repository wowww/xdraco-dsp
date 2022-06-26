<template>
  <v-dialog
    :content-class="`dialog-stake theme-dark ${step === 0 ? 'winner' : ''}`"
    v-model="openWinner"
    max-width="640"
    persistent
    :fullscreen="!!mobile"
  >
    <div class="content">
      <v-btn class="btn-close" @click="close" fab plain x-small>
        <v-icon color="#fff" size="26">mdi-close</v-icon>
      </v-btn>
      <div class="dialog-header" v-if="currentRound">
        <div class="info-round">
          <dsp-round-number :value="currentRound.roundNum" />
          <round-body-title :item="currentRound.item" />
        </div>
      </div>
      <winner-item-card :round="currentRound" :season="currentSeason" @process-next="processNext" />
      <winner-character-selector v-if="step === 1" :round="currentRound" />
    </div>
  </v-dialog>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from '@vue/composition-api';
import MobileDetect from 'mobile-detect';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import WinnerCharacterSelector from '@/components/dsp/round/modal/WinnerCharacterSelector';
import WinnerItemCard from '@/components/dsp/round/modal/WinnerItemCard';
import RoundBodyTitle from '@/components/dsp/round/body/RoundBodyTitle';
import DspRoundNumber from '@/components/dsp/round/DspRoundNumber';

const { useGetters: useDspGetters, useState: useDspState, useActions, useMutations: useDspMutations } = createNamespacedHelpers('dsp');
const { useActions: useAccountActions } = createNamespacedHelpers('account');

export default defineComponent({
  name: 'ModalDspWinner',
  components: { WinnerItemCard, WinnerCharacterSelector, DspRoundNumber, RoundBodyTitle },
  setup() {
    const step = ref(0);
    const mobile = ref(null);
    const { currentRound, currentSeason } = useDspGetters(['currentRound', 'currentSeason']);
    const { openWinner } = useDspState(['openWinner']);
    const { setOpenWinner } = useDspMutations(['setOpenWinner']);

    const { fetchUserCharacter, fetchChannelUserCharacter } = useAccountActions(['fetchUserCharacter', 'fetchChannelUserCharacter']);

    onMounted(() => {
      mobile.value = new MobileDetect(window.navigator.userAgent).mobile();
    });

    watch(
      () => openWinner.value,
      (current) => {
        if (current) {
          fetchUserCharacter();
        }
      },
    );

    const close = () => {
      setOpenWinner(false);
      step.value = 0;
    };

    const processNext = () => {
      step.value = 1;
    };

    return {
      step,
      currentSeason,
      currentRound,
      mobile,
      openWinner,
      close,
      processNext,
    };
  },
});
</script>

<style scoped></style>
