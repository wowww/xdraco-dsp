<template>
  <div
    class="card card--nft"
    :class="{
      reverse: reverse,
      'card--xs': smaller === 'xs',
      'card--sm': smaller === 'sm',
    }"
    :aria-disabled-flip="flipped"
    :data-item-type="'item-grade-' + itemGrade"
    @click="flipDom"
  >
    <div class="card__inner">
      <div class="card__layer front">
        <span class="class" :class="characterClass">{{ characterClass }}</span>
        <dl class="level">
          <dt>Level</dt>
          <dd>103</dd>
        </dl>
        <div class="wrap-character">
          <img :src="require('@' + '/assets/img/common/card/' + characterClass + '-grade' + itemGrade + '.webp')" width="160" />
        </div>
        <div class="wrap-name">
          <dl class="name">
            <dt>Character Name</dt>
            <dd class="item-name">abcdeAbcdeAbcde</dd>
            <dt>Character Class</dt>
            <dd class="item-type">{{ characterClass }}</dd>
          </dl>
          <dl class="power-score" :class="{ mirage: isMirage }">
            <dt>score</dt>
            <dd>102,032</dd>
          </dl>
        </div>
        <hr class="card-divider" />
        <!-- <div class="nft-id">NFT ID 100020003000</div> -->
        <div class="display-score">
          <dt>{{ isMirage ? 'MIRAGE' : 'POWER' }} Score</dt>
          <dd :class="isMirage ? 'mirage' : 'power'">105,300</dd>
        </div>
      </div>
      <div id="cardLayerBack" class="card__layer back">
        <div class="back__inner">
          <p v-if="isDevelopment && flipped" style="position: absolute; top: 0; left: 0; width: 100%; font-size: 14px">aria-disabled-flip="true"</p>

          <!-- <dl class="power-score">
            <dt>Power Score</dt>
            <dd>87,760</dd>
          </dl> -->
          <div class="wrap-property">
            <dl class="property unique-number">
              <dt>NFT ID</dt>
              <dd>100020003000</dd>
            </dl>
            <dl class="property power-score">
              <dt>Power Score</dt>
              <dd>87,760</dd>
            </dl>
          </div>

          <div class="wrap-property" v-if="isMirage">
            <dl class="property power-score">
              <dt>MIRAGE Score</dt>
              <dd>187,760</dd>
            </dl>
            <dl class="property">
              <dt>MiraX</dt>
              <dd>510</dd>
            </dl>
            <dl class="property">
              <dt>NFT Enhancement</dt>
              <dd>+4</dd>
            </dl>
          </div>

          <div class="wrap-property">
            <h3 class="title-property">Options</h3>
            <dl class="property">
              <dt>HP</dt>
              <dd>38,501</dd>
            </dl>
            <dl class="property">
              <dt>MP</dt>
              <dd>7,320</dd>
            </dl>
            <dl class="property">
              <dt>ABCDEFGHIJABCDEFGHIJABCDE</dt>
              <dd>55.2%</dd>
            </dl>
            <dl class="property">
              <dt>가나다라마바사아자차가나다라마바사아자차가나다라마</dt>
              <dd>12%</dd>
            </dl>
            <dl class="property">
              <dt>Property</dt>
              <dd>Value</dd>
            </dl>
          </div>

          <!-- Additional Property -->
          <div class="wrap-property">
            <h3 class="title-property">Additional Options</h3>
            <dl class="property">
              <dt>Additional Props#1</dt>
              <dd>2,501</dd>
            </dl>
            <dl class="property">
              <dt>Additional Props#2</dt>
              <dd>403</dd>
            </dl>
            <dl class="property">
              <dt>Additional Props#3</dt>
              <dd>403</dd>
            </dl>
            <dl class="property">
              <dt>Additional Props#4</dt>
              <dd>403</dd>
            </dl>
          </div>

          <!-- 출처 -->
          <dl class="source">
            <dt>Minted by</dt>
            <dd>
              <p>Dec. 7, 2021 13:40 UTC+8</p>
            </dd>
          </dl>

          <div class="wrap-button">
            <router-link class="button" to="/viewmore">VIEW MORE</router-link>
            <!-- <button type="button" class="button" to="/viewmore">VIEW MORE</button> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
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
    cardType: {
      type: String,
      required: false,
    },
    characterClass: {
      type: String,
      required: true,
    },
    itemGrade: {
      type: Number,
      required: true,
    },
    smaller: {
      type: String,
      required: false,
    },
    isMirage: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  methods: {
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
  }),
  mounted() {
    // setLineBreak(DomSelector, Boolean(width or height), Breakpoint);
    this.setLineBreak('div.front .wrap-name .item-name', false, 40);
    this.setLineBreak('div.back .property dt', true, 140);
  },
};
</script>
<style lang="scss"></style>
