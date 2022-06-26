<template>
  <div>
    <div class="section-title-bar">
      <h2 class="section-title">{{ t('t.mirage.dashboard') }}</h2>
      <div class="mirage-inventory-roster" v-if="accessToken">
        <div class="roster-item">
          <span class="roster-title">Enlisted</span>
          <img src="@/assets/img/common/mirage/logo-20-mirage.webp" width="20" height="20" alt="mirage" />
          <span class="volume"
            >{{ enlisted }}<span class="max-volume"> / {{ rosters.length }}</span></span
          >
        </div>
        <div class="roster-item">
          <span class="roster-title">Wounded</span>
          <img src="@/assets/img/common/mirage/ico-20-damage.webp" width="20" height="20" alt="wound" />
          <span class="volume">{{ wounded }}</span>
        </div>
        <div class="roster-item">
          <router-link class="link-roster" to="/mirage/my">Roster</router-link>
        </div>
      </div>
    </div>

    <mirage-summary v-if="accessToken" />
    <mirage-hidden-valley-capture />
    <mirage-boss-raid />
    <hr />
    <h2 class="section-title" style="margin-top: 24px">MIRAGE Log</h2>
    <div class="mirage-hidden-valley-play" v-if="mirageLock">
      <div class="result disabled">
        <div class="result-contents">
          <p>
            <span>{{ t('s.mirage.lock-up.log') }}</span>
          </p>
        </div>
      </div>
    </div>
    <div class="mirage-battle-report" v-else>
      <ul class="list-report" v-if="allLogList && allLogList.length > 0">
        <mirage-log-item v-for="(log, idx) in logList" :key="`mirage-log-item-${idx}-${log.LogDT}`" :log="log" />
      </ul>
      <div class="wrap-button" v-if="hasMoreLog">
        <div class="btn-viewmore" style="cursor: pointer" @click="logViewLimit += 20">View More</div>
      </div>
    </div>

    <div class="wrap-my-mirage" v-if="false">
      <div class="list-bar">
        <h2 class="section-title">{{ t('t.mirage.recommend.ntfs') }}</h2>
        <router-link to="/nft/list" class="list-bar__more">{{ t('w.rounds.view.more') }}</router-link>
      </div>
      <ul
        class="list-card-nft recommend"
        :data-empty-message="recommendedItems.list && recommendedItems.list.length > 0 ? '' : t('s.nft.empty.sales')"
      >
        <nft-item v-for="item in recommendedItems.list" :key="`nft-recommended-item-${item.seq || item.info.seq}`" :item="item" use-link />
      </ul>
    </div>
  </div>
</template>

<script src="@/components/mirage/boss-raid/MirageDashboardPage.js"></script>

<style lang="scss">
@import '~@/assets/sass/desktop/app';
@import '~@/assets/sass/components/mirage-dialog';
@import '~@/assets/sass/desktop/pages/mirage/mirage-list';
@import '~@/assets/sass/components/mirage-battle-report';
@import '~@/assets/sass/components/mirage-hidden-valley-play';
</style>
