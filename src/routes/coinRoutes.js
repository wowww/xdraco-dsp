import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const device = md.mobile() ? 'mobile' : 'desktop';

export default [
  {
    path: '/coin',
    component: () => import(`@/templates/${device}/CoinTemplate`),
    children: [
      {
        path: '',
        redirect: { name: 'CoinPrice' },
      },
      {
        path: 'price',
        name: 'CoinPrice',
        meta: {
          hasSubNav: 'coin',
          className: 'price',
        },
        component: () => import(`@/pages/${device}/coin/PricePage`),
      },
      {
        path: 'hydra',
        name: 'CoinHydra',
        meta: {
          hasSubNav: 'coin',
          className: 'hydra',
        },
        component: () => import(`@/pages/${device}/coin/HydraPage`),
      },
      {
        path: 'draco',
        name: 'CoinDraco',
        meta: {
          hasSubNav: 'coin',
          className: 'draco',
        },
        component: () => import(`@/pages/${device}/coin/DracoPage`),
      },
      {
        path: 'drain',
        name: 'CoinDrain',
        meta: {
          hasSubNav: 'coin',
          className: 'drain',
        },
        component: () => import(`@/pages/${device}/coin/DrainPage`),
      },
      {
        path: 'hydrapayments',
        name: 'CoinHydrapayments',
        meta: {
          hasSubNav: 'coin',
          className: 'hydrapayments',
        },
        component: () => import(`@/pages/${device}/coin/HydraPayment`),
      },
    ],
  },
];
