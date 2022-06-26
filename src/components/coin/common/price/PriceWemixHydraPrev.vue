<template>
  <v-carousel-item>
    <span title="WEMIX">{{ hydraWemixPrev | currency(4) }} WEMIX</span>
  </v-carousel-item>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useGetters } from 'vuex-composition-helpers';

export default defineComponent({
  name: 'PriceWemixHydraPrev',
  setup() {
    const { hydraWemixPrev } = useGetters(['hydraWemixPrev']);

    return {
      hydraWemixPrev,
    };
  },
});
</script>

<style scoped></style>
