<template>
  <div class="hsp-my-stake">
    <div class="hsp-title">
      <span>{{ t('t.hsp') }}</span>
      <dl class="contract-code">
        <dt>{{ !isMobile ? 'Contract' : '' }}</dt>
        <dd>
          <v-tooltip :open-on-hover="!isMobile" top>
            <template v-slot:activator="{ on, attrs }">
              <a
                :href="`https://scope.wemixnetwork.com/1003/account/0x28e8b5a156e4f23986a06444d6aaa34c2fe4360c`"
                class="link"
                target="_blank"
                v-bind="attrs"
                v-on="on"
              >
                0x28e8...e4360c
              </a>
            </template>
            <span>0x28e8b5a156e4f23986a06444d6aaa34c2fe4360c</span>
          </v-tooltip>
        </dd>
      </dl>
    </div>

    <div class="wrap-box-value">
      <div class="before-login" v-if="!accessToken">
        <p>{{ t('s.hsp.wemix-login') }}</p>
        <div class="wrap-button">
          <button type="button" class="btn btn-wemix-login btn-sm btn-max" @click="wemixLogin">LOGIN</button>
        </div>
      </div>
      <div class="box-value" v-else>
        <div class="box-value__top">
          <div class="box-value__header">
            <div class="name">My Stake</div>
            <v-btn width="24" height="24" fab icon @click="fetchMy" :disabled="loadingMy">
              <img class="icon-refresh" :class="{ on: loadingMy }" src="@/assets/img/common/hsp-dialog/ico-refresh.webp" />
            </v-btn>
          </div>
          <div class="box-value__input">
            <div class="currency-volume" v-if="my.stakeAmount && price">
              <span class="volume wemix"
                >{{ formattedMyStakeWemix[0] }}<span class="decimal-point" v-if="formattedMyStakeWemix[1]">{{ formattedMyStakeWemix[1] }}</span></span
              >
              <span class="volume dollar"
                >{{ formattedMyStakeUsd[0] }}<span class="decimal-point" v-if="formattedMyStakeUsd[1]">{{ formattedMyStakeUsd[1] }}</span></span
              >
            </div>
            <p class="desc" v-if="preStake">
              {{ t('s.hsp.message.pre-stake.stake') }}
            </p>
            <div class="hydra-input">
              <img class="hydra-icon" src="@/assets/img/common/hsp-dialog/img-icon-hydra-gold.webp" alt="hydra" />
              <span class="value">
                {{ formattedMyStake[0] }}<span class="decimal-point" v-if="formattedMyStake[1]">{{ formattedMyStake[1] }}</span>
              </span>
            </div>
          </div>
        </div>

        <div class="box-value__bottom">
          <div class="box-value__forecasted">
            <div class="forecasted">
              <span class="forecasted__title">APR</span>
              <span class="forecasted__value" v-html="apr"></span>
            </div>
            <div class="forecasted">
              <span class="forecasted__title">APY</span>
              <span class="forecasted__value" v-html="apy"></span>
            </div>
          </div>
          <div class="box-value__button">
            <button type="button" class="btn-stake" @click="handleStake(true)" :disabled="loadingMy">{{ preStake ? 'PRE-STAKE' : 'STAKE' }}</button>
            <button
              v-if="!preStake && Number(my.stakeAmount) > 0"
              type="button"
              class="btn-stake btn-unstake"
              :disabled="loadingMy || !my.isCanUnstake"
              @click="handleUnstake(true)"
            >
              <template v-if="!my.isCanUnstake">
                <vue-countdown class="countdown" :time="remainUnstake" v-slot="{ minutes, seconds }" @end="endCountdownUnstake">
                  <!-- <vue-countdown class="countdown" :time="60 * 60 * 1000" v-slot="{ minutes, seconds }" @end="endCountdownUnstake"> -->
                  <span>{{ minutes }}m</span>
                  <span>{{ seconds }}s</span>
                </vue-countdown>
              </template>
              <span>UNSTAKE</span>
            </button>
          </div>
        </div>
      </div>

      <div class="box-value style-reward">
        <div class="box-value__top">
          <div class="box-value__header">
            <div class="name">My Claimable Reward</div>
            <v-btn width="24" height="24" fab icon :disabled="loadingMy" @click="fetchMy">
              <img class="icon-refresh" :class="{ on: loadingMy }" src="@/assets/img/common/hsp-dialog/ico-refresh-black.webp" />
            </v-btn>
          </div>
          <div class="box-value__input">
            <div class="currency-volume dark" v-if="my.claimAmount && price">
              <span class="volume wemix"
                >{{ formattedMyRewardWemix[0]
                }}<span class="decimal-point" v-if="formattedMyRewardWemix[1]">{{ formattedMyRewardWemix[1] }}</span></span
              >
              <span class="volume dollar"
                >{{ formattedMyRewardUsd[0] }}<span class="decimal-point" v-if="formattedMyRewardUsd[1]">{{ formattedMyRewardUsd[1] }}</span></span
              >
            </div>
            <div class="hydra-input">
              <img class="hydra-icon" src="@/assets/img/common/hsp-dialog/img-icon-hydra-gold.webp" alt="hydra" />
              <span class="value">
                {{ formattedMyReward[0] }}<span class="decimal-point" v-if="formattedMyReward[1]">{{ formattedMyReward[1] }}</span>
              </span>
            </div>
          </div>
        </div>

        <div class="box-value__bottom">
          <div class="box-value__amount">
            <div class="amount-title">{{ t('w.hsp.my.claimed.reward') }}</div>
            <div class="box-contents">
              <span class="box">
                <img class="hydra-icon" src="@/assets/img/common/hsp-dialog/img-icon-hydra-gold.webp" alt="hydra" />
                <span class="count">{{ (preStake ? 0 : my.totalClaimedAmount || 0) | currency(4) }}</span>
              </span>
            </div>
          </div>
          <div class="box-value__button">
            <button
              type="button"
              class="btn-stake btn-unstake"
              :disabled="preStake || loadingMy || !my.isCanClaim || Number(my.claimAmount || 0) === 0"
              @click="openReward = true"
            >
              <template v-if="!my.isCanClaim">
                <vue-countdown class="countdown" :time="remainClaim" v-slot="{ minutes, seconds }" @end="endCountdownClaimReward">
                  <!-- <vue-countdown class="countdown" :time="60 * 60 * 1000" v-slot="{ minutes, seconds }" @end="endCountdownClaimReward"> -->
                  <span>{{ minutes }}m</span>
                  <span>{{ seconds }}s</span>
                </vue-countdown>
              </template>
              <span>CLAIM REWARD</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <v-dialog
      :value="openLoading"
      content-class="dialog-hsp"
      scrollable
      :max-width="!isMobile ? '480px' : null"
      persistent
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <v-card class="dialog-loading-contents" tile>
        <v-btn class="close" @click="openLoading = false" fab icon absolute small v-show="false">
          <v-icon color="#000">mdi-close</v-icon>
        </v-btn>

        <v-card-text class="loading-contents">
          <img v-if="hspLoading" class="icon-loading" src="@/assets/img/desktop/popup/ico-status-loading.webp" />

          <h2 class="loading-status">
            <template v-if="hspLoading">{{ t('t.hsp.main.loading.doing') }}</template>
            <template v-else-if="hspError === 0 && hspMethod">{{ t(`t.hsp.main.loading.success-${hspMethod}`) }}</template>
            <template v-else-if="hspError !== 0 && hspMethod">{{ t(`t.hsp.main.loading.fail-${hspMethod}`) }}</template>
          </h2>

          <div class="loading-info">
            <template v-if="hspLoading">{{ t('s.hsp.main.loading.waiting') }}</template>
            <template v-else-if="hspError === 0 && hspMethod">{{ t(`s.hsp.main.loading.success-${hspMethod}`) }}</template>
            <template v-else-if="hspError !== 0 && hspMethod">{{ t(`s.hsp.main.loading.fail`) }}</template>
          </div>

          <div v-if="hspError !== 0" class="loading-info">Error {{ hspError }}</div>

          <v-btn v-if="!hspLoading" @click="openLoading = false" class="loading-close" color="#aa00ff" elevation="0" x-large dark>
            {{ t('w.hsp.main.stake.ok') }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
    <hsp-modal-stake :open="openStake" @onClose="handleStake(false)" @onStart="startHspLoading" @onEnd="endHspLoading" @onCancel="cancelHsp" />
    <hsp-modal-unstake :open="openUnstake" @onClose="handleUnstake(false)" @onStart="startHspLoading" @onEnd="endHspLoading" @onCancel="cancelHsp" />
    <hsp-modal-reward :open="openReward" @onClose="handleReward(false)" @onStart="startHspLoading" @onEnd="endHspLoading" @onCancel="cancelHsp" />
  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown';
import { computed, defineComponent, reactive, toRefs, watch } from '@vue/composition-api';
import { useNow } from '@vueuse/core';
import BigNumber from 'bignumber.js';
import dayjs from 'dayjs';
import MobileDetect from 'mobile-detect';
import { createNamespacedHelpers, useActions, useState } from 'vuex-composition-helpers/dist';
import { fromWei } from 'web3-utils';

import HspModalReward from '@/components/hsp/HspModalReward';
import HspModalStake from '@/components/hsp/HspModalStake';
import HspModalUnstake from '@/components/hsp/HspModalUnstake';
import { useFormattedNumber, useFormattedRefNumber } from '@/composables/common';
import { useHspStore } from '@/composables/hsp';
import { useWemixLogin } from '@/composables/round';
import { currency, separateDecimalPoint } from '@/filters/numeric';
import useI18n from '@/utils/useI18n';

const { useState: useAccountState } = createNamespacedHelpers('account');

export default defineComponent({
  name: 'HspMyStake',
  props: {
    preStake: {
      type: Boolean,
      default: false,
    },
    apr: '',
    apy: '',
  },
  components: {
    HspModalReward,
    HspModalUnstake,
    HspModalStake,
    VueCountdown,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    md: new MobileDetect(window.navigator.userAgent),
  }),
  methods: {
    startCountdownUnstake() {
      this.isDisableUnstake = true;
    },
    endCountdownUnstake() {
      this.isDisableUnstake = false;
    },

    startCountdownClaimReward() {
      this.isDisableClaimReward = true;
    },
    endCountdownClaimReward() {
      this.isDisableClaimReward = false;
    },
  },
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
  },
  setup({ apr, apy }, { root }) {
    const { useHspState, useHspGetters, useHspActions } = useHspStore();
    const { loadingMy, my, total, price } = useHspState(['loadingMy', 'my', 'total', 'price']);
    const { fetchMy } = useHspActions(['fetchMy']);
    const { accessToken, dracoAccessToken, walletAddress } = useState(['accessToken', 'dracoAccessToken', 'walletAddress']);
    const { fetchBalance } = useActions(['fetchBalance']);
    const { wemixLogin } = useWemixLogin(root.$wemix);
    const now = useNow();

    const state = reactive({
      openStake: false,
      openUnstake: false,
      amountStakedHydra: null,
      amountReward: null,

      openReward: false,
      formattedApr: '--%',
      formattedApy: '--%',
      openLoading: false,
      hspMethod: '',
      hspLoading: false,
      hspError: 0,
    });

    const handleStake = (v) => {
      state.openStake = v;
      if (!v) {
        fetchMy();
        fetchBalance();
      }
    };

    const handleUnstake = (v) => {
      state.openUnstake = v;
      if (!v) {
        fetchMy();
        fetchBalance();
      }
    };

    const handleReward = (v) => {
      state.openReward = v;
      if (!v) {
        fetchMy();
        fetchBalance();
      }
    };

    const remainUnstake = computed(() => {
      if (my.value && !my.value.isCanUnstake) {
        const lastUnstakeTime = Number(my.value.lastUnstakeTime);
        if (lastUnstakeTime > 0) {
          return dayjs((lastUnstakeTime + 60 * 60) * 1000)
            .utc(true)
            .diff(dayjs().utc(true), 'millisecond');
        }
      }

      return 0;
    });

    const remainClaim = computed(() => {
      if (my.value && !my.value.isCanClaim) {
        const lastClaimTime = Number(my.value.lastClaimTime);
        if (lastClaimTime > 0) {
          return dayjs((lastClaimTime + 60 * 60) * 1000)
            .utc(true)
            .diff(dayjs().utc(true), 'millisecond');
        }
      }

      return 0;
    });

    const formattedMyStake = computed(() => {
      return separateDecimalPoint(my.value ? my.value.stakeAmount : '');
    });

    const formattedMyStakeUsd = computed(() => {
      if (my.value && my.value.stakeAmount && price.value && price.value.USDHydraRate) {
        return separateDecimalPoint(Number(my.value.stakeAmount) * Number(price.value.USDHydraRate));
      }

      return ['', ''];
    });

    const formattedMyStakeWemix = computed(() => {
      if (my.value && my.value.stakeAmount && price.value && price.value.HydraPrice) {
        return separateDecimalPoint(Number(my.value.stakeAmount) * Number(price.value.HydraPrice));
      }

      return ['', ''];
    });

    const formattedMyReward = computed(() => {
      return separateDecimalPoint(my.value ? my.value.claimAmount : '');
    });

    const formattedMyRewardUsd = computed(() => {
      if (my.value && my.value.claimAmount && price.value && price.value.USDHydraRate) {
        return separateDecimalPoint(Number(my.value.claimAmount) * Number(price.value.USDHydraRate));
      }

      return ['', ''];
    });

    const formattedMyRewardWemix = computed(() => {
      if (my.value && my.value.claimAmount && price.value && price.value.HydraPrice) {
        return separateDecimalPoint(Number(my.value.claimAmount) * Number(price.value.HydraPrice));
      }

      return ['', ''];
    });

    const startHspLoading = (method) => {
      state.hspMethod = method;
      state.openLoading = true;
      state.hspLoading = true;
    };

    const endHspLoading = (method, errorCode = 0) => {
      console.log(method, errorCode);
      state.hspLoading = false;
      state.hspError = errorCode;
    };

    const cancelHsp = () => {
      state.hspLoading = false;
      state.openLoading = false;
    };

    watch(
      () => [apr, apy],
      () => {
        console.log(apr, apy);
      },
    );

    return {
      ...useI18n(),
      ...toRefs(state),
      accessToken,
      dracoAccessToken,
      walletAddress,
      wemixLogin,
      handleStake,
      remainUnstake,
      remainClaim,
      handleUnstake,
      loadingMy,
      my,
      price,
      fetchMy,
      handleReward,
      fromWei,
      formattedMyStake,
      formattedMyStakeUsd,
      formattedMyStakeWemix,
      formattedMyReward,
      formattedMyRewardUsd,
      formattedMyRewardWemix,
      startHspLoading,
      endHspLoading,
      cancelHsp,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/components/hsp-mystake';
</style>
