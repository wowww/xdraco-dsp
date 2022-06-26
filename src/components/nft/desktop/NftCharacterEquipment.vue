<template>
  <div class="wrap-character-equip">
    <ul class="list-character-equip" v-if="item" v-show="loadInfo">
      <li
        class="list-character-equip__item"
        v-for="slot in slots"
        :data-item-grade="item.equipItem && item.equipItem[slot] ? `grade-${item.equipItem[slot].grade}` : ''"
        :data-item-type="`slot-${slot}`"
        :key="`character-item-slot-${slot}`"
      >
        <div class="front">
          <span class="item-tier" v-if="item.equipItem && item.equipItem[slot] && Number(item.equipItem[slot].tier) > 0">
            <template>
              {{ Number(item.equipItem[slot].tier) | roman }}
            </template>
          </span>
          <span class="item-enchance">
            <template v-if="item.equipItem && item.equipItem[slot] && item.equipItem[slot].enhance > 0">
              {{ item.equipItem[slot].enhance > 0 && `+${item.equipItem[slot].enhance}` }}
            </template>
          </span>
          <img v-if="item.equipItem && item.equipItem[slot]" :src="item.equipItem[slot].itemPath" class="item-image" width="48" alt="아이템이름" />
          <span class="item-slot-default"></span>
        </div>
        <div class="back"></div>
      </li>
    </ul>

    <CharacterClassThumb
      v-if="characterClass && nftGrade"
      type="detail"
      :grade="nftGrade"
      :character-class="item.character.class"
      class="thumbs-character-equip"
      :width="width"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import CharacterClassThumb from '@/components/common/CharacterClassThumb';
import { orderedSlots } from '@/constants/character/character-equipment-slot';

const { useState: useNftState, useGetters: useNftGetters } = createNamespacedHelpers('nft');

export default defineComponent({
  name: 'NftCharacterEquipment',
  components: {
    CharacterClassThumb,
  },
  computed: {
    slots() {
      return orderedSlots;
    },
  },
  props: {
    width: {
      type: Number,
      required: false,
      default: 480,
    },
    loadInfo: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const { locale } = useState(['locale']);
    const { item } = useNftState(['item']);

    const { nftGrade, characterClass } = useNftGetters(['nftGrade', 'characterClass']);

    return {
      locale,
      item,
      characterClass,
      nftGrade,
    };
  },
});
</script>

<style scoped></style>
