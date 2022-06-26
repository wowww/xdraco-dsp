<template>
  <div class="mirage-result-list" :class="{ 'is-battle': isInBattle }">
    <div class="list-header" v-if="!isMobile">
      <div class="col-rank">Rank</div>
      <div class="col-score">MIRAGE Score</div>
      <div class="col-price">Bid Registered</div>
      <template v-if="isInBattle">
        <div class="col-battle"></div>
      </template>
      <template v-else>
        <div class="col-wound">Wound Status</div>
        <div class="col-reward">Treasures & Rewards</div>
      </template>
    </div>
    <ul class="list-raid-result">
      <li
        v-for="item in rankData"
        :key="item.id"
        :data-character-class="item.class"
        :data-damage-type="item.damage"
        :class="{ 'is-highlight': item.isHighlight }"
      >
        <div class="col-rank">
          <span class="rank">{{ item.rank }}</span>
          <span class="name">Warrior-BR03</span>
        </div>
        <div class="col-score">
          <span class="col-title">MIRAGE Score</span>
          <span class="mirage-score">456,450</span>
        </div>
        <div class="col-price">
          <span class="col-title">Bid price</span>
          <div class="wrap-price-value">
            <span class="price-vigor">399</span>
            <span class="bid-rank">1st</span>
            <span class="txt-buff">Loot chance buff <em>30%</em></span>
          </div>
        </div>
        <template v-if="isInBattle">
          <div class="col-battle"><img src="@/assets/img/common/mirage/ico-40-battle.webp" width="20" alt="" />IN Battle</div>
        </template>
        <template v-else>
          <div class="col-wound" v-if="item.damage === '1'">
            <span class="col-title">Wound</span>
            <span class="damaged"><img src="@/assets/img/common/mirage/ico-24-damage.webp" width="24" alt="" />Wounded</span>
          </div>
          <div class="col-wound" v-else-if="item.damage === '2'">
            <span class="col-title">Wound</span>
            <span class="damaged"><img src="@/assets/img/common/mirage/ico-24-damage.webp" width="24" alt="" />Seriously Wounded</span>
          </div>
          <div class="col-wound" v-else-if="item.damage === '3'">
            <span class="col-title">Wound</span>
            <span class="damaged"><img src="@/assets/img/common/mirage/ico-24-damage.webp" width="24" alt="" />Critically Wounded</span>
          </div>
          <div class="col-wound" v-else>
            <span class="col-title">Wound</span>
            <span class="damaged">-</span>
          </div>
          <div class="col-reward">
            <span class="col-title">Reward</span>
            <div @click="openItemCard" v-if="item.hasSpecialReward">
              <MirageItemInfo showType="itemonly" :item="rewardItems[0]" />
            </div>
            <div @click="openItemCard">
              <MirageItemInfo showType="itemonly" :item="rewardItems[1]" />
            </div>
          </div>
        </template>
      </li>
    </ul>
    <v-dialog content-class="dialog-card" v-model="dialogItemCard">
      <v-card>
        <Card itemType="epic"></Card>
        <button type="button" class="btn-close-dialog" @click="dialogItemCard = false">Close Dialog</button>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';
import MirageItemInfo from '@/components-ui/common/MirageItemInfo';
import Card from '@/components-ui/common/Card';

export default defineComponent({
  name: 'MirageResultList',
  components: {
    MirageItemInfo,
    Card,
  },
  props: {
    isInBattle: {
      type: Boolean,
      required: false,
    },
    rankData: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),

    rewardItems: [
      {
        grade: 4,
        category: 'Warrior',
        uniqueNo: 'nft icon',
        itemName: 'Boundless Redmoon Devil Sword',
        imgPath: 'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Equip/Item_Equip_Pcm_01/PCM_Armor_03_Top.png',
      },
      {
        grade: 2,
        category: 'Default',
        uniqueNo: '',
        itemName: 'MIRAGE Scroll',
        imgPath:
          'https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Meterial_01/Item_Character_Force_MaterialIcon_02_01.png',
      },
    ],
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
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-result-list';
</style>
