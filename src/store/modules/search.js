import { computed } from '@vue/composition-api/dist/vue-composition-api';

const search = {
  namespaced: true,
  state: {
    collectible: false,
    filter: {
      class: 0,
      itemType: '0',
      grade: 0,
      tier: 0,
      enhance: -1,
      minPrice: 0,
      maxPrice: 0,
      sort: 'latest',
      uniqueFlag: 0,
      searchType: 1,
      groupId: 0,
      EXDSearchId: 0,
    },
  },
  getters: {
    searchMetaLis(state, getters, rootState) {
      if (state.filter.searchType === 2) {
        const list = rootState.exd.metaList.value.filter((item) => item.mainType === '6' && item.subType === '33');

        if (state.filter.grade === 0) {
          return list;
        }
        return list.filter((item) => item.grade === state.filter.grade);
      }

      if (state.filter.searchType === 3) {
        return rootState.exd.metaList.value.filter((item) => item.mainType === '21');
      }

      return [];
    },
    hasFilter(state) {
      if (!state.collectible && state.filter.uniqueFlag !== 0) {
        return true;
      }

      if (state.filter.class !== 0) {
        return true;
      }

      if (state.filter.itemType !== '0') {
        return true;
      }

      if (state.filter.grade !== 0) {
        return true;
      }

      if (state.filter.tier !== 0) {
        return true;
      }

      if (state.filter.enhance !== -1) {
        return true;
      }

      if (state.filter.EXDSearchId !== 0) {
        return true;
      }

      return state.filter.sort !== 'latest';
    },
  },
  mutations: {
    setCollectible(state, payload) {
      state.collectible = payload;
    },
    setFilter(state, payload) {
      state.filter = payload;
    },
  },
  actions: {
    resetAllFilter({ commit, state }, uniqueFlag = 0) {
      console.log('uniqueFlag', uniqueFlag);
      commit('setCollectible', uniqueFlag === 1);
      commit('setFilter', {
        class: 0,
        itemType: '0',
        grade: 0,
        tier: 0,
        enhance: -1,
        minPrice: 0,
        maxPrice: 0,
        sort: 'latest',
        uniqueFlag,
        searchType: state.filter.searchType,
        groupId: 0,
        EXDSearchId: 0,
      });
    },
  },
};

export default search;
