<template>
  <!-- attach 어트리뷰트 제거해주세요 -->
  <v-select
    class="select-filter"
    @change="$emit('update:selectedValue', $event !== 'All' ? $event : '')"
    @click="handlerClick"
    :value="selectedValue"
    :placeholder="placeholder"
    :items="items"
    :menu-props="{ bottom: true, offsetY: true, contentClass: 'select-filter-layer' }"
    dark
    dense
    outlined
  >
  </v-select>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'SelectFilter',
  props: {
    placeholder: {
      type: String,
      required: false,
    },
    items: {
      type: Array,
      required: false,
    },
    menuProps: {
      type: Object,
      required: false,
      default() {
        return { bottom: true, offsetY: true };
      },
    },
    selectedValue: {
      type: String,
      required: true,
      default() {
        return '';
      },
    },
  },
  methods: {
    handlerClick() {
      this.$emit('click');
    },
  },
});
</script>
<style lang="scss"></style>
