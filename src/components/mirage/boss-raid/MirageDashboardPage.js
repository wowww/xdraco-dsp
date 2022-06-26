import { defineComponent, onMounted, reactive, toRefs, computed, watch } from '@vue/composition-api';
import { useNow } from '@vueuse/core';
import dayjs from 'dayjs';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';

import MirageNotice from '@/components-ui/common/MirageNotice';
import MirageBossRaid from '@/components/mirage/boss-raid/MirageBossRaid';
import MirageBattleReportItem from '@/components/mirage/MirageBattleReportItem';
import MirageHiddenValleyCapture from '@/components/mirage/MirageHiddenValleyCapture';
import MirageLogItem from '@/components/mirage/MirageLogItem';
import MirageSummary from '@/components/mirage/MirageSummary';
import NftItem from '@/components/nft/common/NftItem';
import { useMirageStore } from '@/composables/mirage';
import useI18n from '@/utils/useI18n';

const { useState: useNftState, useMutations: useNftMutations, useActions: useNftActions } = createNamespacedHelpers('nft');

export default defineComponent({
  name: 'MirageDashboardPage',
  components: { MirageLogItem, MirageBattleReportItem, MirageNotice, NftItem, MirageBossRaid, MirageSummary, MirageHiddenValleyCapture },
  setup() {
    const now = useNow({ interval: 1000 });
    const state = reactive({
      test: '',
      logViewLimit: 20,
    });

    const { accessToken } = useState(['accessToken']);
    const { useMirageState, useMirageGetters, useMirageActions } = useMirageStore();
    const { mirageStatus, mirageLock } = useMirageGetters(['mirageStatus', 'mirageLock']);
    const { accountInfo, stakeInfo, valleyList, valleyCapture, allLogList, bossRaids, rosters } = useMirageState([
      'accountInfo',
      'stakeInfo',
      'valleyList',
      'valleyCapture',
      'allLogList',
      'bossRaids',
      'rosters',
    ]);
    const { fetchAccountInfo, fetchStakeInfo, fetchLastResult, fetchRank, fetchLog, fetchAllLog, fetchBossRaidList, fetchMyCharacters } =
      useMirageActions([
        'fetchAccountInfo',
        'fetchStakeInfo',
        'fetchLastResult',
        'fetchRank',
        'fetchLog',
        'fetchAllLog',
        'fetchBossRaidList',
        'fetchMyCharacters',
      ]);
    const { recommendedItems } = useNftState(['recommendedItems']);
    const { fetchNftRecommendedItems } = useNftActions(['fetchNftRecommendedItems']);

    const closedDuration = Number(process.env.VUE_APP_MIRAGE_CLOSED_DURATION);

    onMounted(() => {
      fetchNftRecommendedItems();
      fetchAllLog();
      fetchBossRaidList();
      fetchMyCharacters();
    });

    const startDay = computed(() => {
      if (valleyCapture.value && valleyCapture.value.schedule) {
        return dayjs.unix(valleyCapture.value.schedule.StartDT).utcOffset(8, false);
      }

      return dayjs();
    });

    const endDay = computed(() => {
      if (valleyCapture.value && valleyCapture.value.schedule) {
        return dayjs.unix(valleyCapture.value.schedule.EndDT).utcOffset(8, false);
      }

      return dayjs();
    });

    const nowDay = computed(() => {
      return dayjs(now.value).utcOffset(8, false);
    });

    const startDiff = computed(() => {
      return nowDay.value.diff(startDay.value, 'minute');
    });

    const closedDiff = computed(() => {
      return nowDay.value.diff(endDay.value, 'minute');
    });

    const closed = computed(() => {
      return Math.abs(closedDiff.value) < closedDuration || Math.abs(startDiff.value) < closedDuration;
    });

    watch(
      () => accessToken.value,
      () => {
        if (accessToken.value) {
          fetchAccountInfo();
        }
      },
    );

    const logList = computed(() => {
      return allLogList.value.filter((item, idx) => idx < state.logViewLimit);
    });

    const hasMoreLog = computed(() => {
      return state.logViewLimit < allLogList.value.length;
    });

    const futureEunSilRaids = computed(() => {
      if (bossRaids.value) {
        const timestamp = dayjs().unix();
        return bossRaids.value.filter((raid) => timestamp < raid.StartDT && raid.RaidType === 11);
      }

      return [];
    });

    const futureHorangRaids = computed(() => {
      if (bossRaids.value) {
        const timestamp = dayjs().unix();
        return bossRaids.value.filter((raid) => timestamp < raid.StartDT && raid.RaidType === 12);
      }

      return [];
    });

    const enlisted = computed(() => {
      if (rosters.value) {
        return rosters.value.filter((roster) => roster.DetailType !== '0').length;
      }

      return 0;
    });

    const wounded = computed(() => {
      if (rosters.value) {
        return rosters.value.filter((roster) => Number(roster.State) > 1).length;
      }

      return 0;
    });

    return {
      ...useI18n(),
      ...toRefs(state),
      recommendedItems,
      closed,
      accessToken,
      allLogList,
      logList,
      hasMoreLog,
      bossRaids,
      futureEunSilRaids,
      futureHorangRaids,
      rosters,
      enlisted,
      wounded,
      mirageStatus,
      mirageLock,
    };
  },
});
