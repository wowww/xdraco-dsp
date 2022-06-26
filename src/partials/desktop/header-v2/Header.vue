<template>
  <!-- <v-app-bar id="header" class="header" height="auto" dark tile app> -->
  <header id="header" class="header" height="auto" dark tile app>
    <div class="header__inner">
      <div class="header__left">
        <Nav />
      </div>
      <div class="header__right">
        <profile />
        <extra-menu />
        <language />
      </div>
    </div>
    <dsp-nav :subNav="hasSubNav" v-if="hasSubNav" />
  </header>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Nav from '@/partials/desktop/header-v2/Nav';
import Language from '@/partials/desktop/header-v2/Language';
import Profile from '@/partials/desktop/header-v2/Profile';
import ExtraMenu from '@/partials/desktop/header-v2/ExtraMenu';
import DspNav from '@/components/common/AppSubNav';

export default defineComponent({
  name: 'Header',
  components: {
    Nav,
    Language,
    Profile,
    ExtraMenu,
    DspNav,
  },
  data: () => ({
    groupNav: null,
    hasSubNav: '',
    isUiPage: false,
  }),
  watch: {
    // 라우트가 변경되면 메소드를 다시 호출됩니다.
    $route(to) {
      console.log(`header route : ${to.path} ${to.meta.hasSubNav}`);
      this.setShowDspNav(to.meta);
    },
  },
  methods: {
    getIsUiPage(path) {
      return path.indexOf('ui-') > -1;
    },
    setShowDspNav(meta) {
      if (!meta) {
        return;
      }
      this.hasSubNav = meta.hasSubNav;
    },
  },
  mounted() {
    this.setShowDspNav(this.$route.meta);
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/partials/header-v2/header';
</style>
