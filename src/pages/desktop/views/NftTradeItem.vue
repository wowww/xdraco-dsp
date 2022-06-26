<template>
  <main class="contents nft" :class="`market single bg-grade-${nftGrade}`">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <back-button />

        <div class="wrap-grid">
          <div class="grid-timeline">
            <div class="exchange-market">
              <div class="wrap-addition" v-if="loading">
                <div :style="{ display: 'flex', width: '100%', justifyContent: 'center', margin: '10rem auto' }">
                  <v-progress-circular class="ml-2" size="24" width="4" color="#f0f0f0" indeterminate />
                </div>
              </div>
              <div class="wrap-addition" v-else-if="!loading && item">
                <nft-character-equipment :load-info="loadInfo" />
                <nft-character-description :purchase="purchase" :item="item" />
              </div>
              <div class="wrap-addition" v-else-if="!loading && itemError">Error: {{ itemError }}</div>

              <template v-if="item">
                <nft-character-stat :load-info="loadInfo" />
                <nft-character-skill v-show="loadInfo" />
                <nft-character-spirit v-show="loadInfo" />
                <nft-character-magic-stone v-show="loadInfo" />
                <nft-character-mystical-pieces v-show="loadInfo" />
                <nft-character-training v-show="loadInfo" />
                <nft-character-conquest v-show="loadInfo" />
                <nft-character-asset v-show="loadInfo" />
                <nft-character-codex v-show="loadInfo" />
                <nft-character-inventory v-show="loadInfo" />
                <nft-character-price-history />
              </template>
            </div>
          </div>
          <div class="grid-side">
            <aside class="sidebar">
              <account-info />
              <sidebar-contact-us />
            </aside>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
    <nft-purchase-dialog :open="openQR" :set-open="setOpenQR" :remain="remain" />
    <nft-bottom-fixed-bar
      :item="item"
      :price-rate="price"
      :character-class="characterClass"
      :character-grade="nftGrade"
      :on-click-purchase="purchase"
    />
  </main>
</template>

<script>
import { computed, defineComponent, onMounted, onUnmounted, reactive, ref, toRefs, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useMutations, useState } from 'vuex-composition-helpers/dist';
import qrcode from 'qrcode';
import useI18n from '@/utils/useI18n';
import BackButton from '@/components/common/BackButton';
import AccountInfo from '@/components/account/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import NftCharacterEquipment from '@/components/nft/desktop/NftCharacterEquipment';
import NftCharacterDescription from '@/components/nft/desktop/NftCharacterDescription';
import NftCharacterStat from '@/components/nft/desktop/NftCharacterStat';
import NftCharacterSkill from '@/components/nft/desktop/NftCharacterSkill';
import NftCharacterSpirit1 from '@/components/nft/desktop/NftCharacterSpirit1';
import NftCharacterSpirit2 from '@/components/nft/desktop/NftCharacterSpirit2';
import NftCharacterMagicStone from '@/components/nft/desktop/NftCharacterMagicStone';
import NftCharacterMysticalPieces from '@/components/nft/desktop/NftCharacterMysticalPieces';
import NftCharacterTraining from '@/components/nft/desktop/NftCharacterTraining';
import NftCharacterAsset from '@/components/nft/desktop/NftCharacterAsset';
import NftCharacterConquest from '@/components/nft/desktop/NftCharacterConquest';
import NftCharacterInventory from '@/components/nft/desktop/NftCharacterInventory';
import NftCharacterCodex from '@/components/nft/desktop/NftCharacterCodex';
import NftCharacterPriceHistory from '@/components/nft/desktop/NftCharacterPriceHistory';
import NftCharacterSpirit from '@/components/nft/desktop/NftCharacterSpirit';
import NftBottomFixedBar from '@/components/nft/desktop/NftBottomFixedBar';
import { useMobile } from '@/composables/common';
import { useWemixLogin } from '@/composables/round';
import Footer from '@/partials/common/Footer';
import CharacterClassThumb from '@/components/common/CharacterClassThumb';
import NftPurchaseDialog from '@/components/nft/common/NftPurchaseDialog';

const { useState: useExdState } = createNamespacedHelpers('exd');

const { useState: useNftState, useGetters: useNftGetters, useActions: useNftActions, useMutations: useNftMutations } = createNamespacedHelpers('nft');

export default defineComponent({
  name: 'NftTradeItem',
  props: {
    seq: String,
  },
  components: {
    Footer,
    CharacterClassThumb,
    NftCharacterSpirit,
    NftCharacterPriceHistory,
    NftCharacterCodex,
    NftCharacterInventory,
    NftCharacterAsset,
    NftCharacterConquest,
    NftCharacterTraining,
    NftCharacterMagicStone,
    NftCharacterMysticalPieces,
    NftCharacterSpirit2,
    NftCharacterSpirit1,
    NftCharacterSkill,
    NftCharacterStat,
    NftCharacterDescription,
    NftCharacterEquipment,
    NftBottomFixedBar,
    NftPurchaseDialog,
    AccountInfo,
    BackButton,
    SidebarContactUs,
  },
  setup(props, { root }) {
    const i18n = useI18n();
    const { price } = useExdState(['price']);
    const qrRef = ref(null);
    const state = reactive({
      os: '',
      checkTimer: null,
      timer: null,
      time: 180,
      loadInfo: false,
    });

    const { locale } = useState(['locale']);

    const {
      loading,
      item,
      itemError,
      openQR,
      items: { current },
    } = useNftState(['loading', 'item', 'itemError', 'openQR', 'items']);

    const { nftGrade, characterClass } = useNftGetters(['nftGrade', 'characterClass']);

    const { fetchNftItem } = useNftActions(['fetchNftItem']);
    const { setOpenQR, setItem } = useNftMutations(['setOpenQR', 'setItem']);
    const { isMobile } = useMobile();

    onMounted(() => {
      fetchNftItem(props.seq);
    });

    const goMarket = () => {
      if (state.os === 'android') {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.wemadetree.wemixwallet&hl=ko&gl=US';
      } else if (state.os === 'ios') {
        window.location.href = 'https://apps.apple.com/kr/app/wemix-wallet/id1531057807';
      }
    };

    const checkAppInstall = () => {
      const mobile = /iphone|ipad|ipod|android/i.test(navigator.userAgent.toLowerCase());

      if (mobile) {
        // 유저에이전트를 불러와서 OS를 구분합니다.
        const userAgent = navigator.userAgent.toLowerCase();

        if (userAgent.search('android') > -1) state.os = 'android';
        else if (userAgent.search('iphone') > -1 || userAgent.search('ipod') > -1 || userAgent.search('ipad') > -1) state.os = 'ios';
        else state.os = 'etc';
      } else {
        // 모바일이 아닐 때
        state.os = 'nomobile';
      }

      // 앱에 설정해놓은 커스텀 스킴.
      const schemeHost = 'wemix-wallet://wemixnetwork.com';
      const urlScheme = `${schemeHost}/nft/dex/detail?symbol=M4CHA&tid=${item.nftID}`;

      const clickedAt = +new Date();
      state.checkTimer = setTimeout(() => {
        if (+new Date() - clickedAt < 2000) {
          // if (window.confirm('Wemix 앱이 설치되어 있지 않습니다.   \n설치페이지로 이동하시겠습니까?')) {
          goMarket();
          // }
        }
      }, 1500);
      window.location.href = urlScheme;
    };

    const purchase = () => {
      if (isMobile) {
        checkAppInstall();
      } else {
        console.log(item.contractAddress);
        setOpenQR(true);

        root.$nextTick(() => {
          const url = `wemix-wallet://wemixnetwork.com/nft/dex/detail?symbol=M4CHA&tid=${item.value.nftID}`;
          console.log(url);
          qrcode.toCanvas(document.querySelector('.qrcode-area'), url, { width: 300, errorCorrectionLevel: 'L' });
        });
      }
    };

    const stopTimer = () => {
      clearInterval(state.timer);
      state.time = 0;
    };

    const startTimer = () => {
      state.time = 180;

      state.timer = setInterval(() => {
        state.time -= 1;

        if (state.time <= 0) {
          stopTimer();
          setOpenQR(false);
        }
      }, 1000);
    };

    const remain = computed(() => {
      const time = state.time / 60;
      const minutes = parseInt(time, 10);
      const seconds = Math.round((time - minutes) * 60);
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    });

    watch(
      () => locale.value,
      () => {
        fetchNftItem(props.seq);
      },
    );

    watch(
      () => openQR.value,
      (tobe, asis) => {
        if (asis === true && tobe === false) {
          fetchNftItem(props.seq);
          stopTimer();
        }

        if (asis === false && tobe === true) {
          startTimer();
        }
      },
    );

    watch(
      () => item.value,
      () => {
        if (item.value) {
          state.loadInfo = item.value.tradeType === 1 || Object.keys(item.value.equipItem).length > 0;
        }
      },
    );

    onUnmounted(() => {
      setItem(null);
      if (state.timer) {
        clearTimeout(state.timer);
      }
    });

    return {
      ...i18n,
      loading,
      nftGrade,
      characterClass,
      price,
      item,
      itemError,
      openQR,
      setOpenQR,
      qrRef,
      purchase,
      remain,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';

// NFT 상품상세
@import '~@/assets/sass/desktop/pages/_nft-detail.scss';
@import '~@/assets/sass/desktop/pages/_popup-nft.scss';
</style>
