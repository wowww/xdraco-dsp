<template>
  <main class="contents mir4nft">
    <section class="section section1">
      <div class="section__inner">
        <h1 class="bi">MIR4 NFT</h1>
        <p class="text-introduce" v-html="$t('s.nft.section1.introduce')"></p>
        <p class="date">{{ $t('s.nft.section1.opendate') }}</p>
      </div>
      <div class="wrap-character">
        <swiper class="swiper" ref="swiperCharacter" :options="swiperOptions">
          <swiper-slide data-character="warrior">
            <div class="name">warrior</div>
            <img src="@/assets/img/desktop/mir4nft/character-warrior.webp" class="character" />
          </swiper-slide>
          <swiper-slide data-character="sorcerer">
            <div class="name">sorcerer</div>
            <img src="@/assets/img/desktop/mir4nft/character-sorcerer.webp" class="character" />
          </swiper-slide>
          <swiper-slide data-character="taoist">
            <div class="name">taoist</div>
            <img src="@/assets/img/desktop/mir4nft/character-taoist.webp" class="character" />
          </swiper-slide>
          <swiper-slide data-character="lancer">
            <div class="name">lancer</div>
            <img src="@/assets/img/desktop/mir4nft/character-lancer.webp" class="character" />
          </swiper-slide>
          <div class="power" slot="pagination">
            <div class="inner">
              <div>
                <p>MINIMUM<br />POWER</p>
                <em>100K</em>
              </div>
            </div>
          </div>
          <div class="level" slot="pagination">
            <div class="inner">
              <p>FROM</p>
              <em>LV.60</em>
            </div>
          </div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
      </div>
      <div class="section__inner">
        <p class="text-desc">{{ $t('s.nft.section1.desc') }}</p>
      </div>
    </section>

    <section class="section section2">
      <div class="section__inner">
        <h2 class="headword" v-html="$t('t.nft.section2')"></h2>
        <div class="wrap-define">
          <dl class="define minting">
            <dt>{{ $t('t.nft.section2.part1') }}</dt>
            <dd>{{ $t('s.nft.section2.part1') }}</dd>
          </dl>
          <dl class="define sealing">
            <dt>{{ $t('t.nft.section2.part2') }}</dt>
            <dd>{{ $t('s.nft.section2.part2') }}</dd>
          </dl>
          <dl class="define trading">
            <dt>{{ $t('t.nft.section2.part3') }}</dt>
            <dd>{{ $t('s.nft.section2.part3') }}</dd>
          </dl>
        </div>
      </div>
    </section>

    <section class="section section3">
      <div class="section__inner">
        <h2 class="headword" v-html="$t('t.nft.section3')"></h2>
        <div class="wrap-define">
          <dl class="define searching">
            <dt>{{ $t('t.nft.section3.part1') }}</dt>
            <dd>{{ $t('s.nft.section3.part1') }}</dd>
          </dl>
          <dl class="define purchasing">
            <dt>{{ $t('t.nft.section3.part2') }}</dt>
            <dd>{{ $t('s.nft.section3.part2') }}</dd>
          </dl>
          <dl class="define playing">
            <dt>{{ $t('t.nft.section3.part3') }}</dt>
            <dd>{{ $t('s.nft.section3.part3') }}</dd>
          </dl>
        </div>

        <p class="available-date" v-html="$t('s.nft.available')"></p>
      </div>
    </section>

    <Footer></Footer>
    <Banner></Banner>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import 'swiper/swiper-bundle.css'; // (>= Swiper 6.x)
import 'swiper/css/swiper.css'; // (<= Swiper 5.x)

import { directive as viewer } from 'v-viewer';
import 'viewerjs/dist/viewer.css';

import { defineComponent, onBeforeMount, onUnmounted, reactive, toRefs } from '@vue/composition-api';

// import Footer from '@/components/teaser/desktop/Footer';
import Footer from '@/partials/common/Footer';
import Banner from '@/components/teaser/Banner';

const clipboardCopy = require('clipboard-copy');
// import VueViewer from 'v-viewer';

// import Vue from 'vue';

// eslint-disable-next-line import/extensions

// Vue.use(VueViewer);

export default defineComponent({
  components: {
    Swiper,
    SwiperSlide,
    Footer,
    Banner,
  },
  directives: {
    viewer: viewer({
      debug: true,
    }),
  },
  computed: {
    swiperCharacter() {
      return this.$refs.swiperCharacter.$swiper;
    },
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',

    // for swiper
    swiperOptions: {
      // loop: true,
      simulateTouch: false,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 1,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      on: {
        init() {
          this.el.classList.add('swiper--loaded');
        },
      },
    },
  }),
  setup() {
    const state = reactive({
      selectedChart: 'usd',

      // for tab
      tabChartPrice: null,

      // for dialog
      dialogExchange: false,
      dialogTradeCoin: false,

      // for btn-copy-code
      isCopiedCode: false,

      // for imageViewer
      viewerOption: {
        toolbar: false,
        title: false,
        filter(img) {
          return img.parentNode.classList.contains('by-viewer');
        },
      },
    });

    const copyToClipboard = () => {
      clipboardCopy('copy value');
      state.isCopiedCode = true;
    };

    onBeforeMount(() => {
      setTimeout(() => {
        document.documentElement.classList.add('init-mir4nft');
        document.documentElement.style = 'background-color: #111122 !important;';
      }, 500);
    });

    onUnmounted(() => {
      document.documentElement.classList.remove('init-mir4nft');
      document.documentElement.style = '';
    });

    return {
      ...toRefs(state),
      copyToClipboard,
    };
  },
});
</script>

<style lang="scss">
// @import '~@/assets/sass/teaser/desktop/app.scss';
@import '~@/assets/sass/desktop/app.scss';

// :root {
//   --section-inner-width: 960px;
// }
</style>
