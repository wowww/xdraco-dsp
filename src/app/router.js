import Vue from 'vue';
import MobileDetect from 'mobile-detect';
import VueRouter from 'vue-router';

import axios from 'axios';
import store from '@/store';
import Forbidden from '@/pages/common/Forbidden';
import Unavailable from '@/pages/common/Unavailable';
import Policy from '@/pages/common/Policy';
import Notfound from '@/pages/common/Notfound';
import Servererror from '@/pages/common/Servererror';
// import Maintenance from '@/pages/common/Maintenance';
import MaintenanceV1 from '@/pages/common/Maintenance-v1';
import uiRoutes from '@/routes/uiRoutes';
import commonRoutes from '@/routes/commonRoutes';
import exdRoutes from '@/routes/exdRoutes';
import collectibleRoutes from '@/routes/collectibleRoutes';
import nftRoutes from '@/routes/nftRoutes';
import dspRoutes from '@/routes/dspRoutes';
import hspRoutes from '@/routes/hspRoutes';
import mirageRoutes from '@/routes/mirageRoutes';
import warehouseRoutes from '@/routes/inventoryRoutes';
import coinRoutes from '@/routes/coinRoutes';

Vue.use(VueRouter);
const md = new MobileDetect(window.navigator.userAgent);
const device = md.mobile() ? 'mobile' : 'desktop';

const routes = [
  ...commonRoutes,
  ...exdRoutes,
  ...collectibleRoutes,
  ...nftRoutes,
  ...dspRoutes,
  ...hspRoutes,
  ...mirageRoutes,
  ...coinRoutes,
  ...warehouseRoutes,
  {
    path: '/auth/:provider',
    component: () => import(`@/pages/${device}/views/AuthProvider`),
    meta: {
      hideHeader: true,
    },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(`@/pages/${device}/views/Home`),
  },
  {
    path: '/mir4nft',
    name: 'Mir4nft',
    component: () => import(`@/pages/${device}/views/Mir4nft`),
  },
  {
    path: '/mywarehouse',
    name: 'MyWarehouse',
    meta: {
      hasSubNav: !md.mobile() ? 'mywarehouse' : null,
    },
    component: () => import(`@/pages/${device}/views/MyWarehouse`),
  },
  {
    path: '/forbidden',
    name: 'Forbidden',
    component: Forbidden,
  },
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/maintenance',
    name: 'maintenance',
    component: MaintenanceV1,
  },
  {
    path: '/policy',
    name: 'Policy',
    component: Policy,
    meta: {
      hideHeader: true,
      hideContainer: true,
    },
  },
  {
    path: '/404',
    name: 'notFound',
    component: Notfound,
  },
  {
    path: '/502',
    name: 'Servererror',
    component: Servererror,
  },
  {
    path: '/503',
    name: 'Unavailable',
    component: Unavailable,
    meta: {
      hideHeader: true,
      hideContainer: true,
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: process.env.VUE_APP_DRACO_ENV === 'development' ? [...routes, ...uiRoutes] : [...routes],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

router.beforeEach(async (to, from, next) => {
  if (process.env.NODE_ENV === 'production') {
    if (to.name !== 'Unavailable') {
      try {
        const res = await axios.post(`${process.env.VUE_APP_DRACO_API_ENTRY_POINT}/ip/draco/access`);

        if (res.data.Code === 80807) {
          return next({ name: 'Unavailable' });
        }
      } catch (e) {
        return next({ name: 'Unavailable' });
      }
    }
  }

  const auth = to.matched.some((t) => t.meta.auth);

  if (auth) {
    if (!store.state.dracoAccessToken) {
      return next({ path: '/' });
    }
  }

  if (store.state.dracoAccessToken && !store.state.account.represent) {
    await store.dispatch('account/fetchUserCharacter');
  }
  if (store.state.accessToken && !store.state.balance) {
    await store.dispatch('fetchBalance');
  }

  if (store.state.afterLogin) {
    store.commit('setAfterLogin', false);
  }

  return next();
});

router.afterEach((to, from) => {
  const title = to.meta.title === undefined ? 'XDRACO' : to.meta.title;
  Vue.nextTick(() => {
    document.title = title;
  });
});

export default router;
