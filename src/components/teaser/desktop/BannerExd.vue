<template>
  <div class="banner-exd">
    <div class="banner-exd__inner">
      <h2 class="bi-exd">EXD</h2>
      <p class="message">EXD GRAND OPEN!</p>
      <router-link to="/exd/list" class="link">Exchange Now</router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  name: 'BannerExd',
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
