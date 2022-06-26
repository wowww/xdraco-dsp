import BigNumber from 'bignumber.js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import Vue from 'vue';
import goTo from 'vuetify/lib/services/goto';
import Vuex from 'vuex';

import { STORAGE_KEY } from '@/constants/accounts';
import { APP_LANGUAGES } from '@/constants/languages';
import i18n from '@/locales/i18n';
import account from '@/store/modules/account';
import collectible from '@/store/modules/collectible';
import dsp from '@/store/modules/dsp';
import exd from '@/store/modules/exd';
import hsp from '@/store/modules/hsp';
import mirage from '@/store/modules/mirage';
import nft from '@/store/modules/nft';
import search from '@/store/modules/search';
import { dracoStorage } from '@/utils/baseUtil';

dayjs.extend(utc);

// eslint-disable-next-line no-unused-vars
const parseJwt = (token) => {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(''),
  );

  return JSON.parse(jsonPayload);
};

const INIT_ACCESS_TOKEN = () => dracoStorage.get(STORAGE_KEY.WEMIX_TOKEN);
const INIT_USER_ID = () => dracoStorage.get(STORAGE_KEY.WEMIX_USER_ID);
const INIT_LOCALE = () => dracoStorage.get('draco-locale') || 'en';
const INIT_DRACO_ACCESS_TOKEN = () => dracoStorage.get(STORAGE_KEY.DRACO_TOKEN);
const INIT_DRACO_WALLET = () => dracoStorage.get(STORAGE_KEY.DRACO_WALLET);

const INIT_MODAL = () => ({
  open: false,
  title: '',
  desc: '',
  primary: '',
  secondary: '',
  onPrimary: null,
  onSecondary: null,
  onClose: null,
});

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    account,
    dsp,
    exd,
    collectible,
    nft,
    hsp,
    mirage,
    search,
  },
  state: {
    afterLogin: false,
    now: dayjs().utcOffset(8).unix(),
    defaultNumberDigits: 4,
    isOpenSelectLanguage: false,
    openDracoLogin: false,
    openLogin: false,
    openAccount: false,
    openEvent: false,
    openNavMore: false,
    dracoAccessToken: INIT_DRACO_ACCESS_TOKEN(),
    accessToken: INIT_ACCESS_TOKEN(),
    walletAddress: INIT_DRACO_WALLET(),

    userInfo: null,
    userId: INIT_USER_ID(),
    balanceLoading: false,
    balance: null,
    languages: [...APP_LANGUAGES],
    locale: INIT_LOCALE(),
    commonModal: INIT_MODAL(),
    devMode: process.env.NODE_ENV,
    cookieNotAvailable: false,

    smeltingFee: 50,
    derby: [],
    hydraSupply: null,

    dracoRate: null,
    hydraRate: null,

    chartPeriod: 'daily',

    draco: {
      daily: null,
      weekly: null,
      monthly: null,
      max: null,
    },
    hydra: {
      daily: null,
      weekly: null,
      monthly: null,
      max: null,
    },

    openTermsOfUse: false,
    drainPart: 'part2',
    notifications: [],
  },
  getters: {
    now(state) {
      return state.now;
    },
    defaultNumberDigits(state) {
      return state.defaultNumberDigits;
    },
    isOpenSelectLanguage(state) {
      return state.isOpenSelectLanguage;
    },
    userId: (state) => state.userId,
    userInfo: (state) => state.userInfo,
    smeltingCost(state) {
      if (state.derby.length > 0) {
        const today = state.derby.slice(-1)[0];
        return Number(today.DS) + (today.SmeltingCost ? Number(today.SmeltingCost) : state.smeltingFee);
      }

      return 100000;
    },
    dracoUsd: (state) => {
      return Number(state.dracoRate ? state.dracoRate.USDDracoRate : 0);
    },
    dracoUsdPrev: (state) => {
      const prev = Number(state.dracoRate ? state.dracoRate.USDDracoRatePrev : 0);
      if (prev === 0) {
        return Number(1.79297417);
      }
      return prev;
    },
    dracoUsdChange: (state, getters) => {
      const { dracoUsd: current, dracoUsdPrev: prev } = getters;
      return ((current - prev) / prev) * 100;
    },
    dracoWemix: (state) => {
      return Number(state.dracoRate ? state.dracoRate.DracoPrice : 0);
    },
    dracoWemixPrev: (state) => {
      return Number(state.dracoRate ? state.dracoRate.DracoPricePrev : 0);
    },
    dracoWemixChange: (state, getters) => {
      const { dracoWemix: current, dracoWemixPrev: prev } = getters;
      return ((current - prev) / prev) * 100;
    },
    hydraUsd: (state) => {
      return Number(state.hydraRate ? state.hydraRate.USDHydraRate : 0);
    },
    hydraUsdPrev: (state) => {
      return Number(state.hydraRate ? state.hydraRate.USDHydraRatePrev : 0);
    },
    hydraUsdChange: (state, getters) => {
      const { hydraUsd: current, hydraUsdPrev: prev } = getters;
      return ((current - prev) / prev) * 100;
    },
    hydraWemix: (state) => {
      return Number(state.hydraRate ? state.hydraRate.HydraPrice : 0);
    },
    hydraWemixPrev: (state) => {
      return Number(state.hydraRate ? state.hydraRate.HydraPricePrev : 0);
    },
    hydraWemixChange: (state, getters) => {
      const { hydraWemix: current, hydraWemixPrev: prev } = getters;
      return ((current - prev) / prev) * 100;
    },
  },
  mutations: {
    setAfterLogin(state, payload) {
      state.afterLogin = payload;
    },
    setNow(state) {
      state.now = dayjs().utc().unix();
    },
    setIsOpenSelectLanguage(state, payload) {
      state.isOpenSelectLanguage = payload;
    },
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;

      console.log(accessToken);

      dracoStorage.set(STORAGE_KEY.WEMIX_TOKEN, accessToken);
    },
    setDracoAccessToken(state, payload) {
      state.dracoAccessToken = payload;

      dracoStorage.set(STORAGE_KEY.DRACO_TOKEN, payload);
    },
    setWalletAddress(state, payload) {
      state.walletAddress = payload;

      if (payload) {
        dracoStorage.set(STORAGE_KEY.DRACO_WALLET, payload);
      } else {
        dracoStorage.remove(STORAGE_KEY.DRACO_WALLET);
      }
    },
    setUserId(state, userId) {
      this.userId = userId;

      dracoStorage.set(STORAGE_KEY.WEMIX_USER_ID, userId);
    },
    setBalanceLoading(state, payload) {
      state.balanceLoading = payload;
    },
    setBalance(state, payload) {
      state.balance = payload;
    },
    setUserInfo(state, payload) {
      state.userInfo = { ...payload };
    },
    setLocale(state, payload) {
      state.locale = payload;
      i18n.locale = payload;
      state.isOpenSelectLanguage = false;

      console.log(payload);
      dracoStorage.set('draco-locale', payload);
    },
    setOpenDracoLogin(state, payload) {
      state.openDracoLogin = payload;
    },
    setOpenLogin(state, payload) {
      state.openLogin = payload;
    },
    setOpenEvent(state, payload) {
      state.openEvent = payload;
    },
    setCommonModal(state, payload) {
      state.commonModal = { ...payload };
    },
    setCookieNotAvailable(state, payload) {
      state.cookieNotAvailable = payload;
    },
    setOpenNavMore(state) {
      state.openNavMore = !state.openNavMore;
    },
    setDerby(state, payload) {
      state.derby = payload;
    },
    setHydraSupply(state, payload) {
      state.hydraSupply = payload;
    },

    setDracoRate(state, payload) {
      state.dracoRate = payload;
    },
    setHydraRate(state, payload) {
      state.hydraRate = payload;
    },
    setChartPeriod(state, payload) {
      state.chartPeriod = payload;
    },
    setDraco(state, payload) {
      state.draco = payload;
    },
    setHydra(state, payload) {
      state.hydra = payload;
    },
    setOpenTermsOfUse(state, payload) {
      state.openTermsOfUse = payload;
    },
    setDrainPart(state, payload) {
      state.drainPart = payload;
    },
    setNotifications(state, payload) {
      state.notifications = payload;
    },
  },
  actions: {
    logOut({ commit }) {
      commit('setAccessToken', null);
      commit('setDracoAccessToken', null);
      commit('setUserInfo', null);
      commit('setUserId', null);
      commit('setWalletAddress', null);

      commit('account/setRepresent', null);
      commit('mirage/setAccountInfo', null);

      dracoStorage.remove(STORAGE_KEY.WEMIX_TOKEN);
      dracoStorage.remove(STORAGE_KEY.WEMIX_USER_ID);
      dracoStorage.remove(STORAGE_KEY.DRACO_TOKEN);
      dracoStorage.remove(STORAGE_KEY.DRACO_CHARACTER);
    },
    closeModal({ commit }) {
      commit('setCommonModal', INIT_MODAL());
    },
    wemixLogout({ commit }) {
      commit('setAccessToken', null);
      dracoStorage.remove(STORAGE_KEY.WEMIX_TOKEN);
      dracoStorage.remove(STORAGE_KEY.WEMIX_USER_ID);
    },
    postLogin({ commit, state }) {
      if (state.accessToken && state.accessToken !== 'test') {
        this._vm.$wemix
          .login(state.locale)
          .then(({ data }) => {
            commit('setUserInfo', {
              id: data.userID,
              address: data.address,
              tokens: data.tokens,
            });
            commit('setWalletAddress', data.address);
          })
          .catch(() => {});
      }
    },
    fetchPrice({ state }) {
      if (state.accessToken) {
        this._vm.$wemixApi
          .post(`/price/all`, {})
          .then(({ data }) => {
            console.log(data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    // eslint-disable-next-line no-unused-vars
    fetchCurrent({ state }, symbol) {
      if (state.accessToken && state.accessToken !== 'test') {
        this._vm.$wemixApi
          .post('/chart/current', {})
          .then(({ data }) => {
            console.log(data);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    fetchBalance({ commit, state }) {
      if (!state.accessToken) {
        return;
      }

      commit('setBalanceLoading', true);
      commit('setBalance', null);
      this._vm.$wemix
        .balanceAll()
        .then(({ data }) => {
          const rest = 10 ** 18;

          const balanceData = {};

          Object.entries(data.balances).forEach(([key, value]) => {
            const nv = new BigNumber(value).div(rest).toNumber();

            balanceData[key] = Number(nv.toFixed(6));
          });

          commit('setBalance', balanceData);
        })
        .catch((e) => {
          commit('setBalance', null);
        })
        .finally(() => {
          commit('setBalanceLoading', false);
        });
    },
    fetchWalletAddress({ state, commit }) {
      if (state.dracoAccessToken && !state.walletAddress) {
        this._vm.$dracoWebApi
          .get('/login/gamewalletaddress')
          .then(({ data }) => {
            if (data.code === 200) {
              commit('setDracoWalletAddress', data.data.walletAddress);
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    fetchDerby({ commit }) {
      this._vm.$dracoApi
        .post('/wallet/prices/derby')
        .then(({ data }) => {
          commit('setDerby', data.Data || []);
        })
        .catch((e) => {
          commit('setDerby', []);
        });
    },
    fetchHydraSupply({ commit }) {
      this._vm.$dracoApi
        .post('/wallet/prices/hydra')
        .then(({ data }) => {
          console.log(data);
          if (data.Code === 200) {
            commit(
              'setHydraSupply',
              data.Data.length > 0
                ? data.Data[data.Data.length - 1]
                : {
                    CreatedDate: '',
                    HydraSupply: 0,
                    PrevHydraSupply: 0,
                    TotalSupply: 0,
                  },
            );
          } else {
            commit('setHydraSupply', {
              CreatedDate: '',
              HydraSupply: 0,
              PrevHydraSupply: 0,
              TotalSupply: 0,
            });
          }
        })
        .catch(() => {
          commit('setHydraSupply', null);
        });
    },
    fetchDracoLastest({ commit }) {
      this._vm.$dracoApi
        .post(`/wallet/prices/draco/lastest`)
        .then(({ data }) => {
          commit('setDracoRate', data.Data);
        })
        .catch(() => {
          commit('setDracoRate', null);
        });
    },
    fetchHydraLastest({ commit }) {
      this._vm.$dracoApi
        .post(`/wallet/prices/hydra/lastest`)
        .then(({ data }) => {
          commit('setHydraRate', data.Data);
        })
        .catch(() => {
          commit('setHydraRate', null);
        });
    },
    fetchDraco({ commit, state }) {
      const option = state.chartPeriod ? state.chartPeriod : 'daily';

      this._vm.$dracoApi
        .post(`/wallet/prices/draco/${option}`)
        .then(({ data }) => {
          const chartData = { ...state.draco };
          chartData[option] = data.Data;

          commit('setDraco', { ...chartData });
        })
        .catch((e) => {
          const chartData = { ...state.draco };
          chartData[option] = null;

          commit('setDraco', { ...chartData });
        });
    },
    fetchHydra({ commit, state }) {
      const option = state.chartPeriod ? state.chartPeriod : 'daily';

      this._vm.$dracoApi
        .post(`/wallet/prices/hydra/${option}`)
        .then(({ data }) => {
          const chartData = { ...state.hydra };
          chartData[option] = data.Data;

          commit('setHydra', { ...chartData });
        })
        .catch((e) => {
          const chartData = { ...state.hydra };
          chartData[option] = null;

          commit('setHydra', { ...chartData });
        });
    },
    fetchDrainPart({ commit }, { targetContents, targetSelector }) {
      commit('setDrainPart', targetContents);
      goTo(targetSelector, {});
    },
    fetchTwitterNotification({ commit }) {
      this._vm.$dracoWebApi
        .get('/noti', { params: { start_time: dayjs().subtract(1, 'day').toISOString() } })
        .then(({ data }) => {
          if (data.code === 200) {
            commit('setNotifications', data.data);
          }
        })
        .catch(() => {
          commit('setNotifications', []);
        });
    },
  },
});

// setInterval(() => store.commit('setNow'), 1000);

export default store;
