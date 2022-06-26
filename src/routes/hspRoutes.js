import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const device = md.mobile() ? 'mobile' : 'desktop';

export default [
  {
    path: '/hsp',
    redirect: { name: 'HspStake' },
  },
  {
    path: '/hsp/stake',
    name: 'HspStake',
    meta: {
      title: 'HSP | XDRACO',
      hasSubNav: 'hsp',
    },
    component: () => import(`@/pages/${device}/views/HspStake`),
  },
  {
    path: '/hsp/playbook',
    name: 'HspPlaybook',
    meta: {
      title: 'HSP | XDRACO',
      hasSubNav: 'hsp',
    },
    component: () => import(`@/pages/${device}/views/HspPlaybook`),
  },
  {
    path: '/hsp/teaser',
    redirect: { name: 'HspStake' },
  },
];
