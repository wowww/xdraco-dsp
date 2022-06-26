<template>
  <div class="item-transprice">
    <span>{{ title }}</span>
    <div class="wrap-price">
      <div class="price">
        <strong class="ico-hydra ico-sm add-inside">{{ formattedPrice[0] }}<small>{{ formattedPrice[1] }}</small></strong>
        <span class="us-dollar">{{ formattedUsd[0] }}<small>{{ formattedUsd[1] }}</small></span>
      </div>
      <time v-if="price > 0" :date="date">{{ formattedDate }}</time>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref, watch } from '@vue/composition-api';
import { useState } from 'vuex-composition-helpers/dist';
import { useDay } from '@/composables/round';
import useI18n from '@/utils/useI18n';
import { useToUsd } from '@/composables/exchange';
import { useFormattedNumber } from '@/composables/common';

export default defineComponent({
  name: 'ItemStat',
  props: {
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    date: {
      type: Number,
    },
  },
  setup({ price, date }) {
    const i18n = useI18n();
    const formattedDate = ref('');
    const { locale } = useState(['locale']);

    const formattedPrice = useFormattedNumber(price);
    const { usd, formattedUsd } = useToUsd(price);

    watch(
      () => locale.value,
      () => {
        formattedDate.value = useDay(date).format(i18n.t('w.rounds.date.format'));
      },
    );

    onMounted(() => {
      formattedDate.value = useDay(date).format(i18n.t('w.rounds.date.format'));
    });

    return {
      formattedDate,
      formattedPrice,
      formattedUsd,
    };
  },
});
</script>

<style lang="scss"></style>
