<template>
  <div class="hsp-my-stake">
    <div class="hsp-title">
      <span>HYDRA Staking Program</span>
      <dl class="contract-code">
        <dt>Contract</dt>
        <dd>
          <v-tooltip :open-on-hover="!isMobile" top>
            <template v-slot:activator="{ on, attrs }">
              <a href="https://mir4draco.com" class="link" target="_blank" v-bind="attrs" v-on="on">0xeb98...b94a8e</a>
            </template>
            <span>0xeb98ABCDEABCDEABCDEb94a8e</span>
          </v-tooltip>
        </dd>
      </dl>
    </div>

    <div class="wrap-box-value">
      <button type="button" class="btn-show-before-login" @click="beforeWemixLogin = !beforeWemixLogin" v-show="beforeWemixLogin">
        show before login
      </button>
      <button type="button" class="btn-show-before-login" @click="beforeWemixLogin = !beforeWemixLogin" v-show="!beforeWemixLogin">
        show after login
      </button>
      <div class="before-login" v-show="!beforeWemixLogin">
        <p>WEMIX WALLET으로 로그인하고 HSP에 참여하세요.</p>
        <div class="wrap-button">
          <button type="button" class="btn btn-wemix-login btn-sm btn-max" @click="wemixLogin">LOGIN</button>
        </div>
      </div>
      <div class="box-value">
        <div class="box-value__top">
          <div class="box-value__header">
            <div class="name">My Stake</div>
            <v-btn width="24" height="24" fab icon>
              <img class="icon-refresh" src="@/assets/img/common/hsp-dialog/ico-refresh.webp" />
            </v-btn>
          </div>
          <div class="box-value__input">
            <!-- <p class="desc" v-show="isPreStake">
              HSP offers a pre-staking option to provide a fair-time staking launch for all participants. Pre-stake and earn rewards from the genesis
              block.
            </p> -->
            <div class="currency-volume">
              <span class="volume wemix">9,999,999,999<span class="decimal-point">.9999</span></span>
              <span class="volume dollar">9,999,999,999<span class="decimal-point">.9999</span></span>
            </div>
            <div class="hydra-input">
              <img class="hydra-icon" src="@/assets/img/common/hsp-dialog/img-icon-hydra-gold.webp" alt="hydra" />
              <!-- <v-text-field class="input" type="tel" placeholder="0" v-model="amountStakedHydra" :hide-details="true" readonly solo flat></
              v-text-field> -->
              <span class="value">1,234,567<span class="decimal-point">.123456789012345</span></span>
            </div>
          </div>
        </div>

        <div class="box-value__bottom">
          <div class="box-value__forecasted">
            <div class="forecasted">
              <span class="forecasted__title">APR(E)</span>
              <span class="forecasted__value">977.<span class="decimal-point">62</span>%</span>
            </div>
            <div class="forecasted">
              <span class="forecasted__title">APY(E)</span>
              <span class="forecasted__value">1,074,654.<span class="decimal-point">09</span>%</span>
            </div>
          </div>
          <div class="box-value__button" v-if="isPreStake">
            <button type="button" class="btn-stake">PRE-STAKE</button>
          </div>
          <div class="box-value__button" v-else>
            <button type="button" class="btn-stake">STAKE</button>
            <button type="button" class="btn-stake btn-unstake" :disabled="isDisableUnstake" @click="startCountdownUnstake">
              <template v-if="isDisableUnstake">
                <vue-countdown class="countdown" :time="10 * 1000" v-slot="{ minutes, seconds }" @end="endCountdownUnstake">
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
            <v-btn width="24" height="24" fab icon>
              <img class="icon-refresh" src="@/assets/img/common/hsp-dialog/ico-refresh-black.webp" />
            </v-btn>
          </div>
          <div class="box-value__input">
            <p class="desc" v-show="isPreStake">Claimable rewards will be reflected once HSP begins on Jan. 28th, 2022 00:00 UTC+8</p>
            <div class="hydra-input">
              <img class="hydra-icon" src="@/assets/img/common/hsp-dialog/img-icon-hydra-gold.webp" alt="hydra" />
              <!-- <v-text-field class="input" type="tel" placeholder="0" v-model="amountReward" :hide-details="true" readonly solo flat></v-text-field> -->
              <span class="value">1,234<span class="decimal-point">.1234</span></span>
            </div>
          </div>
        </div>

        <div class="box-value__bottom">
          <div class="box-value__amount">
            <div class="amount-title">My Total Reward</div>
            <div class="box-contents">
              <span class="box">
                <img class="hydra-icon" src="@/assets/img/common/hsp-dialog/img-icon-hydra-gold.webp" alt="hydra" />
                <span class="count">0.1522</span>
              </span>
            </div>
          </div>
          <div class="box-value__button">
            <button type="button" class="btn-stake btn-unstake" :disabled="isDisableClaimReward" @click="startCountdownClaimReward">
              <template v-if="isDisableClaimReward">
                <vue-countdown class="countdown" :time="12 * 1000" v-slot="{ minutes, seconds }" @end="endCountdownClaimReward">
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
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';
import VueCountdown from '@chenfengyuan/vue-countdown';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { useState } from 'vuex-composition-helpers/dist';
import { useWemixLogin } from '@/composables/round';

const { useState: useAccountState } = createNamespacedHelpers('account');

export default defineComponent({
  name: 'HspMyStake',
  components: {
    VueCountdown,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    md: new MobileDetect(window.navigator.userAgent),

    amountStakedHydra: null,
    amountReward: null,

    isDisableUnstake: true,
    isDisableClaimReward: true,
    isPreStake: true,

    beforeWemixLogin: true,
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
  setup(_, { root }) {
    const { accessToken, dracoAccessToken } = useState(['accessToken', 'dracoAccessToken']);
    const { wemixLogin } = useWemixLogin(root.$wemix);

    return {
      accessToken,
      dracoAccessToken,
      wemixLogin,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/components/hsp-mystake';

.btn-show-before-login {
  position: absolute;
  top: 0;
  left: -60px;
  width: 60px;
  min-height: 60px;
  line-height: 1;
  color: #fff;
  background-color: rgba(#000, 0.5);
}
</style>
