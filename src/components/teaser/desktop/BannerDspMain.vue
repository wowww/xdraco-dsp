<template>
  <div class="banner-dsp-main">
    <div class="banner-dsp-main__inner">
      <h1 class="title">DSP</h1>
      <p class="message">STAKE EARLIER<br />STAKE MORE</p>
      <router-link to="/dsp/rounds" class="link">Stake Now</router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  name: 'BannerDspMain',
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
