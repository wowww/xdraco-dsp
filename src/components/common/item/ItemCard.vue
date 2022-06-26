<template>
  <div
    ref="card"
    class="card"
    :class="{
      'card--collectible': collectible,
      reverse: reverse,
      'card--xs': smaller === 'xs',
      'card--sm': smaller === 'sm',
    }"
    :aria-disabled-flip="useLink || preventFlip ? 'true' : 'false'"
    :data-item-type="`item-grade-${item.grade}`"
    @click="onCardClick"
  >
    <div class="card__inner">
      <div class="card__layer front">
        <span class="by-what" :class="{ draco: item.uniqueNo === '', 'draco-nft': item.uniqueNo && item.uniqueNo !== '' }"></span>
        <div class="wrap-item">
          <img v-if="item.imgPath || item.itemPath" :src="item.imgPath || item.itemPath" class="item" :width="isMobile ? 128 : 140" alt="" />
        </div>
        <dl class="power-score" v-if="item.powerScore > 0">
          <dt>score</dt>
          <dd>{{ item.powerScore | currency(0) }}</dd>
        </dl>
        <div class="wrap-badge" v-if="['2', '3', '4', '20'].includes(item.itemType.split('_')[0])">
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
            <dd class="item-name">{{ item.itemName || item.name || '' }}</dd>
            <dt>Item Type</dt>
            <dd class="item-type" v-if="!hideItemType">
              {{ t(`w.exd.item-type.${item.itemType}`, [item.class > 0 ? $t(`w.rounds.item.class.${item.class}`) : '']) }}
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
            <template v-if="item.options && item.options.length !== 0">
              <dl
                class="property"
                v-for="({ optionName, optionValue }, optionIdx) in item.options.filter((item) => !!item.optionValue)"
                :key="`exd-item-${item.name}-${optionIdx}`"
              >
                <dt>{{ optionName }}</dt>
                <dd>{{ optionValue }}</dd>
              </dl>
            </template>
          </div>

          <!-- Additional Property -->
          <div class="wrap-property" v-if="item.randomOptions && item.randomOptions.length !== 0">
            <dl
              class="property"
              v-for="({ optionName, optionValue }, optionIdx) in item.randomOptions.filter((item) => !!item.optionValue)"
              :key="`dsp-item-${item.name}-random-${optionIdx}`"
            >
              <dt>{{ optionName }}</dt>
              <dd>{{ optionValue }}</dd>
            </dl>
          </div>

          <div class="wrap-property" v-if="item.addOptions && item.addOptions.length !== 0">
            <dl
              class="property"
              v-for="({ optionName, optionValue }, optionIdx) in item.addOptions.filter((item) => !!item.optionValue)"
              :key="`dsp-item-${item.name}-add-${optionIdx}`"
            >
              <dt>{{ optionName }}</dt>
              <dd>{{ optionValue }}</dd>
            </dl>
          </div>

          <!-- 아이템 옵션이 없는 경우 -->
          <div
            class="wrap-property mb-6"
            :class="{ 'mt-0': item.options && item.randomOptions && item.options.length === 0 && item.randomOptions.length === 0 }"
            v-if="
              item.itemType === '17_2' && item.passiveOption && (item.passiveOption.name || item.passiveOption.desc || item.passiveOption.petOrigin)
            "
          >
            <dl class="property">
              <dt>{{ item.passiveOption.petOrigin }}</dt>
              <dd></dd>
            </dl>
          </div>

          <dl
            class="no-options"
            v-if="
              item.itemType === '17_2' && item.passiveOption && (item.passiveOption.name || item.passiveOption.desc || item.passiveOption.petOrigin)
            "
          >
            <dt>{{ item.passiveOption.name }}</dt>
            <dd v-html="item.passiveOption.desc"></dd>
          </dl>

          <dl class="no-options" v-if="item.itemNote">
            <dt></dt>
            <dd v-html="item.itemNote"></dd>
          </dl>

          <dl class="source" v-if="useInfo" v-show="false">
            <dt>From</dt>
            <dd>
              <router-link :to="`/exd/item/${item.itemUID}`">Go Detail</router-link>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUpdated, ref, watch } from '@vue/composition-api';
import { useMobile } from '@/composables/common';
import useI18n from '@/utils/useI18n';
import { UniqueDict } from '@/constants/exchange';

export default defineComponent({
  name: 'ItemCard',
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    useLink: {
      type: Boolean,
      default: false,
    },
    preventFlip: {
      type: Boolean,
      default: false,
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
    collectible: {
      type: Boolean,
      default: false,
    },
    useInfo: {
      type: Boolean,
      default: false,
    },
    hideItemType: {
      type: Boolean,
      default: false,
    },
  },
  setup({ item, collectible, useLink }, { root }) {
    const { isMobile } = useMobile();
    const card = ref(null);
    const classList = ['Warrior', 'Sorcerer', 'Taoist', 'Lancer', 'Arbalist']; // 1,2,3,5,4

    const checkClassAriaEnabled = (itemClass, className) => {
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
    };

    const goToDetail = () => {
      const { $router } = root;
      if (collectible) {
        $router.push(`/collectibles/trade/${item.tradeUID}`);
      } else {
        $router.push(`/exd/trade/${item.tradeUID}`);
      }
    };
    const flipDom = () => {
      if (card.value.getAttribute('aria-disabled-flip') === 'true') {
        return;
      }
      if (!card.value.classList.contains('reverse')) {
        card.value.classList.add('reverse');
      } else {
        card.value.classList.remove('reverse');
      }
    };

    const onCardClick = () => {
      if (useLink) {
        goToDetail();
      } else {
        flipDom();
      }
    };

    const reset = () => {
      if (card.value.classList.contains('reverse')) {
        card.value.classList.remove('reverse');
      }
    };
    const setLineBreak = (selector, isWidth, breakpoint) => {
      if (!selector || !card.value.querySelector(selector)) {
        return;
      }
      if (isWidth === undefined) {
        isWidth = true;
      }
      if (!breakpoint) {
        breakpoint = 200;
      }

      const properties = card.value.querySelectorAll(selector);
      [].map.call(properties, (obj) => {
        const targetSize = isWidth ? obj.clientWidth : obj.clientHeight;

        if (targetSize >= breakpoint) {
          obj.classList.add('line-break');
        }
      });
    };

    onMounted(() => {
      setLineBreak('div.front .wrap-name .item-name', false, 40);
      setLineBreak('div.back .property dt', true, 140);
    });

    onUpdated(() => {
      setLineBreak('div.front .wrap-name .item-name', false, 40);
      setLineBreak('div.back .property dt', true, 140);
    });

    watch(
      () => item,
      () => {
        console.log('watch item');
        reset();
      },
    );

    return {
      ...useI18n(),
      isMobile,
      card,
      classList,
      checkClassAriaEnabled,
      UniqueDict,
      onCardClick,
    };
  },
});
</script>

<style lang="scss"></style>
