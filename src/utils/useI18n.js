import Vue from 'vue';
import { getCurrentInstance } from '@vue/composition-api';

export default () => {
  const instance = getCurrentInstance();
  const vm = instance?.proxy || new Vue({});

  return {
    t: vm.$t.bind(vm),
    tc: vm.$tc.bind(vm),
    d: vm.$d.bind(vm),
    te: vm.$te.bind(vm),
    n: vm.$n.bind(vm),
  };
};
