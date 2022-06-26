import { STORAGE_KEY } from '@/constants/accounts';
import { dracoStorage } from '@/utils/baseUtil';

const sample = {
  code: 200,
  data: [
    {
      ASIA11: [
        {
          characterUID: 1312312,
          characterName: 'draco01',
          class: 1, // 1:전사, 2:술사, 3:도사, 4:석궁사, 5:무사
          lv: 50,
          represent: 1, // 1:대표캐릭터 : 0:일반캐릭터
        },
        {
          characterUID: 1312313,
          characterName: 'draco02',
          class: 2, // 1:전사, 2:술사, 3:도사, 4:석궁사, 5:무사
          lv: 10,
          represent: 0, // 1:대표캐릭터 : 0:일반캐릭터
        },
      ],
    },
    {
      ASIA121: [
        {
          characterUID: 1312315,
          characterName: 'draco03',
          class: 1, // 1:전사, 2:술사, 3:도사, 4:석궁사, 5:무사
          lv: 50,
          represent: 0, // 1:대표캐릭터 : 0:일반캐릭터
        },
        {
          characterUID: 1312315,
          characterName: 'draco04',
          class: 2, // 1:전사, 2:술사, 3:도사, 4:석궁사, 5:무사
          lv: 10,
          represent: 0, // 1:대표캐릭터 : 0:일반캐릭터
        },
        {
          characterUID: 13123115,
          characterName: 'draco05',
          class: 2, // 1:전사, 2:술사, 3:도사, 4:석궁사, 5:무사
          lv: 10,
          represent: 0, // 1:대표캐릭터 : 0:일반캐릭터
        },
      ],
    },
  ],
};

const sampleNotifies = {
  code: 200,
  data: [
    {
      date: 131231223, // UTC timestamp
      type: 1001, // 1001:Stake, 1002:StakeMore, 1003:PreStake, 1004:PreStakeMore, 1005:라운드종료, 1006:우승상품획득, 1007:환불리워드
      amount: 100, // 1,2,3,4 에 쓰임
      round: 1,
      winner: {
        // 로그타입이6일경우에만있음
        class: 1, // 직업
        worldName: 'ASIA134',
        characterName: 'draco01',
        itemName: 'War Dragon Outfit',
      },
      reward: {
        // 로그타입이7일경우에만있음
        refund: 1232,
        reward: 0.00024561,
      },
    },
  ],
};

const account = {
  namespaced: true,
  state: {
    loading: false,
    open: false,
    active: 0,
    exist: 0,
    worldNames: [],
    selectedWorldName: '',
    allCharacters: [],
    characters: [],
    notifies: [],
    represent: dracoStorage.get(STORAGE_KEY.DRACO_CHARACTER) ? JSON.parse(dracoStorage.get(STORAGE_KEY.DRACO_CHARACTER)) : null,
  },
  getters: {
    // characters: (state) => {
    //   if (state.selectedWorldName) {
    //     const channelCharacters = state.allCharacters.find((item) => item[state.selectedWorldName[0]]);
    //
    //     if (channelCharacters) {
    //       return channelCharacters[state.selectedWorldName];
    //     }
    //   }
    //
    //   return [];
    // },
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setOpen(state, payload) {
      state.open = payload;
    },
    setActive(state, payload) {
      state.active = payload;
    },
    setExist(state, paylaod) {
      state.exist = paylaod;
    },
    setWorldNames(state, payload) {
      state.worldNames = payload;
    },
    setSelectedWorldName(state, payload) {
      state.selectedWorldName = payload;
    },
    setAllCharacters(state, payload) {
      state.allCharacters = payload;
    },
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setNotifies(state, payload) {
      state.notifies = payload;
    },
    setRepresent(state, payload) {
      state.represent = payload;

      if (payload) {
        dracoStorage.set(STORAGE_KEY.DRACO_CHARACTER, JSON.stringify(payload));
      } else {
        dracoStorage.remove(STORAGE_KEY.DRACO_CHARACTER);
      }
    },
  },
  actions: {
    fetchRepCharacter({ commit, rootState }) {
      this._vm.$dracoWebApi
        .get('/login/repcharacter')
        .then(({ data }) => {
          console.log(data);
          if (data.code === 200) {
            if (data.data.game) {
              commit('setExist', data.data.game.accountExists || 0);
              if (data.data.game.representCharacter) {
                commit('setRepresent', data.data.game.representCharacter);
              }
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    fetchUserCharacter({ state, commit, dispatch, rootState }, characterUID = '') {
      commit('setLoading', true);
      this._vm.$dracoWebApi
        .get('/user/characters')
        .then(({ data }) => {
          commit('setLoading', false);
          if (!rootState.devMode && (data.code === 60002 || data.code === 60003)) {
            commit('setOpen', false);
          }

          if (data.code === 200 && data.data) {
            const worldName = [];
            data.data.forEach((item) => {
              worldName.push(Object.keys(item));
            });
            commit('setWorldNames', worldName);
            if (!state.selectedWorldName) {
              commit('setSelectedWorldName', [state.represent.worldName || worldName[0]]);
            }
            // commit('setAllCharacters', data.data);

            for (let i = 0; i < data.data.length; i += 1) {
              const keys = Object.keys(data.data[i]);
              for (let j = 0; j < keys.length; j += 1) {
                const characters = data.data[i][keys[j]];

                for (let k = 0; k < characters.length; k += 1) {
                  if (`${characters[k].characterUID}` === characterUID) {
                    console.log(keys[j]);
                    commit('setSelectedWorldName', [keys[j]]);
                  }
                }
              }
            }
          }
        })
        .catch((e) => {
          if (!rootState.devMode && e.response.code === 401) {
            commit('setOpen', false);
          }
          commit('setLoading', true);
        });
    },
    fetchChannelUserCharacter({ state, commit, dispatch, rootState }) {
      commit('setLoading', true);
      this._vm.$dracoWebApi
        .get('/user/currentcharacters', { params: { worldName: state.selectedWorldName[0] || state.represent.worldName } })
        .then(({ data }) => {
          if (!rootState.devMode && (data.code === 60002 || data.code === 60003)) {
            commit('setOpen', false);
          }
          if (data.code === 200 && data.data) {
            console.log(data.data);
            commit('setCharacters', data.data[state.selectedWorldName[0] || state.represent.worldName]);
            // commit('setAllCharacters', [...state.allCharacters.filter((item) => !Object.keys(item).includes(state.selectedWorldName[0])), data.data]);

            const keys = Object.keys(data.data);
            for (let j = 0; j < keys.length; j += 1) {
              const characters = data.data[keys[j]];

              for (let k = 0; k < characters.length; k += 1) {
                if (characters[k].represent === 1) {
                  let needUpdate = false;
                  if (state.represent.worldName !== keys[j]) {
                    needUpdate = true;
                  }

                  if (state.represent.characterName !== characters[k].characterName) {
                    needUpdate = true;
                  }

                  if (state.represent.lv !== characters[k].lv) {
                    needUpdate = true;
                  }

                  if (state.represent.class !== characters[k].class) {
                    needUpdate = true;
                  }

                  if (needUpdate) {
                    dispatch('changeRepresentCharacter', characters[k].characterUID);
                  }

                  commit('setRepresent', {
                    ...characters[k],
                    worldName: keys[j],
                  });
                }
              }
            }
          }
        })
        .catch((e) => {
          if (!rootState.devMode && e.response.code === 401) {
            commit('setOpen', false);
          }
        })
        .finally(() => {
          commit('setLoading', false);
        });
    },
    changeRepresentCharacter({ commit, rootState, dispatch }, characterUID) {
      console.log('changeRepresentCharacter', characterUID);

      // if (!rootState.dracoAccessToken) {
      //   return;
      // }
      commit('setLoading', true);
      this._vm.$dracoWebApi
        .patch('/user/representcharacter', { characterUID })
        .then(({ data }) => {
          commit('setLoading', false);
          if (!rootState.devMode && (data.code === 60002 || data.code === 60003)) {
            commit('setOpen', false);
          }
          if (data.data) {
            commit('setRepresent', data.data.representCharacter);

            dispatch('fetchChannelUserCharacter');
          }
        })
        .catch((e) => {
          if (!rootState.devMode && e.response.code === 401) {
            commit('setOpen', false);
          }
          commit('setLoading', false);
        });
    },
    fetchNotifies({ rootState, commit }) {
      // if (!rootState.dracoAccessToken) {
      //   return;
      // }

      commit('setLoading', true);
      this._vm.$dracoWebApi
        .get('/user/notifies', { params: { languageCode: rootState.locale } })
        .then(({ data }) => {
          commit('setLoading', false);
          if (!rootState.devMode && (data.code === 60002 || data.code === 60003)) {
            commit('setOpen', false);
          }

          if (data.data) {
            commit('setNotifies', data.data);
          }
        })
        .catch((e) => {
          if (!rootState.devMode && e.response.code === 401) {
            commit('setOpen', false);
          }
          commit('setLoading', false);
        });
    },
  },
};

export default account;
