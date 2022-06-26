<template>
  <div :class="`drain-${visiblePart}`">
    <drain-part1 v-if="visiblePart === 'part1'" />
    <drain-part2 v-if="visiblePart === 'part2'" />

    <div class="change-contents-link" v-if="visiblePart === 'part1'">
      <div class="change-contents-link__inner">
        <img src="~@/assets/img/desktop/drain-part2/symbol-hydra.webp" class="symbol" alt="HYDRA" />
        <h3 class="title">DRAIN : Be Hydrated</h3>
        <p>DRACO Initiative, Be Hydrated by WEST</p>
      </div>
      <button type="button" class="change-contents-link__link" @click="changeContents('part2', '#header')">Change Contents</button>
    </div>
    <div class="change-contents-link" v-if="visiblePart === 'part2'">
      <div class="change-contents-link__inner">
        <img src="~@/assets/img/desktop/drain-part2/symbol-draco.webp" class="symbol" alt="DRACO" />
        <h3 class="title">DRAIN : Buyback &amp; Burn</h3>
        <p>Our contribution for your satisfaction.</p>
      </div>
      <button type="button" class="change-contents-link__link" @click="changeContents('part1', '#header')">Change Contents</button>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted, reactive, toRefs } from '@vue/composition-api';

import goTo from 'vuetify/lib/services/goto';
import useI18n from '@/utils/useI18n';
import Footer from '@/partials/common/Footer';
import DrainPart1 from '@/components/coin/mobile/drain/DrainPart1';
import DrainPart2 from '@/components/coin/mobile/drain/DrainPart2';

export default defineComponent({
  name: 'Drain',
  components: {
    DrainPart1,
    DrainPart2,
    Footer,
  },
  setup() {
    const state = reactive({
      visiblePart: 'part2',
    });

    const changeContents = (targetContents, targetSelector) => {
      state.visiblePart = targetContents;
      goTo(targetSelector, {});
    };

    onBeforeMount(() => {
      //
    });

    onMounted(() => {
      //
    });

    return {
      ...useI18n(),
      ...toRefs(state),
      changeContents,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app';
@import '~@/assets/sass/mobile/pages/coin/drain'; // for Hydra Teaser
</style>
