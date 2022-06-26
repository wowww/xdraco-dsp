import axios from 'axios';
import store from '@/store';
import { STORAGE_KEY } from '@/constants/accounts';
import { dracoStorage } from '@/utils/baseUtil';

const dracoWebApiAxios = axios.create({
  baseURL: process.env.VUE_APP_DRACO_WEB_API_ENTRY_POINT || 'http://127.0.0.1',
});

const dracoApiAxios = axios.create({
  baseURL: process.env.VUE_APP_DRACO_API_ENTRY_POINT || 'http://127.0.0.1',
});

const wemixApiAxios = axios.create({
  baseURL: process.env.VUE_APP_WEMIX_WALLET_ENTRY_POINT || 'http://127.0.0.1',
});

dracoWebApiAxios.interceptors.request.use(
  (request) => {
    request.headers.Authorization = store.state.dracoAccessToken ? `Bearer ${store.state.dracoAccessToken}` : '';
    request.withCredentials = true;

    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

dracoWebApiAxios.interceptors.response.use(
  (response) => {
    if (response.data) {
      const { code } = response.data;

      if (code === 60002 || code === 60003) {
        store.dispatch('logOut');
      }

      if (code === 60823) {
        store.commit('setOpenTermsOfUse', true);
      }

      if (code === 69999) {
        window.location.href = 'https://maintenance.xdraco.com';
        return false;
      }
    }

    return response;
  },
  (error) => {
    if (error && error.response && error.response.status === 401) {
      store.dispatch('logOut');
    }
    return Promise.reject(error);
  },
);

wemixApiAxios.interceptors.request.use(
  (request) => {
    const storageToken = dracoStorage.get(STORAGE_KEY.WEMIX_TOKEN);
    if (store.state.accessToken) {
      request.headers.Authorization = `Bearer ${store.state.accessToken}`;
    } else if (storageToken) {
      request.headers.Authorization = `Bearer ${storageToken}`;
    } else {
      request.headers.Authorization = '';
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

wemixApiAxios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error && error.response && error.response.status === 401) {
      store.dispatch('logOut');
    }
    return Promise.reject(error);
  },
);

export default {
  install: (Vue) => {
    Vue.$dracoApi = dracoApiAxios;
    Vue.prototype.$dracoApi = dracoApiAxios;
    Vue.$dracoWebApi = dracoWebApiAxios;
    Vue.prototype.$dracoWebApi = dracoWebApiAxios;
    Vue.$wemixApi = wemixApiAxios;
    Vue.prototype.$wemixApi = wemixApiAxios;
  },
};
