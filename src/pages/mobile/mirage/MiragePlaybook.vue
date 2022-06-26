<template>
  <main id="contents" class="contents mirage-playbook">
    <mirage-playbook-contents />
    <Footer />
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

// eslint-disable-next-line import/extensions
import Footer from '@/partials/common/Footer';
import MiragePlaybookContents from '@/pages/common/MiragePlaybookContents';

export default defineComponent({
  name: 'MiragePlaybook',
  components: {
    Footer,
    MiragePlaybookContents,
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
