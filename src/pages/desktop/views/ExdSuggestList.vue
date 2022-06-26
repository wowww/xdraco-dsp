<template>
  <main class="contents market">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <back-button />
        <div class="wrap-grid">
          <div class="grid-timeline">
            <div class="exchange-market">
              <div class="wrap-suggest">
                <div class="suggest-header">
                  <div class="suggest-item">
                    <item-info :item="exchangeItem.item" />
                  </div>
                </div>
                <div class="suggest-list">
                  <div class="wrap-filter">
                    <v-select
                      class="select-filter orderby"
                      :items="sortItems"
                      :menu-props="{ bottom: true, offsetY: true, contentClass: 'select-filter-layer' }"
                      persistent-hint
                      return-object
                      single-line
                      dark
                      dense
                      outlined
                      :value="sort"
                      @change="changeSort"
                    ></v-select>
                  </div>
                  <ul class="list" style="margin-top: 66px">
                    <suggested-item
                      v-for="(item, itemIdx) in suggestedTradeItems"
                      :key="`suggested-item-${item.tradeUID}-${itemIdx}`"
                      :suggest-item="item"
                    />
                  </ul>
                </div>

                <div class="wrap-button" v-if="suggestedTradeItemsMore" @click="fetchOtherTrades(page + 1)">
                  <button type="button" class="btn-viewmore">VIEW MORE</button>
                </div>
              </div>
            </div>
          </div>

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
import { defineComponent, onMounted, reactive, toRefs, watch, computed } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import Footer from '@/partials/common/Footer';
import AccountInfo from '@/components/account/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import ItemInfo from '@/components/exd/common/ItemInfo';
import SuggestedItem from '@/components/exd/common/SuggestedItem';
import useI18n from '@/utils/useI18n';
import BackButton from '@/components/common/BackButton';

const { useState: useExdState, useActions: useExdActions, useMutations: useExdMutations } = createNamespacedHelpers('exd');

export default defineComponent({
  name: 'ExdSuggestList',
  components: { BackButton, SuggestedItem, ItemInfo, AccountInfo, Footer, SidebarContactUs },
  setup(props, { root }) {
    const { t } = useI18n();
    const { $dracoWebApi } = root;
    const { itemID, enhance } = root.$route.query;

    const state = reactive({
      stat: null,
      page: 1,
      suggestedTradeItems: [],
      suggestedTradeItemsMore: false,
      sort: 'latest',
      sortItems: [
        { text: t('w.exd.filter.order.latest'), value: 'latest' },
        { text: t('w.exd.filter.order.oldest'), value: 'oldest' },
        // { text: t('w.exd.filter.order.pricehigh'), value: 'pricehigh' },
        // { text: t('w.exd.filter.order.pricelow'), value: 'pricelow' },
      ],
    });

    const { locale } = useState(['locale']);
    const { loading, exchangeItem, price, exdErrorCode } = useExdState(['loading', 'exchangeItem', 'price', 'exdErrorCode']);

    const sortValue = computed(() => {
      return state.sortItems.find((item) => item.value === state.sort);
    });

    const changeSort = (value) => {
      state.sort = value;
    };

    const fetchOtherTrades = (page = 1) => {
      $dracoWebApi
        .get('/exd/sameitem/lists', { params: { itemID, enhance: enhance || '0', sort: state.sort.value, page: page || 1 } })
        .then(({ data }) => {
          if (data.code === 200) {
            state.page = page;
            if (data.data.lists) {
              if (page > 1) {
                state.suggestedTradeItems = [...state.suggestedTradeItems, ...data.data.lists];
              } else {
                state.suggestedTradeItems = [...data.data.lists];
              }
            }
            state.suggestedTradeItemsMore = data.data.more || false;
          }
        });
    };

    onMounted(() => {
      if (!exchangeItem.value || !itemID) {
        root.$router.replace('/exd/list');
      }

      fetchOtherTrades();
    });

    watch(
      () => locale.value,
      () => {
        fetchOtherTrades();
      },
    );

    watch(
      () => state.sort,
      () => {
        fetchOtherTrades();
      },
    );

    return {
      ...toRefs(state),
      exchangeItem,
      sortValue,
      changeSort,
      t,
      fetchOtherTrades,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
</style>
