<template>
  <div>
    <!-- 00_term_of_use_agreement -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-termos"
      v-model="dialogTermos"
      :width="!isMobile ? '560px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[00_term_of_use_agreement]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogTermos = false" fab plain x-small></v-btn>
        <h2 class="title">XDRACO</h2>
        <p class="desc" v-html="$t('s.mirage.popup.desc1')"></p>
        <div class="link-wrap">
          <a href="/policy" class="link-service" target="_blank" v-html="$t('t.policy.main')"></a>
          <a href="https://forum.mir4global.com/policy/terms" class="link-service" target="_blank" v-html="$t('w.mirage.footer.terms')"></a>
        </div>
        <div class="checkbox-container">
          <input type="checkbox" id="is-subscription" />
          <label for="is-subscription" v-html="$t('s.mirage.popup.desc2')"></label>
        </div>
        <button type="button" :disabled="disabledBtntermos" class="btn btn-red-mirage">Continue</button>
      </div>
    </v-dialog>

    <!-- 02_play1_none2_enlist1 -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-enlist"
      v-model="dialogEnlist"
      :width="!isMobile ? '760px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[02_play1_none2_enlist1]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogEnlist = false" fab plain x-small></v-btn>
        <div class="dialog-header">
          Enlist
          <p class="available">Available Character NFTs<span>2</span></p>
          <div class="charge-area">
            <p class="energy">150</p>
            <button type="button" class="btn btn-charge">Charge</button>
          </div>
        </div>
        <div class="enlist-noti">
          <p>Red Moon Valley is currently full. Merciless Assault costs twice the regular amount.</p>
        </div>
        <div class="enlist-info">
          <dl>
            <dt>Snake Pit</dt>
            <dd><span>2</span>/5</dd>
          </dl>
          <div class="job">
            <span class="icon-job" data-character-class="1"></span>
            <dl>
              <dt>WARRIOR</dt>
              <dd>Character NFTs of Epic grade or higher may join the Red Moon Valley</dd>
            </dl>
          </div>
        </div>
        <div class="enlist-content">
          <swiper ref="swiperEnlist" :options="!isMobile ? swiperOptions : swiperMobileOptions">
            <swiper-slide>
              <input type="radio" id="select-1" name="enlist-select" />
              <label for="select-1">
                <mirage-character
                  characterName="charName001"
                  :status="2"
                  :characterClass="1"
                  :characterGrade="4"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                />
                <dl class="enlist-stage">
                  <dt>Sanctuary of Hydra</dt>
                  <dd>
                    <p>Stage</p>
                    <span>1</span>
                  </dd>
                </dl>
              </label>
            </swiper-slide>
            <swiper-slide>
              <span class="no-character" data-character-class="1"></span>
            </swiper-slide>
            <swiper-slide>
              <span class="no-character" data-character-class="2"></span>
            </swiper-slide>
            <swiper-slide>
              <span class="no-character" data-character-class="3"></span>
            </swiper-slide>
            <swiper-slide>
              <span class="no-character" data-character-class="4"></span>
            </swiper-slide>
            <swiper-slide>
              <span class="no-character" data-character-class="5"></span>
            </swiper-slide>
            <swiper-slide>
              <input type="radio" id="select-4" name="enlist-select" />
              <label for="select-4">
                <mirage-character
                  characterName="charName001"
                  :status="2"
                  :characterClass="1"
                  :characterGrade="4"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                />
                <dl class="enlist-stage">
                  <dt>Sanctuary of Hydra</dt>
                  <dd>
                    <p>Stage</p>
                    <span>1</span>
                  </dd>
                </dl>
              </label>
            </swiper-slide>
            <swiper-slide>
              <input type="radio" id="select-5" name="enlist-select" />
              <label for="select-5">
                <mirage-character
                  characterName="charName001"
                  :status="2"
                  :characterClass="1"
                  :characterGrade="4"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                />
                <dl class="enlist-stage">
                  <dt>Sanctuary of Hydra</dt>
                  <dd>
                    <p>Stage</p>
                    <span>1</span>
                  </dd>
                </dl>
              </label>
            </swiper-slide>
            <swiper-slide>
              <input type="radio" id="select-6" name="enlist-select" />
              <label for="select-6">
                <mirage-character
                  characterName="charName001"
                  :status="2"
                  :characterClass="1"
                  :characterGrade="4"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                />
                <dl class="enlist-stage">
                  <dt>Sanctuary of Hydra</dt>
                  <dd>
                    <p>Stage</p>
                    <span>1</span>
                  </dd>
                </dl>
              </label>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <button type="button" class="btn btn-red-mirage"><span>Enlist</span><span class="enlist">8</span></button>
        </div>
      </div>
    </v-dialog>

    <!-- 02_play1_none2_enlist2-1 -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-enlist"
      v-model="dialogEnlistType2"
      :width="!isMobile ? '760px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[02_play1_none2_enlist2-1]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogEnlistType2 = false" fab plain x-small></v-btn>
        <div class="dialog-header">
          Enlist
          <p class="available">Available Character NFTs<span>2</span></p>
          <div class="charge-area">
            <p class="energy">150</p>
            <button type="button" class="btn btn-charge">Charge</button>
          </div>
        </div>
        <div class="enlist-noti">
          <p>Red Moon Valley is currently full. Merciless Assault costs twice the regular amount.</p>
        </div>
        <div class="enlist-info">
          <dl>
            <dt>Snake Pit</dt>
            <dd><span>2</span>/5</dd>
          </dl>
          <div class="job">
            <span class="icon-job" data-character-class="1"></span>
            <dl>
              <dt>WARRIOR</dt>
              <dd>Character NFTs of Epic grade or higher may join the Red Moon Valley</dd>
            </dl>
          </div>
        </div>
        <div
          class="enlist-content"
          :class="{ emptyRoster: isRoster }"
          data-empty-message="You do not have this type of NFT available in your roster."
        >
          <swiper ref="swiperEnlist" :options="!isMobile ? swiperOptions : swiperMobileOptions">
            <swiper-slide> </swiper-slide>
          </swiper>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <button type="button" class="btn btn-red-mirage"><span>Assault</span><span class="enlist">16</span></button>
        </div>
      </div>
    </v-dialog>

    <!-- 02_play_none2_enlist3-0 -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-play"
      v-model="dialogPlayType1"
      :width="!isMobile ? '560px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[02_play_none2_enlist3-0]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogPlayType1 = false" fab plain x-small></v-btn>
        <p class="mirage-popup-playdesc">
          <strong>‘Ж墨小影’</strong><br />
          has joined in the <strong>‘Bicheon’</strong> Hidden Valley Capture.
        </p>
        <div class="play-wrap">
          <div class="char">
            <mirage-character :status="2" :characterClass="1" :characterGrade="4" />
          </div>
          <div class="play-info">
            <dl class="play-score">
              <dt>MIRAGA Score</dt>
              <dd>
                <span class="volume">162,436</span>
                <div class="mirax">
                  <span>MiraX</span>
                  <span class="value">510</span>
                </div>
              </dd>
            </dl>
            <dl class="play-stage">
              <dt>Sanctuary of Hydra</dt>
              <dd>
                <p>Stage</p>
                <span>15</span>
              </dd>
            </dl>
          </div>
        </div>
        <button type="button" class="btn btn-black-mirage">OK</button>
      </div>
    </v-dialog>

    <!-- 02_play_none2_enlist3-1 -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-play"
      v-model="dialogPlayType2"
      :width="!isMobile ? '560px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[02_play_none2_enlist3-1]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogPlayType2 = false" fab plain x-small></v-btn>
        <p class="mirage-popup-playdesc">
          <strong>비천비곡의 마지막 남은 자리를 빼았겨<br />‘Ж墨小影’</strong> 스테이킹에 실패했습니다.
        </p>
        <div class="play-wrap">
          <div class="char">
            <mirage-character :status="2" :characterClass="1" :characterGrade="4" />
          </div>
          <div class="play-info">
            <dl class="play-score">
              <dt>MIRAGA Score</dt>
              <dd>
                <span class="volume">162,436</span>
                <div class="mirax">
                  <span>MiraX</span>
                  <span class="value">510</span>
                </div>
              </dd>
            </dl>
            <dl class="play-stage">
              <dt>Sanctuary of Hydra</dt>
              <dd>
                <p>Stage</p>
                <span>15</span>
              </dd>
            </dl>
          </div>
        </div>
        <p class="break-in">난입을 시도하시겠습니까?</p>
        <div class="remain-energy"><span>Vigor</span><span class="remain">150</span></div>
        <button type="button" class="btn btn-red-mirage"><span>Merciless Assault</span><span class="seal">16</span></button>
      </div>
    </v-dialog>

    <!-- 02_play_none2_enlist3-2 -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-play"
      v-model="dialogPlayType3"
      :width="!isMobile ? '560px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[02_play_none2_enlist3-2]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogPlayType3 = false" fab plain x-small></v-btn>
        <p class="mirage-popup-playdesc">
          <strong>‘Ж墨小影’</strong><br />
          has <span>defeated <strong>‘RANK555’</strong></span> in the <strong>‘Bicheon’</strong> Hidden Valley Capture.
        </p>
        <div class="play-wrap">
          <div class="char">
            <mirage-character :status="2" :characterClass="1" :characterGrade="4" />
          </div>
          <div class="play-info">
            <dl class="play-score">
              <dt>MIRAGA Score</dt>
              <dd>
                <span class="volume">162,436</span>
                <div class="mirax">
                  <span>MiraX</span>
                  <span class="value">510</span>
                </div>
              </dd>
            </dl>
            <dl class="play-stage">
              <dt>Sanctuary of Hydra</dt>
              <dd>
                <p>Stage</p>
                <span>15</span>
              </dd>
            </dl>
          </div>
        </div>
        <button type="button" class="btn btn-black-mirage">OK</button>
      </div>
    </v-dialog>

    <!-- 02_play_none2_enlist3-3 -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-play"
      v-model="dialogPlayType4"
      :width="!isMobile ? '560px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[02_play_none2_enlist3-3]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogPlayType4 = false" fab plain x-small></v-btn>
        <p class="mirage-popup-playdesc">
          <strong>‘Ж墨小影’</strong><br />
          has joined in the <strong>‘Bicheon’</strong> Hidden Valley Capture.
        </p>
        <div class="play-wrap">
          <div class="char">
            <mirage-character :status="2" :characterClass="1" :characterGrade="4" />
          </div>
          <div class="play-info">
            <dl class="play-score">
              <dt>MIRAGA Score</dt>
              <dd>
                <span class="volume">162,436</span>
                <div class="mirax">
                  <span>MiraX</span>
                  <span class="value">510</span>
                </div>
              </dd>
            </dl>
            <dl class="play-stage">
              <dt>Sanctuary of Hydra</dt>
              <dd>
                <p>Stage</p>
                <span>15</span>
              </dd>
            </dl>
          </div>
        </div>
        <p class="break-in">난입 시도 중, 상대방의 도주로 기본 활력만 사용하였습니다.</p>
        <div class="remain-energy type2"><span>Spented Vigor</span><span class="remain">150</span></div>
        <button type="button" class="btn btn-black-mirage">OK</button>
      </div>
    </v-dialog>

    <!-- 02_play2_staked2_result2 -->
    <v-dialog attach="#contents" content-class="dialog-mirage dialog-mirage-captureresult" v-model="dialogCaptureresultType2" :fullscreen="isMobile">
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[02_play2_staked2_result2]</button>
      </template>
      <div class="content">
        <div class="dialog-header">
          Hidden Valley Capture Result
          <v-btn class="btn-close btn-miragepop-close" @click="dialogCaptureresultType2 = false" fab plain x-small></v-btn>
        </div>
        <div class="result-content">
          <div class="info-inner">
            <div class="valley">
              <div class="name">Valley</div>
              <div class="info-wrap">
                <div class="info">
                  <p class="day">Day 1 /</p>
                  <p class="half">1st Half</p>
                </div>
              </div>
              <p class="date">March. 5th 2022 12:00 UTC+8</p>
            </div>
            <div class="total-wrap">
              <dl class="total-darksteel">
                <dt>Total gained Darksteel</dt>
                <dd><img src="@/assets/img/common/mirage-popup/ico-40-darksteel.webp" :width="!isMobile ? 40 : 24" />150,845,122</dd>
              </dl>
              <dl class="totla-septaria">
                <dt>Total gained Septaria</dt>
                <dd><img src="@/assets/img/common/mirage-popup/ico-40-septaria-dark.webp" :width="!isMobile ? 40 : 24" />32</dd>
              </dl>
            </div>
            <ul class="remain-wrap">
              <li>
                <dl class="redmoon">
                  <dt>
                    <h4 class="title">Red Moon</h4>
                    <p><img src="@/assets/img/common/mirage-popup/icon-darksteel-sm.webp" width="20" />75,115,340</p>
                  </dt>
                  <dd>
                    <h5 class="sub-title">Mined Amount</h5>
                    <div class="remain-inner">
                      <div class="remain-size">
                        <img src="@/assets/img/common/mirage-popup/ico-16-darksteel.webp" width="16" /><span>37,500,000</span>/75,000,000
                      </div>
                      <div class="remain-percent"><span>50</span>%</div>
                    </div>
                  </dd>
                  <dd>
                    <h5 class="sub-title">Ranking Bonus</h5>
                    <div class="remain-inner">
                      <div class="remain-size">
                        <img src="@/assets/img/common/mirage-popup/ico-16-darksteel.webp" width="16" /><span>3,115,340</span>
                      </div>
                    </div>
                  </dd>
                  <dd>
                    <h5 class="sub-title">Gained Septaria</h5>
                    <div class="remain-inner">
                      <div class="remain-size"><img src="@/assets/img/common/mirage-popup/ico-16-septaria.webp" width="16" /><span>15</span></div>
                    </div>
                  </dd>
                </dl>
              </li>
              <li>
                <dl class="snakepit">
                  <dt>
                    <h4 class="title">Snake Pit</h4>
                    <p><img src="@/assets/img/common/mirage-popup/icon-darksteel-sm.webp" width="20" />75,115,340</p>
                  </dt>
                  <dd>
                    <h5 class="sub-title">Mined Amount</h5>
                    <div class="remain-inner">
                      <div class="remain-size">
                        <img src="@/assets/img/common/mirage-popup/ico-16-darksteel.webp" width="16" /><span>955,000</span>/75,000,000
                      </div>
                      <div class="remain-percent"><span>12</span>.34%</div>
                    </div>
                  </dd>
                  <dd>
                    <h5 class="sub-title">Ranking Bonus</h5>
                    <div class="remain-inner">
                      <div class="remain-size">
                        <img src="@/assets/img/common/mirage-popup/ico-16-darksteel.webp" width="16" /><span>404,826</span>
                      </div>
                    </div>
                  </dd>
                  <dd>
                    <h5 class="sub-title">Gained Septaria</h5>
                    <div class="remain-inner">
                      <div class="remain-size"><img src="@/assets/img/common/mirage-popup/ico-16-septaria.webp" width="16" /><span>10</span></div>
                    </div>
                  </dd>
                </dl>
              </li>
              <li>
                <dl class="redmoon">
                  <dt>
                    <h4 class="title">bicheon</h4>
                    <p><img src="@/assets/img/common/mirage-popup/icon-darksteel-sm.webp" width="20" />75,115,340</p>
                  </dt>
                  <dd>
                    <h5 class="sub-title">Mined Amount</h5>
                    <div class="remain-inner">
                      <div class="remain-size">
                        <img src="@/assets/img/common/mirage-popup/ico-16-darksteel.webp" width="16" /><span>505,000</span>/75,000,000
                      </div>
                      <div class="remain-percent"><span>50</span>%</div>
                    </div>
                  </dd>
                  <dd>
                    <h5 class="sub-title">Ranking Bonus</h5>
                    <div class="remain-inner">
                      <div class="remain-size">
                        <img src="@/assets/img/common/mirage-popup/ico-16-darksteel.webp" width="16" /><span>3,115,340</span>
                      </div>
                    </div>
                  </dd>
                  <dd>
                    <h5 class="sub-title">Gained Septaria</h5>
                    <div class="remain-inner">
                      <div class="remain-size"><img src="@/assets/img/common/mirage-popup/ico-16-septaria.webp" width="16" /><span>7</span></div>
                    </div>
                  </dd>
                </dl>
              </li>
            </ul>
          </div>
          <div class="char-wrap">
            <div class="my-ranking">
              <h3 class="title">My Ranking</h3>
              <dl class="bonus">
                <dt>Total Ranking Bonus</dt>
                <dd><img src="@/assets/img/common/mirage-popup/icon-darksteel-sm.webp" width="20" />9,260,400</dd>
              </dl>
            </div>
            <ul class="char-list">
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="5"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="2"
                  :characterGrade="5"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="3"
                  :characterGrade="4"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="4"
                  :characterGrade="4"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="5"
                  :characterGrade="4"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="3"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="3"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="3"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="3"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="3"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="2"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="2"
                  :characterGrade="2"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </v-dialog>

    <!-- 02_play2_staked2_result2_ranking -->
    <v-dialog attach="#contents" content-class="dialog-mirage dialog-mirage-captureresult" v-model="dialogCaptureresultType1" :fullscreen="isMobile">
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[02_play2_staked2_result2_ranking]</button>
      </template>
      <div class="content">
        <div class="dialog-header">
          Hidden Valley Capture Result
          <v-btn class="btn-close btn-miragepop-close" @click="dialogCaptureresultType1 = false" fab plain x-small></v-btn>
        </div>
        <div class="valley valley-type1">
          <div class="name">Valley</div>
          <div class="info-wrap">
            <div class="info">
              <p class="day">Day 1 /</p>
              <p class="half">1st Half</p>
            </div>
          </div>
          <p class="date">March. 5th 2022 12:00 UTC+8</p>
        </div>
        <div class="desc-wrap">
          <div class="desc-inner">
            <p class="desc-title">Total Rank Bonus Draksteels</p>
            <p class="desc-info">Top 50 Character NFTs will receive a share of the Ranking bonus Darksteel based on their MIRAGE Score.</p>
          </div>
          <div class="bonus">
            <p class="bonus-left">Total Darksteel Ranking Bonus</p>
            <p class="bonus-right"><img src="@/assets/img/common/mirage-popup/icon-darksteel-sm.webp" width="20" />67,500,000</p>
          </div>
        </div>
        <div class="result-content">
          <div class="char-wrap">
            <div class="char-list">
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="5"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="2"
                  :characterGrade="5"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="3"
                  :characterGrade="4"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="4"
                  :characterGrade="4"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="5"
                  :characterGrade="4"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="3"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="3"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="3"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="3"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="3"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="2"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="2"
                  :characterGrade="2"
                  :rank="3"
                  :rankChange="-1"
                  :rank2="4"
                  :rank2Change="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                  :rankingBonus="1243980"
                />
              </li>
            </div>
          </div>
        </div>
      </div>
    </v-dialog>

    <!-- 02_play2_staked3_characterinfo1 -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-staked"
      v-model="dialogStakedType2"
      :width="!isMobile ? '720px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[02_play2_staked3_characterinfo1]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogStakedType2 = false" fab plain x-small></v-btn>
        <div class="dialog-header" v-if="!isMobile">Enlisted</div>
        <div class="staked-wrap">
          <div class="char">
            <mirage-character characterName="charName001" :status="1" :characterClass="1" :characterGrade="4" />
          </div>
          <div class="staked-info">
            <div class="score-area">
              <div class="score">
                <span class="volume">162,436</span>
                <span class="change">+5%</span>
              </div>
              <div class="mirax">
                <span class="mirax-title">MiraX</span>
                <span class="mirax-value">510</span>
              </div>
            </div>
            <div class="staked-area">
              <dl class="sanctuary">
                <dt>Sanctuary of Hydra</dt>
                <dd>
                  <p>stage</p>
                  <span>6</span>
                </dd>
              </dl>
              <dl class="today">
                <dt>Today’s Septaria</dt>
                <dd class="septaria">7</dd>
              </dl>
            </div>
            <div class="staked-area">
              <dl class="power-score">
                <dt>Power Score</dt>
                <dd>
                  <span class="volume">172,155</span>
                </dd>
              </dl>
              <dl class="level">
                <dt>Level</dt>
                <dd>131</dd>
              </dl>
            </div>
          </div>
        </div>
        <p class="txt-noti">적월 비곡은 Harvest Lock 1시간 전 부터 후퇴가 금지 됩니다. from Mar. 15th, 2022 10:00 UTC+8</p>
        <button type="button" :disabled="disabledBtn" class="btn btn-black-mirage"><span>Retreat</span></button>
      </div>
    </v-dialog>

    <!-- 03_FT1_DRACO -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-smelting"
      v-model="dialogSmelting"
      :width="!isMobile ? '720px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[03_FT1_DRACO]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogSmelting = false" fab plain x-small></v-btn>
        <div class="dialog-header">DRACO &amp; HYDRA</div>
        <v-tabs class="tabs" v-model="tab" grow>
          <v-tabs-slider></v-tabs-slider>
          <v-tab>Smelt DRACOs</v-tab>
          <v-tab>Refine HYDRAs</v-tab>
          <v-tabs-items v-model="tab" touchless>
            <v-tab-item>
              <div class="item-wrap item-smelt">
                <p class="item-desc">Cost of Smelting DRACO</p>
                <p class="darksteel">380,164</p>
              </div>
              <div class="item-input-wrap" :class="{ error: isErrorUndraco }">
                <div class="info-area">
                  <p class="info-desc" v-if="!isErrorUndraco">Input your Smelt DRACO amount<span class="icon-info">info</span></p>
                  <p class="info-desc" v-else>재료가 부족합니다.<span class="icon-info">info</span></p>
                  <ul class="info-myitem">
                    <li>Darksteels<span class="darksteel">84,345,788</span></li>
                  </ul>
                </div>
                <div class="field">
                  <div class="input-area">
                    <div class="input-box">
                      <img src="@/assets/img/common/mirage-popup/symbol-draco.webp" class="symbol" width="32" />
                      <v-text-field class="input" type="tel" placeholder="0" v-model="dracocunt" dense solo flat :hide-details="true"></v-text-field>
                      <div class="btn-wrap">
                        <img v-if="dracocunt" @click="clearDraco" class="clear" src="@/assets/img/common/hsp-dialog/icon-clear.webp" alt="clear" />
                        <v-btn @click="selectUndracoAll" class="max" light>{{ $t('w.hsp.main.un-stake.max') }}</v-btn>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-orange-mirage">Smelt DRACO</button>
                </div>
              </div>
            </v-tab-item>
            <v-tab-item>
              <div class="item-wrap item-refine">
                <p class="item-desc">Cost of Refining HYDRA</p>
                <span class="now-stage">Stage 8</span>
                <div class="refine-info"><span class="draco">24</span><span class="plus">+</span><span class="septaria">8</span></div>
              </div>
              <div class="item-input-wrap" :class="{ error: isErrorUnhydra }">
                <div class="info-area">
                  <p class="info-desc" v-if="!isErrorUnhydra">Cost of Refining HYDRA<span class="icon-info">info</span></p>
                  <p class="info-desc" v-else>재료가 부족합니다.<span class="icon-info">info</span></p>
                  <ul class="info-myitem">
                    <li>Septaria<span class="septaria">72</span></li>
                    <li>
                      DRACO Balance<span class="draco">240<em>.0456</em></span>
                    </li>
                  </ul>
                </div>
                <div class="field">
                  <div class="input-area">
                    <div class="input-box">
                      <img src="@/assets/img/common/mirage-popup/symbol-hydra.webp" class="symbol" width="32" />
                      <v-text-field class="input" type="tel" placeholder="0" v-model="hydracount" dense solo flat :hide-details="true"></v-text-field>
                      <div class="btn-wrap">
                        <img v-if="hydracount" @click="clearHydra" class="clear" src="@/assets/img/common/hsp-dialog/icon-clear.webp" alt="clear" />
                        <v-btn @click="selectUnhydraAll" class="max" light>{{ $t('w.hsp.main.un-stake.max') }}</v-btn>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-orange-mirage">Refine HYDRA</button>
                </div>
              </div>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
      </div>
    </v-dialog>

    <!-- 04_ENERGY_BUY -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-charge"
      v-model="dialogChargeVigor"
      :width="!isMobile ? '640px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[04_ENERGY_BUY]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogChargeVigor = false" fab plain x-small></v-btn>
        <div class="dialog-header">Charge Vigor</div>
        <div class="charge-content vigor">
          <div class="remain-item">
            <div class="item">Vigor Pills<span class="energy">150</span></div>
            <div class="item">
              HYDAR Balance<span class="hydra">156.<em>0456</em></span>
            </div>
          </div>
          <ul class="charge-list">
            <li class="energy-10">
              <p>10 Vigor Pills</p>
              <button type="button" class="btn btn-red-mirage"><span class="buy">1</span></button>
            </li>
            <li class="energy-33">
              <p>33 Vigor Pills</p>
              <button type="button" class="btn btn-red-mirage"><span class="buy">3</span></button>
            </li>
            <li class="energy-60">
              <p>60 Vigor Pills</p>
              <button type="button" class="btn btn-red-mirage"><span class="buy">5</span></button>
            </li>
          </ul>
        </div>
      </div>
    </v-dialog>

    <!-- 05_mymirage_mynfts3_select -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-scorepop-type2 dialog-mirage-score"
      v-model="dialogScoreType2"
      :width="!isMobile ? '560px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[05_mymirage_mynfts3_select]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogScoreType2 = false" fab plain x-small></v-btn>
        <div class="info">
          <card-nft :itemGrade="4" characterClass="arbalist" :smaller="!isMobile ? 'sm' : 'xs'"></card-nft>
          <div class="info-box">
            <dl class="info-score">
              <dt>MIRAGE Score</dt>
              <dd>
                <span class="volume">162,436</span>
                <div class="mirax">
                  <span>MiraX</span>
                  <span class="value">510</span>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div class="mirage-popup-scorepopdesc">
          <p>In order to enlist your Character NFT in MIRAGE, you must first transfer your NFT to your roster.</p>
          <p>
            NFTs transferred to the roster CAN NOT be unsealed for gameplay or registered on NFT Marketplace for sale until they have been removed
            from the roster.
          </p>
        </div>
        <button type="button" class="btn btn-red-mirage"><span class="single">Transfer to Roster</span></button>
      </div>
    </v-dialog>

    <!-- 05_mymirage_myroster3_healing -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-critically"
      v-model="dialogCritically"
      :width="!isMobile ? '560px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[05_mymirage_myroster3_healing]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogCritically = false" fab plain x-small></v-btn>
        <p class="mirage-popup-criticallydesc">
          <strong>‘Ж墨小影’</strong> has been inflicted <span>critically wounded</span><br />and is currently unable to be enlisted until fully
          recover.
        </p>
        <div class="critically-info">
          <div class="char">
            <mirage-character
              :status="14"
              :characterClass="1"
              :characterGrade="5"
              :rank2Change="2"
              :takeDamage="true"
              :mirageScore="253130"
              :miraX="510"
              :curseScissors="true"
              :curseStink="true"
            />
          </div>
          <dl class="critically-count">
            <dt>Critically wounded</dt>
            <dd>
              <vue-countdown
                class="countdown"
                :time="2 * 24 * 60 * 60 * 1000"
                v-slot="{ days, hours, minutes, seconds }"
                @end="endCountdownUncritically"
              >
                {{ days }}d {{ hours }}h {{ minutes }}m {{ seconds }}s
              </vue-countdown>
            </dd>
          </dl>
        </div>
        <div class="remain-energy"><span>Vigor</span><span class="remain">150</span></div>
        <button type="button" class="btn btn-red-mirage"><span>Recover</span><span class="seal">63</span></button>
      </div>
    </v-dialog>

    <!-- 05_mymirage_myroster4_seal -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-scorepop-type1 dialog-mirage-score"
      v-model="dialogScoreType1"
      :width="!isMobile ? '560px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[05_mymirage_myroster4_seal]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogScoreType1 = false" fab plain x-small></v-btn>
        <div class="info">
          <card-nft :itemGrade="4" characterClass="arbalist" :smaller="!isMobile ? 'sm' : 'xs'"></card-nft>
          <div class="info-box">
            <dl class="info-score">
              <dt>MIRAGE Score</dt>
              <dd>
                <span class="volume">162,436</span>
                <div class="mirax">
                  <span>MiraX</span>
                  <span class="value">510</span>
                </div>
              </dd>
            </dl>
            <dl class="info-sanctuary">
              <dt>Sanctuary of Hydra</dt>
              <dd>
                <p>STAGE</p>
                <div>15</div>
              </dd>
            </dl>
          </div>
        </div>
        <div class="mirage-popup-scorepopdesc">
          <p>
            대기중인 ‘chrName1line’을 NFT로 다시 봉인합니다.<br />
            NFT로 봉인된 캐릭터는 WEMIX WALLET에서 확인할 수 있습니다.
          </p>
        </div>
        <div class="remain-energy"><span>Vigor</span><span class="remain">150</span></div>
        <button type="button" class="btn btn-red-mirage"><span>Seal</span><span class="seal">30</span></button>
      </div>
    </v-dialog>
    <hr />
    <h2 class="section-title">Boss Raid</h2>

    <!-- mySquadron > BIDDING -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-bidding"
      v-model="dialogBidding"
      :width="!isMobile ? '760px' : '100%'"
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[mySquadron > BIDDING]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogBidding = false" fab plain x-small></v-btn>
        <div class="dialog-header">
          Enlist
          <p class="available">Available Character NFTs<span>2</span></p>
        </div>
        <div class="chr-info">
          <div class="job">
            <span class="icon-job" data-character-class="1"></span>
            <dl>
              <dt>WARRIOR</dt>
              <dd>보스 레이드에 참전할 영웅 캐릭터를 선택하십시오</dd>
            </dl>
          </div>
        </div>
        <div class="chr-content">
          <swiper ref="swiperBidding" :options="!isMobile ? swiperOptions : swiperMobileOptions2">
            <swiper-slide>
              <input type="radio" id="bidding-1" name="bidding" />
              <label for="bidding-1">
                <mirage-character
                  characterName="charName001"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="5"
                  :mirageScore="253130"
                  :miraX="510"
                />
                <div class="character-status"></div>
              </label>
            </swiper-slide>
            <swiper-slide>
              <input type="radio" id="bidding-2" name="bidding" disabled />
              <label for="bidding-2">
                <mirage-character
                  characterName="charName001"
                  :status="1"
                  :characterClass="2"
                  :characterGrade="4"
                  :mirageScore="253130"
                  :miraX="510"
                />
                <div class="character-status">
                  <span class="txt-status cursed">Curse of Scissors</span>
                  <div class="dispel-time">
                    <vue-countdown
                      class="countdown"
                      :time="2 * 24 * 60 * 60 * 1000"
                      v-slot="{ days, hours, minutes }"
                      @end="endCountdownUncritically"
                    >
                      {{ days }}d {{ hours }}h {{ minutes }}m
                    </vue-countdown>
                    <button type="button" class="btn-charge">Dispel</button>
                  </div>
                </div>
              </label>
            </swiper-slide>
            <swiper-slide>
              <input type="radio" id="bidding-3" name="bidding" />
              <label for="bidding-3">
                <mirage-character
                  characterName="charName001"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="5"
                  :mirageScore="253130"
                  :miraX="510"
                />
                <div class="character-status"></div>
              </label>
            </swiper-slide>
            <swiper-slide>
              <span class="no-character" data-character-class="3"></span>
            </swiper-slide>
            <swiper-slide>
              <span class="no-character" data-character-class="4"></span>
            </swiper-slide>
            <swiper-slide>
              <span class="no-character" data-character-class="5"></span>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev" slot="button-prev" v-if="!isMobile"></div>
          <div class="swiper-button-next" slot="button-next" v-if="!isMobile"></div>
          <div class="item-input-wrap" :class="{ error: isErrorBid }">
            <div class="info-area">
              <p class="info-desc">
                <span class="icon-info">info</span>
                <span class="info-txt" v-if="vigorValue > maxVigor">입력값이 보유한 Vigor보다 많습니다.</span>
                <span class="info-txt" v-else-if="vigorValue < minVigor">입력값이 보유한 Vigor보다 적습니다.</span>
                <span class="info-txt" v-else
                  ><em>{{ minVigor }} Vigor</em>부터 입찰가능
                </span>
              </p>
              <div class="remain-energy">
                <span class="remain">{{ maxVigor }}</span>
                <button type="button" class="btn-charge">Charge</button>
              </div>
            </div>
            <div class="field">
              <div class="input-area">
                <div class="input-box">
                  <img src="@/assets/img/common/mirage-popup/icon-energy-gold.webp" class="symbol" width="32" />
                  <v-text-field class="input" type="tel" v-model="vigorValue" dense solo flat :hide-details="true"></v-text-field>
                  <div class="add-vigor">
                    <em class="add">+</em>
                    <span class="standard-value"
                      ><img src="@/assets/img/common/mirage-popup/icon-energy-gold.webp" class="symbol" width="32" />1</span
                    >
                    <em class="fee">(Entry fee)</em>
                  </div>
                  <div class="btn-wrap">
                    <v-btn class="min" @click="setMinVigor">MIN</v-btn>
                    <v-btn class="max" @click="setMaxVigor">{{ $t('w.hsp.main.un-stake.max') }}</v-btn>
                  </div>
                </div>
              </div>
              <button type="button" class="btn btn-mirage btn-bid">BID NOW</button>
            </div>
          </div>
        </div>
      </div>
    </v-dialog>

    <!-- Latest Raid Result >  Ranking -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-raid-info"
      v-model="dialogRaidRanking"
      :width="!isMobile ? '960px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Latest Raid Result > Ranking]</button>
      </template>
      <div class="dialog-header">
        Latest Raid Result Ranking
        <v-btn class="btn-close btn-miragepop-close" @click="dialogRaidRanking = false" fab plain x-small></v-btn>
      </div>
      <div class="content">
        <div class="wrap-raid-info">
          <img src="@/assets/img/desktop/mirage/thumb-96-horang.webp" width="96" alt="" />
          <mirage-round-raid-info :roundRaidData="roundRaidDatas[0]" />
        </div>
        <div class="wrap-raid-info">
          <img src="@/assets/img/desktop/mirage/thumb-96-eunsil.webp" width="96" alt="" />
          <mirage-round-raid-info :roundRaidData="roundRaidDatas[1]" />
        </div>
        <mirage-result-list :rankData="resultRankData" />
      </div>
    </v-dialog>

    <!-- Latest Raid Result >  My Boss Raid History -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-raid-info"
      v-model="dialogRaidHistory"
      :width="!isMobile ? '960px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Latest Raid Result > My Boss Raid History]</button>
      </template>
      <div class="dialog-header">
        My Boss Raid Enlist History
        <v-btn class="btn-close btn-miragepop-close" @click="dialogRaidHistory = false" fab plain x-small></v-btn>
      </div>
      <div class="content">
        <ul class="list-history-round">
          <li>
            <mirage-round-raid-info :roundRaidData="roundRaidDatas[3]" />
            <mirage-result-list :rankData="historyRankData" />
          </li>
          <li>
            <mirage-round-raid-info :roundRaidData="roundRaidDatas[2]" />
            <mirage-result-list :rankData="historyRankData2" />
          </li>
          <li>
            <mirage-round-raid-info :roundRaidData="roundRaidDatas[1]" />
            <mirage-result-list :rankData="historyRankData3" />
          </li>
          <li>
            <mirage-round-raid-info :roundRaidData="roundRaidDatas[0]" />
            <mirage-result-list :rankData="historyRankData4" />
          </li>
        </ul>
      </div>
    </v-dialog>

    <!-- Mirage lockout Schedule -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-lockout"
      v-model="dialogLockoutSchedule"
      :width="!isMobile ? '760px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Boss Breifing > Lockout Schedule]</button>
      </template>
      <div class="dialog-header">
        MIRAGE Lockout Schedule
        <v-btn class="btn-close btn-miragepop-close" @click="dialogLockoutSchedule = false" fab plain x-small></v-btn>
      </div>
      <div class="content">
        <ul class="list-lockout">
          <li>
            <div class="lockout-time">00:00 - 12:00</div>
            <div class="lockout-msg">Hidden Valley Capture 1st Half Start</div>
          </li>
          <li class="type-locked">
            <div class="lockout-time">03:00 - 03:30</div>
            <div class="lockout-msg">Boss Raid Reward Distribution</div>
          </li>
          <li>
            <div class="lockout-time">04:00 - 09:00</div>
            <div class="lockout-msg">Boss Raid Horang the Mad Stable Keeper 1st Round Start</div>
          </li>
          <li class="type-locked">
            <div class="lockout-time">08:00 - 08:30</div>
            <div class="lockout-msg">Boss Raid Reward Distribution</div>
          </li>
          <li>
            <div class="lockout-time">09:00 : 16:00</div>
            <div class="lockout-msg">Hidden Valley Capture 1st Half Harvest</div>
          </li>
          <li class="type-locked">
            <div class="lockout-time">11:00 - 13:00</div>
            <div class="lockout-msg">Hidden Valley Capture 2nd Half Start</div>
          </li>
          <li class="type-locked">
            <div class="lockout-time">12:00 - 24:00</div>
            <div class="lockout-msg">Hidden Valley Capture 2nd Half Start</div>
          </li>
          <li class="type-locked">
            <div class="lockout-time">15:00 - 15:30</div>
            <div class="lockout-msg">Boss Raid Reward Distribution</div>
          </li>
          <li>
            <div class="lockout-time">16:00 - 21:00</div>
            <div class="lockout-msg">Boss Raid Horang the Mad Stable Keeper 2nd Round Start</div>
          </li>
          <li class="type-locked">
            <div class="lockout-time">20:00 -20:30</div>
            <div class="lockout-msg">Boss Raid Reward Distribution</div>
          </li>
          <li>
            <div class="lockout-time">21:00 : 04:00</div>
            <div class="lockout-msg">Boss Raid Eunsil the Lunatic Tailor 1st Round Start</div>
          </li>
          <li class="type-locked">
            <div class="lockout-time">23:00 - 01:00</div>
            <div class="lockout-msg">Hidden Valley Capture 2nd Half Harvest</div>
          </li>
        </ul>
      </div>
    </v-dialog>

    <hr />
    <h2 class="section-title">NFT Enhancement</h2>
    <!-- NFT enhancement > seal -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-enhancement-seal"
      v-model="dialogEnhancmentSeal"
      :width="!isMobile ? '560px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[mymirage > nft enhancement > seal]</button>
      </template>
      <div class="dialog-header">
        Sealing
        <v-btn class="btn-close btn-miragepop-close" @click="dialogEnhancmentSeal = false" fab plain x-small></v-btn>
      </div>
      <div class="content">
        <div class="item-area">
          <span class="item-frame">
            <img src="@/assets/img/common/mirage/img-128-mirage-scroll.webp" width="128" alt="mirage scroll" />
            <span class="item-amount">x 84</span>
          </span>
          <span class="seal-item-name">MIRAGE Scroll</span>
          <div class="item-caution">After sealing 10 Mirage Scrolls with 1 Mirage Scroll Sealing Box, you can trade them on EXD.</div>
        </div>
        <div class="item-input-wrap">
          <div class="info-area">
            <p class="info-desc">
              <span class="info-txt">Input the number of Sealing Box</span>
            </p>
            <div class="remain-energy">
              <span class="remain">{{ maxVigor }}</span>
              <button type="button" class="btn-charge">Charge</button>
            </div>
          </div>
          <div class="field">
            <div class="input-area">
              <div class="input-box">
                <v-text-field class="input" type="tel" v-model="sealVigorValue" dense solo flat :hide-details="true"></v-text-field>
                <div class="btn-wrap">
                  <v-btn class="btn-decrease" @click="decreaseVigor">minus</v-btn>
                  <v-btn class="btn-increase" @click="increaseVigor" disabled aria-disabled="true">plus</v-btn>
                  <v-btn class="max" @click="setMaxSealVigor">{{ $t('w.hsp.main.un-stake.max') }}</v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-red-mirage"><span>Seal</span><span class="seal">30</span></button>
      </div>
    </v-dialog>

    <!-- NFT enhancement > Unseal -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-enhancement-seal"
      v-model="dialogEnhancmentUnSeal"
      :width="!isMobile ? '560px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[mymirage > nft enhancement > Unseal]</button>
      </template>
      <div class="dialog-header">
        Unseal
        <v-btn class="btn-close btn-miragepop-close" @click="dialogEnhancmentUnSeal = false" fab plain x-small></v-btn>
      </div>
      <div class="content">
        <div class="item-area">
          <span class="item-frame">
            <Card itemType="epic" :smaller="isMobile ? 'xs' : 'sm'"></Card>
            <span class="item-amount">x 84</span>
          </span>
          <span class="seal-item-name">item Card</span>
          <div class="item-caution">Using 1 Mirage Scroll Sealing Box increases Mirage Scroll holding by 10.</div>
        </div>
        <div class="item-input-wrap">
          <div class="field">
            <div class="input-area">
              <div class="input-box">
                <v-text-field class="input" type="tel" v-model="sealVigorValue" dense solo flat :hide-details="true"></v-text-field>
                <div class="btn-wrap">
                  <v-btn class="btn-decrease" @click="decreaseVigor" disabled aria-disabled="true">minus</v-btn>
                  <v-btn class="btn-increase" @click="increaseVigor">plus</v-btn>
                  <v-btn class="max" @click="setMaxSealVigor">{{ $t('w.hsp.main.un-stake.max') }}</v-btn>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-red-mirage" disabled><span>Unseal</span></button>
      </div>
    </v-dialog>

    <hr />
    <h2 class="section-title">Roster</h2>
    <!-- MyRoster > Dispel -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-critically cursed"
      v-model="dialogCursed"
      :width="!isMobile ? '560px' : '100%'"
      scrollable
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[MyRoster > Dispel]</button>
      </template>
      <div class="content">
        <v-btn class="btn-close btn-miragepop-close" @click="dialogCursed = false" fab plain x-small></v-btn>
        <p class="mirage-popup-criticallydesc">
          <strong>‘Ж墨小影’</strong>는 <span>‘Torn cloth’</span> 저주로 ‘EUNSIL the Lunatic Tailor’ BOSS RAID 참가가 불가능합니다.
        </p>
        <div class="critically-info">
          <div class="char">
            <mirage-character
              :status="14"
              :characterClass="5"
              :characterGrade="2"
              :takeDamage="true"
              :mirageScore="253130"
              :miraX="999"
              :curseScissors="true"
              :curseStink="true"
            />
          </div>
          <dl class="critically-count">
            <dt>
              <!-- <img src="@/assets/img/common/mirage-popup/img-56-scissors.webp" width="56" alt="" v-if="!isMobile" /> -->
              <img src="@/assets/img/common/mirage-popup/img-56-stink.webp" width="56" alt="" v-if="!isMobile" />
              <span>Curse of <strong>‘Torn cloth’</strong></span>
            </dt>
            <dd>
              <vue-countdown
                class="countdown"
                :time="2 * 24 * 60 * 60 * 1000"
                v-slot="{ days, hours, minutes, seconds }"
                @end="endCountdownUncritically"
              >
                {{ days }}d {{ hours }}h {{ minutes }}m {{ seconds }}s
              </vue-countdown>
            </dd>
          </dl>
        </div>
        <div class="remain-energy">
          <span class="remain">150</span>
          <button type="button" class="btn-charge">Charge</button>
        </div>
        <button type="button" class="btn btn-red-mirage"><span>Dispel</span><span class="seal">8</span></button>
      </div>
    </v-dialog>

    <!-- MyRoster > Character Info -->
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-character-info"
      v-model="dialogCharacterInfo"
      :width="!isMobile ? '720px' : '100%'"
      scrollable
      :fullscreen="isMobile"
    >
      <template v-slot:activator="{ on, attrs }">
        <button type="button" v-bind="attrs" v-on="on" class="link-popup">[MyRoster > Character Info]</button>
      </template>
      <div class="dialog-header">
        Character Info
        <v-btn class="btn-close btn-miragepop-close" @click="dialogCharacterInfo = false" fab plain x-small></v-btn>
      </div>
      <div class="content">
        <mirage-character
          characterName="myCharacter"
          :status="14"
          :characterClass="1"
          :characterGrade="3"
          :takeDamage="true"
          :curseScissors="true"
          :curseStink="true"
          :mirageScore="999999"
          :miraX="999"
        />
        <div class="wrap-info-chr">
          <div class="info-item info-score" v-if="!isMobile">
            <div class="info-wrap-score">
              <span class="info-value">962,436</span>
              <span class="change">+5%</span>
            </div>
            <div class="info-wrap-mirax">
              <span class="info-title">MiraX</span>
              <span class="info-value">510</span>
            </div>
          </div>
          <div class="info-item info-level">
            <div class="flex-col">
              <span class="info-title">Power Score</span>
              <span class="info-value power-score">162,436</span>
            </div>
            <div class="flex-col">
              <span class="info-title">Level</span>
              <span class="info-value">131</span>
            </div>
          </div>
          <div class="info-item info-hidden-valley">
            <div class="flex-col">
              <span class="info-title">Enlisted</span>
              <div class="flex-row">
                <span class="info-value">Hidden Vally Capture / Valley01 / Red Moon Valley</span>
                <button type="button" class="btn btn-xs">Retreat</button>
              </div>
            </div>
            <div class="flex-row info-sub">
              <span class="info-title">Sanctuary of HYDRA</span>
              <span class="info-value stage">stage<span class="stage-value">15</span></span>
            </div>
            <div class="flex-row info-sub">
              <span class="info-title">Septaria Harvest</span>
              <span class="info-value septaria">7</span>
            </div>
          </div>
          <div class="info-item info-boss-raid">
            <div class="flex-col">
              <span class="info-title">Enlisted</span>
              <div class="flex-row">
                <span class="info-value">BOSS RAID / ‘HORANG’ the Mad Stable Keeper</span>
                <button type="button" class="btn btn-xs">Retreat</button>
              </div>
            </div>
            <div class="flex-row info-sub">
              <span class="info-title">Bid Price</span>
              <span class="info-value vigor">130</span>
            </div>
          </div>
          <!-- <div class="info-item info-hidden-valley">
            <div class="flex-col">
              <span class="info-title">Enlisted</span>
              <div class="flex-row">
                <span class="info-value">Hidden Vally Capture / Valley01 / Red Moon Valley</span>
                <button type="button" class="btn btn-xs">Retreat</button>
              </div>
            </div>
            <div class="flex-row info-sub">
              <span class="info-title">Sanctuary of HYDRA</span>
              <span class="info-value stage">stage<span class="stage-value">15</span></span>
            </div>
            <div class="flex-row info-sub">
              <span class="info-title">Septaria Harvest</span>
              <span class="info-value septaria">7</span>
            </div>
          </div> -->
          <div class="info-item info-damaged">
            <div class="flex-col">
              <span class="info-title">Wound</span>
              <div class="flex-row">
                <img src="@/assets/img/common/mirage-character/ico-damage.webp" width="32" alt="" />
                <div class="wrap-info-status">
                  <span class="info-title color-damage">Critical wounded</span>
                  <div class="wrap-countdown">
                    <vue-countdown
                      class="countdown"
                      :time="2 * 24 * 60 * 60 * 1000"
                      v-slot="{ days, hours, minutes }"
                      @end="endCountdownUncritically"
                    >
                      {{ days }}d {{ hours }}h {{ minutes }}m
                    </vue-countdown>
                    <v-tooltip content-class="mirage-tooltip" attach=".wrap-countdown" top max-width="240">
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon v-bind="attrs" v-on="on" class="icon-mirage-tooltip">icon</v-icon>
                      </template>
                      <div class="tooltip-wrap">
                        <p>툴팁 내용 내용 내용 내용 내용 내용</p>
                      </div>
                    </v-tooltip>
                  </div>
                </div>
                <button type="button" class="btn btn-xs">Recover</button>
              </div>
            </div>
            <div class="flex-col">
              <span class="info-title">Curse</span>
              <div class="flex-row">
                <img src="@/assets/img/common/mirage-character/img-32-scissors.webp" width="32" alt="" />
                <div class="wrap-info-status">
                  <span class="info-title color-cursed">Curse of Scissors</span>
                  <div class="wrap-countdown">
                    <vue-countdown
                      class="countdown"
                      :time="2 * 24 * 60 * 60 * 1000"
                      v-slot="{ days, hours, minutes }"
                      @end="endCountdownUncritically"
                    >
                      {{ days }}d {{ hours }}h {{ minutes }}m
                    </vue-countdown>
                    <v-tooltip content-class="mirage-tooltip" attach=".wrap-countdown" top max-width="240">
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon v-bind="attrs" v-on="on" class="icon-mirage-tooltip">icon</v-icon>
                      </template>
                      <div class="tooltip-wrap">
                        <p>툴팁 내용 내용 내용 내용 내용 내용</p>
                      </div>
                    </v-tooltip>
                  </div>
                </div>
                <button type="button" class="btn btn-xs">Dispel</button>
              </div>
              <div class="flex-row">
                <img src="@/assets/img/common/mirage-character/img-32-stink.webp" width="32" alt="" />
                <div class="wrap-info-status">
                  <span class="info-title color-cursed">Curse of Stink</span>
                  <div class="wrap-countdown">
                    <vue-countdown
                      class="countdown"
                      :time="2 * 24 * 60 * 60 * 1000"
                      v-slot="{ days, hours, minutes }"
                      @end="endCountdownUncritically"
                    >
                      {{ days }}d {{ hours }}h {{ minutes }}m
                    </vue-countdown>
                    <v-tooltip content-class="mirage-tooltip" attach=".wrap-countdown" top max-width="240">
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon v-bind="attrs" v-on="on" class="icon-mirage-tooltip">icon</v-icon>
                      </template>
                      <div class="tooltip-wrap">
                        <p>툴팁 내용 내용 내용 내용 내용 내용</p>
                      </div>
                    </v-tooltip>
                  </div>
                </div>
                <button type="button" class="btn btn-xs">Dispel</button>
              </div>
            </div>
          </div>
          <div class="info-item info-sealed">
            <div class="flex-row">
              <span class="info-title">
                <span>Can be sealed after</span>
                <vue-countdown
                  class="countdown ml-4"
                  :time="2 * 24 * 60 * 60 * 1000"
                  v-slot="{ days, hours, minutes }"
                  @end="endCountdownUncritically"
                >
                  {{ days }}d {{ hours }}h {{ minutes }}m
                </vue-countdown>
              </span>
              <button type="button" class="btn btn-red-mirage" disabled>
                <span>Seal</span>
                <span class="seal">20</span>
              </button>
            </div>
            <div class="flex-row">
              <span class="info-title">부상과 저주가 남은 상태에서는 NFT 봉인이 불가능 합니다.</span>
              <button type="button" class="btn btn-red-mirage" disabled>
                <span>Seal</span>
                <span class="seal">20</span>
              </button>
            </div>
            <div class="flex-row">
              <span class="info-title">NFT로 봉인 후 거래 또는 MIR4 플레이 가능 합니다.</span>
              <button type="button" class="btn btn-red-mirage">
                <span>Seal</span>
                <span class="seal">20</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
import VueCountdown from '@chenfengyuan/vue-countdown';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import CardNft from '@/components-ui/common/CardNft';
import 'swiper/css/swiper.css';
import MirageCharacter from '@/components-ui/common/MirageCharacter';
import MirageResultList from '@/components-ui/common/MirageResultList';
import MirageRoundRaidInfo from '@/components-ui/common/MirageRoundRaidInfo';
import Card from '@/components-ui/common/Card';

export default defineComponent({
  name: 'MiragePopup',
  components: {
    CardNft,
    VueCountdown,
    Swiper,
    SwiperSlide,
    MirageCharacter,
    MirageResultList,
    MirageRoundRaidInfo,
    Card,
  },
  setup() {},
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
    // for tab
    tab: null,

    // for dialog
    dialogScoreType1: null,
    dialogScoreType2: null,
    dialogCritically: null,
    dialogSmelting: null,
    dialogEnlist: null,
    dialogEnlistType2: null,
    dialogChargeVigor: null,
    dialogPlayType1: null,
    dialogPlayType2: null,
    dialogPlayType3: null,
    dialogPlayType4: null,
    dialogStakedType1: null,
    dialogStakedType2: null,
    dialogCaptureresultType1: null,
    dialogCaptureresultType2: null,
    dialogTermos: null,
    dialogBidding: null,
    dialogRaidRanking: null,
    dialogRaidHistory: null,
    dialogEnhancmentSeal: null,
    dialogEnhancmentUnSeal: null,
    dialogCursed: null,
    dialogCharacterInfo: null,
    dialogLockoutSchedule: null,

    // for input
    dracocunt: null,
    hydracount: null,
    dracocunted: 500,
    hydracounted: 600,
    amount: 10.0033,
    vigorValue: 0,
    minVigor: 10,
    maxVigor: 150,
    sealVigorValue: 1,

    // for swiper
    swiperOptions: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      resistance: true,
      resistanceRatio: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      observer: true,
      observeParents: true,
    },
    swiperMobileOptions: {
      slidesPerView: 'auto',
      resistance: true,
      resistanceRatio: 0,
      observer: true,
      observeParents: true,
    },
    swiperMobileOptions2: {
      slidesPerView: 'auto',
      spaceBetween: 44,
      observer: true,
      observeParents: true,
    },

    // for disabled
    disabledBtn: true,
    disabledBtntermos: true,

    // empty
    isRoster: true,

    // Mirage boss raid data
    roundRaidDatas: [
      {
        round: 'Round 10',
        boss: 'HORANG the Mad Stable Keeper',
        date: 'March. 5th 2022 00:00 UTC+8',
      },
      {
        round: 'Round 11',
        boss: 'EUNSIL the Lunatic Tailor',
        date: 'March. 5th 2022 00:00 UTC+8',
      },
      {
        round: 'Round 12',
        boss: 'HORANG the Mad Stable Keeper',
        date: 'March. 5th 2022 00:00 UTC+8',
      },
      {
        round: 'Round 13',
        boss: 'EUNSIL the Lunatic Tailor',
        date: 'March. 5th 2022 00:00 UTC+8',
      },
    ],
    resultRankData: [
      { rank: 1, class: '1', damage: '0', hasSpecialReward: true },
      { rank: 2, class: '2', damage: '1', hasSpecialReward: true },
      { rank: 3, class: '3', damage: '2', hasSpecialReward: false },
      { rank: 4, class: '4', damage: '3', hasSpecialReward: true },
      { rank: 5, class: '5', damage: '0', hasSpecialReward: false },
      { rank: 6, class: '1', damage: '0', hasSpecialReward: true },
      { rank: 7, class: '2', damage: '1', hasSpecialReward: true },
      { rank: 8, class: '3', damage: '2', hasSpecialReward: false },
      { rank: 9, class: '4', damage: '3', hasSpecialReward: true },
      { rank: 10, class: '5', damage: '0', hasSpecialReward: false },
    ],
    historyRankData: [{ rank: 10, class: '1', damage: '1', hasSpecialReward: true }],
    historyRankData2: [
      { rank: 3, class: '1', damage: '1', hasSpecialReward: true },
      { rank: 9, class: '4', damage: '3', hasSpecialReward: true },
      { rank: 10, class: '4', damage: '3', hasSpecialReward: false },
    ],
    historyRankData3: [
      { rank: 1, class: '2', damage: '0', hasSpecialReward: true },
      { rank: 9, class: '4', damage: '3', hasSpecialReward: false },
    ],
    historyRankData4: [
      { rank: 1, class: '1', damage: '0', hasSpecialReward: true },
      { rank: 3, class: '3', damage: '0', hasSpecialReward: false },
      { rank: 5, class: '4', damage: '1', hasSpecialReward: false },
      { rank: 7, class: '5', damage: '3', hasSpecialReward: true },
    ],
  }),
  filters: {
    comma(val) {
      return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
  },
  methods: {
    onInput(ev) {
      console.log(ev);
    },
    selectUndracoAll() {
      this.dracocunt = this.dracocunted;
    },
    selectUnhydraAll() {
      this.hydracount = this.hydracounted;
    },
    endCountdownUncritically() {
      this.isDisableUncritically = false;
    },
    clearDraco() {
      this.dracocunt = null;
    },
    clearHydra() {
      this.hydracount = null;
    },
    setMinVigor() {
      this.vigorValue = this.minVigor;
    },
    setMaxVigor() {
      this.vigorValue = this.maxVigor;
    },
    setMaxSealVigor() {
      this.sealVigorValue = this.maxVigor;
    },
    increaseVigor() {
      this.sealVigorValue += 1;
    },
    decreaseVigor() {
      this.sealVigorValue -= 1;
    },
  },
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
    isErrorUndraco() {
      return this.dracocunted < this.dracocunt;
    },
    isErrorUnhydra() {
      return this.hydracounted < this.hydracount;
    },
    swiperEnlist() {
      return this.$refs.swiperEnlist.$swiper;
    },
    swiperBidding() {
      return this.$refs.swiperBidding.$swiper;
    },
    isErrorBid() {
      return this.vigorValue < this.minVigor || this.vigorValue > this.maxVigor;
    },
  },
  mounted() {
    this.setMinVigor();
  },
});
</script>
