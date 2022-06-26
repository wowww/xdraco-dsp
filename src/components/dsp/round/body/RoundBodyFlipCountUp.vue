<template>
  <div ref="tick" class="tick-dsp" :class="{ 'tick--smaller': smaller }">
    <div data-repeat="true" data-layout="horizontal fit" :data-transform="setDataTransform()">
      <span data-view="flip" data-transform="arrive(1, 0.01) -> round -> replace(NaN, ',')"></span>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref, watch } from '@vue/composition-api';
import { useIntersectionObserver } from '@vueuse/core';
import Tick from '@pqina/flip';

export default defineComponent({
  name: 'RoundBodyFlipCountUp',
  props: {
    targetValue: {
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
  setup({ targetValue }) {
    const tick = ref(null);
    const targetIsVisible = ref(false);
    const tickFlip = ref(null);
    const tickCounter = ref(null);
    const timerValue = ref([]);

    const { stop } = useIntersectionObserver(tick, ([{ isIntersecting }], observerElement) => {
      targetIsVisible.value = isIntersecting;
    });

    const didInit = (t) => {
      tickFlip.value = t;
    };

    const setDataTransform = () => {
      let pad = '00';

      if (targetValue >= 100 && targetValue < 1000) {
        pad = '000';
      } else if (targetValue < 10000) {
        pad = '00000';
      } else if (targetValue < 100000) {
        pad = '000000';
      } else if (targetValue < 1000000) {
        pad = '0000000';
      }

      return `number('.', ',', 0) -> pad(${pad}) -> split`;
    };

    const init = () => {
      Tick.DOM.create(tick.value, {
        value: 0,
        didInit,
      });

      if (tickFlip.value) {
        tickFlip.value.value = targetValue;
      }
    };

    onMounted(() => {});

    watch(
      () => targetIsVisible.value,
      (visible) => {
        if (visible) {
          init();
        } else if (tick.value.timer) {
          tick.value.timer.stop();
        }
      },
    );

    onUnmounted(() => {
      Tick.DOM.destroy(tick.value);
    });

    return {
      didInit,
      tick,
      tickFlip,
      tickCounter,
      timerValue,
      setDataTransform,
    };
  },
});
</script>

<style scoped></style>
