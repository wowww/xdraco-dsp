import Cookies from 'js-cookie';

// eslint-disable-next-line import/prefer-default-export
export const dracoStorage = {
  set(key, value, options = {}) {
    localStorage.setItem(key, value);
  },
  get(key) {
    return localStorage.getItem(key);
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};
