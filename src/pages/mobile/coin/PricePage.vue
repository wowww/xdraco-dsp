<template>
  <div class="price">
    <section class="section" v-if="!accessToken">
      <wemix-login />
    </section>
    <section class="section bg-login" v-else>
      <logged-in />
    </section>

    <section class="section mt-0" v-if="hydraRate">
      <div class="derby summary-coin no-gutter">
        <div class="no-gutter__inner">
          <h3 class="title-currency">
            <img src="~@/assets/img/common/price/bi-hydra-gold.webp" height="24" alt="HYDRA" />
          </h3>
          <v-carousel height="auto" :show-arrows="false" interval="5000" cycle vertical hide-delimiters>
            <price-usd-hydra />
            <price-wemix-hydra />
            <price-usd-hydra />
            <price-wemix-hydra />
          </v-carousel>

          <dl class="display-data">
            <dt>{{ $t('w.price.previous.wemix') }}</dt>
            <dd>
              <v-carousel height="auto" :show-arrows="false" interval="5000" cycle vertical hide-delimiters>
                <price-usd-hydra-prev />
                <price-wemix-hydra-prev />
                <price-usd-hydra-prev />
                <price-wemix-hydra-prev />
              </v-carousel>
            </dd>
          </dl>

          <dl class="display-data" v-if="hydraRate">
            <dt>{{ $t('w.price.volume') }}</dt>
            <dd>{{ hydraRate.HydraAmount | currency(0) }} HYDRAs</dd>
          </dl>
          <div class="updated-date" v-if="hydraRate">{{ t('date.format.decoration', [dateFormatFromString(hydraRate.CreatedDT)]) }}</div>
        </div>
      </div>
      <div class="derby summary-coin no-gutter">
        <div class="no-gutter__inner">
          <hydra-refining-cost />

          <dl class="display-data">
            <dt>Cumulative Refined HYDRAs</dt>
            <dd>
              <v-carousel height="auto" :show-arrows="false" interval="5000" cycle vertical hide-delimiters>
                <v-carousel-item>
                  {{ (hydraSupply ? hydraSupply.TotalSupply : 0) | currency(4) }}
                </v-carousel-item>
              </v-carousel>
            </dd>
          </dl>
          <dl class="display-data">
            <dt>Refining Stage</dt>
            <dd>Stage {{ hydraSupply ? Math.floor(Number(hydraSupply.HydraSupply) / 100000) + 1 : 1 }}</dd>
          </dl>
          <div class="updated-date">{{ $t('s.smelting-cost.updated') }}</div>
        </div>
      </div>
    </section>

    <!-- for DRACO -->
    <section class="section section-margin" v-if="dracoRate">
      <div class="derby summary-coin no-gutter">
        <div class="no-gutter__inner">
          <h3 class="title-currency">
            <img src="~@/assets/img/common/price/bi-draco-gold.webp" height="24" alt="DRACO" />
          </h3>
          <v-carousel height="auto" :show-arrows="false" interval="5000" cycle vertical hide-delimiters>
            <price-usd-draco />
            <price-wemix-draco />
            <price-usd-draco />
            <price-wemix-draco />
          </v-carousel>

          <dl class="display-data">
            <dt>{{ $t('w.price.previous.wemix') }}</dt>
            <dd>
              <v-carousel height="auto" :show-arrows="false" interval="5000" cycle vertical hide-delimiters>
                <price-usd-draco-prev />
                <price-wemix-draco-prev />
                <price-usd-draco-prev />
                <price-wemix-draco-prev />
              </v-carousel>
            </dd>
          </dl>

          <dl class="display-data" v-if="dracoRate">
            <dt>{{ $t('w.price.volume') }}</dt>
            <dd>{{ dracoRate.DracoAmount | currency(0) }} DRACO</dd>
          </dl>
          <div class="updated-date" v-if="dracoRate">{{ t('date.format.decoration', [dateFormatFromString(dracoRate.CreatedDT)]) }}</div>
        </div>
      </div>
      <card-today-derby />
    </section>
    <price-chart />
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted } from '@vue/composition-api';

// eslint-disable-next-line import/extensions
import { useActions, useState } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';
import Footer from '@/partials/common/Footer';
import PriceChart from '@/components/coin/mobile/price/PriceChart';
import WemixLogin from '@/components/common/WemixLogin';
import LoggedIn from '@/components/coin/common/price/LoggedIn';
import PriceUsdDraco from '@/components/coin/common/price/PriceUsdDraco';
import PriceUsdDracoPrev from '@/components/coin/common/price/PriceUsdDracoPrev';
import PriceUsdHydra from '@/components/coin/common/price/PriceUsdHydra';
import PriceUsdHydraPrev from '@/components/coin/common/price/PriceUsdHydraPrev';
import PriceWemixDraco from '@/components/coin/common/price/PriceWemixDraco';
import PriceWemixDracoPrev from '@/components/coin/common/price/PriceWemixDracoPrev';
import PriceWemixHydra from '@/components/coin/common/price/PriceWemixHydra';
import PriceWemixHydraPrev from '@/components/coin/common/price/PriceWemixHydraPrev';
import HydraRefiningCost from '@/components/coin/common/price/HydraRefiningCost';
import CardTodayDerby from '@/components/coin/mobile/price/CardTodayDerby';
import { dateFormatFromString } from '@/filters/date';

export default defineComponent({
  name: 'PricePage',
  components: {
    CardTodayDerby,
    PriceWemixDracoPrev,
    PriceWemixDraco,
    PriceUsdDraco,
    HydraRefiningCost,
    PriceWemixHydraPrev,
    PriceUsdHydraPrev,
    PriceUsdDracoPrev,
    PriceWemixHydra,
    PriceUsdHydra,
    LoggedIn,
    WemixLogin,
    PriceChart,
    Footer,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
  setup() {
    const { accessToken, dracoRate, hydraRate, hydraSupply, derby } = useState(['accessToken', 'dracoRate', 'hydraRate', 'hydraSupply', 'derby']);
    const { fetchDraco, fetchDerby, fetchHydra, fetchDracoLastest, fetchHydraLastest, fetchHydraSupply } = useActions([
      'fetchDraco',
      'fetchDerby',
      'fetchHydra',
      'fetchDracoLastest',
      'fetchHydraLastest',
      'fetchHydraSupply',
    ]);

    onMounted(() => {
      fetchDraco();
      fetchHydra();
      fetchDerby();
      fetchDracoLastest();
      fetchHydraLastest();
      fetchHydraSupply();
    });

    return {
      ...useI18n(),
      accessToken,
      dracoRate,
      hydraRate,
      hydraSupply,
      derby,
      dateFormatFromString,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app';
@import '~@/assets/sass/components/_derby.scss';
@import '~@/assets/sass/components/_summary-coin.scss';
@import '~@/assets/sass/mobile/pages/coin/_price.scss';
</style>
