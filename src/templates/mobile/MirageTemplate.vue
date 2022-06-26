<template>
  <main id="contents" class="contents mirage">
    <banner-mirage-top v-if="$route.path.includes('dashboard')" />
    <!--    <mirage-notice v-if="$route.path.includes('dashboard')" />-->
    <section
      ref="refSection"
      class="section"
      :class="{ 'mirage-play': $route.path.includes('valley-capture'), 'boss-raid-detail': $route.path.includes('boss-raid') }"
      v-if="!$route.path.includes('dashboard')"
    >
      <div class="section__inner">
        <div class="subnav-block" v-if="!$route.path.includes('dashboard')"></div>
        <!--        <mirage-notice v-if="$route.path.includes('valley-capture')" />-->
        <router-view />
      </div>
    </section>
    <router-view v-if="$route.path.includes('dashboard')" />
    <Footer />
    <mirage-footer :closed="mirageLock" />
    <modal-minting />
    <modal-charge-vigor />
    <modal-terms-of-use />
    <modal-retreat-character />
    <modal-recover />
    <modal-dispel />
    <v-dialog
      :value="openLoading"
      content-class="dialog-hsp"
      scrollable
      :max-width="!isMobile ? '480px' : null"
      persistent
      :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
    >
      <v-card class="dialog-loading-contents" tile>
        <v-btn class="close" @click="openLoading = false" fab icon absolute small v-show="false">
          <v-icon color="#000">mdi-close</v-icon>
        </v-btn>

        <v-card-text :style="{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }">
          <div :style="{ display: 'flex', width: '100%', justifyContent: 'center', margin: '3rem auto' }">
            <v-progress-circular class="ml-2" :size="48" :width="10" color="#f0f0f0" indeterminate />
          </div>

          <h2 class="loading-status">
            <template>{{ t('t.hsp.main.loading.doing') }}...</template>
          </h2>

          <div class="loading-info">
            <template>{{ t('s.hsp.main.loading.waiting') }}</template>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </main>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, watch } from '@vue/composition-api';
import { useActions, useState } from 'vuex-composition-helpers/dist';

import MirageNotice from '@/components-ui/common/MirageNotice';
import AccountInfo from '@/components/account/AccountInfo';
import MirageTeaserTop from '@/components/banner/MirageTeaserTop';
import BannerMirageTop from '@/components/banner/MirageTop';
import SidebarContactUs from '@/components/common/SidebarContactUs';
import MirageLockNotice from '@/components/mirage/common/MirageLockNotice';
import MirageFooter from '@/components/mirage/MirageFooter';
import ModalChargeVigor from '@/components/mirage/ModalChargeVigor';
import ModalDispel from '@/components/mirage/ModalDispel';
import ModalMinting from '@/components/mirage/ModalMinting';
import ModalRecover from '@/components/mirage/ModalRecover';
import ModalRetreatCharacter from '@/components/mirage/ModalRetreatCharacter';
import ModalTermsOfUse from '@/components/mirage/ModalTermsOfUse';
import { useMobile } from '@/composables/common';
import { useMirageStore } from '@/composables/mirage';
import Footer from '@/partials/common/Footer';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'MirageTemplate',
  components: {
    ModalDispel,
    ModalRetreatCharacter,
    MirageLockNotice,
    ModalTermsOfUse,
    MirageFooter,
    ModalRecover,
    BannerMirageTop,
    MirageTeaserTop,
    ModalChargeVigor,
    ModalMinting,
    SidebarContactUs,
    AccountInfo,
    Footer,
    MirageNotice,
  },
  setup() {
    const { accessToken } = useState(['accessToken']);
    const { useMirageState, useMirageGetters, useMirageMutations, useMirageActions } = useMirageStore();
    const { openLoading, accountInfo, valleyCapture } = useMirageState(['openLoading', 'accountInfo', 'valleyCapture']);
    const { mirageStatus, mirageLock } = useMirageGetters(['mirageStatus', 'mirageLock']);
    const { fetchDerby, fetchHydraSupply } = useActions(['fetchDerby', 'fetchHydraSupply']);
    const {
      fetchValleyList,
      fetchServerInfo,
      fetchAccountServerInfo,
      fetchAccountInfo,
      fetchMyCharacters,
      startCheckLocked,
      stopCheckLocked,
      fetchBossRaidList,
      fetchBossRaidMetaParty,
      fetchBossRaidMetaWound,
    } = useMirageActions([
      'fetchValleyList',
      'fetchServerInfo',
      'fetchAccountServerInfo',
      'fetchAccountInfo',
      'fetchMyCharacters',
      'fetchBossRaidList',
      'startCheckLocked',
      'stopCheckLocked',
      'fetchBossRaidMetaParty',
      'fetchBossRaidMetaWound',
    ]);

    onMounted(() => {
      fetchValleyList();
      fetchBossRaidList();
      fetchDerby();
      fetchHydraSupply();
      fetchServerInfo();
      fetchAccountServerInfo();
      fetchAccountInfo();
      fetchMyCharacters();

      startCheckLocked();
      fetchBossRaidMetaParty();
      fetchBossRaidMetaWound();
    });

    onUnmounted(() => {
      stopCheckLocked();
    });

    watch(
      () => accessToken.value,
      () => {
        fetchAccountInfo();
      },
    );

    return {
      ...useI18n(),
      ...useMobile(),
      openLoading,
      mirageStatus,
      mirageLock,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mobile/app';
@import '~@/assets/sass/components/mirage-dialog';
</style>
