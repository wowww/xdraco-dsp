<template>
  <div class="hydra">
    <hydra-main />
    <hydra-youtube-video />
    <hydra-prologue />
    <hydra-chronicles />
    <hydra-dynamics />
    <hydra-spectrums />
    <hydra-defi />
    <hydra-roadmap />
    <hydra-summoning />
    <hydra-refinery />

    <div class="float-bottom">
      <v-carousel v-if="true" height="auto" class="part" :show-arrows="false" interval="5000" cycle vertical hide-delimiters>
        <v-carousel-item>
          <wemix-hydra />
        </v-carousel-item>
        <v-carousel-item>
          <usd-hydra />
        </v-carousel-item>
        <v-carousel-item>
          <wemix-hydra />
        </v-carousel-item>
        <v-carousel-item>
          <usd-hydra />
        </v-carousel-item>
      </v-carousel>

      <hydra-refining-cost class="part" />
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted } from '@vue/composition-api';

import useI18n from '@/utils/useI18n';
import HydraMain from '@/components/coin/desktop/hydra/HydraMain';
import HydraYoutubeVideo from '@/components/coin/desktop/hydra/HydraYoutubeVideo';
import HydraPrologue from '@/components/coin/desktop/hydra/HydraPrologue';
import HydraChronicles from '@/components/coin/desktop/hydra/HydraChronicles';
import HydraDynamics from '@/components/coin/desktop/hydra/HydraDynamics';
import HydraSpectrums from '@/components/coin/desktop/hydra/HydraSpectrums';
import HydraDefi from '@/components/coin/desktop/hydra/HydraDefi';
import HydraRoadmap from '@/components/coin/desktop/hydra/HydraRoadmap';
import HydraSummoning from '@/components/coin/desktop/hydra/HydraSummoning';
import HydraRefinery from '@/components/coin/desktop/hydra/HydraRefinery';
import WemixHydra from '@/components/coin/desktop/hydra/WemixHydra';
import UsdHydra from '@/components/coin/desktop/hydra/UsdHydra';
import HydraRefiningCost from '@/components/coin/common/HydraRefiningCost';

export default defineComponent({
  name: 'HydraPage',
  components: {
    HydraMain,
    HydraYoutubeVideo,
    HydraPrologue,
    HydraChronicles,
    HydraDynamics,
    HydraSpectrums,
    HydraDefi,
    HydraRoadmap,
    HydraSummoning,
    HydraRefinery,
    HydraRefiningCost,
    UsdHydra,
    WemixHydra,
  },
  setup() {
    onBeforeMount(() => {
      setTimeout(() => {
        document.documentElement.classList.add('init-intro-hydra');
      }, 1500);
    });

    onMounted(() => {
      document.documentElement.classList.remove('init-intro-hydra');
    });

    return {
      ...useI18n(),
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
@import '~@/assets/sass/desktop/pages/coin/hydra.scss';
</style>
