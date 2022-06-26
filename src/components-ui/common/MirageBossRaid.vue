<template>
  <section class="mirage-boss-raid">
    <div class="mirage-boss-raid__header">
      <h2 class="section-tit">{{ t('t.mirage.boss-raid') }}</h2>
      <p class="txt-notice">Round 13 <em>‘Horang the Mad Stable Keeper’</em> is on going Now</p>
    </div>
    <div class="mirage-boss-raid__body">
      <div class="wrap-boss eunsil" data-boss-name="eunsil">
        <div class="boss-header">
          <div class="info-boss"><em>EUNSIL</em>THE LUNATIC TAILOR</div>
          <div class="info-round">ROUND<em class="round-num">14</em></div>
        </div>
        <div class="boss-bottom">
          <div class="info-entry" v-if="isOnGoing">
            <div class="info-time" :class="{ 'is--locked': isBreakTime }">
              <div class="info-time-msg">
                <p v-if="isBreakTime">Break Time</p>
                <p v-else>Recruiting Raiders now</p>
              </div>
              <mirage-countdown
                targetDate="2022-02-28T00:00:00"
                class="hidden-day hidden-second"
                :dark="isBreakTime"
                themePurple
                :smaller="!isMobile"
              />
              <span class="icon-locked" v-if="isBreakTime">locked</span>
            </div>
            <router-link to="/ui-mirage-boss-raid-detail" class="btn btn-sm btn-mirage btn-bid">ENTER</router-link>
          </div>
          <div class="box-toast" v-else>
            <span class="toast-date">Next round will start on Apr 6th, 2022 18:00 UTC+8</span>
            <span class="toast-msg">‘EUNSIL’ must be return</span>
          </div>
        </div>
      </div>
      <div class="wrap-boss horang" data-boss-name="horang">
        <div class="boss-header">
          <div class="info-boss"><em>HORANG</em>THE MAD STABLE KEEPER</div>
          <div class="info-round">ROUND<em class="round-num">13</em></div>
        </div>
        <div class="boss-bottom">
          <div class="info-entry" v-if="isOnGoing">
            <div class="info-time" :class="{ 'is--locked': isBreakTime }">
              <div class="info-time-msg">
                <p v-if="isBreakTime">Break Time</p>
                <p v-else>Recruiting Raiders now</p>
              </div>
              <mirage-countdown
                targetDate="2022-02-28T00:00:00"
                class="hidden-day hidden-second"
                :dark="isBreakTime"
                themePurple
                :smaller="!isMobile"
              />
              <span class="icon-locked" v-if="isBreakTime">locked</span>
            </div>
            <router-link to="/ui-mirage-boss-raid-detail" class="btn btn-sm btn-mirage btn-bid">ENTER</router-link>
          </div>
          <div class="box-toast" v-else>
            <span class="toast-date">Next round will start on Apr 6th, 2022 18:00 UTC+8</span>
            <span class="toast-msg">‘HORANG’ will come.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import MobileDetect from 'mobile-detect';
import MirageCountdown from '@/components-ui/desktop/MirageCountdown';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'MirageBossRaid',
  components: {
    MirageCountdown,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    md: new MobileDetect(window.navigator.userAgent),
  }),
  props: {
    isOnGoing: {
      type: Boolean,
      required: false,
    },
    isBreakTime: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
  },
  setup() {
    return {
      ...useI18n(),
    };
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-boss-raid';
@import '~@/assets/sass/components/mirage-button';
</style>
