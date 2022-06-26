<template>
  <v-dialog
    content-class="dialog-item-buy theme-dark"
    :value="visible"
    max-width="640"
    persistent
    :retain-focus="false"
    style="z-index: 290"
    :fullscreen="isMobile"
  >
    <div class="content">
      <v-btn class="btn-close" @click="$emit('close')" fab plain x-small>
        <v-icon color="#fff" size="26">mdi-close</v-icon>
      </v-btn>

      <div class="d-flex justify-center align-center" v-if="!item">
        <v-progress-circular v-if="loading" class="ma-5" :size="32" :width="4" color="#fff" indeterminate />
      </div>

      <div class="itembuy-content" v-else>
        <div class="wrap-card" v-if="item">
          <h3 class="title">{{ item.itemName }}</h3>
          <div class="detail-card">
            <item-card :item="item" :collectible="!!item.uniqueNo" />
          </div>
          <div class="detail-desc">
            {{ t('s.inventory.import', [item.price]) }}
          </div>
        </div>

        <div class="wrap-button">
          <button type="button" class="btn btn-primary2" :disabled="loading" @click="importItem">
            <template v-if="!loading">{{ t('w.inventory.import') }}</template>
            <v-progress-circular v-else class="ma-5" :size="32" :width="4" color="#fff" indeterminate />
          </button>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import { defineComponent, reactive, ref, toRefs, watch } from '@vue/composition-api';
import { createNamespacedHelpers, useMutations, useState } from 'vuex-composition-helpers/dist';
import { ethers } from 'ethers';
import ItemCard from '@/components/common/item/ItemCard';
import { useWemixLogin } from '@/composables/round';
import ItemInfo from '@/components/exd/common/ItemInfo';
import useI18n from '@/utils/useI18n';
import WinnerCharacterItem from '@/components/dsp/round/modal/WinnerCharacterItem';
import CharacterClassThumb from '@/components/common/CharacterClassThumb';
import { useMobile } from '@/composables/common';

const {
  useState: useAccountState,
  useGetters: useAccountGetters,
  useMutations: useAccountMutations,
  useActions: useAccountActions,
} = createNamespacedHelpers('account');

export default defineComponent({
  name: 'ModalImport',
  components: { CharacterClassThumb, ItemInfo, ItemCard, WinnerCharacterItem },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    itemUID: {
      type: String,
      default: '',
    },
  },
  setup(props, { root, emit }) {
    const { t } = useI18n();

    const state = reactive({
      loading: false,
      hash: null,
      item: null,
    });

    const { $wemix, $dracoWebApi } = root;
    const { wemixLogin } = useWemixLogin($wemix);

    const {
      active,
      loading: accountLoading,
      exist,
      worldNames,
      selectedWorldName,
    } = useAccountState(['active', 'loading', 'exist', 'worldNames', 'selectedWorldName']);
    const { characters } = useAccountGetters(['characters']);
    const { setSelectedWorldName } = useAccountMutations(['setSelectedWorldName']);
    const { fetchUserCharacter, fetchChannelUserCharacter } = useAccountActions(['fetchUserCharacter', 'fetchChannelUserCharacter']);

    const { accessToken, locale, walletAddress } = useState(['accessToken', 'locale', 'walletAddress']);

    const { setCommonModal } = useMutations(['setCommonModal']);

    const alertModal = (title, desc) => {
      setCommonModal({
        open: true,
        title,
        desc,
        primary: 'OK',
        onPrimary() {
          emit('close');
        },
        onClose() {
          emit('close');
        },
      });
    };

    const showErrorModal = (errorResponse) => {
      /**
       * errorCode
       * - 500 : Network Error
       * - 60617 : Sold Out
       * - 60618 : In-progress
       *
       * - 60621 : DB Error
       */
      const { code: errorCode } = errorResponse;
      let errorTitle = t('t.exd.purchase.failed');
      let errorMessage = '';

      switch (errorCode) {
        case 500:
          errorMessage = t('s.exd.purchase.failed.network');
          break;
        case 60606:
        case 60609:
          errorMessage = t('s.exd.purchase.choose.character.not-enough.inventory');
          break;
        case 60617:
          errorTitle = t('t.exd.purchase.sold-out');
          errorMessage = t('s.exd.purchase.sold-out');
          break;
        case 60618:
          errorTitle = t('t.exd.purchase.processing');
          errorMessage = t('s.exd.purchase.processing');
          break;
        default:
          errorTitle = t('t.exd.purchase.failed');
          errorMessage = `${t('s.xdraco.common.err.message')}${errorCode ? `(Error Code: ${errorCode})` : ''}`;
          break;
      }

      alertModal(errorTitle, errorMessage);
    };

    const importItem = () => {
      $dracoWebApi
        .post('/warehouse/import', { itemUID: state.item.itemUID })
        .then(({ data }) => {
          if (data.code === 200) {
            setCommonModal({
              open: true,
              title: 'Importing to Inventory',
              desc: 'You have successfully added an item to the inventory.',
              primary: 'OK',
              onPrimary() {
                emit('success');
              },
              onClose() {
                emit('success');
              },
            });

            emit('close');
          }
        })
        .catch(() => {
          showErrorModal({ code: 500 });
        });
    };

    watch(
      () => props.visible,
      () => {
        if (props.visible) {
          state.loading = true;
          $dracoWebApi
            .get('/exd/item', { params: { itemUID: props.itemUID, languageCode: locale.value } })
            .then(({ data }) => {
              console.log(data);
              if (data.code === 200) {
                state.item = data.data.item;
              }
            })
            .catch(() => {
              state.item = null;
              emit('close');
            })
            .finally(() => {
              state.loading = false;
            });
        }
        if (!props.visible) {
          state.item = null;
        }
      },
    );

    return {
      t,
      walletAddress,
      accountLoading,
      worldNames,
      selectedWorldName,
      characters,
      setSelectedWorldName,
      fetchChannelUserCharacter,
      ...useMobile(),
      exist,
      ...toRefs(state),
      importItem,
    };
  },
});
</script>

<style scoped></style>
