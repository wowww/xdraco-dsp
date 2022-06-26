<template>
  <div class="mirage-notice-inlist">
    <p class="message" v-html="t('s.mirage.lock-up')"></p>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'MirageLockNotice',
  setup() {
    return {
      ...useI18n(),
    };
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-notice-inlist';
</style>
