<template></template>

<script>
import { defineComponent, getCurrentInstance } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import Vue from 'vue';
import useI18n from '@/utils/useI18n';

const { useState, useActions } = createNamespacedHelpers('account');

export default defineComponent({
  name: 'ExdCharacterItem',
  props: {
    character: {
      type: Object,
      default: () => ({
        characterUID: 0,
        characterName: '',
        class: 1,
        lv: 0,
        represent: 0,
      }),
    },
    selected: Boolean,
  },
  setup({ character }, { emit }) {
    const instance = getCurrentInstance();
    const vm = instance?.proxy || new Vue({});

    const { loading } = useState(['loading']);

    const selectCharacter = (characterUID) => {
      emit('select-character', characterUID);
    };

    return {
      ...useI18n(),
      loading,
      selectCharacter,
    };
  },
});
</script>

<style scoped></style>
