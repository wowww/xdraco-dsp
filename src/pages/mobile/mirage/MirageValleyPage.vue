<template>
  <div>
    <div class="wrap-my-mirage">
      <div class="util-list">
        <div class="mirage-inventory mobile" v-if="accountInfo">
          <span class="currency">
            <img src="@/assets/img/common/mirage/ico-20-darksteel.webp" width="20" height="20" alt="darksteel" />
            <em class="volume">{{ accountInfo.BlackIronAmount | currency(0) }}</em>
          </span>
          <span class="currency">
            <img src="@/assets/img/common/mirage/ico-20-septaria.webp" width="20" height="20" alt="septaria" />
            <em class="volume">{{ accountInfo.SeptariaAmount | currency(0) }}</em>
          </span>
          <span class="currency">
            <img src="@/assets/img/common/mirage/ico-20-energy.webp" width="20" height="20" alt="energy" />
            <em class="volume">{{ accountInfo.VigorAmount | currency(0) }}</em>
            <button type="button" class="btn-charge" @click="openChargeVigor">Charge</button>
          </span>
        </div>
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
    <h2 class="section-title" style="margin: 16px" v-if="logList && logList.length > 0">Battle Report</h2>
    <mirage-battle-report />
    <modal-enlist-character />
    <modal-enlist-result />
  </div>
</template>

<script src="@/components/mirage/boss-raid/MirageValleyPage"></script>

<style lang="scss">
@import '~@/assets/sass/mobile/app';
@import '~@/assets/sass/components/mirage-dialog';
@import '~@/assets/sass/mobile/pages/mirage/play';
@import '~@/assets/sass/components/mirage-hidden-valley-capture';
@import '~@/assets/sass/components/mirage-hidden-valley-play';
</style>
