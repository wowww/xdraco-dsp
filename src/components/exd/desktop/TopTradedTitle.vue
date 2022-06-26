<template>
  <div class="list-bar">
    <div class="list-bar__title">{{ t('t.exd.top.traded') }}</div>
    <router-link :to="collectibles ? '/collectibles/history' : '/exd/history'" class="list-bar__more">{{ t('w.rounds.view.more') }}</router-link>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'TopTradedTitle',
  props: {
    collectibles: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {
      ...useI18n(),
    };
  },
});
</script>

<style scoped></style>
