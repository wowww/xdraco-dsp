<template>
  <v-card class="my-character">
    <div class="tabs-content">
      <div class="list-header" v-if="exist === 1">
        <div class="server-select" v-if="worldNames.length > 0">
          <v-select
            class="select"
            :items="worldNames"
            :value="selectedWorldName"
            outlined
            dense
            :menu-props="{ bottom: true, offsetY: true, contentClass: 'select-menu' }"
            @change="changeChannel"
          ></v-select>
        </div>
        <div class="server-update">
          <button type="button" class="btn-update" @click="fetchChannelUserCharacter">
            <em>{{ t('w.account.update.info') }}</em>
          </button>
        </div>
      </div>
      <div class="msgbox vcenter" v-if="exist === 0">
        <div>
          <h4 class="title">Create a MIR4 account for full access to XDRACO services</h4>
          <div class="desc"></div>
          <div class="wrap-button">
            <!-- <button type="button" class="btn btn-primary btn-sm">MIR4 Brand Site</button> -->
            <a href="https://mir4global.com" class="btn btn-primary btn-sm" target="_blank">MIR4 Brand Site</a>
          </div>
        </div>
      </div>
      <div class="msgbox vcenter" v-if="exist === 1 && (characters.length === 0 || characters.filter((item) => item.lv >= 40).length === 0)">
        <div>
          <h4 class="title">{{ t('s.account.message.no-lv40-char') }}</h4>
          <div class="desc"></div>
          <div class="wrap-button">
            <!-- <button type="button" class="btn btn-primary btn-sm">MIR4 Brand Site</button> -->
            <a href="https://mir4global.com" class="btn btn-primary btn-sm" target="_blank">MIR4 Brand Site</a>
          </div>
        </div>
      </div>
      <div class="iscroll">
        <ul class="list" v-if="active === 0 && loading">
          <li class="d-flex justify-center">
            <v-progress-circular class="ml-2" :size="24" :width="4" color="#AA00FF" indeterminate />
          </li>
        </ul>
        <ul class="list" v-else>
          <my-character-item
            v-for="(character, idx) in characters.filter((item) => item.lv >= 40)"
            :key="`my-character-${idx}`"
            :character="character"
          />
        </ul>
        <p class="list-notice">{{ t('s.account.message.only-lv40-char-display') }}</p>
      </div>
    </div>
  </v-card>
</template>

<script>
import { defineComponent, onActivated, onMounted, watch } from '@vue/composition-api';
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import MyCharacterItem from '@/components/account/MyCharacterItem';
import useI18n from '@/utils/useI18n';

const { useState, useGetters, useMutations, useActions } = createNamespacedHelpers('account');

export default defineComponent({
  name: 'AccountMyCharacter',
  components: { MyCharacterItem },
  setup(_, { root }) {
    const { exist, open, active, loading, worldNames, selectedWorldName, characters } = useState([
      'exist',
      'open',
      'active',
      'loading',
      'worldNames',
      'selectedWorldName',
      'characters',
    ]);
    // const { characters } = useGetters(['characters']);
    const { setSelectedWorldName } = useMutations(['setSelectedWorldName']);
    const { fetchUserCharacter, fetchChannelUserCharacter } = useActions(['fetchUserCharacter', 'fetchChannelUserCharacter']);

    watch([open, active], ([currentOpen, currentActive]) => {
      console.log(currentOpen, currentActive);
      if (currentOpen && currentActive === 0) {
        console.log('checkActive');
        fetchUserCharacter();
        fetchChannelUserCharacter();
      }
    });

    watch(
      () => loading.value,
      () => console.log(loading.value),
    );

    onMounted(() => {
      fetchUserCharacter();
      root.$nextTick(() => {
        fetchChannelUserCharacter();
      });
    });

    onActivated(() => {
      fetchUserCharacter();
    });

    const changeChannel = (value) => {
      // eslint-disable-next-line prefer-rest-params
      console.log(value);
      setSelectedWorldName(value);
      fetchChannelUserCharacter();
    };

    return {
      ...useI18n(),
      active,
      loading,
      changeChannel,
      exist,
      worldNames,
      selectedWorldName,
      characters,
      setSelectedWorldName,
      fetchChannelUserCharacter,
    };
  },
});
</script>

<style scoped></style>
