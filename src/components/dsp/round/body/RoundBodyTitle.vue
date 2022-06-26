<template>
  <div class="round-title">
    <div class="category">
      <span class="rare" v-if="item.grade === 3">{{ t('w.rounds.item.grade.3') }}</span>
      <span class="epic" v-else-if="item.grade === 4">{{ t('w.rounds.item.grade.4') }}</span>
      <span class="legendary" v-else-if="item.grade === 5">{{ t('w.rounds.item.grade.5') }}</span>
      <span class="tier">TIER {{ item.tier | roman }}</span>
    </div>
    <h4 class="item-name">
      {{ item.name }}<em v-if="item.enhance > 0">+{{ item.enhance }}</em>
    </h4>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'RoundBodyTitle',
  props: {
    item: Object,
  },
  setup() {
    return {
      ...useI18n(),
    };
  },
});
</script>

<style lang="scss"></style>
