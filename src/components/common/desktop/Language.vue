<template>
  <v-menu attach="#header" content-class="select-language" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <!-- <button type="button" class="btn-language" :class="{ 'btn-string': isStringMenu }" v-bind="attrs" v-on="on" @click="testCloseNavMore"> -->
      <button type="button" class="btn-open-list btn-language" :class="{ 'btn-string': isStringMenu }" v-bind="attrs" v-on="on">
        <img src="@/assets/img/desktop/header-v2/icon-language.webp" class="icon" height="24" alt="language" />
        <span v-if="isStringMenu">Language</span>
      </button>
    </template>
    <v-list class="select-language__list">
      <v-list-item-group color="primary">
        <!-- <v-list-item>{{ openNavMore }}</v-list-item> -->
        <v-list-item
          v-for="(item, i) in languages"
          :key="i"
          :class="{ 'v-item--active': item.code === locale }"
          :active="item.code === locale"
          @click="selectLocale(item.code)"
        >
          <span class="text">{{ item.text }}</span>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';
import { useMutations, useState } from 'vuex-composition-helpers/dist';

export default defineComponent({
  name: 'Language',
  props: {
    isStringMenu: {
      type: Boolean,
      required: false,
    },
  },
  setup({ isStringMenu }) {
    // setup() {
    const { languages, locale, openNavMore } = useState(['languages', 'locale', 'openNavMore']);
    const { setLocale, setOpenNavMore } = useMutations(['setLocale', 'setOpenNavMore']);

    const selectLocale = (selectedLocale) => {
      setLocale(selectedLocale);
    };

    const testCloseNavMore = () => {
      setTimeout(setOpenNavMore, 600);
    };

    return {
      languages,
      locale,
      openNavMore,
      setLocale,
      setOpenNavMore,
      selectLocale,
      testCloseNavMore,
    };
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/desktop/partials/header-v2/language';
</style>
