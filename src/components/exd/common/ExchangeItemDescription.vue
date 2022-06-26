<template>
  <div class="item-manual">
    <h2 class="item-title">{{ item.itemName || item.name || '' }}</h2>
    <h3 class="item-subtitle">{{ t(`w.exd.item-type.${item.itemType}`, [t(`w.rounds.item.class.${item.class}`)]) }}</h3>
    <ul class="item-detail-table">
      <li class="rank">
        <span>{{ t('w.common.item.grade') }}</span>
        <strong class="legendary" v-if="item.grade === 5">{{ t('w.rounds.item.grade.5') }}</strong>
        <strong class="epic" v-else-if="item.grade === 4">{{ t('w.rounds.item.grade.4') }}</strong>
        <strong class="rare" v-else-if="item.grade === 3">{{ t('w.rounds.item.grade.3') }}</strong>
        <strong class="uncommon" v-else-if="item.grade === 2">{{ t('w.rounds.item.grade.2') }}</strong>
      </li>
      <li class="tire" v-if="['2', '3', '4', '20'].includes(item.itemType.split('_')[0])">
        <span>{{ t('w.common.item.tier') }}</span>
        <strong>{{ item.tier | roman }}</strong>
      </li>
      <li class="enhance" v-if="['2', '3', '4', '20'].includes(item.itemType.split('_')[0])">
        <span>{{ t('w.common.item.enhance') }}</span>
        <strong>+ {{ item.enhance }}</strong>
      </li>
      <li class="sncode" v-if="item.uniqueNo">
        <span>{{ t('w.exd.unique.no') }}</span>
        <strong>{{ item.uniqueNo || '-' }}</strong>
      </li>
    </ul>
    <ul class="item-detail-table" v-if="showType == 'noprice'">
      <li class="rank">
        <span>Rank</span>
        <strong class="legendary" v-if="item.grade == 5">LEGENDARY</strong>
        <strong class="epic" v-if="item.grade == 4">EPIC</strong>
        <strong class="rare" v-if="item.grade == 3">RARE</strong>
        <strong class="rare" v-if="item.grade == 2">UNCOMMON</strong>
      </li>
      <li class="tire">
        <span>Tier</span>
        <strong>IV</strong>
      </li>
      <li class="enhance">
        <span>Enhance</span>
        <strong>+10</strong>
      </li>
    </ul>
    <ul class="item-detail-table" v-if="showType == 'allrank'">
      <li class="rank">
        <span>Rank</span>
        <strong class="legendary">LEGENDARY</strong>
      </li>
      <li class="rank">
        <span>Rank</span>
        <strong class="epic">EPIC</strong>
      </li>
      <li class="rank">
        <span>Rank</span>
        <strong class="rare">RARE</strong>
      </li>
      <li class="tire">
        <span>Tier</span>
        <strong>IV</strong>
      </li>
      <li class="enhance">
        <span>Enhance</span>
        <strong>+10</strong>
      </li>
    </ul>
    <ul class="item-detail-table" v-if="showType == 'rankonly'">
      <li class="rank">
        <span>Rank</span>
        <strong class="legendary" v-if="rankType == 'legendary'">LEGENDARY</strong>
        <strong class="epic" v-if="rankType == 'epic'">EPIC</strong>
        <strong class="rare" v-if="rankType == 'rare'">RARE</strong>
      </li>
    </ul>

    <div class="description" v-html="item.itemNote">
      {{ item.itemNote }}
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref, watch } from '@vue/composition-api';
import { useItemInfo } from '@/composables/exchange';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'ExchangeItemDescription',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    showType: {
      type: String,
      default: '',
    },
  },
  setup({ item }) {
    const itemType = computed(() => item.itemType.split('_'));
    const hasEnhance = computed(() => ['2', '3', '4', '20'].includes(itemType.value[0]));
    const hasPowerScore = computed(() => ['2', '3', '4', '8', '20'].includes(itemType.value[0]));

    return {
      ...useI18n(),
      hasEnhance,
    };
  },
});
</script>

<style scoped></style>
