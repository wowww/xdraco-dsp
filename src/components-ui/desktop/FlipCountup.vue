<template>
  <div ref="tick" class="tick-dsp" :class="{ 'tick--smaller': smaller }">
    <div data-repeat="true" data-layout="horizontal fit" :data-transform="setDataTransform()">
      <span data-view="flip" data-transform="arrive(1, 0.01) -> round -> replace(NaN, ',')"></span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Tick from '@pqina/flip';

export default defineComponent({
  name: 'FlipCountup',
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
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
  methods: {
    createDomFlip() {
      const didInit = (tick) => {
        this.tickFlip = tick;
      };

      Tick.DOM.create(this.$refs.tick, {
        value: 0,
        didInit,
      });
    },
    initCountdown() {
      if (this.tickFlip) {
        this.tickFlip.value = this.$props.targetValue;
      }
    },
    setDataTransform() {
      let pad = '00';

      if (this.targetValue >= 100 && this.targetValue < 1000) {
        pad = '000';
      } else if (this.targetValue < 10000) {
        pad = '00000';
      } else if (this.targetValue < 100000) {
        pad = '000000';
      } else if (this.targetValue < 1000000) {
        pad = '0000000';
      }

      return `number('.', ',', 0) -> pad(${pad}) -> split`;
    },
  },
  mounted() {
    this.createDomFlip();
    this.initCountdown();
  },
  beforeUpdate() {
    // console.log('beforeUpdate');
  },
  updated() {
    // console.log('updated');
  },
  destroyed() {
    Tick.DOM.destroy(this.$refs.tick);
  },
});
</script>

<style lang="scss"></style>
