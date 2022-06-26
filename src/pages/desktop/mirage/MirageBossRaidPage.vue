<template>
  <div class="boss-raid-detail">
    <div class="wrap-my-mirage">
      <div class="util-list">
        <back-button />
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
@import '~@/assets/sass/desktop/app';
@import '~@/assets/sass/components/mirage-dialog';
@import '~@/assets/sass/desktop/pages/mirage/mirage-list';
@import '~@/assets/sass/desktop/pages/mirage/boss-raid-detail';
</style>
