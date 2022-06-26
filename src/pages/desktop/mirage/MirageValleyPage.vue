<template>
  <div>
    <div class="wrap-my-mirage">
      <div class="util-list">
        <back-button />
        <mirage-inventory />
      </div>
    </div>
    <mirage-valley-info v-if="serverInfo" :server-info="serverInfo" :closed="mirageLock" />
    <div class="mirage-hidden-valley-play">
      <v-expansion-panels class="playnow-wrap" accordion multiple v-model="panel">
        <mirage-valley-item :server-info="serverInfo" valley-type="3" :closed="mirageLock" />
        <mirage-valley-item :server-info="serverInfo" valley-type="2" :closed="mirageLock" />
        <mirage-valley-item :server-info="serverInfo" valley-type="1" :closed="mirageLock" />
      </v-expansion-panels>
      <mirage-valley-result :closed="mirageLock" />
    </div>
    <hr />
    <h2 class="section-title" v-if="logList && logList.length > 0">Battle Report</h2>
    <mirage-battle-report />
    <modal-enlist-character />
    <modal-enlist-result />
  </div>
</template>

<script src="@/components/mirage/boss-raid/MirageValleyPage"></script>

<style lang="scss">
@import '~@/assets/sass/desktop/app';
@import '~@/assets/sass/components/mirage-dialog';
@import '~@/assets/sass/desktop/pages/mirage/play';
@import '~@/assets/sass/desktop/pages/mirage/mirage-list';
@import '~@/assets/sass/components/mirage-hidden-valley-capture';
@import '~@/assets/sass/components/mirage-hidden-valley-play';
</style>
