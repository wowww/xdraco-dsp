<template>
  <main id="contents" class="contents mirage">
    <banner-mirage-top />

    <mirage-dialog />

    <Footer />
  </main>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted } from '@vue/composition-api';

// eslint-disable-next-line import/extensions
import useI18n from '@/utils/useI18n';
import Footer from '@/partials/common/Footer';
import BannerMirageTop from '@/components/banner/MirageTop';
import MirageHiddenValleyCapture from '@/components-ui/common/MirageHiddenValleyCapture';
import MirageDialog from '@/components-ui/common/MirageDialog';

export default defineComponent({
  name: 'Mirage',
  components: {
    Footer,
    BannerMirageTop,
    MirageHiddenValleyCapture,
    MirageDialog,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',

    isPreStake: true,
  }),
  methods: {
    //
  },
  setup() {
    onBeforeMount(() => {
      //
    });

    onMounted(() => {
      //
    });

    return {
      ...useI18n(),
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app';
@import '~@/assets/sass/components/mirage-dialog';
</style>
