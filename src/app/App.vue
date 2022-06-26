<template>
  <v-app id="app">
    <template v-if="!$route.meta.hideHeader">
      <mobile-header v-if="md.mobile()" />
      <desktop-header v-else />
    </template>

    <v-container id="container" fluid v-if="!$route.meta.hideContainer">
      <keep-alive :include="['NftTradeHistory', 'Exd', 'ExdList']">
        <router-view />
      </keep-alive>
      <button-top />
      <modal-wemix-login />
      <modal-login />
      <modal-account />
      <modal-common />
    </v-container>

    <router-view v-if="$route.meta.hideContainer" />
  </v-app>
</template>

<script>
import { defineComponent, onMounted } from '@vue/composition-api';
import Headroom from 'headroom.js/dist/headroom';
import MobileDetect from 'mobile-detect';
import { mapActions, mapState } from 'vuex';
import { useActions } from 'vuex-composition-helpers';

import AppFooter from '@/components/common/AppFooter';
import ButtonTop from '@/components/common/ButtonTop';
import DesktopHeader from '@/components/common/desktop/AppHeader';
import ModalAccount from '@/components/common/modal/ModalAccount';
import ModalCommon from '@/components/common/modal/ModalCommon';
import ModalLogin from '@/components/common/modal/ModalLogin';
import ModalWemixLogin from '@/components/common/modal/ModalWemixLogin';
import MobileHeader from '@/partials/mobile/header-v1/Header';

export default defineComponent({
  name: 'App',
  components: {
    AppFooter,
    ModalCommon,
    ModalAccount,
    ModalLogin,
    ModalWemixLogin,
    ButtonTop,
    MobileHeader,
    DesktopHeader,
  },
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
    drawer: false,
    group: null,

    // for Dialog
    dialogm1: '',
    dialog: false,
    lastScrollTop: 0,
    agree: false,
  }),
  mounted() {
    // window.addEventListener('scroll', this.handleScroll);
    // window.addEventListener('wheel', this.handleWheel);
    // this.postLogin();
    this.setHeadroom();
    // this.fetchWalletAddress();
    console.log(this.accessToken, this['account/represent']);
    if (this.accessToken) {
      this.$store.dispatch('account/fetchRepCharacter');
    }

    // setTimeout(() => {
    //   this.$store.commit('setOpenTermsOfUse', true);
    // }, 5000);
  },
  beforeDestroy() {
    // window.removeEventListener('scroll', this.handleScroll);
    // window.removeEventListener('wheel', this.handleWheel);
  },
  computed: {
    ...mapState(['accessToken', 'account/represent', 'openTermsOfUse']),
    optionsHeadroom() {
      return {
        // vertical offset in px before element is first unpinned
        // offset: 150,

        // or you can specify offset individually for up/down scroll
        offset: {
          up: 100,
          down: this.md.mobile() ? 100 : 130,
        },

        // scroll tolerance in px before state changes
        // tolerance: 0,

        // or you can specify tolerance individually for up/down scroll
        // tolerance: {
        //   up: 5,
        //   down: 0,
        // },

        // css classes to apply
        // classes: {
        //   // when element is initialised
        //   initial: 'header--init-pinned',

        //   // when scrolling up
        //   pinned: 'header--pinned',

        //   // when scrolling down
        //   unpinned: 'header--unpinned',
        // },
      };
    },
  },
  watch: {
    group() {
      this.drawer = false;
    },
    openTermsOfUse(v) {
      if (v) {
        this.$router.push('/mirage');
      }
    },
  },
  methods: {
    setHeadroom() {
      if (!document.querySelector('#header')) {
        return;
      }
      const target = document.querySelector('#header');
      this.headroom = new Headroom(target, this.optionsHeadroom);
      this.headroom.init();
    },
    // eslint-disable-next-line
    handleWheel(ev) {
      if (ev.deltaY === undefined) {
        return false;
      }
    },
    handleScroll() {
      const scrollTop = window.scrollY;
      const isPassHeaderTop = scrollTop >= document.querySelector('#gnb').offsetHeight;

      if (scrollTop > this.lastScrollTop && isPassHeaderTop) {
        // When DownScroll
      } else {
        // When UpScroll
      }

      // For Mobile or negative scrolling
      this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    },
    ...mapActions(['postLogin', 'fetchWalletAddress']),
  },
  created() {
    setTimeout(() => {
      if (window.navigator.platform.toLowerCase().indexOf('win') > -1) {
        document.documentElement.classList.add('platform-windows');
      }
    }, 10);

    if (this.md.mobile()) {
      document.documentElement.classList.add('is-mobile');
    } else {
      document.documentElement.classList.add('is-desktop');
    }

    this.$store.dispatch('exd/fetchPrice');
    this.$store.dispatch('hsp/fetchPrice');
  },
  beforeMount: () => {
    console.log('beforeMount');
    setTimeout(() => {
      document.documentElement.classList.add('init-app');
    }, 10);
  },
  setup(_, { root }) {
    const { fetchTwitterNotification } = useActions(['fetchTwitterNotification']);
    onMounted(() => {
      fetchTwitterNotification();
    });
  },
});
</script>
