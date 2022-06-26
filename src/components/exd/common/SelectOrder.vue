<template></template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'SelectOrder',
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
    onClickSelect() {
      this.$emit('update');
    },
  },
  beforeMount() {
    this.bindSelectedValue();
  },
});
</script>
<style lang="scss"></style>
