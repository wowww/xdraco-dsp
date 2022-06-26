import { computed, defineComponent, onMounted, reactive, toRefs, watch } from '@vue/composition-api';
import { useNow } from '@vueuse/core';
import dayjs from 'dayjs';
import { createNamespacedHelpers, useMutations, useState } from 'vuex-composition-helpers/dist';

import BackButton from '@/components/common/BackButton';
import MirageInventory from '@/components/mirage/common/MirageInventory';
import MirageBattleReport from '@/components/mirage/MirageBattleReport';
import MirageValleyInfo from '@/components/mirage/MirageValleyInfo';
import MirageValleyItem from '@/components/mirage/MirageValleyItem';
import MirageValleyResult from '@/components/mirage/MirageValleyResult';
import ModalEnlistCharacter from '@/components/mirage/ModalEnlistCharacter';
import ModalEnlistResult from '@/components/mirage/ModalEnlistResult';
import ModalRetreatCharacter from '@/components/mirage/ModalRetreatCharacter';
import { useMirageStore } from '@/composables/mirage';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'MirageValleyPage',
  components: {
    MirageInventory,
    ModalEnlistResult,
    BackButton,
    MirageBattleReport,
    ModalRetreatCharacter,
    MirageValleyResult,
    ModalEnlistCharacter,
    MirageValleyItem,
    MirageValleyInfo,
  },
  setup(_, { root }) {
    const now = useNow({ interval: 1000 });
    const { t } = useI18n();
    const { $route, $router, $dracoWebApi } = root;
    const { useMirageState, useMirageMutations, useMirageActions, useMirageGetters } = useMirageStore();
    const { accessToken } = useState(['accessToken']);
    const { setCommonModal } = useMutations(['setCommonModal']);
    const { valleyResult } = useMirageState(['valleyResult']);
    const { mirageStatus, mirageLock } = useMirageGetters(['mirageStatus', 'mirageLock']);

    const { accountInfo, stakeInfo, valleyList, valleyCapture, logList } = useMirageState([
      'accountInfo',
      'stakeInfo',
      'valleyList',
      'valleyCapture',
      'logList',
    ]);
    const { setVisibleChargeVigor } = useMirageMutations(['setVisibleChargeVigor']);
    const { fetchAccountInfo, fetchStakeInfo, fetchLastResult, fetchRank, fetchLog } = useMirageActions([
      'fetchAccountInfo',
      'fetchStakeInfo',
      'fetchLastResult',
      'fetchRank',
      'fetchLog',
    ]);

    const state = reactive({
      loading: false,
      valleyMeta: null,
      valleyList: [],
      panel: [0, 1, 2],
    });

    const closedDuration = Number(process.env.VUE_APP_MIRAGE_CLOSED_DURATION);

    const serverInfo = computed(() => {
      if (valleyCapture.value && valleyCapture.value.serverInfo) {
        return valleyCapture.value.serverInfo.find((item) => item.ServerID === $route.params.serverId);
      }

      return null;
    });

    onMounted(() => {
      if (!accessToken.value) {
        root.$router.replace('/mirage/dashboard');
        return;
      }

      console.log($route.params);
      fetchAccountInfo();
      fetchStakeInfo($route.params.serverId);
      fetchLastResult($route.params.serverId);
      fetchRank($route.params.serverId);
      fetchLog($route.params.serverId);
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
      const diff = nowDay.value.diff(endDay.value, 'minute');

      if (diff === 0) {
        // fetchStakeInfo($route.params.serverId);
      }

      return diff;
    });

    const closed = computed(() => {
      return Math.abs(closedDiff.value) < closedDuration || Math.abs(startDiff.value) < closedDuration;
    });

    const openChargeVigor = () => {
      if (closed.value) {
        setCommonModal({
          open: true,
          title: t('t.mirage.harvest.lockout'),
          desc: t('s.mirage.message.lockout.vigor'),
          primary: 'OK',
          onPrimary() {},
          onClose() {},
        });
        return;
      }

      setVisibleChargeVigor(true);
    };

    watch(
      () => accessToken.value,
      () => {
        if (!accessToken.value) {
          $router.replace('/mirage');
        }
      },
    );

    return {
      t,
      serverInfo,
      ...toRefs(state),
      valleyResult,
      accountInfo,
      stakeInfo,
      logList,
      valleyList,
      startDay,
      endDay,
      nowDay,
      startDiff,
      closedDiff,
      closed,
      setVisibleChargeVigor,
      openChargeVigor,
      mirageStatus,
      mirageLock,
    };
  },
});
