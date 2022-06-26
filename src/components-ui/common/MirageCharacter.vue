<template>
  <div class="mirage-character" :data-character-grade="characterGrade">
    <h2 class="mirage-character__name">
      <span v-if="characterName">{{ characterName }}</span>
    </h2>
    <div class="wrap-info">
      <div class="wrap-rank">
        <div class="mirage-character__rank" v-if="rank">
          <em class="level-rank">{{ rank }}</em>
          <span class="change" ref="rankChange">{{ rankChange }}</span>
        </div>
        <div class="mirage-character__rank" v-if="rank2">
          <em class="level-rank2">{{ rank2 }}</em>
          <span class="change" ref="rank2Change">{{ rank2Change }}</span>
        </div>
      </div>
      <div class="mirage-character__damage">
        <span class="wound" v-if="takeDamage"></span>
        <span class="scissors" v-if="curseScissors"></span>
        <span class="stink" v-if="curseStink"></span>
      </div>
    </div>
    <div class="mirage-character__enlisted" v-if="enlisted">Enlisted</div>
    <div class="mirage-character__class" :data-character-class="characterClass" :data-character-status="status"></div>
    <dl class="mirage-character__score" v-if="mirageScore">
      <dt class="hidden">MIRAGE Score</dt>
      <dd>
        <div class="group-score">
          <img src="@/assets/img/common/mirage-character/ico-miragescore.webp" width="16" alt="score" />
          <span class="point">{{ mirageScore | currency(2) }}</span>
          <span class="change" v-if="mirageScoreChange">
            <em ref="mirageScoreChange">{{ mirageScoreChange }}</em
            >%
          </span>
        </div>
        <div class="mirax" v-if="miraX">
          <span>MiraX</span>
          <span class="volume">{{ miraX }}</span>
        </div>
      </dd>
    </dl>
    <!-- <div class="mirage-character__display">
    </div> -->

    <div class="mirage-character__status" :data-character-status="status" v-if="showStatusString">{{ statusString }}</div>
    <vue-countdown
      class="mirage-character__cooltime"
      :time="convertCooltime"
      v-slot="{ days, hours, minutes }"
      @end="onCooltimeEnd"
      v-if="endCooltime"
    >
      {{ days }}d {{ hours }}h {{ minutes }}m
    </vue-countdown>
    <!-- <hr /> -->
    <dl class="mirage-character__bonus" v-if="rankingBonus">
      <dt>Ranking Bonus</dt>
      <dd>
        <img src="@/assets/img/common/mirage-character/ico-darksteel.webp" width="16" alt="Darksteel" />
        <span>{{ rankingBonus | currency(2) }}</span>
      </dd>
    </dl>
    <div class="wrap-button" v-if="buttonType">
      <button type="button" class="btn-mirage" :class="`btn-${buttonType}`" :disabled="disabledButton">
        <span v-if="buttonType === 'primary'">Seal</span>
        <span v-if="buttonType === 'recover'">Recover</span>
        <span v-if="buttonType === 'reinforce'">Reinforce</span>
        <span v-if="buttonType === 'assault'">Assault</span>
        <span v-if="buttonType === 'enlisted'">Enlisted<br />Valley02/Red Moon</span>
        <span class="volume" v-if="!disabledButton && buttonType !== 'enlisted'">
          <img src="@/assets/img/common/mirage-character/ico-energy.webp" width="20" height="20" alt="Energy" />
          <em>5</em>
        </span>
      </button>
    </div>
    <div class="mirage-character__sealed-time" v-if="endSealedTime">
      <span>Can be sealed after</span>
      <vue-countdown :time="convertSealedTime" v-slot="{ days, hours, minutes }" @end="onSealedTimeEnd">
        {{ days }}d {{ hours }}h {{ minutes }}m
      </vue-countdown>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted } from '@vue/composition-api';
import VueCountdown from '@chenfengyuan/vue-countdown';

export default defineComponent({
  name: 'MirageCharacter',
  components: {
    VueCountdown,
  },
  props: {
    characterName: {
      type: String,
      required: false,
    },
    characterClass: {
      type: Number,
      required: false,
    },
    characterGrade: {
      type: Number,
      required: false,
      // default: () => 1,
    },
    enlisted: {
      type: Boolean,
      required: false,
      // default: () => false,
    },
    rank: {
      type: Number,
      required: false,
    },
    rankChange: {
      type: Number,
      required: false,
    },
    rank2: {
      type: Number,
      required: false,
    },
    rank2Change: {
      type: Number,
      required: false,
    },
    takeDamage: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    mirageScore: {
      type: Number,
      required: false,
    },
    mirageScoreChange: {
      type: Number,
      required: false,
    },
    miraX: {
      type: Number,
      required: false,
    },
    status: {
      type: Number,
      required: false,
      default: () => 0,
    },
    showStatusString: {
      type: Boolean,
      required: false,
    },
    endCooltime: {
      type: String,
      required: false,
    },
    endSealedTime: {
      type: String,
      required: false,
    },
    rankingBonus: {
      type: Number,
      required: false,
    },
    disabledButton: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    buttonType: {
      type: String,
      required: false,
    },
    curseScissors: {
      type: Boolean,
      required: false,
    },
    curseStink: {
      type: Boolean,
      required: false,
    },
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    statusString: '',
    hohoho: 'hohohoValue',
  }),
  computed: {
    convertCooltime() {
      const targetDate = new Date(this.endCooltime).getTime();
      return targetDate - new Date().getTime();
    },
    convertSealedTime() {
      const targetDate = new Date(this.endSealedTime).getTime();
      return targetDate - new Date().getTime();
    },
  },
  methods: {
    setChangeNum(input, targetRefs, disableAbs) {
      if (!input || typeof input !== 'number' || !targetRefs) {
        return;
      }
      const target = this.$refs[targetRefs];
      const changeClass = input > 0 ? 'plus' : 'minus';
      target.classList.add(changeClass);

      if (!disableAbs) {
        const inputAbs = Math.abs(input);
        target.textContent = inputAbs;
      }
    },
    convertStatus() {
      // eslint-disable-next-line default-case
      switch (this.status) {
        case 1:
          this.statusString = 'Roster';
          break;
        case 2:
          this.statusString = 'Battle';
          break;
        case 3:
          this.statusString = 'Slightly Injured';
          break;
        case 4:
          this.statusString = 'Seriously Injured';
          break;
        case 5:
          this.statusString = 'Critically Injured';
          break;
        default:
          this.statusString = 'Empty';
      }
    },

    // for Cooltime(countdown)
    onCooltimeEnd() {
      console.log('finish Cooltime');
    },

    // for Cooltime(countdown)
    onSealedTimeEnd() {
      console.log('finish SealedTime');
    },
  },
  mounted() {
    this.convertStatus();
    this.setChangeNum(this.rankChange, 'rankChange');
    this.setChangeNum(this.rank2Change, 'rank2Change');
    this.setChangeNum(this.mirageScoreChange, 'mirageScoreChange');
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/components/mirage-button';
@import '~@/assets/sass/components/mirage-character';
</style>
