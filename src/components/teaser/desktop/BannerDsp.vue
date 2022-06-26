<template>
  <a href="https://dsp.xdraco.com/" class="banner-dsp">
    <div class="banner-dsp__inner">
      <p class="message">DRACO is POWER<br />DSP SEASON 1</p>
      <ul class="information">
        <li>
          <strong class="number">100</strong>
          <span>ROUNDS</span>
        </li>
        <li class="legendary">
          <strong class="number">20</strong>
          <span>LEGENDARY<br />ITEMS</span>
        </li>
        <li class="epic">
          <strong class="number">76</strong>
          <span>EPIC<br />ITEMS</span>
        </li>
        <li class="rare">
          <strong class="number">4</strong>
          <span>RARE<br />ITEMS</span>
        </li>
      </ul>
    </div>
  </a>
</template>

<script>
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  name: 'BannerDsp',
  components: {
    //
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
  setup() {
    onBeforeMount(() => {
      //
    });
  },
});
</script>

<style lang="scss"></style>
