<template>
  <main class="contents mywarehouse">
    <section class="section">
      <div class="section__inner">
        <div class="subnav-block"></div>
        <div class="wrap-grid">
          <div class="grid-timeline">
            <div class="wrap-mywarehouse">
              <v-tabs class="tab-style1" @change="selectTabMywarehouse">
                <v-tab @click="typeWarehouse = 0">
                  <span>XDRACO.com Warehouse</span>
                  <v-tooltip bottom attach=".wrap-mywarehouse .v-tabs">
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon color="primary" dark v-bind="attrs" v-on="on"> icon </v-icon>
                    </template>
                    <div class="tooltip-wrap">
                      <div class="tit">XDRACO.com Warehouse</div>
                      <p class="desc">
                        XDRACO.com을 통해 구매 또는 획득한 ITEM은 ‘XDRACO.com Warehouse’에 보관됩니다. 보관중인 아이템은 바로 EXD를 통해 판매하거나,
                        WEMIX WALLET과 연결된 MIR4 계정의 캐릭터에게 보내서 사용가능합니다.
                      </p>
                    </div>
                  </v-tooltip>
                </v-tab>
                <v-tab @click="typeWarehouse = 1">
                  <span>MIR4 Warehouse</span>
                </v-tab>
                <v-tab @click="typeWarehouse = 2">
                  <span>Character NFTs</span>
                </v-tab>
              </v-tabs>

              <!-- <div class="test1">Test1 Test1 Test1</div>
              <div class="test2">Test2 Test2 Test2</div> -->

              <div v-if="typeWarehouse === 0">
                <div class="list-bar">
                  <div class="list-bar__title"><em>10</em><strong>아이템</strong></div>

                  <!-- s: 팝업 예시 링크 모음 삭제 필요 -->
                  <div>
                    <!-- SEND버튼 -->
                    <v-dialog content-class="dialog-stake theme-dark" v-model="dialogRoundCharChoicelist" max-width="640" persistent>
                      <template v-slot:activator="{ on, attrs }">
                        <button type="button" v-bind="attrs" v-on="on" style="margin-left: 10px; color: #fff; border-bottom: 1px solid #fff">
                          SEND
                        </button>
                      </template>

                      <div class="content">
                        <v-btn class="btn-close" @click="dialogRoundCharChoicelist = false" fab plain x-small>
                          <v-icon color="#fff" size="26">mdi-close</v-icon>
                        </v-btn>
                        <!-- dialogTitle이 있는 경우 대비 -->
                        <div class="dialog-header">
                          <div class="info-round">
                            <ItemInfo itemCategory="grade-5" itemName="Shineworld Dragon Gloves" itemCount="+10"></ItemInfo>
                          </div>
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
                                  :menu-props="{ bottom: true, offsetY: true, contentClass: 'select-menu-dark select-stake' }"
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
                                      <label for="MYCHAR1" class="input-label"></label>
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
                                      <label for="MYCHAR2" class="input-label"></label>
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
                                      <label for="MYCHAR3" class="input-label"></label>
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
                                      <label for="MYCHAR4" class="input-label"></label>
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
                        <button type="button" v-bind="attrs" v-on="on" style="margin-left: 10px; color: #fff; border-bottom: 1px solid #fff">
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
                        <button type="button" v-bind="attrs" v-on="on" style="margin-left: 10px; color: #fff; border-bottom: 1px solid #fff">
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
                        <button type="button" v-bind="attrs" v-on="on" style="margin-left: 10px; color: #fff; border-bottom: 1px solid #fff">
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
                  <!-- e: 팝업 예시 링크 모음 삭제 필요 -->
                </div>
                <!-- Filter -->
                <div id="wrapFilterList" class="wrap-filter">
                  <div class="wrap-filter__inner">
                    <SelectCheckFilter :label="'Collectibles'" :selectedValue.sync="filters.collectibles" />
                    <SelectFilter
                      placeholder="Class"
                      :items="['All', 'Warrior', 'Sorcerer', 'Taoist', 'Lancer', 'Arbalist']"
                      :selectedValue.sync="filters.class"
                    ></SelectFilter>
                    <SelectFilter
                      placeholder="Category"
                      :items="['All', 'Category1', 'Category2', 'Category3']"
                      :selectedValue.sync="filters.category"
                    ></SelectFilter>
                    <SelectFilter placeholder="Rank" :items="['All', 'Rank1', 'Rank2', 'Rank3']" :selectedValue.sync="filters.rank"></SelectFilter>
                    <SelectFilter
                      placeholder="Tier"
                      :items="['All', 'Tier1', 'TierTierTier2', 'Tier3']"
                      :selectedValue.sync="filters.tier"
                    ></SelectFilter>
                    <SelectFilter
                      placeholder="Enhance"
                      :items="['All', 'Enhance1', 'Enhance2', 'Enhance3']"
                      :selectedValue.sync="filters.enhance"
                    ></SelectFilter>
                    <!-- <div class="wrap-price-range">
                      <button type="button" class="btn-price-range" @click="toogleLayerPriceRange">Price Range</button>
                      <div class="layer-price-range" v-if="showLayerPriceRange">
                        <div class="wrap-range">
                          <v-text-field
                            type="tel"
                            class="input-range"
                            label="From"
                            id="inputFrom"
                            prepend-inner-icon="mdi-map-marker"
                            dense
                            solo
                            flat
                          ></v-text-field>
                          <v-text-field type="tel" class="input-range" label="To" prepend-inner-icon="mdi-map-marker" dense solo flat></v-text-field>
                        </div>
                        <div class="wrap-button">
                          <button type="button" class="btn btn-primary2 btn-sm">Apply</button>
                        </div>
                      </div>
                    </div> -->
                  </div>

                  <div class="wrap-filter-chip">
                    <div class="wrap-chips">
                      <v-chip v-if="!!filters.collectibles" outlined label>
                        Collectibles
                        <img @click="removeCollectiblesFilter" src="@/assets/img/desktop/dsp/ico-close.webp" />
                      </v-chip>
                      <v-chip v-if="!!filters.class" outlined label>
                        {{ filters.class }}
                        <img @click="removeSelectFilter('class')" src="@/assets/img/desktop/dsp/ico-close.webp" />
                      </v-chip>
                      <v-chip v-if="!!filters.category" outlined label>
                        {{ filters.category }}
                        <img @click="removeSelectFilter('category')" src="@/assets/img/desktop/dsp/ico-close.webp" />
                      </v-chip>
                      <v-chip v-if="!!filters.rank" outlined label>
                        {{ filters.rank }}
                        <img @click="removeSelectFilter('rank')" src="@/assets/img/desktop/dsp/ico-close.webp" />
                      </v-chip>
                      <v-chip v-if="!!filters.tier" outlined label>
                        {{ filters.tier }}
                        <img @click="removeSelectFilter('tier')" src="@/assets/img/desktop/dsp/ico-close.webp" />
                      </v-chip>
                      <v-chip v-if="!!filters.enhance" outlined label>
                        {{ filters.enhance }}
                        <img @click="removeSelectFilter('enhance')" src="@/assets/img/desktop/dsp/ico-close.webp" />
                      </v-chip>
                      <v-chip v-if="!!filters.date" outlined label>
                        {{ filters.date.title }}
                        <img @click="removeDateFilter" src="@/assets/img/desktop/dsp/ico-close.webp" />
                      </v-chip>

                      <div class="btn-filter-reset" v-if="isSelectFilter" @click="resetFilters">
                        <span>Reset</span>
                        <img src="@/assets/img/common/btn-reset-filter.webp" width="16" />
                      </div>
                    </div>

                    <SelectOrder
                      :items="[
                        { title: 'Date Listed: Newest', abc: 0 },
                        { title: 'Date Listed: Oldest', abc: 1 },
                        { title: 'Date Listed: Highest', abc: 2 },
                        { title: 'Date Listed: Lowest', abc: 3 },
                      ]"
                      :selectedValue.sync="filters.date"
                    ></SelectOrder>
                  </div>
                </div>

                <ul class="list-itemwrap-card">
                  <li data-new="true">
                    <Card itemType="legendary" smaller="sm"></Card>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">SEND</button>
                      <button type="button" class="btn btn-primary-exd">SELL</button>
                    </div>
                  </li>
                  <li>
                    <Card itemType="epic" smaller="sm"></Card>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">SEND</button>
                      <button type="button" class="btn btn-primary-exd">SELL</button>
                    </div>
                  </li>
                  <li data-new="true">
                    <Card itemType="rare" smaller="sm"></Card>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">SEND</button>
                      <button type="button" class="btn btn-primary-exd">SELL</button>
                    </div>
                  </li>
                  <li>
                    <Card itemType="grade2" smaller="sm"></Card>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">SEND</button>
                      <button type="button" class="btn btn-primary-exd">SELL</button>
                    </div>
                  </li>
                  <li>
                    <Card itemType="legendary" smaller="sm"></Card>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">SEND</button>
                      <button type="button" class="btn btn-primary-exd">SELL</button>
                    </div>
                  </li>
                  <li>
                    <Card itemType="epic" smaller="sm"></Card>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">SEND</button>
                      <button type="button" class="btn btn-primary-exd">SELL</button>
                    </div>
                  </li>
                  <li>
                    <Card itemType="rare" smaller="sm"></Card>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">SEND</button>
                      <button type="button" class="btn btn-primary-exd">SELL</button>
                    </div>
                  </li>
                  <li>
                    <Card itemType="grade2" smaller="sm"></Card>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">SEND</button>
                      <button type="button" class="btn btn-primary-exd">SELL</button>
                    </div>
                  </li>
                </ul>

                <div class="wrap-button">
                  <!-- <button type="button" class="btn-viewmore">VIEW MORE</button> -->
                  <router-link class="btn-viewmore" to="/view-more">VIEW MORE</router-link>
                </div>
              </div>
              <div v-if="typeWarehouse === 1">
                <div class="not-login">
                  <p>
                    MIR4 Warehouse를 이용하기 위해서는 MIR4 계정과의 연동이 필요합니다. <br />Create a MIR4 account for full access to XDRACO services
                  </p>
                  <div class="bottom-btns">
                    <a href="#">PLAY NOW</a>
                  </div>
                </div>
                <div class="list-bar">
                  <div class="list-bar__title"><em>83</em><strong>아이템</strong></div>

                  <!-- s: 팝업 예시 링크 모음 삭제 필요 -->
                  <div>
                    <!-- Move버튼 -->
                    <v-dialog content-class="dialog-stake theme-dark" v-model="dialogRoundCharChoicelist" max-width="640" persistent>
                      <template v-slot:activator="{ on, attrs }">
                        <button type="button" v-bind="attrs" v-on="on" style="margin-left: 10px; color: #fff; border-bottom: 1px solid #fff">
                          Move
                        </button>
                      </template>

                      <div class="content">
                        <v-btn class="btn-close" @click="dialogRoundCharChoicelist = false" fab plain x-small>
                          <v-icon color="#fff" size="26">mdi-close</v-icon>
                        </v-btn>
                        <!-- dialogTitle이 있는 경우 대비 -->
                        <div class="dialog-header">
                          <div class="info-round">
                            <ItemInfo itemCategory="grade-5" itemName="Shineworld Dragon Gloves" itemCount="+10"></ItemInfo>
                          </div>
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
                                  :menu-props="{ bottom: true, offsetY: true, contentClass: 'select-menu-dark select-stake' }"
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
                                      <input type="radio" class="input-radio" id="MYCHAR1" name="mycharacters" value="1" disabled />
                                      <label for="MYCHAR1" class="input-label"></label>
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
                                      <label for="MYCHAR2" class="input-label"></label>
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
                                      <label for="MYCHAR3" class="input-label"></label>
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
                                      <label for="MYCHAR4" class="input-label"></label>
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

                    <!-- Select버튼 누를때 -->
                    <v-dialog
                      content-class="dialog-stake theme-dark winner collectible"
                      v-model="dialogRoundCharChoice"
                      max-width="640"
                      persistent
                      attach=".wrap-mywarehouse"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <button type="button" v-bind="attrs" v-on="on" style="margin-left: 10px; color: #fff; border-bottom: 1px solid #fff">
                          셀렉트 버튼 누를때
                        </button>
                      </template>

                      <div class="content">
                        <v-btn class="btn-close" @click="dialogRoundCharChoice = false" fab plain x-small>
                          <v-icon color="#fff" size="26">mdi-close</v-icon>
                        </v-btn>
                        <div class="card-content">
                          <div class="wrap-char">
                            <div class="char-choice">
                              <div class="wrap-detail">
                                <h3 class="title">Move Collectible Item</h3>
                                <div class="detail-card">
                                  <Card itemType="legendary"></Card>
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
                              </div>
                            </div>
                          </div>
                          <div class="wrap-button">
                            <button type="button" class="btn btn-primary2">
                              <span class="ico-darco ico-sm add-inside">150,135.25</span><span class="sub-txt">Item Move</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </v-dialog>
                  </div>
                  <!-- e: 팝업 예시 링크 모음 삭제 필요 -->
                </div>
                <ul class="list-itemwrap-vertical">
                  <li>
                    <ItemInfo itemCategory="grade-5" itemName="Shineworld Dragon Gloves" itemCount="+10"></ItemInfo>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">
                        Move
                        <v-tooltip top attach=".list-itemwrap-vertical .btn-wrap .btn">
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon color="primary" dark v-bind="attrs" v-on="on"> icon </v-icon>
                          </template>
                          <div class="tooltip-wrap">
                            <div class="tit">Collectibles 아이템 이동</div>
                            <p class="desc">
                              Collectibles 아이템의 경우, 현재 아이템을 보유중인 캐릭터로부터 같은 계정의 다른 캐릭터로 이동이 가능합니다. 아이템
                              이동시 해당 아이탬의 평균 거래가의 5%의 수수료가 부가 됩니다.
                            </p>
                          </div>
                        </v-tooltip>
                      </button>
                      <button type="button" class="btn btn-primary-exd">Sell</button>
                    </div>
                  </li>
                  <li>
                    <ItemInfo itemCategory="grade-1" itemName="Shineworld Dragon Gloves" itemCount="+2"></ItemInfo>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">Sell</button>
                    </div>
                  </li>
                  <li>
                    <ItemInfo itemCategory="grade-2" itemName="Shineworld Dragon Gloves" itemCount="+3"></ItemInfo>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">Sell</button>
                    </div>
                  </li>
                  <li>
                    <ItemInfo itemCategory="grade-3" itemName="Shineworld Dragon Gloves" itemCount="+4"></ItemInfo>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">Sell</button>
                    </div>
                  </li>
                  <li>
                    <ItemInfo itemCategory="grade-4" itemName="Shineworld Dragon Gloves" itemCount="+5"></ItemInfo>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">Sell</button>
                    </div>
                  </li>
                  <li>
                    <ItemInfo itemCategory="grade-1" itemName="Shineworld Dragon Gloves" itemCount="+2"></ItemInfo>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">Sell</button>
                    </div>
                  </li>
                  <li>
                    <ItemInfo itemCategory="grade-2" itemName="Shineworld Dragon Gloves" itemCount="+3"></ItemInfo>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">Sell</button>
                    </div>
                  </li>
                  <li>
                    <ItemInfo itemCategory="grade-3" itemName="Shineworld Dragon Gloves" itemCount="+4"></ItemInfo>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">Sell</button>
                    </div>
                  </li>
                  <li>
                    <ItemInfo itemCategory="grade-4" itemName="Shineworld Dragon Gloves" itemCount="+5"></ItemInfo>
                    <div class="btn-wrap">
                      <button type="button" class="btn btn-primary-exd">Sell</button>
                    </div>
                  </li>
                </ul>
                <div class="wrap-button">
                  <a href="/view-more" class="btn-viewmore">VIEW MORE</a>
                </div>
              </div>
              <div v-if="typeWarehouse === 2"></div>
            </div>
          </div>

          <!-- 사이드영역 -->
          <div class="grid-side">
            <aside class="sidebar">
              <account-info />
              <sidebar-contact-us />
            </aside>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted } from '@vue/composition-api';

// eslint-disable-next-line import/extensions
import useI18n from '@/utils/useI18n';
import Footer from '@/partials/common/Footer';
import AccountInfo from '@/components/account/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import SelectFilter from '@/components-ui/desktop/SelectFilter';
import SelectOrder from '@/components-ui/desktop/SelectOrder';
import SelectCheckFilter from '@/components-ui/desktop/SelectCheckFilter';
import Card from '@/components-ui/common/Card';
import ItemInfo from '@/components-ui/desktop/ItemInfo';
import CharacterClassThumb from '@/components/common/CharacterClassThumb';

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
  name: 'ExdList',
  components: {
    Footer,
    AccountInfo,
    SidebarContactUs,
    SelectFilter,
    SelectOrder,
    SelectCheckFilter,
    Card,
    ItemInfo,
    CharacterClassThumb,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    typeWarehouse: 0,
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
    onBeforeMount(() => {
      //
    });

    onMounted(() => {
      //
    });

    return {
      ...useI18n(),
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
@import '~@/assets/sass/desktop/pages/_mywarehouse.scss';
@import '~@/assets/sass/components/_tab-style1.scss';
</style>
