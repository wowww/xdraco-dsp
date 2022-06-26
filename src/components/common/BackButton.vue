<template>
  <div class="function">
    <a href="#" @click="back"
      ><span class="backtolist">{{ t('t.exd.back') }}</span></a
    >
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';

const { useState: useExdState } = createNamespacedHelpers('exd');

export default defineComponent({
  name: 'BackButton',
  setup(props, { root }) {
    const { $route, $router } = root;
    const { afterLogin } = useState(['afterLogin']);
    const { items } = useExdState(['items']);
    const back = (e) => {
      e.preventDefault();

      if (window.history.length - 1 > 0) {
        $router.back();
      } else {
        if ($route.name === 'ExdTradeItem' && items.value.length === 0) {
          $router.push('/exd/list');
          return;
        }

        if ($route.name === 'CollectibleItem' && items.value.length === 0) {
          $router.push('/collectibles/list');
          return;
        }

        $router.push('/');
      }
    };

    return {
      ...useI18n(),
      back,
    };
  },
});
</script>

<style scoped></style>
