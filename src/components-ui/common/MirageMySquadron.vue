<template>
  <div class="mirage-my-squadron">
    <div class="section-title-bar">
      <h2 class="section-title">
        My Squadron
        <div class="squadron-msg">
          <span v-if="!isMobile">Place your bid for a spot in the Boss Raid.</span>
          <v-tooltip content-class="mirage-tooltip" attach=".mirage-my-squadron" max-width="320" top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-mirage-tooltip">icon</v-icon>
            </template>
            <div class="mirage-tooltip-title">보스레이드 참가하기</div>
            <div class="mirage-tooltip-desc">
              보스레이드의 참가는 경매 방식으로 진행되며, 입찰은 Vigor를 이용합니다. (최소 입찰 수량 10 Vigor)<br />모든 입찰 캐릭터등 중 최종 입찰
              순위 10위 까지만 보스 레이드에 참가합니다.
            </div>
          </v-tooltip>
        </div>
      </h2>
      <div class="squadron-party-boost">
        <span>Party Boost</span>
        <div class="boost-value">0%</div>
      </div>
    </div>
    <div class="caution-update">
      <p class="caution-txt">The bid ranking results will be open on Apr 15th 2022. 05:50 UTC+8.</p>
      <v-tooltip content-class="mirage-tooltip" attach=".mirage-my-squadron" max-width="320" top>
        <template v-slot:activator="{ on, attrs }">
          <v-icon v-bind="attrs" v-on="on" class="icon-mirage-tooltip">icon</v-icon>
        </template>
        <div class="tooltip-wrap">
          <p>툴팁 내용 내용 내용 내용 내용 내용</p>
        </div>
      </v-tooltip>
    </div>
    <ul class="list-system-noti">
      <li>
        <span class="noti-img">
          <img src="@/assets/img/common/mirage/ico-40-battle.webp" width="40" alt="" />
        </span>
        <span class="noti-desc"><em>‘Taoist-M01’</em>이 <em>400 Vigor</em>로 BOSS RAID에 참전했습니다. <em>3위</em></span>
      </li>
      <li>
        <span class="noti-img">
          <img src="@/assets/img/common/mirage/ico-40-vigor-refund.webp" width="40" alt="" />
        </span>
        <span class="noti-desc"
          ><em>‘도사007’</em>의 입찰 순위가 10위안에 들지 못해 <em>114 Vigor</em>가 <em>환불</em> 되었습니다. (수수료 1 Vigor 차감)</span
        >
      </li>
    </ul>
    <ul class="char-list">
      <li>
        <mirage-character :status="2" :characterClass="1" buttonType="disabled" :disabledButton="true" />
        <!-- <div class="wrap-button">
          <button type="button" class="btn-mirage btn-bid">
            <span>BID NOW</span>
          </button>
        </div> -->
      </li>
      <li>
        <mirage-character :status="2" :characterClass="2" />
        <div class="wrap-button">
          <!-- BID Dialog -->
          <v-dialog
            attach="#contents"
            content-class="dialog-mirage dialog-mirage-bidding"
            v-model="dialogBidding"
            :width="!isMobile ? '760px' : '100%'"
            scrollable
            :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
          >
            <template v-slot:activator="{ on, attrs }">
              <button type="button" class="btn-mirage btn-bid" v-bind="attrs" v-on="on">
                <span>BID NOW</span>
              </button>
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
                <swiper ref="swiperBidding" :options="!isMobile ? swiperOptions : swiperMobileOptions">
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
                        <div class="add-vigor" v-if="!isErrorBid">
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
          <!-- //BID Dialog -->
        </div>
      </li>
      <li>
        <mirage-character
          :status="1"
          :characterClass="3"
          characterName="Sorcerer-M02"
          :characterGrade="2"
          :mirageScore="253130"
          :mirageScoreChange="1"
          :curseScissors="true"
          :curseStink="true"
        />
        <div class="wrap-button">
          <button type="button" class="btn-mirage btn-enlisted">
            <span>BID PRICE</span>
            <span class="volume">
              <img src="@/assets/img/common/mirage-character/ico-energy.webp" width="20" height="20" alt="Energy" />
              <em>400</em>
            </span>
          </button>
        </div>
      </li>
      <!-- 비활성화 aria-disabled속성을 true값으로 적용해주세요 -->
      <li aria-disabled="true">
        <mirage-character :status="1" :characterClass="4" characterName="Taoist-M01" :characterGrade="4" :mirageScore="253130" />
        <div class="wrap-button">
          <button type="button" class="btn-mirage btn-enlisted" disabled>
            <span>BID PRICE</span>
            <span class="volume">
              <img src="@/assets/img/common/mirage-character/ico-energy.webp" width="20" height="20" alt="Energy" />
              <em>400</em>
            </span>
          </button>
        </div>
      </li>
      <li>
        <mirage-character :status="2" :characterClass="5" buttonType="disabled" :disabledButton="true" />
        <!-- <div class="wrap-button">
          <button type="button" class="btn-mirage btn-bid">
            <span>BID NOW</span>
          </button>
        </div> -->
      </li>
    </ul>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import VueCountdown from '@chenfengyuan/vue-countdown';
import 'swiper/css/swiper.css';
import MirageCharacter from '@/components/mirage/common/MirageCharacter';

export default defineComponent({
  name: 'MirageMySquadron',
  components: {
    MirageCharacter,
    Swiper,
    SwiperSlide,
    VueCountdown,
  },
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
    dialogBidding: null,
    vigorValue: 0,
    minVigor: 10,
    maxVigor: 150,

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
      spaceBetween: 44,
      observer: true,
      observeParents: true,
    },
  }),
  methods: {
    setMinVigor() {
      this.vigorValue = this.minVigor;
    },
    setMaxVigor() {
      this.vigorValue = this.maxVigor;
    },
    endCountdownUncritically() {
      this.isDisableUncritically = false;
    },
  },
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
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
<style lang="scss">
@import '~@/assets/sass/components/mirage-my-squadron';
</style>
