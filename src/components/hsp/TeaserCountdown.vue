<template>
  <div ref="tickHspTeaser" class="tick-hsp" :class="{ 'tick--smaller': smaller }">
    <div aria-hidden="true" data-repeat="true" data-layout="horizontal left fit">
      <div class="tick-group">
        <div data-key="value" data-repeat="true" data-transform="pad(00) -> split -> delay">
          <span data-view="flip"></span>
        </div>

        <span data-key="label" data-view="text" class="tick-label" data-transform="value(t)"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Tick from '@pqina/flip';
import dayjs from 'dayjs';

export default defineComponent({
  name: 'Countdown',
  props: {
    targetDate: {
      type: String,
      required: true,
    },
    smaller: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    timerValue: [],
  }),
  methods: {
    createDomFlip() {
      const didInit = (tick) => {
        this.tickFlip = tick;
        // console.log(this.tickFlip.root.querySelectorAll('.tick-group .tick-label'));
      };

      Tick.DOM.create(this.$refs.tickHspTeaser, {
        // 시간 단위 갯수가 d-h-m-s 4개라면 0000
        value: '0000',
        didInit,
      });
    },
    initCountdown() {
      const { targetDate } = this;
      const date = dayjs(targetDate).utc().local().toDate(); // 클라이언트의 시간 기준

      this.tickCounter = Tick.count.down(date, {
        format: ['d', 'h', 'm', 's'],
        // format: ['h', 'm', 's'],
      });

      this.tickCounter.onupdate = (value) => {
        this.timerValue = value;

        if (this.tickFlip) {
          this.tickFlip.value = this.timerValue;
        }
      };
    },
  },
  mounted() {
    this.createDomFlip();
    this.initCountdown();
  },
  destroyed() {
    Tick.DOM.destroy(this.$refs.tickHspTeaser);
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/components/hsp-countdown';
</style>
