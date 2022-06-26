<template>
  <div class="mirage-battle-report">
    <div class="caution-update pa-10" v-if="mirageLock">
      <p class="caution-txt">{{ t('s.mirage.lock-up.log') }}</p>
    </div>
    <ul class="list-report" v-else>
      <mirage-boss-raid-battle-report-item v-for="(log, idx) in bossRaidLogs" :key="`mbri-${log.LogType}-${log.LogDT}-${idx}`" :log="log" />
    </ul>
    <div class="wrap-button" v-if="bossRaidLogPageID * 10 < bossRaidLogCount">
      <div class="btn-viewmore" @click="fetchBossRaidLogs(bossRaidLogPageID + 1)">Report More</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, watch } from '@vue/composition-api';

import MirageBossRaidBattleReportItem from '@/components/mirage/boss-raid/MirageBossRiadBattleReportItem';
import MirageBattleReportItem from '@/components/mirage/MirageBattleReportItem';
import { useMirageStore } from '@/composables/mirage';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'MirageBossRaidBattleReport',
  components: {
    MirageBossRaidBattleReportItem,
    MirageBattleReportItem,
    //
  },
  props: {
    //
  },
  data: () => ({
    //
  }),
  methods: {
    //
  },
  setup() {
    const { useMirageState, useMirageGetters, useMirageActions, useMirageMutations } = useMirageStore();
    const { bossRaid, bossRaidLogs, bossRaidLogCount, bossRaidLogPageID } = useMirageState([
      'bossRaid',
      'bossRaidLogs',
      'bossRaidLogCount',
      'bossRaidLogPageID',
    ]);
    const { mirageStatus, mirageLock } = useMirageGetters(['mirageStatus', 'mirageLock']);
    const { fetchBossRaidLogs } = useMirageActions(['fetchBossRaidLogs']);
    const { setBossRaidLogs, setBossRaidLogCount, setBossRaidLogPageId } = useMirageMutations([
      'setBossRaidLogs',
      'setBossRaidLogCount',
      'setBossRaidLogPageId',
    ]);

    onMounted(() => {
      if (bossRaid.value) {
        fetchBossRaidLogs();
      }
    });

    watch(
      () => bossRaid.value,
      () => {
        fetchBossRaidLogs();
      },
    );

    onUnmounted(() => {
      setBossRaidLogs([]);
      setBossRaidLogCount(0);
      setBossRaidLogPageId(1);
    });

    return {
      ...useI18n(),
      bossRaid,
      bossRaidLogs,
      mirageStatus,
      mirageLock,
      bossRaidLogPageID,
      fetchBossRaidLogs,
      bossRaidLogCount,
    };
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-battle-report';
</style>
