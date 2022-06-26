<template>
  <div class="mirage-valley-dashboard" :class="{ 'is-locked': isLocked }">
    <h2 class="dashboard-title">Valley01</h2>
    <div class="dashboard-header">
      <dl class="dashboard-count-down">
        <div>
          <dt>Day</dt>
          <dd>
            <div class="wrap-flip">
              <span class="item-flip">0</span>
              <span class="item-flip">1</span>
            </div>
          </dd>
        </div>
        <div class="half">
          <dt><span class="icon-battle">2nd Half</span></dt>
          <dd>
            <mirage-countdown targetDate="2022-02-28T00:00:00" :dark="isLocked" class="hidden-day" />
          </dd>
        </div>
      </dl>
      <div class="dashboard-info">
        <p class="desc ico-locked" v-if="isLocked">Locked until Mar. 5th 2022 13:00 UTC+8</p>
        <p class="desc" v-else>Mar. 5th, 2022 23:00 UTC+8 정산 시작</p>
        <v-tooltip content-class="mirage-tooltip" attach=".dashboard-info" top max-width="240">
          <template v-slot:activator="{ on, attrs }">
            <v-icon v-bind="attrs" v-on="on">icon</v-icon>
          </template>
          <div class="tooltip-wrap">
            <p>정확한 리워드 정산과 신규 라운드 셋팅을 위해 리워드 정산 시간 전 후 각 1시간 동안 Enlist와 Retreat를 금지합니다.</p>
          </div>
        </v-tooltip>
      </div>
    </div>
    <div class="dashboard-content">
      <dl class="dashboard-data">
        <div>
          <dt>Total Mining Rate (E)</dt>
          <dd>
            <em class="value">37<span class="decimal">.53%</span></em>
          </dd>
        </div>
        <div>
          <dt>Total Darksteel Mined (E)</dt>
          <dd>
            <em class="value"><img src="@/assets/img/common/mirage/ico-24-darksteel.webp" width="24" />156,120,112</em>
          </dd>
        </div>
        <div>
          <dt>Today’s Septaria (E)</dt>
          <dd>
            <em class="value"><img src="@/assets/img/common/mirage/ico-24-septaria.webp" width="24" />40</em>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';
import MirageCountdown from '@/components-ui/desktop/MirageCountdown';

export default defineComponent({
  name: 'MirageValleyDashboard',
  components: {
    MirageCountdown,
  },
  props: {
    isLocked: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
  }),
  methods: {
    //
  },
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-valley-dashboard';
</style>
