/* eslint-disable */
import Vue from 'vue';
import wemix from './sdk/wemix';
import environment from './sdk/wemix.environment';
import { STORAGE_KEY } from '@/constants/accounts';

const productionPreparedFunc = async function (param) {
  const client_secret = process.env.VUE_APP_WEMIX_SDK_CLIENT_SECRET;

  return await Vue.$dracoWebApi.post(`/wemix/auth/prepare`, {
    ...param,
    client_secret,
  });
};

const productionTokenFunc = async function (param) {
  const client_secret = process.env.VUE_APP_WEMIX_SDK_CLIENT_SECRET;
  return await Vue.$dracoWebApi.post(`/login/wemix`, {
    ...param,
    client_secret,
  });
};

const productionMakeUnsignedTx = async function (param) {
  let rtn = null;
  // 오류코드처리필요 WEBAPI문서 확인
  return await Vue.$dracoWebApi.post(`/dsp/makeunsignedtx/${param.method}`, param);
};
const productionSendSignedTx = async function (hash, signature, signType, type, payload) {
  if (type === 'exd') {
    if (signType === 2) {
      return await Vue.$dracoWebApi.post(`/exd/trade`, {
        tradeUID: payload.tradeUID,
        characterUID: payload.characterUID,
        languageCode: payload.languageCode,
        itemName32: payload.itemName32,
        hash,
        sign: signature,
      });
    } else if (signType === 3) {
      return await Vue.$dracoWebApi.post(`/exd/approvedSign`, { hash, sign: signature });
    }
  } else if (type === 'mirage-energy') {
    if (signType === 2) {
      return await Vue.$dracoWebApi.post(`/mirage/energy`, {
        TicketID: payload.TicketID,
        ProductID: payload.ProductID,
        hash,
        userSig: signature,
      });
    } else if (signType === 3) {
      return await Vue.$dracoWebApi.post(`/mirage/approve`, { hash, sign: signature });
    }
  } else if (type === 'mirage-draco') {
    if (signType === 2) {
      return await Vue.$dracoWebApi.post(`/mirage/exchange`, {
        token: 'draco',
        amount: payload.amount,
        hash,
        userSig: signature,
        nonce: payload.nonce,
      });
    } else if (signType === 3) {
      return await Vue.$dracoWebApi.post(`/mirage/approve`, { hash, sign: signature });
    }
  } else if (type === 'mirage-hydra') {
    if (signType === 2) {
      return await Vue.$dracoWebApi.post(`/mirage/exchange`, {
        token: 'hydra',
        amount: payload.amount,
        hash,
        userSig: signature,
        nonce: payload.nonce,
      });
    } else if (signType === 3) {
      return await Vue.$dracoWebApi.post(`/mirage/approve`, { hash, sign: signature });
    }
  } else if (type === 'mirage-unseal') {
    return await Vue.$dracoWebApi.post(`/mirage/import`, { tokenID: payload.TokenID, userSig: signature, nonce: payload.nonce });
  } else if (type === 'mirage-seal') {
    return await Vue.$dracoWebApi.post(`/mirage/seal`, { tokenID: payload.tokenID, userSig: signature, nonce: payload.nonce });
  } else if (type === 'hsp') {
    return await Vue.$dracoWebApi.post(`/hsp/transaction`, { hash, sign: signature });
  } else {
    return await Vue.$dracoWebApi.post(`/dsp/sendsignedtx`, { hash, sign: signature });
  }
};

wemix.setRequestPreparedFunction(productionPreparedFunc);
wemix.setRequestTokenFunction(productionTokenFunc);
wemix.setRequestMakeUnsignedTx(productionMakeUnsignedTx);
wemix.setRequestSendSignedTx(productionSendSignedTx);

export default {
  install: (Vue, { store }) => {
    // console.log(`install store to wemix`, localStorage);
    // main 에서 store 를 주입 받아서, 연결
    wemix.store = store;
    wemix.axios = Vue.$wemixApi;
    try {
      wemix.setStorage(localStorage, STORAGE_KEY.WEMIX_TOKEN);
    } catch (e) {
      store.commit('setCookieNotAvailable', true);
    }
    wemix.setEnv(environment[process.env.VUE_APP_WEMIX_SDK_TARGET || 'production']);

    Vue.$wemix = wemix;
    Vue.prototype.$wemix = wemix;
  },
};
