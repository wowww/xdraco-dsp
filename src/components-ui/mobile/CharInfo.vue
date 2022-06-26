<template>
  <div class="char-info">
    <div class="thumb">
      <!-- profile-arbalist.webp -->
      <!-- profile-warrior.webp -->
      <!-- profile-sorcerer.webp -->
      <!-- profile-taoist.webp -->
      <!-- profile-lancer.webp -->
      <img :src="require('@' + '/assets/img/mobile/popup/profile-' + character + '.webp')" width="48" :alt="character" />
    </div>
    <div class="info">
      <strong class="nick">{{ name }}</strong>
      <span class="server" v-if="server !== ''">{{ server }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'CharacterInfo',
  props: {
    character: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    server: {
      type: String,
      required: true,
    },
  },
  data: () => ({}),
  created() {
    // console.log(this.server); // undefined;
  },
});
</script>
<style lang="scss"></style>
