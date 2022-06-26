<template>
  <button
    type="button"
    class="btn"
    :class="{
      'btn-primary': not || (more && possibleMore),
      'btn-primary2': !not && !possibleMore,
    }"
    @click="openRoundModal(round.dspID)"
    :disabled="!not && !possibleMore"
  >
    <template v-if="more">
      <template v-if="possibleMore">STAKE MORE</template>
      <span v-else class="btn-message">You can stake more at {{ availableSkateDate }}</span>
    </template>
    <template v-else-if="staking"> PRE-STAKE </template>
    <template v-else>STAKE EARLIER</template>
  </button>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';
import { getStakeMoreTime, useDay, useRoundModal, useRoundParticipate, useRoundState, useTime } from '@/composables/round';

export default defineComponent({
  name: 'RoundFooterButtonOngoing',
  props: {
    round: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  setup({ round }, { root }) {
    const timestamp = useTime();
    const i18n = useI18n();

    const { staking } = useRoundState(round);

    let availableSkateDate = useDay(round.startDate).format(i18n.t('w.rounds.date.format'));

    if (round.myinfo && round.myinfo.prevStakeDT) {
      availableSkateDate = useDay(round.myinfo.prevStakeDT).add(getStakeMoreTime(), 's').format(i18n.t('w.rounds.date.format'));
    }

    const { openRoundModal } = useRoundModal(root.$wemix);

    return {
      ...i18n,
      timestamp,
      openRoundModal,
      availableSkateDate,
      ...useRoundParticipate(round),
      staking,
    };
  },
});
</script>

<style scoped></style>
