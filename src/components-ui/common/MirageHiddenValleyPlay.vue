<template>
  <div class="mirage-hidden-valley-play">
    <template v-if="isLocked">
      <v-expansion-panels class="playnow-wrap" accordion multiple>
        <!-- locked 구간 -->
        <v-expansion-panel class="playnow">
          <v-expansion-panel-header class="playnow-header">
            <div class="top">
              <div class="top-left">
                <div class="title">Red Moon</div>
              </div>
              <div class="top-right">
                <p><span>5</span>/5</p>
                <v-tooltip content-class="mirage-tooltip-playnow" max-width="320" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">icon</v-icon>
                  </template>
                  <div class="tooltip-wrap">
                    <p>The total number of Character NFT slots available for staking in this Hidden Valley.</p>
                  </div>
                </v-tooltip>
              </div>
            </div>
            <div class="bottom">
              <dl class="rate">
                <dt>Mining Rate (E)</dt>
                <dd>
                  <p>0<span>%</span></p>
                </dd>
              </dl>
              <dl class="amount">
                <dt>Mined Amount (E)</dt>
                <dd>
                  <img src="@/assets/img/common/mirage/ico-24-darksteel.webp" :width="!isMobile ? 24 : 20" />
                  <p>0</p>
                </dd>
              </dl>
              <dl class="septaria">
                <dt>Septaria</dt>
                <dd>
                  <img src="@/assets/img/common/mirage/ico-24-septaria.webp" :width="!isMobile ? 24 : 20" />
                  <p>0</p>
                </dd>
              </dl>
              <ul class="job">
                <li data-character-class="1" data-character-grade="1"></li>
                <li data-character-class="2" data-character-grade="1"></li>
                <li data-character-class="3" data-character-grade="1"></li>
                <li data-character-class="4" data-character-grade="1"></li>
                <li data-character-class="5" data-character-grade="1"></li>
                <li class="percent none">0%</li>
              </ul>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="playnow-content">
            <ul class="char-list">
              <li>
                <mirage-character :status="2" :characterClass="1" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="2" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="3" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="4" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="5" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="playnow">
          <v-expansion-panel-header class="playnow-header">
            <div class="top">
              <div class="top-left">
                <div class="title">Snake Pit</div>
              </div>
              <div class="top-right">
                <p><span>45</span>/50</p>
                <v-tooltip content-class="mirage-tooltip-playnow" max-width="320" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">icon</v-icon>
                  </template>
                  <div class="tooltip-wrap">
                    <p>The total number of Character NFT slots available for staking in this Hidden Valley.</p>
                  </div>
                </v-tooltip>
              </div>
            </div>
            <div class="bottom">
              <dl class="rate">
                <dt>Mining Rate (E)</dt>
                <dd>
                  <p>0<span>%</span></p>
                </dd>
              </dl>
              <dl class="amount">
                <dt>Mined Amount (E)</dt>
                <dd>
                  <img src="@/assets/img/common/mirage/ico-24-darksteel.webp" :width="!isMobile ? 24 : 20" />
                  <p>0</p>
                </dd>
              </dl>
              <dl class="septaria">
                <dt>Septaria</dt>
                <dd>
                  <img src="@/assets/img/common/mirage/ico-24-septaria.webp" :width="!isMobile ? 24 : 20" />
                  <p>0</p>
                </dd>
              </dl>
              <ul class="job">
                <li data-character-class="1" data-character-grade="1"></li>
                <li data-character-class="2" data-character-grade="1"></li>
                <li data-character-class="3" data-character-grade="1"></li>
                <li data-character-class="4" data-character-grade="1"></li>
                <li data-character-class="5" data-character-grade="1"></li>
                <li class="percent none">-%</li>
              </ul>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="playnow-content">
            <ul class="char-list">
              <li>
                <mirage-character :status="2" :characterClass="1" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="2" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="3" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="4" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="5" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="playnow">
          <v-expansion-panel-header class="playnow-header">
            <div class="top">
              <div class="top-left">
                <div class="title">Bicheon</div>
              </div>
              <div class="top-right">
                <p><span>495</span>/500</p>
                <v-tooltip content-class="mirage-tooltip-playnow" max-width="320" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">icon</v-icon>
                  </template>
                  <div class="tooltip-wrap">
                    <p>The total number of Character NFT slots available for staking in this Hidden Valley.</p>
                  </div>
                </v-tooltip>
              </div>
            </div>
            <div class="bottom">
              <dl class="rate">
                <dt>Mining Rate (E)</dt>
                <dd>
                  <p>0<span>%</span></p>
                </dd>
              </dl>
              <dl class="amount">
                <dt>Mined Amount (E)</dt>
                <dd>
                  <img src="@/assets/img/common/mirage/ico-24-darksteel.webp" :width="!isMobile ? 24 : 20" />
                  <p>0</p>
                </dd>
              </dl>
              <dl class="septaria">
                <dt>Septaria</dt>
                <dd>
                  <img src="@/assets/img/common/mirage/ico-24-septaria.webp" :width="!isMobile ? 24 : 20" />
                  <p>0</p>
                </dd>
              </dl>
              <ul class="job">
                <li data-character-class="1" data-character-grade="1"></li>
                <li data-character-class="2" data-character-grade="1"></li>
                <li data-character-class="3" data-character-grade="1"></li>
                <li data-character-class="4" data-character-grade="1"></li>
                <li data-character-class="5" data-character-grade="1"></li>
                <li class="percent none">-%</li>
              </ul>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="playnow-content">
            <ul class="char-list">
              <li>
                <mirage-character :status="2" :characterClass="1" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="2" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="3" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="4" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="5" :characterGrade="1" :disabledButton="true" buttonType="disabled" />
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <!-- locked 구간 result -->
      <div class="result disabled">
        <div class="result-header">
          <div class="header-wrap">
            <div class="dh-wrap">
              <h3 class="title">Latest Result</h3>
              <div>
                <p class="day">Day 1 /</p>
                <p class="half">2nd Half</p>
              </div>
            </div>
          </div>
        </div>
        <div class="result-contents">
          <p><span>결과 보고서 작성중 입니다.</span>Result report will updated at Mar. 6th 2022 01:00 UTC+8</p>
        </div>
      </div>
    </template>

    <template v-else>
      <v-expansion-panels class="playnow-wrap" v-model="panel" accordion multiple>
        <v-expansion-panel class="playnow">
          <v-expansion-panel-header class="playnow-header">
            <div class="top">
              <div class="top-left">
                <div class="title">Red Moon</div>
              </div>
              <div class="top-right">
                <p><span>5</span>/5</p>
                <v-tooltip content-class="mirage-tooltip-playnow" max-width="320" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">icon</v-icon>
                  </template>
                  <div class="tooltip-wrap">
                    <p>The total number of Character NFT slots available for staking in this Hidden Valley.</p>
                  </div>
                </v-tooltip>
              </div>
            </div>
            <div class="bottom">
              <dl class="rate">
                <dt>Mining Rate (E)</dt>
                <dd>
                  <p>100<span>%</span></p>
                </dd>
              </dl>
              <dl class="amount">
                <dt>Mined Amount (E)</dt>
                <dd>
                  <img src="@/assets/img/common/mirage/ico-24-darksteel.webp" :width="!isMobile ? 24 : 20" />
                  <p>75,000,000</p>
                </dd>
              </dl>
              <dl class="septaria">
                <dt>Septaria</dt>
                <dd>
                  <img src="@/assets/img/common/mirage/ico-24-septaria.webp" :width="!isMobile ? 24 : 20" />
                  <p>14</p>
                </dd>
              </dl>
              <ul class="job">
                <li data-character-class="1" data-character-grade="5"></li>
                <li data-character-class="2" data-character-grade="4"></li>
                <li data-character-class="3" data-character-grade="3"></li>
                <li data-character-class="4" data-character-grade="2"></li>
                <li data-character-class="5" data-character-grade="1"></li>
                <li class="percent">7%</li>
              </ul>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="playnow-content">
            <ul class="char-list">
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="5"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="2"
                  :characterGrade="4"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="3"
                  :characterGrade="3"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="4"
                  :characterGrade="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="5" :characterGrade="1" buttonType="reinforce" />
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="playnow">
          <v-expansion-panel-header class="playnow-header">
            <div class="top">
              <div class="top-left">
                <div class="title">Snake Pit</div>
              </div>
              <div class="top-right">
                <p><span>45</span>/50</p>
                <v-tooltip content-class="mirage-tooltip-playnow" max-width="320" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">icon</v-icon>
                  </template>
                  <div class="tooltip-wrap">
                    <p>The total number of Character NFT slots available for staking in this Hidden Valley.</p>
                  </div>
                </v-tooltip>
              </div>
            </div>
            <div class="bottom">
              <dl class="rate">
                <dt>Mining Rate (E)</dt>
                <dd>
                  <p>-<span>%</span></p>
                </dd>
              </dl>
              <dl class="amount">
                <dt>Mined Amount (E)</dt>
                <dd>
                  <img src="@/assets/img/common/mirage/ico-24-darksteel.webp" :width="!isMobile ? 24 : 20" />
                  <p>-</p>
                </dd>
              </dl>
              <dl class="septaria">
                <dt>Septaria</dt>
                <dd>
                  <img src="@/assets/img/common/mirage/ico-24-septaria.webp" :width="!isMobile ? 24 : 20" />
                  <p>-</p>
                </dd>
              </dl>
              <ul class="job">
                <li data-character-class="1" data-character-grade="1"></li>
                <li data-character-class="2" data-character-grade="1"></li>
                <li data-character-class="3" data-character-grade="1"></li>
                <li data-character-class="4" data-character-grade="1"></li>
                <li data-character-class="5" data-character-grade="1"></li>
                <li class="percent none">-%</li>
              </ul>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="playnow-content">
            <ul class="char-list">
              <li>
                <mirage-character :status="2" :characterClass="1" :characterGrade="1" buttonType="reinforce" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="2" :characterGrade="1" buttonType="reinforce" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="3" :characterGrade="1" buttonType="reinforce" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="4" :characterGrade="1" buttonType="reinforce" />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="5" :characterGrade="1" buttonType="reinforce" />
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel class="playnow">
          <v-expansion-panel-header class="playnow-header">
            <div class="top">
              <div class="top-left">
                <div class="title">Bicheon</div>
              </div>
              <div class="top-right">
                <p><span>500</span>/500</p>
                <v-tooltip content-class="mirage-tooltip-playnow" max-width="320" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">icon</v-icon>
                  </template>
                  <div class="tooltip-wrap">
                    <p>The total number of Character NFT slots available for staking in this Hidden Valley.</p>
                  </div>
                </v-tooltip>
              </div>
            </div>
            <div class="bottom">
              <dl class="rate">
                <dt>Mining Rate (E)</dt>
                <dd>
                  <p>100<span>.34%</span></p>
                </dd>
              </dl>
              <dl class="amount">
                <dt>Mined Amount (E)</dt>
                <dd>
                  <img src="@/assets/img/common/mirage/ico-24-darksteel.webp" :width="!isMobile ? 24 : 20" />
                  <p>75,000,000</p>
                </dd>
              </dl>
              <dl class="septaria">
                <dt>Septaria</dt>
                <dd>
                  <img src="@/assets/img/common/mirage/ico-24-septaria.webp" :width="!isMobile ? 24 : 20" />
                  <p>14</p>
                </dd>
              </dl>
              <ul class="job">
                <li data-character-class="1" data-character-grade="2"></li>
                <li data-character-class="2" data-character-grade="2"></li>
                <li data-character-class="3" data-character-grade="2"></li>
                <li data-character-class="4" data-character-grade="2"></li>
                <li data-character-class="5" data-character-grade="1"></li>
                <li class="percent">5%</li>
              </ul>
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="playnow-content">
            <ul class="char-list">
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="1"
                  :characterGrade="5"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="2"
                  :characterGrade="4"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="3"
                  :characterGrade="3"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                />
              </li>
              <li>
                <mirage-character
                  characterName="캐릭터이르으음"
                  :status="1"
                  :characterClass="4"
                  :characterGrade="2"
                  :mirageScore="253130"
                  :mirageScoreChange="3.32"
                />
              </li>
              <li>
                <mirage-character :status="2" :characterClass="5" :characterGrade="1" buttonType="reinforce" />
              </li>
            </ul>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <!-- 집계가 끝났을 경우 -->
      <div class="result">
        <div class="result-header">
          <div class="header-wrap">
            <p class="stand">March. 5th 2022 00:00 UTC+8</p>
            <div class="dh-wrap">
              <h3 class="title">Latest Result</h3>
              <div>
                <p class="day">Day 1 /</p>
                <p class="half">2nd Half</p>
              </div>
            </div>
          </div>
          <button type="button" class="btn-mirage btn-primary"><span>Ranking</span></button>
        </div>
        <div class="result-contents">
          <div class="ra-wrap">
            <dl class="rate">
              <dt>Mining Rate</dt>
              <dd>
                <p>31<span>.05%</span></p>
                <v-tooltip content-class="mirage-tooltip-playnow" attach=".result-contents dd" max-width="320" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">icon</v-icon>
                  </template>
                  <div class="tooltip-wrap">
                    <p>The total number of Character NFT slots available for staking in this Hidden Valley.</p>
                  </div>
                </v-tooltip>
              </dd>
            </dl>
            <dl class="amount">
              <dt>Mining Amount</dt>
              <dd>
                <img src="@/assets/img/common/mirage/ico-24-darksteel.webp" width="24" />
                <p>150,845,122</p>
                <v-tooltip content-class="mirage-tooltip-playnow" attach=".result-contents dd" max-width="320" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">icon</v-icon>
                  </template>
                  <div class="tooltip-wrap">
                    <p>The total number of Character NFT slots available for staking in this Hidden Valley.</p>
                  </div>
                </v-tooltip>
              </dd>
            </dl>
          </div>
          <div class="bsb-wrap">
            <dl class="bonus">
              <dt>Ranking Bonus</dt>
              <dd>
                <img src="@/assets/img/common/mirage/ico-24-darksteel.webp" width="24" />
                <p>145,122</p>
                <v-tooltip content-class="mirage-tooltip-playnow" attach=".result-contents dd" max-width="320" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">icon</v-icon>
                  </template>
                  <div class="tooltip-wrap">
                    <p>The total number of Character NFT slots available for staking in this Hidden Valley.</p>
                  </div>
                </v-tooltip>
              </dd>
            </dl>
            <dl class="septaria">
              <dt>Septaria</dt>
              <dd>
                <img src="@/assets/img/common/mirage/ico-24-septaria-black.webp" width="24" />
                <p>72</p>
                <v-tooltip content-class="mirage-tooltip-playnow" attach=".result-contents dd" max-width="320" top>
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon v-bind="attrs" v-on="on">icon</v-icon>
                  </template>
                  <div class="tooltip-wrap">
                    <p>The total number of Character NFT slots available for staking in this Hidden Valley.</p>
                  </div>
                </v-tooltip>
              </dd>
            </dl>
            <button type="button" class="btn-mirage btn-more">More</button>
          </div>
        </div>
      </div>

      <!-- 집계중일 경우 -->
      <div class="result">
        <div class="result-header">
          <div class="header-wrap">
            <div class="dh-wrap">
              <h3 class="title">Latest Result</h3>
              <div>
                <p class="day">Day 1 /</p>
                <p class="half">2nd Half</p>
              </div>
            </div>
          </div>
        </div>
        <div class="result-contents">
          <p><span>결과 보고서 작성중 입니다.</span>Result report will updated at Mar. 6th 2022 01:00 UTC+8</p>
        </div>
      </div>

      <!-- unlocked 인 경우 -->
      <div class="result disabled">
        <div class="result-header">
          <div class="header-wrap">
            <p class="stand">March. 5th 2022 00:00 UTC+8</p>
            <div class="dh-wrap">
              <h3 class="title">Latest Result</h3>
              <div>
                <p class="day">Day 1 /</p>
                <p class="half">2nd Half</p>
              </div>
            </div>
          </div>
          <button type="button" class="btn-mirage btn-primary"><span>Ranking</span></button>
        </div>
        <div class="result-contents">
          <p><span>전투에 참가하지 않았습니다.</span></p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';
import MirageCountdown from '@/components-ui/desktop/MirageCountdown';
import MirageCharacter from '@/components-ui/common/MirageCharacter';

export default defineComponent({
  name: 'MirageHiddenValleyCapture',
  components: {
    MirageCountdown,
    MirageCharacter,
  },
  props: {
    isLocked: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
    panel: [0, 1],
    readonly: false,
  }),
  methods: {
    //
  },
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-hidden-valley-capture';
@import '~@/assets/sass/components/mirage-hidden-valley-play';
</style>
