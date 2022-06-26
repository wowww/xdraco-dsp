<template>
  <main class="contents nft" :class="'market bg-' + rankType">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="exchange-market add-float">
          <!-- 상단 캐릭터 정보 영역 -->
          <div class="wrap-addition">
            <div class="wrap-character-equip">
              <ul class="list-character-equip">
                <li class="list-character-equip__item" data-item-grade="epic" data-item-type="weapon">
                  <div class="front">
                    <span class="item-tier">IV</span>
                    <span class="item-enchance">+3</span>
                    <img src="@/assets/img/common/nft-detail/@character-equip-top.png" class="item-image" width="48" alt="아이템이름" />
                    <span class="item-slot-default"></span>
                  </div>
                  <div class="back"></div>
                </li>
                <li class="list-character-equip__item" data-item-grade="epic" data-item-type="subWeapon">
                  <div class="front">
                    <span class="item-tier">IV</span>
                    <span class="item-enchance">+3</span>
                    <img src="@/assets/img/common/nft-detail/@character-equip-sub-weapon.png" class="item-image" width="48" alt="아이템이름" />
                    <span class="item-slot-default"></span>
                  </div>
                  <div class="back"></div>
                </li>
                <li class="list-character-equip__item" data-item-grade="legendary" data-item-type="top">
                  <div class="front">
                    <span class="item-tier">I</span>
                    <span class="item-enchance">+5</span>
                    <img src="@/assets/img/common/nft-detail/@character-equip-top.png" class="item-image" width="48" alt="아이템이름" />
                    <span class="item-slot-default"></span>
                  </div>
                  <div class="back"></div>
                </li>
                <li class="list-character-equip__item" data-item-grade="rare" data-item-type="bottom">
                  <div class="front">
                    <span class="item-tier">III</span>
                    <span class="item-enchance">+7</span>
                    <img src="@/assets/img/common/nft-detail/@character-equip-top.png" class="item-image" width="48" alt="아이템이름" />
                    <span class="item-slot-default"></span>
                  </div>
                  <div class="back"></div>
                </li>
                <li class="list-character-equip__item" data-item-grade="common" data-item-type="gloves">
                  <div class="front">
                    <span class="item-tier">IV</span>
                    <span class="item-enchance">+8</span>
                    <img src="@/assets/img/common/nft-detail/@character-equip-top.png" class="item-image" width="48" alt="아이템이름" />
                    <span class="item-slot-default"></span>
                  </div>
                  <div class="back"></div>
                </li>
                <li class="list-character-equip__item" data-item-grade="epic" data-item-type="boots">
                  <div class="front">
                    <span class="item-tier">II</span>
                    <span class="item-enchance">+10</span>
                    <img src="@/assets/img/common/nft-detail/@character-equip-boots.png" class="item-image" width="48" alt="아이템이름" />
                    <span class="item-slot-default"></span>
                  </div>
                  <div class="back"></div>
                </li>
                <li class="list-character-equip__item" data-item-grade="rare" data-item-type="neaklace">
                  <div class="front">
                    <span class="item-tier">IV</span>
                    <span class="item-enchance">+1</span>
                    <img src="@/assets/img/common/nft-detail/@character-equip-top.png" class="item-image" width="48" alt="아이템이름" />
                    <span class="item-slot-default"></span>
                  </div>
                  <div class="back"></div>
                </li>
                <li class="list-character-equip__item" data-item-grade="uncommon" data-item-type="bracelet">
                  <div class="front">
                    <span class="item-tier">IV</span>
                    <span class="item-enchance">+11</span>
                    <img src="@/assets/img/common/nft-detail/@character-equip-bracelet.png" class="item-image" width="48" alt="아이템이름" />
                    <span class="item-slot-default"></span>
                  </div>
                  <div class="back"></div>
                </li>
                <li class="list-character-equip__item" data-item-grade="legendary" data-item-type="ring">
                  <div class="front">
                    <span class="item-tier">IV</span>
                    <!-- <span class="item-enchance">0</span> -->
                    <img src="@/assets/img/common/nft-detail/@character-equip-top.png" class="item-image" width="48" alt="아이템이름" />
                    <span class="item-slot-default"></span>
                  </div>
                  <div class="back"></div>
                </li>
                <li class="list-character-equip__item" data-item-type="earring">
                  <div class="front">
                    <!-- <span class="item-tier">IV</span> -->
                    <!-- <span class="item-enchance">+11</span> -->
                    <!-- <img src="@/assets/img/common/nft-detail/@character-equip-bracelet.png" class="item-image" width="48" alt="아이템이름" /> -->
                    <span class="item-slot-default"></span>
                  </div>
                  <div class="back"></div>
                </li>
              </ul>

              <!-- <img
                :src="require('@' + '/assets/img/common/nft-detail/nft-detail-arbalist' + rankType.replace('grade-', '') + '.webp')"
                class="thumbs-character-equip"
                width="320"
                alt="arbalist"
              /> -->
              <!-- <img
                :src="require('@' + '/assets/img/common/nft-detail/nft-detail-lancer' + rankType.replace('grade-', '') + '.webp')"
                class="thumbs-character-equip"
                width="320"
                alt="lancer"
              /> -->
              <img
                :src="require('@' + '/assets/img/common/nft-detail/nft-detail-sorcerer' + rankType.replace('grade-', '') + '.webp')"
                class="thumbs-character-equip"
                width="320"
                alt="sorcerer"
              />
              <!-- <img
                :src="require('@' + '/assets/img/common/nft-detail/nft-detail-taoist' + rankType.replace('grade-', '') + '.webp')"
                class="thumbs-character-equip"
                width="320"
                alt="taoist"
              /> -->
              <!-- <img
                :src="require('@' + '/assets/img/common/nft-detail/nft-detail-warrior' + rankType.replace('grade-', '') + '.webp')"
                class="thumbs-character-equip"
                width="320"
                alt="warrior"
              /> -->
            </div>

            <div class="option-detail">
              <div class="wrap-item-desc">
                <div class="item-manual">
                  <h3 class="item-title">masterSorcer</h3>
                  <p class="item-subtitle">ASIA 112 Server</p>
                  <ul class="item-detail-table size-lg">
                    <li class="classname">
                      <span>Taoist</span>
                      <strong>
                        <!-- <img src="@/assets/img/common/ranking/ico_klass_arbalist.webp" width="32" alt="arbalist" /> -->
                        <!-- <img src="@/assets/img/common/ranking/ico_klass_lancer.webp" width="32" alt="lancer" /> -->
                        <img src="@/assets/img/common/ranking/ico_klass_sorcerer.webp" width="32" alt="sorcerer" />
                        <!-- <img src="@/assets/img/common/ranking/ico_klass_taoist.webp" width="32" alt="taoist" /> -->
                        <!-- <img src="@/assets/img/common/ranking/ico_klass_warrior.webp" width="32" alt="warrior" /> -->
                      </strong>
                    </li>
                    <li class="level">
                      <span>Level</span>
                      <strong>85</strong>
                    </li>
                    <li class="power">
                      <span>Power Score</span>
                      <strong>210,588</strong>
                    </li>
                  </ul>
                </div>

                <ul class="list">
                  <li>
                    <span class="skill-desc">Minted on</span>
                    <strong class="value">Dec. 7, 2021 13:40 UTC+8</strong>
                  </li>
                  <li>
                    <span class="skill-desc">Sealed on</span>
                    <strong class="value">Dec. 6, 2021 13:40 UTC+8</strong>
                  </li>
                  <li>
                    <span class="skill-desc">Contract Addresss</span>
                    <strong class="value">
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <a href="#outlinkURL" target="_blank" v-bind="attrs" v-on="on">0xeb98...455q8e</a>
                        </template>
                        <span>0xeb98aaabbbcccdddee455q8e</span>
                      </v-tooltip>
                    </strong>
                  </li>
                  <li>
                    <span class="skill-desc">NFT ID</span>
                    <strong class="value">
                      <a href="#outlinkURL" target="_blank">100000240002</a>
                    </strong>
                  </li>
                  <li>
                    <span class="skill-desc">Blockchain</span>
                    <strong class="value">WEMIX</strong>
                  </li>
                </ul>
                <div class="wrap-button">
                  <button type="button" class="btn btn-price btn-primary-nft">
                    <em class="price">
                      <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                      <span class="rate">$ 400,000</span>
                    </em>
                  </button>
                  <!-- 구매 완료시 -->
                  <!-- <button type="button" class="btn" disabled>구매 완료</button> -->
                </div>
              </div>
            </div>
          </div>

          <!-- Stat -->
          <h3 class="title-sub-detail">Stat</h3>
          <stat></stat>

          <!-- Skill -->
          <h3 class="title-sub-detail">Skill</h3>
          <skill></skill>

          <!-- Spirit -->
          <h3 class="title-sub-detail">
            Spirit<span class="sub">{{ t('w.nft.detail.representative.deck') }}</span>
          </h3>
          <spirit></spirit>

          <!-- MagicStone -->
          <h3 class="title-sub-detail">
            MagicStone<span class="sub">{{ t('w.nft.detail.representative.deck') }}</span>
          </h3>
          <magic-stone></magic-stone>

          <!-- Mystical Pieces -->
          <h3 class="title-sub-detail">
            Mystical Pieces<span class="sub">{{ t('w.nft.detail.representative.deck') }}</span>
          </h3>
          <mystical-pieces></mystical-pieces>

          <!-- Data Empty Case for Mystical Pieces -->
          <h3 class="title-sub-detail">Mystical Pieces</h3>
          <mystical-pieces-empty></mystical-pieces-empty>

          <!-- Training -->
          <h3 class="title-sub-detail">Training</h3>
          <training></training>

          <!-- Conquest -->
          <h3 class="title-sub-detail">Conquest</h3>
          <conquest></conquest>

          <!-- Asset -->
          <h3 class="title-sub-detail">Asset</h3>
          <asset></asset>

          <!-- Codex -->
          <h3 class="title-sub-detail">Codex</h3>
          <codex></codex>

          <!-- Inventory -->
          <h3 class="title-sub-detail">Inventory</h3>
          <inventory></inventory>

          <!-- PriceHistory -->
          <h3 class="title-sub-detail">PriceHistory</h3>
          <price-history></price-history>
        </div>
      </div>
    </section>
    <Footer></Footer>

    <div class="float-bottom">
      <div class="sale-item">
        <!-- ItemInfo -->
        <div class="wrap-buy">
          <div class="price">
            <strong class="ico-wemixcredit ico-sm add-inside">5,105,300</strong>
            <span class="rate">$ 7,400,000</span>
          </div>

          <!-- QR코드 팝업 -->
          <v-dialog content-class="wemix-qr-wrap" v-model="dialogQr" max-width="480" persistent fullscreen>
            <template v-slot:activator="{ on, attrs }">
              <button type="button" @click="dialogBuyItem = true" class="btn btn-primary-nft" v-bind="attrs" v-on="on">구매하기</button>
            </template>

            <div class="content nft-buy-qr">
              <v-btn class="btn-close" @click="dialogQr = false" fab plain x-small>
                <v-icon color="#000" size="26">mdi-close</v-icon>
              </v-btn>
              <!-- dialogTitle이 있는 경우 대비 -->
              <div class="dialog-header">&nbsp;</div>
              <div class="contents-center">
                <h4 class="title">NFT</h4>
                <p class="desc">Scan QR code with your WEMIX WALLET app to purchase NFT</p>
                <p class="count">Time left <span>03:00</span></p>
                <div class="qrcode-area" style="background-color: blue">
                  <!-- <img>태그로 QR이미지를 적용해주세요 -->
                </div>
                <span class="qr-wemix">WEMIX</span>
              </div>
            </div>
            <div class="step-area">
              <div class="step-item step-1">
                <span class="step-title">STEP 1</span>
                <span class="step-img"></span>
                <p class="step-desc">Start WEMIX<br />Wallet</p>
              </div>
              <span class="step-next"></span>
              <div class="step-item step-2">
                <span class="step-title">STEP 2</span>
                <span class="step-img"></span>
                <p class="step-desc">Click the icon<br />on th top</p>
              </div>
              <span class="step-next"></span>
              <div class="step-item step-3">
                <span class="step-title">STEP 3</span>
                <span class="step-img"></span>
                <p class="step-desc">Verify after<br />code scan</p>
              </div>
              <p class="qr-bottom">Available to scan with other QR Code readers.</p>
            </div>
          </v-dialog>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';
import Footer from '@/partials/common/Footer';
import Stat from '@/pages-ui/mobile/NftDetail/Stat';
import Skill from '@/pages-ui/mobile/NftDetail/Skill';
import Spirit from '@/pages-ui/mobile/NftDetail/Spirit';
import MagicStone from '@/pages-ui/mobile/NftDetail/MagicStone';
import MysticalPieces from '@/pages-ui/mobile/NftDetail/MysticalPieces';
import MysticalPiecesEmpty from '@/pages-ui/desktop/NftDetail/MysticalPiecesEmpty';
import Conquest from '@/pages-ui/mobile/NftDetail/Conquest';
import Training from '@/pages-ui/mobile/NftDetail/Training';
import Asset from '@/pages-ui/mobile/NftDetail/Asset';
import Codex from '@/pages-ui/mobile/NftDetail/Codex';
import Inventory from '@/pages-ui/mobile/NftDetail/Inventory';
import PriceHistory from '@/pages-ui/mobile/NftDetail/PriceHistory';

export default defineComponent({
  props: {},
  components: {
    Footer,
    Stat,
    Skill,
    Spirit,
    MagicStone,
    MysticalPieces,
    MysticalPiecesEmpty,
    Conquest,
    Training,
    Asset,
    Codex,
    Inventory,
    PriceHistory,
  },
  data: () => ({
    number: 0,
    isDevelopment: process.env.NODE_ENV === 'development',
    Category: ['grade-5', 'grade-4', 'grade-3', 'grade-2'],

    // for Dialog
    dialogQr: false,
  }),
  setup() {
    return {
      ...useI18n(),
    };
  },
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
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app.scss';

// NFT 상품상세
@import '~@/assets/sass/mobile/pages/_nft-detail.scss';
@import '~@/assets/sass/mobile/pages/_popup-nft.scss';
</style>
