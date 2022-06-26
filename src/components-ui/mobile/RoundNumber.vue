<template>
  <div class="round-number">
    <span>ROUND</span>
    <strong>{{ value }}</strong>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'RoundNumber',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    randomRound: parseFloat((Math.random() * (1000 - 1) + 1).toFixed(0)).toLocaleString(),
  }),
});
</script>

<style lang="scss"></style>
