<template>
  <main class="contents rounds">
    <section class="section">
      <!-- <Round>태그에 적용된 'uiType' props는 UI를 위한 용도일뿐입니다 -->
      <div class="section__inner">
        <div class="wrap-grid">
          <!-- 타임라인 -->
          <div class="grid-timeline">
            <div class="wrap-dropdown">
              <v-menu class="custom-dropdown" offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <button type="button" class="btn-dropdown" dark v-bind="attrs" v-on="on">{{ selectedSeason }}</button>
                </template>
                <v-list class="dropdown">
                  <v-list-item-group class="dropdown__list" color="primary">
                    <v-list-item v-for="(season, index) in arraySeason" :key="index" @click="selectDropdownSeason(season.title)">
                      <span class="text">{{ season.title }}</span>
                      <span class="status" :aria-label="season.isOpen ? 'open' : ''">{{ season.isOpen ? 'OPEN' : 'CLOSED' }}</span>
                    </v-list-item>
                  </v-list-item-group>
                </v-list>
              </v-menu>
            </div>
            <v-tabs class="tab-rounds" @change="selectTabRound">
              <v-tab>
                <span>Ongoing</span>
                <span class="count">60</span>
              </v-tab>
              <v-tab>
                <span>Upcoming</span>
                <span class="count">30</span>
              </v-tab>
              <v-tab>
                <span>Closed</span>
                <span class="count">10</span>
              </v-tab>
              <v-tab>
                <span>My Rounds</span>
                <span class="count">5</span>
              </v-tab>
            </v-tabs>

            <div class="wrap-rounds empty">{{ $t('s.rounds.message.no-participating') }}</div>

            <!-- Case: Upcoming Round -->
            <h2 class="linktitle mb-4">None Flip Countdown</h2>
            <Round uiType="roundCountdown" itemType="grade-4"></Round>
            <h2 class="linktitle mb-4">Upcoming Round</h2>
            <h3 class="linktitle smaller">라운드 시작까지 N시간 초과로 남은 경우 - PRE-STAKE 안됨</h3>
            <Round uiType="u1"></Round>
            <h3 class="linktitle smaller">PRE-STAKE</h3>
            <Round uiType="u2" itemType="grade-4"></Round>
            <h3 class="linktitle smaller">PRE-STAKE MORE</h3>
            <Round uiType="u3" itemType="grade-5"></Round>
            <h3 class="linktitle smaller">PRE-STAKE MORE - 24시간동안 추가 스테이킹안됨</h3>
            <Round uiType="u4"></Round>

            <!-- Case: Ongoing Round -->
            <h2 class="linktitle mb-4">Ongoing Round</h2>
            <h3 class="linktitle smaller">STAKE EARLIER</h3>
            <Round uiType="o1"></Round>
            <h3 class="linktitle smaller">STAKE EARLIER MORE</h3>
            <Round uiType="o2" itemType="grade-4"></Round>
            <h3 class="linktitle smaller">STAKE EARLIER MORE - 24시간동안 추가 스테이킹안됨</h3>
            <Round uiType="o3" itemType="grade-5"></Round>

            <!-- Case: Closed Round -->
            <h2 class="linktitle mb-4">Closed Round</h2>
            <h3 class="linktitle smaller">Winner</h3>
            <Round uiType="c1"></Round>
            <h3 class="linktitle smaller">Winner - 획득완료</h3>
            <Round uiType="c2" itemType="grade-4"></Round>
            <h3 class="linktitle smaller">Loser</h3>
            <Round uiType="c3" itemType="grade-5"></Round>
            <h3 class="linktitle smaller">Loser - 환불완료</h3>
            <Round uiType="c4"></Round>
            <h3 class="linktitle smaller">Not player</h3>
            <Round uiType="c5" itemType="grade-4"></Round>

            <!-- Case: Loading -->
            <h2 class="linktitle mb-4">Loading</h2>
            <h3 class="linktitle smaller">Loading - type1</h3>
            <Round uiType="l1"></Round>
          </div>

          <!-- 사이드영역 -->
          <div class="grid-side">
            <aside class="sidebar">
              <AccountInfo profile-type="signUp" more-active></AccountInfo>
            </aside>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
// eslint-disable-next-line import/extensions
import Footer from '@/partials/common/Footer';
import Round from '@/components-ui/desktop/Round';
import AccountInfo from '@/components-ui/desktop/AccountInfo';
import SidebarContactUs from '@/components/common/SidebarContactUs';

export default defineComponent({
  name: 'DspRounds',
  components: {
    Footer,
    Round,
    AccountInfo,
    SidebarContactUs,
  },
  methods: {
    selectTabRound() {
      console.log(this);
    },
    selectDropdownSeason(value) {
      this.selectedSeason = value;
    },
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    selectedSeason: 'Season 1',
    arraySeason: [
      {
        title: 'Season 1',
        isOpen: true,
      },
      {
        title: 'Season 2',
        isOpen: false,
      },
      {
        title: 'Season 3',
        isOpen: false,
      },
      {
        title: 'Season 4',
        isOpen: false,
      },
    ],
  }),
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
@import '~@/assets/sass/desktop/ui-guide.scss';
</style>
