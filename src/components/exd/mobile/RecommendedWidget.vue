<template>
  <div class="wrap-swiper">
    <swiper ref="swiperRecommended" class="list-item recommended" :options="swiperOptions">
      <swiper-slide class="list-item__item" v-for="item in recommendedItems" :key="`recommended-item-${item.tradeUID}`">
        <item-card :item="item.item" :collectible="!!item.item.uniqueNo" />
        <recommended-widget-button :trade-uid="item.tradeUID" :price="item.price" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'; // (<= Swiper 5.x)

import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import { defineComponent, onMounted, reactive, ref, toRefs, watch } from '@vue/composition-api';
import ItemCard from '@/components/common/item/ItemCard';
import useI18n from '@/utils/useI18n';
import { useFormattedNumber } from '@/composables/common';
import { useToUsd } from '@/composables/exchange';
import RecommendedWidgetButton from '@/components/exd/mobile/RecommendedWidgetButton';

const { useState: useExdState, useActions: useExdActions, useMutations: useExdMutations } = createNamespacedHelpers('exd');
const { useState: useHspState } = createNamespacedHelpers('hsp');
export default defineComponent({
  name: 'RecommendedWidget',
  components: { RecommendedWidgetButton, ItemCard, Swiper, SwiperSlide },
  setup(props, { root }) {
    const swiperRef = ref();
    const state = reactive({
      swiperOptions: {
        slidesPerView: 'auto',
      },
    });

    const { price: hydraPrice } = useHspState(['price']);

    const { locale } = useState(['locale']);
    const { recommendedLoading, recommendedItems, price } = useExdState(['recommendedLoading', 'recommendedItems', 'price']);
    const { fetchRecommended } = useExdActions(['fetchRecommended']);

    onMounted(() => {
      // fetchRecommended();
    });

    watch(
      () => locale.value,
      () => {
        fetchRecommended();
      },
    );

    const goToDetail = (tradeUID) => {
      root.$router.push(`/exd/trade/${tradeUID}`);
    };

    return {
      ...useI18n(),
      ...toRefs(state),
      recommendedItems,
      swiperRef,
      price,
      hydraPrice,
      goToDetail,
      useFormattedNumber,
      useToUsd,
    };
  },
});
</script>

<style scoped></style>
