<template>
  <ul class="list-item" data-empty-message="This section will be updated soon"></ul>
</template>

<script>
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  components: {
    // DspNav,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    tabMystical: null,
  }),
});
</script>

<style lang="scss"></style>
