<template>
  <div ref="section">
    <h3 class="title-sub-detail">
      {{ t('t.nft.spirit') }}
    </h3>
    <div v-if="loading" :style="{ display: 'flex', width: '100%', justifyContent: 'center', margin: '10rem auto' }">
      <v-progress-circular class="ml-2" :size="24" :width="4" color="#f0f0f0" indeterminate />
    </div>
    <div class="wrap-spirit" v-if="!loading && spirits">
      <v-tabs v-model="selectedDeck">
        <v-tab class="tab-spirit-item" v-for="(deck, deckIdx) in decks" :key="`spirit-deck-${deckIdx}`">
          <span>Deck {{ deck }}</span>
        </v-tab>
        <v-tab class="tab-spirit-item" v-if="spirits && spirits.inven.length > 0">
          <span>{{ t('t.nft.owned.spirit') }}</span>
        </v-tab>
      </v-tabs>

      <v-tabs-items class="wrap-tabs-item" v-model="selectedDeck">
        <v-tab-item class="wrap-item-circle" v-for="(deck, deckIdx) in decks" :key="`spirit-deck-slot-${deckIdx}`">
          <ul class="list-item">
            <li
              v-for="slot in slots"
              :key="`spirit-${deck}-${slot}`"
              :class="`${spirits.equip[deck] && spirits.equip[deck][slot] ? `grade-${spirits.equip[deck][slot].grade}` : ''}`"
            >
              <div class="wrap-thumb">
                <span class="bg">
                  <img v-if="spirits.equip[deck] && spirits.equip[deck][slot]" :src="spirits.equip[deck][slot].iconPath" width="72" alt="" />
                  <span v-if="spirits.equip[deck] && spirits.equip[deck][slot] && spirits.equip[deck][slot] > 1" class="tier-badge">{{
                    spirits.equip[deck][slot].grade | roman
                  }}</span>
                </span>
              </div>
              <div class="desc">
                <span class="name">
                  <template v-if="spirits.equip[deck] && spirits.equip[deck][slot]">
                    {{ spirits.equip[deck][slot].petName }}
                  </template>
                  <template v-else> - </template>
                </span>
                <span class="category" v-if="spirits.equip[deck] && spirits.equip[deck][slot]">
                  {{ spirits.equip[deck][slot].petOrigin }}
                </span>
              </div>
            </li>
          </ul>
        </v-tab-item>

        <v-tab-item class="wrap-item-square" v-if="spirits && spirits.inven.length > 0">
          <ul class="list-item">
            <li v-for="(item, itemIdx) in spirits.inven" :key="`spirits-inven-${itemIdx}`" :class="`grade-${item.grade}`">
              <img :src="item.iconPath" width="82" :alt="item.petName" />
              <span class="tier" v-if="item.transcend > 1">{{ item.transcend }}</span>
            </li>
          </ul>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
import { defineComponent, onUnmounted, reactive, ref, toRefs, watch } from '@vue/composition-api';
import { useIntersectionObserver } from '@vueuse/core';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';

const { useState: useNftState } = createNamespacedHelpers('nft');

export default defineComponent({
  name: 'NftCharacterSpirit',
  setup(props, { root }) {
    const { locale } = useState(['locale']);
    const { item } = useNftState(['item']);
    const section = ref(null);
    const state = reactive({
      decks: ['1', '2', '3', '4', '5'],
      slots: ['1', '2', '3', '4', '5'],
      loading: false,
      selectedDeck: 0,
      spirits: null,
      error: null,
    });
    const fetchApi = () => {
      console.log('fetchStat');
      state.loading = true;
      root.$dracoWebApi
        .get('/nft/character/spirit', { params: { transportID: item.value.character.transportID, languageCode: locale.value } })
        .then(({ data }) => {
          if (data.code === 200) {
            state.spirits = {
              equip: data.data.equip,
              inven: data.data.inven.sort((a, b) => b.grade - a.grade),
            };
            state.error = null;
          } else {
            state.spirits = null;
            state.error = data.code;
          }
        })
        .finally(() => {
          state.loading = false;
        });
    };
    const { stop } = useIntersectionObserver(section, ([{ isIntersecting }]) => {
      if (isIntersecting && item.value && item.value.character.transportID && !state.spirits) {
        fetchApi();
      }
    });

    watch(
      () => locale.value,
      () => {
        fetchApi();
      },
    );

    onUnmounted(() => {
      stop();
    });

    return {
      section,
      ...toRefs(state),
      ...useI18n(),
    };
  },
});
</script>

<style scoped></style>
