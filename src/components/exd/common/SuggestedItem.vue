<template>
  <router-link tag="li" :to="`/exd/trade/${suggestItem.tradeUID}`" style="cursor: pointer">
    <exd-hydra-price :hide-label="true" :price="suggestItem.price" icon-size="ss" />
    <div class="enhance">
      <span>{{ t('w.common.item.enhance') }}</span>
      <strong>
        {{ suggestItem.item.enhance }}
      </strong>
    </div>
    <div class="score">
      <span>Power Score</span
      ><strong>
        <template>
          {{ suggestItem.item.PowerScore | currency(0) }}
        </template>
      </strong>
    </div>
    <div class="seller">
      <span>{{ t('w.exd.seller') }}</span>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <strong v-bind="attrs" v-on="on">{{ suggestItem.seller.walletAddress | truncateMiddle }}</strong>
        </template>
        <span>{{ suggestItem.seller.walletAddress }}</span>
      </v-tooltip>
    </div>
  </router-link>
</template>

<script>
import { computed, defineComponent } from '@vue/composition-api';
import { useMutations, useActions } from 'vuex-composition-helpers/dist';
import ItemInfo from '@/components/exd/common/ItemInfo';
import { useMobile } from '@/composables/common';
import { MyItemTab } from '@/constants/exchange';
import useI18n from '@/utils/useI18n';
import ItemSeller from '@/components/exd/common/ItemSeller';
import ExdHydraPrice from '@/components/exd/common/ExdHydraPrice';

export default defineComponent({
  name: 'SuggestedItem',
  components: { ExdHydraPrice, ItemSeller, ItemInfo },
  props: {
    suggestItem: {
      type: Object,
      default: () => ({}),
    },
    seller: {
      type: Object,
      default: () => ({}),
    },
  },
  setup({ suggestItem }, { root }) {
    const i18n = useI18n();

    const { setCommonModal } = useMutations(['setCommonModal']);
    const { closeModal } = useActions(['closeModal']);

    const go2Registration = () => {
      root.$router.push(`/exd/my-items/${suggestItem.itemUID}`);
    };

    const go2Detail = () => {
      root.$router.push(`/exd/trade/${suggestItem.tradeUID}`);
    };

    console.log(suggestItem);

    // const itemType = computed(() => suggestItem.item.itemType.split('_'));
    // const hasEnhance = computed(() => ['2', '3', '4', '20'].includes(itemType[0]));
    // const hasPowerScore = computed(() => ['2', '3', '4', '8', '20'].includes(itemType[0]));

    const openCancel = () => {
      setCommonModal({
        open: true,
        title: i18n.t('s.exd.cancel.item', suggestItem.item.itemName),
        primary: 'Ok',
        secondary: 'Cancel',
        onPrimary: () => {
          root.$dracoWebApi.delete('/exd/tradeitem', { params: { tradeUID: suggestItem.tradeUID } }).then(({ data }) => {
            console.log(data);
            if (data.code === 200) {
              root.$router.replace(`/exd/my-items`);
            }
          });
        },
        onSecondary: () => {
          closeModal();
        },
      });
    };

    return {
      ...useI18n(),
      ...useMobile(),
      MyItemTab,
      go2Registration,
      go2Detail,
      // itemType,
      // hasEnhance,
      // hasPowerScore,
      openCancel,
    };
  },
});
</script>

<style scoped></style>
