<template>
  <div class="mirage-boss-breifing" :class="{ 'is-locked': isLocked, 'in-battle': isInBattle, 'is-defeat': isDefeat }" data-boss-name="eunsil">
    <div class="breifing-top" v-if="isMobile">
      <span class="boss-info">‘EUNSIL THE LUNATIC TAILOR’</span>
      <span class="mirax-info"> MiraX<em>+20</em> </span>
    </div>
    <div class="breifing-header">
      <div class="round-count-down">
        <span class="boss-round">ROUND 12</span>
        <mirage-countdown targetDate="2022-02-28T00:00:00" :dark="isLocked" themePurple class="hidden-day" />
      </div>
      <div class="info-entry">
        <p class="desc">
          <span class="icon-locked" v-if="isLocked"></span>
          <span class="desc-txt">Apr 6th 17:00에 전투가 시작됩니다.</span>
          <v-tooltip content-class="mirage-tooltip" attach=".mirage-boss-breifing" top max-width="240">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-mirage-tooltip">icon</v-icon>
            </template>
            <div class="tooltip-wrap">
              <p>툴팁 내용 내용 내용 내용 내용 내용</p>
            </div>
          </v-tooltip>
        </p>
        <div class="button-wrap">
          <button type="button" class="btn-time-table">open time table</button>
        </div>
      </div>
    </div>
    <div class="section-recruit" v-if="!isLocked">
      <span class="symbol-mirage">RECRUIT NOW</span>
    </div>
    <div class="battle-status" v-if="isDefeat">
      <span>BOSS DEFEATED</span>
    </div>
    <div class="battle-status" v-if="isInBattle">
      <span>IN BATTLE NOW</span>
    </div>
    <div class="breifing-content">
      <div class="boss-header">
        <em>EUNSIL</em>THE LUNATIC TAILOR
        <span class="mirax-info" v-if="!isMobile"> MiraX<em>+20</em></span>
      </div>
      <div class="boss-footer">
        <p>the greatest and most respected designer in the MIR4 Multiverse. I'm not dealing with anyone.</p>
        <p>If you defeat me as the best 10 Dragonian, I'll give you a chance to get some great wearable items.</p>
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
            <li>순위별 리워드 획득 확률에 의해 Class별 <em>외형 아이템</em> 1종 지급</li>
            <li>10위까지 모든 참가 캐릭터에게 <em>'미라지 스크롤'</em> 지급</li>
          </ul>
          <template v-if="isMobile">
            <div class="wrap-reward-swiper">
              <swiper ref="swiperReward" :options="swiperOptions">
                <swiper-slide v-for="item in rewardItems" :key="item.id">
                  <MirageItemInfo :item="item" />
                </swiper-slide>
              </swiper>
            </div>
          </template>
          <template v-else>
            <ul class="list-reward">
              <li v-for="item in rewardItems" :key="item.id">
                <div @click="openItemCard">
                  <MirageItemInfo :item="item" />
                </div>
              </li>
            </ul>
          </template>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-dialog content-class="dialog-card" v-model="dialogItemCard">
      <v-card>
        <Card itemType="epic"></Card>
        <button type="button" class="btn-close-dialog" @click="dialogItemCard = false">Close Dialog</button>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import MobileDetect from 'mobile-detect';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';

import Card from '@/components-ui/common/Card';
import MirageItemInfo from '@/components-ui/common/MirageItemInfo';
import MirageCountdown from '@/components-ui/desktop/MirageCountdown';
import 'swiper/css/swiper.css';

export default defineComponent({
  name: 'MirageBossBreifing',
  components: {
    MirageCountdown,
    MirageItemInfo,
    Swiper,
    SwiperSlide,
    Card,
  },
  props: {
    isLocked: {
      type: Boolean,
      required: false,
      default: () => false,
    },
    isInBattle: {
      type: Boolean,
      required: false,
    },
    isDefeat: {
      type: Boolean,
      required: false,
    },
  },
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
    rewardItems: [
      {
        grade: 0,
        category: 'Warrior',
        uniqueNo: '',
        itemName: 'Boundless Redmoon Devil Sword',
        imgPath: 'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Equip/Item_Equip_Pcm_01/PCM_Armor_03_Top.png',
      },
      {
        grade: 1,
        category: 'Sorcerer',
        uniqueNo: 'nft icon',
        itemName: 'Dark King Martial Uniform Bottom',
        imgPath: 'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Equip/Item_Equip_Pcm_01/PCM_Armor_04_Pants.png',
      },
      {
        grade: 5,
        category: 'Taoist',
        uniqueNo: '',
        itemName: 'Lunatic Taoist Suite',
        imgPath: 'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Equip/Item_Equip_Pcm_01/PCM_Weapon_02.png',
      },
      {
        grade: 3,
        category: 'Lancer',
        uniqueNo: 'nft icon',
        itemName: 'Lunatic Lancer Suite',
        imgPath: 'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Equip/Item_Equip_Pcm_01/PCM_Armor_03_Top.png',
      },
      {
        grade: 4,
        category: 'Arbalist',
        uniqueNo: '',
        itemName: 'Lunatic Arbalist Suite',
        imgPath: 'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Equip/Item_Equip_Pcm_01/PCM_Armor_03_Top.png',
      },
      {
        grade: 2,
        category: 'Default',
        uniqueNo: 'nft icon',
        itemName: 'MIRAGE Scroll',
        imgPath:
          'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Character_Force_MaterialIcon_02_01.png',
      },
    ],
    // for swiper
    swiperOptions: {
      slidesPerView: 'auto',
    },

    dialogItemCard: false,
  }),
  methods: {
    openItemCard() {
      this.dialogItemCard = true;
    },
  },
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
    swiperReward() {
      return this.$refs.swiperReward.$swiper;
    },
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-boss-breifing';
</style>
