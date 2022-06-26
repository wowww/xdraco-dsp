<template>
  <main class="contents market" :class="`bg-grade-${collectibleItem ? collectibleItem.item.grade : ''}`">
    <section class="section">
      <div class="section__inner">
        <!-- <div class="subnav-block"></div> -->
        <div class="exchange-market add-float" v-if="collectibleItem">
          <div class="wrap-addition">
            <!-- 디자인파트에서 원하는 기능인거 같습니다. -->
            <!-- https://renatodeleao.github.io/vue-sticky-directive/ -->
            <!-- https://codesandbox.io/s/mm4olmxkrx -->
            <div class="wrap-card">
              <item-card :item="collectibleItem.item" :collectible="!!collectibleItem.item.uniqueNo" />
            </div>
            <div class="option-detail">
              <div class="wrap-item-desc">
                <exchange-item-description :item="collectibleItem.item" />

                <div class="wrap-button price-button" v-if="collectibleItem.myItem == 0">
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

              <h2 class="title">{{ t('w.collectible.info') }}</h2>
              <div class="wrap-collectible-info" :data-item-grade="collectibleItem.item.grade">
                <!-- <div class="wrap-collectible-info" data-item-grade="4"> -->
                <!-- <div class="wrap-collectible-info" data-item-grade="3"> -->
                <div class="wrap-info">
                  <dl class="define">
                    <dt>{{ t('w.collectible.source') }}</dt>
                    <dd>DSP Season {{ dspSeason }}</dd>
                  </dl>
                  <dl class="define">
                    <dt>{{ t('w.exd.unique.no') }}</dt>
                    <dd>{{ collectibleItem.item.uniqueNo }}</dd>
                  </dl>
                  <dl class="define">
                    <dt>{{ t('w.collectible.limit-no') }}</dt>
                    <dd>
                      {{
                        collectibleItem.item.limited ||
                        `#${UniqueDict[collectibleItem.item.uniqueNo].idx} / ${UniqueDict[collectibleItem.item.uniqueNo].count}`
                      }}
                    </dd>
                  </dl>
                  <dl class="define">
                    <dt>{{ t('w.collectible.state') }}</dt>
                    <dd>XDRACO</dd>
                  </dl>
                </div>
                <div class="info-message">
                  <p style="margin-bottom: 4px" v-if="['2', '3', '4'].includes(collectibleItem.item.itemType.split('_')[0])">
                    {{ t(`s.collectible.info.item-type.${collectibleItem.item.itemType.split('_')[0]}`) }}
                  </p>
                  <p>{{ t('s.collectible.info.mintable') }}</p>
                </div>
              </div>
              <hr />

              <div class="wrap-option" v-if="collectibleItem.item.powerScore > 0 || collectibleItem.item.options.length > 0">
                <h2 class="title">{{ collectibleItem.item.powerScore > 0 ? t('t.exd.power.score') : t('w.exd.options') }}</h2>
                <div class="totalscore" v-if="collectibleItem.item.powerScore > 0">
                  <span class="ico-total">{{ collectibleItem.item.powerScore | currency(0) }}</span>
                </div>

                <ul class="list" v-if="collectibleItem.item.options">
                  <item-option v-for="option in collectibleItem.item.options" :key="`option-${option.optionName}`" :option="option" />
                </ul>
              </div>

              <div
                class="wrap-option"
                v-if="collectibleItem.item.itemType === '17_2' && collectibleItem.item.passiveOption && collectibleItem.item.passiveOption.petOrigin"
              >
                <h2 class="title">{{ collectibleItem.item.passiveOption.petOrigin }}</h2>
                <ul class="list">
                  <item-option :option="{ optionName: collectibleItem.item.passiveOption.desc }" />
                </ul>
              </div>
              <div class="wrap-option" v-if="collectibleItem.item.addOptions.length > 0">
                <h2 class="title">{{ t('t.exd.add.options') }}</h2>
                <ul class="list">
                  <item-option v-for="option in collectibleItem.item.addOptions" :key="`option-${option.optionName}`" :option="option" />
                </ul>
              </div>

              <div class="wrap-seller">
                <!-- compo. -->
                <h3 class="title">{{ t('w.exd.seller') }}</h3>

                <!-- components(?) -->
                <div class="seller">
                  <item-seller :seller="collectibleItem.seller" />
                  <div class="sale">
                    {{ t('w.exd.listed') }}
                    <strong>{{ collectibleItem.seller.saleCount }}</strong>
                  </div>
                  <div class="completed">
                    {{ t('w.exd.tx.complete') }}
                    <strong>{{ collectibleItem.seller.soldOutCount }}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <exd-daily-avg-price-chart
            :item-id="collectibleItem.item.itemID"
            :enhance="collectibleItem.item.enhance"
            :grade="collectibleItem.item.grade"
          />
          <div class="wrap-suggest" v-if="suggestedTradeItems.filter((item) => item.tradeUID != collectibleItem.tradeUID).length > 0">
            <div class="suggest-header">
              <h2 class="title">{{ t('t.exd.similar.listings') }}</h2>
              <div class="suggest-item">
                <item-info :item="collectibleItem.item" hide-unique-no />
                <div class="function">
                  <router-link :to="`/exd/suggested?itemID=${collectibleItem.item.itemID}&enhance=${collectibleItem.item.enhance}`">
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
                  <div class="char-info"><em>Seller ID</em></div>
                </li>
                <router-link
                  tag="li"
                  v-for="suggestItem in suggestedTradeItems.filter((item) => item.tradeUID != collectibleItem.tradeUID).slice(0, 5)"
                  :to="`/exd/item/${suggestItem.tradeUID}`"
                  :key="`suggested-item-${suggestItem.tradeUID}`"
                  style="cursor: pointer"
                >
                  <div class="price">
                    <strong class="ico-hydra ico-ss add-inside"
                      ><span>{{ suggestItem.price | currency(2) }}</span></strong
                    >
                  </div>
                  <div class="enhance">
                    <strong>+{{ suggestItem.item.enhance }}</strong>
                  </div>
                  <div class="score">
                    <strong>{{ suggestItem.item.PowerScore | currency(0) }}</strong>
                  </div>

                  <div class="char-info">
                    <div class="thumb" v-if="suggestItem.seller.class">
                      <character-class-thumb :character-class="suggestItem.seller.class" :size="48" />
                    </div>
                    <div class="info">
                      <strong class="nick">{{ suggestItem.seller.walletAddress | truncateMiddle }}</strong>
                    </div>
                  </div>
                </router-link>
              </ul>
            </div>
          </div>
          <div class="wrap-overall">
            <div class="overall-header">
              <h2 class="title">
                {{
                  t('t.exd.overall.stat', [
                    `${collectibleItem.item.itemName || collectibleItem.item.name}${
                      collectibleItem.item.enhance > 0 ? '+ ' + collectibleItem.item.enhance : ''
                    }`,
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
        </div>
        <div v-else-if="errorCode">Server Error : {{ errorCode }}</div>
      </div>
    </section>
    <modal-exchange />
    <Footer />

    <div class="float-bottom">
      <div class="sale-item" v-if="collectibleItem">
        <div class="wrap-buy">
          <div class="price">
            <strong class="ico-hydra ico-sm add-inside"
              >{{ formattedPrice[0] }}<small>{{ formattedPrice[1] }}</small></strong
            >
            <span class="rate">$ {{ usd }}</span>
          </div>
          <button type="button" v-if="collectibleItem.myItem == 0" class="btn btn-primary-exd" @click="openTrade">
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

import Footer from '@/partials/common/Footer';
import ItemCard from '@/components/common/item/ItemCard';
import ExchangeItemDescription from '@/components/exd/common/ExchangeItemDescription';
import ItemOption from '@/components/common/item/ItemOption';
import ItemSeller from '@/components/exd/common/ItemSeller';
import ItemInfo from '@/components/exd/common/ItemInfo';
import AccountInfo from '@/components/account/AccountInfo';
import ModalExchange from '@/components/exd/common/modal/ModalExchange';
import ItemStat from '@/components/exd/common/ItemStat';
import ItemMonthlyStat from '@/components/exd/common/ItemMonthkyStat';

import useI18n from '@/utils/useI18n';
import { useWemixLogin } from '@/composables/round';
import { UniqueDict } from '@/constants/exchange';
import CharacterClassThumb from '@/components/common/CharacterClassThumb';
import ExdDailyAvgPriceChart from '@/components/exd/common/ExdDailyAvgPriceChart';
import CurrencyNotice from '@/components/common/CurrencyNotice';
import { useExhToUsd, useHydraToUsd } from '@/composables/exchange';
import { useFormattedRefNumber } from '@/composables/common';

const { useState: useAccountState } = createNamespacedHelpers('account');
const {
  useState: useCollectibleState,
  useActions: useCollectibleActions,
  useMutations: useCollectibleMutations,
} = createNamespacedHelpers('collectible');

const { useState: useExdState, useActions: useExdActions, useMutations: useExdMutations } = createNamespacedHelpers('exd');
const { useState: useHspState, useActions: useHspActions, useMutations: useHspMutations } = createNamespacedHelpers('hsp');

export default defineComponent({
  name: 'CollectibleItem',
  props: {
    tradeUID: String,
  },
  components: {
    CurrencyNotice,
    ExdDailyAvgPriceChart,
    CharacterClassThumb,
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
  },
  setup(props, { root }) {
    // const { $route } = root;
    // const { tradeUID } = $route.params;

    if (!props.tradeUID) {
      root.$router.replace('/collectible');
    }

    const state = reactive({
      stat: null,
      suggestedTradeItems: [],
      suggestedTradeItemsMore: false,
    });

    const i18n = useI18n();
    const { wemixLogin } = useWemixLogin(root.$wemix);

    const { loading, item: collectibleItem, errorCode } = useCollectibleState(['loading', 'item', 'errorCode']);
    const { fetchCollectibleItem } = useCollectibleActions(['fetchCollectibleItem']);
    const { setOpenExchange, setExchangeItem } = useExdMutations(['setOpenExchange', 'setExchangeItem']);

    const { locale, dracoAccessToken, accessToken, balance } = useState(['locale', 'accessToken', 'dracoAccessToken', 'balance']);
    const { setCommonModal, setOpenDracoLogin } = useMutations(['setCommonModal', 'setOpenDracoLogin']);
    const { closeModal } = useActions(['closeModal']);

    const { exist } = useAccountState(['exist']);

    const dspSeason = computed(() => {
      if (collectibleItem.value) {
        if (collectibleItem.value.item.uniqueNo && collectibleItem.value.item.uniqueNo.match(/^[S02](.+){4,}/)) {
          return 2;
        }
      }

      return 1;
    });

    const formattedPrice = useFormattedRefNumber(collectibleItem);
    const { usd } = useHydraToUsd(collectibleItem, 'price');

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

      if (balance.value.HYDRA < collectibleItem.value.price) {
        setCommonModal({
          open: true,
          title: i18n.t('t.exd.purchase.draco.not-enough'),
          desc: i18n.t('s.exd.purchase.draco.not-enough'),
          primary: 'OK',
        });
        return;
      }

      setExchangeItem(collectibleItem.value);
      setOpenExchange(true);
    };

    const openCancel = () => {
      setCommonModal({
        open: true,
        title: i18n.t('s.exd.cancel.item', [collectibleItem.value.item.itemName]),
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
        .get('/exd/sameitem/lists', { params: { itemID: collectibleItem.value.item.itemID, enhance: collectibleItem.value.item.enhance } })
        .then(({ data }) => {
          if (data.code === 200) {
            state.suggestedTradeItems = [...data.data.lists];
            state.suggestedTradeItemsMore = data.data.more || false;
          }
        });
    };

    const fetchSummary = () => {
      root.$dracoWebApi
        .get('/exd/sameitem/summary', { params: { itemID: collectibleItem.value.item.itemID, enhance: collectibleItem.value.item.enhance } })
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
        fetchCollectibleItem(from);
      },
    );

    watch(
      () => collectibleItem.value,
      () => {
        if (collectibleItem.value) {
          // fetchOtherTrades();
          fetchSummary();
        }
      },
    );

    watch(
      () => locale.value,
      () => {
        fetchCollectibleItem(props.tradeUID);
      },
    );

    onMounted(() => {
      if (collectibleItem.value && collectibleItem.value.tradeUID !== props.tradeUID) {
        setExchangeItem(null);
      }
      fetchCollectibleItem(props.tradeUID);
    });

    onUnmounted(() => {
      setExchangeItem(null);
    });

    return {
      ...i18n,
      ...toRefs(state),
      collectibleItem,
      errorCode,
      loading,
      usd,
      openTrade,
      openCancel,
      UniqueDict,
      formattedPrice,
      dspSeason,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app.scss';
</style>
