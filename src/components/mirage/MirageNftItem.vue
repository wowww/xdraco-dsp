<template>
  <li :class="{ 'list-item__item': isMobile }">
    <router-link :to="`/nft/trade/${item.seq}`" class="link">
      <nft-card :size="size" :item="item" :non-flipped="true" />
    </router-link>
    <div class="wrap-button">
      <button type="button" class="btn btn-price btn-primary-nft" @click="go2Detail">
        <em class="price">
          <strong class="ico-wemixcredit ico-ss add-inside">{{ item.price | currency(0) }}</strong>
          <span class="rate">$ {{ (item.price * Number(price.USDWemixRate)) | currency(0, true) }}</span>
        </em>
      </button>
    </div>
  </li>
</template>

<script>
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import { defineComponent } from '@vue/composition-api';
import { useMobile } from '@/composables/common';
import NftCard from '@/components/nft/common/NftCard';
import { isNew } from '@/filters/date';

const { useState } = createNamespacedHelpers('exd');

export default defineComponent({
  name: 'MirageNftItem',
  components: { NftCard },
  props: {
    item: {
      type: Object,
      default: () => ({
        CharacterLev: 0,
        CharacterClass: 0,
        CharacterName: '',
        CharacterWorldID: '',
        PowerScore: '',
        TokenID: '',
      }),
    },
    rank: {
      type: Number,
      default: 0,
    },
    useLink: {
      type: Boolean,
      default: false,
    },
    traded: {
      type: Boolean,
      default: false,
    },
    badge: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'sm',
      required: false,
    },
  },
  setup({ item }, { root }) {
    const { price } = useState(['price']);
    const go2Detail = () => {
      root.$router.push(`/nft/trade/${item.seq}`);
    };
    return {
      ...useMobile(),
      isNew,
      price,
      go2Detail,
    };
  },
});
</script>

<style scoped></style>
