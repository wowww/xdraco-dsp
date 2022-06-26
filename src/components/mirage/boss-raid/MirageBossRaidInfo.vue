<template>
  <div
    class="mirage-boss-breifing"
    :class="{
      'is-locked': !closed && mirageLock,
      'in-battle': !closed && mirageStatus.raidLocked,
      'is-defeat': closed,
    }"
    :data-boss-type="`${schedule ? schedule.RaidType : ''}`"
  >
    <div class="breifing-top" v-if="isMobile">
      <span class="boss-info" v-if="schedule" v-html="t(`t.mirage.boss-raid.type-${schedule ? schedule.RaidType : ''}`)"></span>
      <span class="mirax-info"> MiraX<em>+20</em> </span>
    </div>
    <div class="breifing-header">
      <div class="round-count-down">
        <span class="boss-round" v-if="schedule">ROUND {{ schedule.Battle }}</span>
        <mirage-boss-raid-count-down
          v-if="endDay"
          :targetDate="endDay.toDate().toString()"
          :dark="(!closed && mirageLock) || closed"
          themePurple
          class="hidden-day"
        />
      </div>
      <div class="info-entry">
        <p class="desc">
          <span class="icon-locked" v-if="!closed && mirageLock"></span>
          <span class="desc-txt" v-if="mirageRaidStatus.closed">Battle ends at {{ schedule && schedule.EndDT | dateFormat }}</span>
          <span class="desc-txt" v-else-if="mirageRaidStatus.started">Battle will end at {{ schedule && schedule.EndDT | dateFormat }}</span>
          <span class="desc-txt" v-else>Battle will beings on {{ schedule && schedule.StartDT | dateFormat }}</span>
          <!--          <v-tooltip content-class="mirage-tooltip" attach=".mirage-boss-breifing" top max-width="240">-->
          <!--            <template v-slot:activator="{ on, attrs }">-->
          <!--              <v-icon v-bind="attrs" v-on="on" class="icon-mirage-tooltip">icon</v-icon>-->
          <!--            </template>-->
          <!--            <div class="tooltip-wrap">-->
          <!--              <p>툴팁 내용 내용 내용 내용 내용 내용</p>-->
          <!--            </div>-->
          <!--          </v-tooltip>-->
        </p>
        <div class="button-wrap">
          <button type="button" class="btn-time-table" @click="visibleTimeTable = true">open time table</button>
        </div>
      </div>
    </div>

    <div class="battle-status" v-if="closed">
      <span>Boss Defeated</span>
    </div>
    <div class="battle-status" v-else-if="mirageStatus.raidLocked">
      <span>In Progress</span>
    </div>
    <div class="section-recruit" v-else-if="!mirageStatus.valleyCaptureLocked">
      <span class="symbol-mirage">Boss Raid Bidding Phase</span>
    </div>

    <div class="breifing-content" v-if="schedule">
      <div class="boss-header">
        <em>{{ t(`w.mirage.boss-raid.name-type-${schedule ? schedule.RaidType : ''}`) }}</em>
        {{ t(`w.mirage.boss-raid.type-${schedule ? schedule.RaidType : ''}`).toUpperCase() }}
        <span class="mirax-info" v-if="!isMobile"> MiraX<em>+20</em></span>
      </div>
      <div class="boss-footer">
        <p v-html="t(`s.mirage.boss-raid.desc.type-${schedule ? schedule.RaidType : ''}`)"></p>
      </div>
    </div>
    <v-expansion-panels tile flat class="reward-panel">
      <v-expansion-panel>
        <v-expansion-panel-header color="#330066">
          Boss Raid Reward
          <template v-slot:actions>
            <v-icon class="expand-arrow"></v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content color="#330066">
          <ul class="list-reward-desc bullet">
            <li v-html="t(`s.mirage.boss-raid.reward.info-1.type-${schedule ? schedule.RaidType : ''}`)"></li>
            <li v-html="t(`s.mirage.boss-raid.reward.info-2`)"></li>
          </ul>
          <template v-if="isMobile">
            <div class="wrap-reward-swiper">
              <swiper ref="swiperReward" :options="swiperOptions">
                <swiper-slide v-for="item in rewards" :key="item.id">
                  <mirage-boss-raid-reward-item :item-idx="item.ClearRewardItemIdx" />
                </swiper-slide>
                <swiper-slide>
                  <mirage-boss-raid-reward-item
                    item-idx="0"
                    :fallback-item="{ category: t('w.mirage.item.scroll.type'), itemName: t('w.mirage.item.scroll.name') }"
                  />
                </swiper-slide>
              </swiper>
            </div>
          </template>
          <template v-else>
            <ul class="list-reward">
              <li v-for="item in rewards" :key="item.id">
                <div @click="openItemPopup(item.ClearRewardItemIdx)">
                  <mirage-boss-raid-reward-item :item-idx="item.ClearRewardItemIdx" />
                </div>
              </li>
              <li>
                <mirage-boss-raid-reward-item
                  item-idx="0"
                  :fallback-item="{ category: t('w.mirage.item.scroll.type'), itemName: t('w.mirage.item.scroll.name') }"
                />
              </li>
            </ul>
          </template>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-dialog content-class="dialog-card" v-model="modalItemCardVisible">
      <v-card>
        <item-card v-if="itemIdx === '0'" :item="{}" />
        <item-card v-else :item="items.find((i) => i.itemIdx === itemIdx)" />
        <button type="button" class="btn-close-dialog" @click="modalItemCardVisible = false">Close Dialog</button>
      </v-card>
    </v-dialog>
    <v-dialog
      attach="#contents"
      content-class="dialog-mirage dialog-mirage-lockout"
      v-model="visibleTimeTable"
      :width="!isMobile ? '760px' : '100%'"
      scrollable
      persistent
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <div class="dialog-header">
        MIRAGE Lockout Schedule
        <v-btn class="btn-close btn-miragepop-close" @click="visibleTimeTable = false" fab plain x-small></v-btn>
      </div>
      <div class="content">
        <ul class="list-lockout">
          <li>
            <div class="lockout-time">00:00 - 12:00</div>
            <div class="lockout-msg">Hidden Valley Capture 1st Half Start</div>
          </li>
          <li class="type-locked">
            <div class="lockout-time">03:00 - 04:00</div>
            <div class="lockout-msg">Boss Raid Reward Distribution</div>
          </li>
          <li>
            <div class="lockout-time">04:00 - 09:00</div>
            <div class="lockout-msg">Boss Raid Horang the Mad Stable Keeper 1st Round Start</div>
          </li>
          <li class="type-locked">
            <div class="lockout-time">08:00 - 09:00</div>
            <div class="lockout-msg">Boss Raid Reward Distribution</div>
          </li>
          <li>
            <div class="lockout-time">09:00 : 16:00</div>
            <div class="lockout-msg">Hidden Valley Capture 1st Half Harvest</div>
          </li>
          <li class="type-locked">
            <div class="lockout-time">11:00 - 13:00</div>
            <div class="lockout-msg">Hidden Valley Capture 2nd Half Start</div>
          </li>
          <li class="type-locked">
            <div class="lockout-time">12:00 - 24:00</div>
            <div class="lockout-msg">Hidden Valley Capture 2nd Half Start</div>
          </li>
          <li class="type-locked">
            <div class="lockout-time">15:00 - 16:00</div>
            <div class="lockout-msg">Boss Raid Reward Distribution</div>
          </li>
          <li>
            <div class="lockout-time">16:00 - 21:00</div>
            <div class="lockout-msg">Boss Raid Horang the Mad Stable Keeper 2nd Round Start</div>
          </li>
          <li class="type-locked">
            <div class="lockout-time">20:00 -21:00</div>
            <div class="lockout-msg">Boss Raid Reward Distribution</div>
          </li>
          <li>
            <div class="lockout-time">21:00 : 04:00</div>
            <div class="lockout-msg">Boss Raid Eunsil the Lunatic Tailor 1st Round Start</div>
          </li>
          <li class="type-locked">
            <div class="lockout-time">23:00 - 01:00</div>
            <div class="lockout-msg">Hidden Valley Capture 2nd Half Harvest</div>
          </li>
        </ul>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { defineComponent, reactive, computed, toRefs } from '@vue/composition-api';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

import ItemCard from '@/components/common/item/ItemCard';
import { useMobile } from '@/composables/common';
import { useMirageStore } from '@/composables/mirage';

import 'swiper/css/swiper.css';
import { useNow } from '@vueuse/core';

import MirageBossRaidRewardItem from '@/components/mirage/boss-raid/MirageBossRaidRewardItem';
import MirageBossRaidCountDown from '@/components/mirage/boss-raid/MirageBossRaidCountDown';

import dayjs from 'dayjs';

import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'MirageBossRaidInfo',
  components: {
    ItemCard,
    MirageBossRaidCountDown,
    MirageBossRaidRewardItem,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const now = useNow({ interval: 1000 });
    const state = reactive({
      modalItemCardVisible: false,
      itemIdx: -1,
      swiperOptions: {
        slidesPerView: 'auto',
      },
      visibleTimeTable: false,
    });

    const { useMirageState, useMirageGetters } = useMirageStore();
    const { bossRaid, items } = useMirageState(['bossRaid', 'items']);
    const { mirageStatus, mirageRaidStatus, bossRaidStatus, mirageLock } = useMirageGetters([
      'mirageStatus',
      'mirageRaidStatus',
      'bossRaidStatus',
      'mirageLock',
    ]);

    const schedule = computed(() => {
      if (!bossRaid.value) {
        return null;
      }

      return bossRaid.value.schedule[0];
    });

    const startDay = computed(() => {
      if (!schedule.value) {
        return null;
      }
      return dayjs.unix(schedule.value.StartDT);
    });

    const endDay = computed(() => {
      if (!schedule.value) {
        return null;
      }
      return dayjs.unix(schedule.value.EndDT);
    });

    const closed = computed(() => {
      if (!schedule.value) {
        return false;
      }

      return dayjs(now.value).isAfter(endDay.value);
    });

    const rewards = computed(() => {
      if (!bossRaid.value) {
        return [];
      }

      return bossRaid.value.reward;
    });

    const openItemPopup = (itemIdx) => {
      state.itemIdx = itemIdx;
      state.modalItemCardVisible = true;
    };

    return {
      ...useMobile(),
      ...useI18n(),
      ...toRefs(state),
      bossRaid,
      schedule,
      startDay,
      endDay,
      closed,
      mirageStatus,
      bossRaidStatus,
      rewards,
      items,
      openItemPopup,
      mirageLock,
      mirageRaidStatus,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/components/_mirage-boss-breifing.scss';
</style>
