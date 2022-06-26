<template>
  <main id="contents" class="contents mirage">
    <section class="section nft-enhancement">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="wrap-my-mirage">
          <v-tabs class="tab-rounds" v-model="selectedTab" :hide-slider="true">
            <v-tab to="/ui-mirage-list-myroster">My Roster</v-tab>
            <v-tab to="/ui-mirage-NFT-enhancement">NFT Enhancement</v-tab>
            <v-tab to="/ui-mirage-list-mynfts">My NFTs</v-tab>
          </v-tabs>
          <div class="util-list">
            <div class="mirage-inventory">
              <div class="mirage-inventory-item">
                <span class="currency">
                  <img src="@/assets/img/common/mirage/img-24-mirage-scroll.webp" width="24" height="22" alt="enhance" />
                  <em class="volume">99</em>
                </span>
                <button type="button" class="btn-enhance">Enhance</button>
              </div>
              <div class="mirage-inventory-item">
                <span class="currency">
                  <img src="@/assets/img/common/mirage/ico-20-energy.webp" width="20" height="20" alt="energy" />
                  <em class="volume">99</em>
                </span>
                <button type="button" class="btn-charge">Charge</button>
              </div>
            </div>
          </div>

          <div class="section-enhancment">
            <div class="group-seal">
              <div class="seal-item">
                <div class="inner-item">
                  <span class="thumb-item">
                    <img src="@/assets/img/common/mirage/img-64-mirage-scroll.webp" alt="" />
                    <span class="item-amount">x 34</span>
                  </span>
                  <span class="item-desc">MIRAGE Scroll</span>
                </div>
                <div class="wrap-btn">
                  <button type="button" class="btn-mirage btn-primary" @click="openDialogSeal">Seal</button>
                </div>
              </div>
              <div class="seal-item">
                <div class="inner-item">
                  <span class="thumb-item">
                    <img
                      src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Global_Image/Global_Item/Item_Xdraco_01/Item_Xdraco_box_05.png"
                      alt=""
                    />
                    <span class="item-amount">x 34</span>
                  </span>
                  <span class="item-desc">MIRAGE Scroll Sealing Box</span>
                </div>
                <div class="wrap-btn">
                  <button type="button" class="btn-mirage btn-primary" @click="openDialogUnSeal">Unseal</button>
                </div>
              </div>
            </div>

            <div class="section-teasing">
              <span class="teasing-ment">NFT Enhancement will be updated</span>
              <span class="teasing-ment-sub">Collect more MIRAGE Scrolls</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seal dialog -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-enhancement-seal"
      v-model="dialogEnhancmentSeal"
      width="100%"
      scrollable
      transition="dialog-bottom-transition"
    >
      <div class="dialog-header">
        Sealing
        <v-btn class="btn-close btn-miragepop-close" @click="dialogEnhancmentSeal = false" fab plain x-small></v-btn>
      </div>
      <div class="content">
        <div class="item-area">
          <span class="item-frame">
            <img src="@/assets/img/common/mirage/img-128-mirage-scroll.webp" width="128" alt="mirage scroll" />
            <span class="item-amount">x 84</span>
          </span>
          <span class="seal-item-name">MIRAGE Scroll</span>
          <div class="item-caution">After sealing 10 Mirage Scrolls with 1 Mirage Scroll Sealing Box, you can trade them on EXD.</div>
        </div>
        <div class="item-input-wrap">
          <div class="info-area">
            <p class="info-desc">
              <span class="info-txt">Input the number of Sealing Box</span>
            </p>
            <div class="remain-energy">
              <span class="remain">{{ maxVigor }}</span>
              <button type="button" class="btn-charge">Charge</button>
            </div>
          </div>
          <div class="field">
            <div class="input-area">
              <div class="input-box">
                <v-text-field class="input" type="tel" v-model="sealVigorValue" dense solo flat :hide-details="true"></v-text-field>
                <div class="btn-wrap">
                  <v-btn class="btn-decrease" @click="decreaseVigor">minus</v-btn>
                  <v-btn class="btn-increase" @click="increaseVigor" disabled aria-disabled="true">plus</v-btn>
                  <v-btn class="max" @click="setMaxSealVigor">{{ $t('w.hsp.main.un-stake.max') }}</v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-red-mirage"><span>Seal</span><span class="seal">30</span></button>
      </div>
    </v-dialog>

    <!-- Unseal dialog -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-enhancement-seal"
      v-model="dialogEnhancmentUnSeal"
      width="100%"
      scrollable
      transition="dialog-bottom-transition"
    >
      <div class="dialog-header">
        Unseal
        <v-btn class="btn-close btn-miragepop-close" @click="dialogEnhancmentUnSeal = false" fab plain x-small></v-btn>
      </div>
      <div class="content">
        <div class="item-area">
          <span class="item-frame">
            <Card itemType="epic" smaller="xs"></Card>
            <span class="item-amount">x 84</span>
          </span>
          <span class="seal-item-name">item Card</span>
          <div class="item-caution">Using 1 Mirage Scroll Sealing Box increases Mirage Scroll holding by 10.</div>
        </div>
        <div class="item-input-wrap">
          <div class="field">
            <div class="input-area">
              <div class="input-box">
                <v-text-field class="input" type="tel" v-model="sealVigorValue" dense solo flat :hide-details="true"></v-text-field>
                <div class="btn-wrap">
                  <v-btn class="btn-decrease" @click="decreaseVigor">minus</v-btn>
                  <v-btn class="btn-increase" @click="increaseVigor" disabled aria-disabled="true">plus</v-btn>
                  <v-btn class="max" @click="setMaxSealVigor">{{ $t('w.hsp.main.un-stake.max') }}</v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-red-mirage" disabled><span>Unseal</span></button>
      </div>
    </v-dialog>

    <Footer />
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

// eslint-disable-next-line import/extensions
import useI18n from '@/utils/useI18n';
import Footer from '@/partials/common/Footer';
import Card from '@/components-ui/common/Card';

export default defineComponent({
  name: 'MirageNftEnhancement',
  components: {
    Footer,
    Card,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    isPreStake: true,
    selectedTab: null,
    dialogEnhancmentSeal: false,
    dialogEnhancmentUnSeal: false,
    sealVigorValue: 1,
    minVigor: 10,
    maxVigor: 150,
  }),
  computed: {
    //
  },
  methods: {
    openDialogSeal() {
      this.dialogEnhancmentSeal = true;
    },
    openDialogUnSeal() {
      this.dialogEnhancmentUnSeal = true;
    },
    setMaxSealVigor() {
      this.sealVigorValue = this.maxVigor;
    },
    increaseVigor() {
      this.sealVigorValue += 1;
    },
    decreaseVigor() {
      this.sealVigorValue -= 1;
    },
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app';
@import '~@/assets/sass/components/mirage-dialog';
@import '~@/assets/sass/components/mirage-button';
@import '~@/assets/sass/mobile/pages/mirage/mirage-list';
@import '~@/assets/sass/mobile/pages/mirage/nft-enhancement';
</style>
