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
                    <ItemManual itemName="Shineworld Dragon Gloves" showType="normal" :rankType="rankType"></ItemManual>

                    <div class="wrap-credit">
                      <div class="credit-info">
                        <div class="category">판매가</div>
                        <div class="info"><span class="ico-darco ico-sm add-inside">105,300.00</span></div>
                      </div>
                      <div class="wrap-button">
                        <button type="button" class="btn btn-primary2">판매 취소</button>
                      </div>
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
        <!-- float-bottom exd-market -->
      </div>
    </section>
    <Footer></Footer>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Card from '@/components-ui/common/Card';
import CharInfo from '@/components-ui/desktop/CharInfo';
import ItemManual from '@/components-ui/desktop/ItemManual';
import AccountInfo from '@/components-ui/desktop/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import Footer from '@/partials/common/Footer';

export default defineComponent({
  props: {},
  components: {
    Card,
    Footer,
    CharInfo,
    ItemManual,
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
