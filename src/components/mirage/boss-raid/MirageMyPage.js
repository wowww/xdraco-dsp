import { computed, defineComponent, onMounted, reactive, toRefs, watch } from '@vue/composition-api';
import { useNow } from '@vueuse/core';
import dayjs from 'dayjs';
import { createNamespacedHelpers, useMutations, useState } from 'vuex-composition-helpers/dist';

import MirageInventory from '@/components/mirage/common/MirageInventory';
import MirageCharacterItem from '@/components/mirage/MirageCharacterItem';
import MirageRosterCharacterItem from '@/components/mirage/MirageRosterCharacterItem';
import ModalImportCharacter from '@/components/mirage/ModalImportCharacter';
import ModalMirageCharacterInfo from '@/components/mirage/ModalMirageCharacterInfo';
import ModalSealCharacter from '@/components/mirage/ModalSealCharacter';
import NftCard from '@/components/nft/common/NftCard';
import NftItem from '@/components/nft/common/NftItem';
import NftListSectionTitle from '@/components/nft/common/NftListSectionTitle';
import NftListOrder from '@/components/nft/desktop/NftListOrder';
import { useMirageStore } from '@/composables/mirage';
import useI18n from '@/utils/useI18n';

const { useState: useNftState, useMutations: useNftMutations, useActions: useNftActions } = createNamespacedHelpers('nft');

export default defineComponent({
  name: 'MirageMyPage',
  components: {
    MirageInventory,
    ModalMirageCharacterInfo,
    ModalSealCharacter,
    ModalImportCharacter,
    MirageRosterCharacterItem,
    MirageCharacterItem,
    NftItem,
    NftListSectionTitle,
    NftCard,
    NftListOrder,
  },
  setup(_, { root }) {
    const now = useNow({ interval: 1000 });
    const state = reactive({
      currentTab: 0,
      list: [],
      selectedNft: null,
      selectedCharacter: null,
      openImport: false,
      openSeal: false,
    });

    const { t } = useI18n();
    const { setCommonModal } = useMutations(['setCommonModal']);

    const { accessToken } = useState(['accessToken']);
    const { recommendedItems } = useNftState(['recommendedItems']);
    const { fetchNftRecommendedItems } = useNftActions(['fetchNftRecommendedItems']);

    const { useMirageState, useMirageMutations, useMirageActions, useMirageGetters } = useMirageStore();
    const { valleyCapture, rosters, sealList } = useMirageState(['valleyCapture', 'rosters', 'sealList']);
    const { mirageStatus, mirageLock } = useMirageGetters(['mirageStatus', 'mirageLock']);
    const { fetchMyCharacters, fetchSealList } = useMirageActions(['fetchMyCharacters', 'fetchSealList']);

    const closedDuration = Number(process.env.VUE_APP_MIRAGE_CLOSED_DURATION);

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

    const selectImportNft = (idx) => {
      if (closed.value) {
        setCommonModal({
          open: true,
          title: t('t.mirage.harvest.lockout'),
          desc: t('s.mirage.message.lockout.import'),
          primary: 'OK',
          onPrimary() {},
          onClose() {},
        });
        return;
      }

      state.selectedNft = sealList.value[idx];
      state.openImport = true;
    };

    const closeImportNft = () => {
      state.openImport = false;
      state.selectedNft = null;

      fetchMyCharacters();
      fetchSealList();
    };

    const selectSealCharacter = (tokenID) => {
      console.log('selectSealCharacter', tokenID);
      state.selectedCharacter = rosters.value.find((item) => item.tokenID === tokenID);
      state.openSeal = true;
    };

    const closeSealCharacter = () => {
      state.openSeal = false;
      state.selectedCharacter = null;

      fetchMyCharacters();
      fetchSealList();
    };

    watch(
      () => accessToken.value,
      () => {
        if (accessToken.value) {
          fetchMyCharacters();
          fetchSealList();
        } else {
          root.$router.replace('/mirage/dashboard');
        }
      },
    );

    watch(
      () => state.currentTab,
      () => {
        if (state.currentTab === 0) {
          fetchMyCharacters();
        }

        if (state.currentTab === 1) {
          fetchSealList();
        }
      },
    );

    onMounted(() => {
      if (!accessToken.value) {
        root.$router.replace('/mirage/dashboard');
      }

      fetchMyCharacters();
      fetchSealList();
      fetchNftRecommendedItems();
    });

    return {
      ...toRefs(state),
      ...useI18n(),
      accessToken,
      recommendedItems,
      rosters,
      sealList,
      selectImportNft,
      closeImportNft,
      selectSealCharacter,
      closeSealCharacter,
      closed,
      now,
      mirageLock,
    };
  },
});
