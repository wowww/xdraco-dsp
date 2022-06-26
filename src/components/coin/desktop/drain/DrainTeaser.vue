<template>
  <main class="drain-teaser">
    <div class="contents">
      <section1 />
      <section2 />
      <section3 />
    </div>

    <Footer></Footer>
  </main>
</template>

<script>

import { defineComponent } from '@vue/composition-api';
import Section1 from '@/pages/desktop/drain-teaser/Section1';
import Section2 from '@/pages/desktop/drain-teaser/Section2';
import Section3 from '@/pages/desktop/drain-teaser/Section3';
import Footer from '@/components/common/Footer';


export default defineComponent({
  name: 'HydraTeaser',
  components: {
    Section1,
    Section2,
    Section3,
    Footer,
  },
  data: () => ({
    //
  }),
  methods: {
    //
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
@import '~@/assets/sass/desktop/drain-teaser'; // for Hydra Teaser
</style>
