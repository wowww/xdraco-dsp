<template>
  <div class="mirage-hidden-valley-capture" :class="{ 'is-locked': mirageLock }" v-if="valleyCapture && valleyCapture.schedule">
    <div class="valley-header">
      <h2 class="valley-title">{{ t('t.mirage.valley-capture') }}</h2>
      <div
        class="valley-notice"
        v-if="valleyCapture.schedule && valleyCapture.schedule.Daily === '1' && valleyCapture.schedule.Battle === '1' && isMobile"
      >
        <img src="@/assets/img/common/mirage/ico-40-newseason.webp" class="valley-notice__icon" width="40" alt="" />
        <p class="valley-notice__desc" v-html="t('t.mirage-notice.season.start')" />
        <span class="valley-notice__date">{{ valleyCapture.schedule.StartDT | dateFormat }}</span>
      </div>
      <dl class="count-down">
        <div>
          <dt>Day</dt>
          <dd>
            <div class="wrap-flip">
              <span class="item-flip">{{ valleyCapture.schedule.Daily.padStart(2, '0').slice(0, 1) }}</span>
              <span class="item-flip">{{ valleyCapture.schedule.Daily.padStart(2, '0').slice(1) }}</span>
            </div>
          </dd>
        </div>
        <div class="half">
          <dt>
            <span class="icon-battle">{{ t(`w.mirage.${valleyCapture.schedule.Battle}.half`) }}</span>
          </dt>
          <dd>
            <MirageCountdown
              v-if="currentBattleEndDate"
              :targetDate="currentBattleEndDate.toString()"
              class="hidden-day hidden-second"
              :smaller="!isMobile"
              :dark="mirageLock"
            />
            <span class="icon-locked" v-if="mirageLock">locked</span>
          </dd>
        </div>
      </dl>
    </div>
    <div
      class="valley-notice"
      v-if="valleyCapture.schedule && valleyCapture.schedule.Daily === '1' && valleyCapture.schedule.Battle === '1' && !isMobile"
    >
      <img src="@/assets/img/common/mirage/ico-40-newseason.webp" class="valley-notice__icon" width="40" alt="" />
      <p class="valley-notice__desc" v-html="t('t.mirage-notice.season.start')" />
      <span class="valley-notice__date">{{ valleyCapture.schedule.StartDT | dateFormat }}</span>
    </div>
    <div class="valley-content" v-if="valleyCapture && valleyCapture.serverInfo">
      <template v-for="serverIdx in serverList">
        <mirage-valley-server-item
          v-if="valleyCapture.serverInfo[serverIdx]"
          :server-item="valleyCapture.serverInfo[serverIdx]"
          :key="`valley-server-${valleyCapture.serverInfo[serverIdx].ServerID}-${serverIdx}`"
        />
        <div :key="`valley-server-empty-${serverIdx}`" class="server-item empty" v-else></div>
      </template>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, watch } from '@vue/composition-api';
import { useNow } from '@vueuse/core';
import dayjs from 'dayjs';
import { range } from 'lodash';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';

import MirageCountdown from '@/components-ui/desktop/MirageCountdown';
import MirageValleyServerItem from '@/components/mirage/MirageValleyServerItem';
import { useMobile } from '@/composables/common';
import { useMirageStore } from '@/composables/mirage';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'MirageHiddenValleyCapture',
  components: {
    MirageValleyServerItem,
    MirageCountdown,
  },
  props: {
    isLocked: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  setup() {
    const { isMobile } = useMobile();
    const now = useNow({ interval: 1000 });
    const { locale, accessToken } = useState(['locale', 'accessToken']);
    const { useMirageState, useMirageGetters, useMirageActions } = useMirageStore();
    const { valleyCapture } = useMirageState(['valleyCapture']);
    const { mirageStatus, mirageLock } = useMirageGetters(['mirageStatus', 'mirageLock']);
    const { fetchServerInfo, fetchAccountServerInfo } = useMirageActions(['fetchServerInfo', 'fetchAccountServerInfo']);

    const serverList = computed(() => {
      const columnLength = isMobile ? 2 : 4;
      const rest = valleyCapture.value.serverInfo.length % columnLength;
      const total = valleyCapture.value.serverInfo.length + rest;

      if (isMobile) {
        return range(total);
      }

      let cnt = Math.floor(total / 2);
      const remainder = total % 2;

      if (remainder !== 0) {
        cnt += 1;
      }

      return range((cnt === 0 ? 1 : cnt) * 2);
    });

    const currentBattleEndDate = computed(() => {
      if (valleyCapture.value) {
        return dayjs.unix(valleyCapture.value.schedule.EndDT).toDate();
      }

      return null;
    });

    const endDateFormatted = computed(() => {
      if (valleyCapture.value) {
        const now = dayjs();
        const startDay = dayjs.unix(valleyCapture.value.schedule.StartDT);
        const endDay = dayjs.unix(valleyCapture.value.schedule.EndDT);

        if (endDay.diff(now, 'm') < 60) {
          return endDay
            .add(1, 'hour')
            .locale(locale.value.startsWith('zh') ? 'zh' : locale.value)
            .format('lll');
        }

        if (now.diff(startDay, 'm') < 60) {
          return startDay
            .add(1, 'hour')
            .locale(locale.value.startsWith('zh') ? 'zh' : locale.value)
            .format('lll');
        }
      }
      return '';
    });

    onMounted(() => {
      fetchServerInfo();
    });

    watch(
      () => accessToken.value,
      () => {
        fetchServerInfo();

        if (accessToken.value) {
          fetchAccountServerInfo();
        }
      },
    );

    return {
      isMobile,
      ...useI18n(),
      valleyCapture,
      currentBattleEndDate,
      endDateFormatted,
      serverList,
      mirageStatus,
      mirageLock,
    };
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-hidden-valley-capture';
</style>
