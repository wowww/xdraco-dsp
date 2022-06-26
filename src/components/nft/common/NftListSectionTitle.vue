<template>
  <div class="list-bar">
    <div class="list-bar__title">
      <slot />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'NftListSectionTitle',
  setup() {
    return {
      ...useI18n(),
    };
  },
});
</script>

<style scoped></style>
