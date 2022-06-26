<template>
  <v-list class="select-language__list">
    <v-list-item-group color="primary">
      <div class="wrap-item" v-for="(item, i) in languages" :key="i">
        <v-list-item :class="{ 'v-item--active': item.code === locale }" :active="item.code === locale" @click="selectLocale(item.code)">
          <span class="text">{{ item.text }}</span>
        </v-list-item>
      </div>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { enableBodyScroll } from 'body-scroll-lock';
import { defineComponent } from '@vue/composition-api/dist/vue-composition-api';
import { useMutations, useState } from 'vuex-composition-helpers/dist';

export default defineComponent({
  setup() {
    const { languages, locale } = useState(['languages', 'locale']);
    const { setLocale } = useMutations(['setLocale']);

    const selectLocale = (selectedLocale) => {
      setLocale(selectedLocale);
      enableBodyScroll(document.querySelector('.select-language .v-navigation-drawer__content'));
    };

    return {
      languages,
      locale,
      setLocale,
      selectLocale,
    };
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/mobile/partials/header-v1/language';
</style>
