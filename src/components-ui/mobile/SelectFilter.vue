<template>
  <v-select
    class="select-filter"
    @change="$emit('update:selectedValue', $event !== 'All' ? $event : '')"
    @click="handlerClick"
    :attach="attachTarget"
    :value="selectedValue"
    :placeholder="placeholder"
    :items="items"
    :menu-props="{ bottom: true, offsetY: true, contentClass: 'layer-filter' }"
    dark
    dense
    outlined
  ></v-select>
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
      required: true,
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
      required: false,
      default() {
        return '';
      },
    },
    attachTarget: {
      type: String,
      required: false,
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
