<template>
  <v-card class="my-wallet">
    <div class="tabs-content">
      <template v-if="!walletAddress">
        <div class="msgbox vcenter">
          <div>
            <h4 class="title">{{ t('s.account.connect-wallet') }}</h4>
            <div class="desc">
              {{ t('s.account.message.link-wallet') }}
            </div>
            <div class="wrap-button">
              <!-- <button type="button" class="btn btn-primary btn-sm">WEMIX WALLET GUIDE</button> -->
              <a href="https://forum.mir4global.com/post/53" class="btn btn-primary btn-sm" target="_blank">WEMIX WALLET GUIDE</a>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <v-snackbar v-model="isCopiedWalletAddress" :timeout="2500" top>
          <span>Copied</span>
          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="isCopiedWalletAddress = false">Close</v-btn>
          </template>
        </v-snackbar>
        <div class="list-header" v-if="accessToken">
          <div class="my-address">
            <strong>{{ t('w.rounds.wallet.address') }}</strong>
            <button type="button" class="btn-copy" @click="copyToClipboard">
              <span>{{ walletAddress }}</span>
              <em class="hidden">Copy wallet address</em>
            </button>
          </div>
        </div>
        <div class="msgbox vcenter" v-if="!accessToken">
          <div>
            <h4 class="title">{{ t('s.price.login.message') }}</h4>
            <div class="desc"></div>
            <div class="wrap-button">
              <button type="button" class="btn btn-primary btn-sm" @click.stop="wemixLogin">WEMIX LOGIN</button>
            </div>
          </div>
        </div>

        <div class="iscroll" v-if="accessToken && balance">
          <ul class="list">
            <li>
              <div class="list-content">
                <div class="credit-info">
                  <div class="category">{{ t('w.rounds.wallet.balance.draco') }}</div>
                  <div class="info">
                    <span class="ico-darco ico-sm add-inside"
                      >{{ formattedDraco[0] }}<small>{{ formattedDraco[1] }}</small></span
                    >
                  </div>
                </div>
              </div>
              <!--              <div class="fnc">-->
              <!--                <button type="button" class="btn-circle-plus"><span class="hidden">ADD</span></button>-->
              <!--              </div>-->
            </li>
            <li>
              <div class="list-content">
                <div class="credit-info">
                  <div class="category">{{ t('w.rounds.wallet.balance.hydra') }}</div>
                  <div class="info">
                    <span class="ico-hydra2 ico-sm add-inside"
                      >{{ formattedHydra[0] }}<small>{{ formattedHydra[1] }}</small></span
                    >
                  </div>
                </div>
              </div>
              <!-- <div class="fnc">
                <button type="button" class="btn-circle-plus"><span class="hidden">ADD</span></button>
              </div> -->
            </li>
            <li>
              <div class="list-content">
                <div class="credit-info">
                  <div class="category">{{ t('w.rounds.wallet.balance.wemix-credit') }}</div>
                  <div class="info">
                    <span class="ico-wemixcredit ico-sm add-inside"
                      >{{ formattedCredit[0] }}<small>{{ formattedCredit[1] }}</small></span
                    >
                  </div>
                </div>
              </div>
              <!--              <div class="fnc">-->
              <!--                <button type="button" class="btn-circle-plus"><span class="hidden">ADD</span></button>-->
              <!--              </div>-->
            </li>
            <li>
              <div class="list-content">
                <div class="credit-info">
                  <div class="category">{{ t('w.rounds.wallet.balance.wemix') }}</div>
                  <div class="info">
                    <span class="ico-wemix ico-sm add-inside"
                      >{{ formattedWemix[0] }}<small>{{ formattedWemix[1] }}</small></span
                    >
                  </div>
                </div>
              </div>
              <!--              <div class="fnc">-->
              <!--                <button type="button" class="btn-circle-plus"><span class="hidden">ADD</span></button>-->
              <!--              </div>-->
            </li>
          </ul>
        </div>
      </template>
      <div class="btm-info">
        <div class="iflex type-row">
          <div class="desc" v-html="t('s.account.wallet.info')"></div>
          <div class="brand-logo"><em class="hidden">wemix</em></div>
        </div>
      </div>
    </div>
  </v-card>
</template>

<script>
import { defineComponent, watch, reactive, toRefs } from '@vue/composition-api';
import { createNamespacedHelpers, useState, useActions } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';
import { useWemixLogin } from '@/composables/round';
import { useFormattedNumber, useFormattedRefNumber } from '@/composables/common';

const { useState: useAccountState } = createNamespacedHelpers('account');
const clipboardCopy = require('clipboard-copy');

export default defineComponent({
  name: 'AccountMyWallet',
  setup(props, { root }) {
    const { accessToken, walletAddress, balance } = useState(['walletAddress', 'accessToken', 'balance']);
    const { fetchBalance } = useActions(['fetchBalance']);
    const { open, active, loading, worldNames, selectedWorldName } = useAccountState([
      'open',
      'active',
      'loading',
      'worldNames',
      'selectedWorldName',
    ]);

    const state = reactive({
      isCopiedWalletAddress: false,
    });

    const copyToClipboard = () => {
      if (!walletAddress) {
        return;
      }
      clipboardCopy(walletAddress.value);
      state.isCopiedWalletAddress = true;
    };

    watch([open, active], ([currentOpen, currentActive]) => {
      if (currentOpen && currentActive === 1 && accessToken) {
        fetchBalance();
      }
    });

    const { wemixLogin } = useWemixLogin(root.$wemix);

    const formattedDraco = useFormattedRefNumber(balance, 'DRACO', 4);
    const formattedHydra = useFormattedRefNumber(balance, 'HYDRA', 4);
    const formattedWemix = useFormattedRefNumber(balance, 'WEMIX', 4);
    const formattedCredit = useFormattedRefNumber(balance, 'WEMIX CREDIT', 4);

    return {
      ...toRefs(state),
      ...useI18n(),
      accessToken,
      walletAddress,
      balance,
      wemixLogin,
      copyToClipboard,
      formattedDraco,
      formattedHydra,
      formattedWemix,
      formattedCredit,
    };
  },
});
</script>

<style scoped></style>
