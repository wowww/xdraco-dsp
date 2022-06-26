<template>
  <!-- bg-legendary -->
  <!-- bg-epic -->
  <!-- bg-rare -->
  <main class="contents" :class="'market single bg-' + rankType">
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
                    <ItemManual itemName="Shineworld Dragon Gloves" showType="noprice" :rankType="rankType"></ItemManual>

                    <div class="wrap-form">
                      <div class="form-header">
                        <h3 class="title">Price</h3>
                        <strong class="notice">판매가의 <em>5%</em>가 수수료로 차감됩니다.</strong>
                      </div>

                      <div class="fieldset editable">
                        <!-- /focus -->
                        <div>
                          <span class="ico-hydra ico-xs"><em class="hidden">DRACO</em></span>
                          <input type="text" placeholder="Stake Amount" value="10" />
                        </div>
                        <div class="in-msg">
                          <span>Net DRACOs earned</span>
                          <span class="ico-hydra ico-nano add-inside">9.5</span>
                        </div>
                      </div>
                    </div>

                    <div class="wrap-button">
                      <button type="button" class="btn btn-primary-exd">Register sale</button>
                    </div>
                  </div>
                  <div class="wrap-option">
                    <h2 class="title">Power Score</h2>
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
                  <!-- .wrap-seller -->
                </div>
              </div>
              <!-- .wrap-suggest -->
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
    dialogBuyItem: true,
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
