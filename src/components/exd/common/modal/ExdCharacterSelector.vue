<template>
  <div class="card-content">
    <div class="wrap-list">
      <div class="notice">{{ t('s.exd.purchase.choose.character') }}</div>
      <div class="list-header">
        <div class="server-select" v-if="worldNames.length > 0">
          <v-select
            class="select"
            :items="worldNames"
            v-model="selectedWorldName"
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
      <div class="iscroll">
        <ul class="list">
          <li v-if="loading">
            <div :style="{ display: 'flex', width: '100%', justifyContent: 'center', margin: '10rem auto' }">
              <v-progress-circular class="ml-2" :size="24" :width="4" color="#f0f0f0" indeterminate />
            </div>
          </li>
          <template v-else>
            <winner-character-item
              v-for="(character, idx) in characters.filter((item) => item.lv >= 40)"
              :key="`my-character-${idx}`"
              :character="character"
              :selected="character.characterUID === selectedCharacterUID"
              @select-character="selectCharacter"
            />
          </template>
        </ul>
      </div>
    </div>
    <div class="wrap-button">
      <button type="button" class="btn btn-primary2" @click="reward" :disabled="loading">
        <v-progress-circular v-if="loading" class="ml-2" :size="16" :width="2" color="#fff" indeterminate></v-progress-circular>
        <template v-else>
          {{ t('w.rounds.receive.item') }}
        </template>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';
import MyCharacterItem from '@/components/account/MyCharacterItem';
import WinnerCharacterItem from '@/components/dsp/round/modal/WinnerCharacterItem';
import { defaultRound } from '@/components/dsp/round/round-utils';
import { useWemixLogin } from '@/composables/round';

const { useState: useAccountState, useGetters, useMutations, useActions } = createNamespacedHelpers('account');
const { useMutations: useDspMutations, useActions: useDspActions } = createNamespacedHelpers('dsp');

export default defineComponent({
  name: 'ExdCharacterSelector',
  components: { WinnerCharacterItem, MyCharacterItem },
  props: {
    round: {
      type: Object,
      default: () => defaultRound(),
    },
  },
  setup({ round }, { root }) {
    const i18n = useI18n();
    const { wemixLogin } = useWemixLogin(root.$wemix);
    const winLoading = ref(false);
    const selectedCharacterUID = ref();
    const { accessToken } = useState(['accessToken']);

    const { active, loading, worldNames, selectedWorldName } = useAccountState(['active', 'loading', 'worldNames', 'selectedWorldName']);
    const { characters } = useGetters(['characters']);
    const { setSelectedWorldName, setCommonModal } = useMutations(['setSelectedWorldName', 'setCommonModal']);
    const { fetchUserCharacter, fetchChannelUserCharacter } = useActions(['fetchUserCharacter', 'fetchChannelUserCharacter']);
    const { fetchRounds } = useDspActions(['fetchRounds']);

    const { setOpenWinner } = useDspMutations(['setOpenWinner']);

    const changeChannel = (value) => {
      // eslint-disable-next-line prefer-rest-params
      console.log(value);
      setSelectedWorldName(value);
    };

    const selectCharacter = (uid) => {
      selectedCharacterUID.value = uid;
    };

    const reward = async () => {
      if (winLoading.value) {
        return;
      }

      if (!accessToken.value) {
        wemixLogin();
        return;
      }

      if (!selectedCharacterUID.value) return;
      const to = '0x19b750c24a5f2112ffc7fa5d4dbe362b70f33c01'; // wemix().contractAddress("tornado","Mir4DSP")
      const draco = root.$wemix.token('DRACO').address;
      winLoading.value = true;
      root.$wemix
        .makeUnsignedTx(49, 'tornado', to, draco, 0, 'reward', [`${round.dspID}`, `${selectedCharacterUID.value}`])
        .then((unsigned) => {
          const hashes = unsigned.data.data.hash;
          const req = root.$wemix.requestSignature(hashes);
          root.$wemix.openQR(
            'sign',
            req,
            (success) => {
              console.log(success);
              console.log('트랜젝션이 처리 되었습니다');

              winLoading.value = false;

              setCommonModal({
                open: true,
                title: i18n.t('w.rounds.reward.complete'),
                desc: i18n.t('w.rounds.reward.complete.desc'),
                primary: i18n.t('w.dsp.common.close'),
                onPrimary() {
                  fetchRounds();
                  setOpenWinner(false);
                },
              });
            },
            (fail) => {
              winLoading.value = false;
              console.log(fail);
              // eslint-disable-next-line no-alert
              // alert('트랜젝션 수행 중 오류가 발생 하였습니다. ');

              setCommonModal({
                open: true,
                title: 'Failed to send item.',
                desc: '',
                primary: i18n.t('w.dsp.common.close'),
                onPrimary() {
                  fetchRounds();
                  setOpenWinner(false);
                },
              });
            },
            () => {
              winLoading.value = false;
            },
          );
        })
        .catch((error) => {
          winLoading.value = false;
          console.log('인증 이후 사용 가능 합니다.', error);
        });
    };

    onMounted(() => {
      root.$store.dispatch('account/fetchUserCharacter');
    });

    return {
      ...i18n,
      active,
      loading,
      changeChannel,
      worldNames,
      selectedWorldName,
      characters,
      setSelectedWorldName,
      fetchChannelUserCharacter,
      selectedCharacterUID,
      selectCharacter,
      reward,
    };
  },
});
</script>

<style scoped></style>
