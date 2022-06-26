<template>
  <main id="contents" class="contents mirage-mirax">
    <mirage-mira-x-contents />
    <Footer />
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

// eslint-disable-next-line import/extensions
import Footer from '@/partials/common/Footer';
import MirageMiraXContents from '@/pages/common/MirageMiraXContents';

export default defineComponent({
  name: 'MirageMiraX',
  components: {
    Footer,
    MirageMiraXContents,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
  methods: {
    //
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app';
</style>
