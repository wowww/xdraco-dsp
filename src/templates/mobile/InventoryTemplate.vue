<template>
  <main id="contents" class="contents mywarehouse">
    <router-view />
    <Footer />
  </main>
</template>

<script>
import { defineComponent, onMounted, watch } from '@vue/composition-api';
import Footer from '@/partials/common/Footer';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import { useState } from 'vuex-composition-helpers/dist';

export default defineComponent({
  name: 'InventoryTemplate',
  components: {
    SidebarContactUs,
    Footer,
  },
  setup(_, { root }) {
    const { accessToken } = useState(['accessToken']);

    watch(
      () => accessToken.value,
      () => {
        if (!accessToken.value) {
          root.$router.replace('/exd/list');
        }
      },
    );

    onMounted(() => {
      if (!accessToken.value) {
        root.$router.replace('/exd/list');
      }
    });

    return {
      accessToken,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app';
@import '~@/assets/sass/mobile/pages/_mywarehouse.scss';
@import '~@/assets/sass/components/_tab-style1.scss';
@import '~@/assets/sass/components/mirage-dialog';
</style>
