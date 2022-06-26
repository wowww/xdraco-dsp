import { computed, defineComponent, onBeforeMount, onMounted, onUnmounted, reactive, toRefs, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';

// eslint-disable-next-line import/extensions
import Footer from '@/partials/common/Footer';
import AccountInfo from '@/components/account/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import MyItemsTab from '@/components/exd/common/my/MyItemsTab';
import MyItemsOrder from '@/components/exd/common/my/MyItemsOrder';
import MyItem from '@/components/exd/common/MyItem';
import { MyItemTab } from '@/constants/exchange';
import BannerExdTop from '@/components/banner/ExdTop';
import useI18n from '@/utils/useI18n';

const { useState: useAccountState } = createNamespacedHelpers('account');
const { useState: useExdState, useActions: useExdActions, useMutations: useExdMutations } = createNamespacedHelpers('exd');

export default defineComponent({
  name: 'ExdMyItemList',
  components: {
    BannerExdTop,
    MyItem,
    MyItemsOrder,
    MyItemsTab,
    Footer,
    AccountInfo,
    SidebarContactUs,
  },
  setup(props, { root }) {
    // eslint-disable-next-line no-unused-vars
    const { locale, dracoAccessToken } = useState(['locale', 'dracoAccessToken']);
    const { loading, myItems, myItemTab, myItemsMore, myItemsPage } = useExdState(['loading', 'myItems', 'myItemTab', 'myItemsMore', 'myItemsPage']);
    const { exist } = useAccountState(['exist']);
    const { setMyItemTab } = useExdMutations(['setMyItemTab']);
    const { fetchMyItems } = useExdActions(['fetchMyItems']);

    watch(
      () => myItemTab.value,
      () => {
        fetchMyItems();
      },
    );

    watch(
      () => locale.value,
      () => {
        fetchMyItems();
      },
    );

    watch(
      () => dracoAccessToken.value,
      (current, before) => {
        if (before && !current) {
          root.$router.push('/exd/list');
        }
      },
    );

    onMounted(() => {
      console.log('exd/my-items onMounted');
      setMyItemTab(MyItemTab.SALE);
      if (myItemTab.value === MyItemTab.SALE) {
        if (exist.value === 1) {
          fetchMyItems();
        }
      }
    });

    onUnmounted(() => {
      setMyItemTab(MyItemTab.SALE);
    });

    return {
      MyItemTab,
      ...useI18n(),
      locale,
      loading,
      myItems,
      myItemTab,
      myItemsMore,
      myItemsPage,
      fetchMyItems,
      exist,
    };
  },
});
