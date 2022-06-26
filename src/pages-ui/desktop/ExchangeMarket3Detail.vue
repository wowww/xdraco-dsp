<template>
  <main class="contents" :class="'market bg-' + rankType">
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
            <div class="exchange-market add-float">
              <div class="wrap-addition">
                <!-- 디자인파트에서 원하는 기능인거 같습니다. -->
                <!-- https://renatodeleao.github.io/vue-sticky-directive/ -->
                <!-- https://codesandbox.io/s/mm4olmxkrx -->
                <div class="wrap-card">
                  <Card itemType="legendary"></Card>
                </div>
                <div class="option-detail">
                  <div class="wrap-item-desc">
                    <!-- 모듈로 만들기 -->
                    <ItemManual itemName="Shineworld Dragon Gloves" showType="allrank" :rankType="rankType"></ItemManual>

                    <div class="wrap-button price-button">
                      <button type="button" class="btn btn-primary-exd">
                        <em class="price">
                          <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                          <span class="rate">$ 400,000</span>
                        </em>
                      </button>
                    </div>
                  </div>
                  <div class="wrap-option">
                    <h2 class="title">Power Score</h2>
                    <div class="totalscore">
                      <span class="ico-total">11,097</span>
                    </div>

                    <ul class="list">
                      <li v-for="(skill, indexpower) in optionsPowerList" :key="indexpower">
                        <span :class="'ico-' + skill.ico"></span>
                        <span class="skill-desc">{{ skill.name }}</span>
                        <strong class="rate">{{ skill.rate }}</strong>
                      </li>
                    </ul>
                  </div>
                  <div class="wrap-option">
                    <h2 class="title">Additional Options</h2>
                    <ul class="list">
                      <li v-for="(skill, index) in optionsList" :key="index">
                        <span :class="'ico-' + skill.ico"></span>
                        <span class="skill-desc">{{ skill.name }}</span>
                        <strong class="rate">{{ skill.rate }}</strong>
                      </li>
                    </ul>
                  </div>

                  <div class="wrap-seller">
                    <!-- compo. -->
                    <h3 class="title">seller</h3>

                    <!-- components(?) -->
                    <div class="seller">
                      <CharInfo character="warrior" name="charactername" server="ASIA 123"></CharInfo>
                      <div class="sale">
                        판매중
                        <strong>12</strong>
                      </div>
                      <div class="completed">
                        거래완료
                        <strong>24</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wrap-suggest">
                <div class="suggest-header">
                  <h2 class="title">Suggested Sales</h2>
                  <div class="suggest-item">
                    <ItemInfo itemCategory="grade-5" itemName="Shineworld Dragon Gloves" itemCount="+10"></ItemInfo>
                    <div class="function">
                      <a href="#"><span class="view-more">VIEW MORE</span></a>
                    </div>
                  </div>
                </div>
                <div class="suggest-list">
                  <ul class="list">
                    <!-- profile-arbalist.webp -->
                    <!-- profile-warrior.webp -->
                    <!-- profile-sorcerer.webp -->
                    <!-- profile-taoist.webp -->
                    <!-- profile-lancer.webp -->
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-hydra ico-ss add-inside"><span>555,185,100</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+12</strong></div>
                      <div class="score"><span>Power Score</span><strong>11,563</strong></div>
                      <CharInfo character="warrior" name="Warriworry" server="ASIA 123"></CharInfo>
                    </li>
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-hydra ico-ss add-inside"><span>9,185,100</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+12</strong></div>
                      <div class="score"><span>Power Score</span><strong>11,563</strong></div>
                      <CharInfo character="taoist" name="woerekwkk" server="ASIA 123"></CharInfo>
                    </li>
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-hydra ico-ss add-inside"><span>5,185,100</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+5</strong></div>
                      <div class="score"><span>Power Score</span><strong>11,563</strong></div>
                      <CharInfo character="arbalist" name="aaaabbbaaac" server="ASIA 123"></CharInfo>
                    </li>
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-hydra ico-ss add-inside"><span>185,100</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+3</strong></div>
                      <div class="score"><span>Power Score</span><strong>11,563</strong></div>
                      <CharInfo character="warrior" name="qwertyuip34" server="ASIA 123"></CharInfo>
                    </li>
                    <li>
                      <div class="price">
                        <span>Sale Price</span><strong class="ico-hydra ico-ss add-inside"><span>180,000</span></strong>
                      </div>
                      <div class="enhance"><span>Enhance</span><strong>+0</strong></div>
                      <div class="score"><span>Power Score</span><strong>8,563</strong></div>
                      <CharInfo character="warrior" name="asdfghjklpoi" server="ASIA 123"></CharInfo>
                    </li>
                  </ul>
                  <div class="wrap-button">
                    <button type="button" class="btn-viewmore">VIEW MORE</button>
                  </div>
                </div>
              </div>
              <div class="wrap-overall">
                <div class="overall-header">
                  <h2 class="title">‘Shineworld Dragon Gloves’ Overall Stats</h2>
                </div>
                <div class="overall-list">
                  <ul>
                    <li>
                      <ItemTransprice
                        itemTranstitle="최근 거래 가격"
                        itemDraco="150,000"
                        itemRate="400,000"
                        itemDate="10.16. 2021 08:24 UTC"
                        showType="normal"
                      ></ItemTransprice>
                    </li>
                    <li>
                      <ItemTransprice
                        itemTranstitle="최고 거래가"
                        itemDraco="55,505,000"
                        itemRate="400,000"
                        itemDate="10.16. 2021 08:24 UTC"
                        showType="normal"
                      ></ItemTransprice>
                    </li>
                    <li>
                      <ItemTransprice
                        itemTranstitle="평균 거래 가격"
                        itemDraco="10,505,000"
                        itemRate="400,000"
                        itemDate="10.16. 2021 08:24 UTC"
                        showType="normal"
                      ></ItemTransprice>
                    </li>
                    <li>
                      <ItemTransprice itemTranstitle="이번달 거래량" itemDraco="5,746" showType="monthly"></ItemTransprice>
                    </li>
                  </ul>
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

    <div class="float-bottom">
      <div class="sale-item">
        <ItemInfo itemCategory="grade-5" itemName="Shineworld Dragon Gloves" itemCount="+10"></ItemInfo>
        <div class="wrap-buy">
          <div class="price">
            <strong class="ico-hydra ico-sm add-inside">150,000</strong>
            <span class="rate">$ 400,000</span>
          </div>
          <button type="button" @click="dialogBuyItem = true" class="btn btn-primary-exd">구매하기</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

import Card from '@/components-ui/common/Card';
import CharInfo from '@/components-ui/desktop/CharInfo';
import ItemInfo from '@/components-ui/desktop/ItemInfo';
import ItemManual from '@/components-ui/desktop/ItemManual';
import ItemTransprice from '@/components-ui/desktop/ItemTransprice';
import AccountInfo from '@/components-ui/desktop/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';

import Footer from '@/partials/common/Footer';

export default defineComponent({
  props: {},
  components: {
    Card,
    Footer,
    CharInfo,
    ItemInfo,
    ItemManual,
    ItemTransprice,
    AccountInfo,
    SidebarContactUs,
  },
  data: () => ({
    number: 0,
    isDevelopment: process.env.NODE_ENV === 'development',
    optionsList: [
      { ico: 'defskill', name: 'Add Def Skill Damage', rate: '5.3%' },
      { ico: 'magic', name: 'ADD Magic Damage', rate: '1.2%' },
      { ico: 'atk', name: 'Monster ATK DMG Boost', rate: '498' },
      { ico: 'dmg', name: 'PvP DMG Reduction', rate: '498' },
    ],
    optionsPowerList: [
      { ico: 'HP', name: 'HP', rate: '2,501' },
      { ico: 'accuracy', name: 'Accuracy', rate: '498' },
      { ico: 'monatk', name: 'Monster ATK DMG Boost', rate: '9.6%' },
      { ico: 'monatk', name: 'Monster ATK DMG Boost', rate: '9.6%' },
      { ico: 'pvpdmg', name: 'PvP DMG Reduction', rate: '5.4%' },
    ],
    // Category: ['legendary', 'epic', 'rare'],
    Category: ['grade-5', 'grade-4', 'grade-3'],
  }),
  methods: {},
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
