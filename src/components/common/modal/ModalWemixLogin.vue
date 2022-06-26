<template>
  <v-dialog content-class="wemix-login" v-model="openLogin" :fullscreen="!!md.mobile()" scrollable @click:outside="setOpenLogin(false)">
    <iframe class="draco-wemix-login-popup" :src="`${url}/run`" frameborder="0" ref="iframe" />
  </v-dialog>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, reactive, ref, toRefs, watch } from '@vue/composition-api';
import { useActions, useState, useMutations } from 'vuex-composition-helpers/dist';
import MobileDetect from 'mobile-detect';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default defineComponent({
  name: 'ModalWemixLogin',
  setup() {
    const iframe = ref(null);
    const state = reactive({
      md: new MobileDetect(window.navigator.userAgent),
      url: `${process.env.VUE_APP_WEMIX_AUTH_ENTRY_POINT}`,
      listenerCount: 0,
      listener: null,
    });

    const { openLogin } = useState(['openLogin']);
    const { setOpenLogin, setAccessToken, setOpenEvent } = useMutations(['setOpenLogin', 'setAccessToken', 'setOpenEvent']);
    const { postLogin, fetchBalance } = useActions(['postLogin', 'fetchBalance']);

    const authListener = (e) => {
      if (e.origin === state.url) {
        if (e.data.Result === 0) {
          const token = e.data.m_AccessToken;
          setAccessToken(token);
          postLogin();
          fetchBalance();
          setOpenLogin(false);
          setOpenEvent(true);
        } else if (e.data.name === '_closeModal') {
          setOpenLogin(false);
        }
      }
    };

    watch(openLogin, (currentOpenLogin) => {
      if (state.md.mobile()) {
        // console.log(currentOpenLogin, iframe);
        if (currentOpenLogin) {
          disableBodyScroll(iframe.value);
        } else {
          enableBodyScroll(iframe.value);
        }
      }
    });

    onMounted(() => {
      window.addEventListener('message', authListener);
    });

    onUnmounted(() => {
      if (iframe) {
        iframe.value.style.display = 'none';
        iframe.value.remove();
      }

      window.removeEventListener('message', authListener);
    });

    return {
      iframe,
      ...toRefs(state),
      openLogin,
      setOpenLogin,
      setOpenEvent,
      setAccessToken,
      postLogin,
      fetchBalance,
    };
  },
});
</script>

<style lang="scss">
.draco-wemix-login-popup {
  width: 100%;
  height: 100%;
}
</style>
