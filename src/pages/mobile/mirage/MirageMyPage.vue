<template>
  <div class="wrap-my-mirage">
    <v-tabs class="tab-rounds" v-model="currentTab">
      <v-tab>My Roster</v-tab>
      <v-tab>NFT Enhancement</v-tab>
      <v-tab>My NFTs</v-tab>
    </v-tabs>
    <v-tabs-items v-model="currentTab">
      <v-tab-item class="wrap-my-mirage">
        <div class="util-list">
          <div class="summary">
            <em>{{ rosters.length }}</em> Characters
          </div>
          <mirage-inventory />
        </div>
        <div class="no-data" v-if="rosters.length === 0">
          <p class="desc">
            <em>There is no Character NFT available in your roster.</em>
            <span>Transfer your Character NFTs from your WEMIX WALLET to your MIRAGE roster.</span>
          </p>
          <div>
            <button type="button" class="btn-mirage btn-primary" @click="currentTab = 2">Import My NFT</button>
          </div>
        </div>
        <ul class="list-my-mirage" v-else>
          <li v-for="(roster, rosterIdx) in rosters" :key="`mirage-roster-${rosterIdx}`">
            <mirage-roster-character-item
              :character="roster"
              :key="`mirage-roster-${rosterIdx}-${roster.CharacterUID}`"
              @onSealClick="selectSealCharacter"
              :closed="mirageLock"
              :hide-mirage-score="roster.State === '3' || roster.State === '7'"
            />
          </li>
        </ul>
      </v-tab-item>
      <v-tab-item class="wrap-my-mirage">
        <div class="util-list">
          <mirage-inventory />
        </div>

        <div class="nft-enhancement">
          <div class="group-seal" v-show="false">
            <div class="seal-item">
              <div class="inner-item">
                <span class="thumb-item">
                  <img src="@/assets/img/common/mirage/img-64-mirage-scroll.webp" alt="" />
                  <span class="item-amount">x 34</span>
                </span>
                <span class="item-desc">MIRAGE Scroll</span>
              </div>
              <div class="wrap-btn">
                <button type="button" class="btn-mirage btn-primary">Seal</button>
              </div>
            </div>
            <div class="seal-item">
              <div class="inner-item">
                <span class="thumb-item">
                  <img
                    src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Global_Image/Global_Item/Item_Xdraco_01/Item_Xdraco_box_05.png"
                    alt=""
                  />
                  <span class="item-amount">x 34</span>
                </span>
                <span class="item-desc">MIRAGE Scroll Sealing Box</span>
              </div>
              <div class="wrap-btn">
                <button type="button" class="btn-mirage btn-primary">Unseal</button>
              </div>
            </div>
          </div>

          <div class="section-teasing">
            <span class="teasing-ment">NFT Enhancement will be updated</span>
            <span class="teasing-ment-sub">Collect more MIRAGE Scrolls</span>
          </div>
        </div>
      </v-tab-item>
      <v-tab-item class="wrap-my-mirage">
        <div class="util-list">
          <div class="summary">
            <em>{{ sealList ? sealList.length : 0 }}</em> NFTs
          </div>
        </div>
        <div class="no-data" v-if="sealList.length === 0">
          <p class="desc">
            <em>{{ t('t.mirage.no-nft') }}</em>
            <span>{{ t('s.mirage.no-nft') }}</span>
          </p>
        </div>
        <ul class="list-my-mirage" :data-empty-message="sealList && sealList.length > 0 ? '' : t('s.nft.empty.sales')">
          <li v-for="(item, itemIdx) in sealList" :key="`nft-list-item-${item.TokenID}`">
            <nft-card
              :item="{
                tokenID: item.TokenID,
                lv: item.CharacterLev,
                characterName: item.CharacterName,
                class: item.CharacterClass,
                powerScore: item.PowerScore,
              }"
              size="xs"
              :hide-level="true"
              :non-flipped="true"
            />
            <div class="wrap-button">
              <button type="button" class="btn btn-sm btn-primary-mirage" @click="selectImportNft(itemIdx)">Send to roster</button>
            </div>
          </li>
        </ul>

        <div class="exchange-list">
          <nft-list-section-title>{{ t('t.exd.recommended') }}</nft-list-section-title>

          <ul class="list-item" :data-empty-message="recommendedItems.list && recommendedItems.list.length > 0 ? '' : t('s.nft.empty.sales')">
            <nft-item
              v-for="item in recommendedItems.list"
              :key="`nft-recommended-item-${item.seq || item.info.seq}`"
              :item="item"
              use-link
              size="xs"
            />
          </ul>
        </div>
      </v-tab-item>
    </v-tabs-items>
    <modal-mirage-character-info />
    <modal-import-character :visible="openImport" :item="selectedNft" @close="closeImportNft" />
    <modal-seal-character />
  </div>
</template>

<script src="@/components/mirage/boss-raid/MirageMyPage"></script>

<style lang="scss">
@import '~@/assets/sass/mobile/app';
@import '~@/assets/sass/components/mirage-common';
@import '~@/assets/sass/components/mirage-dialog';
@import '~@/assets/sass/mobile/pages/mirage/mirage-list';
@import '~@/assets/sass/mobile/pages/mirage/nft-enhancement';
</style>
