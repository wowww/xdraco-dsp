<template>
  <v-app-bar id="header" class="header" height="auto" dark tile app>
    <Nav />

    <xdraco-notification v-if="notification" :notification="notification" @on-closed="clearNotification()" />

    <dsp-nav :subNav="hasSubNav" v-if="hasSubNav" />
  </v-app-bar>
</template>

<script>
import { defineComponent, reactive, watch, computed, toRefs, onMounted } from '@vue/composition-api';
import { useState } from 'vuex-composition-helpers';
import Nav from '@/partials/desktop/Nav';
import DspNav from '@/components/common/AppSubNav';
import XdracoNotification from '@/components/common/XdracoNotification';

export default defineComponent({
  name: 'Header',
  components: {
    XdracoNotification,
    Nav,
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
        state.notification = filteredNotifications[0];
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
@import '~@/assets/sass/desktop/partials/header-v1/header';
</style>
