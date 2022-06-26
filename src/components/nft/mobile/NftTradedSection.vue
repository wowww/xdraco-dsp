<template>
  <div class="wrap-swiper" :data-empty-message="data.list && data.list.length > 0 ? '' : t('s.nft.empty.traded')">
    <swiper ref="swiperTopTraded" class="list-item recommended rank" :options="swiperOptions">
      <swiper-slide v-for="(item, itemIdx) in data.list.slice(0, 3)" :key="`nft-top-traded-item-${item.seq || item.info.seq}`">
        <nft-item
          :item="{
            ...item.info,
            seller: item.seller,
          }"
          :badge="useBadge"
          :rank="useRank ? itemIdx + 1 : 0"
          use-link
          traded
        />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import NftItem from '@/components/nft/common/NftItem';
import useI18n from '@/utils/useI18n';

// import 'swiper/swiper-bundle.css'; // (>= Swiper 6.x)
import 'swiper/css/swiper.css'; // (<= Swiper 5.x)

export default {
  name: 'NftTopTradedSection',
  components: {
    Swiper,
    SwiperSlide,
    NftItem,
  },
  props: {
    data: {
      type: Object,
    },
    useBadge: {
      type: Boolean,
      default: false,
    },
    useRank: {
      type: Boolean,
      default: false,
    },
    swiperOptions: {
      type: Object,
      default: () => ({
        slidesPerView: 'auto',
      }),
    },
  },
  setup() {
    return {
      ...useI18n(),
    };
  },
};
</script>

<style scoped></style>
