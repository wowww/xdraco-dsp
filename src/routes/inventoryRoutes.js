import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
const device = md.mobile() ? 'mobile' : 'desktop';

export default [
  {
    path: '/inventory',
    component: () => import(`@/templates/${device}/InventoryTemplate`),
    children: [
      {
        path: ':itemUID',
        name: 'InventoryItemPage',
        meta: {
          title: 'Inventory | XDRACO',
          hasSubNav: !md.mobile() ? 'inventory' : null,
          auth: true,
        },
        component: () => import(`@/pages/${device}/inventory/InventoryItemPage`),
      },
      {
        path: '',
        name: 'InventoryPage',
        meta: {
          title: 'Inventory | XDRACO',
          hasSubNav: !md.mobile() ? 'inventory' : null,
          auth: true,
        },
        component: () => import(`@/pages/${device}/inventory/InventoryPage`),
      },
    ],
  },
];
