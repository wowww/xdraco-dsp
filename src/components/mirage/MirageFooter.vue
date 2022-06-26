<template>
  <div class="float-bottom mirage-bottom" v-if="accountInfo">
    <div class="float-bottom-inner">
      <ul class="list-resources">
        <li>
          <span class="title-resource">DRACO Balance</span>
          <em class="value">
            <img src="@/assets/img/common/mirage-popup/icon-draco-sm.webp" width="16" v-if="isMobile" />
            <img src="@/assets/img/common/mirage-popup/icon-draco-sm.webp" v-else width="20" />{{ formattedDraco[0]
            }}<span class="decimal">{{ formattedDraco[1] }}</span>
          </em>
        </li>
        <li>
          <span class="title-resource">HYDRA Balance</span>
          <em class="value">
            <img src="@/assets/img/common/mirage-popup/ico-16-hydra.webp" width="16" v-if="isMobile" />
            <img src="@/assets/img/common/mirage-popup/icon-hydra-sm.webp" v-else width="20" />{{ formattedHydra[0]
            }}<span class="decimal">{{ formattedHydra[1] }}</span>
          </em>
        </li>
        <li v-if="!isMobile">
          <span class="title-resource">Darksteels</span>
          <em class="value">
            <img src="@/assets/img/common/mirage-popup/icon-darksteel-sm.webp" width="20" />{{ accountInfo.BlackIronAmount | currency(0) }}
          </em>
        </li>
        <li v-if="!isMobile">
          <span class="title-resource">Septaria</span>
          <em class="value">
            <img src="@/assets/img/common/mirage/ico-20-septaria.webp" width="20" />{{ accountInfo.SeptariaAmount | currency(0) }}
          </em>
        </li>
      </ul>
      <div class="wrap-buy">
        <button type="button" class="btn" @click="openMinting(0)" v-if="!closed">
          <img src="@/assets/img/common/mirage/img-draco-gold.webp" width="56" v-show="!isMobile" />{{ t('w.mirage.smelt.draco') }}
        </button>
        <button type="button" class="btn" @click="openMinting(1)" v-if="!closed">
          <img src="@/assets/img/common/mirage/img-hydra-gold.webp" width="56" v-show="!isMobile" />{{ t('w.mirage.refine.hydra') }}
        </button>

        <small v-if="closed">
          {{ t('s.mirage.harvest.lockout.minting2') }}
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useState } from 'vuex-composition-helpers/dist';
import { useNow } from '@vueuse/core';
import dayjs from 'dayjs';
import { useFormattedRefNumber, useMobile } from '@/composables/common';
import useI18n from '@/utils/useI18n';

const { useState: useMirageState, useMutations: useMirageMutations } = createNamespacedHelpers('mirage');

export default defineComponent({
  name: 'MirageFooter',
  props: {
    closed: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { balance } = useState(['balance']);
    const { accountInfo, valleyCapture } = useMirageState(['accountInfo', 'valleyCapture']);
    const { setVisibleMinting, setMintingSymbolIdx } = useMirageMutations(['setVisibleMinting', 'setMintingSymbolIdx']);

    const formattedDraco = useFormattedRefNumber(balance, 'DRACO', 4);
    const formattedHydra = useFormattedRefNumber(balance, 'HYDRA', 4);

    const openMinting = (mintingIndex) => {
      setMintingSymbolIdx(mintingIndex);
      setVisibleMinting(true);
    };

    return {
      ...useI18n(),
      ...useMobile(),
      openMinting,
      balance,
      formattedDraco,
      formattedHydra,
      accountInfo,
      valleyCapture,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/components/mirage-bottom';
</style>
