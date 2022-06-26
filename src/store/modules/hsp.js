import BigNumber from 'bignumber.js';

const hydraBlock = new BigNumber(1000002).div(30000000).times(0.93);

const hsp = {
  namespaced: true,
  state: {
    loading: false,
    loadingMy: false,
    loadingStake: false,
    price: null,
    total: {
      totalMintAmount: 0,
      totalStakedAmount: 0,
      totalClaimedAmount: 0,
    },
    my: {
      stakeAmount: 0,
      claimAmount: 0,
      totalClaimedAmount: 0,
      isCanUnstake: false,
      isCanClaim: false,
      estimateAPR: 0.0,
    },
  },
  getters: {
    apr(state) {
      if (state.total.totalStakedAmount === 0) {
        return 0;
      }
      return new BigNumber(1).div(new BigNumber(state.total.totalStakedAmount)).times(hydraBlock).times(31536000).toNumber();
    },
    apy(state, getters) {
      if (getters.apr === 0) {
        return 0;
      }
      const one = new BigNumber(1);
      const apr = new BigNumber(getters.apr);

      return one.plus(apr.div(8760).times(0.95)).pow(8760).minus(1).toNumber();
    },
  },
  mutations: {
    setPrice(state, payload) {
      state.price = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setLoadingMy(state, payload) {
      state.loadingMy = payload;
    },
    setLoadingStake(state, payload) {
      state.loadingStake = payload;
    },
    setTotal(state, payload) {
      state.total = payload;
    },
    setMy(state, payload) {
      state.my = payload;
    },
  },
  actions: {
    fetchPrice({ commit }) {
      this._vm.$dracoApi.post(`/wallet/prices/hydra/lastest`).then(({ data }) => {
        commit('setPrice', data.Data);
      });
    },
    fetchTotal({ commit }) {
      commit('setLoading', true);

      this._vm.$dracoWebApi
        .get('/hsp/stake')
        .then(({ data }) => {
          if (data.code === 200) {
            commit('setTotal', data.data);
          }
        })
        .finally(() => {
          commit('setLoading', false);
        });
    },
    fetchMy({ commit, rootState }) {
      if (rootState.dracoAccessToken) {
        commit('setLoadingMy', true);

        this._vm.$dracoWebApi
          .get('/hsp/mystake')
          .then(({ data }) => {
            if (data.code === 200) {
              console.log(data.data.stakeAmount);
              commit('setMy', data.data);
            } else {
              commit('setMy', {
                stakeAmount: 0,
                claimAmount: 0,
                totalClaimedAmount: 0,
                isCanUnstake: false,
                isCanClaim: false,
                estimateAPR: 0.0,
              });
            }
          })
          .catch((e) => {
            commit('setMy', {
              stakeAmount: 0,
              claimAmount: 0,
              totalClaimedAmount: 0,
              isCanUnstake: false,
              isCanClaim: false,
              estimateAPR: 0.0,
            });
          })
          .finally(() => {
            commit('setLoadingMy', false);
          });
      }
    },
  },
};

export default hsp;
