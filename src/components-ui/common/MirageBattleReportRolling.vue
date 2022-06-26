<template>
  <div class="mirage-battle-report rolling">
    <swiper ref="battleReport" class="list-report" :options="swiperOptions">
      <swiper-slide class="list-report-item" data-report-type="default">
        <img src="@/assets/img/common/mirage/ico-40-mirage.webp" class="icon-report" width="40" alt="" />
        <p class="report-desc">시즌이 종료되어, 모든 비곡에 캐릭터의 <em class="color-major">스테이킹이 해제</em>되었습니다.</p>
        <span class="report-time-stamp">1 hour ago</span>
      </swiper-slide>
      <swiper-slide class="list-report-item" data-report-type="damage">
        <img src="@/assets/img/common/mirage/ico-40-damage.webp" class="icon-report" width="40" alt="" />
        <p class="report-desc">
          '초계' 캐릭터의 난입으로, <em class="color-primary">적월</em> 비곡에 <em class="color-primary">'사르마티'</em> 캐릭터의
          <em class="color-major">스테이킹이 해제</em>되었으며, <em class="color-minor">경상</em>을 입었습니다.
        </p>
        <span class="report-time-stamp">Mar. 14, 2022 20:14 UTC+8</span>
      </swiper-slide>
      <swiper-slide class="list-report-item" data-report-type="damage">
        <img src="@/assets/img/common/mirage/ico-40-battle.webp" class="icon-report" width="40" alt="" />
        <p class="report-desc">
          <em class="color-primary">적월</em> 비곡에 <em class="color-primary">'사르마티'</em> 캐릭터를 난입시켜, '생령' 캐릭터를 키킹하고
          <em class="color-primary">난입 성공</em>했습니다. 12 Vigor 사용
        </p>
        <span class="report-time-stamp">Mar. 14, 2022 20:14 UTC+8</span>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css'; // (<= Swiper 5.x)

export default defineComponent({
  name: 'MirageBattleReportRolling',
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    //
  },
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
    swiperOptions: {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      loop: true,
      allowTouchMove: false,
      direction: 'vertical',
    },
  }),
  methods: {
    //
  },
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
    rollingBoard() {
      return this.$refs.battleReport.$swiper;
    },
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-battle-report';
</style>
