<template>
  <div class="mirage-notice-inlist">
    <p class="message">{{ message }}</p>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MirageNoticeInlist',
  components: {
    //
  },
  props: {
    message: {
      types: String,
      required: true,
    },
  },
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
  }),
  methods: {
    //
  },
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-notice-inlist';
</style>
