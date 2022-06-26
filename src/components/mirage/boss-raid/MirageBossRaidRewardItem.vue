<template>
  <div class="item-info" :data-item-type="`grade-${item ? item.grade : '2'}`">
    <item-icon
      v-if="item"
      :grade="item.grade"
      :img-path="item.imgPath || item.itemPath"
      :name="item.itemName || item.name"
      :unique-no="`${item.uniqueNo || ''}`"
    />
    <div class="item__layer" v-else-if="itemIdx == '0'">
      <span class="by-what draco"></span>
      <div class="wrap-item">
        <img src="@/assets/img/common/mirage-playbook/img-mirage-scroll.webp" alt="mirage scroll" />
      </div>
    </div>
    <div class="item-desc" v-if="!hideLabel && item">
      <div class="item-category">{{ t(`w.exd.item-type.${item.itemType}`, [item.class > 0 ? $t(`w.rounds.item.class.${item.class}`) : '']) }}</div>
      <div class="item-name">{{ item.itemName }}</div>
    </div>
    <div class="item-desc" v-else-if="!hideLabel && fallbackItem">
      <div class="item-category">{{ fallbackItem.category }}</div>
      <div class="item-name">{{ fallbackItem.itemName }}</div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs } from '@vue/composition-api';
import ItemIcon from '@/components/exd/common/ItemIcon';
import { useState } from 'vuex-composition-helpers/dist';
import { useMirageStore } from '@/composables/mirage';
import { computed } from '@vue/composition-api/dist/vue-composition-api';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'MirageBossRaidRewardItem',
  components: { ItemIcon },
  props: {
    itemIdx: {
      type: String,
      default: '0',
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
    fallbackItem: {
      type: Object,
      default: null,
    },
  },
  setup({ itemIdx }, { root }) {
    const { $dracoWebApi } = root;
    const state = reactive({
      loading: false,
    });

    const { locale } = useState(['locale']);
    const { useMirageState, useMirageActions } = useMirageStore();
    const { items } = useMirageState(['items']);
    const { fetchItem } = useMirageActions(['fetchItem']);

    const item = computed(() => {
      return items.value.find((i) => i.itemID === itemIdx);
    });

    onMounted(() => {
      fetchItem(itemIdx);
    });

    return {
      ...useI18n(),
      ...toRefs(state),
      item,
    };
  },
});
</script>

<style scoped></style>
