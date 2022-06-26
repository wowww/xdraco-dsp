<template>
  <div class="mirage-inventory" v-if="accountInfo">
    <div class="mirage-inventory-item" v-if="!isMobile">
      <span class="currency">
        <img src="@/assets/img/common/mirage/ico-20-darksteel.webp" width="20" height="20" alt="darksteel" />
        <em class="volume">{{ accountInfo.BlackIronAmount | currency(0) }}</em>
      </span>
    </div>
    <div class="mirage-inventory-item" v-if="!isMobile">
      <span class="currency">
        <img src="@/assets/img/common/mirage/ico-20-septaria.webp" width="20" height="20" alt="septaria" />
        <em class="volume">{{ accountInfo.SeptariaAmount | currency(0) }}</em>
      </span>
    </div>
    <div class="mirage-inventory-item">
      <span class="currency">
        <img src="@/assets/img/common/mirage/img-24-mirage-scroll.webp" width="24" height="22" alt="enhance" />
        <em class="volume">{{ accountInfo.ScrollAmount | currency(0) }}</em>
      </span>
      <button type="button" class="btn-enhance" v-show="false">Enhance</button>
    </div>
    <div class="mirage-inventory-item">
      <span class="currency">
        <img src="@/assets/img/common/mirage/ico-20-energy.webp" width="20" height="20" alt="energy" />
        <em class="volume">{{ accountInfo.VigorAmount | currency(0) }}</em>
      </span>
      <button type="button" class="btn-charge" @click="openChargeVigor">Charge</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useMirageStore } from '@/composables/mirage';
import { useMutations } from 'vuex-composition-helpers/dist';
import { useMobile } from '@/composables/common';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'MirageInventory',
  setup() {
    const { t } = useI18n();
    const { setCommonModal } = useMutations(['setCommonModal']);
    const { useMirageState, useMirageGetters, useMirageMutations } = useMirageStore();
    const { accountInfo } = useMirageState(['accountInfo']);
    const { mirageStatus, mirageLock } = useMirageGetters(['mirageStatus', 'mirageLock']);
    const { setVisibleChargeVigor } = useMirageMutations(['setVisibleChargeVigor']);

    const openChargeVigor = () => {
      if (mirageLock.value) {
        setCommonModal({
          open: true,
          title: t('t.mirage.harvest.lockout'),
          desc: t('s.mirage.message.lockout.vigor'),
          primary: 'OK',
          onPrimary() {},
          onClose() {},
        });
        return;
      }

      setVisibleChargeVigor(true);
    };

    return {
      ...useMobile(),
      ...useI18n(),
      accountInfo,
      openChargeVigor,
    };
  },
});
</script>

<style scoped></style>
