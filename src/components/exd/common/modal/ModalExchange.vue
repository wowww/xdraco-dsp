<template>
  <v-dialog
    content-class="dialog-item-buy bg-point"
    v-model="openExchange"
    max-width="640"
    persistent
    :retain-focus="false"
    style="z-index: 290"
    :fullscreen="isMobile"
  >
    <div class="content" v-if="exchangeItem">
      <v-btn class="btn-close" @click="setOpenExchange(false)" fab plain x-small>
        <v-icon color="#fff" size="26">mdi-close</v-icon>
      </v-btn>

      <div class="itembuy-content">
        <div class="wrap-card">
          <h3 class="title">{{ t('t.exd.purchase.item', [`'${exchangeItem.item.itemName}'`]) }}</h3>
          <div class="detail-card">
            <item-card :item="exchangeItem.item" :collectible="!!exchangeItem.item.uniqueNo" />
          </div>
          <div>
            <div class="price">
              <strong class="ico-hydra ico-ss add-inside">{{ exchangeItem.price | currency(2) }}</strong>
              <span class="rate" v-if="price">$ {{ (Number(exchangeItem.price) * Number(hydraPrice.USDHydraRate)) | currency(2) }}</span>
            </div>
          </div>
          <div class="detail-desc">
            {{ t('s.exd.purchase.item', [exchangeItem.price]) }}
          </div>
        </div>

        <div class="wrap-button">
          <button type="button" class="btn btn-primary2" :disabled="winLoading" @click="allowance">{{ t('w.exd.purchase') }}</button>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import { defineComponent, ref, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useMutations, useState } from 'vuex-composition-helpers/dist';
import { ethers } from 'ethers';
import ItemCard from '@/components/common/item/ItemCard';
import { useWemixLogin } from '@/composables/round';
import ItemInfo from '@/components/exd/common/ItemInfo';
import useI18n from '@/utils/useI18n';
import WinnerCharacterItem from '@/components/dsp/round/modal/WinnerCharacterItem';
import CharacterClassThumb from '@/components/common/CharacterClassThumb';
import { useMobile } from '@/composables/common';

const { useState: useExdState, useMutations: useExdMutations } = createNamespacedHelpers('exd');
const { useState: useHspState, useMutations: useHspMutations } = createNamespacedHelpers('hsp');
const {
  useState: useAccountState,
  useGetters: useAccountGetters,
  useMutations: useAccountMutations,
  useActions: useAccountActions,
} = createNamespacedHelpers('account');

export default defineComponent({
  name: 'ModalExchange',
  components: { CharacterClassThumb, ItemInfo, ItemCard, WinnerCharacterItem },
  setup(props, { root }) {
    const winLoading = ref(false);
    const step = ref(0);
    const selectedCharacterUID = ref(null);
    const hash = ref(null);

    const { t } = useI18n();
    const { $wemix, $dracoWebApi } = root;
    const { wemixLogin } = useWemixLogin($wemix);

    const {
      active,
      loading: accountLoading,
      exist,
      worldNames,
      selectedWorldName,
      represent,
    } = useAccountState(['active', 'loading', 'exist', 'worldNames', 'selectedWorldName', 'represent']);
    const { characters } = useAccountGetters(['characters']);
    const { setSelectedWorldName } = useAccountMutations(['setSelectedWorldName']);
    const { fetchUserCharacter, fetchChannelUserCharacter } = useAccountActions(['fetchUserCharacter', 'fetchChannelUserCharacter']);

    const { accessToken, locale, walletAddress } = useState(['accessToken', 'locale', 'walletAddress']);
    const { openExchange, exchangeItem, price } = useExdState(['openExchange', 'exchangeItem', 'price']);
    const { price: hydraPrice } = useHspState(['price']);
    const { setOpenExchange } = useExdMutations(['setOpenExchange']);

    const { setCommonModal } = useMutations(['setCommonModal']);

    watch(
      () => openExchange.value,
      () => {
        if (!openExchange.value) {
          step.value = -1;
        } else {
          step.value = 0;
          hash.value = null;
          selectedCharacterUID.value = null;
          winLoading.value = false;
          fetchUserCharacter();

          // root.$nextTick(() => {
          //   // eslint-disable-next-line no-use-before-define
          //   alertDracoModal();
          // });
        }
      },
    );

    const alertModal = (title, desc) => {
      if (openExchange.value) {
        setOpenExchange(false);
      }

      setCommonModal({
        open: true,
        title,
        desc,
        primary: 'OK',
        onPrimary() {
          root.$router.replace('/exd/list');
        },
        onClose() {
          root.$router.replace('/exd/list');
        },
      });
    };

    const showErrorModal = (errorResponse) => {
      /**
       * errorCode
       * - 500 : Network Error
       * - 60617 : Sold Out
       * - 60618 : In-progress
       *
       * - 60621 : DB Error
       */
      const { code: errorCode } = errorResponse;
      let errorTitle = t('t.exd.purchase.failed');
      let errorMessage = '';

      switch (errorCode) {
        case 500:
          errorMessage = t('s.exd.purchase.failed.network');
          break;
        case 60606:
        case 60609:
          errorMessage = t('s.exd.purchase.choose.character.not-enough.inventory');
          break;
        case 60617:
          errorTitle = t('t.exd.purchase.sold-out');
          errorMessage = t('s.exd.purchase.sold-out');
          break;
        case 60618:
          errorTitle = t('t.exd.purchase.processing');
          errorMessage = t('s.exd.purchase.processing');
          break;
        default:
          errorTitle = t('t.exd.purchase.failed');
          errorMessage = `${t('s.xdraco.common.err.message')}${errorCode ? `(Error Code: ${errorCode})` : ''}`;
          break;
      }

      alertModal(errorTitle, errorMessage);
    };

    const setSelectedCharacterUID = (id) => {
      selectedCharacterUID.value = id;
    };

    const selectCharacter = () => {
      if (!selectedCharacterUID.value) {
        return;
      }

      winLoading.value = true;
      $dracoWebApi
        .get('/exd/tradable', { params: { tradeUID: exchangeItem.value.tradeUID } })
        .then(({ data }) => {
          if (data.code !== 200) {
            showErrorModal(data);
            return;
          }

          const { itemCount, tradable } = data.data;

          if (itemCount >= 30) {
            showErrorModal({ code: 60609 });
            return;
          }

          if (tradable === 0) {
            showErrorModal({ code: 60609 });
            return;
          }

          if (tradable === 2) {
            showErrorModal({ code: 60618 });
            return;
          }

          if (tradable === 3) {
            showErrorModal({ code: 60617 });
            return;
          }

          step.value = 1;
        })
        .catch((e) => {
          showErrorModal({ code: 500 });
        })
        .finally(() => {
          winLoading.value = false;
        });
    };

    const sub32Bytes = (str) => {
      let buffer = 0;
      let idx = 0;
      // eslint-disable-next-line no-constant-condition
      while (true) {
        const unicode = str.charCodeAt(idx);
        buffer += unicode > 127 ? 2 : 1;

        if (buffer > 31) break;
        idx += 1;
      }
      return str.substring(0, idx);
    };

    const messageSign = (address) => {
      const message = [
        { type: 'address', value: address },
        { type: 'address', value: walletAddress.value },
        { type: 'uint256', value: `${exchangeItem.value.tradeUID}` },
        { type: 'bytes32', value: `${ethers.utils.formatBytes32String(sub32Bytes(exchangeItem.value.item.itemName))}` },
        { type: 'uint256', value: `${exchangeItem.value.price}0000000000000000`.replaceAll('.', '') }, // FIXME : 소수점 확인 필요
      ];
      const req = $wemix.requestMessageSignature([t('s.exd.message-sign.message')], ['yellow'], message);
      $wemix.openQR(
        'sign',
        req,
        (success) => {
          console.log(success);
          const last = success[success.length - 1];

          if (last.code === 200 && last.data.Result === 0) {
            setCommonModal({
              open: true,
              title: t('s.exd.purchase.complete'),
              desc: t('s.exd.purchase.complete.desc'),
              primary: 'OK',
              onPrimary() {
                setOpenExchange(false);
                root.$router.push('/inventory');
              },
              onClose() {
                setOpenExchange(false);
                root.$router.push('/inventory');
              },
            });
          } else {
            showErrorModal(last);
          }
        },
        (fail, err) => {
          console.log(fail, err);
          showErrorModal(fail[0]);
        },
        () => {},
        'exd',
        {
          tradeUID: exchangeItem.value.tradeUID,
          languageCode: locale.value,
          itemName32: `${ethers.utils.formatBytes32String(sub32Bytes(exchangeItem.value.item.itemName))}`,
        },
      );
    };

    const getContractAddress = () => {
      winLoading.value = true;
      $dracoWebApi
        .get('/exd/contractaddress', { params: { contractName: 'xhydra' } })
        .then(({ data }) => {
          console.log(data);
          if (data.code !== 200 || !data.data.address) {
            showErrorModal();
            return;
          }

          messageSign(data.data.address);
        })
        .catch((e) => {
          showErrorModal({ code: 500 });
        })
        .finally(() => {
          winLoading.value = false;
        });
    };

    const makeUnsignedTx = () => {
      winLoading.value = true;
      const req = $wemix.requestSignatureWithMemo([t('s.exd.approve-sign.message')], ['yellow'], hash.value);
      $wemix.openQR(
        'sign',
        req,
        (success) => {
          getContractAddress();
        },
        (fail, err) => {
          winLoading.value = false;
          console.log(fail, err);
          if (fail.length > 0) {
            showErrorModal(fail[0]);
          }
        },
        () => {
          winLoading.value = false;
        },
        'exd',
        {
          tradeUID: exchangeItem.value.tradeUID,
          characterUID: selectedCharacterUID.value,
          languageCode: locale.value,
        },
      );
    };

    const getApprovedSign = () => {
      winLoading.value = true;
      $dracoWebApi
        .get('/exd/approvedSign', { params: { price: exchangeItem.value.price } })
        .then(({ data }) => {
          if (data.code !== 200 || (data.data.Result && data.data.Result !== 0)) {
            showErrorModal(data);
            return;
          }

          hash.value = data.data.hash;
          makeUnsignedTx();
        })
        .catch((e) => {
          showErrorModal({ code: 500 });
        })
        .finally(() => {
          winLoading.value = false;
        });
    };

    const allowance = () => {
      winLoading.value = true;
      $dracoWebApi
        .get('/exd/allowance', { params: { price: exchangeItem.value.price } })
        .then(({ data }) => {
          if (data.code !== 200 || !data.data || data.data.isAllowance === undefined) {
            showErrorModal(data);
            return;
          }

          if (data.data.isAllowance === 0) {
            // messageSign();
            getApprovedSign();
          } else if (data.data.isAllowance === 1) {
            getContractAddress();
          }
        })
        .catch((e) => {
          showErrorModal({ code: 500 });
        })
        .finally(() => {
          winLoading.value = false;
        });
    };

    return {
      t,
      openExchange,
      setOpenExchange,
      exchangeItem,
      walletAddress,
      price,
      hydraPrice,
      step,
      accountLoading,
      worldNames,
      selectedWorldName,
      characters,
      setSelectedWorldName,
      fetchChannelUserCharacter,
      selectedCharacterUID,
      selectCharacter,
      setSelectedCharacterUID,
      winLoading,
      allowance,
      ...useMobile(),
      exist,
    };
  },
});
</script>

<style scoped></style>
