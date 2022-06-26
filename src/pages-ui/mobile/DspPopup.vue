<template>
  <main class="contents">
    <section class="section">
      <div class="section__inner">
        <!-- 00_common_로그인팝업  -->
        <v-dialog content-class="dialog-login" v-model="dialogLogIn" max-width="360" persistent fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Login]</button>
          </template>
          <div class="content">
            <v-btn class="btn-close" @click="dialogLogIn = false" fab plain x-small>
              <v-icon color="#000" size="26">mdi-close</v-icon>
            </v-btn>
            <h3 class="title"><em>Mir4</em></h3>
            <h4 class="sub-title">Please log in to use the MIR4 X DRACO</h4>
            <!-- component로 구성해야할지 고민 -->
            <div class="sns-provider">
              <button type="button" class="btn-sns btn-google">Sign in with <strong>Google</strong></button>
              <button type="button" class="btn-sns btn-apple">Sign in with <strong>Apple</strong></button>
              <button type="button" class="btn-sns btn-facebook">Sign in with <strong>Facebook</strong></button>
            </div>
          </div>
        </v-dialog>

        <hr style="margin: 10px 0" />

        <!-- 00_common_로그인팝업  -->
        <v-dialog content-class="dialog-account" v-model="dialogAccount" max-width="560" persistent fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[AccountPopup]</button>
          </template>
          <div class="content">
            <v-btn class="btn-close" @click="dialogAccount = false" fab plain x-small>
              <v-icon color="#000" size="26">mdi-close</v-icon>
            </v-btn>
            <div class="dialog-header">
              <h3 class="title"><strong>Account Info</strong></h3>
            </div>
            <v-tabs class="tabs" v-model="tab" grow>
              <v-tabs-slider></v-tabs-slider>
              <v-tab>My Characters</v-tab>
              <v-tab>My Wallet</v-tab>
              <v-tab>Activity</v-tab>
              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-card class="my-character">
                    <div class="tabs-content">
                      <div class="list-header">
                        <div class="server-select">
                          <v-select
                            class="select"
                            :items="items"
                            v-model="defaultSelected.items"
                            outlined
                            dense
                            :menu-props="{ bottom: true, offsetY: true, contentClass: 'select-menu' }"
                          ></v-select>
                        </div>
                        <div class="server-update">
                          <button type="button" class="btn-update">
                            <em>정보업데이트</em>
                          </button>
                        </div>
                        <!-- label="Select Server" -->
                        <!-- placeholder="Select Server" -->
                      </div>
                      <!-- 동적스크롤 적용시를 대비하여 iscroll선언. -->
                      <div class="iscroll">
                        <ul class="list">
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="char-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-warrior.webp" width="64" height="64" alt="warrior" />
                                </div>
                                <div class="info">
                                  <strong class="nick">Warriworry</strong>
                                  <span class="lv">Lv.88</span><span class="category">Warrior</span>
                                </div>
                              </div>
                            </div>
                            <div class="fnc">
                              <!-- v-radio가 디자인적용하기 어려움. -->
                              <span class="radio-box">
                                <input type="radio" class="input-radio" id="MYCHAR1" name="mycharacters" value="1" />
                                <label for="MYCHAR1" class="input-label">대표캐릭터</label>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="char-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-sorcerer.webp" width="64" height="64" alt="sorcerer" />
                                </div>
                                <div class="info">
                                  <strong class="nick">Dracojjang</strong>
                                  <span class="lv">Lv.88</span><span class="category">Sorcerer</span>
                                </div>
                              </div>
                            </div>
                            <div class="fnc">
                              <span class="radio-box">
                                <input type="radio" class="input-radio" id="MYCHAR2" name="mycharacters" value="1" checked="checked" />
                                <label for="MYCHAR2" class="input-label">대표캐릭터</label>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="char-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-taoist.webp" width="64" height="64" alt="taoist" />
                                </div>
                                <div class="info">
                                  <strong class="nick">jjangdraco</strong>
                                  <span class="lv">Lv.88</span><span class="category">Taoist</span>
                                </div>
                              </div>
                            </div>
                            <div class="fnc">
                              <span class="radio-box">
                                <input type="radio" class="input-radio" id="MYCHAR3" name="mycharacters" value="1" />
                                <label for="MYCHAR3" class="input-label">대표캐릭터</label>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="char-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-lancer.webp" width="64" height="64" alt="lancer" />
                                </div>
                                <div class="info">
                                  <strong class="nick">abcdefghijkl</strong>
                                  <span class="lv">Lv.88</span><span class="category">Lancer</span>
                                </div>
                              </div>
                            </div>
                            <div class="fnc">
                              <span class="radio-box">
                                <input type="radio" class="input-radio" id="MYCHAR4" name="mycharacters" value="1" />
                                <label for="MYCHAR4" class="input-label">대표캐릭터</label>
                              </span>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="char-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-arbalist.webp" width="64" height="64" alt="arbalist" />
                                </div>
                                <div class="info">
                                  <strong class="nick">Warriworry</strong>
                                  <span class="lv">Lv.88</span><span class="category">Arbalist</span>
                                </div>
                              </div>
                            </div>
                            <div class="fnc">
                              <span class="radio-box">
                                <input type="radio" class="input-radio" id="MYCHAR5" name="mycharacters" value="1" checked="checked" />
                                <label for="MYCHAR5" class="input-label">대표캐릭터</label>
                              </span>
                            </div>
                          </li>
                        </ul>
                        <p class="list-notice">XDRACO상자를 이용할 수 있는 Lv. 40이상 캐릭터만 노출됩니다.</p>
                      </div>
                    </div>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card class="my-wallet">
                    <div class="tabs-content">
                      <v-snackbar v-model="isCopiedWalletAddress" :timeout="2500" top>
                        <span>Copied</span>
                        <template v-slot:action="{ attrs }">
                          <v-btn color="pink" text v-bind="attrs" @click="isCopiedWalletAddress = false">Close</v-btn>
                        </template>
                      </v-snackbar>

                      <div class="list-header">
                        <div class="my-address">
                          <strong>My wallet Address</strong>
                          <button type="button" class="btn-copy" @click="copyToClipboard">
                            <span>0x89808ca091d7cb1ee8e2790fgf5023a0b15e2356</span>
                            <em class="hidden">Copy wallet address</em>
                          </button>
                        </div>
                      </div>
                      <!-- 동적스크롤 적용시를 대비하여 iscroll선언. -->
                      <div class="iscroll">
                        <ul class="list">
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="credit-info">
                                <div class="category">DRACO Balance</div>
                                <div class="info">
                                  <span class="ico-darco ico-sm add-inside">1,342,456.0000</span>
                                </div>
                              </div>
                            </div>
                            <div class="fnc">
                              <button type="button" class="btn-circle-plus"><span class="hidden">ADD</span></button>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="credit-info">
                                <div class="category">Hydra Balance</div>
                                <div class="info">
                                  <span class="ico-hydra2 ico-sm add-inside">15,456.0000</span>
                                </div>
                              </div>
                            </div>
                            <div class="fnc">
                              <button type="button" class="btn-circle-plus"><span class="hidden">ADD</span></button>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="credit-info">
                                <div class="category">WEMIX CREDIT Balance</div>
                                <div class="info">
                                  <span class="ico-wemixcredit ico-sm add-inside">2,456.0153</span>
                                </div>
                              </div>
                            </div>
                            <div class="fnc">
                              <button type="button" class="btn-circle-plus"><span class="hidden">ADD</span></button>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="credit-info">
                                <div class="category">WEMIX Balance</div>
                                <div class="info">
                                  <span class="ico-wemix ico-sm add-inside">15,456.0000</span>
                                </div>
                              </div>
                            </div>
                            <div class="fnc">
                              <button type="button" class="btn-circle-plus"><span class="hidden">ADD</span></button>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="btm-info">
                        <div class="iflex type-colum">
                          <div class="desc">
                            It may differ from the actual balance.<br />
                            please check WEMIX WALLET for accurate information.
                          </div>
                          <div class="brand-logo"><em class="hidden">wemix</em></div>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card class="my-activity">
                    <div class="tabs-content">
                      <div class="list-header">
                        <div class="msg-notice">You can check the activity at XDRACO for last 90 days.</div>
                      </div>
                      <!-- 동적스크롤 적용시를 대비하여 iscroll선언. -->
                      <!-- .v-virtual-scroll -->
                      <div class="iscroll">
                        <ul class="list">
                          <li>
                            <div class="list-content">
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/mobile/popup/profile-mirage.webp" width="48" height="48" alt="MIRAGE" />
                                </div>
                                <div class="info">
                                  <span class="time">NOW</span>
                                  <div class="desc">Mirage 관련 메세지</div>
                                  <div class="history">
                                    <span class="ico-vigor ico-xs add-inside">5</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/mobile/popup/profile-mirage.webp" width="48" height="48" alt="MIRAGE" />
                                </div>
                                <div class="info">
                                  <span class="time">NOW</span>
                                  <div class="desc">Mirage 관련 메세지</div>
                                  <div class="history">
                                    <span class="ico-hydra ico-xs add-inside">5</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/mobile/popup/profile-hydra.webp" width="48" height="48" alt="HSP" />
                                </div>
                                <div class="info">
                                  <span class="time">NOW</span>
                                  <div class="desc">HSP 스테이킹 완료</div>
                                  <div class="history">
                                    <span class="ico-hydra ico-xs add-inside">5</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/mobile/popup/profile-hydra.webp" width="48" height="48" alt="HSP" />
                                </div>
                                <div class="info">
                                  <span class="time">NOW</span>
                                  <div class="desc">HSP 스테이킹 실패</div>
                                  <div class="history">
                                    <span class="ico-hydra ico-xs add-inside" :class="{ failed: true }">5</span>
                                    <em class="failed"> (Failed)</em>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/mobile/popup/profile-hydra.webp" width="48" height="48" alt="HSP" />
                                </div>
                                <div class="info">
                                  <span class="time">5min ago</span>
                                  <div class="desc">HSP 스테이킹 완료</div>
                                  <div class="history">
                                    <em>Refund</em>
                                    <span class="ico-hydra ico-xs add-inside">356,134</span>
                                    <em class="plus">+</em>
                                    <em>Reward</em>
                                    <span class="ico-hydra ico-xs add-inside">0.001244013</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/mobile/popup/profile-hydra.webp" width="48" height="48" alt="HSP" />
                                </div>
                                <div class="info">
                                  <span class="time">5min ago</span>
                                  <div class="desc">HSP 스테이킹 실패</div>
                                  <div class="history">
                                    <em>Refund</em>
                                    <span class="ico-hydra ico-xs add-inside" :class="{ failed: true }">356,134</span>
                                    <em class="failed"> (Failed)</em>
                                    <em class="plus">+</em>
                                    <em>Reward</em>
                                    <span class="ico-hydra ico-xs add-inside" :class="{ failed: true }">0.001244013</span>
                                    <em class="failed"> (Failed)</em>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/mobile/popup/profile-hydra.webp" width="48" height="48" alt="HSP" />
                                </div>
                                <div class="info">
                                  <span class="time">5min ago</span>
                                  <div class="desc">HSP Reward Calim 완료</div>
                                  <div class="history">
                                    <em>Reward</em>
                                    <span class="ico-hydra ico-xs add-inside">0.001244013</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-warrior.webp" width="48" height="48" alt="warrior" />
                                </div>
                                <div class="info">
                                  <span class="time">NOW</span>
                                  <div class="desc">ASIA134 ‘worryworry’ got the win prize in DSP Round 12</div>
                                  <div class="history"><strong>‘War Dragon Outfit’</strong></div>
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
                                  <span class="time">5min ago</span>
                                  <div class="desc">Take Refund &amp; Rewards of DSP SEASON1 Round 18</div>
                                  <div class="history">
                                    <em>Refund</em>
                                    <!-- <span class="ico-darco ico-xs"></span> -->
                                    <span class="ico-darco ico-xs add-inside">356,134</span>
                                    <em> + Reward</em>
                                    <span class="ico-darco ico-xs add-inside">0.001244013</span>
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
                          <li>
                            <div class="list-content">
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-warrior.webp" width="48" height="48" alt="warrior" />
                                </div>
                                <div class="info">
                                  <span class="time">NOW</span>
                                  <div class="desc">ASIA134 ‘worryworry’ got the win prize in DSP Round 12</div>
                                  <div class="history"><strong>‘War Dragon Outfit’</strong></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-warrior.webp" width="48" height="48" alt="warrior" />
                                </div>
                                <div class="info">
                                  <span class="time">NOW</span>
                                  <div class="desc">ASIA134 ‘worryworry’ got the win prize in DSP Round 12</div>
                                  <div class="history"><strong>‘War Dragon Outfit’</strong></div>
                                </div>
                              </div>
                            </div>
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

        <!-- 00_common_로그인팝업-데이터없음  -->
        <v-dialog content-class="dialog-account" v-model="dialogAccountnull" max-width="560" persistent fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[AccountPopup Null]</button>
          </template>
          <div class="content">
            <v-btn class="btn-close" @click="dialogAccountnull = false" fab plain x-small>
              <v-icon color="#000" size="26">mdi-close</v-icon>
            </v-btn>
            <div class="dialog-header">
              <h3 class="title"><strong>Account Info</strong></h3>
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
                      <!-- .list-header -->
                      <!-- .iscroll -->
                      <div class="msgbox vcenter">
                        <div>
                          <h4 class="title">생성된 캐릭터가 없습니다.</h4>
                          <div class="desc">MIR4에서 캐릭터를 생성하고 플레이해보세요.</div>
                          <div class="wrap-button">
                            <button type="button" class="btn btn-primary btn-sm">MIR4 Brand Site</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card class="my-wallet">
                    <div class="tabs-content">
                      <div class="msgbox vcenter">
                        <div>
                          <h4 class="title">위믹스 월랫 연결하세요.</h4>
                          <div class="desc">
                            XDRACO의 모든 서비스를 사용하기 위해서는 <br />
                            WEMIX WALLET 연결이 반드시 필요합니다. <br />
                            MIR4를 실행하고 WEMIX WALLET과 연결하세요.
                          </div>
                          <div class="wrap-button">
                            <button type="button" class="btn btn-primary btn-sm">WEMIX WALLET GUIDE</button>
                          </div>
                        </div>
                      </div>
                      <div class="btm-info">
                        <div class="iflex type-row">
                          <div class="desc">
                            It may differ from the actual balance.<br />
                            please check WEMIX WALLET for accurate information.
                          </div>
                          <div class="brand-logo"><em class="hidden">wemix</em></div>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card class="my-activity">
                    <div class="tabs-content">
                      <div class="msgbox vcenter">
                        <div>
                          <h4 class="title">활동 내역이 없습니다.</h4>
                          <div class="desc">XDRACO DSP에 참여하고, 아이템을 획득해보세요.</div>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </div>
        </v-dialog>

        <!-- Lv40이상 케이스  -->
        <v-dialog content-class="dialog-account" v-model="dialogAccount40" max-width="560" persistent fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Lv40 Over]</button>
          </template>
          <div class="content">
            <v-btn class="btn-close" @click="dialogAccount40 = false" fab plain x-small>
              <v-icon color="#000" size="26">mdi-close</v-icon>
            </v-btn>
            <div class="dialog-header">
              <h3 class="title"><strong>Account Info</strong></h3>
            </div>
            <v-tabs class="tabs" v-model="tab" grow>
              <v-tabs-slider></v-tabs-slider>
              <v-tab>My Characters</v-tab>
              <v-tab>My Wallet</v-tab>
              <v-tab>Activity</v-tab>
              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-card class="my-character">
                    <div class="tabs-content">
                      <!-- .list-header -->
                      <!-- .iscroll -->
                      <div class="msgbox vcenter">
                        <div>
                          <h4 class="title">Lv.40이상의 캐릭터가 없습니다.</h4>
                          <div class="desc">XDRACO 서비스 이용을 위해서는 Lv.40 이상의 MIR4에서 캐릭터가 필요합니다.</div>
                          <div class="wrap-button">
                            <button type="button" class="btn btn-primary btn-sm">MIR4 Brand Site</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card class="my-wallet">
                    <div class="tabs-content">
                      <div class="msgbox vcenter">
                        <div>
                          <h4 class="title">WEMIX 지갑 로그인이 필요합니다</h4>
                          <div class="wrap-button">
                            <button type="button" class="btn-wemix"><em class="hidden">WEMIX </em>LOGIN</button>
                          </div>
                        </div>
                      </div>
                      <div class="btm-info">
                        <div class="iflex type-row">
                          <div class="desc">
                            It may differ from the actual balance.<br />
                            please check WEMIX WALLET for accurate information.
                          </div>
                          <div class="brand-logo"><em class="hidden">wemix</em></div>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card class="my-activity">
                    <div class="tabs-content">
                      <div class="msgbox vcenter"></div>
                    </div>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </div>
        </v-dialog>

        <hr style="margin: 10px 0" />

        <!-- 00_common_popup title + description + 2buttons  -->
        <v-dialog content-class="dialog-common" v-model="dialogCommon" max-width="480" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Show title + description + 2buttons]</button>
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
                  <h4 class="title">Title 2line text Lorem ipsum <br />dolor sit amet, consectetur adipiscing elit.</h4>
                  <div class="desc">
                    Lorem ipsum dolor sit amet, consectetur <br />
                    adipiscing elit. <br />Vivamus nec commodo risus
                  </div>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-sm">2 Button</button>
                    <button type="button" class="btn btn-primary btn-sm">2 Button</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- 00_common_popup icon + title + description + 1button  -->
        <v-dialog content-class="dialog-common" v-model="dialogCommonOnebtn" max-width="480" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[icon + title + description + 1button]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogCommonOnebtn = false" fab plain x-small>
              <v-icon color="#000" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="dialog-header">&nbsp;</div>
            <div class="wrap-notice">
              <div class="msgbox vcenter">
                <div>
                  <span class="ico-completed"><em class="hidden">Completed</em></span>
                  <span class="ico-error"><em class="hidden">Error</em></span>
                  <h4 class="title">Title 1line text</h4>
                  <div class="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
                    Vivamus nec commodo risus
                  </div>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-primary btn-sm">1 Button</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- 00_common_popup icon + title + description + 1button  -->
        <v-dialog content-class="dialog-common" v-model="dialogCommonCssload" max-width="480" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[icon + title + description with CSS Animation Only]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogCommonCssload = false" fab plain x-small>
              <v-icon color="#000" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="dialog-header">&nbsp;</div>
            <div class="wrap-notice">
              <div class="msgbox vcenter">
                <div>
                  <span class="ico-loading add-ani"><em class="hidden">Loading</em></span>
                  <h4 class="title">Waiting for confirmation</h4>
                  <div class="desc">
                    3,000DRACO를 스테이킹하고 있습니다. <br />
                    브라우저를 종료하지 말고 대기해주세요.
                  </div>
                  <!-- .wrap-button -->
                </div>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- 00_common_popup icon + title + description + 1button  -->
        <v-dialog content-class="dialog-common" v-model="dialogCommonNobtn" max-width="480" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[icon + title + description with SVG]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogCommonNobtn = false" fab plain x-small>
              <v-icon color="#000" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="dialog-header">&nbsp;</div>
            <div class="wrap-notice">
              <div class="msgbox vcenter">
                <div>
                  <svg height="64px" width="64px" class="loading-circle">
                    <defs>
                      <radialGradient cx="50%" cy="0%" id="grad1" r="100%">
                        <stop offset="0%" style="stop-color: rgb(170, 0, 255); stop-opacity: 1"></stop>
                        <stop offset="40%" style="stop-color: rgb(212, 125, 255); stop-opacity: 1"></stop>
                        <stop offset="100%" style="stop-color: rgb(255, 255, 255); stop-opacity: 0"></stop>
                      </radialGradient>
                    </defs>
                    <circle cx="32" cy="32" id="circle" r="20" fill="white" stroke-width="5" stroke="url(#grad1)"></circle>
                  </svg>
                  <h4 class="title">Waiting for confirmation</h4>
                  <div class="desc">
                    3,000DRACO를 스테이킹하고 있습니다. <br />
                    브라우저를 종료하지 말고 대기해주세요.
                  </div>
                  <!-- .wrap-button -->
                </div>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- 00_common_popup icon + title + description + 1button  -->
        <v-dialog content-class="dialog-common" v-model="dialogCommonVueGraph" max-width="480" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[icon + title + description with VueProcess Graph]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogCommonVueGraph = false" fab plain x-small>
              <v-icon color="#000" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="dialog-header">&nbsp;</div>
            <div class="wrap-notice">
              <div class="msgbox vcenter">
                <div>
                  <div class="wrap-loading">
                    <v-progress-circular :size="42" :width="4" color="#aa00ff" indeterminate></v-progress-circular>
                  </div>
                  <h4 class="title">Waiting for confirmation</h4>
                  <div class="desc">
                    3,000DRACO를 스테이킹하고 있습니다. <br />
                    브라우저를 종료하지 말고 대기해주세요.
                  </div>
                  <!-- .wrap-button -->
                </div>
              </div>
            </div>
          </div>
        </v-dialog>

        <hr style="margin: 10px 0" />

        <!-- ### Stake Earlier.###  -->
        <v-dialog content-class="dialog-stake theme-dark" v-model="dialogRoundStakeEalier" max-width="640" persistent fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Popup - Stake Earlier]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogRoundStakeEalier = false" fab plain x-small>
              <v-icon color="#fff" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="dialog-header">
              <div class="info-round">
                <RoundNumber value="34"></RoundNumber>
                <RoundTitle></RoundTitle>
              </div>
            </div>
            <div class="card-content">
              <div class="wrap-char">
                <div class="char-info">
                  <div class="char">
                    <img src="@/assets/img/desktop/popup/profile-taoist.webp" width="40" height="40" alt="taoist" />
                    <div class="wrap-nick">
                      <strong class="nick">dracoqueen</strong>
                      <span class="server">ASIA 220</span>
                    </div>
                  </div>
                  <div class="amount">
                    <dl class="balance">
                      <dt><em class="hidden">DRACO Balance</em></dt>
                      <dd>
                        <span class="ico-darco ico-xs add-inside">{{ randomDraco }}</span>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="char-detail">
                  <div class="wrap-detail">
                    <h3 class="title">Stake Earlier</h3>
                    <ul class="detail-list">
                      <li>Stake Earlier gets a higher Odds. Hurry up!</li>
                      <li>First stake needs participation fee 1DRACO (Non-refundable)</li>
                      <li>LEGENDARY Round’s minimum stake is <em class="point">10 DRACO.</em></li>
                    </ul>
                  </div>
                  <div class="amount">
                    <dl class="stake">
                      <dt>Current Stake</dt>
                      <dd>
                        <strong class="ico-darco ico-xs add-inside">{{ randomStake }}</strong>
                        <em class="profit">+ 10 DRACO</em>
                      </dd>
                    </dl>
                    <dl class="stake">
                      <dt>Current Odds</dt>
                      <dd>
                        <div class="odds">
                          <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <span v-bind="attrs" v-on="on" class="value">11.987654321012345678</span>%
                            </template>
                            <span>11.987654321012345678</span>
                          </v-tooltip>
                        </div>
                        <div class="profit">
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <span v-bind="attrs" v-on="on" class="value">0.987654321012345678</span>% (E)
                            </template>
                            <span>0.987654321012345678</span>
                          </v-tooltip>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div class="form-amount">
                <span class="desc">Input your stake amount</span>
                <div class="wrap-form">
                  <!--
                      진환개발자님,
                      포커스시 : "fieldset editable focus"
                      에러시 : "fieldset editable alert" 클래스 추가 부탁드립니다.
                    -->
                  <div class="fieldset editable">
                    <div>
                      <span class="ico-darco ico-xs"><em class="hidden">DRACO</em></span>
                      <!-- <span contenteditable="true" placeholder="Stake Amount"></span> -->
                      <input type="text" placeholder="Stake Amount" @input="onInput" />
                    </div>
                    <span class="add-draco">
                      <em class="add">+</em>
                      <span class="ico-darco ico-xs add-inside">1</span>
                      <em class="fee">(Entry fee)</em>
                    </span>
                  </div>

                  <!-- 구형 모델 -->
                  <div class="fieldset add-ico-draco" style="display: none">
                    <input type="tel" class="input" placeholder="Enter a price in DRACO" value="" tabindex="" />
                  </div>
                  <!-- div class="in-msg">+1 DRACO will charged for participantion fee</div -->
                  <!-- .notice alert -->
                </div>
              </div>

              <div class="wrap-button">
                <button type="button" class="btn btn-primary">STAKE EARLIER</button>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- ### Stake MORE.###  -->
        <v-dialog content-class="dialog-stake theme-dark" v-model="dialogRoundStakeMore" max-width="640" persistent fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Popup - Stake More]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogRoundStakeMore = false" fab plain x-small>
              <v-icon color="#fff" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="dialog-header">
              <div class="info-round">
                <RoundNumber value="34"></RoundNumber>
                <RoundTitle></RoundTitle>
              </div>
            </div>
            <div class="card-content">
              <div class="wrap-char">
                <div class="char-info">
                  <div class="char">
                    <img src="@/assets/img/desktop/popup/profile-taoist.webp" width="40" height="40" alt="taoist" />
                    <div class="wrap-nick">
                      <strong class="nick">dracoqueen</strong>
                      <span class="server">ASIA 220</span>
                    </div>
                  </div>
                  <div class="amount">
                    <dl class="balance">
                      <dt><em class="hidden">DRACO Balance</em></dt>
                      <dd>
                        <span class="ico-darco ico-xs add-inside">{{ randomDraco }}</span>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="char-detail">
                  <div class="wrap-detail">
                    <h3 class="title">Stake More</h3>
                    <ul class="detail-list">
                      <li>Increase your Odds with Stake More.</li>
                      <li>Stake More can only be heigher than current stake.</li>
                      <li>LEGENDARY Round’s minimum stake is <em class="point">10 DRACO.</em></li>
                    </ul>
                  </div>
                  <div class="amount">
                    <dl class="stake">
                      <dt>Current Stake</dt>
                      <dd>
                        <strong class="ico-darco ico-xs add-inside">{{ randomStake }}</strong>
                        <em class="profit">+ 3,010 DRACO</em>
                      </dd>
                    </dl>
                    <dl class="stake">
                      <dt>Current Odds</dt>
                      <dd>
                        <div class="odds">
                          <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <span v-bind="attrs" v-on="on" class="value">11.987654321012345678</span>%
                            </template>
                            <span>11.987654321012345678</span>
                          </v-tooltip>
                        </div>
                        <div class="profit">
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <span v-bind="attrs" v-on="on" class="value">0.987654321012345678</span>% (E)
                            </template>
                            <span>0.987654321012345678</span>
                          </v-tooltip>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div class="form-amount">
                <span class="desc">Input your stake amount</span>
                <div class="wrap-form">
                  <div class="fieldset editable">
                    <div>
                      <span class="ico-darco ico-xs"><em class="hidden">DRACO</em></span>
                      <!-- <span contenteditable="true" placeholder="Stake Amount"></span> -->
                      <input type="text" placeholder="Stake Amount" value="3010" />
                    </div>
                  </div>
                  <!-- .notice alert -->
                  <div class="in-msg">
                    <span>Previous Stake</span>
                    <span class="ico-darco ico-xs add-inside">3,000</span>
                  </div>
                </div>
              </div>

              <div class="wrap-button">
                <button type="button" class="btn btn-primary2">STAKE MORE</button>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- ### Stake MORE ERROR.###  -->
        <v-dialog content-class="dialog-stake theme-dark" v-model="dialogRoundStakeError" max-width="640" persistent fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Popup - Stake More Error]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogRoundStakeError = false" fab plain x-small>
              <v-icon color="#fff" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="dialog-header">
              <div class="info-round">
                <RoundNumber value="34"></RoundNumber>
                <RoundTitle></RoundTitle>
              </div>
            </div>
            <div class="card-content">
              <div class="wrap-char">
                <div class="char-info">
                  <div class="char">
                    <img src="@/assets/img/desktop/popup/profile-taoist.webp" width="40" height="40" alt="taoist" />
                    <div class="wrap-nick">
                      <strong class="nick">dracoqueen</strong>
                      <span class="server">ASIA 220</span>
                    </div>
                  </div>
                  <div class="amount">
                    <dl class="balance">
                      <dt><em class="hidden">DRACO Balance</em></dt>
                      <dd>
                        <span class="ico-darco ico-xs add-inside">{{ randomDraco }}</span>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="char-detail">
                  <div class="wrap-detail">
                    <h3 class="title">Stake More</h3>
                    <ul class="detail-list">
                      <li>Increase your Odds with Stake More.</li>
                      <li>Stake More can only be heigher than current stake.</li>
                      <li>LEGENDARY Round’s minimum stake is <em class="point">10 DRACO.</em></li>
                    </ul>
                  </div>
                  <div class="amount">
                    <dl class="stake">
                      <dt>Current Stake</dt>
                      <dd>
                        <strong class="ico-darco ico-xs add-inside">{{ randomStake }}</strong>
                        <!-- .profit -->
                      </dd>
                    </dl>
                    <dl class="stake">
                      <dt>Current Odds</dt>
                      <dd>
                        <div class="odds">
                          <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <span v-bind="attrs" v-on="on" class="value">11.987654321012345678</span>%
                            </template>
                            <span>11.987654321012345678</span>
                          </v-tooltip>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div class="form-amount">
                <span class="desc alert">Amount should be higher than the minimum stake</span>
                <div class="wrap-form">
                  <div class="fieldset editable alert">
                    <div>
                      <span class="ico-darco ico-xs"><em class="hidden">DRACO</em></span>
                      <!-- <span contenteditable="true" placeholder="Stake Amount"></span> -->
                      <input type="text" placeholder="Stake Amount" value="100" />
                    </div>
                    <span class="add-draco">
                      <em class="add">+</em>
                      <span class="ico-darco ico-xs add-inside">1</span>
                      <em class="fee">(Entry fee)</em>
                    </span>
                  </div>
                  <div class="in-msg">
                    <span>Previous Stake</span>
                    <span class="ico-darco ico-xs add-inside">3,000</span>
                  </div>
                  <!-- .notice alert -->
                </div>
              </div>

              <div class="wrap-button">
                <button type="button" class="btn" disabled="disabled">STAKE MORE</button>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- ### Pre-Stake ###  -->
        <v-dialog content-class="dialog-stake theme-dark" v-model="dialogRoundPreStake" max-width="640" persistent fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Popup - Pre Stake]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogRoundPreStake = false" fab plain x-small>
              <v-icon color="#fff" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="dialog-header">
              <div class="info-round">
                <RoundNumber value="34"></RoundNumber>
                <RoundTitle></RoundTitle>
              </div>
            </div>
            <div class="card-content">
              <div class="wrap-char">
                <div class="char-info">
                  <div class="char">
                    <img src="@/assets/img/desktop/popup/profile-taoist.webp" width="40" height="40" alt="taoist" />
                    <div class="wrap-nick">
                      <strong class="nick">dracoqueen</strong>
                      <span class="server">ASIA 220</span>
                    </div>
                  </div>
                  <div class="amount">
                    <dl class="balance">
                      <dt><em class="hidden">DRACO Balance</em></dt>
                      <dd>
                        <span class="ico-darco ico-xs add-inside">{{ randomDraco }}</span>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="char-detail">
                  <div class="wrap-detail">
                    <h3 class="title">Pre-Stake</h3>
                    <ul class="detail-list">
                      <li>Stake Earlier gets a higher Odds. Hurry up!</li>
                      <li>First stake needs participation fee 1DRACO (Non-refundable)</li>
                      <li>LEGENDARY Round’s minimum stake is <em class="point">10 DRACO.</em></li>
                    </ul>
                  </div>
                  <div class="amount">
                    <dl class="stake">
                      <dt>Current Stake</dt>
                      <dd>
                        <strong class="ico-darco ico-xs add-inside">{{ randomStake }}</strong>
                        <em class="profit">+ 300 DRACO</em>
                      </dd>
                    </dl>
                    <dl class="stake">
                      <dt>Current Odds</dt>
                      <dd>
                        <div class="odds">
                          <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <span v-bind="attrs" v-on="on" class="value">11.987654321012345678</span>%
                            </template>
                            <span>11.987654321012345678</span>
                          </v-tooltip>
                        </div>
                        <div class="profit">
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <span v-bind="attrs" v-on="on" class="value">0.987654321012345678</span>% (E)
                            </template>
                            <span>0.987654321012345678</span>
                          </v-tooltip>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div class="form-amount">
                <span class="desc">Input your stake amount</span>
                <div class="wrap-form">
                  <div class="fieldset editable">
                    <div>
                      <span class="ico-darco ico-xs"><em class="hidden">DRACO</em></span>
                      <!-- <span contenteditable="true" placeholder="Stake Amount"></span> -->
                      <input type="text" placeholder="Stake Amount" value="10" />
                    </div>
                    <span class="add-draco">
                      <em class="add">+</em>
                      <span class="ico-darco ico-xs add-inside">1</span>
                      <em class="fee">(Entry fee)</em>
                    </span>
                  </div>
                  <!-- .notice alert -->
                </div>
              </div>

              <div class="wrap-button">
                <button type="button" class="btn btn-primary">PRE-STAKE</button>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- ### Pre-Stake MORE ###  -->
        <v-dialog content-class="dialog-stake theme-dark" v-model="dialogRoundPreStakeMore" max-width="640" persistent fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Popup - Pre Stake More]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogRoundPreStakeMore = false" fab plain x-small>
              <v-icon color="#fff" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="dialog-header">
              <div class="info-round">
                <RoundNumber value="34"></RoundNumber>
                <RoundTitle></RoundTitle>
              </div>
            </div>
            <div class="card-content">
              <div class="wrap-char">
                <div class="char-info">
                  <div class="char">
                    <img src="@/assets/img/desktop/popup/profile-taoist.webp" width="40" height="40" alt="taoist" />
                    <div class="wrap-nick">
                      <strong class="nick">dracoqueen</strong>
                      <span class="server">ASIA 220</span>
                    </div>
                  </div>
                  <div class="amount">
                    <dl class="balance">
                      <dt><em class="hidden">DRACO Balance</em></dt>
                      <dd>
                        <span class="ico-darco ico-xs add-inside">{{ randomDraco }}</span>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div class="char-detail">
                  <div class="wrap-detail">
                    <h3 class="title">Pre-Stake</h3>
                    <ul class="detail-list">
                      <li>Stake Earlier gets a higher Odds. Hurry up!</li>
                      <li>First stake needs participation fee 1DRACO (Non-refundable)</li>
                      <li>LEGENDARY Round’s minimum stake is <em class="point">10 DRACO.</em></li>
                    </ul>
                  </div>
                  <div class="amount">
                    <dl class="stake">
                      <dt>Current Stake</dt>
                      <dd>
                        <strong class="ico-darco ico-xs add-inside">{{ randomStake }}</strong>
                        <em class="profit">+ 300 DRACO</em>
                      </dd>
                    </dl>
                    <dl class="stake">
                      <dt>Current Odds</dt>
                      <dd>
                        <div class="odds">
                          <v-tooltip top>
                            <template v-slot:activator="{ on, attrs }">
                              <span v-bind="attrs" v-on="on" class="value">11.987654321012345678</span>%
                            </template>
                            <span>11.987654321012345678</span>
                          </v-tooltip>
                        </div>
                        <div class="profit">
                          <v-tooltip bottom>
                            <template v-slot:activator="{ on, attrs }">
                              <span v-bind="attrs" v-on="on" class="value">0.987654321012345678</span>% (E)
                            </template>
                            <span>0.987654321012345678</span>
                          </v-tooltip>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div class="form-amount">
                <span class="desc">Input your stake amount</span>
                <div class="wrap-form">
                  <div class="fieldset editable">
                    <div>
                      <span class="ico-darco ico-xs"><em class="hidden">DRACO</em></span>
                      <!-- <span contenteditable="true" placeholder="Stake Amount"></span> -->
                      <input type="text" placeholder="Stake Amount" value="3001" />
                    </div>
                  </div>
                  <div class="in-msg">
                    <span>Previous Stake</span>
                    <span class="ico-darco ico-xs add-inside">3,000</span>
                  </div>
                  <!-- .notice alert -->
                </div>
              </div>

              <div class="wrap-button">
                <button type="button" class="btn btn-primary2">STAKE MORE</button>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- ### Reward Winner ###  -->
        <v-dialog content-class="dialog-stake theme-dark winner" v-model="dialogRoundReward" max-width="640" persistent fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Popup - Reward Winner]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogRoundReward = false" fab plain x-small>
              <v-icon color="#fff" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="card-content card-result">
              <div class="wrap-char">
                <!-- .char-info -->
                <div class="char-detail">
                  <div class="wrap-detail">
                    <h3 class="title">YOU WON!</h3>
                    <div class="detail-desc">
                      당신은 DSP 시즌1 56라운드 위너입니다.<br />
                      ASIA 12 서버의 dracoqueen의 우편함에서 확인하십시오.<br />
                      당신이 예치한 드레이코는 다른 참가자들의 리워드로 배분됩니다. <br />
                    </div>
                    <div class="detail-card">
                      <Card itemType="legendary" smaller="sm"></Card>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wrap-button">
                <button type="button" class="btn btn-secondary">WIN PRIZE!</button>
              </div>
            </div>
          </div>
        </v-dialog>

        <v-dialog content-class="dialog-stake theme-dark winner" v-model="dialogRoundCharChoice" max-width="640" persistent fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Popup - Winner - 캐릭터선택(11/04)]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogRoundCharChoice = false" fab plain x-small>
              <v-icon color="#fff" size="26">mdi-close</v-icon>
            </v-btn>
            <div class="card-content card-result">
              <div class="wrap-char">
                <div class="char-choice">
                  <div class="wrap-detail">
                    <h3 class="title">YOU WON!</h3>
                    <div class="detail-desc">
                      당신은 DSP 시즌1 56라운드 위너입니다. <br />
                      ASIA 12 서버의 dracoqueen의 우편함에서 확인하십시오. <br />
                      당신이 예치한 드레이코는 다른 참가자들의 리워드로 배분됩니다.
                    </div>
                    <div class="detail-card">
                      <Card itemType="legendary"></Card>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wrap-button">
                <button type="button" class="btn btn-secondary">WIN PRIZE!</button>
              </div>
            </div>
          </div>
        </v-dialog>

        <v-dialog content-class="dialog-stake theme-dark" v-model="dialogRoundCharChoicelist" max-width="640" persistent fullscreen>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Popup - Winner - 캐릭터선택 리스트(11/04)]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogRoundCharChoicelist = false" fab plain x-small>
              <v-icon color="#fff" size="26">mdi-close</v-icon>
            </v-btn>
            <div class="card-content">
              <div class="wrap-list">
                <div class="notice">Choose your MIR 4 character that the XDRACO item will be sent to.</div>
                <div class="list-header">
                  <div class="server-select">
                    <v-select
                      class="select"
                      :items="items"
                      v-model="defaultSelected.items"
                      outlined
                      dense
                      :menu-props="{ bottom: true, offsetY: true, contentClass: 'select-menu' }"
                    ></v-select>
                  </div>
                  <div class="server-update">
                    <button type="button" class="btn-update">
                      <em>정보업데이트</em>
                    </button>
                  </div>
                </div>
                <div class="iscroll">
                  <ul class="list">
                    <li>
                      <div class="list-content">
                        <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                        <div class="char-info">
                          <div class="thumb">
                            <img src="@/assets/img/desktop/popup/profile-warrior.webp" width="56" height="56" alt="warrior" />
                          </div>
                          <div class="info">
                            <strong class="nick">Warriworry</strong>
                            <span class="lv">Lv.88</span><span class="category">Warrior</span>
                          </div>
                        </div>
                      </div>
                      <div class="fnc">
                        <!-- v-radio가 디자인적용하기 어려움. -->
                        <span class="radio-box">
                          <input type="radio" class="input-radio" id="MYCHAR1" name="mycharacters" value="1" />
                          <label for="MYCHAR1" class="input-label"></label>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="list-content">
                        <div class="char-info">
                          <div class="thumb">
                            <img src="@/assets/img/desktop/popup/profile-sorcerer.webp" width="56" height="56" alt="sorcerer" />
                          </div>
                          <div class="info">
                            <strong class="nick">Dracojjang</strong>
                            <span class="lv">Lv.88</span><span class="category">Sorcerer</span>
                          </div>
                        </div>
                      </div>
                      <div class="fnc">
                        <span class="radio-box">
                          <input type="radio" class="input-radio" id="MYCHAR2" name="mycharacters" value="1" checked="checked" />
                          <label for="MYCHAR2" class="input-label"></label>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="list-content">
                        <div class="char-info">
                          <div class="thumb">
                            <img src="@/assets/img/desktop/popup/profile-taoist.webp" width="56" height="56" alt="taoist" />
                          </div>
                          <div class="info">
                            <strong class="nick">jjangdraco</strong>
                            <span class="lv">Lv.88</span><span class="category">Taoist</span>
                          </div>
                        </div>
                      </div>
                      <div class="fnc">
                        <span class="radio-box">
                          <input type="radio" class="input-radio" id="MYCHAR3" name="mycharacters" value="1" />
                          <label for="MYCHAR3" class="input-label"></label>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="list-content">
                        <div class="char-info">
                          <div class="thumb">
                            <img src="@/assets/img/desktop/popup/profile-lancer.webp" width="56" height="56" alt="lancer" />
                          </div>
                          <div class="info">
                            <strong class="nick">abcdefghijkl</strong>
                            <span class="lv">Lv.88</span><span class="category">Lancer</span>
                          </div>
                        </div>
                      </div>
                      <div class="fnc">
                        <span class="radio-box">
                          <input type="radio" class="input-radio" id="MYCHAR4" name="mycharacters" value="1" />
                          <label for="MYCHAR4" class="input-label"></label>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="list-content">
                        <div class="char-info">
                          <div class="thumb">
                            <img src="@/assets/img/desktop/popup/profile-arbalist.webp" width="56" height="56" alt="arbalist" />
                          </div>
                          <div class="info">
                            <strong class="nick">Warriworry</strong>
                            <span class="lv">Lv.88</span><span class="category">Arbalist</span>
                          </div>
                        </div>
                      </div>
                      <div class="fnc">
                        <span class="radio-box">
                          <input type="radio" class="input-radio" id="MYCHAR5" name="mycharacters" value="1" checked="checked" />
                          <label for="MYCHAR5" class="input-label"></label>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="list-content">
                        <div class="char-info">
                          <div class="thumb">
                            <img src="@/assets/img/desktop/popup/profile-lancer.webp" width="56" height="56" alt="lancer" />
                          </div>
                          <div class="info">
                            <strong class="nick">abcdefghijkl</strong>
                            <span class="lv">Lv.88</span><span class="category">Lancer</span>
                          </div>
                        </div>
                      </div>
                      <div class="fnc">
                        <span class="radio-box">
                          <input type="radio" class="input-radio" id="MYCHAR4" name="mycharacters" value="1" />
                          <label for="MYCHAR4" class="input-label"></label>
                        </span>
                      </div>
                    </li>
                    <li>
                      <div class="list-content">
                        <div class="char-info">
                          <div class="thumb">
                            <img src="@/assets/img/desktop/popup/profile-arbalist.webp" width="56" height="56" alt="arbalist" />
                          </div>
                          <div class="info">
                            <strong class="nick">Warriworry</strong>
                            <span class="lv">Lv.88</span><span class="category">Arbalist</span>
                          </div>
                        </div>
                      </div>
                      <div class="fnc">
                        <span class="radio-box">
                          <input type="radio" class="input-radio" id="MYCHAR5" name="mycharacters" value="1" checked="checked" />
                          <label for="MYCHAR5" class="input-label"></label>
                        </span>
                      </div>
                    </li>
                  </ul>
                  <!-- .list-notice -->
                </div>
              </div>
              <div class="wrap-button">
                <button type="button" class="btn btn-primary2">아이템 받기</button>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- ### Other Participant ###  -->
        <v-dialog content-class="dialog-stake theme-dark" v-model="dialogRoundOther" max-width="640" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Popup - Other Participant]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogRoundOther = false" fab plain x-small>
              <v-icon color="#fff" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <!-- <StakeHead> -->
            <div class="card-content card-result dialog-nofull">
              <div class="wrap-char">
                <div class="char-detail">
                  <div class="wrap-detail">
                    <div class="wrap-reward">
                      <div class="refundable">
                        <strong>Refundable DRACO</strong>
                        <span class="ico-darco ico-sm add-inside">55,291.088</span>
                      </div>
                      <div class="plus">+</div>
                      <div class="reward">
                        <strong>Reward</strong>
                        <span class="ico-darco ico-sm add-inside">0.021920558708</span>
                        <p class="desc">Total reward <em>100 DRACO</em> My reward share <em>3.5560%</em></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="wrap-button">
                <button type="button" class="btn btn-primary">REFUND + GET REWARDS</button>
              </div>
            </div>
          </div>
        </v-dialog>

        <hr style="margin: 10px 0" />

        <h2 class="ui">ROUND Infomation</h2>
        <div class="popup-rounds-sample">
          <RoundTitle></RoundTitle>
          <RoundNumber value="34"></RoundNumber>
        </div>

        <br />
        <h2 class="ui">input Type</h2>
        <div class="dialog-stake" style="max-width: 560px; margin: 0; padding: 0">
          <div class="fieldset editable">
            <div>
              <span class="ico-darco ico-xs"><em class="hidden">DRACO</em></span>
              <!-- <span contenteditable="true" placeholder="Stake Amount"></span> -->
              <input type="text" placeholder="Stake Amount" />
            </div>
            <span class="add-draco">
              <em class="add">+</em>
              <span class="ico-darco ico-xs add-inside">1</span>
              <em class="fee">(Entry fee)</em>
            </span>
          </div>
          <br />
          <div class="fieldset editable focus">
            <div>
              <span class="ico-darco ico-xs"><em class="hidden">DRACO</em></span>
              <!-- <span contenteditable="true" placeholder="Stake Amount"></span> -->
              <input type="text" placeholder="Stake Amount" value="10" />
            </div>
            <span class="add-draco">
              <em class="add">+</em>
              <span class="ico-darco ico-xs add-inside">1</span>
              <em class="fee">(Entry fee)</em>
            </span>
          </div>

          <br />
          <div class="fieldset editable">
            <div>
              <span class="ico-darco ico-xs"><em class="hidden">DRACO</em></span>
              <!-- <span contenteditable="true" placeholder="Stake Amount"></span> -->
              <input type="text" placeholder="Stake Amount" value="10" />
            </div>
            <span class="add-draco">
              <em class="add">+</em>
              <span class="ico-darco ico-xs add-inside">1</span>
              <em class="fee">(Entry fee)</em>
            </span>
          </div>

          <br />
          <div class="fieldset editable alert">
            <div>
              <span class="ico-darco ico-xs"><em class="hidden">DRACO</em></span>
              <!-- <span contenteditable="true" placeholder="Stake Amount"></span> -->
              <input type="text" placeholder="Stake Amount" value="10" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </main>
</template>

<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
// eslint-disable-next-line import/extensions
import Footer from '@/partials/common/Footer';
import RoundNumber from '@/components-ui/mobile/RoundNumber';
import RoundTitle from '@/components-ui/mobile/RoundTitle';
import Card from '@/components-ui/common/Card';

const clipboardCopy = require('clipboard-copy');

export default defineComponent({
  name: 'DspPopup',
  components: {
    Footer,
    RoundNumber,
    RoundTitle,
    Card,
  },
  setup() {
    const state = reactive({
      isCopiedWalletAddress: false,
    });

    const copyToClipboard = () => {
      clipboardCopy('copy value~~~');
      state.isCopiedWalletAddress = true;
    };

    return {
      ...toRefs(state),
      copyToClipboard,
    };
  },
  data: () => ({
    // for tab
    tab: null,

    // for dialog
    dialogLogIn: null,
    dialogAccount: null,
    dialogAccountnull: null,
    dialogAccount40: null,
    dialogCommon: null,
    dialogCommonOnebtn: null,
    dialogCommonCssload: null,
    dialogCommonNobtn: null,
    dialogCommonVueGraph: null,
    dialogRoundStakeEalier: null,
    dialogRoundStakeMore: null,
    dialogRoundStakeError: null,
    dialogRoundPreStake: null,
    dialogRoundPreStakeMore: null,
    dialogRoundReward: null,
    dialogRoundCharChoice: null,
    dialogRoundCharChoicelist: null,
    dialogRoundOther: null,

    randomDraco: parseFloat((Math.random() * (85100 - 100) + 100).toFixed(5)).toLocaleString(),
    randomStake: parseFloat((Math.random() * (100 - 1) + 1).toFixed(0)).toLocaleString(),
    randomOdds: parseFloat(Math.random().toFixed(2)),

    // selectbox
    items: ['ASIA123', 'JAPAN', 'KOREA', 'BLIND-Server'],
    defaultSelected: {
      items: 'ASIA123',
    },
  }),
  methods: {
    onInput(ev) {
      console.log(ev);
    },
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app.scss';
@import '~@/assets/sass/mobile/ui-guide.scss';
</style>
