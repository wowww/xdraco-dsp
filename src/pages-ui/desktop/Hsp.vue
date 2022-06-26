<template>
  <main class="contents hsp">
    <banner-hsp-top />

    <section class="section">
      <div class="section__inner">
        <div class="wrap-grid">
          <!-- 타임라인 -->
          <div class="grid-timeline">
            <div class="hsp-main">
              <!-- Display Value for Hydra -->
              <div class="hsp-info">
                <div class="item">
                  <dl class="define-value">
                    <dt class="minted">
                      {{ $t('t.hsp.main.value1') }}
                      <v-tooltip content-class="hydra-tooltip" attach=".minted" top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon color="primary" dark v-bind="attrs" v-on="on"> icon </v-icon>
                        </template>
                        <div class="tooltip-wrap">
                          <div class="tit">{{ $t('t.hsp.main.tooltip.title1') }}</div>
                          <ul class="desc">
                            <li>HSP 리워드로 사용되는 HYDRA의 수량 입니다.</li>
                            <li>30초(30Block)당 1개의 HYDRA가 자동으로 발행 되며 총 수량은 2,000,000 HYDRAs 입니다.</li>
                            <li>발행 된 HYDRA는 HSP 참여자가 Stake한 HYDRA의 비율에 따라 보상으로 분배됩니다.</li>
                          </ul>
                        </div>
                      </v-tooltip>
                    </dt>
                    <dd v-if="isPreStake">
                      <!-- <div>
                        <p class="date">Reward HYDRA minting will begin on<br />Jan. 28th, 2022 00:00 UTC+8</p>
                      </div> -->
                      <div>
                        <p class="icon-hydra-gold">21,151,265</p>
                        <v-btn width="24" height="24" fab icon>
                          <img class="icon-refresh" src="@/assets/img/common/hsp-dialog/ico-refresh.webp" />
                        </v-btn>
                      </div>
                      <div class="currency-volume">
                        <span class="volume wemix">9,999,999,999<span class="decimal-point">.9999</span></span>
                        <!-- <span class="volume dollar">9,999,999,999<span class="decimal-point">.9999</span></span> -->
                      </div>
                    </dd>
                    <dd v-else>
                      <div>
                        <p class="icon-hydra-gold">999,999.1234</p>
                        <v-btn width="24" height="24" fab icon>
                          <img class="icon-refresh" src="@/assets/img/common/hsp-dialog/ico-refresh.webp" />
                        </v-btn>
                      </div>
                      <div class="graph-wrap">
                        <em class="percent">90%</em>
                        <div class="graph"><span class="bar" style="width: 90%"></span></div>
                      </div>
                    </dd>

                    <div class="graph-wrap">
                      <em class="percent">1.53%</em>
                      <div class="graph">
                        <span class="bar" style="width: 1.53%"></span>
                      </div>
                    </div>
                  </dl>
                </div>

                <div class="item">
                  <dl class="define-value">
                    <dt class="total">
                      TVS (Total Value Staked)
                      <v-tooltip content-class="hydra-tooltip" attach=".total" top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon color="primary" dark v-bind="attrs" v-on="on"> icon </v-icon>
                        </template>
                        <div class="tooltip-wrap">
                          <div class="tit">{{ $t('t.hsp.main.value2') }}</div>
                          <ul class="desc">
                            <li>현재 HSP에 스테이킹된 총 HYDRAs</li>
                          </ul>
                        </div>
                      </v-tooltip>
                    </dt>
                    <dd>
                      <div>
                        <p class="icon-hydra-gold">21,151,265</p>
                        <v-btn width="24" height="24" fab icon>
                          <img class="icon-refresh" src="@/assets/img/common/hsp-dialog/ico-refresh.webp" />
                        </v-btn>
                      </div>
                      <div class="currency-volume">
                        <!-- <span class="volume wemix">9,999,999,999<span class="decimal-point">.9999</span></span> -->
                        <span class="volume dollar">9,999,999,999<span class="decimal-point">.9999</span></span>
                      </div>
                    </dd>
                    <div class="total-avr">
                      <div>
                        <span>141<em class="point">.11</em>%</span>
                        <em>APR</em>
                      </div>
                      <v-divider vertical />
                      <div>
                        <span>141<em class="point">.11</em>%</span>
                        <em>APY</em>
                      </div>
                    </div>
                  </dl>
                </div>
              </div>

              <!-- My Stake -->
              <hsp-my-stake></hsp-my-stake>

              <!-- Notice -->
              <div class="notice-wrap">
                <dl class="meaning">
                  <dt v-html="t('t.hsp-teaser.caution.title')"></dt>
                  <dd v-html="t('s.hsp-teaser.caution.content')"></dd>
                </dl>
                <ul class="list-caution">
                  <li v-html="t('s.hsp-teaser.caution.desc1')"></li>
                  <li v-html="t('s.hsp-teaser.caution.desc2')"></li>
                  <li v-html="t('s.hsp-teaser.caution.desc3')"></li>
                </ul>
              </div>

              <!-- Dialog -->
              <hsp-dialog></hsp-dialog>
            </div>
          </div>

          <!-- 사이드영역 -->
          <div class="grid-side">
            <aside class="sidebar">
              <account-info />
              <sidebar-contact-us />
            </aside>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted } from '@vue/composition-api';

// eslint-disable-next-line import/extensions
import useI18n from '@/utils/useI18n';
import Footer from '@/partials/common/Footer';
import AccountInfo from '@/components/account/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import BannerHspTop from '@/components/banner/HspTop';
import hspDialog from '@/components-ui/common/HspDialog';
import HspMyStake from '@/components-ui/common/HspMyStake';

export default defineComponent({
  name: 'Hsp',
  components: {
    Footer,
    AccountInfo,
    BannerHspTop,
    SidebarContactUs,
    hspDialog,
    HspMyStake,
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
@import '~@/assets/sass/desktop/app.scss';
@import '~@/assets/sass/desktop/pages/hsp';
</style>
