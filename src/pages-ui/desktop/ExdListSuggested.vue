<template>
  <!-- bg-legendary -->
  <!-- bg-epic -->
  <!-- bg-rare -->
  <main class="contents market">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="function">
          <div>
            <a href="#"><span class="backtolist">Back to list</span></a>
          </div>
        </div>
        <div class="wrap-grid">
          <div class="grid-timeline">
            <div class="exchange-market">
              <div class="wrap-suggest">
                <div class="suggest-header">
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
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-darco ico-ss add-inside"><span>555,185,100</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+12</strong></div>
                      <div class="score"><span>Power Score</span><strong>11,563</strong></div>
                      <CharInfo character="warrior" name="Warriworry" server="ASIA 123"></CharInfo>
                    </li>
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-darco ico-ss add-inside"><span>9,185,100</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+12</strong></div>
                      <div class="score"><span>Power Score</span><strong>11,563</strong></div>
                      <CharInfo character="taoist" name="woerekwkk" server="ASIA 123"></CharInfo>
                    </li>
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-darco ico-ss add-inside"><span>5,185,100</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+5</strong></div>
                      <div class="score"><span>Power Score</span><strong>11,563</strong></div>
                      <CharInfo character="arbalist" name="aaaabbbaaac" server="ASIA 123"></CharInfo>
                    </li>
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-darco ico-ss add-inside"><span>185,100</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+3</strong></div>
                      <div class="score"><span>Power Score</span><strong>11,563</strong></div>
                      <CharInfo character="lancer" name="qwertyuip34" server="ASIA 123"></CharInfo>
                    </li>
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-darco ico-ss add-inside"><span>180,000</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+0</strong></div>
                      <div class="score"><span>Power Score</span><strong>8,563</strong></div>
                      <CharInfo character="sorcerer" name="asdfghjklpoi" server="ASIA 123"></CharInfo>
                    </li>
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-darco ico-ss add-inside"><span>555,185,100</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+12</strong></div>
                      <div class="score"><span>Power Score</span><strong>11,563</strong></div>
                      <CharInfo character="warrior" name="Warriworry" server="ASIA 123"></CharInfo>
                    </li>
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-darco ico-ss add-inside"><span>9,185,100</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+12</strong></div>
                      <div class="score"><span>Power Score</span><strong>11,563</strong></div>
                      <CharInfo character="taoist" name="woerekwkk" server="ASIA 123"></CharInfo>
                    </li>
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-darco ico-ss add-inside"><span>5,185,100</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+5</strong></div>
                      <div class="score"><span>Power Score</span><strong>11,563</strong></div>
                      <CharInfo character="arbalist" name="aaaabbbaaac" server="ASIA 123"></CharInfo>
                    </li>
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-darco ico-ss add-inside"><span>185,100</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+3</strong></div>
                      <div class="score"><span>Power Score</span><strong>11,563</strong></div>
                      <CharInfo character="lancer" name="qwertyuip34" server="ASIA 123"></CharInfo>
                    </li>
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-darco ico-ss add-inside"><span>180,000</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+0</strong></div>
                      <div class="score"><span>Power Score</span><strong>8,563</strong></div>
                      <CharInfo character="sorcerer" name="asdfghjklpoi" server="ASIA 123"></CharInfo>
                    </li>
                  </ul>
                </div>

                <div class="wrap-button">
                  <button type="button" class="btn-viewmore">VIEW MORE</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Side Contents -->
          <div class="grid-side">
            <aside class="sidebar">
              <AccountInfo profile-type="signUp" more-active></AccountInfo>
              <sidebar-contact-us />
            </aside>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

import Card from '@/components-ui/common/Card';
import CharInfo from '@/components-ui/desktop/CharInfo';
import ItemInfo from '@/components-ui/desktop/ItemInfo';
import SelectOrder from '@/components-ui/desktop/SelectOrder';
import AccountInfo from '@/components-ui/desktop/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import Footer from '@/partials/common/Footer';

export default defineComponent({
  name: 'ExdListSuggested',
  props: {},
  components: {
    Card,
    CharInfo,
    ItemInfo,
    SelectOrder,
    AccountInfo,
    Footer,
    SidebarContactUs,
  },
  data: () => ({
    number: 0,
    isDevelopment: process.env.NODE_ENV === 'development',
    Category: ['grade-5', 'grade-4', 'grade-3'],
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
    this.rankType = this.Category[N];
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
@import '~@/assets/sass/desktop/ui-guide.scss';
</style>
