<template>
  <main class="contents rounds">
    <banner-dsp-round-end-banner />

    <section class="section">
      <div class="section__inner">
        <season-selector />
        <dsp-round-state-list />

        <div v-if="roundLoading || seasonLoading" :style="{ display: 'flex', width: '100%', justifyContent: 'center', margin: '10rem auto' }">
          <v-progress-circular class="ml-2" :size="24" :width="4" color="#fff" indeterminate />
        </div>

        <div
          v-if="
            !seasonLoading &&
            !roundLoading &&
            (roundType === 1 || roundType === 2) &&
            ((currentSeason && currentSeason.state === 0) || seasonFinished)
          "
          class="wrap-rounds empty"
        >
          {{ $t('s.rounds.message.allclosed') }}
        </div>
        <div v-else-if="!seasonLoading && !roundLoading && tabRounds.length === 0" class="wrap-rounds empty">
          <template v-if="roundType === 1">
            {{ $t('s.rounds.message.noopen') }}
          </template>
          <template v-else-if="roundType === 2">
            {{ $t('s.rounds.message.allopen') }}
          </template>
          <template v-else-if="roundType === 3">
            {{ $t('s.rounds.message.noclosed') }}
          </template>
          <template v-else>
            {{ $t('s.rounds.message.no-participating') }}
          </template>
        </div>
        <div class="dsp-round-stake-sum" v-if="(roundType === 1 || roundType === 4) && tabRounds.length > 0">
          <div class="define-balance">
            <span v-if="roundType === 1" class="label">Grand Total Stake</span>
            <span v-else-if="roundType === 4" class="label">My Total Stake</span>
            <span v-if="roundType === 1" class="ico-darco ico-sm add-inside">{{
              tabRounds.reduce((prev, next) => prev + next.totalStake, 0) | currency(0)
            }}</span>
            <span v-else-if="roundType === 4" class="ico-darco ico-sm add-inside">{{
              tabRounds.filter((item) => item.state === 1).reduce((prev, next) => prev + next.myinfo.currentStake, 0) | currency(0)
            }}</span>
          </div>
        </div>
        <DynamicScroller :items="tabRounds" :min-item-size="440" class="scroller" key-field="dspID" v-slot="{ item, index, active }">
          <DynamicScrollerItem :item="item" :active="active" :data-index="index">
            <div class="wrap-rounds">
              <dsp-round :source="item" :key="item.dspID" />
            </div>
          </DynamicScrollerItem>
        </DynamicScroller>
      </div>
    </section>

    <Footer />
    <modal-dsp-round />
    <modal-dsp-winner />
    <modal-dsp-reward />
  </main>
</template>

<script>
import { computed, defineComponent, onBeforeMount, reactive, ref, toRefs, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';

// eslint-disable-next-line import/extensions
import dayjs from 'dayjs';
import Footer from '@/partials/common/Footer';
import DspRound from '@/components/dsp/round/DspRound';
import BannerDsp from '@/partials/desktop/BannerDsp';
import DspRoundStateList from '@/components/dsp/round/DspRoundStateTabs';
import RoundEvent from '@/components/dsp/round/event/RoundEvent';
import SeasonSelector from '@/components/dsp/round/season/SeasonSelector';
import BannerDspRoundSeason1 from '@/components/dsp/round/banner/DspRoundSeason1';
import BannerDspRoundSeason2 from '@/components/dsp/round/banner/DspRoundSeason2';
import BannerDspRoundEndBanner from '@/components/dsp/round/banner/DspRoundEndBanner';
import { RoundState } from '@/components/dsp/round/round-utils';
import ModalDspRound from '@/components/dsp/round/ModalDspRound';
import ModalDspReward from '@/components/dsp/round/ModalDspReward';
import ModalDspWinner from '@/components/dsp/round/ModalDspWinner';
import CurrencyNotice from '@/components/common/CurrencyNotice';

const { useGetters: useDspGetters, useActions: useDspActions, useMutations: useDspMutations } = createNamespacedHelpers('dsp');

export default defineComponent({
  components: {
    ModalDspWinner,
    ModalDspReward,
    ModalDspRound,
    SeasonSelector,
    BannerDspRoundSeason1,
    BannerDspRoundSeason2,
    BannerDspRoundEndBanner,
    RoundEvent,
    DspRoundStateList,
    DspRound,
    Footer,
    BannerDsp,
    CurrencyNotice,
  },
  setup() {
    // eslint-disable-next-line no-unused-vars
    const now = dayjs().utc().unix();
    const state = reactive({
      openNoPresent: false,
    });
    const closeNoPresent = () => {
      state.openNoPresent.value = false;
    };

    const tabRounds = ref([]);

    const { locale, dracoAccessToken } = useState(['locale', 'dracoAccessToken']);
    const { seasons, seasonLoading, rounds, roundLoading, currentSeason, roundType, roundCount } = useDspGetters([
      'seasons',
      'seasonLoading',
      'rounds',
      'roundLoading',
      'currentSeason',
      'roundType',
      'roundCount',
    ]);
    const { setCurrentSeason, setRoundType } = useDspMutations(['setCurrentSeason', 'setRoundType']);
    const { fetchSeasons, fetchRounds } = useDspActions(['fetchSeasons', 'fetchRounds']);

    onBeforeMount(() => {
      setTimeout(() => {
        document.documentElement.classList.add('init-rounds');
      }, 1500);
    });

    const seasonFinished = computed(() => {
      return rounds.value.length === rounds.value.filter((round) => round.state === RoundState.CLOSED).length;
    });

    watch(
      () => locale.value,
      () => {
        // console.log(roundType.value);
        fetchRounds();
      },
    );

    watch(
      () => dracoAccessToken.value,
      (current) => {
        if (!current) {
          setRoundType(RoundState.ONGOING);
        }
      },
    );

    const setTabRounds = (currentRoundType) => {
      if (currentRoundType === 4) {
        tabRounds.value = [
          ...rounds.value
            .filter((round) => round.myinfo && round.myinfo.currentStake > 0)
            .sort((a, b) => {
              if (a.myinfo.reward.rewarded !== b.myinfo.reward.rewarded) {
                return a.myinfo.reward.rewarded - b.myinfo.reward.rewarded;
              }

              return a.dspID - b.dspID;
            }),
        ];
      } else {
        tabRounds.value = [...rounds.value.filter((round) => round.state === currentRoundType)];
      }
    };

    watch(
      () => rounds.value,
      () => {
        setTabRounds(roundType.value);
      },
    );

    watch(
      () => roundType.value,
      (currentRoundType) => {
        setTabRounds(currentRoundType);
      },
    );

    watch(
      () => currentSeason.value,
      () => {
        if (currentSeason.value && currentSeason.value.state === 0) {
          setRoundType(3);
        }

        if (currentSeason.value.state === 1) {
          setRoundType(1);
        }

        setTabRounds(roundType.value);
      },
    );

    return {
      ...toRefs(state),
      closeNoPresent,
      locale,
      seasons,
      seasonLoading,
      rounds,
      roundLoading,
      currentSeason,
      fetchSeasons,
      fetchRounds,
      roundType,
      roundCount,
      setCurrentSeason,
      setRoundType,
      tabRounds,
      DspRound,
      seasonFinished,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app.scss';

.dsp-round-stake-sum {
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .define-balance {
    .label {
      margin-right: 5px;
    }

    .add-inside {
      line-height: 1.1;
      font-weight: 700;
      font-size: 18px;
      color: #fff;
      letter-spacing: -0.4px;
    }
  }
}
</style>
