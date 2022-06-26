<template>
  <!-- bg-legendary -->
  <!-- bg-epic -->
  <!-- bg-rare -->
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
            </div>
          </div>

          <!-- 구매하기 팝업  -->
          <v-dialog content-class="dialog-item-buy dialog-stake2 theme-dark" v-model="dialogBuyItem" max-width="640" persistent>
            <template v-slot:activator="{ on, attrs }">
              <button type="button" v-bind="attrs" v-on="on" style="display: block; margin-top: 16px; color: #fff; font-weight: bold">
                [Popup - Buy Item]
              </button>
            </template>
            <div class="content">
              <v-btn class="btn-close" @click="dialogBuyItem = false" fab plain x-small>
                <v-icon color="#fff" size="26">mdi-close</v-icon>
              </v-btn>
              <!-- dialogTitle이 있는 경우 대비 -->
              <div class="dialog-header">
                <h2 class="title">Buy Item</h2>
              </div>

              <div class="item-content">
                <div class="wrap-central">
                  <div class="wrap-charinfo">
                    <div class="char">
                      <img src="@/assets/img/desktop/popup/profile-taoist.webp" width="96" height="96" alt="taoist" />
                      <div class="info">
                        <strong class="nick">dracoqueen</strong>
                        <span class="server">ASIA 220</span>
                      </div>
                    </div>
                    <div class="credit-info">
                      <div class="category">DRACO Balance</div>
                      <div class="info"><span class="ico-hydra ico-xs add-inside">85,100.0000</span></div>
                    </div>
                  </div>
                  <div class="item-detail">
                    <div class="wrap-detail">
                      <ul class="list">
                        <li>아이템 거래는 위믹스 월랫을 통해 진행됩니다.</li>
                        <li>구매시 현재 선택된 캐릭터의 XDRACO 창고로 아이템이 전달되게 됩니다.</li>
                        <li>아이템 구매후, 취소는 불가능 합니다.</li>
                      </ul>
                      <div class="detail-card">
                        <Card itemType="legendary"></Card>
                        <div class="price">
                          <strong class="ico-hydra ico-sm add-inside">105,300</strong>
                          <span class="rate"> $230,978.1252</span>
                        </div>
                      </div>
                      <div class="wrap-button">
                        <button type="button" class="btn btn-primary">BUY</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-dialog>

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
    AccountInfo,
    SidebarContactUs,
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
