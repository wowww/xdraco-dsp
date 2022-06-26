<template>
  <main class="contents rounds">
    <banner-exd-top />
    <section class="section">
      <div class="section__inner">
        <div class="wrap-grid">
          <div class="grid-timeline">
            <div class="myitem-list">
              <my-items-tab />

              <div class="wrap-list">
                <div class="list-bar" v-if="!loading && myItems.length > 0">
                  <div class="list-bar__title">
                    <strong>{{ t('w.rounds.item') }}</strong>
                    <em>{{ myItems.length }}</em>
                  </div>

                  <my-items-order v-show="false" />
                </div>

                <template v-if="loading">
                  <v-progress-circular v-if="loading" class="ml-2" :size="16" :width="2" color="#fff" indeterminate />
                </template>
                <template v-else-if="myItems.length > 0">
                  <ul class="list-myitem">
                    <li v-for="(item, itemIdx) in myItems" :key="`exd-${myItemTab}-${item.tradeUID || item.itemUID}-${itemIdx}`">
                      <my-item :tab-type="myItemTab" :my-item="item" />
                    </li>
                  </ul>
                  <div class="wrap-button" v-if="myItemsMore">
                    <button type="button" class="btn-viewmore" @click="fetchMyItems(myItemsPage + 1)">{{ t('t.exd.view.more') }}</button>
                  </div>
                </template>
                <div v-else class="list-empty">
                  <template v-if="myItemTab === MyItemTab.SEAL"> {{ t('s.exd.my-item.seal.no-item') }} </template>
                  <template v-else-if="myItemTab === MyItemTab.SALE"> {{ t('s.exd.my-item.sales.no-item') }} </template>
                  <template v-else-if="myItemTab === MyItemTab.SOLD_OUT"> {{ t('s.exd.my-item.soldout.no-item') }} </template>
                  <template v-else-if="myItemTab === MyItemTab.PURCHASE"> {{ t('s.exd.my-item.purchase.no-item') }} </template>
                </div>
              </div>
            </div>
          </div>

          <!-- 사이드영역 -->
          <div class="grid-side">
            <aside class="sidebar">
              <account-info />
              <sidebar-contact-us />
            </aside>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </main>
</template>

<script src="@/pages/common/ExdMyItemList"></script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
</style>
