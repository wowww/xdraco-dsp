<template>
  <div class="round" ref="target" :aria-current="win ? 'won' : ''">
    <dsp-round-inner :tag="mobile ? false : 'div'" :class="{ round__inner: !mobile }">
      <dsp-item-card :item="source.item" :smaller="mobile ? 'sm' : ''" />
      <dsp-round-number :value="source.roundNum" />
      <div class="wrap-detail">
        <round-body-title v-if="ongoing && !mobile" :item="source.item" />
        <div class="block1">
          <h3 class="round-msg-for" v-if="upcoming || staking">{{ t('w.rounds.start.on', [source.roundNum]) }}</h3>
          <p class="upcoming-date" v-if="upcoming">
            {{ source.startDate | dateFormat }}
          </p>
          <div class="wrap-tick" v-else-if="staking">
            <round-body-flip-count-down :targetDate="source.startDate" :dsp-id="source.dspID" />
            <!-- <round-body-count-down :targetDate="source.startDate" /> -->
          </div>
          <template v-if="closed">
            <h3 class="round-msg-for">{{ t('w.rounds.finish', [source.roundNum]) }}</h3>
            <p class="closed-date">{{ source.startDate | dateFormat }}</p>
            <div class="wrap-define-balance horizontal">
              <dl class="define-balance">
                <dt>{{ t('w.rounds.total.stake') }}</dt>
                <dd class="draco">
                  <span>{{ source.totalStake | currency(0) }}</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>{{ t('w.rounds.participants') }}</dt>
                <dd>
                  <span>{{ source.joinedParticipants | currency(0) }}</span>
                </dd>
              </dl>
            </div>
          </template>
          <p v-if="upcoming || staking">{{ t('w.rounds.open.after', [remainDays]) }}</p>
          <p class="message-result" v-if="closed && win">{{ t('w.rounds.win') }}</p>
          <h3 v-if="closed && join && source.winner" class="title-define-balance">{{ t('w.rounds.winner') }}</h3>
          <round-body-winner v-if="closed && join && source.winner" :winner="source.winner" />

          <h3 v-if="closed && join && !win" class="title-define-balance">{{ t('w.rounds.my') }}</h3>
          <round-body-my-round v-if="closed && join && !win" :my-info="source.myinfo" />

          <div class="block-border" v-if="ongoing" style="width: 100%">
            <div class="wrap-define-balance">
              <dl class="define-balance">
                <dt>{{ t('w.rounds.until.end') }}</dt>
                <dd>
                  <round-body-flip-count-down :target-date="source.endDate" smaller :dsp-id="source.dspID" />
                  <!-- <round-body-count-down :targetDate="source.endDate" smaller /> -->
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>{{ t('w.rounds.participants') }}</dt>
                <dd>
                  <!-- <round-body-flip-count-up :target-value="source.joinedParticipants" smaller /> -->
                  <round-body-number-image :target-value="source.joinedParticipants" smaller />
                </dd>
              </dl>
            </div>
          </div>

          <round-body-status
            v-if="staking || ongoing"
            :ongoing="ongoing"
            :total="source.totalStake"
            :my="source.myinfo && source.myinfo.currentStake ? source.myinfo.currentStake : 0"
            :odds="source.myinfo && source.myinfo.currentOdds ? source.myinfo.currentOdds : 0"
          />
        </div>
      </div>
      <div v-if="closed && !win && !join">
        <h3 v-if="closed && !win" class="title-define-balance">{{ t('w.rounds.winner') }}</h3>
        <round-body-winner v-if="closed && source.winner && !win" :winner="source.winner" />
      </div>
      <dsp-round-footer v-if="!closed || (closed && join)" :round="source" :join="join" />
    </dsp-round-inner>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, onUnmounted, ref, watch } from '@vue/composition-api';
import { useIntersectionObserver } from '@vueuse/core';
import MobileDetect from 'mobile-detect';
import dayjs from 'dayjs';
import { RoundState } from '@/components/dsp/round/round-utils';
import DspRoundInner from '@/components/dsp/round/DspRoundInner';
import DspItemCard from '@/components/dsp/round/DspItemCard';
import DspRoundNumber from '@/components/dsp/round/DspRoundNumber';
import DspRoundFooter from '@/components/dsp/round/DspRoundFooter';
import RoundBodyWinner from '@/components/dsp/round/body/RoundBodyWinner';
import RoundBodyMyRound from '@/components/dsp/round/body/RoundBodyMyRound';
import RoundBodyTitle from '@/components/dsp/round/body/RoundBodyTitle';
import RoundBodyStatus from '@/components/dsp/round/body/RoundBodyStatus';
import RoundBodyCountDown from '@/components/dsp/round/body/RoundBodyCountDown';
import RoundBodyFlipCountDown from '@/components/dsp/round/body/RoundBodyFlipCountDown';
// import RoundBodyFlipCountUp from '@/components/round/body/RoundBodyFlipCountUp';
import RoundBodyNumberImage from '@/components/dsp/round/body/RoundBodyNumberImage';

import useI18n from '@/utils/useI18n';
import { useRoundParticipate, useRoundState } from '@/composables/round';

export default defineComponent({
  name: 'DspRound',
  components: {
    DspRoundInner,
    RoundBodyCountDown,
    RoundBodyFlipCountDown,
    // RoundBodyFlipCountUp,
    RoundBodyNumberImage,
    RoundBodyStatus,
    RoundBodyTitle,
    RoundBodyMyRound,
    RoundBodyWinner,
    DspRoundFooter,
    DspRoundNumber,
    DspItemCard,
  },
  props: {
    index: {
      type: Number,
    },
    source: {
      type: Object,
      default: () => ({}),
    },
  },
  setup({ source, active }) {
    const { ongoing, staking, upcoming, closed } = useRoundState(source);
    const { win, join } = useRoundParticipate(source);

    const timestamp = ref(dayjs().utcOffset(8).unix());
    const mobile = ref(null);

    const remainDays = computed(() => Math.floor((source.endDate - source.startDate) / 60 / 60 / 24));

    const target = ref(null);
    const targetIsVisible = ref(false);

    const { stop } = useIntersectionObserver(target, ([{ isIntersecting }], observerElement) => {
      targetIsVisible.value = isIntersecting;
    });

    watch(
      () => targetIsVisible.value,
      (visible) => {
        if (visible) {
          // resume();
        } else {
          // pause();
        }
      },
    );

    onMounted(() => {
      console.log(`round : ${source.dspID} : ${source.roundState === RoundState.CLOSED} : ${timestamp.value}`);
      console.log(`round : ${source.dspID}, ongoing:  ${ongoing.value}, upcoming:  ${upcoming.value}, staking: ${staking.value}`);

      mobile.value = new MobileDetect(window.navigator.userAgent).mobile();
    });

    onUnmounted(() => {
      stop();
    });

    return {
      ...useI18n(),
      timestamp,
      target,
      targetIsVisible,
      mobile,
      RoundState,
      // now,
      // round.roundState,
      ongoing,
      upcoming,
      staking,
      closed,
      win,
      join,
      remainDays,
    };
  },
});
</script>

<style scoped></style>
