<template>
  <main class="contents market">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="exchange-market">
          <div class="wrap-suggest">
            <!-- <div class="suggest-header"> -->
            <div class="suggest-header no-gutter">
              <div class="suggest-item">
                <ItemInfo itemCategory="grade-5" itemName="Shineworld Dragon Gloves" itemCount="+10"></ItemInfo>
              </div>
            </div>
            <div class="suggest-list">
              <div class="wrap-filter">
                <select-order
                  :items="[
                    { title: 'Date Listed: Newest', abc: 0 },
                    { title: 'Date Listed: Oldest', abc: 1 },
                    { title: 'Date Listed: Highest', abc: 2 },
                    { title: 'Date Listed: Lowest', abc: 3 },
                  ]"
                  :selectedValue="{ title: 'Date Listed: Newest', abc: 0 }"
                  v-on:update="emitSelectOrder"
                ></select-order>
              </div>

              <ul class="list">
                <li class="list-header">
                  <div class="price"><em>Sale Price</em></div>
                  <div class="enhance"><em>Enhance</em></div>
                  <div class="score"><em>Power Score</em></div>
                  <div class="char-info"><em>Seller ID</em></div>
                </li>
                <li>
                  <div class="price">
                    <strong class="ico-darco ico-ss add-inside"><span>555,185,100555,185,100</span></strong>
                  </div>
                  <div class="enhance"><strong>+12</strong></div>
                  <div class="score"><strong>11,563</strong></div>
                  <CharInfo character="warrior" name="Warriworry" server=""></CharInfo>
                </li>
                <li>
                  <div class="price">
                    <strong class="ico-darco ico-ss add-inside"><span>9,185,100</span></strong>
                  </div>
                  <div class="enhance"><strong>+12</strong></div>
                  <div class="score"><strong>11,563</strong></div>
                  <CharInfo character="taoist" name="woerekwkk" server=""></CharInfo>
                </li>
                <li>
                  <div class="price">
                    <strong class="ico-darco ico-ss add-inside"><span>5,185,100</span></strong>
                  </div>
                  <div class="enhance"><strong>+5</strong></div>
                  <div class="score"><strong>11,563</strong></div>
                  <CharInfo character="arbalist" name="aaaabbbaaac" server=""></CharInfo>
                </li>
                <li>
                  <div class="price">
                    <strong class="ico-darco ico-ss add-inside"><span>185,100</span></strong>
                  </div>
                  <div class="enhance"><strong>+3</strong></div>
                  <div class="score"><strong>11,563</strong></div>
                  <CharInfo character="lancer" name="qwertyuip34" server=""></CharInfo>
                </li>
                <li>
                  <div class="price">
                    <strong class="ico-darco ico-ss add-inside"><span>180,000</span></strong>
                  </div>
                  <div class="enhance"><strong>+0</strong></div>
                  <div class="score"><strong>8,563</strong></div>
                  <CharInfo character="sorcerer" name="AbcdeAbcdeAb" server=""></CharInfo>
                </li>
                <li>
                  <div class="price">
                    <strong class="ico-darco ico-ss add-inside"><span>555,185,100555,185,100</span></strong>
                  </div>
                  <div class="enhance"><strong>+12</strong></div>
                  <div class="score"><strong>11,563</strong></div>
                  <CharInfo character="warrior" name="Warriworry" server=""></CharInfo>
                </li>
                <li>
                  <div class="price">
                    <strong class="ico-darco ico-ss add-inside"><span>9,185,100</span></strong>
                  </div>
                  <div class="enhance"><strong>+12</strong></div>
                  <div class="score"><strong>11,563</strong></div>
                  <CharInfo character="taoist" name="woerekwkk" server=""></CharInfo>
                </li>
                <li>
                  <div class="price">
                    <strong class="ico-darco ico-ss add-inside"><span>5,185,100</span></strong>
                  </div>
                  <div class="enhance"><strong>+5</strong></div>
                  <div class="score"><strong>11,563</strong></div>
                  <CharInfo character="arbalist" name="aaaabbbaaac" server=""></CharInfo>
                </li>
                <li>
                  <div class="price">
                    <strong class="ico-darco ico-ss add-inside"><span>185,100</span></strong>
                  </div>
                  <div class="enhance"><strong>+3</strong></div>
                  <div class="score"><strong>11,563</strong></div>
                  <CharInfo character="lancer" name="qwertyuip34" server=""></CharInfo>
                </li>
                <li>
                  <div class="price">
                    <strong class="ico-darco ico-ss add-inside"><span>180,000</span></strong>
                  </div>
                  <div class="enhance"><strong>+0</strong></div>
                  <div class="score"><strong>8,563</strong></div>
                  <CharInfo character="sorcerer" name="AbcdeAbcdeAb" server=""></CharInfo>
                </li>
              </ul>
            </div>

            <div class="wrap-button">
              <button type="button" class="btn-viewmore">VIEW MORE</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Footer from '@/partials/common/Footer';
import CharInfo from '@/components-ui/mobile/CharInfo';
import ItemInfo from '@/components-ui/mobile/ItemInfo';
import SelectOrder from '@/components-ui/mobile/SelectOrder';
import Card from '@/components-ui/common/Card';

export default defineComponent({
  name: 'ExdListSuggested',
  props: {},
  components: {
    Footer,
    CharInfo,
    ItemInfo,
    SelectOrder,
    Card,
  },
  data: () => ({
    number: 0,
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
  methods: {
    emitSelectOrder() {
      if (!this.showLayerPriceRange) {
        return;
      }
      this.showLayerPriceRange = false;
    },
  },
  created() {
    const N = Math.floor(Math.random() * 3);
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app.scss';
@import '~@/assets/sass/mobile/ui-guide.scss';
</style>
