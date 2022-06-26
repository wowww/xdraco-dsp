<template>
  <div
    class="card"
    :class="{
      'card--collectible': !!item.uniqueNo,
      reverse: reverse,
      'card--xs': smaller === 'xs',
      'card--sm': smaller === 'sm',
    }"
    :aria-disabled-flip="flipped"
    :data-item-type="`item-grade-${item.grade}`"
    @click="flipDom"
  >
    <div class="card__inner">
      <div class="card__layer front">
        <p v-if="isDevelopment && flipped" style="position: absolute; top: 0; left: 0; width: 100%; font-size: 14px">aria-disabled-flip="true"</p>

        <span class="by-what" :class="{ draco: item.uniqueNo === '', 'draco-nft': item.uniqueNo !== '' }"></span>
        <div class="wrap-item">
          <img :src="item.itemPath" class="item" :width="md.mobile() ? 128 : 140" alt="" />
        </div>
        <dl class="power-score" v-if="item.powerScore > 0">
          <dt>score</dt>
          <dd>{{ item.powerScore | currency(0) }}</dd>
        </dl>
        <div class="wrap-badge" v-if="item.itemType < 11">
          <!-- [참고] 아래 Tier, Depth가 없는 케이스가 나올 수 있어 .badge에 v-if를 적용해야합니다 -->
          <dl class="badge tier">
            <dt>Tier</dt>
            <dd>{{ item.tier | roman }}</dd>
          </dl>
          <dl class="badge" v-if="item.tier > 0">
            <dt>Depth</dt>
            <dd>+{{ `${item.enhance || 0}` }}</dd>
          </dl>
        </div>
        <div class="wrap-name">
          <dl class="name">
            <dt>Item Name</dt>
            <dd class="item-name">{{ item.name }}</dd>
            <dt>Item Type</dt>
            <dd class="item-type">
              {{ t(`w.rounds.item.type.${item.itemType}`, [item.class > 0 ? $t(`w.rounds.item.class.${item.class}`) : '']) }}
            </dd>
            <dt>Unique Number</dt>
          </dl>
          <div class="unique-number" v-if="item.uniqueNo">{{ t('w.exd.unique.no.with-value', [item.uniqueNo || '-']) }}</div>
        </div>

        <div class="wrap-thumb">
          <div
            v-for="(classItem, classIdx) in classList"
            :key="`item-class-${classIdx}`"
            class="thumb"
            :class="[classItem.toLowerCase()]"
            :aria-enabled="checkClassAriaEnabled(item.class, classItem.toLowerCase())"
          >
            {{ classItem }}
          </div>
        </div>
      </div>
      <div id="cardLayerBack" class="card__layer back">
        <div class="back__inner">
          <p v-if="isDevelopment && flipped" style="position: absolute; top: 0; left: 0; width: 100%; font-size: 14px">aria-disabled-flip="true"</p>

          <div class="wrap-property">
            <dl class="property unique-number" v-if="item.uniqueNo">
              <dt>{{ t('w.exd.unique.no') }}</dt>
              <dd>{{ item.uniqueNo || '-' }}</dd>
            </dl>
            <dl class="property unique-number" v-if="item.uniqueNo">
              <dt>{{ t('w.collectible.limit-no') }}</dt>
              <dd>{{ item.limited || `#${UniqueDict[item.uniqueNo].idx} / ${UniqueDict[item.uniqueNo].count}` }}</dd>
            </dl>
            <dl class="property power-score" v-if="item.powerScore > 0">
              <dt>Power Score</dt>
              <dd>{{ item.powerScore | currency(0) }}</dd>
            </dl>
            <template v-if="item.options.length !== 0">
              <dl
                class="property"
                v-for="({ optionName, optionValue }, optionIdx) in item.options.filter((item) => !!item.optionValue)"
                :key="`dsp-item-${item.name}-${optionIdx}`"
              >
                <dt>{{ optionName }}</dt>
                <dd>{{ optionValue }}</dd>
              </dl>
            </template>
          </div>

          <!-- Additional Property -->
          <div class="wrap-property" v-if="item.randomOptions.length !== 0">
            <dl
              class="property"
              v-for="({ optionName, optionValue }, optionIdx) in item.randomOptions.filter((item) => !!item.optionValue)"
              :key="`dsp-item-${item.name}-random-${optionIdx}`"
            >
              <dt>{{ optionName }}</dt>
              <dd>{{ optionValue }}</dd>
            </dl>
          </div>

          <div class="wrap-property" v-if="UniqueDict[item.uniqueNo] && UniqueDict[item.uniqueNo].options">
            <dl
              class="property"
              v-for="({ optionName, optionValue }, optionIdx) in UniqueDict[item.uniqueNo].options"
              :key="`dsp-item-${item.name}-unique-${optionIdx}`"
            >
              <dt>{{ t(optionName) }}</dt>
              <dd>{{ optionValue }}</dd>
            </dl>
          </div>

          <!-- 아이템 옵션이 없는 경우 -->
          <div
            class="wrap-property mb-6"
            :class="{ 'mt-0': item.options.length === 0 && item.randomOptions.length === 0 }"
            v-if="item.itemType === 11 && item.passiveOption && (item.passiveOption.name || item.passiveOption.desc || item.passiveOption.petOrigin)"
          >
            <dl class="property">
              <dt>{{ item.passiveOption.petOrigin }}</dt>
              <dd></dd>
            </dl>
          </div>

          <dl
            class="no-options"
            v-if="item.itemType === 11 && item.passiveOption && (item.passiveOption.name || item.passiveOption.desc || item.passiveOption.petOrigin)"
          >
            <dt>{{ item.passiveOption.name }}</dt>
            <dd v-html="item.passiveOption.desc"></dd>
          </dl>

          <dl class="no-options" v-if="item.itemType === 12 && item.itemNote">
            <dt></dt>
            <dd v-html="item.itemNote"></dd>
          </dl>

          <!-- 출처 -->
          <dl class="source" v-show="false">
            <dt>From</dt>
            <dd>
              <p>2021년 11월 30일</p>
              <p>DSP Season1 Round1</p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';
import { defaultItem } from '@/components/dsp/round/round-utils';
import useI18n from '@/utils/useI18n';
import { UniqueDict } from '@/constants/exchange';

export default defineComponent({
  name: 'DspItemCard',
  props: {
    item: {
      type: Object,
      required: true,
      default: defaultItem(),
    },
    flipped: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    reverse: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    smaller: {
      type: String,
      required: false,
    },
  },
  setup() {
    const classList = ['Warrior', 'Sorcerer', 'Taoist', 'Lancer', 'Arbalist']; // 1,2,3,5,4

    return {
      classList,
      ...useI18n(),
      UniqueDict,
    };
  },
  methods: {
    checkClassAriaEnabled(itemClass, className) {
      switch (itemClass) {
        case 0:
          return true;
        case 1:
          return className === 'warrior';
        case 2:
          return className === 'sorcerer';
        case 3:
          return className === 'taoist';
        case 5:
          return className === 'lancer';
        case 4:
          return className === 'arbalist';
        default:
          return false;
      }
    },
    flipDom() {
      if (this.$el.getAttribute('aria-disabled-flip') === 'true') {
        return;
      }
      if (!this.$el.classList.contains('reverse')) {
        this.$el.classList.add('reverse');
      } else {
        this.$el.classList.remove('reverse');
      }
    },
    setLineBreak(selector, isWidth, breakpoint) {
      if (!selector || !this.$el.querySelector(selector)) {
        return;
      }
      if (isWidth === undefined) {
        isWidth = true;
      }
      if (!breakpoint) {
        breakpoint = 200;
      }

      const properties = this.$el.querySelectorAll(selector);
      [].map.call(properties, (obj) => {
        const targetSize = isWidth ? obj.clientWidth : obj.clientHeight;

        if (targetSize >= breakpoint) {
          obj.classList.add('line-break');
        }
      });
    },
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    md: new MobileDetect(window.navigator.userAgent),
  }),
  mounted() {
    // setLineBreak(DomSelector, Boolean(width or height), Breakpoint);
    this.setLineBreak('div.front .wrap-name .item-name', false, 40);
    this.setLineBreak('div.back .property dt', true, 140);
  },
  updated() {
    // setLineBreak(DomSelector, Boolean(width or height), Breakpoint);
    this.setLineBreak('div.front .wrap-name .item-name', false, 40);
    this.setLineBreak('div.back .property dt', true, 140);
  },
});
</script>

<style lang="scss"></style>
