import { computed, defineComponent, onMounted, onUnmounted, reactive, toRefs, watch } from '@vue/composition-api';
import { useState } from 'vuex-composition-helpers/dist';

import BackButton from '@/components/common/BackButton';
import MirageBossRaidBattleReport from '@/components/mirage/boss-raid/MirageBossRaidBattleReport';
import MirageBossRaidInfo from '@/components/mirage/boss-raid/MirageBossRaidInfo';
import MirageBossRaidLatestResult from '@/components/mirage/boss-raid/MirageBossRaidLatestResult';
import MirageBossRaidResult from '@/components/mirage/boss-raid/MirageBossRaidResult';
import MirageBossRaidSquadron from '@/components/mirage/boss-raid/MirageBossRaidSquadron';
import MirageInventory from '@/components/mirage/common/MirageInventory';
import { useMirageStore } from '@/composables/mirage';

export default defineComponent({
  name: 'MirageBossRaidPage',
  components: {
    MirageBossRaidLatestResult,
    MirageInventory,
    MirageBossRaidBattleReport,
    MirageBossRaidSquadron,
    MirageBossRaidResult,
    MirageBossRaidInfo,
    BackButton,
  },
  setup(props, { root }) {
    const state = reactive({
      visibleItemDialog: false,
    });
    const { accessToken } = useState(['accessToken']);
    const { useMirageState, useMirageGetters, useMirageMutations, useMirageActions } = useMirageStore();
    const { bossRaid, bossRaids } = useMirageState(['bossRaid', 'bossRaids']);
    const { bossRaidStatus } = useMirageGetters(['bossRaidStatus']);
    const { setBossRaid } = useMirageMutations(['setBossRaid']);
    const { fetchBossRaid } = useMirageActions(['fetchBossRaid']);

    const schedule = computed(() => {
      if (!bossRaid.value) {
        return null;
      }

      return bossRaid.value.schedule[0];
    });

    onMounted(() => {
      if (!accessToken.value) {
        root.$router.replace('/mirage');
      }
      console.log(root.$route.params);
      if (root.$route.params.serverId) {
        fetchBossRaid(root.$route.params.serverId);
      }
    });

    watch(
      () => accessToken.value,
      () => {
        if (!accessToken.value) {
          root.$router.replace('/mirage');
        }
      },
    );

    watch(
      () => root.$route.params.serverId,
      () => {
        fetchBossRaid(root.$route.params.serverId);
      },
    );

    onUnmounted(() => {
      setBossRaid(null);
    });

    return {
      bossRaid,
      ...toRefs(state),
      bossRaidStatus,
    };
  },
});
