<template>
  <div class="wrap-stat">
    <ul class="list-stat">
      <li class="total">
        <span class="subject">Power Score</span>
        <strong class="value">900,000</strong>
      </li>
      <li>
        <img
          src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_ADDPhysicalDamage.png"
          width="32"
          class="icon-subject"
        />
        <span class="subject">HP</span>
        <strong class="value">114,556</strong>
      </li>
      <li>
        <img src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png" width="32" class="icon-subject" />
        <span class="subject">MP</span>
        <strong class="value">114,556</strong>
      </li>
      <li>
        <img src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_AddStunPer.png" width="32" class="icon-subject" />
        <span class="subject">PHYS ATK</span>
        <strong class="value">888,888</strong>
      </li>
      <li>
        <img src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_AddStunPer.png" width="32" class="icon-subject" />
        <span class="subject">Spell ATK</span>
        <strong class="value">888,888</strong>
      </li>
      <li>
        <img
          src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_ADDAllDamage.png"
          width="32"
          class="icon-subject"
        />
        <span class="subject">PHYS DEF</span>
        <strong class="value">999,999</strong>
      </li>
      <li>
        <img src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Dodge.png" width="32" class="icon-subject" />
        <span class="subject">Spell DEF</span>
        <strong class="value">123,456</strong>
      </li>
    </ul>
    <div class="wrap-score">
      <div class="score-item">
        <span>MIRAGE Score</span>
        <em class="volume score">292,601</em>
      </div>
      <div class="score-item">
        <span>MIRAGE - EXP</span>
        <em class="volume">500</em>
      </div>
    </div>
    <div class="wrap-btn">
      <v-dialog content-class="dialog-stat-info theme-dark" v-model="dialogStatInfo" persistent fullscreen>
        <template v-slot:activator="{ on, attrs }">
          <button type="button" v-bind="attrs" v-on="on" class="btn"><span>Stat Detail</span></button>
        </template>
        <div class="content">
          <v-btn class="btn-close" @click="dialogStatInfo = false" fab plain x-small>
            <v-icon color="#fff" size="26">mdi-close</v-icon>
          </v-btn>
          <!-- dialogTitle이 있는 경우 대비 -->
          <div class="dialog-header">
            <h2 class="title">Info</h2>
          </div>

          <div class="dialog-content">
            <ul class="list-stat-info">
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_ADDPhysicalDamage.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">PHYS ATK</span>
                <strong class="value">300</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy Accuracy Accuracy Accuracy Accuracy Accuracy Accuracy Accuracy </span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
              <li>
                <img
                  src="https://file.mir4global.com/xdraco-thumb/Icon/Symbol/Symbol_Ico_Status/Ico_Status_Accuracy.png"
                  width="32"
                  class="icon-subject"
                />
                <span class="subject">Accuracy</span>
                <strong class="value">99,999</strong>
              </li>
            </ul>
          </div>
        </div>
      </v-dialog>
    </div>

    <!-- Stat empty case -->
    <div class="data-empty" data-empty-message="플레이 상태의 캐릭터 상세 정보는 제공되지 않습니다."></div>
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
    dialogStatInfo: false,
  }),
});
</script>

<style lang="scss"></style>
