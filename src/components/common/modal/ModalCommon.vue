<template>
  <v-dialog content-class="dialog-common" v-model="modal.open" max-width="480" persistent :retain-focus="false" style="z-index: 300">
    <div class="content">
      <v-btn class="btn-close" @click="onClose" fab plain x-small>
        <v-icon color="#000" size="26">mdi-close</v-icon>
      </v-btn>
      <div class="dialog-header"></div>
      <div class="wrap-notice">
        <div class="msgbox vcenter">
          <div>
            <h4 class="title" v-if="modal.title">{{ modal.title }}</h4>
            <div class="desc" v-if="modal.desc">
              {{ modal.desc }}
            </div>
            <div class="wrap-button">
              <button type="button" class="btn btn-sm" v-if="modal.secondary" @click="onClose">{{ modal.secondary }}</button>
              <button type="button" class="btn btn-primary btn-sm" v-if="modal.primary" @click="onClickPrimary">{{ modal.primary }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-dialog>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useActions, useMutations, useState } from 'vuex-composition-helpers/dist';

export default defineComponent({
  name: 'ModalCommon',
  setup(props, { root }) {
    const { commonModal: modal } = useState(['commonModal']);
    const { setCommonModal } = useMutations(['setCommonModal']);
    const { closeModal } = useActions(['closeModal']);

    const onClickPrimary = () => {
      if (modal.value.onPrimary) {
        modal.value.onPrimary();
      }

      root.$nextTick(() => closeModal());
    };

    const onClose = () => {
      if (modal.value.onClose) {
        modal.value.onClose();
      }

      root.$nextTick(() => closeModal());
    };

    return {
      modal,
      onClickPrimary,
      onClose,
    };
  },
});
</script>

<style scoped></style>
