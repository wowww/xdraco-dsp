<template>
  <div class="account-info">
    <template v-if="!accessToken">
      <div class="wrap-signin">
        <div class="info-char">
          <div class="char">
            <!-- no image show mir4 brand-logo -->
            <div class="wrap-thumb-profile by-wemix">
              <span class="base-profile"></span>
            </div>
          </div>
        </div>
        <span class="desc" v-html="t('s.rounds.login-wemix')"></span>
        <div class="wrap-button">
          <button type="button" class="btn btn-wemix-login btn-sm btn-max" @click="wemixLogin">LOGIN</button>
          <!--          <button type="button" class="btn btn-primary btn-sm btn-max">Game LOGIN</button>-->
        </div>
      </div>
    </template>
    <template v-else>
      <div class="wrap-member">
        <v-menu offset-y left>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" class="btn-more" :class="{ active: openMore }" v-bind="attrs" v-on="on">
              <em class="hidden">MyAccount More</em>
            </button>
          </template>
          <v-list class="dropdown">
            <v-list-item-group class="dropdown__list" color="primary">
              <v-list-item @click="openAccount(0)">
                <span class="text">{{ t('w.rounds.my.character') }}</span>
              </v-list-item>
              <v-list-item @click="openAccount(1)">
                <span class="text">{{ t('w.rounds.my.wallet') }}</span>
              </v-list-item>
              <v-list-item @click="openAccount(2)">
                <span class="text">{{ t('w.rounds.activity') }}</span>
              </v-list-item>
              <v-list-item @click="goInventory">
                <span class="text">Inventory</span>
              </v-list-item>
              <v-list-item @click="logOut">
                <span class="text">Logout</span>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>

        <template v-if="exist && exist === 1 && represent && represent.characterName">
          <div class="info-char">
            <div class="char">
              <div class="wrap-thumb-profile">
                <character-class-thumb :character-class="represent.class" :size="120" />
                <span class="base-profile"></span>
              </div>
              <strong class="nick">{{ represent.characterName }}</strong>
              <span class="server">{{ represent.worldName }}</span>
            </div>
          </div>
          <div class="info-mychar">
            <ul>
              <li class="class">
                <em>Class</em>
                <strong>{{ represent.class ? t(`w.rounds.item.class.${represent.class}`) : t('s.account.message.select-represent') }}</strong>
              </li>
              <li class="level">
                <em>Level</em>
                <strong>{{ represent.lv }}</strong>
              </li>
            </ul>
          </div>
          <div class="wrap-button" v-if="!$route.path.includes('inventory')">
            <router-link to="/inventory" class="btn btn-primary2 btn-sm" style="width: 100%">XDRACO Inventory</router-link>
          </div>
        </template>
        <template v-if="exist && exist === 1 && (!represent || !represent.characterName)">
          <div class="info-char">
            <div class="char">
              <div class="wrap-thumb-profile"><span class="base-profile"></span></div>
            </div>
          </div>
          <div class="set-mainchar">
            <div @click="openAccount(0)">{{ t('s.account.message.select-represent') }}</div>
          </div>
        </template>
        <template v-if="exist === 0">
          <div class="info-char">
            <div class="char">
              <!-- no image show mir4 brand-logo -->
              <div class="wrap-thumb-profile by-wemix">
                <span class="base-profile"></span>
              </div>
              <div class="without-game-account">
                <div class="nick">{{ `${walletAddress.slice(0, 6)}...${walletAddress.slice(-6)}` }}</div>
                <p class="desc">{{ t('s.common.mir4.account') }}</p>
                <a href="https://mir4global.com" class="link-play-mir4" target="_blank">PLAY MIR4</a>
              </div>
            </div>
            <div class="wrap-button" v-if="!$route.path.includes('inventory')">
              <router-link to="/inventory" class="btn btn-primary2 btn-sm" style="width: 100%">XDRACO Inventory</router-link>
            </div>
          </div>
        </template>
        <div class="wrap-button" v-if="walletAddress && !accessToken">
          <button type="button" class="btn btn-primary btn-sm btn-max btn-wemix" @click="wemixLogin"><em class="hidden">WEMIX </em>LOGIN</button>
        </div>
      </div>
      <div class="wallet-link" v-if="!walletAddress">
        <p class="desc">{{ t('s.rounds.event.message.not-linked') }}</p>
        <a href="https://forum.mir4global.com/post/53" target="_blank">{{ t('s.account.message.wemix-guide') }}</a>
      </div>

      <div class="list-balance" v-if="accessToken">
        <div v-if="balanceLoading" style="height: 150px; display: flex; flex-direction: column; justify-content: center; align-items: center">
          <v-progress-circular class="ml-2" :size="32" :width="4" color="#fff" indeterminate />
        </div>
        <ul class="list" v-if="balance">
          <li>
            <div class="list-content">
              <div class="credit-info">
                <div class="category">DRACO Balance</div>
                <div class="info">
                  <span class="ico-darco ico-xs add-inside"
                    >{{ formattedDraco[0] }}<small>{{ formattedDraco[1] }}</small></span
                  >
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="list-content">
              <div class="credit-info">
                <div class="category">HYDRA Balance</div>
                <div class="info">
                  <span class="ico-hydra ico-xs add-inside"
                    >{{ formattedHydra[0] }}<small>{{ formattedHydra[1] }}</small></span
                  >
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="list-content">
              <div class="credit-info">
                <div class="category">WEMIX CREDIT Balance</div>
                <div class="info">
                  <span class="ico-wemixcredit ico-xs add-inside"
                    >{{ formattedWemix[0] }}<small>{{ formattedWemix[1] }}</small></span
                  >
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, reactive, toRefs } from '@vue/composition-api';
import { useMutations, useState, createNamespacedHelpers, useActions } from 'vuex-composition-helpers/dist';
import useI18n from '@/utils/useI18n';
import { useWemixLogin } from '@/composables/round';
import CharacterClassThumb from '@/components/common/CharacterClassThumb';
import { separateDecimalPoint } from '@/filters/numeric';
import { useFormattedNumber, useFormattedRefNumber } from '@/composables/common';

const { useState: useAccountState, useActions: useAccountActions, useMutations: useAccountMutations } = createNamespacedHelpers('account');

export default defineComponent({
  name: 'AccountInfo',
  components: { CharacterClassThumb },
  setup(props, { root }) {
    const state = reactive({
      openMore: false,
    });
    const { dracoAccessToken, accessToken, walletAddress, balance, balanceLoading } = useState([
      'dracoAccessToken',
      'accessToken',
      'walletAddress',
      'balance',
      'balanceLoading',
    ]);
    const { setOpenDracoLogin, setAccessToken, setCommonModal } = useMutations(['setOpenDracoLogin', 'setAccessToken', 'setCommonModal']);
    const { logOut, fetchBalance } = useActions(['logOut', 'fetchBalance']);

    const { exist, represent } = useAccountState(['exist', 'represent']);
    const { setOpen, setActive } = useAccountMutations(['setOpen', 'setActive']);
    const { fetchChannelUserCharacter } = useAccountActions(['fetchChannelUserCharacter']);

    const openAccount = (active) => {
      setActive(active);
      setOpen(true);
    };

    const goInventory = () => {
      if (!root.$route.path.includes('inventory')) {
        root.$router.push('/inventory');
      }
    };

    const { wemixLogin } = useWemixLogin(root.$wemix);

    onMounted(() => {
      if (dracoAccessToken.value && represent.value && represent.value.characterName) {
        fetchChannelUserCharacter();
      }
    });

    const formattedDraco = useFormattedRefNumber(balance, 'DRACO', 4);
    const formattedHydra = useFormattedRefNumber(balance, 'HYDRA', 4);
    const formattedWemix = useFormattedRefNumber(balance, 'WEMIX CREDIT', 4);

    return {
      ...useI18n(),
      ...toRefs(state),
      dracoAccessToken,
      accessToken,
      walletAddress,
      balanceLoading,
      balance,
      setOpenDracoLogin,
      exist,
      represent,
      openAccount,
      logOut,
      wemixLogin,
      formattedDraco,
      formattedHydra,
      formattedWemix,
      goInventory,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/components/account-info';
</style>
