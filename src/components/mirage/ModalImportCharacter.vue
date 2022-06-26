<template>
  <v-dialog
    attach="#contents"
    content-class="dialog-mirage dialog-scorepop-type2 dialog-mirage-score"
    :value="visible"
    :width="!isMobile ? '560px' : '100%'"
    scrollable
    :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    persistent
  >
    <div class="content">
      <v-btn class="btn-close btn-miragepop-close" @click="$emit('close')" fab plain x-small />
      <div class="info" v-if="item">
        <nft-card
          :item="{
            tokenID: item.TokenID,
            lv: item.CharacterLev,
            characterName: item.CharacterName,
            class: item.CharacterClass,
            powerScore: item.PowerScore,
          }"
        />
        <div class="info-box">
          <dl class="info-score">
            <dt>MIRAGE Score</dt>
            <dd>
              <span class="volume" v-if="mirageScore">{{ mirageScore | currency(0) }}</span>
              <div class="mirax">
                <span>MiraX</span>
                <span class="value">{{ item.MiraX }}</span>
              </div>
            </dd>
          </dl>
        </div>
      </div>
      <div class="mirage-popup-scorepopdesc">
        <p>
          {{ t('s.mirage.transfer.roster') }}
        </p>
      </div>
      <button type="button" class="btn btn-red-mirage" :disabled="loading" @click="getPrepare">
        <span class="single">{{ t('w.mirage.transfer.roster') }}</span>
      </button>
    </div>
  </v-dialog>
</template>

<script>
import { defineComponent, reactive, toRefs, watch, computed } from '@vue/composition-api';
import { createNamespacedHelpers, useMutations, useState } from 'vuex-composition-helpers/dist';
import { ethers } from 'ethers';
import { useNow } from '@vueuse/core';
import dayjs from 'dayjs';
import BigNumber from 'bignumber.js';
import NftCard from '@/components/nft/common/NftCard';
import useI18n from '@/utils/useI18n';
import { useMobile } from '@/composables/common';

const { useState: useMirageState, useMutations: useMirageMutations } = createNamespacedHelpers('mirage');

export default defineComponent({
  name: 'ModalImportCharacter',
  components: { NftCard },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { root, emit }) {
    const now = useNow({ interval: 1000 });
    const { t } = useI18n();
    const { $dracoWebApi, $wemix, $emit } = root;
    const state = reactive({
      loading: false,
      address: '',
    });

    const { openLoading } = useMirageState(['openLoading']);
    const { setOpenLoading } = useMirageMutations(['setOpenLoading']);
    const { valleyCapture, accessToken, walletAddress } = useState(['valleyCapture', 'accessToken', 'walletAddress']);
    const { setCommonModal } = useMutations(['setCommonModal']);

    const closedDuration = Number(process.env.VUE_APP_MIRAGE_CLOSED_DURATION);

    const alertModal = (title, desc) => {
      setCommonModal({
        open: true,
        title,
        desc,
        primary: 'OK',
        onPrimary() {
          state.loading = false;
          setOpenLoading(false);
        },
        onClose() {
          state.loading = false;
          setOpenLoading(false);
        },
      });
    };

    const showErrorModal = (errorResponse) => {
      const { code: errorCode } = errorResponse;
      let errorTitle = t('t.mirage.action.failed');
      let errorMessage = '';

      switch (errorCode) {
        case 500:
          errorMessage = t('s.exd.purchase.failed.network');
          break;
        default:
          errorTitle = t('t.mirage.action.failed');
          errorMessage = `${t('s.xdraco.common.err.message')}${errorCode ? `(Error Code: ${errorCode})` : ''}`;
          break;
      }

      alertModal(errorTitle, errorMessage);
    };

    const messageSign = (nonce) => {
      const message = [
        { type: 'address', value: state.address },
        { type: 'uint256', value: `${props.item.TokenID}` },
        { type: 'address', value: walletAddress.value },
        { type: 'uint256', value: nonce },
        { type: 'string', value: 'unseal' },
      ];
      console.log(message);
      const req = $wemix.requestMessageSignature([t('w.mirage.transfer.roster')], ['yellow'], message);
      console.log(req);
      $wemix.openQR(
        'sign',
        req,
        (success) => {
          const last = success[success.length - 1];

          if (last.code === 200 && last.data.Result === 0) {
            setCommonModal({
              open: true,
              title: t('t.mirage.action.success'),
              desc: t('s.mirage.import.success'),
              primary: 'OK',
              onPrimary() {
                state.loading = false;
                setOpenLoading(false);
                emit('close');
              },
              onClose() {
                state.loading = false;
                setOpenLoading(false);
                emit('close');
              },
            });
          } else {
            showErrorModal(last);
          }
        },
        (fail, err) => {
          showErrorModal(fail[0]);
        },
        () => {
          state.loading = false;
          setOpenLoading(false);
        },
        'mirage-unseal',
        {
          TokenID: props.item.TokenID,
          nonce,
        },
      );
    };

    const getPrepare = () => {
      setOpenLoading(true);
      $dracoWebApi
        .get('/mirage/prepare', { params: { txType: 'unseal' } })
        .then(({ data }) => {
          if (data.code === 200) {
            messageSign(data.data.nonce);
          } else {
            showErrorModal();
          }
        })
        .catch(() => {
          showErrorModal();
        });
    };

    const getContractAddress = () => {
      $dracoWebApi
        .get('/exd/contractaddress', { params: { contractName: 'character' } })
        .then(({ data }) => {
          console.log(data);
          if (data.code !== 200 || !data.data.address) {
            showErrorModal({ code: data.code });
            return;
          }

          state.address = data.data.address;
        })
        .catch((e) => {
          showErrorModal({ code: 500 });
          state.loading = false;
        });
    };

    const startDay = computed(() => {
      if (valleyCapture.value && valleyCapture.value.schedule) {
        return dayjs.unix(valleyCapture.value.schedule.StartDT).utcOffset(8, false);
      }

      return dayjs();
    });

    const endDay = computed(() => {
      if (valleyCapture.value && valleyCapture.value.schedule) {
        return dayjs.unix(valleyCapture.value.schedule.EndDT).utcOffset(8, false);
      }

      return dayjs();
    });

    const nowDay = computed(() => {
      return dayjs(now.value).utcOffset(8, false);
    });

    const startDiff = computed(() => {
      return nowDay.value.diff(startDay.value, 'minute');
    });

    const closedDiff = computed(() => {
      return nowDay.value.diff(endDay.value, 'minute');
    });

    const closed = computed(() => {
      return Math.abs(closedDiff.value) < closedDuration || Math.abs(startDiff.value) < closedDuration;
    });

    const mirageScore = computed(() => {
      if (props.item && props.item.PowerScore) {
        const mirax = new BigNumber(props.item.MiraX || '0');
        return new BigNumber(props.item.PowerScore)
          .plus(mirax.isGreaterThan(100000) ? 100000 : mirax)
          .pow(2)
          .div(100000)
          .toNumber();
      }

      return 0;
    });

    watch(
      () => props.visible,
      () => {
        if (props.visible) {
          getContractAddress();
        }
        if (!props.visible) {
          state.loading = false;
        }
      },
    );

    return {
      t,
      ...toRefs(state),
      ...useMobile(),
      getContractAddress,
      messageSign,
      getPrepare,
      closed,
      mirageScore,
    };
  },
});
</script>

<style scoped></style>
