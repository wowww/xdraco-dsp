<template>
  <main class="contents mywarehouse">
    <section class="section">
      <div class="section__inner">
        <div class="wrap-mywarehouse for-list">
          <v-tabs class="tab-style1 no-gutter" @change="selectTabMywarehouse">
            <v-tab @click="typeWarehouse = 0">
              <span>XDRACO.com Warehouse</span>
            </v-tab>
            <v-tab @click="typeWarehouse = 1">
              <span>MIR4 Warehouse</span>
            </v-tab>
            <v-tab @click="typeWarehouse = 2">
              <span>Character NFTs</span>
            </v-tab>
          </v-tabs>

          <!-- XDRACO.com Warehouse -->
          <div v-if="typeWarehouse === 0">
            <!-- Filter -->
            <div id="wrapFilterList" class="wrap-swiper sticky">
              <swiper ref="swiperFilter" class="wrap-filter" :options="swiperFilterOptions">
                <swiper-slide>
                  <list-unique-filter />
                </swiper-slide>
                <swiper-slide>
                  <list-filter
                    :placeholder="t('w.common.item.class')"
                    filter-key="class"
                    :items="[
                      { text: `${t('w.common.item.class')} (${t('w.common.all')})`, value: 0 },
                      { text: t('w.rounds.item.class.1'), value: 1 },
                      { text: t('w.rounds.item.class.2'), value: 2 },
                      { text: t('w.rounds.item.class.3'), value: 3 },
                      { text: t('w.rounds.item.class.5'), value: 5 },
                      { text: t('w.rounds.item.class.4'), value: 4 },
                    ]"
                  />
                </swiper-slide>
                <swiper-slide>
                  <list-filter
                    :placeholder="t('w.common.item.type')"
                    filter-key="itemType"
                    :items="[
                      { text: `${t('w.common.item.type')} (${t('w.common.all')})`, value: '0' },
                      { text: t('w.exd.item-type.2_1'), value: '2_1' },
                      { text: t('w.exd.item-type.2_2'), value: '2_2' },
                      { text: t('w.exd.item-type.2_3'), value: '2_3' },
                      { text: t('w.exd.item-type.2_5'), value: '2_5' },
                      { text: t('w.exd.item-type.2_4'), value: '2_4' },
                      { text: t('w.exd.item-type.3_1.base'), value: '3_1' },
                      { text: t('w.exd.item-type.3_2.base'), value: '3_2' },
                      { text: t('w.exd.item-type.3_3.base'), value: '3_3' },
                      { text: t('w.exd.item-type.3_4.base'), value: '3_4' },
                      { text: t('w.exd.item-type.4_1'), value: '4_1' },
                      { text: t('w.exd.item-type.4_2'), value: '4_2' },
                      { text: t('w.exd.item-type.4_3'), value: '4_3' },
                      // { text: t('w.exd.item-type.4_4'), value: '4_4' },
                      { text: t('w.exd.item-type.6_33'), value: '6_33' },
                      { text: t('w.exd.item-type.8_1'), value: '8_1' },
                      { text: t('w.exd.item-type.8_2'), value: '8_2' },
                      { text: t('w.exd.item-type.8_3'), value: '8_3' },
                      { text: t('w.exd.item-type.8_4'), value: '8_4' },
                      { text: t('w.exd.item-type.8_5'), value: '8_5' },
                      { text: t('w.exd.item-type.8_6'), value: '8_6' },
                      { text: t('w.exd.item-type.8_7'), value: '8_7' },
                      // { text: t('w.exd.item-type.8_8'), value: '8_8' },
                      { text: t('w.exd.item-type.17_2'), value: '17_2' },
                      // { text: t('w.exd.item-type.20_1'), value: '20_1' },
                      { text: t('w.exd.item-type.21_1'), value: '21_1' },
                      { text: t('w.exd.item-type.21_2'), value: '21_2' },
                    ]"
                  />
                </swiper-slide>
                <swiper-slide>
                  <list-filter
                    :placeholder="t('w.common.item.grade')"
                    filter-key="grade"
                    :items="[
                      { text: `${t('w.common.item.grade')} (${t('w.common.all')})`, value: 0 },
                      { text: t('w.rounds.item.grade.5'), value: 5 },
                      { text: t('w.rounds.item.grade.4'), value: 4 },
                      { text: t('w.rounds.item.grade.3'), value: 3 },
                      { text: t('w.rounds.item.grade.2'), value: 2 },
                    ]"
                  />
                </swiper-slide>
                <swiper-slide>
                  <list-filter
                    :placeholder="t('w.common.item.tier')"
                    filter-key="tier"
                    :items="[
                      { text: `${t('w.common.item.tier')} (${t('w.common.all')})`, value: 0 },
                      { text: 'IV', value: 4 },
                      { text: 'III', value: 3 },
                      { text: 'II', value: 2 },
                      { text: 'I', value: 1 },
                    ]"
                  />
                </swiper-slide>
                <swiper-slide>
                  <list-filter
                    :placeholder="t('w.common.item.enhance')"
                    filter-key="enhance"
                    :items="[
                      { text: `${t('w.common.item.enhance')} (${t('w.common.all')})`, value: -1 },
                      { text: '+0', value: 0 },
                      { text: '+1', value: 1 },
                      { text: '+2', value: 2 },
                      { text: '+3', value: 3 },
                      { text: '+4', value: 4 },
                      { text: '+5', value: 5 },
                      { text: '+6', value: 6 },
                      { text: '+7', value: 7 },
                      { text: '+8', value: 8 },
                      { text: '+9', value: 9 },
                      { text: '+10', value: 10 },
                      { text: '+11', value: 11 },
                      { text: '+12', value: 12 },
                    ]"
                  />
                </swiper-slide>
                <!--              <swiper-slide class="wrap-price-range">-->
                <!--                <button type="button" class="btn-price-range" @click="toogleLayerPriceRange">Price Range</button>-->
                <!--              </swiper-slide>-->
              </swiper>

              <div class="layer-price-range" v-if="showLayerPriceRange">
                <div class="wrap-range">
                  <v-text-field
                    type="number"
                    class="input-range"
                    label="From"
                    id="inputFrom"
                    prepend-inner-icon="mdi-map-marker"
                    dense
                    solo
                    flat
                    hide-spin-buttons
                    v-model="minDraco"
                  />
                  <v-text-field
                    type="number"
                    class="input-range"
                    label="To"
                    prepend-inner-icon="mdi-map-marker"
                    dense
                    solo
                    flat
                    hide-spin-buttons
                    v-model="maxDraco"
                  />
                </div>
                <div class="wrap-button">
                  <button type="button" class="btn btn-primary2 btn-sm" :disabled="invalidatePrice" @click="applyPrice">Apply</button>
                </div>
              </div>
            </div>

            <div id="wrapDateOrder" class="wrap-date-order">
              <list-order />
            </div>

            <div class="wrap-filter-chip">
              <v-chip v-if="itemFilter.uniqueFlag !== 0" outlined label @click="resetFilter('uniqueFlag', 0)">
                {{ t('w.exd.collectible') }}
                <img src="@/assets/img/desktop/dsp/ico-close.webp" />
              </v-chip>

              <v-chip v-if="itemFilter.class !== 0" outlined label @click="resetFilter('class', 0)">
                {{ t(`w.rounds.item.class.${itemFilter.class}`) }}
                <img src="@/assets/img/desktop/dsp/ico-close.webp" />
              </v-chip>

              <v-chip v-if="itemFilter.itemType !== '0'" outlined label @click="resetFilter('itemType', '0')">
                {{ t(`w.exd.item-type.${itemFilter.itemType}${itemFilter.itemType.startsWith('3_') ? '.base' : ''}`) }}
                <img src="@/assets/img/desktop/dsp/ico-close.webp" />
              </v-chip>

              <v-chip v-if="itemFilter.grade !== 0" outlined label @click="resetFilter('grade', 0)">
                {{ t(`w.rounds.item.grade.${itemFilter.grade}`) }}
                <img src="@/assets/img/desktop/dsp/ico-close.webp" />
              </v-chip>

              <v-chip v-if="itemFilter.tier !== 0" outlined label @click="resetFilter('tier', 0)">
                Tier {{ itemFilter.tier | roman }}
                <img src="@/assets/img/desktop/dsp/ico-close.webp" />
              </v-chip>

              <v-chip v-if="itemFilter.enhance !== -1" outlined label @click="resetFilter('enhance', -1)">
                + {{ itemFilter.enhance }}
                <img src="@/assets/img/desktop/dsp/ico-close.webp" />
              </v-chip>

              <v-chip v-if="itemFilter.sort !== 'latest'" outlined label @click="resetFilter('sort', 'latest')">
                {{ t(`w.exd.filter.order.${itemFilter.sort}`) }}
                <img src="@/assets/img/desktop/dsp/ico-close.webp" />
              </v-chip>

              <div class="btn-filter-reset" v-if="hasFilter" @click="resetAllFilter">
                <span>Reset</span>
                <img src="@/assets/img/common/btn-reset-filter.webp" width="16" />
              </div>
            </div>

            <!-- Dialog UI sample영역입니다 -->
            <div style="margin-bottom: 15px">
              <!-- SEND -->
              <v-dialog
                content-class="dialog-stake theme-dark"
                v-model="dialogRoundCharChoicelist"
                max-width="640"
                attach=".wrap-mywarehouse"
                persistent
                fullscreen
              >
                <template v-slot:activator="{ on, attrs }">
                  <button type="button" v-bind="attrs" v-on="on" style="color: #fff; border-bottom: 1px solid #fff; font-size: 12px">SEND</button>
                </template>

                <div class="content">
                  <v-btn class="btn-close" @click="dialogRoundCharChoicelist = false" fab plain x-small>
                    <v-icon color="#fff" size="26">mdi-close</v-icon>
                  </v-btn>
                  <div class="info-round">
                    <ItemInfo itemCategory="grade-5" itemName="Shineworld Dragon Gloves" itemCount="+10"></ItemInfo>
                  </div>
                  <div class="card-content">
                    <div class="wrap-list">
                      <div class="notice">아이템을 받을 캐릭터를 선택하세요. (LV.40 이상)</div>
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
                      <button type="button" class="btn btn-primary2">Send Item</button>
                    </div>
                  </div>
                </div>
              </v-dialog>

              <!-- 처리중 -->
              <v-dialog content-class="dialog-common" v-model="dialogCommonCssload" max-width="480" persistent>
                <template v-slot:activator="{ on, attrs }">
                  <button
                    type="button"
                    v-bind="attrs"
                    v-on="on"
                    style="color: #fff; border-bottom: 1px solid #fff; margin-left: 10px; font-size: 12px"
                  >
                    처리중
                  </button>
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
                        <h4 class="title">처리중</h4>
                        <div class="desc">XDRACO.com 창고의 아이템을 선택한 MIR4 캐릭터에게 보냅니다.</div>
                        <!-- .wrap-button -->
                      </div>
                    </div>
                  </div>
                </div>
              </v-dialog>

              <!-- 아이템 보내기 완료 -->
              <v-dialog content-class="dialog-common" v-model="dialogComplete" max-width="480" persistent>
                <template v-slot:activator="{ on, attrs }">
                  <button
                    type="button"
                    v-bind="attrs"
                    v-on="on"
                    style="color: #fff; border-bottom: 1px solid #fff; margin-left: 10px; font-size: 12px"
                  >
                    아이템 보내기 완료
                  </button>
                </template>

                <div class="content">
                  <v-btn class="btn-close" @click="dialogComplete = false" fab plain x-small>
                    <v-icon color="#000" size="26">mdi-close</v-icon>
                  </v-btn>
                  <!-- dialogTitle이 있는 경우 대비 -->
                  <div class="dialog-header">&nbsp;</div>
                  <div class="wrap-notice">
                    <div class="msgbox vcenter">
                      <div>
                        <h4 class="title">아이템 보내기 완료</h4>
                        <div class="desc">MIR4에 접속하고 선택한 캐릭터의 <br />XDRACO 창고를 확인하세요.</div>
                        <div class="wrap-button">
                          <button type="button" @click="dialogComplete = false" class="btn btn-primary btn-sm">닫기</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-dialog>

              <!-- 아이템 보내기 실패 -->
              <v-dialog content-class="dialog-common" v-model="dialogFail" max-width="480" persistent>
                <template v-slot:activator="{ on, attrs }">
                  <button
                    type="button"
                    v-bind="attrs"
                    v-on="on"
                    style="color: #fff; border-bottom: 1px solid #fff; margin-left: 10px; font-size: 12px"
                  >
                    아이템 보내기 실패
                  </button>
                </template>

                <div class="content">
                  <v-btn class="btn-close" @click="dialogFail = false" fab plain x-small>
                    <v-icon color="#000" size="26">mdi-close</v-icon>
                  </v-btn>
                  <!-- dialogTitle이 있는 경우 대비 -->
                  <div class="dialog-header">&nbsp;</div>
                  <div class="wrap-notice">
                    <div class="msgbox vcenter">
                      <div>
                        <h4 class="title">아이템 보내기 실패</h4>
                        <div class="desc">잠시 후 다시 시도해 주세요. <br />Error 60660</div>
                        <div class="wrap-button">
                          <button type="button" @click="dialogFail = false" class="btn btn-primary btn-sm">닫기</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-dialog>
            </div>
            <!--// Dialog UI sample영역입니다 -->

            <ul class="list-item">
              <li>
                <Card itemType="legendary" flipped smaller="xs"></Card>
                <div class="btn-wrap">
                  <button type="button" class="btn btn-primary-exd btn-sm">SEND</button>
                  <button type="button" class="btn btn-primary-exd btn-sm">SELL</button>
                </div>
              </li>
              <li>
                <Card itemType="epic" flipped smaller="xs"></Card>
                <div class="btn-wrap">
                  <button type="button" class="btn btn-primary-exd btn-sm">SEND</button>
                  <button type="button" class="btn btn-primary-exd btn-sm">SELL</button>
                </div>
              </li>
              <li>
                <Card itemType="rare" flipped smaller="xs"></Card>
                <div class="btn-wrap">
                  <button type="button" class="btn btn-primary-exd btn-sm">SEND</button>
                  <button type="button" class="btn btn-primary-exd btn-sm">SELL</button>
                </div>
              </li>
              <li>
                <Card itemType="grade2" flipped smaller="xs"></Card>
                <div class="btn-wrap">
                  <button type="button" class="btn btn-primary-exd btn-sm">SEND</button>
                  <button type="button" class="btn btn-primary-exd btn-sm">SELL</button>
                </div>
              </li>
              <li>
                <Card itemType="rare" flipped smaller="xs"></Card>
                <div class="btn-wrap">
                  <button type="button" class="btn btn-primary-exd btn-sm">SEND</button>
                  <button type="button" class="btn btn-primary-exd btn-sm">SELL</button>
                </div>
              </li>
              <li>
                <Card itemType="grade2" flipped smaller="xs"></Card>
                <div class="btn-wrap">
                  <button type="button" class="btn btn-primary-exd btn-sm">SEND</button>
                  <button type="button" class="btn btn-primary-exd btn-sm">SELL</button>
                </div>
              </li>
            </ul>
            <div class="wrap-button"><button type="button" class="btn-viewmore">VIEW MORE</button></div>
          </div>

          <!-- MIR4 -->
          <div v-if="typeWarehouse === 1">
            <!-- Dialog UI sample영역입니다 -->
            <div style="margin-bottom: 15px">
              <!-- MOVE -->
              <v-dialog
                content-class="dialog-stake theme-dark"
                v-model="dialogRoundCharChoicelist"
                max-width="640"
                attach=".wrap-mywarehouse"
                persistent
                fullscreen
              >
                <template v-slot:activator="{ on, attrs }">
                  <button type="button" v-bind="attrs" v-on="on" style="color: #fff; border-bottom: 1px solid #fff; font-size: 12px">MOVE</button>
                </template>

                <div class="content">
                  <v-btn class="btn-close" @click="dialogRoundCharChoicelist = false" fab plain x-small>
                    <v-icon color="#fff" size="26">mdi-close</v-icon>
                  </v-btn>
                  <div class="info-round">
                    <ItemInfo itemCategory="grade-5" itemName="Shineworld Dragon Gloves" itemCount="+10"></ItemInfo>
                  </div>
                  <div class="card-content">
                    <div class="wrap-list">
                      <div class="notice">아이템을 받을 캐릭터를 선택하세요. (LV.40 이상)</div>
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
                          <!-- 현재 보유하고 있는 캐릭터의 경우 li 에 disabled 클래스 추가, radio 인풋에 disabled 속성 추가 -->
                          <li class="disabled">
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
                                <input type="radio" class="input-radio" id="MYCHAR1" name="mycharacters" value="1" disabled />
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
                      <button type="button" class="btn btn-primary2">Select</button>
                    </div>
                  </div>
                </div>
              </v-dialog>

              <!-- Select 버튼 누를 때 -->
              <v-dialog
                content-class="dialog-stake theme-dark winner collectible"
                v-model="dialogRoundCharChoice"
                max-width="640"
                persistent
                fullscreen
                attach=".wrap-mywarehouse"
              >
                <template v-slot:activator="{ on, attrs }">
                  <button
                    type="button"
                    v-bind="attrs"
                    v-on="on"
                    style="color: #fff; border-bottom: 1px solid #fff; font-size: 12px; margin-left: 10px"
                  >
                    Select 버튼 누를 때
                  </button>
                </template>

                <div class="content">
                  <v-btn class="btn-close" @click="dialogRoundCharChoice = false" fab plain x-small>
                    <v-icon color="#fff" size="26">mdi-close</v-icon>
                  </v-btn>
                  <!-- dialogTitle이 있는 경우 대비 -->
                  <div class="card-content card-result">
                    <div class="wrap-char">
                      <!-- .char-info -->
                      <div class="char-detail">
                        <div class="wrap-detail">
                          <h3 class="title">Move Collectible Item</h3>
                          <div class="detail-card">
                            <Card itemType="legendary" smaller="sm"></Card>
                          </div>
                          <div class="detail-desc">ASIA12 Warriwirry의 아이템을 NA1 Dracojjang의 XDRACO 창고로 이동합니다.</div>
                          <div class="detail-change">
                            <div class="change-box">
                              <img src="@/assets/img/desktop/popup/profile-warrior.webp" width="56" height="56" alt="warrior" />
                              <div>
                                <span class="server">ASIA12</span>
                                <span class="name">dracodracooo</span>
                                <p class="lv-job">
                                  <span class="level">Lv.88</span>
                                  <span class="job">Warrior</span>
                                </p>
                              </div>
                            </div>
                            <span class="change">change</span>
                            <div class="change-box">
                              <img src="@/assets/img/desktop/popup/profile-sorcerer.webp" width="56" height="56" alt="sorcerer" />
                              <div>
                                <span class="server">NA1</span>
                                <span class="name">Dracojjang</span>
                                <p class="lv-job">
                                  <span class="level">Lv.88</span>
                                  <span class="job">Sorcerer</span>
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="detail-desc-sm">아이템 이동 수수료는 동일 아이탬의 평균 거래가의 5% 입니다.</div>
                          <div class="wrap-button">
                            <button type="button" class="btn btn-primary2">
                              <span class="ico-darco ico-sm add-inside">150,135.25</span><span class="sub-txt">Item Move</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </v-dialog>
            </div>
            <!-- e: Dialog UI sample영역입니다 -->

            <div class="not-login">
              <p>
                MIR4 Warehouse를 이용하기 위해서는 MIR4 계정과의 연동이 필요합니다. <br />Create a MIR4 account for full access to XDRACO services
              </p>
              <div class="bottom-btns">
                <a href="#">PLAY NOW</a>
              </div>
            </div>
            <div class="list-bar">
              <div class="list-bar__title"><em>10</em><strong>아이템</strong></div>
            </div>
            <ul class="list-myitem">
              <li>
                <ItemInfo itemCategory="grade-5" itemName="World Deceiver Cane" itemCount="+10" snCode="Unique No. S15"></ItemInfo>
                <div class="btn-wrap">
                  <button type="button" class="btn btn-primary-exd">MOVE</button>
                  <button type="button" class="btn btn-primary-exd">SELL</button>
                </div>
              </li>
              <li>
                <ItemInfo itemCategory="grade-1" itemName="Venomblood Longstaff" itemCount="+10"></ItemInfo>
                <div class="btn-wrap">
                  <button type="button" class="btn btn-primary-exd">MOVE</button>
                  <button type="button" class="btn btn-primary-exd">SELL</button>
                </div>
              </li>
              <li>
                <ItemInfo itemCategory="grade-2" itemName="Magic stone of Destruction"></ItemInfo>
                <div class="btn-wrap">
                  <button type="button" class="btn btn-primary-exd">MOVE</button>
                  <button type="button" class="btn btn-primary-exd">SELL</button>
                </div>
              </li>
              <li>
                <ItemInfo itemCategory="grade-3" itemName="Mythic Ring" itemCount="+5"></ItemInfo>
                <div class="btn-wrap">
                  <button type="button" class="btn btn-primary-exd">MOVE</button>
                  <button type="button" class="btn btn-primary-exd">SELL</button>
                </div>
              </li>
              <li>
                <ItemInfo itemCategory="grade-4" itemName="Mythic Ring" itemCount="+5"></ItemInfo>
                <div class="btn-wrap">
                  <button type="button" class="btn btn-primary-exd">MOVE</button>
                  <button type="button" class="btn btn-primary-exd">SELL</button>
                </div>
              </li>
              <li>
                <ItemInfo itemCategory="grade-5" itemName="Mythic Ring" itemCount="+5"></ItemInfo>
                <div class="btn-wrap">
                  <button type="button" class="btn btn-primary-exd">MOVE</button>
                  <button type="button" class="btn btn-primary-exd">SELL</button>
                </div>
              </li>
            </ul>
            <div class="wrap-button"><button type="button" class="btn-viewmore">VIEW MORE</button></div>
          </div>

          <!-- Character NFTs -->
          <div v-if="typeWarehouse === 2">
            <h3>Character NFTs</h3>
            <p>typeWarehouse = 2</p>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </main>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
// import 'swiper/swiper-bundle.css'; // (>= Swiper 6.x)
import 'swiper/css/swiper.css'; // (<= Swiper 5.x)

import { computed, defineComponent, onBeforeMount, onMounted, reactive, ref, toRefs, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import Card from '@/components-ui/common/Card';
import useI18n from '@/utils/useI18n';
import Footer from '@/partials/common/Footer';
import AccountInfo from '@/components/account/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import SelectFilter from '@/components-ui/mobile/SelectFilter';
import SelectOrder from '@/components-ui/mobile/SelectOrder';
import SelectCheckFilter from '@/components-ui/mobile/SelectCheckFilter';
import ListUniqueFilter from '@/components/exd/desktop/ListUniqueFilter';

import TopTradedTitle from '@/components/exd/common/TopTradedTitle';
import TopTradedWidget from '@/components/exd/mobile/TopTradedWidget';
import RecommendedTitle from '@/components/exd/common/RecommendedTitle';
import RecommendedWidget from '@/components/exd/mobile/RecommendedWidget';
import ExchangeItem from '@/components/exd/common/ExchangeItem';
import BannerExdTop from '@/components/banner/ExdTop';
import ListFilter from '@/components/exd/mobile/ListFilter';
import ListOrder from '@/components/exd/desktop/ListOrder';
import ItemInfo from '@/components-ui/mobile/ItemInfo';

const { useState: useExdState, useActions: useExdActions, useMutations: useExdMutations } = createNamespacedHelpers('exd');

const genarateFilter = (isReset) => {
  return {
    class: '',
    category: '',
    rank: '',
    tier: '',
    enhance: '',
    collectibles: false,
    date: !isReset ? { title: 'Date Listed: Newest', abc: 0 } : undefined,
  };
};

export default defineComponent({
  props: {},
  components: {
    Card,
    Footer,
    SelectFilter,
    SelectOrder,
    Swiper,
    SwiperSlide,
    SelectCheckFilter,
    ListUniqueFilter,
    useI18n,
    TopTradedTitle,
    TopTradedWidget,
    RecommendedTitle,
    RecommendedWidget,
    ExchangeItem,
    BannerExdTop,
    ListFilter,
    ListOrder,
    ItemInfo,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    typeWarehouse: 0,

    // for TabTraded
    tabTraded: null,

    // for layer-price-range
    showLayerPriceRange: false,

    // for nav in .list-bar
    itemsRecommend: null,
    itemsExplorer: null,

    swiperOptions: {
      slidesPerView: 'auto',
      // centeredSlides: true,
      // spaceBetween: 30,
      // loop: true,
      // autoplay:{
      //   delay:1000
      // },
      // pagination: {
      //   el: '.swiper-pagination',
      // },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      // allowTouchMove: false,
    },
    swiperFilterOptions: {
      freeMode: true,
      slidesPerView: 'auto',
      spaceBetween: 8,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
    },
    filters: genarateFilter(),
    dialogRoundCharChoicelist: null,

    // selectbox
    items: ['ASIA123', 'JAPAN', 'KOREA', 'BLIND-Server'],
    defaultSelected: {
      items: 'ASIA123',
    },
    dialogCommonCssload: null,
    dialogComplete: null,
    dialogFail: null,
    dialogRoundCharChoice: null,
  }),
  computed: {
    swiperTopTraded() {
      return this.$refs.swiperTopTraded.$swiper;
    },
    swiperRecentlyTraded() {
      return this.$refs.swiperRecentlyTraded.$swiper;
    },
    swiperRecommended() {
      return this.$refs.swiperRecommended.$swiper;
    },
    swiperFilter() {
      return this.$refs.swiperFilter.$swiper;
    },
    isSelectFilter() {
      return Object.values(this.filters).some((f) => !!f);
    },
  },
  methods: {
    selectTabMywarehouse() {
      console.log(this);
    },
    toogleLayerPriceRange() {
      this.showLayerPriceRange = !this.showLayerPriceRange;

      setTimeout(() => {
        if (this.showLayerPriceRange) {
          const inputFrom = this.$el.querySelector('#inputFrom');
          inputFrom.focus();
        }
      }, 10);
    },
    emitSelectOrder() {
      if (!this.showLayerPriceRange) {
        return;
      }
      this.showLayerPriceRange = false;
    },
    changeTabTraded(value) {
      console.log(`value: ${value}`);
    },
    removeSelectFilter(item) {
      this.filters[item] = '';
    },
    removeCollectiblesFilter() {
      this.filters.collectibles = !this.filters.collectibles;
    },
    removeDateFilter() {
      this.filters.date = undefined;
    },
    resetFilters() {
      this.filters = genarateFilter(true);
    },
  },
  setup() {
    const state = reactive({
      swiperOptions: {
        slidesPerView: 'auto',
      },
      swiperFilterOptions: {
        freeMode: true,
        slidesPerView: 'auto',
        spaceBetween: 8,
        slidesOffsetBefore: 16,
        slidesOffsetAfter: 16,
        autoHeight: true,
      },
    });
    const { loading, items, itemsHasMore, itemsPage, itemFilter, topTradedItems, recommendedItems } = useExdState([
      'loading',
      'items',
      'itemsHasMore',
      'itemsPage',
      'itemFilter',
      'topTradedItems',
      'recommendedItems',
    ]);
    const showLayerPriceRange = ref(false);
    const { setItemFilter } = useExdMutations(['setItemFilter']);
    const { fetchItems, fetchTopTraded, fetchRecommended, fetchRecently, resetAllFilter } = useExdActions([
      'fetchItems',
      'fetchTopTraded',
      'fetchRecommended',
      'fetchRecently',
      'resetAllFilter',
    ]);
    const { locale, dracoAccessToken, accessToken } = useState(['locale', 'dracoAccessToken', 'accessToken']);

    const changeSort = ref(false);
    const minDraco = ref('');
    const maxDraco = ref('');

    const refresh = () => {
      fetchItems();
      fetchTopTraded();
      fetchRecommended();
      fetchRecently();
    };

    onBeforeMount(() => {
      //
    });

    onMounted(() => {
      refresh();
    });

    watch(
      () => itemFilter.value,
      (current, before) => {
        if (current.sort !== before.sort) {
          changeSort.value = true;
        }
        // if (current.uniqueFlag === 1 && before.uniqueFlag === 0) {
        //   setItemFilter({
        //     class: 0,
        //     itemType: '0',
        //     grade: 0,
        //     tier: 0,
        //     enhance: -1,
        //     minPrice: 0,
        //     maxPrice: 0,
        //     sort: 'latest',
        //     uniqueFlag: 1,
        //   });
        // }
        fetchItems();
      },
    );

    watch(
      () => locale.value,
      () => {
        refresh();
      },
    );

    watch(
      () => dracoAccessToken.value,
      () => {
        refresh();
      },
    );

    const invalidatePrice = computed(() => {
      console.log(minDraco.value, maxDraco.value);

      if (!minDraco.value || !maxDraco.value) {
        return true;
      }

      if (Number(maxDraco.value) < Number(minDraco.value)) {
        return true;
      }

      return false;
    });

    const applyPrice = () => {
      if (!invalidatePrice.value) {
        setItemFilter({ ...itemFilter.value, minPrice: minDraco.value, maxPrice: maxDraco.value });
        showLayerPriceRange.value = false;
      }
    };

    watch(
      () => showLayerPriceRange.value,
      (open) => {
        if (open) {
          minDraco.value = itemFilter.value.minPrice;
          maxDraco.value = itemFilter.value.maxPrice;
        }
      },
    );

    const hasFilter = computed(() => {
      if (itemFilter.value.uniqueFlag !== 0) {
        return true;
      }

      if (itemFilter.value.class !== 0) {
        return true;
      }

      if (itemFilter.value.itemType !== '0') {
        return true;
      }

      if (itemFilter.value.grade !== 0) {
        return true;
      }

      if (itemFilter.value.tier !== 0) {
        return true;
      }

      if (itemFilter.value.enhance !== -1) {
        return true;
      }

      if (itemFilter.value.sort !== 'latest') {
        return true;
      }

      return false;
    });

    const resetFilter = (type, initValue) => {
      const value = { ...itemFilter.value };
      value[type] = initValue;
      setItemFilter(value);
    };

    return {
      ...toRefs(state),
      itemFilter,
      resetFilter,
      resetAllFilter,
      hasFilter,
      changeSort,
      items,
      itemsHasMore,
      itemsPage,
      fetchItems,
      locale,
      ...useI18n(),
      topTradedItems,
      recommendedItems,
      minDraco,
      maxDraco,
      invalidatePrice,
      applyPrice,
      showLayerPriceRange,
      loading,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app.scss';
@import '~@/assets/sass/mobile/pages/_mywarehouse.scss';
@import '~@/assets/sass/components/_tab-style1.scss';
</style>
