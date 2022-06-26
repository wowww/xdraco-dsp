<template>
  <v-menu content-class="select-language" offset-y>
    <template v-slot:activator="{ on, attrs }">
      <button type="button" class="btn-header language" v-bind="attrs" v-on="on"></button>
    </template>
    <v-list class="select-language__list">
      <v-list-item-group color="primary">
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
  setup() {
    const { languages, locale } = useState(['languages', 'locale']);
    const { setLocale } = useMutations(['setLocale']);

    const selectLocale = (selectedLocale) => {
      setLocale(selectedLocale);
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
@import '~@/assets/sass/desktop/partials/header-v1/language';
</style>
