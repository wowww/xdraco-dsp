<template>
  <v-card tile class="mx-auto overflow-hidden">
    <v-app-bar id="header" class="header" height="auto" color="transparent" dark tile app :class="{ 'theme-light': $route.path.includes('drain') }">
      <!-- Header Top Area -->
      <div class="header__top">
        <div class="left">
          <v-btn class="btn-gnb-menu" icon elevation="0" @click="isOpenNav = !isOpenNav"></v-btn>
          <!-- <h1 class="header-bi" :class="this.currentRouterName">{{ this.currentRouterName }}</h1> -->
          <h1 class="header-bi dsp" v-if="$route.path.includes('dsp')">DSP</h1>
          <h1 class="header-bi exd" v-else-if="$route.path.includes('exd')">EXD</h1>
          <h1 class="header-bi mir4nft" v-else-if="$route.path.includes('nft')">mir4nft</h1>
          <h1 class="header-bi collectible" v-else-if="$route.path.includes('collectible')">collectible</h1>
          <h1 class="header-bi hsp" v-else-if="$route.path.includes('hsp')">HSP</h1>
          <h1 class="header-bi mirage" v-else-if="$route.path.includes('mirage')">MIRAGE</h1>
          <h1 class="header-bi inventory" v-else-if="$route.path.includes('inventory')">inventory</h1>
          <h1 class="header-bi home" v-else>xdraco</h1>
          <div style="position: absolute; top: 8px; left: 202px">
            <NavUi v-if="isDevelopment"></NavUi>
          </div>
        </div>
        <div class="right">
          <a href="https://cs.mir4global.com/customer?category=191" class="btn-header" target="_blank">
            <img src="@/assets/img/common/ico-contact-us.svg" height="25" alt="contact us" />
          </a>
          <!-- <a href="https://discord.gg/mir4global" class="btn-header discord" target="_blank">Discord</a> -->
          <!-- <v-btn class="btn-gnb-language" icon elevation="0" @click="setIsOpenSelectLanguage(!isOpenSelectLanguage)"></v-btn> -->
          <v-btn class="btn-gnb-language" icon elevation="0" @click="toggleSetLanguage(true)"></v-btn>
          <Profile></Profile>
        </div>
      </div>

      <xdraco-notification v-if="notification" :notification="notification" @on-closed="clearNotification()" />

      <!-- Header Bottom Area -->
      <dsp-nav :subNav="hasSubNav" v-if="hasSubNav" />
    </v-app-bar>

    <!-- 네비게이션 -->
    <v-navigation-drawer v-model="isOpenNav" app>
      <v-btn icon elevation="0" color="white" class="btn-close" @click="isOpenNav = !isOpenNav">
        <v-icon large>mdi-close</v-icon>
      </v-btn>

      <Nav></Nav>
    </v-navigation-drawer>

    <!-- 언어 선택 -->
    <v-navigation-drawer class="select-language" v-model="selectLanguage" app right>
      <!-- <v-btn icon elevation="0" color="white" class="btn-close" @click="setIsOpenSelectLanguage(!isOpenSelectLanguage)"> -->
      <v-btn icon elevation="0" color="white" class="btn-close" @click="toggleSetLanguage(false)">
        <v-icon large>mdi-close</v-icon>
      </v-btn>
      <div class="btn-gnb-language">
        <span class="v-btn__content"></span>
      </div>

      <Language></Language>
      <Profile />
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { mapGetters, mapMutations } from 'vuex';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { onMounted, reactive, toRefs, watch } from '@vue/composition-api/dist/vue-composition-api';
import { useState } from 'vuex-composition-helpers';
import Nav from '@/partials/mobile/header-v1/Nav';
import Language from '@/partials/mobile/header-v1/Language';
import Profile from '@/partials/mobile/header-v1/Profile';
import NavUi from '@/partials/mobile/NavUi';
import DspNav from '@/components/common/AppSubNav';
import XdracoNotification from '@/components/common/XdracoNotification';

export default defineComponent({
  name: 'Header',
  components: {
    XdracoNotification,
    Nav,
    Language,
    Profile,
    NavUi,
    DspNav,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    hasSubNav: '',
    isUiPage: false,
    currentRouterName: 'XDRACO',
    isOpenNav: false,
    groupNav: null,
    selectLanguage: false,

    // for dialog
    dialogPlayNow: false,
    isExd: false,
    isDsp: false,
  }),
  computed: {
    ...mapGetters(['isOpenSelectLanguage']),
  },
  watch: {
    isOpenSelectLanguage(current) {
      this.selectLanguage = current;
    },
    // 라우트가 변경되면 메소드를 다시 호출됩니다.
    $route: 'forRoute',
  },
  methods: {
    toggleSetLanguage(isOpen) {
      if (isOpen === undefined) {
        isOpen = true;
      }

      if (isOpen) {
        this.setIsOpenSelectLanguage(!this.isOpenSelectLanguage);
        setTimeout(() => {
          disableBodyScroll(this.lockLanguageElem);
        }, 100);
      } else {
        this.setIsOpenSelectLanguage(!this.isOpenSelectLanguage);
        setTimeout(() => {
          enableBodyScroll(this.lockLanguageElem);
        }, 200);
      }
    },
    forRoute(to) {
      if (!to) {
        return;
      }
      const path1depth = to.path.substr(1).split('/')[0];

      // this.currentRouterName = to.name.toLowerCase();
      this.currentRouterName = path1depth;

      // this.isUiPage = this.getIsUiPage(to.fullPath);
      this.setShowDspNav(to.meta);
    },
    getIsUiPage(path) {
      return path.indexOf('ui-') > -1;
    },
    setShowDspNav(meta) {
      if (!meta) {
        return;
      }
      this.hasSubNav = meta.hasSubNav;
    },
    ...mapMutations(['setIsOpenSelectLanguage']),
  },
  mounted() {
    this.lockLanguageElem = document.querySelector('.select-language .v-navigation-drawer__content');
    this.setShowDspNav(this.$route.meta);
  },
  setup(_, { root }) {
    const state = reactive({
      notification: null,
    });
    const { notifications } = useState(['notifications']);

    const checkAndSetNotification = () => {
      if (notifications.value.length === 0) {
        state.notification = null;
      }

      const filteredNotifications = notifications.value.filter((item) => {
        if (item.id === '1509564297461960710') {
          return false;
        }

        if (localStorage.getItem(`xdraco-noti-${item.id}`)) {
          return false;
        }

        // if (!item.entities || !item.entities.hashtags) {
        //   return true;
        // }
        //
        // if (item.entities && item.entities.hashtags) {
        //   const existTags = item.entities.hashtags.filter((hashtag) => hashtag.tag.toLowerCase() === 'mir4news');
        //
        //   return existTags.length > 0;
        // }

        return true;
      });

      if (filteredNotifications.length > 0) {
        state.notification = { ...filteredNotifications[0] };
      }
    };

    watch(
      () => root.$route.path,
      () => {
        checkAndSetNotification();
      },
    );

    watch(
      () => notifications.value,
      () => {
        checkAndSetNotification();
      },
    );

    const clearNotification = () => {
      state.notification = null;

      root.$nextTick(() => {
        checkAndSetNotification();
      });
    };

    onMounted(() => {
      checkAndSetNotification();
    });

    return {
      ...toRefs(state),
      clearNotification,
    };
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/mobile/partials/header-v1/header';
</style>
