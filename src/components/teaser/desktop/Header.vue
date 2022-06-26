<template>
  <v-app-bar id="header" class="header" height="auto" dark tile elevate-on-scroll app>
    <!-- 네비게이션 -->
    <Nav></Nav>
  </v-app-bar>
</template>

<script>
import Nav from '@/components/teaser/desktop/Nav';

export default {
  components: {
    Nav,
  },
  data: () => ({
    groupNav: null,
  }),
};
</script>

<style lang="scss"></style>
