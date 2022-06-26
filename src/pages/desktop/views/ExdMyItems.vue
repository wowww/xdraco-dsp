<template>
  <main class="content rounds">
    <section class="section">
      <div class="section__inner">
        <div class="wrap-grid">
          <div class="grid-timeline">
            <h3>Exchange My Items</h3>
            <div class="myitem-list">
              <my-items-tab />

              <div class="wrap-list">
                <!-- v-tabs-items 안에 들어가면 sticky disabled. -->

                <div class="list-bar">
                  <div class="list-bar__title"><em>10</em><strong>아이템</strong></div>

                  <my-items-order />
                </div>

                <template v-if="myItems.length > 0">
                  <ul class="list-myitem">
                    <li v-for="item in myItems" :key="`exd-${myItemTab}-${item.itemUID}`">
                      <my-item :item-type="'sale'" :item="item" />
                    </li>
                  </ul>
                  <div class="wrap-button">
                    <button type="button" class="btn-viewmore">VIEW MORE</button>
                  </div>
                </template>
                <div v-else class="list-empty">리스트 내용 없을때</div>

                <v-tabs-items :value="myItemTab">
                  <v-tab-item class="tab-sale">
                    <ul class="list-myitem">
                      <li>
                        <MyItem
                          myitemType="sale"
                          itemCategory="legendary"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemEnhance="+12"
                          itemPower="11,563"
                          itemPrice="5,185,100"
                          ButtonType="판매대기중"
                        ></MyItem>
                      </li>
                    </ul>
                    <div class="wrap-button">
                      <button type="button" class="btn-viewmore">VIEW MORE</button>
                    </div>

                    <div class="list-empty">리스트 내용 없을때</div>
                  </v-tab-item>
                  <v-tab-item class="tab-soldout">
                    <ul class="list-myitem">
                      <li>
                        <MyItem
                          myitemType="soldout"
                          itemCategory="legendary"
                          itemName="Shineworld Dragon Boots"
                          itemCount="+10"
                          itemPrice="5,211"
                          itemRate="-260.55"
                          itemSettlement="4950.45"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="soldout"
                          itemCategory="epic"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemPrice="5,211"
                          itemRate="-260.55"
                          itemSettlement="4950.45"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="soldout"
                          itemCategory="legendary"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemPrice="5,211"
                          itemRate="-260.55"
                          itemSettlement="4950.45"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="soldout"
                          itemCategory="rare"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemPrice="5,211"
                          itemRate="-260.55"
                          itemSettlement="4950.45"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem
                          myitemType="soldout"
                          itemCategory="legendary"
                          itemName="Shineworld Dragon Boots"
                          itemCount=""
                          itemPrice="5,211"
                          itemRate="-260.55"
                          itemSettlement="4950.45"
                        ></MyItem>
                      </li>
                    </ul>
                    <div class="wrap-button">
                      <button type="button" class="btn-viewmore">VIEW MORE</button>
                    </div>
                  </v-tab-item>
                  <v-tab-item class="tab-seal">
                    <ul class="list-myitem">
                      <li>
                        <MyItem
                          myitemType="seal"
                          itemCategory="legendary"
                          itemName="Shineworld Dragon Boots"
                          itemCount="+20"
                          itemEnhance="+12"
                        ></MyItem>
                      </li>
                      <li>
                        <MyItem myitemType="seal" itemCategory="epic" itemName="Shineworld Dragon Boots" itemEnhance="-"></MyItem>
                      </li>
                      <li>
                        <MyItem myitemType="seal" itemCategory="rare" itemName="Magic stone of Destruction" itemEnhance="+12"></MyItem>
                      </li>
                      <li>
                        <MyItem myitemType="seal" itemCategory="legendary" itemName="Shineworld Dragon Boots" itemEnhance="+12"></MyItem>
                      </li>
                      <li>
                        <MyItem myitemType="seal" itemCategory="legendary" itemName="Shineworld Dragon Boots" itemEnhance="+0"></MyItem>
                      </li>
                      <li>
                        <MyItem myitemType="seal" itemCategory="legendary" itemName="Shineworld Dragon Boots" itemEnhance="+0"></MyItem>
                      </li>
                      <li>
                        <MyItem myitemType="seal" itemCategory="legendary" itemName="Shineworld Dragon Boots" itemEnhance="+0"></MyItem>
                      </li>
                      <li>
                        <MyItem myitemType="seal" itemCategory="legendary" itemName="Shineworld Dragon Boots" itemEnhance="+12"></MyItem>
                      </li>
                      <li>
                        <MyItem myitemType="seal" itemCategory="legendary" itemName="Shineworld Dragon Boots" itemEnhance="+12"></MyItem>
                      </li>
                      <li>
                        <MyItem myitemType="seal" itemCategory="legendary" itemName="Shineworld Dragon Boots" itemEnhance="+12"></MyItem>
                      </li>
                    </ul>
                    <div class="wrap-button">
                      <button type="button" class="btn-viewmore">VIEW MORE</button>
                    </div>
                  </v-tab-item>
                </v-tabs-items>
              </div>
            </div>
          </div>

          <!-- 사이드영역 -->
          <div class="grid-side">
            <aside class="sidebar">
              <account-info />
              <sidebar-contact-us />
            </aside>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script>
import { computed, defineComponent, onBeforeMount, onMounted, reactive, toRefs, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';

// eslint-disable-next-line import/extensions
import Footer from '@/partials/common/Footer';
import AccountInfo from '@/components/account/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import MyItemsTab from '@/components/exd/common/my/MyItemsTab';
import MyItemsOrder from '@/components/exd/common/my/MyItemsOrder';
import MyItem from '@/components/exd/common/MyItem';
import { MyItemTab } from '@/constants/exchange';

const { useState: useExdState, useActions: useExdActions, useMutations: useExdMutations } = createNamespacedHelpers('exd');

export default defineComponent({
  name: 'Exchange',
  components: {
    MyItem,
    MyItemsOrder,
    MyItemsTab,
    Footer,
    AccountInfo,
    SidebarContactUs,
  },
  setup() {
    // eslint-disable-next-line no-unused-vars
    const { locale } = useState(['locale']);
    const { loading, myItems, myItemTab } = useExdState(['loading', 'myItems', 'myItemTab']);
    const { setMyItemTab } = useExdMutations(['setMyItemTab']);
    const { fetchMyItems } = useExdActions(['fetchMyItems']);

    watch(
      () => myItemTab.value,
      () => {
        fetchMyItems();
      },
    );

    onMounted(() => {
      console.log('exd/my-items onMounted');
      setMyItemTab(MyItemTab.SALE);
      if (myItemTab.value === MyItemTab.SALE) {
        fetchMyItems();
      }
    });

    return {
      locale,
      loading,
      myItems,
      myItemTab,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
</style>
