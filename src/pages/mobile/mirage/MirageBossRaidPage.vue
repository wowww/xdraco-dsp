<template>
  <div class="boss-raid-detail">
    <div class="wrap-my-mirage">
      <div class="util-list">
        <mirage-inventory />
      </div>
    </div>
    <mirage-boss-raid-info />
    <hr />
    <template v-if="bossRaidStatus.locked || bossRaidStatus.closed">
      <mirage-boss-raid-result />
      <hr />
    </template>
    <mirage-boss-raid-squadron />
    <hr />
    <mirage-boss-raid-latest-result />
    <h2 class="section-title">Battle Report</h2>
    <mirage-boss-raid-battle-report />
  </div>
</template>

<script src="@/components/mirage/boss-raid/MirageBossRaidPage.js"></script>

<style lang="scss">
@import '~@/assets/sass/mobile/app';
@import '~@/assets/sass/components/mirage-dialog';
@import '~@/assets/sass/mobile/pages/mirage/mirage-list';
@import '~@/assets/sass/mobile/pages/mirage/boss-raid-detail';
</style>
