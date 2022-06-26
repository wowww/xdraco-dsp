<template>
  <v-list class="select-language__list">
    <v-list-item-group v-model="selectedItem" color="primary">
      <div class="wrap-item" v-for="(item, i) in items" :key="i">
        <v-list-item active="false" @click="selectLocale(item.code)">
          <span class="text">{{ item.text }}</span>
        </v-list-item>
      </div>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { enableBodyScroll } from 'body-scroll-lock';

export default {
  mounted() {
    this.lockLanguageElem = document.querySelector('.select-language .v-navigation-drawer__content');
  },
  data: () => ({
    expand: true,
    selectedItem: 0, // 선택된 항목

    items: [
      {
        code: 'en',
        text: 'English',
      },
      {
        code: 'zh-Hans',
        text: '中文 简体',
      },
      {
        code: 'zh-Hant',
        text: '中文 繁體',
      },
      {
        code: 'ja',
        text: '日本語',
      },
      {
        code: 'th',
        text: 'ไทย',
      },
      {
        code: 'id',
        text: 'Indonesia',
      },
      {
        code: 'vi',
        text: 'Tiếng Việt',
      },
      {
        code: 'de',
        text: 'Deutsche',
      },
      {
        code: 'es',
        text: 'Español',
      },
      {
        code: 'pt',
        text: 'Portugues',
      },
      {
        code: 'ru',
        text: 'русский',
      },
    ],
  }),
  methods: {
    selectLocale(locale) {
      enableBodyScroll(this.lockLanguageElem);
      this.$i18n.locale = locale;
      this.$store.commit('setIsOpenSelectLanguage', false);

      localStorage.setItem('draco-locale', locale);
    },
  },
};
</script>
