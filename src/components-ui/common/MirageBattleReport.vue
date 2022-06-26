<template>
  <div class="mirage-battle-report">
    <ul class="list-report">
      <li data-report-type="gain">
        <img src="@/assets/img/common/mirage/img-mirgescroll-40.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          <div class="report-info">
            <span class="mode-name">BOSS RAID</span>
            <span class="server-name">Eunsil the Lunatic Tailor</span>
          </div>
          <em class="color-primary">‘Taoist-BR02’</em>이 <em class="color-primary">‘미라지 스크롤’</em>을 얻었습니다.
        </div>
        <span class="report-time-stamp">10분 전</span>
      </li>
      <li data-report-type="gain">
        <img src="@/assets/img/common/mirage/img-40-itembox.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          <div class="report-info">
            <span class="mode-name">BOSS RAID</span>
            <span class="server-name">Eunsil the Lunatic Tailor</span>
          </div>
          <em class="color-primary">‘Taoist-BR02’</em>이 <em class="color-primary">‘Lunatic Taoist Suite'</em>아이템을 획득했습니다.
        </div>
        <span class="report-time-stamp">10분 전</span>
      </li>
      <li data-report-type="newSeason">
        <img src="@/assets/img/common/mirage/ico-40-newseason.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          <div class="report-info">
            <span class="mode-name">HIDDEN VELLY CAPTURE</span>
          </div>
          새로운 시즌이 시작되고 모든 캐릭터가 Roster로 복귀하였습니다.
        </div>
        <span class="report-time-stamp">10분 전</span>
      </li>
      <li data-report-type="join">
        <img src="@/assets/img/common/mirage/ico-40-mirage-symbol.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          <div class="report-info">
            <span class="mode-name">HIDDEN VELLY CAPTURE</span>
            <span class="server-name">Valley03</span>
          </div>
          <em class="color-primary">‘비천’</em> 비곡에 <em class="color-primary">'사르마티'</em> 캐릭터가
          <em class="color-primary">참가</em> 했습니다.
        </div>
        <span class="report-time-stamp">10분 전</span>
      </li>
      <li data-report-type="left">
        <img src="@/assets/img/common/mirage/ico-40-mirage-symbol.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          <div class="report-info">
            <span class="mode-name">HIDDEN VELLY CAPTURE</span>
            <span class="server-name">Valley03</span>
          </div>
          <em class="color-primary">‘비천’</em> 비곡에 <em class="color-primary">'사르마티'</em> 캐릭터가
          <em class="color-primary">후퇴</em> 했습니다.
        </div>
        <span class="report-time-stamp">10분 전</span>
      </li>
      <li data-report-type="battle">
        <img src="@/assets/img/common/mirage/ico-40-battle.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          <div class="report-info">
            <span class="mode-name">HIDDEN VELLY CAPTURE</span>
            <span class="server-name">Valley01</span>
          </div>
          <em class="color-primary">‘적월’</em> 비곡의 <em class="color-primary">'사르마티'</em>가 <em class="color-primary">'생령'</em>에게
          <em class="color-major">치명상</em>을 입히고 <em class="color-primary">‘생령’</em>의 자리를 차지했습니다.
        </div>
        <span class="report-time-stamp">10분 전</span>
      </li>
      <li data-report-type="default">
        <img src="@/assets/img/common/mirage/ico-40-mirage.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">시즌이 종료되어, 모든 비곡에 캐릭터의 <em class="color-major">스테이킹이 해제</em>되었습니다.</div>
        <span class="report-time-stamp">1 hour ago</span>
      </li>
      <li data-report-type="increase">
        <img src="@/assets/img/common/mirage/ico-40-mirax.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          <em class="color-primary">Day2. 2nd Half</em>전투가 종료되어 <em class="color-primary">‘뱀골’</em> 비곡의
          <em class="color-primary">'도사007'</em>의 <em class="color-primary">MiraX</em>가 <em class="color-primary">510(+10)</em>으로 상승했습니다.
        </div>
        <span class="report-time-stamp">1 hour ago</span>
      </li>
      <li data-report-type="default">
        <img src="@/assets/img/common/mirage/ico-40-mirage.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          <em class="color-primary">뱀골</em> 비곡에 <em class="color-primary">'상백'</em>캐릭터를 <em class="color-primary">스테이킹</em> 했습니다. 8
          Vigor 사용
        </div>
        <span class="report-time-stamp">1 hour ago</span>
      </li>
      <li data-report-type="gain">
        <img src="@/assets/img/common/mirage/ico-40-septaria.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          <em class="color-primary">Valley 01. Day2. 2nd Half 종료</em>되어 <em class="color-primary">32 Septaria</em>를 획득했습니다.
        </div>
        <span class="report-time-stamp">Mar. 14, 2022 20:14 UTC+8</span>
      </li>
      <li data-report-type="gain">
        <img src="@/assets/img/common/mirage/ico-40-darksteel.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          <em class="color-primary">Valley 01. Day2. 2nd Half가 종료</em>되어 정산결과 <em class="color-primary">2,566,122 Darksteel</em>을
          획득하였습니다.
        </div>
        <span class="report-time-stamp">Mar. 14, 2022 20:14 UTC+8</span>
      </li>
      <li data-report-type="battle">
        <img src="@/assets/img/common/mirage/ico-40-battle.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          <em class="color-primary">적월</em> 비곡에 <em class="color-primary">'사르마티'</em> 캐릭터를 난입시켜, '생령' 캐릭터를 키킹하고
          <em class="color-primary">난입 성공</em>했습니다. 12 Vigor 사용
        </div>
        <span class="report-time-stamp">Mar. 14, 2022 20:14 UTC+8</span>
      </li>
      <li data-report-type="kick">
        <img src="@/assets/img/common/mirage/ico-40-kick.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          '생령' 캐릭터의 난입으로, <em class="color-primary">비천</em> 비곡에 <em class="color-primary">'천파'</em> 캐릭터가
          <em class="color-major">스테이킹 해제</em>되었습니다.
        </div>
        <span class="report-time-stamp">Mar. 14, 2022 20:14 UTC+8</span>
      </li>
      <li data-report-type="damage">
        <img src="@/assets/img/common/mirage/ico-40-damage.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          '초계' 캐릭터의 난입으로, <em class="color-primary">적월</em> 비곡에 <em class="color-primary">'사르마티'</em> 캐릭터의
          <em class="color-major">스테이킹이 해제</em>되었으며, <em class="color-minor">경상</em>을 입었습니다.
        </div>
        <span class="report-time-stamp">Mar. 14, 2022 20:14 UTC+8</span>
      </li>
      <li data-report-type="damage">
        <img src="@/assets/img/common/mirage/ico-40-damage.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          '초계' 캐릭터의 난입으로, <em class="color-primary">적월</em> 비곡에 <em class="color-primary">'사르마티'</em> 캐릭터의
          <em class="color-major">스테이킹이 해제</em>되었으며, <em class="color-medium">중상</em>을 입었습니다.
        </div>
        <span class="report-time-stamp">Mar. 14, 2022 20:14 UTC+8</span>
      </li>
      <li data-report-type="damage">
        <img src="@/assets/img/common/mirage/ico-40-damage.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          '초계' 캐릭터의 난입으로, <em class="color-primary">적월</em> 비곡에 <em class="color-primary">'사르마티'</em> 캐릭터의
          <em class="color-major">스테이킹이 해제</em>되었으며, <em class="color-major">치명상</em>을 입었습니다.
        </div>
        <span class="report-time-stamp">Mar. 14, 2022 20:14 UTC+8</span>
      </li>
      <li data-report-type="recovery">
        <img src="@/assets/img/common/mirage/ico-40-healing.webp" class="icon-report" width="40" alt="" />
        <div class="report-desc">
          <em class="color-primary">'사르마티'</em> 캐릭터의 부상이 <em class="color-recovery">즉시 회복</em>되었습니다. 60 Vigor 사용
        </div>
        <span class="report-time-stamp">Mar. 14, 2022 20:14 UTC+8</span>
      </li>
    </ul>
    <div class="wrap-button">
      <router-link class="btn-viewmore" to="/report-more">Report More</router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MirageBattleReport',
  components: {
    //
  },
  props: {
    //
  },
  data: () => ({
    //
  }),
  methods: {
    //
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-battle-report';
</style>
