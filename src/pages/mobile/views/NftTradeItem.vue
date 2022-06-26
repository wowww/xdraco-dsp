<template>
  <main class="contents nft" :class="`market bg-grade-${nftGrade}`">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="exchange-market add-float">
          <!-- 상단 캐릭터 정보 영역 -->
          <div class="wrap-addition" v-if="loading">
            <div :style="{ display: 'flex', width: '100%', justifyContent: 'center', margin: '10rem auto' }">
              <v-progress-circular class="ml-2" :size="24" :width="4" color="#f0f0f0" indeterminate />
            </div>
          </div>
          <div class="wrap-addition" v-else-if="!loading && item">
            <nft-character-equipment :width="320" :load-info="loadInfo" />
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
    </section>
    <Footer></Footer>
    <nft-bottom-fixed-bar :item="item" :price-rate="price" :on-click-purchase="purchase" />
  </main>
</template>

<script>
import { computed, defineComponent, onMounted, onUnmounted, reactive, ref, toRefs, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useMutations, useState } from 'vuex-composition-helpers/dist';
import qrcode from 'qrcode';
import useI18n from '@/utils/useI18n';
import Footer from '@/partials/common/Footer';
import NftCharacterEquipment from '@/components/nft/desktop/NftCharacterEquipment';
import NftCharacterDescription from '@/components/nft/desktop/NftCharacterDescription';
import NftCharacterStat from '@/components/nft/desktop/NftCharacterStat';
import NftCharacterSkill from '@/components/nft/desktop/NftCharacterSkill';
import NftCharacterSpirit1 from '@/components/nft/desktop/NftCharacterSpirit1';
import NftCharacterSpirit2 from '@/components/nft/desktop/NftCharacterSpirit2';
import NftCharacterMagicStone from '@/components/nft/desktop/NftCharacterMagicStone';
import NftCharacterTraining from '@/components/nft/desktop/NftCharacterTraining';
import NftCharacterAsset from '@/components/nft/desktop/NftCharacterAsset';
import NftCharacterInventory from '@/components/nft/desktop/NftCharacterInventory';
import NftCharacterCodex from '@/components/nft/desktop/NftCharacterCodex';
import NftCharacterPriceHistory from '@/components/nft/desktop/NftCharacterPriceHistory';
import NftCharacterSpirit from '@/components/nft/desktop/NftCharacterSpirit';
import NftBottomFixedBar from '@/components/nft/mobile/NftBottomFixedBar';
import { useMobile } from '@/composables/common';
import { useWemixLogin } from '@/composables/round';
import NftCharacterMysticalPieces from '@/components/nft/desktop/NftCharacterMysticalPieces';
import NftCharacterConquest from '@/components/nft/desktop/NftCharacterConquest';
import CharacterClass from '@/constants/character/character-class';

const { useState: useExdState } = createNamespacedHelpers('exd');

const { useState: useNftState, useGetters: useNftGetters, useActions: useNftActions, useMutations: useNftMutations } = createNamespacedHelpers('nft');

export default defineComponent({
  name: 'NftTradeItem',
  props: {
    seq: String,
  },
  components: {
    Footer,
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
  },
  data: () => ({
    number: 0,
    isDevelopment: process.env.NODE_ENV === 'development',
    Category: ['grade-5', 'grade-4', 'grade-3', 'grade-2'],
  }),
  methods: {},
  beforeMount() {
    const N = Math.floor(Math.random() * 4);
    this.rankType = this.Category[N];
  },
  created() {
    setTimeout(() => {
      document.documentElement.classList.add('init--nft-detail');
    }, 10);
  },
  destroyed() {
    document.documentElement.classList.remove('init--nft-detail');
  },
  setup(props, { root }) {
    // if (!props.transportID) {
    //   root.$router.replace('/nft/list');
    // }
    const i18n = useI18n();
    const { price } = useExdState(['price']);

    const qrRef = ref(null);
    const state = reactive({
      os: '',
      checkTimer: null,
      loadInfo: false,
    });

    const { wemixLogin } = useWemixLogin(root.$wemix);
    const { locale, dracoAccessToken, accessToken, balance } = useState(['locale', 'accessToken', 'dracoAccessToken', 'balance']);
    const { setCommonModal, setOpenDracoLogin } = useMutations(['setCommonModal', 'setOpenDracoLogin']);

    const {
      loading,
      item,
      itemError,
      openQR,
      items: { current },
    } = useNftState(['loading', 'item', 'itemError', 'items', 'openQR']);

    const { nftGrade } = useNftGetters(['nftGrade']);

    const { fetchNftItem } = useNftActions(['fetchNftItem']);
    const { setOpenQR, setItem } = useNftMutations(['setOpenQR', 'setItem']);
    const { isMobile } = useMobile();

    onMounted(() => {
      fetchNftItem(props.seq);
    });

    const characterGrade = computed(() => {
      if (item.value.character.powerScore > 205000) {
        return 5;
      }

      if (item.value.character.powerScore > 170000) {
        return 4;
      }

      if (item.value.character.powerScore > 135000) {
        return 3;
      }

      return 2;
    });

    const characterClass = computed(() => {
      return CharacterClass[item.value.character.class];
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
      const urlScheme = `${schemeHost}/nft/dex/detail?symbol=M4CHA&tid=${item.value.nftID}`;

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
    });

    return {
      ...useI18n(),
      loading,
      nftGrade,
      price,
      item,
      itemError,
      characterClass,
      characterGrade,
      openQR,
      setOpenQR,
      qrRef,
      purchase,
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app.scss';

// NFT 상품상세
@import '~@/assets/sass/mobile/pages/_nft-detail.scss';
@import '~@/assets/sass/mobile/pages/_popup-nft.scss';
</style>
