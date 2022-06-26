<template>
  <div class="char-info">
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on">{{ seller.walletAddress | truncateMiddle }}</span>
      </template>
      <span>{{ seller.walletAddress }}</span>
    </v-tooltip>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import CharacterClassThumb from '@/components/common/CharacterClassThumb';

export default defineComponent({
  name: 'ItemSeller',
  components: {
    CharacterClassThumb,
  },
  props: {
    seller: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>
<style lang="scss"></style>
