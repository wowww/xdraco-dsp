<template>
  <div class="price">
    <section class="section bg-login">
      <div class="login" v-if="!accessToken">
        <div class="login__box">
          <h3 class="title">My Wallet</h3>
        </div>
        <wemix-login />
      </div>
      <div class="section__inner" v-else>
        <logged-in />
      </div>
    </section>
    <section class="section wrap-summary-coin">
      <!-- for HYDRA -->
      <div class="wrap-child">
        <!-- USD, WEMIX -->
        <div class="derby summary-coin">
          <h3 class="title-currency">
            <img src="~@/assets/img/common/price/bi-hydra-gold.webp" height="28" alt="HYDRA" />
          </h3>
          <div class="summary-coin__inner" v-if="dracoRate">
            <v-carousel height="auto" :show-arrows="false" interval="5000" cycle vertical hide-delimiters>
              <price-wemix-hydra />
              <price-usd-hydra />
              <price-wemix-hydra />
              <price-usd-hydra />
            </v-carousel>
            <dl class="display-data">
              <dt>
                <span>{{ $t('w.price.previous.wemix') }}</span>
                <span class="date">00:00(UTC+0)</span>
              </dt>
              <dd>
                <v-carousel height="auto" :show-arrows="false" interval="5000" cycle vertical hide-delimiters>
                  <price-wemix-hydra-prev />
                  <price-usd-hydra-prev />
                  <price-wemix-hydra-prev />
                  <price-usd-hydra-prev />
                </v-carousel>
              </dd>
            </dl>
            <dl class="display-data" v-if="hydraRate">
              <dt>
                <span>{{ $t('w.price.volume') }}</span>
                <span class="date">00:00(UTC+0) ~</span>
              </dt>
              <dd>{{ hydraRate.HydraAmount | currency(0) }} HYDRAs</dd>
            </dl>
            <div class="updated-date" v-if="hydraRate">{{ t('date.format.decoration', [dateFormatFromString(hydraRate.CreatedDT)]) }}</div>
          </div>
        </div>

        <!-- Refining Cost of HYDRA -->
        <div class="derby summary-coin">
          <div class="summary-coin__inner">
            <hydra-refining-cost />

            <dl class="display-data">
              <dt>
                <span>{{ $t('t.price.refining.hydra.desc') }}</span>
              </dt>
              <dd>
                <v-carousel height="auto" :show-arrows="false" interval="10000" cycle vertical hide-delimiters>
                  <v-carousel-item>
                    {{ (hydraSupply ? hydraSupply.TotalSupply : 0) | currency(0) }}
                  </v-carousel-item>
                </v-carousel>
              </dd>
            </dl>
            <dl class="display-data">
              <dt>
                <span>{{ $t('t.price.refining.hydra.desc2') }}</span>
              </dt>
              <dd>Stage {{ hydraSupply ? Math.floor(Number(hydraSupply.HydraSupply) / 100000) + 1 : 1 }}</dd>
            </dl>
            <div class="updated-date" v-html="$t('s.price.refining.hydra.desc')"></div>
          </div>
        </div>
      </div>

      <!-- for DRACO -->
      <div class="wrap-child">
        <!-- USD, WEMIX -->
        <div class="derby summary-coin">
          <h3 class="title-currency">
            <img src="~@/assets/img/common/price/bi-draco-gold.webp" height="28" alt="DRACO" />
          </h3>
          <div class="summary-coin__inner" v-if="dracoRate">
            <v-carousel height="auto" :show-arrows="false" interval="5000" cycle vertical hide-delimiters>
              <price-wemix-draco />
              <price-usd-draco />
              <price-wemix-draco />
              <price-usd-draco />
            </v-carousel>
            <dl class="display-data">
              <dt>
                <span>{{ $t('w.price.previous.wemix') }}</span>
                <span class="date">00:00(UTC+0)</span>
              </dt>
              <dd>
                <v-carousel height="auto" :show-arrows="false" interval="5000" cycle vertical hide-delimiters>
                  <price-wemix-draco-prev />
                  <price-usd-draco-prev />
                  <price-wemix-draco-prev />
                  <price-usd-draco-prev />
                </v-carousel>
              </dd>
            </dl>
            <dl class="display-data" v-if="dracoRate">
              <dt>
                <span>{{ $t('w.price.volume') }}</span>
                <span class="date">00:00(UTC+0) ~</span>
              </dt>
              <dd>{{ dracoRate.DracoAmount | currency(0) }} DRACO</dd>
            </dl>
            <div class="updated-date" v-if="dracoRate">{{ t('date.format.decoration', [dateFormatFromString(dracoRate.CreatedDT)]) }}</div>
          </div>
        </div>

        <!-- Today's Derby -->
        <div class="derby summary-coin">
          <div class="summary-coin__inner" v-if="derby && Array.isArray(derby) && derby.length > 0">
            <v-carousel height="auto" :show-arrows="false" interval="5000" cycle vertical hide-delimiters>
              <v-carousel-item>
                <draco-derby :set="(today = derby[derby.length - 1])" :ds="Number(today.DS)" :bonus="Number(today.BonusYield)" />
              </v-carousel-item>
              <v-carousel-item>
                <draco-smelting-cost />
              </v-carousel-item>
              <v-carousel-item>
                <draco-derby :set="(today = derby[derby.length - 1])" :ds="Number(today.DS)" :bonus="Number(today.BonusYield)" />
              </v-carousel-item>
              <v-carousel-item>
                <draco-smelting-cost />
              </v-carousel-item>
            </v-carousel>
            <dl class="display-data">
              <dt>
                <span>{{ $t('w.price.bonus') }}</span>
              </dt>
              <dd>
                <v-carousel height="auto" :show-arrows="false" interval="10000" cycle vertical hide-delimiters>
                  <v-carousel-item> {{ Number(today.BonusYield) > 0 ? '+' : '' }}{{ Number(today.BonusYield) | currency }} DS </v-carousel-item>
                </v-carousel>
              </dd>
            </dl>
            <dl class="display-data">
              <dt>
                <span>{{ $t('w.price.smelted.draco') }}</span>
              </dt>
              <dd>{{ today.DracoIssuance | currency(0) }} DRACO</dd>
            </dl>
            <div class="updated-date">{{ $t('s.smelting-cost.updated') }}</div>
          </div>
          <div class="summary-coin__inner" v-else>
            <v-carousel height="auto" :show-arrows="false" interval="5000" cycle vertical hide-delimiters>
              <v-carousel-item>
                <draco-derby-empty />
              </v-carousel-item>
              <v-carousel-item>
                <draco-smelting-cost-empty />
              </v-carousel-item>
              <v-carousel-item>
                <draco-derby-empty />
              </v-carousel-item>
              <v-carousel-item>
                <draco-smelting-cost-empty />
              </v-carousel-item>
            </v-carousel>
            <dl class="display-data">
              <dt>
                <span>{{ $t('w.price.bonus') }}</span>
              </dt>
              <dd>-</dd>
            </dl>
            <dl class="display-data">
              <dt>
                <span>{{ $t('w.price.smelted.draco') }}</span>
              </dt>
              <dd>-</dd>
            </dl>
            <div class="updated-date">{{ $t('s.smelting-cost.updated') }}</div>
          </div>
        </div>
      </div>
    </section>
    <price-chart />
  </div>
</template>

<script>
import { defineComponent, onMounted } from '@vue/composition-api';
import { useActions, useState } from 'vuex-composition-helpers/dist';

import DracoDerby from '@/components/coin/common/price/DracoDerby';
import DracoDerbyEmpty from '@/components/coin/common/price/DracoDerbyEmpty';
import HydraRefiningCost from '@/components/coin/common/price/HydraRefiningCost';
import LoggedIn from '@/components/coin/common/price/LoggedIn';
import PriceUsdDraco from '@/components/coin/common/price/PriceUsdDraco';
import PriceUsdDracoPrev from '@/components/coin/common/price/PriceUsdDracoPrev';
import PriceUsdHydra from '@/components/coin/common/price/PriceUsdHydra';
import PriceUsdHydraPrev from '@/components/coin/common/price/PriceUsdHydraPrev';
import PriceWemixDraco from '@/components/coin/common/price/PriceWemixDraco';
import PriceWemixDracoPrev from '@/components/coin/common/price/PriceWemixDracoPrev';
import PriceWemixHydra from '@/components/coin/common/price/PriceWemixHydra';
import PriceWemixHydraPrev from '@/components/coin/common/price/PriceWemixHydraPrev';
import DracoSmeltingCost from '@/components/coin/desktop/price/DracoSmeltingCost';
import DracoSmeltingCostEmpty from '@/components/coin/desktop/price/DracoSmeltingCostEmpty';
import PriceChart from '@/components/coin/desktop/price/PriceChart';
import WemixLogin from '@/components/common/WemixLogin';
import { dateFormatFromString } from '@/filters/date';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'PricePage',
  components: {
    LoggedIn,
    WemixLogin,
    PriceChart,
    DracoSmeltingCostEmpty,
    DracoDerbyEmpty,
    DracoSmeltingCost,
    DracoDerby,
    PriceUsdDracoPrev,
    HydraRefiningCost,
    PriceUsdHydraPrev,
    PriceWemixHydraPrev,
    PriceWemixDracoPrev,
    PriceUsdHydra,
    PriceUsdDraco,
    PriceWemixHydra,
    PriceWemixDraco,
  },
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
@import '~@/assets/sass/desktop/app.scss';
@import '~@/assets/sass/components/_derby.scss';
@import '~@/assets/sass/components/_summary-coin.scss';
@import '~@/assets/sass/desktop/pages/coin/_price.scss';
@import '~@/assets/sass/desktop/pages/coin/_draco.scss';
</style>
