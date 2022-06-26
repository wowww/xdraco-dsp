import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const device = md.mobile() ? 'mobile' : 'desktop';

export default [
  {
    path: '/collectibles',
    name: 'Collectibles',
    meta: {
      title: 'COLLECTIBLES | XDRACO',
      hasSubNav: !md.mobile() ? 'collectibles' : null,
    },
    component: () => import(`@/pages/${device}/views/CollectibleList`),
  },
  {
    path: '/collectibles/history',
    name: 'CollectiblesTradeHistory',
    meta: {
      title: 'COLLECTIBLES | XDRACO',
      hasSubNav: !md.mobile() ? 'collectibles' : null,
    },
    props: {
      collectibles: true,
    },
    component: () => import(`@/pages/${device}/views/CollectiblesTradeHistory`),
  },
  {
    path: '/collectibles/trade/:tradeUID',
    name: 'CollectibleItem',
    meta: {
      title: 'COLLECTIBLES | XDRACO',
      hasSubNav: !md.mobile() ? 'collectibles' : null,
      hasBottomSticky: 'type1',
    },
    component: () => import(`@/pages/${device}/views/CollectibleItem`),
    props: (route) => ({
      tradeUID: route.params.tradeUID,
    }),
  },
];
