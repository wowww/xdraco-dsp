<template>
  <!-- bg-legendary -->
  <!-- bg-epic -->
  <!-- bg-rare -->
  <main class="contents">
    <section class="section">
      <div class="section__inner">
        <!-- 판매히스토리 -->
        <v-dialog content-class="dialog-account" v-model="dialogAccount" max-width="560" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" style="display: block; color: #fff; font-weight: bold">[popup - 판매히스토리]</button>
          </template>
          <div class="content">
            <v-btn class="btn-close" @click="dialogAccount = false" fab plain x-small>
              <v-icon color="#000" size="26">mdi-close</v-icon>
            </v-btn>
            <div class="dialog-header">
              <h2 class="title">Buy Item</h2>
            </div>
            <v-tabs class="tabs" v-model="tab" grow>
              <v-tabs-slider></v-tabs-slider>
              <v-tab>My Characters</v-tab>
              <v-tab>My Wallet</v-tab>
              <v-tab>History</v-tab>
              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-card class="my-character">
                    <div class="tabs-content">
                      <div class="msgbox vcenter"></div>
                    </div>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card class="my-wallet">
                    <div class="tabs-content">
                      <div class="msgbox vcenter"></div>
                    </div>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card class="my-activity">
                    <div class="tabs-content">
                      <div class="list-header">
                        <div class="msg-notice">History will be saved for 90 days</div>
                      </div>
                      <!-- 동적스크롤 적용시를 대비하여 iscroll선언. -->
                      <!-- .v-virtual-scroll -->
                      <div class="iscroll">
                        <ul class="list">
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="active-info">
                                <div class="thumb">
                                  <ItemInfo itemCategory="grade-5" itemName="Shineworld Dragon Gloves" itemCount="+10" showType="itemonly"></ItemInfo>
                                </div>
                                <div class="info">
                                  <span class="time">16th Nov. 2021, 00:00:00 UTC</span>
                                  <div class="desc"><strong>War Dragon Outfit</strong> 아이템을 구매하였습니다.</div>
                                  <div class="history">- <span class="ico-darco ico-xs add-inside">356,134</span></div>
                                </div>
                              </div>
                            </div>
                            <!-- .fnc -->
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="active-info">
                                <div class="thumb">
                                  <ItemInfo itemCategory="grade-5" itemName="Shineworld Dragon Gloves" itemCount="+10" showType="itemonly"></ItemInfo>
                                </div>
                                <div class="info">
                                  <span class="time">16th Nov. 2021, 00:00:00 UTC</span>
                                  <div class="desc">
                                    <strong>War Dragon Outfit</strong> 아이템이 판매되었습니다. 판매수수료 5%가 차감된 금액이 연결된 지갑에
                                    입금되었습니다.
                                  </div>
                                  <div class="history">+ <span class="ico-darco ico-xs add-inside">95</span></div>
                                </div>
                              </div>
                            </div>
                            <!-- .fnc -->
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="active-info">
                                <div class="thumb">
                                  <ItemInfo itemCategory="grade-5" itemName="Shineworld Dragon Gloves" itemCount="+10" showType="itemonly"></ItemInfo>
                                </div>
                                <div class="info">
                                  <span class="time">16th Nov. 2021, 00:00:00 UTC</span>
                                  <div class="desc"><strong>War Dragon Outfit</strong> 아이템 판매 취소되었습니다.</div>
                                  <!-- .history -->
                                </div>
                              </div>
                            </div>
                            <!-- .fnc -->
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="active-info">
                                <div class="thumb">
                                  <ItemInfo itemCategory="grade-5" itemName="Shineworld Dragon Gloves" itemCount="+10" showType="itemonly"></ItemInfo>
                                </div>
                                <div class="info">
                                  <span class="time">16th Nov. 2021, 00:00:00 UTC</span>
                                  <div class="desc"><strong>War Dragon Outfit</strong> 아이템이 판매 등록되었습니다.</div>
                                  <!-- .history -->
                                </div>
                              </div>
                            </div>
                            <!-- .fnc -->
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-exd.webp" width="48" alt="exd logo" />
                                </div>
                                <div class="info">
                                  <span class="time">16th Nov. 2021, 00:00:00 UTC</span>
                                  <div class="desc">DSP Round 19 is Closed</div>
                                  <!-- .history -->
                                </div>
                              </div>
                            </div>
                            <!-- .fnc -->
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-draco.webp" width="48" height="48" alt="draco logo" />
                                </div>
                                <div class="info">
                                  <span class="time">16th Nov. 2021, 00:00:00 UTC</span>
                                  <div class="desc">Stake More DSP Round 19</div>
                                  <div class="history">
                                    <span class="ico-darco ico-xs add-inside">300</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- .fnc -->
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-draco.webp" width="48" height="48" alt="draco logo" />
                                </div>
                                <div class="info">
                                  <span class="time">16th Nov. 2021, 00:00:00 UTC</span>
                                  <div class="desc">Pre-stake DSP Round 19</div>
                                  <div class="history">
                                    <span class="ico-darco ico-xs add-inside">100</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- .fnc -->
                          </li>
                        </ul>
                      </div>
                    </div>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </div>
        </v-dialog>

        <!-- 구매하기 팝업  -->
        <v-dialog content-class="dialog-item-buy theme-dark" v-model="dialogBuyItem" max-width="640" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" style="display: block; color: #fff; font-weight: bold">
              [Popup - 아이템구매하기(구형)]
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
                    <strong class="nick">dracoqueen</strong>
                    <span class="server">ASIA 220</span>
                  </div>
                  <div class="credit-info">
                    <div class="category">DRACO Balance</div>
                    <div class="info"><span class="ico-darco ico-xs add-inside">85,100.0000</span></div>
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
                        <strong class="ico-darco ico-sm add-inside">105,300</strong>
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

        <!-- 구매하기 팝업(신형) -->
        <v-dialog content-class="dialog-item-buy bg-point" v-model="dialogBuyItemN" max-width="640" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" style="display: block; color: #fff; font-weight: bold">[Popup - 아이템구매(신형)]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogBuyItemN = false" fab plain x-small>
              <v-icon color="#fff" size="26">mdi-close</v-icon>
            </v-btn>

            <div class="itembuy-content">
              <div class="wrap-card">
                <h3 class="title">‘Shinworld Dragon Gloves’ 구매</h3>
                <div class="detail-card">
                  <Card itemType="legendary"></Card>
                </div>
                <div>
                  <div class="price">
                    <strong class="ico-hydra ico-ss add-inside">150,000</strong>
                    <span class="rate">$ 400,000</span>
                  </div>
                </div>
                <div class="detail-desc">
                  구매가 완료되면 판매가 150,000 DRACOs가<br />
                  연결된 WEMIX WALLET에서 인출됩니다.
                </div>
              </div>

              <div class="wrap-button">
                <button type="button" class="btn btn-primary2">구매하기</button>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- 공용팝업, 제목만 있는 케이스  -->
        <v-dialog content-class="dialog-common" v-model="dialogCommon" max-width="480" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" style="display: block; color: #fff; font-weight: bold">[popup - 판매취소]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogCommon = false" fab plain x-small>
              <v-icon color="#000" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="dialog-header">&nbsp;</div>
            <div class="wrap-notice">
              <div class="msgbox vcenter">
                <div>
                  <h4 class="title">Shineworld Dragon Gloves 아이템 판매를 취소하시겠습니까?</h4>
                  <!-- div.desc -->
                  <div class="wrap-button">
                    <button type="button" class="btn btn-sm">Cancel</button>
                    <button type="button" class="btn btn-primary btn-sm">Ok</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- 구매하기 팝업  -->
        <v-dialog content-class="dialog-item-regi theme-dark" v-model="dialogRegiItem" max-width="640" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" style="display: block; color: #fff; font-weight: bold">[Popup - 아이템 판매등록]</button>
          </template>
          <div class="content">
            <v-btn class="btn-close" @click="dialogRegiItem = false" fab plain x-small>
              <v-icon color="#fff" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="dialog-header">
              <h2 class="title">Item Register</h2>
            </div>

            <div class="item-content">
              <div class="wrap-cardinfo">
                <div class="card-detail">
                  <Card itemType="legendary" smaller="sm"></Card>
                </div>

                <div class="item-detail">
                  <ItemManual itemName="Shineworld Dragon Gloves" showType="normal" :rankType="rankType" desc="none"></ItemManual>

                  <div class="credit-info">
                    <div class="category">판매가</div>
                    <div class="info"><span class="ico-darco ico-sm add-inside">105,300.00</span></div>
                  </div>

                  <ul class="list">
                    <li>판매 완료시 판매가의 5%가 수수료로 차감됩니다.</li>
                    <li>등록된 아이템의 가격 수정은 불가능하고, 판매 취소만 가능합니다.</li>
                    <li>봉인 해제시 해당 아이템은 거래소에서 삭제 됩니다.</li>
                    <li>등록 후 일정 시간 이후 판매등록이 완료됩니다.</li>
                    <li>등록된 아이템이 30일동안 판매되지 않으면 판매 취소됩니다.</li>
                  </ul>
                </div>
              </div>

              <div class="wrap-button">
                <button type="button" class="btn btn-primary2">판매 등록 하기</button>
              </div>
            </div>
          </div>
        </v-dialog>
      </div>
    </section>
    <!-- <Footer></Footer> -->
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

import Card from '@/components-ui/common/Card';
import CharInfo from '@/components-ui/desktop/CharInfo';
import ItemInfo from '@/components-ui/desktop/ItemInfo';
import ItemManual from '@/components-ui/desktop/ItemManual';
import AccountInfo from '@/components-ui/desktop/AccountInfo';
import Footer from '@/partials/common/Footer';

export default defineComponent({
  name: 'ExchangePopup',
  props: {},
  components: {
    Card,
    Footer,
    CharInfo,
    ItemInfo,
    ItemManual,
    AccountInfo,
  },
  data: () => ({
    number: 0,
    // Category: ['legendary', 'epic', 'rare'],
    Category: ['grade-5', 'grade-4', 'grade-3'],
    // for tab
    tab: null,

    isDevelopment: process.env.NODE_ENV === 'development',
    dialogAccount: false,
    dialogBuyItem: false,
    dialogCommon: false,
    dialogBuyItemN: false,
    dialogRegiItem: false,
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
