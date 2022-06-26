<template>
  <button
    type="button"
    :disabled="myinfo.reward.rewarded > 0"
    class="btn btn-sm"
    :class="{ 'btn-secondary': win && myinfo.reward.rewarded === 0, 'btn-primary2': !win && myinfo.reward.rewarded === 0 }"
    @click="openModal"
  >
    <template v-if="win">
      <template v-if="myinfo.reward.rewarded === 0">
        <span>{{ t('w.rounds.win.prize') }}</span>
        <span class="emp">{{ t('w.rounds.claim', [availableEndDate]) }}</span>
      </template>
      <template v-else>{{ t('w.rounds.obtained') }}</template>
    </template>
    <template v-else>
      <template v-if="myinfo.reward.rewarded === 0">
        <span>{{ t('w.rounds.refund.rewards') }}</span>
        <span class="emp">{{ t('w.rounds.claim', [availableEndDate]) }}</span>
      </template>
      <template v-else> {{ t('w.rounds.refund.success') }}</template>
    </template>
  </button>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useGetters, createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import dayjs from 'dayjs';
import { RoundState } from '@/components/dsp/round/round-utils';
import useI18n from '@/utils/useI18n';
import { useDay, useTime, useWemixLogin } from '@/composables/round';

const { useState: useDspState, useMutations: useDspMutations } = createNamespacedHelpers('dsp');

export default defineComponent({
  name: 'RoundFooterButtonClosed',
  props: {
    dspId: Number,
    win: Boolean,
    startDate: Number,
    endDate: Number,
    myinfo: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  setup({ dspId, win, startDate, endDate, myInfo }, { root }) {
    const { wemixLogin } = useWemixLogin(root.$wemix);

    const i18n = useI18n();

    const endTime = useDay(endDate);

    const { accessToken } = useState(['accessToken']);
    const { openWinner } = useDspState(['openWinner', 'openReward']);
    const { setCurrentRound, setOpenWinner, setOpenReward } = useDspMutations(['setOpenWinner', 'setOpenReward', 'setCurrentRound']);
    const availableEndDate = useDay(endDate).add(1, 'year').format(i18n.t('w.rounds.date.format'));

    const openModal = () => {
      if (win) {
        if (!accessToken.value) {
          wemixLogin();
          return;
        }

        setCurrentRound(dspId);
        setOpenWinner(true);
      } else {
        setCurrentRound(dspId);
        setOpenReward(true);
      }
    };

    return {
      ...i18n,
      RoundState,
      availableEndDate,
      openModal,
    };
  },
});
</script>

<style scoped></style>
