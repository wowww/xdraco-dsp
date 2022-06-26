<template>
  <div class="list-bar">
    <v-tabs :value="value" class="tab-traded" background-color="transparent" @change="onChange">
      <v-tab>{{ t('t.exd.top.traded') }}</v-tab>
      <v-tab>{{ t('t.exd.recent.traded') }}</v-tab>
    </v-tabs>
    <router-link to="/nft/history" class="list-bar__more">{{ t('w.rounds.view.more') }}</router-link>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'NftListTabBar',
  props: {
    value: Number,
  },
  methods: {
    onChange(value) {
      this.$emit('input', value);
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
