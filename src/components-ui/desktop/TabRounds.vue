<template>
  <v-tabs class="tab-rounds">
    <v-tab>
      <span>Ongoing</span>
      <span class="count">60</span>
    </v-tab>
    <v-tab>
      <span>Upcoming</span>
      <span class="count">30</span>
    </v-tab>
    <v-tab>
      <span>Closed</span>
      <span class="count">10</span>
    </v-tab>
    <v-tab>
      <span>My Rounds</span>
      <span class="count">5</span>
    </v-tab>
  </v-tabs>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'TabRounds',
  props: {
    //
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
  mounted() {
    //
  },
  beforeUpdate() {
    // console.log('beforeUpdate');
  },
  updated() {
    // console.log('updated');
  },
});
</script>

<style lang="scss"></style>
