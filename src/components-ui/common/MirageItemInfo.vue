<template>
  <div class="item-info" :data-item-type="`grade-${item.grade}`">
    <item-icon
      :grade="item.grade"
      :img-path="item.imgPath || item.itemPath"
      :name="item.itemName || item.name"
      :unique-no="`${item.uniqueNo || ''}`"
    />
    <div class="item-desc" v-if="showType !== 'itemonly'">
      <div class="item-category">{{ item.category }}</div>
      <div class="item-name">{{ item.itemName }}</div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from '@vue/composition-api';
import ItemIcon from '@/components/exd/common/ItemIcon';

export default defineComponent({
  name: 'MirageItemInfo',
  components: { ItemIcon },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    showType: {
      type: String,
      required: false,
      default: () => 'itemall',
    },
  },
});
</script>

<style lang="scss"></style>
