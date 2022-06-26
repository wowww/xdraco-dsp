<template>
  <div class="rolling-board">
    <a href="https://mir4draco.com/" class="item">
      <h3 class="title-currency">
        <img src="@/assets/img/common/rolling-board/bi-hydra.webp" width="63" alt="hydra" />
      </h3>
      <swiper ref="currencyInfo" class="currency-swiper" :options="swiperOptions">
        <swiper-slide>
          <dl class="exchange" v-if="hydraWemix">
            <dt>WEMIX / HYDRA</dt>
            <dd>
              <span class="amount wemix">{{ hydraWemix | currency(4) }}</span>
              <span class="change" :class="{ plus: hydraWemixChange > 0, minus: hydraWemixChange < 0 }">
                {{ hydraWemixChange > 0 ? '+' : '' }}{{ hydraWemixChange.toFixed(2) }}%
              </span>
            </dd>
          </dl>
        </swiper-slide>
        <swiper-slide>
          <dl class="exchange" v-if="hydraUsd">
            <dt>USD / HYDRA</dt>
            <dd>
              <span class="amount">${{ hydraUsd | currency(4) }}</span>
              <span class="change" :class="{ plus: hydraUsdChange > 0, minus: hydraUsdChange < 0 }">
                {{ hydraUsdChange > 0 ? '+' : '' }}{{ hydraUsdChange.toFixed(2) }}%
              </span>
            </dd>
          </dl>
        </swiper-slide>
      </swiper>
    </a>
    <a href="https://mir4draco.com/" class="item">
      <h3 class="title-currency">
        <img src="@/assets/img/common/rolling-board/bi-draco.webp" width="72" alt="draco" />
      </h3>
      <swiper ref="currencyInfo" class="currency-swiper" :options="swiperOptions">
        <swiper-slide>
          <dl class="exchange" v-if="dracoWemix">
            <dt>WEMIX / DRACO</dt>
            <dd>
              <span class="amount wemix">{{ dracoWemix | currency(4) }}</span>
              <span class="change" :class="{ plus: dracoWemixChange > 0, minus: dracoWemixChange < 0 }">
                {{ hydraWemixChange > 0 ? '+' : '' }}{{ hydraWemixChange.toFixed(2) }}%
              </span>
            </dd>
          </dl>
        </swiper-slide>
        <swiper-slide>
          <dl class="exchange" v-if="dracoUsd">
            <dt>USD / DRACO</dt>
            <dd>
              <span class="amount">${{ dracoUsd | currency(4) }}</span>
              <span class="change" :class="{ plus: dracoUsdChange > 0, minus: dracoUsdChange < 0 }">
                {{ dracoUsdChange > 0 ? '+' : '' }}{{ dracoWemixChange.toFixed(2) }}%
              </span>
            </dd>
          </dl>
        </swiper-slide>
      </swiper>
    </a>
    <a href="https://mir4draco.com/" class="item link" v-if="!isMobile">
      <span class="img-link">
        <img src="@/assets/img/common/rolling-board/bi-hydra-draco.webp" width="104" alt="hydra&amp;draco" />
      </span>
    </a>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import { defineComponent, onMounted, onUnmounted, reactive } from '@vue/composition-api';
import { createNamespacedHelpers, useState, useActions, useGetters } from 'vuex-composition-helpers/dist';
import { useNow } from '@vueuse/core';

const { useState: useMirageState, useActions: useMirageActions } = createNamespacedHelpers('mirage');

export default defineComponent({
  name: 'Rollingboard',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    //
  },
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
    swiperOptions: {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: true,
      allowTouchMove: false,
      direction: 'vertical',
    },
  }),
  methods: {
    //
  },
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
    rollingBoard() {
      return this.$refs.currencyInfo.$swiper;
    },
  },
  setup() {
    const state = reactive({
      timer: null,
    });
    const { dracoRate, hydraRate } = useState(['dracoRate', 'hydraRate']);
    const { dracoUsd, dracoWemix, dracoUsdChange, dracoWemixChange, hydraUsd, hydraWemix, hydraUsdChange, hydraWemixChange } = useGetters([
      'dracoUsd',
      'dracoWemix',
      'dracoUsdChange',
      'dracoWemixChange',
      'hydraUsd',
      'hydraWemix',
      'hydraUsdChange',
      'hydraWemixChange',
      'hydraWemixChange',
    ]);
    const { fetchDracoLastest, fetchHydraLastest } = useActions(['fetchDracoLastest', 'fetchHydraLastest']);


    onMounted(() => {
      if (!dracoRate.value) {
        fetchDracoLastest();
      }

      if (!hydraRate.value) {
        fetchHydraLastest();
      }

      state.timer = setInterval(() => {
        fetchDracoLastest();
        fetchHydraLastest();
      }, 1000 * 60 * 5);
    });

    onUnmounted(() => {
      if (state.timer) {
        clearInterval(state.timer);
      }
    });

    return {
      dracoUsd,
      dracoUsdChange,
      dracoWemix,
      dracoWemixChange,
      hydraUsd,
      hydraWemix,
      hydraUsdChange,
      hydraWemixChange,
    };
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/rolling-board';
</style>
