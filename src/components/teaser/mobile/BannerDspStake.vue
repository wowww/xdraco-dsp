<template>
  <a href="https://dsp.xdraco.com/" class="banner-dsp-stake">
    <div class="banner-dsp-stake__inner">
      <h1 class="title">DSP</h1>
      <p class="message">STAKE<br />NOW!</p>
      <span class="link">ROUND LIST</span>
    </div>
  </a>
</template>

<script>
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  name: 'BannerDspStake',
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
