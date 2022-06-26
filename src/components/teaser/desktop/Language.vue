<template>
  <v-menu content-class="select-language" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <!-- <v-btn class="btn-header language" elevation="0" v-bind="attrs" v-on="on" icon></v-btn> -->
      <button type="button" class="btn-header language" v-bind="attrs" v-on="on"></button>
    </template>
    <v-list class="select-language__list">
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item active="false" v-for="(item, i) in items" :key="i" @click="selectLocale(item.code)">
          <span class="text">{{ item.text }}</span>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data: () => ({
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
      this.$i18n.locale = locale;
      this.$store.commit('setIsOpenSelectLanguage', false);

      localStorage.setItem('draco-locale', locale);
    },
  },
};
</script>
<style lang="scss"></style>
