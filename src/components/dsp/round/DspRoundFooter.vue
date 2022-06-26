<template>
  <div class="wrap-button">
    <round-footer-button-upcoming v-if="upcoming" :dsp-id="round.dspID" :pre-start-date="round.preStartDate" :my-info="round.myinfo" />
    <round-footer-button-ongoing v-else-if="ongoing || staking" :round="round" />
    <round-footer-button-closed v-else-if="closed && join" :dsp-id="round.dspID" :myinfo="round.myinfo" :win="win" />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useGetters } from 'vuex-composition-helpers/dist';
import dayjs from 'dayjs';
import { RoundState } from '@/components/dsp/round/round-utils';
import RoundFooterButtonUpcoming from '@/components/dsp/round/footer/RoundFooterButtonUpcoming';
import RoundFooterButtonOngoing from '@/components/dsp/round/footer/RoundFooterButtonOngoing';
import RoundFooterButtonClosed from '@/components/dsp/round/footer/RoundFooterButtonClosed';
import { getStakeMoreTime, useDay, useRoundParticipate, useRoundState, useTime } from '@/composables/round';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'DspRoundFooter',
  components: { RoundFooterButtonClosed, RoundFooterButtonOngoing, RoundFooterButtonUpcoming },
  props: {
    round: {
      type: Object,
      required: true,
      default: () => {},
    },
    join: Boolean,
  },
  setup({ round }) {
    const { t } = useI18n();
    const timestamp = useTime();
    const { win } = useRoundParticipate(round);
    const { stakeMoreTime } = getStakeMoreTime();

    let availableSkateDate = useDay(round.preStartDate).format(t('w.rounds.date.format'));

    if (round.myinfo && round.myinfo.prevStakeDT) {
      availableSkateDate = useDay(round.myinfo.prevStakeDT).add(Number(stakeMoreTime), 'ms').format(t('w.rounds.date.format'));
    }

    return {
      ...useRoundState(round),
      win,
      timestamp,
      availableSkateDate,
    };
  },
});
</script>

<style scoped></style>
