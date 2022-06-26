<template>
  <v-dialog
    attach="#contents"
    content-class="dialog-mirage dialog-mirage-charge"
    :value="visibleChargeVigor"
    :width="!isMobile ? '640px' : '100%'"
    scrollable
    :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    persistent
  >
    <div class="content">
      <v-btn class="btn-close btn-miragepop-close" @click="setVisibleChargeVigor(false)" fab plain x-small />
      <div class="dialog-header">{{ t('w.mirage.charge.vigor') }}</div>
      <div class="charge-content vigor">
        <div class="remain-item" v-if="accountInfo">
          <div class="item">
            {{ t('w.mirage.vigor') }}<span class="energy">{{ accountInfo.VigorAmount | currency(0) }}</span>
          </div>
          <div class="item">
            {{ t('w.rounds.wallet.balance.hydra')
            }}<span class="hydra"
              >{{ formattedHydra[0] }}<em v-if="formattedHydra[1]">{{ formattedHydra[1] }}</em></span
            >
          </div>
        </div>
        <ul class="charge-list">
          <li class="energy-10">
            <p>{{ t('w.mirage.vigor.10') }}</p>
            <button type="button" class="btn btn-red-mirage" :disabled="loading || balanceLoading" @click="allowance('2')">
              <span class="buy">1</span>
            </button>
          </li>
          <li class="energy-33">
            <p>{{ t('w.mirage.vigor.33') }}</p>
            <button type="button" class="btn btn-red-mirage" :disabled="loading || balanceLoading" @click="allowance('3')">
              <span class="buy">3</span>
            </button>
          </li>
          <li class="energy-60">
            <p>{{ t('w.mirage.vigor.60') }}</p>
            <button type="button" class="btn btn-red-mirage" :disabled="loading || balanceLoading" @click="allowance('4')">
              <span class="buy">5</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import { defineComponent, reactive, toRefs, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useActions, useMutations, useState } from 'vuex-composition-helpers/dist';

import { useFormattedRefNumber, useMobile } from '@/composables/common';
import useI18n from '@/utils/useI18n';

const { useState: useMirageState, useMutations: useMirageMutations, useActions: useMirageActions } = createNamespacedHelpers('mirage');

export default defineComponent({
  name: 'ModalChargeVigor',
  setup(_, { root }) {
    const { t } = useI18n();
    const { $dracoWebApi, $router, $wemix } = root;
    const state = reactive({
      loading: false,
      address: '',
      selectedPrice: 1,
      hash: '',
      products: [],
      productId: '',
    });
    const { locale, accessToken, balance, walletAddress, balanceLoading } = useState([
      'locale',
      'accessToken',
      'balance',
      'walletAddress',
      'balanceLoading',
    ]);
    const { fetchBalance } = useActions(['fetchBalance']);
    const { setCommonModal } = useMutations(['setCommonModal']);
    const { visibleChargeVigor, accountInfo } = useMirageState(['visibleChargeVigor', 'accountInfo']);
    const { setVisibleChargeVigor, setOpenLoading } = useMirageMutations(['setVisibleChargeVigor', 'setOpenLoading']);
    const { fetchAccountInfo } = useMirageActions(['fetchAccountInfo']);

    const formattedHydra = useFormattedRefNumber(balance, 'HYDRA', 4);

    const alertModal = (title, desc) => {
      setCommonModal({
        open: true,
        title,
        desc,
        primary: 'OK',
        onPrimary() {
          // setVisibleChargeVigor(false);
        },
        onClose() {
          // setVisibleChargeVigor(false);
        },
      });
    };

    const showErrorModal = (errorResponse) => {
      console.log(errorResponse);
      /**
       * errorCode
       * - 500 : Network Error
       * - 60617 : Sold Out
       * - 60618 : In-progress
       *
       * - 60621 : DB Error
       */
      const { code: errorCode } = errorResponse;
      let errorTitle = 'Vigor charge was unsuccessful';
      let errorMessage = '';

      switch (errorCode) {
        case 500:
          errorMessage = t('s.exd.purchase.failed.network');
          break;
        case 60606:
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

    const messageSign = (ticketId) => {
      console.log(state);
      const product = state.products.find((item) => item.ProductID == state.productId);

      const message = [
        { type: 'address', value: state.address },
        { type: 'address', value: walletAddress.value },
        { type: 'uint256', value: `${ticketId}` },
        { type: 'uint256', value: `${product.ProductPrice}000000000000000000` },
      ];
      console.log(message);
      const req = $wemix.requestMessageSignature([t('w.mirage.charge.vigor')], ['yellow'], message);
      $wemix.openQR(
        'sign',
        req,
        (success) => {
          console.log(success);
          const last = success[success.length - 1];

          if (last.code === 200 && last.data.Result === 0) {
            setCommonModal({
              open: true,
              title: t('t.mirage.action.success'),
              desc: t('s.mirage.charge.vigor.success'),
              primary: 'OK',
              onPrimary() {
                setVisibleChargeVigor(false);
                setOpenLoading(false);
              },
              onClose() {
                setVisibleChargeVigor(false);
                setOpenLoading(false);
              },
            });

            setTimeout(() => {
              fetchAccountInfo();
            }, 1000);
          } else {
            showErrorModal(last);
          }
        },
        (fail, err) => {
          console.log(fail, err);
          showErrorModal(fail[0]);
          state.loading = false;
          setOpenLoading(false);
        },
        () => {
          state.loading = false;
          setOpenLoading(false);
        },
        'mirage-energy',
        {
          languageCode: locale.value,
          TicketID: ticketId,
          ProductID: state.productId,
        },
      );
    };

    const fetchEnergyPrepare = () => {
      if (!accessToken.value) {
        return;
      }

      $dracoWebApi.get('/mirage/energyprepare', { params: { contractName: 'mirage' } }).then(({ data }) => {
        if (data.code === 200) {
          messageSign(data.data.TicketID);
        }
      });
    };

    const getContractAddress = () => {
      if (!accessToken.value) {
        return;
      }

      $dracoWebApi.get('/exd/contractaddress', { params: { contractName: 'mirage' } }).then(({ data }) => {
        if (data.code === 200) {
          state.address = data.data.address;
        }
      });
    };

    const makeUnsignedTx = () => {
      const req = $wemix.requestSignatureWithMemo([t('s.exd.approve-sign.message')], ['yellow'], state.hash);
      $wemix.openQR(
        'sign',
        req,
        (success) => {
          fetchEnergyPrepare();
        },
        (fail, err) => {
          state.loading = false;
          if (fail.length > 0) {
            showErrorModal(fail[0]);
          }

          setOpenLoading(false);
        },
        () => {
          state.loading = false;
          setOpenLoading(false);
        },
        'mirage-energy',
        {
          languageCode: locale.value,
        },
      );
    };

    const getApprovedSign = () => {
      $dracoWebApi
        .get('/mirage/approve', { params: { token: 'hydra' } })
        .then(({ data }) => {
          if (data.code !== 200 || (data.data.Result && data.data.Result !== 0)) {
            showErrorModal(data);
            return;
          }

          state.hash = data.data.hash;
          makeUnsignedTx();
        })
        .catch((e) => {
          state.loading = false;
          showErrorModal({ code: 500 });
        });
    };

    const allowance = (productId) => {
      state.loading = true;
      state.productId = productId;

      const product = state.products.find((item) => item.ProductID == state.productId);

      if (product) {
        if (balance.value.HYDRA < Number(product.ProductPrice)) {
          alertModal(t('t.exd.purchase.draco.not-enough'), t('s.exd.purchase.draco.not-enough'));
          return;
        }
        setOpenLoading(true);
        $dracoWebApi
          .get('/mirage/allowance', { params: { token: 'hydra', amount: product.ProductPrice } })
          .then(({ data }) => {
            if (data.code !== 200 || !data.data || data.data.isAllowance === undefined) {
              showErrorModal(data);
              return;
            }

            if (data.data.isAllowance === 0) {
              getApprovedSign();
            } else if (data.data.isAllowance === 1) {
              fetchEnergyPrepare();
            }
          })
          .catch((e) => {
            state.loading = false;
            showErrorModal({ code: 500 });
          });
      }
    };

    const fetchEnergy = () => {
      $dracoWebApi
        .get('/mirage/meta/energy')
        .then(({ data }) => {
          if (data.code === 200) {
            state.products = data.data;
          } else {
            state.products = [];
          }
        })
        .catch(() => {
          state.products = [];
        });
    };

    watch(
      () => visibleChargeVigor.value,
      () => {
        if (visibleChargeVigor.value) {
          fetchEnergy();
          getContractAddress();
        } else {
          state.productId = '';
          state.loading = false;
          state.hash = '';
        }

        fetchBalance();
      },
    );

    return {
      ...useI18n(),
      ...useMobile(),
      ...toRefs(state),
      visibleChargeVigor,
      setVisibleChargeVigor,
      balance,
      balanceLoading,
      formattedHydra,
      allowance,
      accountInfo,
    };
  },
});
</script>

<style scoped></style>
