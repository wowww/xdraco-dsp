<template>
  <v-tabs class="tab-rounds" :class="{ 'no-gutter': !!md.mobile() }" :value="roundType - 1">
    <v-tab
      v-for="roundState in roundStateList.filter((item) => (dracoAccessToken ? item.auth || !item.auth : !item.auth))"
      :key="roundState.type"
      @click="setRoundType(roundState.type)"
    >
      <span>{{ t(roundState.message) }}</span>
      <span class="count">{{ roundCount[roundState.key] }}</span>
    </v-tab>
  </v-tabs>
</template>

<script>
import { defineComponent, getCurrentInstance, reactive, toRefs } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import MobileDetect from 'mobile-detect';
import useI18n from '@/utils/useI18n';
import { RoundState } from '@/components/dsp/round/round-utils';

const { useGetters: useDspGetters, useMutations: useDspMutations } = createNamespacedHelpers('dsp');

export default defineComponent({
  name: 'DspRoundStateTabs',
  setup() {
    getCurrentInstance();
    const state = reactive({
      md: new MobileDetect(window.navigator.userAgent),
      roundStateList: [
        { type: RoundState.ONGOING, key: 'ongoing', message: 'w.rounds.tab.ongoing', auth: false },
        { type: RoundState.UPCOMING, key: 'upcoming', message: 'w.rounds.tab.upcoming', auth: false },
        { type: RoundState.CLOSED, key: 'closed', message: 'w.rounds.tab.closed', auth: false },
        { type: 4, key: 'my', message: 'w.rounds.my', auth: true },
      ],
    });
    const { dracoAccessToken } = useState(['dracoAccessToken']);
    const { roundCount, roundType } = useDspGetters(['roundCount', 'roundType']);
    const { setRoundType } = useDspMutations(['setRoundType']);

    return {
      ...useI18n(),
      ...toRefs(state),
      dracoAccessToken,
      roundCount,
      setRoundType,
      roundType,
    };
  },
});
</script>

<style scoped></style>
