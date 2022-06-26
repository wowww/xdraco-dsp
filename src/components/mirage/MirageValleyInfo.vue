<template>
  <div class="mirage-valley-dashboard" :class="{ 'is-locked': closed }">
    <h2 class="dashboard-title">{{ serverInfo.ServerName }}</h2>
    <div class="dashboard-header">
      <dl class="dashboard-count-down">
        <div v-if="valleyCapture">
          <dt>Day</dt>
          <dd>
            <div class="wrap-flip">
              <span class="item-flip">{{ valleyCapture.schedule.Daily.padStart(2, '0').slice(0, 1) }}</span>
              <span class="item-flip">{{ valleyCapture.schedule.Daily.padStart(2, '0').slice(1) }}</span>
            </div>
          </dd>
        </div>
        <div class="half" v-if="valleyCapture">
          <dt>
            <span class="icon-battle">
              {{ t(`w.mirage.${valleyCapture.schedule.Battle}.half`) }}
            </span>
          </dt>
          <dd>
            <mirage-countdown v-if="endDate" :targetDate="endDate.toString()" :dark="closed" class="hidden-day" />
          </dd>
        </div>
      </dl>
      <div class="dashboard-info" v-if="valleyCapture">
        <p class="desc ico-locked" v-if="closed">
          {{ t('s.mirage.date.locked', [lockEndDateFormatted]) }}
        </p>
        <p class="desc" v-else>{{ t('s.mirage.date.in-calc', [endDateFormatted]) }}</p>
        <v-tooltip content-class="mirage-tooltip" attach=".dashboard-info" top max-width="240">
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on">icon</v-icon>
          </template>
          <div class="tooltip-wrap">
            <p>{{ t('s.mirage.message.lock') }}</p>
          </div>
        </v-tooltip>
      </div>
    </div>
    <div class="dashboard-content" v-if="stakeInfo">
      <dl class="dashboard-data" v-if="stakeInfo.Valley && stakeInfo.Valley.Sum">
        <div>
          <dt>{{ t('w.mirage.total.minting.rate') }}</dt>
          <dd>
            <em class="value">{{ miningRate | currency(2) }}<span class="decimal">%</span></em>
          </dd>
        </div>
        <div>
          <dt>{{ t('w.mirage.total.ds.mined') }}</dt>
          <dd>
            <em class="value darksteel"
              ><img src="@/assets/img/common/mirage/ico-24-darksteel.webp" width="24" />{{ stakeInfo.Valley.Sum.Info.BlackIron | currency(0) }}</em
            >
          </dd>
        </div>
        <div>
          <dt>{{ t('w.mirage.total.septaria') }}</dt>
          <dd>
            <em class="value septaria"
              ><img src="@/assets/img/common/mirage/ico-24-septaria.webp" width="24" />{{ stakeInfo.Valley.Sum.Info.Septaria }}</em
            >
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import dayjs from 'dayjs';
import BigNumber from 'bignumber.js';
import { useMobile } from '@/composables/common';
import MirageCountdown from '@/components-ui/desktop/MirageCountdown';
import useI18n from '@/utils/useI18n';

const { useState: useMirageState } = createNamespacedHelpers('mirage');

export default defineComponent({
  name: 'MirageValleyInfo',
  components: { MirageCountdown },
  props: {
    closed: {
      type: Boolean,
      default: false,
    },
    serverInfo: {
      type: Object,
      default: () => ({
        ServerName: '',
      }),
    },
  },
  setup() {
    const { t } = useI18n();
    const { locale } = useState(['locale']);
    const { valleyCapture, valleyList, stakeInfo } = useMirageState(['valleyCapture', 'valleyList', 'stakeInfo']);

    const endDate = computed(() => {
      if (valleyCapture.value) {
        return dayjs.unix(valleyCapture.value.schedule.EndDT).toDate();
      }

      return null;
    });

    const endDateFormatted = computed(() => {
      if (valleyCapture.value) {
        const endDay = dayjs.unix(valleyCapture.value.schedule.EndDT);

        return endDay.locale(locale.value.startsWith('zh') ? 'zh' : locale.value).format('lll');
      }
      return '';
    });

    const lockEndDateFormatted = computed(() => {
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

    const miningRate = computed(() => {
      if (stakeInfo.value) {
        return new BigNumber(stakeInfo.value.Valley.Sum.Info.BlackIron).div(new BigNumber(75000000).times(3)).toNumber() * 100;
      }
      return 0;
    });

    return {
      t,
      ...useMobile(),
      valleyCapture,
      valleyList,
      stakeInfo,
      endDate,
      endDateFormatted,
      lockEndDateFormatted,
      miningRate,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/components/mirage-valley-dashboard';
</style>
