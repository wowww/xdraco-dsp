<template>
  <div :class="{ 'login no-gutter': isMobile, login__box: !isMobile }">
    <p class="message">{{ $t('s.price.login.message') }}</p>
    <!-- <a class="btn-login" @click.stop="dialog = true">
      <img v-if="md.mobile()" src="@/assets/img/desktop/price/bi-wemix.webp" width="119" alt="WEMIX" />
      <img v-else src="@/assets/img/mobile/price/bi-wemix.webp" width="119" alt="WEMIX" />
      <span>Login</span>
    </a> -->
    <button type="button" class="btn-wemix-login" @click.stop="dialog = true">LOGIN</button>
    <v-dialog content-class="wemix-login" v-model="dialog" :fullscreen="isMobile" scrollable>
      <iframe class="draco-wemix-login-popup" :src="`${url}/run`" frameborder="0" />
    </v-dialog>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import MobileDetect from 'mobile-detect';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default {
  name: 'WemixLogin',
  data: () => ({
    dialog: null,
    md: new MobileDetect(window.navigator.userAgent),
    url: `${process.env.VUE_APP_WEMIX_AUTH_ENTRY_POINT}`,
    iframe: null,
    listenerCount: 0,
    listener: null,
  }),
  computed: {
    ...mapGetters(['accessToken']),
    isMobile() {
      return this.md.mobile() !== null;
    },
    authUrl() {
      const redirectUri = `${window.location.protocol}//${window.location.host}${this.$router.currentRoute.path}`;
      return `${this.url}${redirectUri}`;
    },
  },
  methods: {
    ...mapMutations(['setAccessToken']),
    ...mapActions(['postLogin', 'fetchBalance']),
    loginPopup() {
      if (this.iframe === null || this.iframe === undefined) {
        const auth = document.createElement('iframe');

        this.iframe = auth;
        auth.className = 'draco-wemix-login-popup';
        auth.src = `${process.env.VUE_APP_WEMIX_AUTH_ENTRY_POINT}/run`;
        auth.style.width = '100%';
        auth.style.minWidth = '100%';
        auth.style.maxWidth = '100%';
        auth.style.height = '100%';
        auth.style.borderStyle = 'none';
        document.body.appendChild(auth);
        if (this.listenerCount === 0) {
          window.addEventListener('message', this.authListener);
          console.log('ready to listen message');
        }
        this.listenerCount += 1;
      } else {
        this.iframe.style.display = 'block';
      }

      disableBodyScroll(this.iframe);
    },
    authListener(e) {
      if (e.origin === this.url) {
        if (e.data.Result === 0) {
          const token = e.data.m_AccessToken;
          this.setAccessToken(token);
          this.postLogin();
          this.fetchBalance();
        } else if (e.data.name === '_closeModal') {
          this.dialog = false;
          enableBodyScroll(this.iframe);
        }
      }
    },
  },
  mounted() {
    window.addEventListener('message', this.authListener);
  },
  destroyed() {
    if (this.iframe) {
      this.iframe.style.display = 'none';
      this.iframe.remove();
    }
    // if (this.listenerCount > 0) {
    window.removeEventListener('message', this.authListener);
    // }
  },
};
</script>

<style lang="scss">
.draco-wemix-login-popup {
  width: 100%;
  height: 100%;
}
</style>
