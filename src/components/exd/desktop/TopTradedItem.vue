<template>
  <div class="item-ranking">
    <div class="item-ranking__rank">
      <template v-if="rank % 10 === 0">{{ rank + 1 }}st</template>
      <template v-else-if="rank % 10 === 1">{{ rank + 1 }}nd</template>
      <template v-else-if="rank % 10 === 2">{{ rank + 1 }}rd</template>
      <template v-else>{{ rank + 1 }}th</template>
    </div>

    <item-card :item="topTradedItem.item" use-info :collectible="!!topTradedItem.item.uniqueNo" />

    <div class="item-ranking__content">
      <div class="item-ranking__name">
        <div class="item-name">{{ topTradedItem.item.itemName }}</div>
        <div class="item-category">
          {{ t(`w.exd.item-type.${topTradedItem.item.itemType}`, [t(`w.rounds.item.class.${topTradedItem.item.class}`)]) }}
        </div>
      </div>
      <div class="wrap-define-detail">
        <dl class="define-detail">
          <dt>{{ t('w.common.item.grade') }}</dt>
          <dd>
            <span class="grade grade-5" v-if="topTradedItem.item.grade === 5">{{ t('w.rounds.item.grade.5') }}</span>
            <span class="grade grade-4" v-else-if="topTradedItem.item.grade === 4">{{ t('w.rounds.item.grade.4') }}</span>
            <span class="grade grade-3" v-else-if="topTradedItem.item.grade === 3">{{ t('w.rounds.item.grade.3') }}</span>
            <span class="grade grade-2" v-else-if="topTradedItem.item.grade === 2">{{ t('w.rounds.item.grade.2') }}</span>
          </dd>
        </dl>
        <dl class="define-detail" v-if="['2', '3', '4', '20'].includes(topTradedItem.item.itemType.split('_')[0])">
          <dt>{{ t('w.common.item.tier') }}</dt>
          <dd>{{ topTradedItem.item.tier | roman }}</dd>
        </dl>
        <dl class="define-detail" v-if="['2', '3', '4', '20'].includes(topTradedItem.item.itemType.split('_')[0])">
          <dt>{{ t('w.common.item.enhance') }}</dt>
          <dd>+ {{ topTradedItem.item.enhance }}</dd>
        </dl>
        <dl class="define-detail" v-if="topTradedItem.item.powerScore > 0">
          <dt>{{ t('t.exd.power.score') }}</dt>
          <dd>{{ topTradedItem.item.powerScore | currency(0) }}</dd>
        </dl>
        <dl class="define-detail" v-if="topTradedItem.item.uniqueNo">
          <dt>{{ t('w.exd.unique.no') }}</dt>
          <dd>{{ topTradedItem.item.uniqueNo || '-' }}</dd>
        </dl>
      </div>
      <div class="wrap-define-trade">
        <dl class="define-trade serial-number" v-if="topTradedItem.item.uniqueNo">
          <dt>{{ t('w.exd.unique.no') }}</dt>
          <dd>{{ topTradedItem.item.uniqueNo || '-' }}</dd>
        </dl>
        <exd-hydra-price klass="define-trade" :price="topTradedItem.price" icon-size="xs" :primary-class="isMobile ? 'price' : ''" :hide-usd="true" />
        <dl class="define-trade seller">
          <dt>Seller</dt>
          <dd>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">{{ topTradedItem.walletAddress || topTradedItem.seller.walletAddress | truncateMiddle }}</span>
              </template>
              <span>{{ topTradedItem.walletAddress || topTradedItem.seller.walletAddress }}</span>
            </v-tooltip>
          </dd>
        </dl>
        <dl class="define-trade">
          <dt>{{ t('t.exd.tx.date') }}</dt>
          <dd>{{ topTradedItem.endTime | dateFormat(locale) }}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useState } from 'vuex-composition-helpers/dist';
import ItemCard from '@/components/common/item/ItemCard';
import useI18n from '@/utils/useI18n';
import ItemSeller from '@/components/exd/common/ItemSeller';
import CharacterClassThumb from '@/components/common/CharacterClassThumb';
import { useFormattedNumber, useMobile } from '@/composables/common';
import { useToUsd } from '@/composables/exchange';
import ExdHydraPrice from '@/components/exd/common/ExdHydraPrice';

export default defineComponent({
  name: 'TopTradedItem',
  components: { ExdHydraPrice, CharacterClassThumb, ItemSeller, ItemCard },
  props: {
    rank: {
      type: Number,
    },
    topTradedItem: {
      type: Object,
    },
  },
  setup(props) {
    const { isMobile } = useMobile();
    const { locale } = useState(['locale']);

    const formattedPrice = useFormattedNumber(props.topTradedItem.price);
    const { usd, formattedUsd } = useToUsd(props.topTradedItem.price);

    return {
      locale,
      ...useI18n(),
      formattedPrice,
      usd,
      formattedUsd,
      isMobile,
    };
  },
});
</script>

<style scoped></style>
