<template>
  <div class="filter-check" :class="{ 'filter-check--checked': selectedValue }" @click="$emit('update:selectedValue', !selectedValue)">
    <img class="filter-check-img" v-if="!selectedValue" src="@/assets/img/common/ico-check-off.webp" alt="" />
    <img class="filter-check-img" v-if="selectedValue" src="@/assets/img/common/ico-check-on.webp" alt="" />
    <span class="filter-check-label">{{ label }}</span>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'SelectCheckFilter',
  props: {
    label: {
      type: String,
      required: false,
    },
    selectedValue: {
      type: Boolean,
      required: false,
    },
  },
  data: () => ({
    value: false,
  }),
  methods: {
    bindSelectedValue() {
      this.value = this.selectedValue;
    },
  },
  beforeMount() {
    this.bindSelectedValue();
  },
});
</script>
