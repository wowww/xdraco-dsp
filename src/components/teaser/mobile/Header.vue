<template>
  <v-card tile class="mx-auto overflow-hidden">
    <v-app-bar height="64" color="transparent" dark tile elevate-on-scroll app>
      <div class="left">
        <v-btn class="btn-gnb-menu" icon elevation="0" @click="isOpenNav = !isOpenNav"></v-btn>
        <h1 class="header-bi" :class="this.currentRouterName">{{ this.currentRouterName }}</h1>
      </div>
      <div class="right">
        <v-dialog content-id="dialogPlaynow" content-class="dialog-playnow" v-model="dialogPlayNow" max-width="661" fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" class="btn-header download" v-bind="attrs" v-on="on">PLAY NOW!</button>
          </template>

          <h3 class="title">PLAY NOW!</h3>
          <v-btn class="btn-close" @click="dialogPlayNow = false" fab plain small>
            <v-icon color="#fff" size="32">mdi-close</v-icon>
          </v-btn>
          <div class="inner">
            <div class="content">
              <h4 class="sub-title">Mobile Download</h4>
              <div class="wrap-link">
                <a href="https://play.google.com/store/apps/details?id=com.wemade.mir4global&gl=US" class="link google" target="_blank">
                  <span>Google Play</span>
                </a>
                <a href="https://apps.apple.com/us/app/mir4/id1566500955" class="link apple" target="_blank">
                  <span>App Store</span>
                </a>
                <a href="https://galaxystore.samsung.com/detail/com.wemade.mir4galaxyglobal" class="link galaxy" target="_blank">
                  <span>Galaxy Store</span>
                </a>
              </div>
              <h4 class="sub-title">Desktop Download</h4>
              <div class="wrap-link">
                <a href="https://mir4global.com" class="link windows" target="_blank">Windows</a>
                <a href="https://store.steampowered.com/app/1623660/MIR4" class="link steam" target="_blank">STEAM</a>
              </div>
            </div>
          </div>
        </v-dialog>
        <a href="https://discord.gg/mir4global" class="btn-header discord" target="_blank">Discord</a>
        <v-btn class="btn-gnb-language" icon elevation="0" @click="toggleSetLanguage(true)"></v-btn>
      </div>
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
      <v-btn icon elevation="0" color="white" class="btn-close" @click="toggleSetLanguage(false)">
        <v-icon large>mdi-close</v-icon>
      </v-btn>
      <div class="btn-gnb-language">
        <span class="v-btn__content"></span>
      </div>

      <Language></Language>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { mapGetters, mapMutations } from 'vuex';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Nav from '@/components/teaser/mobile/Nav';
import Language from '@/components/teaser/mobile/Language';

export default defineComponent({
  name: 'Header',
  components: {
    Nav,
    Language,
  },
  data: () => ({
    currentRouterName: 'XDRACO',
    isOpenNav: false,
    groupNav: null,
    selectLanguage: false,

    // for dialog
    dialogPlayNow: false,
  }),
  mounted() {
    this.lockLanguageElem = document.querySelector('.select-language .v-navigation-drawer__content');
  },
  computed: {
    ...mapGetters(['isOpenSelectLanguage']),
  },
  watch: {
    isOpenSelectLanguage(current) {
      this.selectLanguage = current;
    },
    // 라우트가 변경되면 메소드를 다시 호출됩니다.
    $route: 'getRouterInfo',
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
    getRouterInfo(to) {
      this.currentRouterName = to.name.toLowerCase();
    },
    ...mapMutations(['setIsOpenSelectLanguage']),
  },
});
</script>
