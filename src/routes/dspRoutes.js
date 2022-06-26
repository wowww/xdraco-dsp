import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const device = md.mobile() ? 'mobile' : 'desktop';

export default [
  {
    path: '/dsp',
    redirect: { name: 'DspRounds' },
  },
  {
    path: '/dsp/rounds',
    name: 'DspRounds',
    meta: {
      title: 'DSP | XDRACO',
      hasSubNav: 'dsp',
    },
    component: () => import(`@/pages/${device}/views/DspRounds`),
  },
  {
    path: '/dsp/playbook',
    name: 'DspPlaybook',
    meta: {
      title: 'DSP | XDRACO',
      hasSubNav: 'dsp',
    },
    component: () => import(`@/pages/${device}/views/DspPlaybook`),
  },
];
