import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const device = md.mobile() ? 'mobile' : 'desktop';

export default [
  {
    path: '/mirage',
    component: () => import(`@/templates/${device}/MirageTemplate`),
    children: [
      {
        path: '',
        redirect: { name: 'MirageDashboard' },
      },
      {
        path: 'dashboard',
        name: 'MirageDashboard',
        meta: {
          title: 'MIRAGE | XDRACO',
          hasSubNav: 'mirage',
          hasBottomSticky: 'type1',
        },
        component: () => import(`@/pages/${device}/mirage/MirageDashboardPage`),
      },
      {
        path: 'valley-capture/:serverId',
        name: 'MirageValleyCapture',
        meta: {
          title: 'MIRAGE | XDRACO',
          hasSubNav: 'mirage',
          hasBottomSticky: 'type1',
        },
        component: () => import(`@/pages/${device}/mirage/MirageValleyPage`),
      },
      {
        path: 'my',
        name: 'MirageMy',
        meta: {
          title: 'MIRAGE | XDRACO',
          hasSubNav: 'mirage',
          hasBottomSticky: 'type1',
        },
        component: () => import(`@/pages/${device}/mirage/MirageMyPage`),
      },
      {
        path: 'boss-raid/:serverId',
        name: 'MirageBossRaidPage',
        meta: {
          title: 'MIRAGE | XDRACO',
          hasSubNav: 'mirage',
          hasBottomSticky: 'type1',
        },
        component: () => import(`@/pages/${device}/mirage/MirageBossRaidPage`),
      },
    ],
  },
  {
    path: '/mirage/teaser',
    name: 'MirageTeaser',
    meta: {
      title: 'MIRAGE | XDRACO',
      hasSubNav: 'mirage', // for teaser page
    },
    component: () => import(`@/pages/${device}/views/MirageTeaser`),
  },
  {
    path: '/mirage/playbook',
    name: 'Playbook',
    meta: {
      title: 'MIRAGE | XDRACO',
      hasSubNav: 'mirage',
    },
    component: () => import(`@/pages/${device}/mirage/MiragePlaybook`),
  },
  {
    path: '/mirage/mirax',
    name: 'MiraX',
    meta: {
      title: 'MIRAGE | XDRACO',
      hasSubNav: 'mirage',
    },
    component: () => import(`@/pages/${device}/mirage/MirageMiraX`),
  },
];
