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

    <template>
      <v-carousel v-if="hydraRate" class="float-bottom" :show-arrows="false" interval="5000" cycle vertical hide-delimiters>
        <home-usd-hydra />
        <home-wemix-hydra />
        <home-refining-cost />
      </v-carousel>
    </template>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted } from '@vue/composition-api';
import { useActions, useState } from 'vuex-composition-helpers/dist';

import useI18n from '@/utils/useI18n';
import HydraMain from '@/components/coin/mobile/hydra/HydraMain';
import HydraYoutubeVideo from '@/components/coin/mobile/hydra/HydraYoutubeVideo';
import HydraPrologue from '@/components/coin/mobile/hydra/HydraPrologue';
import HydraChronicles from '@/components/coin/mobile/hydra/HydraChronicles';
import HydraDynamics from '@/components/coin/mobile/hydra/HydraDynamics';
import HydraSpectrums from '@/components/coin/mobile/hydra/HydraSpectrums';
import HydraDefi from '@/components/coin/mobile/hydra/HydraDefi';
import HydraRoadmap from '@/components/coin/mobile/hydra/HydraRoadmap';
import HydraSummoning from '@/components/coin/mobile/hydra/HydraSummoning';
import HydraRefinery from '@/components/coin/mobile/hydra/HydraRefinery';
import HomeUsdHydra from '@/components/coin/mobile/hydra/HomeUsdHydra';
import HomeWemixHydra from '@/components/coin/mobile/hydra/HomeWemixHydra';
import HomeRefiningCost from '@/components/coin/mobile/hydra/HomeRefiningCost';

export default defineComponent({
  name: 'HydraPage',
  components: {
    HomeRefiningCost,
    HomeWemixHydra,
    HomeUsdHydra,
    HydraRefinery,
    HydraSummoning,
    HydraRoadmap,
    HydraDefi,
    HydraSpectrums,
    HydraDynamics,
    HydraChronicles,
    HydraPrologue,
    HydraYoutubeVideo,
    HydraMain,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
  setup() {
    const { hydraRate } = useState(['hydraRate']);
    const { fetchHydra, fetchHydraLastest } = useActions(['fetchHydra', 'fetchHydraLastest']);

    onMounted(() => {
      fetchHydra();
      fetchHydraLastest();
    });

    return {
      ...useI18n(),
      hydraRate,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app.scss';
@import '~@/assets/sass/mobile/pages/coin/hydra.scss';
</style>
