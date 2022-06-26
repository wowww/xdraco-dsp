<template>
  <div class="filter-check" @click="change">
    <img class="filter-check-img" v-if="filter.uniqueFlag === 0" src="@/assets/img/common/ico-check-off.webp" alt="" />
    <img class="filter-check-img" v-else src="@/assets/img/common/ico-check-on.webp" alt="" />
    <span class="filter-check-label">{{ t('w.exd.collectible') }}</span>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';

const { useState, useMutations } = createNamespacedHelpers('search');

export default defineComponent({
  name: 'ListUniqueFilter',
  props: {
    recently: {
      type: Boolean,
      default: false,
    },
  },
  setup({ recently }) {
    const { filter } = useState(['filter']);
    const { setFilter } = useMutations(['setFilter']);

    const { t } = useI18n();

    const change = () => {
      const changedFilter = { ...filter.value };
      changedFilter.uniqueFlag = filter.value.uniqueFlag === 0 ? 1 : 0;

      setFilter(changedFilter);
    };

    return {
      t,
      filter,
      change,
    };
  },
});
</script>

<style scoped></style>
