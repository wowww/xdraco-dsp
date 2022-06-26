<template>
  <div class="mirage-battle-report">
    <ul class="list-report">
      <mirage-battle-report-item v-for="(log, idx) in viewLogList" :key="`mbri-${log.LogType}-${log.LogDT}-${idx}`" :log="log" />
    </ul>
    <div class="wrap-button" v-if="hasMoreLog">
      <div class="btn-viewmore" style="cursor: pointer" @click="logViewLimit += pageSize">View More</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import { computed } from '@vue/composition-api/dist/vue-composition-api';
import useI18n from '@/utils/useI18n';
import MirageBattleReportItem from '@/components/mirage/MirageBattleReportItem';
import { useMobile } from '@/composables/common';

const { useState: useMirageState } = createNamespacedHelpers('mirage');

export default defineComponent({
  name: 'MirageBattleReport',
  components: { MirageBattleReportItem },
  setup() {
    const { isMobile } = useMobile();
    const pageSize = isMobile ? 10 : 20;
    const state = reactive({
      logViewLimit: isMobile ? 10 : 20,
    });

    const { t } = useI18n();
    const { logList } = useMirageState(['logList']);

    const viewLogList = computed(() => {
      return logList.value.filter((item, idx) => idx < state.logViewLimit);
    });

    const hasMoreLog = computed(() => {
      return state.logViewLimit < logList.value.length;
    });

    return {
      t,
      logList,
      viewLogList,
      ...toRefs(state),
      hasMoreLog,
      pageSize,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/components/mirage-battle-report';
</style>
