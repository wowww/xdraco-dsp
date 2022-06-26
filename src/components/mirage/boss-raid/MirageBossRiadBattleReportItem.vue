<template>
  <li :data-report-type="log.LogType">
    <img v-if="log.LogType === '30101'" src="@/assets/img/common/mirage/ico-40-mirage.webp" class="icon-report" width="40" alt="" />
    <img v-else-if="log.LogType === '30103'" src="@/assets/img/common/mirage/ico-40-battle.webp" class="icon-report" width="40" alt="" />
    <img v-else-if="log.LogType === '30104'" src="@/assets/img/common/mirage/img-vigor-refund-40.webp" class="icon-report" width="40" alt="" />
    <img v-else-if="log.LogType === '30201'" src="@/assets/img/common/mirage/img-rewardbox-40.webp" class="icon-report" width="40" alt="" />
    <img v-else-if="log.LogType === '30202'" src="@/assets/img/common/mirage/img-mirgescroll-40.webp" class="icon-report" width="40" alt="" />
    <img
      v-else-if="log.LogType === '30203' && log.RaidType === '12'"
      src="@/assets/img/common/mirage/img-curse-horang.webp"
      class="icon-report"
      width="40"
      alt=""
    />
    <img
      v-else-if="log.LogType === '30203' && log.RaidType === '11'"
      src="@/assets/img/common/mirage/img-curse-eunsil.webp"
      class="icon-report"
      width="40"
      alt=""
    />
    <img v-else-if="log.LogType === '30204'" src="@/assets/img/common/mirage/ico-40-mirax.webp" class="icon-report" width="40" alt="" />
    <img v-else-if="log.LogType === '30205'" src="@/assets/img/common/mirage/ico-40-damage.webp" class="icon-report" width="40" alt="" />
    <p
      class="report-desc"
      v-if="log.LogType === '30101'"
      v-html="t('s.mirage.boss-raid.log.30101', [log.CharacterName, log.BetVigorAmount, t(`w.mirage.boss-raid.type-${log.RaidType}`), log.Battle])"
    />
    <p
      class="report-desc"
      v-if="log.LogType === '30103'"
      v-html="t('s.mirage.boss-raid.log.30103', [log.CharacterName, log.Ranking, t(`w.mirage.boss-raid.type-${log.RaidType}`), log.Battle])"
    />
    <p
      class="report-desc"
      v-if="log.LogType === '30104'"
      v-html="t('s.mirage.boss-raid.log.30104', [log.CharacterName, t(`w.mirage.boss-raid.type-${log.RaidType}`), log.Battle, log.EntryFee])"
    />
    <p
      class="report-desc"
      v-if="log.LogType === '30201'"
      v-html="
        t('s.mirage.boss-raid.log.30201', [
          log.CharacterName,
          rewardItem ? rewardItem.itemName : log.ItemIdx,
          t(`w.mirage.boss-raid.type-${log.RaidType}`),
          log.Battle,
        ])
      "
    />
    <p
      class="report-desc"
      v-if="log.LogType === '30202'"
      v-html="t('s.mirage.boss-raid.log.30202', [log.CharacterName, log.StackCnt, t(`w.mirage.boss-raid.type-${log.RaidType}`), log.Battle])"
    />
    <p
      class="report-desc"
      v-if="log.LogType === '30203'"
      v-html="
        t('s.mirage.boss-raid.log.30203', [
          log.CharacterName,
          t(`w.mirage.boss-raid.buff-type-${log.BuffType}`),
          t(`w.mirage.boss-raid.type-${log.RaidType}`),
          log.Battle,
        ])
      "
    />
    <p
      class="report-desc"
      v-if="log.LogType === '30204'"
      v-html="
        t('s.mirage.boss-raid.log.30204', [log.CharacterName, log.MiraX, t(`w.mirage.boss-raid.type-${log.DetailType}`), log.Battle, log.TotalMiraX])
      "
    />
    <p
      class="report-desc"
      v-if="log.LogType === '30205'"
      v-html="
        t('s.mirage.boss-raid.log.30205', [
          log.CharacterName,
          t(`w.mirage.log.wound.${log.WoundType}`),
          t(`w.mirage.boss-raid.type-${log.RaidType}`),
          log.Battle,
        ])
      "
    />
    <span class="report-time-stamp">{{ log.LogDT | fromNow }}</span>
  </li>
</template>

<script>
import { defineComponent, computed, watch } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';
import { currency } from '@/filters/numeric';
import { useMirageStore } from '@/composables/mirage';
import { onMounted } from '@vue/composition-api/dist/vue-composition-api';

export default defineComponent({
  name: 'MirageBossRaidBattleReportItem',
  props: {
    log: {
      type: Object,
      default: () => ({
        LogType: '',
        LogDT: '',
        ValleyType: '',
        DetailType: '',
        VictimCharacterName: '',
        OffenderCharacterName: '',
        WoundType: '',
        BetVigor: '',
        Vigor: '',
        Battle: '',
        Daily: '',
        Amount: '',
        MiraX: '',
        TotalMiraX: '',
      }),
    },
  },
  setup({ log }, { root }) {
    const { useMirageState, useMirageActions } = useMirageStore();
    const { items } = useMirageState(['items']);
    const { fetchItem } = useMirageActions(['fetchItem']);

    const rewardItem = computed(() => {
      if (log.LogType !== '30202') return null;

      return items.value.find((i) => i.itemIdx == log.ItemIdx);
    });

    onMounted(() => {
      if (log && log.ItemIdx) {
        fetchItem(log.ItemIdx);
      }
    });

    return {
      ...useI18n(),
      currency,
      rewardItem,
    };
  },
});
</script>

<style scoped></style>
