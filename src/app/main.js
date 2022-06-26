import '@/assets/sass/pre.scss'; // View, Component의 스타일이 적용되기 전에 보여지는 스타일
import VueCompositionAPI from '@vue/composition-api';
import axios from 'axios';
import { Chart, registerables } from 'chart.js';
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import Vue from 'vue';
import VueAxios from 'vue-axios';
import VueVirtualScroller from 'vue-virtual-scroller';

import App from './App';
import router from './router';

import { STORAGE_KEY } from '@/constants/accounts';
import { dateFormat, dateFormatFromString, dfFromTimestamp, fromNow } from '@/filters/date';
import { bn, currency, formattedCurrency, fromWei, hydra, roman } from '@/filters/numeric';
import i18n from '@/locales/i18n';
import dspAxios from '@/plugins/axios';
import vuetify from '@/plugins/vuetify';
import wemix from '@/plugins/wemix';
import store from '@/store';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';
import { dracoStorage } from '@/utils/baseUtil';
import { truncateMiddle } from '@/filters/string-filter';
import XdracoNumber from '@/components/common/XdracoNumber';

Vue.use(VueCompositionAPI);
Chart.register(...registerables);
Vue.config.productionTip = false;

Vue.use(VueVirtualScroller);
Vue.use(VueAxios, axios);
Vue.use(dspAxios);
Vue.use(wemix, { store });

Vue.filter('currency', currency);
Vue.filter('formattedCurrency', formattedCurrency);
Vue.filter('hydra', hydra);
Vue.filter('bn', bn);
Vue.filter('roman', roman);
Vue.filter('dateFormat', dateFormat);
Vue.filter('dfFromTimestamp', dfFromTimestamp);
Vue.filter('dateFormatFromString', dateFormatFromString);
Vue.filter('fromNow', fromNow);
Vue.filter('fromWei', fromWei);
Vue.filter('truncateMiddle', truncateMiddle);

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

extend('decimal2', (v) => {
  if (Math.floor(Number(v)) === Number(v)) {
    return true;
  }

  return (v.toString().split('.')[1].length || 0) <= 2;
});

extend('decimal4', (v) => {
  if (Math.floor(Number(v)) === Number(v)) {
    return true;
  }

  return (v.toString().split('.')[1].length || 0) <= 4;
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('XdracoNumber', XdracoNumber);

if (process.env.VUE_APP_DRACO_ENV === 'production') {
  console.log = () => {};

  if (window.location.host !== 'www.xdraco.com') {
    window.location.href = 'https://www.xdraco.com';
  }
}

i18n.locale = dracoStorage.get(STORAGE_KEY.LOCALE) || 'en';

new Vue({
  i18n,
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
