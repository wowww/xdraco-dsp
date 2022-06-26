import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const device = md.mobile() ? 'mobile' : 'desktop';

export default [
  {
    path: '/ui-popup-dsp',
    name: 'DSP - Popup',
    component: () => import(`@/pages-ui/${device}/DspPopup`),
  },
  {
    path: '/ui-rounds',
    name: 'DSP - Rounds',
    component: () => import(`@/pages-ui/${device}/DspRounds`),
  },
  {
    path: '/ui-components',
    name: 'DSP - Components',
    component: () => import(`@/pages-ui/${device}/DspComponents`),
  },
  {
    path: '/ui-promotion',
    name: 'DSP - Event',
    component: () => import(`@/pages-ui/${device}/DspEvent`),
  },
  {
    path: '/ui-popup-exd',
    name: 'EXD - Popup',
    component: () => import(`@/pages-ui/${device}/ExchangePopup`),
  },
  {
    path: '/ui-exd-market3',
    name: 'EXD - Market3',
    meta: {
      hasSubNav: 'exd',
      hasBottomSticky: 'type1',
    },
    component: () => import(`@/pages-ui/${device}/ExchangeMarket3`),
  },
  {
    path: '/ui-exd-market3Detail',
    name: 'EXD - Market3Detail',
    meta: {
      hasSubNav: 'exd',
      hasBottomSticky: 'type1',
    },
    component: () => import(`@/pages-ui/${device}/ExchangeMarket3Detail`),
  },
  {
    path: '/ui-exd-market3Guide',
    name: 'EXD - Market3Guide',
    meta: {
      hasSubNav: 'exd',
      hasBottomSticky: 'type1',
    },
    component: () => import(`@/pages-ui/${device}/ExchangeMarket3Guide`),
  },
  {
    path: '/ui-exd-market2',
    name: 'EXD - Market2',
    meta: {
      hasSubNav: 'exd',
      hasBottomSticky: 'type1',
    },
    component: () => import(`@/pages-ui/${device}/ExchangeMarket2`),
  },
  {
    path: '/ui-exd-market2-regi',
    name: 'EXD - Market2 Register',
    meta: {
      hasSubNav: 'exd',
      hasBottomSticky2: 'type2',
    },
    component: () => import(`@/pages-ui/${device}/ExchangeMarket2Regi`),
  },
  {
    path: '/ui-exd-list',
    name: 'EXD - List',
    meta: {
      hasSubNav: 'exd',
    },
    component: () => import(`@/pages-ui/${device}/ExchangeList`),
  },
  {
    path: '/ui-exd-list-suggested',
    name: 'EXD - ListSuggested',
    meta: {
      hasSubNav: 'exd',
    },
    component: () => import(`@/pages-ui/${device}/ExdListSuggested`),
  },
  {
    path: '/ui-exd-items',
    name: 'EXD - Items',
    meta: {
      hasSubNav: 'exd',
    },
    component: () => import(`@/pages-ui/${device}/ExchangeMyitems`),
  },
  {
    path: '/ui-exd-ranking',
    name: 'EXD - Ranking',
    meta: {
      hasSubNav: 'exd',
    },
    component: () => import(`@/pages-ui/${device}/ExdRanking`),
  },
  {
    path: '/ui-exd-event',
    name: 'EXD - Event',
    component: () => import(`@/pages-ui/${device}/ExdEvent`),
  },
  {
    path: '/ui-nft-ranking',
    name: 'NFT - Ranking',
    meta: {
      hasSubNav: 'nft',
    },
    component: () => import(`@/pages-ui/${device}/NftRanking`),
  },
  {
    path: '/ui-nft-items',
    name: 'NFT - Items',
    meta: {
      hasSubNav: 'nft',
    },
    component: () => import(`@/pages-ui/${device}/NftItems`),
  },
  {
    path: '/ui-nft-list',
    name: 'NFT - List',
    meta: {
      hasSubNav: 'nft',
    },
    component: () => import(`@/pages-ui/${device}/NftList`),
  },
  {
    path: '/ui-nft-detail',
    name: 'NFT - Detail',
    meta: {
      hasSubNav: 'nft',
    },
    component: () => import(`@/pages-ui/${device}/NftDetail`),
  },
  {
    path: '/ui-collectible-list',
    name: 'Collectible - List',
    meta: {
      hasSubNav: !md.mobile() ? 'collectible' : null,
    },
    component: () => import(`@/pages-ui/${device}/CollectibleList`),
  },
  {
    path: '/ui-collectible-detail',
    name: 'Collectible - Detail',
    meta: {
      hasSubNav: !md.mobile() ? 'collectible' : null,
      hasBottomSticky: 'type1',
    },
    component: () => import(`@/pages-ui/${device}/CollectibleDetail`),
  },
  {
    path: '/ui-mywarehouse',
    name: 'myWH - List',
    meta: {
      hasSubNav: !md.mobile() ? 'mywarehouse' : null,
    },
    component: () => import(`@/pages-ui/${device}/MyWarehouse`),
  },
  {
    path: '/ui-hsp',
    name: 'HSP - Index',
    meta: {
      hasSubNav: 'hsp',
    },
    component: () => import(`@/pages-ui/${device}/Hsp`),
  },
  {
    path: '/ui-popup-mirage',
    name: 'Mirage - Popup',
    meta: {
      hasSubNav: 'mirage',
    },
    component: () => import(`@/pages-ui/${device}/MiragePopup`),
  },
  {
    path: '/ui-mirage',
    name: 'Mirage - Index',
    meta: {
      hasSubNav: 'mirage',
    },
    component: () => import(`@/pages-ui/${device}/Mirage`),
  },
  {
    path: '/ui-mirage-play',
    name: 'Mirage - Play',
    meta: {
      hasSubNav: 'mirage',
    },
    component: () => import(`@/pages-ui/${device}/MiragePlay`),
  },
  {
    path: '/ui-mirage-list-myroster',
    name: 'Mirage - List of MyRoster',
    meta: {
      hasSubNav: 'mirage',
    },
    component: () => import(`@/pages-ui/${device}/MirageListMyRoster`),
  },
  {
    path: '/ui-mirage-list-mynfts',
    name: 'Mirage - List of Mynfts',
    meta: {
      hasSubNav: 'mirage',
    },
    component: () => import(`@/pages-ui/${device}/MirageListMynfts`),
  },
  {
    path: '/ui-mirage-NFT-enhancement',
    name: 'Mirage - NFT Enhancement',
    meta: {
      hasSubNav: 'mirage',
    },
    component: () => import(`@/pages-ui/${device}/MirageNftEnhancement`),
  },
  {
    path: '/ui-mirage-boss-raid-detail',
    name: 'Mirage - BossRaid Detail',
    meta: {
      hasSubNav: 'mirage',
    },
    component: () => import(`@/pages-ui/${device}/MirageBossRaidDetail`),
  },
];
