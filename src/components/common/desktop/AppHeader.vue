<template>
  <header id="header" class="header" height="auto" dark tile app>
    <div class="header__inner">
      <div class="header__left">
        <app-nav />
      </div>
      <div class="header__right">
        <app-profile />
        <app-external-menu />
        <language />
      </div>
    </div>
    <xdraco-notification v-if="notification" :notification="notification" @on-closed="clearNotification()" />
    <app-sub-nav :subNav="hasSubNav" v-if="hasSubNav" />
  </header>
</template>

<script>
import { defineComponent, onMounted, reactive, toRefs, watch } from '@vue/composition-api';
import { useState } from 'vuex-composition-helpers/dist';

import MirageNotice from '@/components-ui/common/MirageNotice';
import AppSubNav from '@/components/common/AppSubNav';
import CurrencyNotice from '@/components/common/CurrencyNotice';
import CurrencyNotice2 from '@/components/common/CurrencyNotice2';
import AppExternalMenu from '@/components/common/desktop/AppExternalMenu';
import AppNav from '@/components/common/desktop/AppNav';
import AppProfile from '@/components/common/desktop/AppProfile';
import XdracoNotification from '@/components/common/XdracoNotification';
import Language from '@/partials/desktop/header-v2/Language';
import Profile from '@/partials/desktop/header-v2/Profile';

export default defineComponent({
  name: 'AppHeader',
  components: {
    MirageNotice,
    CurrencyNotice2,
    CurrencyNotice,
    XdracoNotification,
    AppProfile,
    AppNav,
    AppExternalMenu,
    Language,
    Profile,
    AppSubNav,
  },
  setup(_, { root }) {
    const state = reactive({
      groupNav: null,
      hasSubNav: '',
      isUiPage: false,
      notification: null,
      visibleNotice: false,
    });

    const { notifications } = useState(['notifications']);

    const getIsUiPage = (path) => {
      return path.indexOf('ui-') > -1;
    };
    const setShowDspNav = (meta) => {
      if (!meta) {
        return;
      }
      state.hasSubNav = meta.hasSubNav;
    };

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
        state.notification = filteredNotifications[0];
      }
    };

    watch(
      () => root.$route.path,
      () => {
        console.log(root.$route.path.includes('coin'));
        console.log(root.$route.path.includes('drain'));
        checkAndSetNotification();

        state.visibleNotice = root.$route.path.includes('coin') && !root.$route.path.includes('drain');
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

    watch(
      () => root.$route,
      (to) => {
        setShowDspNav(to.meta);
      },
    );

    onMounted(() => {
      setShowDspNav(root.$route.meta);
    });

    return {
      ...toRefs(state),
      getIsUiPage,
      setShowDspNav,
      clearNotification,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/partials/header-v2/header';
</style>
