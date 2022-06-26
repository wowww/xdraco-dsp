<template>
  <v-select
    class="select-filter orderby"
    v-model="value"
    :attach="attach"
    :items="items"
    :menu-props="{ bottom: true, offsetY: true, contentClass: 'select-filter-layer' }"
    :placeholder="placeholder"
    item-text="title"
    item-value="abc"
    persistent-hint
    return-object
    single-line
    dark
    dense
    outlined
    @change="$emit('update:selectedValue', value)"
  ></v-select>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'SelectOrder',
  props: {
    attach: {
      type: String,
      required: false,
      // default: () => '#wrapFilterList .v-select--is-menu-active',
    },
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
      type: Object,
      required: false,
    },
  },
  data: () => ({
    value: {},
  }),
  methods: {
    bindSelectedValue() {
      if (!this.selectedValue) {
        return;
      }
      this.value = this.selectedValue;
    },
  },
  beforeMount() {
    this.bindSelectedValue();
  },
});
</script>
<style lang="scss"></style>
