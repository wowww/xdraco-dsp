<template>
  <div class="mirage-hidden-valley-capture" :class="{ 'is-locked': isLocked }">
    <div class="valley-header">
      <h2 class="valley-title">Hidden Valley Capture</h2>
      <div class="valley-notice" v-if="isMobile">
        <img src="@/assets/img/common/mirage/ico-40-newseason.webp" class="valley-notice__icon" width="40" alt="" />
        <p class="valley-notice__desc">새로운 시즌이 시작되어 모든 캐릭터가 Roster로 복귀하였습니다.</p>
        <span class="valley-notice__date">Mar 2, 2022 12:09 PM</span>
      </div>
      <dl class="count-down">
        <div>
          <dt>Day</dt>
          <dd>
            <div class="wrap-flip">
              <span class="item-flip">0</span>
              <span class="item-flip">2</span>
            </div>
          </dd>
        </div>
        <div class="half">
          <dt><span class="icon-battle">1st Half</span></dt>
          <dd>
            <MirageCountdown targetDate="2022-02-28T00:00:00" class="hidden-day hidden-second" :dark="isLocked" :smaller="!isMobile" />
            <span class="icon-locked" v-if="isLocked">locked</span>
          </dd>
        </div>
      </dl>
    </div>
    <div class="valley-notice" v-if="!isMobile">
      <img src="@/assets/img/common/mirage/ico-40-newseason.webp" class="valley-notice__icon" width="40" alt="" />
      <p class="valley-notice__desc">새로운 시즌이 시작되어 모든 캐릭터가 Roster로 복귀하였습니다.</p>
      <span class="valley-notice__date">Mar 2, 2022 12:09 PM</span>
    </div>
    <div class="valley-content">
      <div class="server-item">
        <div class="server-title">Valley 01</div>
        <div class="server-info">
          <div class="capacity"><em>552</em>/555</div>
          <div class="class-info">
            <span class="class-info-title" v-html="$t('w.mirage.my-squadron')"></span>
            <ul class="list-class">
              <li data-character-class="1">
                <span class="logo">warrior</span>
                <em class="quantity">1</em>
              </li>
              <li data-character-class="2">
                <span class="logo">sorcerer</span>
                <em class="quantity">2</em>
              </li>
              <li data-character-class="3">
                <span class="logo">taoist</span>
                <em class="quantity">3</em>
              </li>
              <li data-character-class="5">
                <span class="logo">lancer</span>
                <em class="quantity">4</em>
              </li>
              <li data-character-class="4">
                <span class="logo">arbalist</span>
                <em class="quantity">5</em>
              </li>
            </ul>
          </div>
          <div class="wrap-btn">
            <button type="button" class="btn btn-sm btn-primary-mirage">ENTER</button>
          </div>
        </div>
      </div>
      <div class="server-item disabled">
        <div class="server-title">Valley 02</div>
        <div class="server-info">
          <div class="capacity"><em>552</em>/555</div>
          <div class="class-info">
            <span class="class-info-title" v-html="$t('w.mirage.my-squadron')"></span>
            <ul class="list-class">
              <li data-character-class="1">
                <span class="logo">warrior</span>
                <em class="quantity">-</em>
              </li>
              <li data-character-class="2">
                <span class="logo">sorcerer</span>
                <em class="quantity">-</em>
              </li>
              <li data-character-class="3">
                <span class="logo">taoist</span>
                <em class="quantity">-</em>
              </li>
              <li data-character-class="5">
                <span class="logo">lancer</span>
                <em class="quantity">-</em>
              </li>
              <li data-character-class="4">
                <span class="logo">arbalist</span>
                <em class="quantity">-</em>
              </li>
            </ul>
          </div>
          <div class="wrap-btn">
            <button type="button" disabled class="btn btn-sm btn-primary-mirage">{{ $t('w.mirage-playbook.coming-soon') }}</button>
          </div>
        </div>
      </div>
      <div class="server-item">
        <div class="server-title">Valley 01</div>
        <div class="server-info">
          <div class="capacity"><em>552</em>/555</div>
          <div class="class-info">
            <span class="class-info-title" v-html="$t('w.mirage.my-squadron')"></span>
            <ul class="list-class">
              <li data-character-class="1">
                <span class="logo">warrior</span>
                <em class="quantity">1</em>
              </li>
              <li data-character-class="2">
                <span class="logo">sorcerer</span>
                <em class="quantity">2</em>
              </li>
              <li data-character-class="3">
                <span class="logo">taoist</span>
                <em class="quantity">3</em>
              </li>
              <li data-character-class="5">
                <span class="logo">lancer</span>
                <em class="quantity">4</em>
              </li>
              <li data-character-class="4">
                <span class="logo">arbalist</span>
                <em class="quantity">5</em>
              </li>
            </ul>
          </div>
          <div class="wrap-btn">
            <button type="button" class="btn btn-sm btn-primary-mirage">ENTER</button>
          </div>
        </div>
      </div>
      <div class="server-item empty" v-if="!isMobile"></div>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';
import MirageCountdown from '@/components-ui/desktop/MirageCountdown';

export default defineComponent({
  name: 'MirageHiddenValleyCapture',
  components: {
    MirageCountdown,
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
</style>
