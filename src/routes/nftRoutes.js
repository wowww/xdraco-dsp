import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const device = md.mobile() ? 'mobile' : 'desktop';

export default [
  {
    path: '/nft',
    redirect: { name: 'NftList' },
  },
  {
    path: '/nft/list',
    name: 'NftList',
    meta: {
      title: 'NFT | XDRACO',
      hasSubNav: 'nft',
    },
    component: () => import(`@/pages/${device}/views/NftList`),
  },
  {
    path: '/nft/history',
    name: 'NftTradeHistory',
    meta: {
      title: 'NFT | XDRACO',
      hasSubNav: 'nft',
    },
    component: () => import(`@/pages/${device}/views/NftTradeHistory`),
  },
  {
    path: '/nft/suggested',
    name: 'NftSuggestedList',
    meta: {
      title: 'NFT | XDRACO',
      hasSubNav: 'nft',
    },
    component: () => import(`@/pages/${device}/views/NftSuggestList`),
  },
  {
    path: '/nft/trade/:seq',
    name: 'NftItem',
    meta: {
      title: 'NFT | XDRACO',
      hasSubNav: 'nft',
      hasBottomSticky: 'type1',
    },
    component: () => import(`@/pages/${device}/views/NftTradeItem`),
    props: (route) => ({
      seq: route.params.seq,
    }),
  },
  {
    path: '/nft/my-items',
    name: 'NftMyItemList',
    meta: {
      title: 'NFT | XDRACO',
      hasSubNav: 'nft',
    },
    component: () => import(`@/pages/${device}/views/NftMyList`),
  },
  {
    path: '/nft/my-items/:itemUID',
    name: 'NftMyItem',
    meta: {
      title: 'NFT | XDRACO',
      hasSubNav: 'nft',
    },
    component: () => import(`@/pages/${device}/views/NftMyItem`),
  },
  {
    path: '/nft/playbook',
    name: 'NftPlaybook',
    meta: {
      title: 'NFT | XDRACO',
      hasSubNav: 'nft',
    },
    component: () => import(`@/pages/${device}/views/NftPlaybook`),
  },
];
