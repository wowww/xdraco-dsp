import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const device = md.mobile() ? 'mobile' : 'desktop';

export default [
  {
    path: '/exd',
    redirect: { name: 'Exd' },
  },
  {
    path: '/exd/event',
    name: 'ExdEvent',
    component: () => import(`@/pages/${device}/views/ExdEvent`),
  },
  {
    path: '/exd/list',
    name: 'Exd',
    meta: {
      title: 'EXD | XDRACO',
      hasSubNav: 'exd',
    },
    component: () => import(`@/pages/${device}/views/ExdList`),
  },
  {
    path: '/exd/history',
    name: 'ExdTradeHistory',
    meta: {
      title: 'EXD | XDRACO',
      hasSubNav: 'exd',
    },
    props: {
      collectibles: false,
    },
    component: () => import(`@/pages/${device}/views/ExdTradeHistory`),
  },
  {
    path: '/exd/suggested',
    name: 'ExdSuggestedList',
    meta: {
      title: 'EXD | XDRACO',
      hasSubNav: 'exd',
    },
    component: () => import(`@/pages/${device}/views/ExdSuggestList`),
  },
  {
    path: '/exd/trade/:tradeUID',
    name: 'ExdTradeItem',
    meta: {
      title: 'EXD | XDRACO',
      hasSubNav: 'exd',
      hasBottomSticky: 'type1',
    },
    component: () => import(`@/pages/${device}/views/ExdTradeItem`),
    props: (route) => ({
      tradeUID: route.params.tradeUID,
    }),
  },
  {
    path: '/exd/item/:itemUID',
    name: 'ExdItem',
    meta: {
      title: 'EXD | XDRACO',
      hasSubNav: 'exd',
      hasBottomSticky: 'type1',
    },
    component: () => import(`@/pages/${device}/views/ExdItem`),
    props: (route) => ({
      itemUID: route.params.itemUID,
    }),
  },
  {
    path: '/exd/my-items',
    name: 'ExdMyItemList',
    meta: {
      title: 'EXD | XDRACO',
      hasSubNav: 'exd',
      auth: true,
    },
    component: () => import(`@/pages/${device}/views/ExdMyItemList`),
  },
  {
    path: '/exd/my-items/:itemUID',
    name: 'ExdMyItem',
    meta: {
      title: 'EXD | XDRACO',
      hasSubNav: 'exd',
      auth: true,
    },
    component: () => import(`@/pages/${device}/views/ExdMyItem`),
  },
  {
    path: '/exd/playbook',
    name: 'ExdPlaybook',
    meta: {
      title: 'EXD | XDRACO',
      hasSubNav: 'exd',
    },
    component: () => import(`@/pages/${device}/views/ExdPlaybook`),
  },
];
