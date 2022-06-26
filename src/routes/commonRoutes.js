import AuthCallback from '@/pages/common/AuthCallback';

export default [
  {
    path: '/auth/callback',
    component: AuthCallback,
    meta: {
      hideHeader: true,
    },
  },
];
