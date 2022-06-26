<template>
  <v-menu attach="#header" content-class="profile-header" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <!-- Before Login -->
      <!-- <button type="button" class="btn-login" @click="wemixLogin">
        <span class="text">LOG IN</span>
        <span class="thumbs"></span>
      </button> -->

      <!-- After Login -->
      <button type="button" class="btn-login" data-get-activity="true" v-bind="attrs" v-on="on">
        <!-- <span class="text" v-if="exist === 1 && represent && represent.characterName">{{ represent.characterName }}</span>
        <span class="text" v-else>{{ `${walletAddress.slice(0, 6)}...${walletAddress.slice(-6)}` }}</span> -->
        <span class="text">abcdefgsd</span>
        <span class="thumbs">
          <!-- <character-class-thumb v-if="represent.characterName" :character-class="represent.class" :size="32" /> -->
          <character-class-thumb :character-class="1" :size="32" />
        </span>
      </button>
      <!-- <button type="button" class="btn-login" data-get-activity="true" v-bind="attrs" v-on="on" v-else>
        <span class="text">MyCharName</span>
        <span class="thumbs" v-if="represent">
          <character-class-thumb :character-class="represent.class" />
        </span>
      </button> -->

      <!-- After Login (has-represent: false) -->
      <!-- <button type="button" class="btn-login" data-has-represent="false" v-bind="attrs">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <span class="text" v-bind="attrs" v-on="on">0xeb98...b94a8e</span>
          </template>
          <span>0xeb98abcdabcdabcdabcdeab94a8e</span>
        </v-tooltip>
        <span class="thumbs">
          <img src="@/assets/img/common/profile/thumb-no-character.webp" width="32" alt="" />
        </span>
      </button> -->
    </template>

    <v-list class="profile-header__list">
      <v-list-item-group color="primary">
        <!-- <template v-if="dracoAccessToken"> -->
        <template>
          <!--
          <v-list-item to="/mywarehouse">
            <span class="text">{{ t('w.rounds.my.inventory') }}</span>
          </v-list-item>
          -->
          <v-list-item @click="openAccountModal(0)">
            <span class="text">{{ t('w.rounds.my.character') }}</span>
          </v-list-item>
          <v-list-item @click="openAccountModal(1)">
            <span class="text">{{ t('w.rounds.my.wallet') }}</span>
          </v-list-item>
          <v-list-item @click="openAccountModal(2)">
            <span class="text">{{ t('w.rounds.activity') }}</span>
          </v-list-item>
          <v-list-item class="emp" @click="logOut">
            <span class="text">Logout</span>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import { createNamespacedHelpers, useActions, useState, useMutations } from 'vuex-composition-helpers/dist';
import { defineComponent } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';
import CharacterClassThumb from '@/components/common/CharacterClassThumb';
import { useWemixLogin } from '@/composables/round';

const { useState: useAccountState, useMutations: useAccountMutations } = createNamespacedHelpers('account');

export default defineComponent({
  name: 'Profile',
  components: {
    CharacterClassThumb,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    isShowLoginLayer: false,
  }),
  setup(_, { root }) {
    const { accessToken, dracoAccessToken, walletAddress } = useState(['accessToken', 'dracoAccessToken', 'walletAddress']);
    const { setOpenLogin, setOpenDracoLogin } = useMutations(['setOpenLogin', 'setOpenDracoLogin']);
    const { logOut } = useActions(['logOut']);
    const { wemixLogin } = useWemixLogin(root.$wemix);

    const { open, active, represent, exist } = useAccountState(['open', 'active', 'represent', 'exist']);
    const { setOpen, setActive } = useAccountMutations(['setOpen', 'setActive']);

    const openAccountModal = (tabIdx) => {
      setActive(tabIdx);
      setOpen(true);
    };

    return {
      ...useI18n(),
      accessToken,
      dracoAccessToken,
      walletAddress,
      setOpenLogin,
      setOpenDracoLogin,
      logOut,
      openAccountModal,
      represent,
      exist,
      wemixLogin,
    };
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/desktop/partials/header-v2/profile';
</style>
