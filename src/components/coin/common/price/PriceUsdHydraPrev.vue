<template>
  <v-carousel-item>
    <span title="USD">${{ hydraUsdPrev | currency(4) }} USD</span>
  </v-carousel-item>
</template>

<script>
import { useGetters } from 'vuex-composition-helpers';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'PriceUsdHydraPrev',
  setup() {
    const { hydraUsdPrev } = useGetters(['hydraUsdPrev']);
    return {
      hydraUsdPrev,
    };
  },
});
</script>

<style scoped></style>
