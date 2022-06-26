<template>
  <v-menu attach="#app .header" content-class="profile" origin="top right" nudge-top="-10" nudge-right="-198" offset-y offset-x>
    <template v-slot:activator="{ on, attrs }">
      <!-- Before Login -->
      <button type="button" class="btn-header account" data-get-activity="false" v-bind="attrs" v-on="on" v-if="!accessToken" @click="wemixLogin">
        My Account
      </button>

      <!-- After Login -->
      <template v-else>
        <!-- 사용자의 activity가 발생한 경우 data-get-activity="true" 어트리뷰트 설정 -->
        <button
          type="button"
          class="btn-header account"
          data-get-activity="true"
          v-bind="attrs"
          v-on="on"
          v-if="exist === 1 && represent && represent.characterName"
        >
          <character-class-thumb :character-class="represent.class" />
        </button>

        <button type="button" class="btn-login" data-has-represent="false" v-bind="attrs" v-on="on" v-else>
          <span class="thumbs">
            <img src="@/assets/img/common/profile/thumb-no-character.webp" width="32" alt="" />
          </span>
        </button>
      </template>
    </template>
    <v-list class="dropdown">
      <v-list-item-group class="dropdown__list" color="primary">
        <template v-if="dracoAccessToken">
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
  setup(_, { root }) {
    const { accessToken, dracoAccessToken } = useState(['accessToken', 'dracoAccessToken']);
    const { setOpenLogin, setOpenDracoLogin } = useMutations(['setOpenLogin', 'setOpenDracoLogin']);
    const { logOut } = useActions(['logOut']);

    const { exist, open, active, represent } = useAccountState(['exist', 'open', 'active', 'represent']);
    const { setOpen, setActive } = useAccountMutations(['setOpen', 'setActive']);

    const { wemixLogin } = useWemixLogin(root.$wemix);

    const openAccountModal = (tabIdx) => {
      setActive(tabIdx);
      setOpen(true);
    };

    return {
      ...useI18n(),
      accessToken,
      dracoAccessToken,
      setOpenLogin,
      setOpenDracoLogin,
      logOut,
      openAccountModal,
      exist,
      represent,
      wemixLogin,
    };
  },
});
</script>
<style lang="scss"></style>
