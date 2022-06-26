<template>
  <li :class="{ 'list-item__item': isMobile }">
    <em class="rank-badge" v-if="useRank">
      <template v-if="rank === 0"> 1st</template>
      <template v-if="rank === 1"> 2nd</template>
      <template v-if="rank === 2"> 3rd</template>
    </em>
    <item-card
      :item="{ ...exchangeItem.item, tradeUID: exchangeItem.tradeUID }"
      :smaller="isMobile ? 'xs' : cardSize"
      :use-info="useInfo"
      :collectible="collectible"
      :use-link="useLink"
    />
    <div class="wrap-button" v-if="!useTop">
      <button type="button" class="btn btn-price-exd" @click="goToDetail">
        <exd-hydra-price :price="exchangeItem.price" icon-size="ss" :hide-label="true" :hide-usd="useTop" />
      </button>
    </div>
    <div class="wrap-button" v-if="useTop">
      <router-link to="productId" class="btn btn-price-exd" aria-disabled="true">
        <exd-hydra-price :price="exchangeItem.price" icon-size="ss" :hide-label="true" :hide-usd="useTop" />
        <div class="info">
          <!--          <character-class-thumb :character-class="exchangeItem.seller.class" size="24" />-->
          <strong class="nick">{{ exchangeItem.walletAddress || exchangeItem.seller.walletAddress | truncateMiddle }}</strong>
        </div>
      </router-link>
    </div>
    <div class="date-complete-stake" v-if="useTop">
      <!--      <span>{{ t('t.exd.tx.date') }}</span>-->
      <span class="date" v-if="useRelativeDate">{{ exchangeItem.endTime | fromNow }}</span>
      <span class="date" v-else>{{ exchangeItem.endTime | dateFormat }}</span>
    </div>
  </li>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import { useFormattedNumber, useMobile } from '@/composables/common';
import ItemCard from '@/components/common/item/ItemCard';
import useI18n from '@/utils/useI18n';
import { useToUsd } from '@/composables/exchange';
import ExdHydraPrice from '@/components/exd/common/ExdHydraPrice';
import ItemSeller from '@/components/exd/common/ItemSeller';
import CharacterClassThumb from '@/components/common/CharacterClassThumb';

const { useState } = createNamespacedHelpers('exd');
const { useState: useHspState } = createNamespacedHelpers('hsp');

export default defineComponent({
  name: 'ExchangeItem',
  components: { CharacterClassThumb, ItemSeller, ExdHydraPrice, ItemCard },
  props: {
    useRank: {
      type: Boolean,
      default: false,
    },
    rank: {
      type: Number,
      default: 0,
    },
    cardSize: {
      type: String,
      default: '',
    },
    useLink: {
      type: Boolean,
      default: false,
    },
    exchangeItem: {
      type: Object,
      default: () => ({}),
    },
    useTop: {
      type: Boolean,
      default: false,
    },
    useRelativeDate: {
      type: Boolean,
      default: false,
    },
    collectible: {
      type: Boolean,
      default: false,
    },
    useInfo: {
      type: Boolean,
      default: false,
    },
  },
  setup({ exchangeItem, collectible }, { root }) {
    console.log(root.$route.path, root.$route.path.includes('collectible'));
    const { isMobile } = useMobile();

    const formattedPrice = useFormattedNumber(exchangeItem.price);
    const { usd } = useToUsd(exchangeItem.price);

    const inCollectible = computed(() => {
      return collectible && root.$route.path.includes('collectible');
    });

    const goToDetail = () => {
      if (inCollectible.value) {
        root.$router.push(`/collectibles/trade/${exchangeItem.tradeUID}`);
      } else {
        root.$router.push(`/exd/trade/${exchangeItem.tradeUID}`);
      }
    };

    return {
      ...useI18n(),
      isMobile,
      usd,
      inCollectible,
      goToDetail,
      formattedPrice,
    };
  },
});
</script>

<style scoped></style>
