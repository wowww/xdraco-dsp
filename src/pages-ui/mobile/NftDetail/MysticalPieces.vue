<template>
  <div class="wrap-spirit">
    <v-tabs v-model="tabMystical">
      <v-tab class="tab-spirit-item">
        <span>Deck 1</span>
      </v-tab>
      <v-tab class="tab-spirit-item">
        <span>Deck 2</span>
      </v-tab>
      <v-tab class="tab-spirit-item">
        <span>Deck 3</span>
      </v-tab>
      <v-tab class="tab-spirit-item" disabled>
        <span>Deck 4</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items class="wrap-item-circle size-sm" v-model="tabMystical">
      <v-tab-item>
        <ul class="list-item">
          <li class="uncommon">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Horse01.png"
                  width="40"
                  alt=""
                />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Deck1 stone of Force</span>
            </div>
          </li>
          <li class="rare">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Purple.png"
                  width="40"
                  alt=""
                />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Deck1 stone of Force</span>
            </div>
          </li>
          <li class="epic">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Horse02.png"
                  width="40"
                  alt=""
                />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Deck1 stone of Force</span>
            </div>
          </li>
          <li class="legendary">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Horse03.png"
                  width="40"
                  alt=""
                />
              </span>
            </div>
            <div class="desc">
              <span class="name">Deck1 stone of Force</span>
            </div>
          </li>
          <li class="common">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Horse01.png"
                  width="40"
                  alt=""
                />
              </span>
            </div>
            <div class="desc">
              <span class="name">Deck1 stone of Force</span>
            </div>
          </li>
          <li class="common">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Horse01.png"
                  width="40"
                  alt=""
                />
              </span>
            </div>
            <div class="desc">
              <span class="name">Deck1 stone of Force</span>
            </div>
          </li>
          <li class="common">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Horse01.png"
                  width="40"
                  alt=""
                />
              </span>
            </div>
            <div class="desc">
              <span class="name">Deck1 stone of Force</span>
            </div>
          </li>
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
            <div class="locked">
              <span>Locked</span>
            </div>
          </li>
        </ul>
      </v-tab-item>

      <v-tab-item>
        <ul class="list-item">
          <li class="uncommon">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Horse01.png"
                  width="40"
                  alt=""
                />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Deck2 stone of Force</span>
            </div>
          </li>
          <li class="rare">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Purple.png"
                  width="40"
                  alt=""
                />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Deck2 stone of Force</span>
            </div>
          </li>
          <li class="epic">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Horse02.png"
                  width="40"
                  alt=""
                />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Deck2 stone of Force</span>
            </div>
          </li>
          <li class="legendary">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Horse03.png"
                  width="40"
                  alt=""
                />
              </span>
            </div>
            <div class="desc">
              <span class="name">Deck2 stone of Force</span>
            </div>
          </li>
          <li class="common">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Horse01.png"
                  width="40"
                  alt=""
                />
              </span>
            </div>
            <div class="desc">
              <span class="name">Deck2 stone of Force</span>
            </div>
          </li>
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
            <div class="locked">
              <span>Locked</span>
            </div>
          </li>
        </ul>
      </v-tab-item>

      <v-tab-item>
        <ul class="list-item">
          <li class="uncommon">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Horse01.png"
                  width="40"
                  alt=""
                />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="rare">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Purple.png"
                  width="40"
                  alt=""
                />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="epic">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Horse02.png"
                  width="40"
                  alt=""
                />
                <span class="tier-badge">III</span>
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="legendary">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Horse03.png"
                  width="40"
                  alt=""
                />
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li class="common">
            <div class="wrap-thumb">
              <span class="bg">
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Content/UI/Atlas_N_Resource/Icon/Item/Item_MysticalPiece_01/Item_MysticalPiece_Horse01.png"
                  width="40"
                  alt=""
                />
              </span>
            </div>
            <div class="desc">
              <span class="name">Magic stone of Force</span>
            </div>
          </li>
          <li>
            <div class="wrap-thumb">
              <span class="bg"></span>
            </div>
            <div class="locked">
              <span>Locked</span>
            </div>
          </li>
        </ul>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  components: {
    // DspNav,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    tabMystical: null,
  }),
});
</script>

<style lang="scss"></style>
