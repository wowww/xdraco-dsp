<template>
  <div class="item-transprice">
    <span>{{ itemTranstitle }}</span>
    <div class="wrap-price">
      <div class="price" v-if="showType == 'normal'">
        <strong class="ico-darco ico-sm add-inside">{{ itemDraco }}</strong>
        <span class="rate">$ {{ itemRate }}</span>
      </div>
      <div class="price" v-if="showType == 'monthly'">
        <strong class="month">{{ itemDraco }}</strong>
      </div>
      <time :date="itemDate" v-if="showType == 'normal'">{{ itemDate }}</time>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'ItemTransaction',
  props: {
    itemTranstitle: {
      type: String,
      required: false,
    },
    itemDraco: {
      type: String,
      required: false,
    },
    itemRate: {
      type: String,
      required: false,
    },
    itemDate: {
      type: String,
      required: false,
      default: () => '',
    },
    showType: {
      type: String,
      required: false,
    },
  },
  data: () => ({
    // number: 0,
  }),
  methods: {},
  mounted() {},
});
</script>

<style lang="scss"></style>
