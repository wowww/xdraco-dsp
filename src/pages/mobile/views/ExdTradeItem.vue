<template>
  <main class="contents market" :class="`bg-grade-${exchangeItem ? exchangeItem.item.grade : ''}`">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="exchange-market add-float" v-if="exchangeItem">
          <div class="wrap-addition">
            <!-- 디자인파트에서 원하는 기능인거 같습니다. -->
            <!-- https://renatodeleao.github.io/vue-sticky-directive/ -->
            <!-- https://codesandbox.io/s/mm4olmxkrx -->
            <div class="wrap-card">
              <item-card :item="exchangeItem.item" :collectible="!!exchangeItem.item.uniqueNo" />
            </div>
            <div class="option-detail">
              <div class="wrap-item-desc">
                <exchange-item-description :item="exchangeItem.item" />

                <div class="wrap-button price-button" v-if="exchangeItem.myItem == 0">
                  <button type="button" class="btn btn-primary-exd" @click="openTrade">
                    <em class="price">
                      <strong class="ico-hydra ico-ss add-inside"
                        >{{ formattedPrice[0] }}<small>{{ formattedPrice[1] }}</small></strong
                      >
                      <span class="rate">$ {{ usd }}</span>
                    </em>
                  </button>
                </div>
                <div class="wrap-button" v-else>
                  <button type="button" class="btn btn-primary2" @click="openCancel">{{ t('t.exd.sales.cancel') }}</button>
                </div>
              </div>

              <template v-if="!!exchangeItem.item.uniqueNo">
                <h2 class="title">{{ t('w.collectible.info') }}</h2>
                <div class="wrap-collectible-info" :data-item-grade="exchangeItem.item.grade">
                  <!-- <div class="wrap-collectible-info" data-item-grade="4"> -->
                  <!-- <div class="wrap-collectible-info" data-item-grade="3"> -->
                  <div class="wrap-info">
                    <dl class="define">
                      <dt>{{ t('w.collectible.source') }}</dt>
                      <dd>DSP Season {{ dspSeason }}</dd>
                    </dl>
                    <dl class="define">
                      <dt>{{ t('w.exd.unique.no') }}</dt>
                      <dd>{{ exchangeItem.item.uniqueNo }}</dd>
                    </dl>
                    <dl class="define">
                      <dt>{{ t('w.collectible.limit-no') }}</dt>
                      <dd>
                        {{
                          exchangeItem.item.limited ||
                          `#${UniqueDict[exchangeItem.item.uniqueNo].idx} / ${UniqueDict[exchangeItem.item.uniqueNo].count}`
                        }}
                      </dd>
                    </dl>
                    <dl class="define">
                      <dt>{{ t('w.collectible.state') }}</dt>
                      <dd>XDRACO</dd>
                    </dl>
                  </div>
                  <div class="info-message">
                    <p style="margin-bottom: 4px" v-if="['2', '3', '4'].includes(exchangeItem.item.itemType.split('_')[0])">
                      {{ t(`s.collectible.info.item-type.${exchangeItem.item.itemType.split('_')[0]}`) }}
                    </p>
                    <p>{{ t('s.collectible.info.mintable') }}</p>
                  </div>
                </div>
                <hr />
              </template>

              <div class="wrap-option" v-if="exchangeItem.item.powerScore > 0 || exchangeItem.item.options.length > 0">
                <h2 class="title">{{ exchangeItem.item.powerScore > 0 ? t('t.exd.power.score') : t('w.exd.options') }}</h2>
                <div class="totalscore" v-if="exchangeItem.item.powerScore > 0">
                  <span class="ico-total">{{ exchangeItem.item.powerScore | currency(0) }}</span>
                </div>

                <ul class="list" v-if="exchangeItem.item.options">
                  <item-option v-for="option in exchangeItem.item.options" :key="`option-${option.optionName}`" :option="option" />
                </ul>
              </div>
              <div
                class="wrap-option"
                v-if="exchangeItem.item.itemType === '17_2' && exchangeItem.item.passiveOption && exchangeItem.item.passiveOption.petOrigin"
              >
                <h2 class="title">{{ exchangeItem.item.passiveOption.petOrigin }}</h2>
                <ul class="list">
                  <item-option :option="{ optionName: exchangeItem.item.passiveOption.desc }" />
                </ul>
              </div>
              <div class="wrap-option" v-if="exchangeItem.item.addOptions.length > 0">
                <h2 class="title">{{ t('t.exd.add.options') }}</h2>
                <ul class="list">
                  <item-option v-for="option in exchangeItem.item.addOptions" :key="`option-${option.optionName}`" :option="option" />
                </ul>
              </div>

              <div class="wrap-seller">
                <div class="seller">
                  <div class="char-info">
                    {{ t('w.exd.seller') }}
                    <strong>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <span v-bind="attrs" v-on="on">{{ exchangeItem.seller.walletAddress | truncateMiddle }}</span>
                        </template>
                        <span>{{ exchangeItem.seller.walletAddress }}</span>
                      </v-tooltip>
                    </strong>
                  </div>
                  <div class="sale">
                    {{ t('w.exd.listed') }}
                    <strong>{{ exchangeItem.seller.saleCount }}</strong>
                  </div>
                  <div class="completed">
                    {{ t('w.exd.tx.complete') }}
                    <strong>{{ exchangeItem.seller.soldOutCount }}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="wrap-suggest" v-if="suggestedTradeItems.filter((item) => item.tradeUID != exchangeItem.tradeUID).length > 0">
            <div class="suggest-header">
              <h2 class="title">{{ t('t.exd.similar.listings') }}</h2>
              <div class="suggest-item">
                <item-info :item="exchangeItem.item" hide-unique-no />
                <div class="function">
                  <router-link :to="`/exd/suggested?itemID=${exchangeItem.item.itemID}&enhance=${exchangeItem.item.enhance}`">
                    <span class="view-more">{{ t('t.exd.view.more') }}</span>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="suggest-list">
              <ul class="list">
                <li class="list-header">
                  <div class="price">
                    <em>{{ t('w.exd.sales.price') }}</em>
                  </div>
                  <div class="enhance">
                    <em>{{ t('w.common.item.enhance') }}</em>
                  </div>
                  <div class="score">
                    <em>{{ t('t.exd.power.score') }}</em>
                  </div>
                  <div class="char-info">
                    <em>{{ t('w.exd.seller') }}</em>
                  </div>
                </li>
                <router-link
                  tag="li"
                  v-for="suggestItem in suggestedTradeItems.filter((item) => item.tradeUID != exchangeItem.tradeUID).slice(0, 5)"
                  :to="`/exd/trade/${suggestItem.tradeUID}`"
                  :key="`suggested-item-${suggestItem.tradeUID}`"
                  style="cursor: pointer"
                >
                  <exd-hydra-price :price="suggestItem.price" icon-size="ss" :hide-label="true" />
                  <div class="enhance">
                    <strong>+{{ suggestItem.item.enhance }}</strong>
                  </div>
                  <div class="score">
                    <strong>{{ suggestItem.item.PowerScore | currency(0) }}</strong>
                  </div>

                  <div class="char-info">
                    <strong>{{ suggestItem.walletAddress || suggestItem.seller.walletAddress | truncateMiddle }}</strong>
                  </div>
                </router-link>
              </ul>
            </div>
          </div>
          <exd-daily-avg-price-chart :item-id="exchangeItem.item.itemID" :enhance="exchangeItem.item.enhance" :grade="exchangeItem.item.grade" />
          <div class="wrap-overall">
            <div class="overall-header">
              <h2 class="title">
                {{
                  t('t.exd.overall.stat', [
                    `${exchangeItem.item.itemName || exchangeItem.item.name}${exchangeItem.item.enhance > 0 ? '+ ' + exchangeItem.item.enhance : ''}`,
                  ])
                }}
              </h2>
            </div>
            <div class="overall-list" v-if="stat && Object.keys(stat).length !== 0">
              <ul>
                <li>
                  <item-stat :title="t('t.exd.recent.price')" :price="stat.recentPrice.price" :date="stat.recentPrice.time" />
                </li>
                <li>
                  <item-stat :title="t('t.exd.highest.price')" :price="stat.maxPrice.price" :date="stat.maxPrice.time" />
                </li>
                <li>
                  <item-stat :title="t('t.exd.average.price')" :price="stat.averagePrice.price" :date="stat.averagePrice.time" />
                </li>
                <li>
                  <item-monthly-stat :title="t('t.exd.trade.volume')" :value="stat.totalVolume.volume" />
                </li>
              </ul>
            </div>
          </div>
          <div class="wrap-price-history" v-if="chartData">
            <div class="chart-header">
              <h2 class="title">Daily Avg. Price Chart</h2>
            </div>

            <line-chart
              class="price-chart"
              :styles="{ width: '100%', height: '280px', position: 'relative' }"
              :chart-data="chartData"
              :options="chartOptions"
              :plugins="chartPlugin"
            />
          </div>
        </div>
        <div v-else-if="exdErrorCode">Server Error : {{ exdErrorCode }}</div>
      </div>
    </section>
    <modal-exchange />
    <Footer />

    <div class="float-bottom">
      <div class="sale-item" v-if="exchangeItem">
        <div class="wrap-buy">
          <div class="price">
            <strong class="ico-hydra ico-sm add-inside"
              >{{ formattedPrice[0] }}<small>{{ formattedPrice[1] }}</small></strong
            >
            <span class="rate">$ {{ usd }}</span>
          </div>
          <button type="button" v-if="exchangeItem.myItem == 0" class="btn btn-primary-exd" @click="openTrade">
            {{ t('w.exd.event.purchase') }}
          </button>
          <button type="button" v-else class="btn btn-primary" @click="openCancel">{{ t('t.exd.sales.cancel') }}</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, reactive, toRefs, watch, computed } from '@vue/composition-api';
import { createNamespacedHelpers, useActions, useMutations, useState } from 'vuex-composition-helpers/dist';

import CharInfo from '@/components-ui/desktop/CharInfo';
import AccountInfo from '@/components/account/AccountInfo';
import CharacterClassThumb from '@/components/common/CharacterClassThumb';
import { useWemixLogin } from '@/composables/round';
import { UniqueDict } from '@/constants/exchange';
import ExdDailyAvgPriceChart from '@/components/exd/common/ExdDailyAvgPriceChart';
import CurrencyNotice from '@/components/common/CurrencyNotice';
import ItemCard from '@/components/common/item/ItemCard';
import ItemOption from '@/components/common/item/ItemOption';
import ExchangeItemDescription from '@/components/exd/common/ExchangeItemDescription';
import ExdHydraPrice from '@/components/exd/common/ExdHydraPrice';
import ItemInfo from '@/components/exd/common/ItemInfo';
import ItemMonthlyStat from '@/components/exd/common/ItemMonthkyStat';
import ItemSeller from '@/components/exd/common/ItemSeller';
import ItemStat from '@/components/exd/common/ItemStat';
import ModalExchange from '@/components/exd/common/modal/ModalExchange';
import { useFormattedRefNumber } from '@/composables/common';
import { useHydraToUsd } from '@/composables/exchange';
import Footer from '@/partials/common/Footer';
import useI18n from '@/utils/useI18n';

const { useState: useAccountState } = createNamespacedHelpers('account');
const { useState: useExdState, useActions: useExdActions, useMutations: useExdMutations } = createNamespacedHelpers('exd');
const { useState: useHspState, useActions: useHspActions, useMutations: useHspMutations } = createNamespacedHelpers('hsp');

export default defineComponent({
  name: 'ExdTradeItem',
  props: {
    tradeUID: String,
  },
  components: {
    ExdHydraPrice,
    ExdDailyAvgPriceChart,
    ItemStat,
    ItemMonthlyStat,
    ModalExchange,
    AccountInfo,
    ItemSeller,
    ItemOption,
    ExchangeItemDescription,
    ItemCard,
    Footer,
    CharInfo,
    ItemInfo,
    CharacterClassThumb,
    CurrencyNotice,
  },
  setup(props, { root }) {
    // const { $route } = root;
    // const { tradeUID } = $route.params;

    if (!props.tradeUID) {
      root.$router.replace('/exd/list');
    }

    const state = reactive({
      stat: null,
      suggestedTradeItems: [],
      suggestedTradeItemsMore: false,
      chartData: null,
      chartOptions: null,
      chartPlugin: null,
    });

    const i18n = useI18n();
    const { wemixLogin } = useWemixLogin(root.$wemix);

    const { loading, exchangeItem, exdErrorCode } = useExdState(['loading', 'exchangeItem', 'exdErrorCode']);
    const { fetchTradeItem } = useExdActions(['fetchTradeItem']);
    const { setOpenExchange, setExchangeItem } = useExdMutations(['setOpenExchange', 'setExchangeItem']);

    const { locale, dracoAccessToken, accessToken, balance } = useState(['locale', 'accessToken', 'dracoAccessToken', 'balance']);
    const { setCommonModal, setOpenDracoLogin } = useMutations(['setCommonModal', 'setOpenDracoLogin']);
    const { closeModal } = useActions(['closeModal']);

    const { exist } = useAccountState(['exist']);

    const dspSeason = computed(() => {
      if (exchangeItem.value) {
        if (exchangeItem.value.item.uniqueNo && exchangeItem.value.item.uniqueNo.match(/^[S02](.+){4,}/)) {
          return 2;
        }
      }

      return 1;
    });

    const formattedPrice = useFormattedRefNumber(exchangeItem);
    const { usd } = useHydraToUsd(exchangeItem, 'price');

    const openTrade = () => {
      if (!accessToken.value) {
        wemixLogin();
        return;
      }

      if (exist.value === 0) {
        setCommonModal({
          open: true,
          title: 'MIR4 account',
          desc: 'Create a MIR4 account for full access to XDRACO services',
          primary: 'OK',
        });
        return;
      }

      if (Number(balance.value.HYDRA) < Number(exchangeItem.value.price)) {
        setCommonModal({
          open: true,
          title: i18n.t('t.exd.purchase.draco.not-enough'),
          desc: i18n.t('s.exd.purchase.draco.not-enough'),
          primary: 'OK',
        });
        return;
      }

      setOpenExchange(true);
    };

    const openCancel = () => {
      setCommonModal({
        open: true,
        title: i18n.t('s.exd.cancel.item', [exchangeItem.value.item.itemName]),
        primary: 'Ok',
        secondary: 'Cancel',
        onPrimary: () => {
          root.$dracoWebApi.delete('/exd/tradeitem', { params: { tradeUID: props.tradeUID } }).then(({ data }) => {
            console.log(data);
            if (data.code === 200) {
              root.$router.replace(`/exd/my-items`);
            }
          });
        },
        onSecondary: () => {
          closeModal();
        },
        onClose: () => {
          console.log('aa');
        },
      });
    };

    const fetchOtherTrades = () => {
      root.$dracoWebApi
        .get('/exd/sameitem/lists', { params: { itemID: exchangeItem.value.item.itemID, enhance: exchangeItem.value.item.enhance } })
        .then(({ data }) => {
          if (data.code === 200) {
            state.suggestedTradeItems = [...data.data.lists];
            state.suggestedTradeItemsMore = data.data.more || false;
          }
        });
    };

    const fetchSummary = () => {
      root.$dracoWebApi
        .get('/exd/sameitem/summary', { params: { itemID: exchangeItem.value.item.itemID, enhance: exchangeItem.value.item.enhance } })
        .then(({ data }) => {
          console.log(data);
          if (data.code === 200) {
            state.stat = { ...data.data };
          }
        });
    };

    watch(
      () => props.tradeUID,
      (from, to) => {
        console.log(from, to);
        fetchTradeItem(from);
      },
    );

    watch(
      () => exchangeItem.value,
      () => {
        if (exchangeItem.value) {
          fetchOtherTrades();
          fetchSummary();
        }
      },
    );

    watch(
      () => locale.value,
      () => {
        fetchTradeItem(props.tradeUID);
      },
    );

    onMounted(() => {
      if (exchangeItem.value && exchangeItem.value.tradeUID !== props.tradeUID) {
        setExchangeItem(null);
      }
      fetchTradeItem(props.tradeUID);
    });

    onUnmounted(() => {
      // setExchangeItem(null);
    });

    return {
      ...i18n,
      ...toRefs(state),
      exchangeItem,
      exdErrorCode,
      loading,
      formattedPrice,
      usd,
      openTrade,
      openCancel,
      UniqueDict,
      exist,
      dspSeason,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app.scss';

.wrap-price-history {
  position: relative;
  padding: 48px 0 0;
  min-height: 100px;

  .price-chart {
    margin-top: 18px;
  }
}
</style>
