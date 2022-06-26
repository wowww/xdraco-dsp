<template>
  <div class="list-bar">
    <div class="list-bar__title">{{ t('t.exd.recommended') }}</div>
    <v-tabs class="list-bar__tab" background-color="transparent" v-show="false">
      <v-tab>Legendary</v-tab>
      <v-tab>Epic</v-tab>
      <v-tab>Rare</v-tab>
    </v-tabs>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'RecommendedTitle',
  setup() {
    return { ...useI18n() };
  },
});
</script>

<style scoped></style>
