<template>
  <div ref="tick" class="tick-dsp" :class="{ 'tick--smaller': smaller }" data-did-init="handleInit">
    <div aria-hidden="true" data-repeat="true" data-layout="horizontal left fit">
      <div class="tick-group">
        <div data-key="value" data-repeat="true" data-transform="pad(00) -> split -> delay">
          <span data-view="flip"></span>
        </div>

        <span data-key="label" data-view="text" class="tick-label" data-transform="value(t)"></span>
      </div>
    </div>
    <span class="tick-empty" v-if="showTickEmpty"></span>
    <span class="tick-empty" v-if="showTickEmpty"></span>
    <span class="tick-empty" v-if="showTickEmpty"></span>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref, watch } from '@vue/composition-api';
import Tick from '@pqina/flip';
// eslint-disable-next-line no-unused-vars
import dayjs from 'dayjs';
import { useIntersectionObserver } from '@vueuse/core';

export default defineComponent({
  name: 'RoundBodyFlipCountDown',
  props: {
    dspId: Number,
    targetDate: {
      type: Number,
      required: true,
    },
    smaller: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  // eslint-disable-next-line no-unused-vars
  setup({ dspId, targetDate, roundVisible }) {
    const tick = ref(null);
    const targetIsVisible = ref(false);
    const tickFlip = ref(null);
    const tickCounter = ref(null);
    const timerValue = ref([]);
    const showTickEmpty = ref(false);

    const { stop } = useIntersectionObserver(tick, ([{ isIntersecting }], observerElement) => {
      targetIsVisible.value = isIntersecting;
    });

    const didInit = (t) => {
      tickFlip.value = t;
      showTickEmpty.value = true;
    };

    const initCounter = () => {
      Tick.DOM.create(tick.value, {
        // value: '0000',
        value: '000',
        didInit,
      });

      const date = dayjs.unix(targetDate).utcOffset(8).toDate();

      tickCounter.value = Tick.count.down(date, {
        // format: ['d', 'h', 'm', 's'],
        format: ['d', 'h', 'm'],

        // the interval between updates(기본값 1초에서 20초로 변경)
        interval: 20000,
      });

      tickCounter.value.onupdate = (value) => {
        timerValue.value = value;

        if (tickFlip.value) {
          tickFlip.value.value = value;
        }
      };
      // tickCounter.value.onended = (value) => {
      //   // reached zero!
      // };
    };

    onMounted(() => {});

    watch(
      () => targetIsVisible.value,
      (visible) => {
        if (visible) {
          initCounter();
        } else if (tickCounter.value.timer) {
          tickCounter.value.timer.stop();
        }
      },
    );

    onUnmounted(() => {
      if (tickCounter.value && tickCounter.value.timer) {
        tickCounter.value.timer.stop();
      }

      tickCounter.value = null;
      tickFlip.value = null;

      Tick.DOM.destroy(tick.value);
    });

    return {
      didInit,
      tick,
      tickFlip,
      tickCounter,
      timerValue,
      showTickEmpty,
    };
  },
});
</script>

<style lang="scss"></style>
