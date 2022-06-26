<template>
  <main class="contents home">
    <currency-notice />
    <swiper ref="swiperTop" :options="swiperOptions">
      <swiper-slide>
        <banner-boss-raid />
      </swiper-slide>
      <swiper-slide>
        <banner-mirax />
      </swiper-slide>
      <swiper-slide>
        <banner-hsp-staking />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

    <section class="section section-rolling-board">
      <div class="section__inner">
        <rolling-currency-board />
      </div>
    </section>

    <section class="section section0">
      <div class="section__inner">
        <div class="wrap-video" :class="{ 'wrap-video--open': isOpenVideo }">
          <iframe
            src="https://www.youtube.com/embed/DXYSD09JEcI"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
      </div>
    </section>

    <section class="section section1">
      <div class="section__inner">
        <h1 class="bi">HOME</h1>
        <p class="text-introduce" v-html="$t('s.home.section1.introduce')"></p>
        <!-- <div class="bi-package"></div>
        <p class="text-desc" v-html="$t('s.home.section1.desc')"></p> -->
      </div>
    </section>

    <section class="section section2">
      <div class="section__inner">
        <ul class="summary-brand">
          <li class="brand mirage">
            <dl class="define">
              <dt>
                <img src="@/assets/img/desktop/home/bi-mirage.webp" width="116" alt="" />
              </dt>
              <dd>Brand new character staking game<br />Welcome to the Golden Age, MIRAGE.</dd>
            </dl>
            <div class="wrap-button">
              <span class="button">MIRAGE</span>
            </div>
            <p class="desc">
              <strong class="text-gradient">Join Hidden Valley Capture</strong>
              <span class="text-gradient">
                <em>{{ joinDragonians | currency(0) }}</em>
                <span>Dragonians are currently engaged in battle</span>
              </span>
            </p>
            <router-link to="/mirage" class="link">MIR4NFT</router-link>
          </li>
          <li class="brand hsp">
            <dl class="define">
              <dt>
                <img src="@/assets/img/mobile/home/bi-hsp.webp" width="123" alt="" />
              </dt>
              <dd v-html="$t('s.home.section2.hsp.desc')"></dd>
            </dl>
            <div class="wrap-button">
              <span class="button">HSP</span>
            </div>
            <div class="info">
              <span>Total Value Locked</span>
              <div class="value-coin">
                <img src="@/assets/img/desktop/home/ico-hydra-gold.webp" width="40" alt="" />
                <em
                  >{{ formattedStakedAmount[0] }}<span class="decimal" v-if="formattedStakedAmount[1]">{{ formattedStakedAmount[1] }}</span></em
                >
              </div>
              <div class="value-coin locked">
                <img src="@/assets/img/desktop/home/logo-wemix.webp" width="16" alt="" />
                <em
                  >{{ formattedStakeWemix[0] }}<span class="decimal" v-if="formattedStakeWemix[1]">{{ formattedStakedAmount[1] }}</span>
                </em>
              </div>
              <div class="value-ap" v-if="false">
                <div class="item">
                  <em
                    >105
                    <span class="decimal">.36%</span>
                  </em>
                  <span class="txt">APR</span>
                </div>
                <div class="item">
                  <em
                    >172
                    <span class="decimal">.05%</span>
                  </em>
                  <span class="txt">APY</span>
                </div>
              </div>
            </div>
            <router-link to="/hsp" class="link">HSP</router-link>
          </li>
          <!-- <li class="brand dsp"> -->
          <li class="brand exchange">
            <dl class="define">
              <dt>
                <img src="@/assets/img/mobile/home/summary-bi-exd.webp" width="126" alt="" />
              </dt>
              <dd v-html="$t('s.home.section2.exchange.desc')"></dd>
            </dl>
            <div class="wrap-button">
              <span class="button">Exchange By DRACO</span>
            </div>
            <router-link to="/exd/list" class="link">Exchange By DRACO</router-link>
          </li>
          <li class="brand nft">
            <dl class="define">
              <dt>
                <img src="@/assets/img/desktop/home/summary-bi-nft.webp" width="112" alt="" />
              </dt>
              <dd v-html="$t('s.home.section2.nft.desc')"></dd>
            </dl>
            <div class="wrap-button">
              <span class="button">Character NFT</span>
            </div>
            <router-link to="/nft" class="link">MIR4NFT</router-link>
          </li>
          <li class="brand dsp-end">
            <dl class="define">
              <dt>
                <img src="@/assets/img/desktop/home/summary-bi-dsp.webp" width="98" alt="" />
              </dt>
              <dd>DSP Season 3 will return with more unique<br />XDRACO items!</dd>
            </dl>
            <div class="wrap-button">
              <span class="button">DSP ROUND LIST</span>
            </div>
            <router-link to="/dsp/rounds" class="link">DSP</router-link>
          </li>
          <li class="brand drain">
            <dl class="define">
              <dt>
                <img src="@/assets/img/desktop/home/bi-drain.webp" width="158" alt="" />
              </dt>
              <dd>Be Hydrated.<br />The Mystery Trader will appear.</dd>
            </dl>
            <div class="wrap-button">
              <span class="button">Learn more</span>
            </div>
            <router-link to="/nft" class="link">MIR4NFT</router-link>
            <a href="https://mir4draco.com/drain" class="link"></a>
          </li>
          <!-- <li class="brand draco">
            <dl class="define">
              <dt>
                <img src="@/assets/img/desktop/home/summary-bi-draco.webp" width="138" alt="" />
              </dt>
              <dd v-html="$t('s.home.section2.draco.desc')"></dd>
            </dl>
            <div class="wrap-button">
              <span class="button">DRACO</span>
            </div>
            <a href="https://mir4draco.com" class="link" target="_blank">DRACO</a>
          </li>
          <li class="brand hydra">
            <dl class="define">
              <dt>
                <img src="@/assets/img/mobile/home/bi-hydra.webp" width="123" alt="" />
              </dt>
              <dd v-html="$t('s.home.section2.hydra.desc')"></dd>
            </dl>
            <div class="wrap-button">
              <span class="button">HYDRA</span>
            </div>
            <a href="https://mir4draco.com/hydra" class="link" target="_blank">HYDRA</a>
          </li> -->
        </ul>
      </div>
    </section>

    <Footer></Footer>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import 'swiper/swiper-bundle.css'; // (>= Swiper 6.x)
import 'swiper/css/swiper.css'; // (<= Swiper 5.x)
import { defineComponent, onBeforeMount, onMounted, onUnmounted } from '@vue/composition-api';

// eslint-disable-next-line import/extensions
// import Footer from '@/components/teaser/mobile/Footer';
import { computed } from '@vue/composition-api/dist/vue-composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';

import RollingBoard from '@/components-ui/common/RollingBoard';
import BannerBossRaid from '@/components/banner/home/BannerBossRaid';
import BannerMirageMultiverse from '@/components/banner/home/BannerMirageMultiverse';
import BannerMirax from '@/components/banner/home/BannerMirax';
import BannerCollectibleMain from '@/components/banner/home/CollectibleMain';
import BannerDrainPart2 from '@/components/banner/home/DrainPart2';
import BannerEraHydra from '@/components/banner/home/EraHydra';
import BannerHspStaking from '@/components/banner/home/HspStaking';
import BannerHspTeaser from '@/components/banner/home/HspTeaser';
import BannerMirageMain from '@/components/banner/home/MirageMain';
import BannerNftMain from '@/components/banner/home/NftMain';
import CurrencyNotice from '@/components/common/CurrencyNotice';
import BannerDspRoundSeason2 from '@/components/dsp/round/banner/DspRoundSeason2';
import RollingCurrencyBoard from '@/components/price/RollingCurrencyBoard';
import Banner from '@/components/teaser/Banner';
// import BannerDsp from '@/components/mobile/BannerDsp';
import BannerDspMain from '@/components/teaser/mobile/BannerDspMain';
import BannerDspStake from '@/components/teaser/mobile/BannerDspStake';
import BannerExd from '@/components/teaser/mobile/BannerExd';
import { separateDecimalPoint } from '@/filters/numeric';
import Footer from '@/partials/common/Footer';

const { useState: useHspState, useActions: useHspActions } = createNamespacedHelpers('hsp');
const { useState: useMirageState, useActions: useMirageActions } = createNamespacedHelpers('mirage');

export default defineComponent({
  components: {
    BannerMirax,
    RollingCurrencyBoard,
    Swiper,
    SwiperSlide,
    Footer,
    Banner,
    // BannerDsp,
    BannerDspMain,
    BannerDspStake,
    BannerExd,
    BannerCollectibleMain,
    BannerDspRoundSeason2,
    BannerNftMain,
    BannerMirageMain,
    BannerHspStaking,
    BannerDrainPart2,
    BannerHspTeaser,
    BannerEraHydra,
    CurrencyNotice,
    RollingBoard,
    BannerMirageMultiverse,
    BannerBossRaid,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',

    // for swiper
    swiperOptions: {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      effect: 'fade',
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      // centeredSlides: true,
      // spaceBetween: 30,
      // loop: true,
      // allowTouchMove: false,
    },
    isOpenVideo: false,
  }),
  computed: {
    swiperTop() {
      return this.$refs.swiperTop.$swiper;
    },
  },
  setup() {
    const { loading, total, my, price } = useHspState(['loading', 'total', 'my', 'price']);
    const { fetchTotal, fetchMy, fetchPrice } = useHspActions(['fetchTotal', 'fetchMy', 'fetchPrice']);
    const { valleyCapture } = useMirageState(['valleyCapture']);
    const { fetchValleyList, fetchServerInfo, fetchAccountServerInfo, fetchAccountInfo, fetchMyCharacters } = useMirageActions([
      'fetchValleyList',
      'fetchServerInfo',
      'fetchAccountServerInfo',
      'fetchAccountInfo',
      'fetchMyCharacters',
    ]);

    const formattedStakedAmount = computed(() => {
      return separateDecimalPoint(total.value ? total.value.totalStakedAmount : '');
    });

    const formattedStakeWemix = computed(() => {
      return separateDecimalPoint(total.value && price.value ? Number(total.value.totalStakedAmount) * Number(price.value.HydraPrice) : '');
    });

    const joinDragonians = computed(() => {
      if (valleyCapture.value) {
        let dragonians = 0;
        valleyCapture.value.serverInfo.forEach((item) => {
          if (item && item.CurrentSlotCnt) {
            dragonians += Number(item.CurrentSlotCnt);
          }
        });

        return dragonians;
      }
      return 0;
    });

    onBeforeMount(() => {
      setTimeout(() => {
        document.documentElement.classList.add('init-home');
      }, 500);
    });

    onMounted(() => {
      fetchTotal();
      fetchPrice();
      fetchServerInfo();
    });

    onUnmounted(() => {
      document.documentElement.classList.remove('init-home');
    });

    return {
      formattedStakedAmount,
      formattedStakeWemix,
      joinDragonians,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isOpenVideo = !this.isOpenVideo;
    }, 400);
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app.scss';
@import '~@/assets/sass/teaser/mobile/pages/home';
</style>
