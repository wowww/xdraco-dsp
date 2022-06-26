<template>
  <!-- <v-menu attach="#header" content-class="extra-menu" :value="openNavMore" offset-y> -->
  <v-menu attach="#header" content-class="extra-menu" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <button type="button" class="btn-open-list btn-extra-menu" v-bind="attrs" v-on="on" @click="setOpenNavMore">
        <span>Toggle Nav More</span>
      </button>
    </template>
    <v-list class="extra-menu__list">
      <v-list-item-group class="" color="primary">
        <v-list-item href="https://cs.mir4global.com/customer?category=191" target="_blank">
          <span class="wrap-menu">
            <img src="@/assets/img/desktop/header-v2/icon-contact-us.svg" height="25" alt="contact us" />
            <em class="menu-string">Customer Service</em>
          </span>
        </v-list-item>
        <v-list-item href="https://mir4global.com" target="_blank">
          <span class="wrap-menu">
            <img src="@/assets/img/desktop/header-v2/bi-mir4-header.webp" height="23" alt="MIR4" />
          </span>
        </v-list-item>
        <v-list-item href="https://wemixnetwork.com" target="_blank">
          <span class="wrap-menu">
            <img src="@/assets/img/desktop/header-v2/bi-wemix.webp" height="22" alt="WEMIX" />
          </span>
        </v-list-item>
        <v-list-item href="https://discord.gg/mir4global" target="_blank">
          <span class="wrap-menu">
            <img src="@/assets/img/desktop/header-v2/bi-discord.webp" height="18" alt="Discord" />
          </span>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import { createNamespacedHelpers, useActions, useState, useMutations } from 'vuex-composition-helpers/dist';
import { defineComponent } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';

const { useState: useAccountState, useMutations: useAccountMutations } = createNamespacedHelpers('account');

export default defineComponent({
  name: 'ExtraMenu',
  components: {
    //
  },
  data: () => ({
    isDevelopment: process.env.VUE_APP_DRACO_ENV !== 'production',
  }),
  setup() {
    const { accessToken, dracoAccessToken, openNavMore } = useState(['accessToken', 'dracoAccessToken', 'openNavMore']);
    const { setOpenLogin, setOpenDracoLogin, setOpenNavMore } = useMutations(['setOpenLogin', 'setOpenDracoLogin', 'setOpenNavMore']);
    const { logOut } = useActions(['logOut']);

    const { open, active, represent } = useAccountState(['open', 'active', 'represent']);
    const { setOpen, setActive } = useAccountMutations(['setOpen', 'setActive']);

    const openAccountModal = (tabIdx) => {
      setActive(tabIdx);
      setOpen(true);
    };

    return {
      ...useI18n(),
      accessToken,
      dracoAccessToken,
      openNavMore,
      setOpenLogin,
      setOpenDracoLogin,
      setOpenNavMore,
      logOut,
      openAccountModal,
      represent,
    };
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/desktop/partials/header-v2/extra-menu';
</style>
