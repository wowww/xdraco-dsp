<template>
  <main class="contents">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <back-button />
        <div class="wrap-grid" v-if="myItem">
          <div class="grid-timeline">
            <div class="exchange-market">
              <div class="wrap-addition">
                <!-- 디자인파트에서 원하는 기능인거 같습니다. -->
                <!-- https://renatodeleao.github.io/vue-sticky-directive/ -->
                <!-- https://codesandbox.io/s/mm4olmxkrx -->
                <div class="wrap-card">
                  <item-card :item="myItem.item" :collectible="!!myItem.item.uniqueNo" />
                </div>
                <div class="option-detail">
                  <validation-provider
                    tag="div"
                    class="wrap-item-desc"
                    ref="form"
                    v-slot="{ errors, failedRules }"
                    :rules="{ required: true, decimal2: true }"
                  >
                    <exchange-item-description :item="myItem.item" />

                    <div class="wrap-form">
                      <div class="form-header">
                        <h3 class="title">{{ t('w.exd.sales.price') }}</h3>
                        <strong class="notice" v-html="t('s.exd.purchase.desc.1', [5])"></strong>
                      </div>

                      <div class="fieldset editable">
                        <div>
                          <span class="ico-hydra ico-ss"><em class="hidden">DRACO</em></span>
                          <input type="text" v-model="price" @keydown="inputPrice" @keyup="inputPrice" :placeholder="t('w.exd.sales.price')" />
                        </div>
                        <div class="in-msg">
                          <span>{{ t('t.exd.tx.earned') }}</span>
                          <span class="ico-hydra ico-nano add-inside">{{ earned | currency(4) }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="wrap-button">
                      <button type="button" class="btn btn-primary-exd" :disabled="errors.length > 0" @click="openRegister = true">
                        {{ t('w.exd.purchase.register') }}
                      </button>
                    </div>
                  </validation-provider>
                  <div class="wrap-option" v-if="myItem.item.powerScore > 0 || myItem.item.options.length > 0">
                    <h2 class="title">{{ myItem.item.powerScore > 0 ? t('t.exd.power.score') : t('w.exd.options') }}</h2>
                    <div class="totalscore">
                      <span class="ico-total">{{ myItem.item.powerScore | currency(0) }}</span>
                    </div>

                    <ul class="list" v-if="myItem.item.options">
                      <item-option v-for="option in myItem.item.options" :key="`option-${option.optionName}`" :option="option" />
                    </ul>
                  </div>
                  <div class="wrap-option" v-if="myItem.item.itemType === '17_2' && myItem.item.passiveOption && myItem.item.passiveOption.petOrigin">
                    <h2 class="title">{{ myItem.item.passiveOption.petOrigin }}</h2>
                    <ul class="list">
                      <item-option :option="{ optionName: myItem.item.passiveOption.desc }" />
                    </ul>
                  </div>
                  <div class="wrap-option" v-if="myItem.item.addOptions.length > 0">
                    <h2 class="title">{{ t('t.exd.add.options') }}</h2>
                    <ul class="list">
                      <item-option v-for="option in myItem.item.addOptions" :key="`option-${option.optionName}`" :option="option" />
                    </ul>
                  </div>
                  <!-- .wrap-seller -->
                </div>
              </div>

              <exd-daily-avg-price-chart :item-id="myItem.item.itemID" :enhance="myItem.item.enhance" :grade="myItem.item.grade" />

              <!-- .wrap-suggest -->
              <div class="wrap-overall">
                <div class="overall-header">
                  <h2 class="title">{{ t('t.exd.overall.stat', [myItem.item.name]) }}</h2>
                </div>
                <div class="overall-list" v-if="stat && Object.keys(stat).length !== 0">
                  <ul>
                    <li>
                      <item-stat :title="t('t.exd.recent.price')" :price="stat.recentPrice.price || '0'" :date="stat.recentPrice.time" />
                    </li>
                    <li>
                      <item-stat :title="t('t.exd.highest.price')" :price="stat.maxPrice.price || '0'" :date="stat.maxPrice.time" />
                    </li>
                    <li>
                      <item-stat :title="t('t.exd.average.price')" :price="stat.averagePrice.price || '0'" :date="stat.averagePrice.time" />
                    </li>
                    <li>
                      <item-monthly-stat :title="t('t.exd.trade.volume')" :value="stat.totalVolume.volume" />
                    </li>
                  </ul>
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
        <!-- float-bottom exd-market -->
      </div>
    </section>
    <v-dialog content-class="dialog-item-regi theme-dark" v-model="openRegister" max-width="640" persistent>
      <div class="content">
        <v-btn class="btn-close" @click="openRegister = false" fab plain x-small>
          <v-icon color="#fff" size="26">mdi-close</v-icon>
        </v-btn>
        <!-- dialogTitle이 있는 경우 대비 -->
        <div class="dialog-header">
          <h2 class="title">{{ t('w.exd.event.listing') }}</h2>
        </div>

        <div class="item-content" v-if="myItem">
          <div class="wrap-cardinfo">
            <div class="card-detail">
              <item-card :item="myItem.item" :collectible="!!myItem.item.uniqueNo" />
            </div>

            <div class="item-detail">
              <exchange-item-description :item="myItem.item" />

              <div class="credit-info">
                <div class="category">{{ t('w.exd.purchase.price') }}</div>
                <div class="info">
                  <span class="ico-hydra ico-sm add-inside">{{ price | currency(2) }}</span>
                </div>
              </div>

              <ul class="list">
                <li v-html="t('s.exd.purchase.desc.1', [5])"></li>
                <li>{{ t('s.exd.purchase.desc.2') }}</li>
                <li>{{ t('s.exd.purchase.desc.3') }}</li>
                <li>{{ t('s.exd.purchase.desc.4') }}</li>
                <li>{{ t('s.exd.purchase.desc.5', [14]) }}</li>
              </ul>
            </div>
          </div>

          <div class="wrap-button">
            <button type="button" class="btn btn-primary2" :disabled="loading" @click="register">
              {{ t('w.exd.purchase.register') }}
            </button>
          </div>
        </div>
      </div>
    </v-dialog>
    <Footer />
  </main>
</template>

<script>
import { computed, defineComponent, onBeforeMount, onMounted, reactive, ref, toRefs, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useActions, useMutations, useState } from 'vuex-composition-helpers/dist';

// eslint-disable-next-line import/extensions
import Footer from '@/partials/common/Footer';
import AccountInfo from '@/components/account/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import ItemCard from '@/components/common/item/ItemCard';
import ItemOption from '@/components/common/item/ItemOption';
import SelectFilter from '@/components-ui/desktop/SelectFilter';
import SelectOrder from '@/components-ui/desktop/SelectOrder';
import { MyItemTab } from '@/constants/exchange';
import ExchangeItemDescription from '@/components/exd/common/ExchangeItemDescription';
import useI18n from '@/utils/useI18n';
import ItemStat from '@/components/exd/common/ItemStat';
import ItemMonthlyStat from '@/components/exd/common/ItemMonthkyStat';
import BackButton from '@/components/common/BackButton';
import ExdDailyAvgPriceChart from '@/components/exd/common/ExdDailyAvgPriceChart';
import BigNumber from 'bignumber.js';

const { useState: useExdState, useActions: useExdActions, useMutations: useExdMutations } = createNamespacedHelpers('exd');

export default defineComponent({
  name: 'ExdMyItem',
  components: {
    BackButton,
    Footer,
    AccountInfo,
    ItemCard,
    SelectFilter,
    SelectOrder,
    ExchangeItemDescription,
    ItemOption,
    ItemStat,
    ItemMonthlyStat,
    SidebarContactUs,
    ExdDailyAvgPriceChart,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',

    // for layer-price-range
    showLayerPriceRange: false,

    // for nav in .list-bar
    itemsRecommend: null,
    itemsExplorer: null,
  }),
  methods: {
    toogleLayerPriceRange() {
      this.showLayerPriceRange = !this.showLayerPriceRange;

      setTimeout(() => {
        if (this.showLayerPriceRange) {
          const inputFrom = this.$el.querySelector('#inputFrom');
          inputFrom.focus();
        }
      }, 10);
    },
    emitSelectOrder() {
      if (!this.showLayerPriceRange) {
        return;
      }
      this.showLayerPriceRange = false;
    },
  },
  setup(props, { root }) {
    const { itemUID } = root.$route.params;

    if (!itemUID) {
      root.$router.replace('/exd/my-items');
    }

    const form = ref(null);
    const state = reactive({
      stat: null,
      openRegister: false,
      loading: false,
      price: '',
    });

    const { t } = useI18n();

    const { myItem, price } = useExdState(['loading', 'items', 'myItem', 'price']);
    const { setMyItemTab } = useExdMutations(['setMyItemTab']);
    const { fetchItems, fetchMyItem } = useExdActions(['fetchItems', 'fetchMyItem']);
    const { locale } = useState(['locale']);

    const { setCommonModal } = useMutations(['setCommonModal']);
    const { closeModal } = useActions(['closeModal']);

    const inputPrice = (v) => {
      console.log(state.price);
      if (state.price) {
        state.price = state.price.replace(/[^0-9.]/g, '');
      }
    };

    const earned = computed(() => {
      if (state.price && !Number.isNaN(state.price)) {
        return new BigNumber(state.price).times(0.95).toString();
      }

      return '0';
    });

    const register = async () => {
      if (state.loading) {
        return;
      }

      const { errors } = await form.value.validate();

      if (errors.length > 0) {
        return;
      }

      state.loading = true;

      root.$dracoWebApi
        .post('/exd/item', {
          itemUID,
          price: state.price,
        })
        .then(({ data }) => {
          state.loading = false;
          if (data.code === 200) {
            setCommonModal({
              open: true,
              title: t('t.exd.purchase.register.complete'),
              desc: t('s.exd.purchase.register.complete', [myItem.value.item.name || myItem.value.item.itemName]),
              primary: 'OK',
              onPrimary() {
                setMyItemTab(MyItemTab.SALE);
                root.$router.push('/exd/my-items');
              },
            });
          } else {
            setCommonModal({
              open: true,
              title: t('t.exd.register.failed'),
              desc: `Error Code : ${data.code}`,
              primary: 'OK',
            });
          }
        })
        .catch(() => {
          state.loading = false;
        });
    };

    onMounted(() => {
      fetchMyItem(itemUID);
    });

    const fetchSummary = () => {
      root.$dracoWebApi
        .get('/exd/sameitem/summary', {
          params: {
            itemID: myItem.value.item.itemID,
            enhance: myItem.value.item.enhance,
          },
        })
        .then(({ data }) => {
          console.log(data);
          if (data.code === 200) {
            state.stat = { ...data.data };
          }
        });
    };

    watch(
      () => myItem.value,
      () => {
        if (myItem.value) {
          console.log('aa');
          if (form.value) {
            form.value.validate();
          }

          fetchSummary();
        }
      },
    );

    watch(
      () => locale.value,
      () => {
        fetchMyItem(itemUID);
      },
    );

    return {
      t,
      ...toRefs(state),
      myItem,
      locale,
      form,
      inputPrice,
      register,
      earned,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
</style>
