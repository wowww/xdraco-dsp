<template>
  <div class="item-info" :data-item-type="`grade-${item.grade}`">
    <item-icon
      :grade="item.grade"
      :img-path="item.imgPath || item.itemPath"
      :name="item.itemName || item.name"
      :unique-no="`${item.uniqueNo || ''}`"
    />
    <div class="item-desc" v-if="showType !== 'itemonly'">
      <div class="category">
        <span :class="`grade-${item.grade}`" v-if="item.grade > 0">
          <template v-if="item.grade == 5">LEGENDARY</template>
          <template v-else-if="item.grade == 4">EPIC</template>
          <template v-else-if="item.grade == 3">RARE</template>
          <template v-else-if="item.grade == 2">UNCOMMON</template>
        </span>
        <span class="tire">TIER {{ Number(item.tier) | roman }}</span>
      </div>
      <h4 class="item-name" @click="goDetailPage">
        {{ item.itemName || item.name || '' }}<em v-if="showEnhance && Number(item.enhance) > 0">+{{ item.enhance }}</em>
      </h4>
      <h5 class="sncode" v-if="item.uniqueNo">{{ t('w.exd.unique.no.with-value', [item.uniqueNo || '-']) }}</h5>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, ref } from '@vue/composition-api';
import ItemIcon from '@/components/exd/common/ItemIcon';
import { useItemInfo } from '@/composables/exchange';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'ItemInfo',
  components: { ItemIcon },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    showEnhance: {
      type: Boolean,
      default: true,
    },
    showType: {
      type: String,
      required: false,
      default: () => 'itemall',
    },
    useLink: {
      type: Boolean,
      default: false,
    },
    tradeUID: {
      type: String,
    },
    hideUniqueNo: {
      type: Boolean,
      default: false,
    },
    useInfo: {
      type: Boolean,
      default: false,
    },
  },
  setup({ item, useLink, tradeUID }, { root }) {
    const goDetailPage = () => {
      if (useLink && tradeUID) {
        root.$router.push(`/exd/item/${tradeUID}`);
      }
    };

    return {
      ...useI18n(),
      goDetailPage,
    };
  },
});
</script>

<style lang="scss"></style>
