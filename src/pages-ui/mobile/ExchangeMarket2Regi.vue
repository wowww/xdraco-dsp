<template>
  <main class="contents" :class="'market bg-' + rankType">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
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
                <ItemManual itemName="Shineworld Dragon Gloves" showType="noprice" :rankType="rankType" snCode="Serial NO.#12345678"></ItemManual>

                <!-- wrap-button price-button -->
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

              <!-- wrap-seller -->
            </div>
          </div>
          <!-- wrap-suggest -->
          <div class="wrap-overall">
            <div class="overall-header">
              <h2 class="title">‘Shineworld Dragon Gloves’ Overall Stats</h2>
            </div>
            <div class="overall-list">
              <ul>
                <li>
                  <ItemTransprice
                    itemTranstitle="최근 거래 가격"
                    itemDraco="305,000"
                    itemRate="400,000"
                    itemDate="10.16. 2021 08:24 UTC"
                    showType="normal"
                  ></ItemTransprice>
                </li>
                <li>
                  <ItemTransprice
                    itemTranstitle="최고 거래가"
                    itemDraco="210,000"
                    itemRate="400,000"
                    itemDate="10.16. 2021 08:24 UTC"
                    showType="normal"
                  ></ItemTransprice>
                </li>
                <li>
                  <ItemTransprice
                    itemTranstitle="평균 거래 가격"
                    itemDraco="190,050"
                    itemRate="400,000"
                    itemDate="10.16. 2021 08:24 UTC"
                    showType="normal"
                  ></ItemTransprice>
                </li>
                <li>
                  <ItemTransprice itemTranstitle="이번달 거래량" itemDraco="246" showType="monthly"></ItemTransprice>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer></Footer>

    <div class="float-bottom">
      <div class="sale-item">
        <!-- ItemInfo -->
        <div class="wrap-regi">
          <div class="wrap-form">
            <div class="form-header">
              <h3 class="title">Price</h3>
              <strong class="notice">판매가의 <em>5%</em>가 수수료로 차감됩니다.</strong>
            </div>
            <!-- focus -->
            <div class="fieldset editable">
              <div>
                <span class="ico-hydra ico-xs"><em class="hidden">HYDRA</em></span>
                <input type="text" placeholder="Stake Amount" value="10" />
              </div>
            </div>
          </div>
          <div class="wrap-button">
            <button type="button" class="btn btn-primary-exd">Register sale</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Footer from '@/partials/common/Footer';
import CharInfo from '@/components-ui/mobile/CharInfo';
import ItemInfo from '@/components-ui/mobile/ItemInfo';
import ItemManual from '@/components-ui/mobile/ItemManual';
import ItemTransprice from '@/components-ui/mobile/ItemTransprice';
import Card from '@/components-ui/common/Card';

export default defineComponent({
  props: {},
  components: {
    Card,
    Footer,
    CharInfo,
    ItemInfo,
    ItemManual,
    ItemTransprice,
  },
  data: () => ({
    number: 0,
    isDevelopment: process.env.NODE_ENV === 'development',
    dialogBuyItem: false,
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
@import '~@/assets/sass/mobile/app.scss';
@import '~@/assets/sass/mobile/ui-guide.scss';
</style>
