<template>
  <div class="mirage-character" :data-character-grade="`${character.grade}`">
    <h2 class="mirage-character__name" v-if="!hideCharacterName">
      <span>{{ character.CharacterName }}</span>
    </h2>
    <div class="wrap-info">
      <div class="wrap-rank">
        <div class="mirage-character__rank" v-if="Number(currentRank) > 0">
          <em class="level-rank">{{ currentRank }}</em>
          <span class="change plus">{{ 1 }}</span>
        </div>
        <div class="mirage-character__rank" v-if="Number(beforeRank) > 0">
          <em class="level-rank2">{{ beforeRank }}</em>
          <span class="change minus">{{ 1 }}</span>
        </div>
      </div>
      <div class="mirage-character__damage">
        <span class="wound" v-if="1 < Number(character.State)"></span>
        <span class="scissors" v-if="character.BuffType && character.BuffType === 11"></span>
        <span class="stink" v-if="character.BuffType && character.BuffType === 12"></span>
      </div>
    </div>
    <div class="mirage-character__enlisted" v-if="false && character.State === 1">Enlisted</div>
    <div
      class="mirage-character__class"
      :data-character-class="klass || character.Class"
      :data-character-status="`${character.State || MirageCharacterState.ENLISTED}`"
    ></div>
    <dl class="mirage-character__score" v-if="character.MirageScore">
      <dt class="hidden">MIRAGE Score</dt>
      <dd>
        <div class="group-score">
          <img src="@/assets/img/common/mirage-character/ico-miragescore.webp" width="16" alt="score" />
          <span class="point">{{ character.MirageScore | currency(0) }}</span>
          <span class="change plus" v-if="computedBonus > 0">
            <em ref="mirageScoreChange">+{{ computedBonus | currency(0) }}</em
            >%
          </span>
        </div>
        <div class="mirax" v-if="character.MiraX">
          <span>MiraX</span>
          <span class="volume">{{ character.MiraX }}</span>
        </div>
      </dd>
    </dl>
    <!-- <div class="mirage-character__display">
    </div> -->

    <div class="mirage-character__status" :data-character-status="character.WoundType"></div>
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
import { defineComponent } from '@vue/composition-api';
import { getCharacterGrade } from '@/composables/mirage';
import useI18n from '@/utils/useI18n';
import { computed } from '@vue/composition-api/dist/vue-composition-api';
import BigNumber from 'bignumber.js';

export default defineComponent({
  name: 'MirageBossRaidCharacter',
  props: {
    klass: {
      type: String,
      default: '',
    },
    character: {
      type: Object,
      default: () => ({}),
    },
    currentRank: {
      type: String,
      default: '0',
    },
    beforeRank: {
      type: String,
      default: '0',
    },
    hideCharacterName: {
      type: Boolean,
      default: false,
    },
  },
  setup({ character }) {
    const computedMirageScore = computed(() => {
      return new BigNumber(character.CombatPoint)
        .plus(new BigNumber(character.MiraX || '0'))
        .pow(2)
        .div(100000)
        .toNumber();
    });

    const computedBonus = computed(() => {
      const mirax = new BigNumber(character.MiraX || '0');
      const orgScore = new BigNumber(character.CombatPoint)
        .plus(mirax.isGreaterThan(100000) ? 100000 : mirax)
        .pow(2)
        .div(100000);
      const mirageScore = new BigNumber(character.MirageScore);
      return (Math.round(mirageScore.minus(orgScore).div(orgScore).toNumber() * 100) / 100) * 100;
    });

    const computedGrade = getCharacterGrade(character.CombatPoint);

    return {
      ...useI18n(),
      computedMirageScore,
      computedBonus,
      computedGrade,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/components/mirage-button';
@import '~@/assets/sass/components/mirage-character';
</style>
