<template>
  <div>
    <ul>
      <li>
        <v-dialog content-class="wemix-qr-wrap" max-width="480" :fullscreen="isMobile" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on">Dialog for Wemix Scan QR</button>
          </template>

          <template v-slot:default="dialogWemixScanQr">
            <div class="content nft-buy-qr">
              <v-btn class="btn-close" @click="dialogWemixScanQr.value = false" fab plain x-small>
                <v-icon color="#000" size="26">mdi-close</v-icon>
              </v-btn>
              <!-- dialogTitle이 있는 경우 대비 -->
              <div class="dialog-header">&nbsp;</div>
              <div class="contents-center">
                <h4>
                  <img src="@/assets/img/common/hsp-my-stake/logo-hsp.webp" width="118" alt="HSP" />
                </h4>
                <p class="desc">Scan QR code with your WEMIX WALLET app to stake HYDRAs.</p>
                <p class="count">Time left <span>03:00</span></p>
                <canvas class="qrcode-area" ref="qrRef" />
                <span class="qr-wemix">WEMIX</span>
              </div>
            </div>
            <div class="step-area">
              <div class="step-item step-1">
                <span class="step-title">STEP 1</span>
                <span class="step-img"></span>
                <p class="step-desc">Start WEMIX<br />Wallet</p>
              </div>
              <span class="step-next"></span>
              <div class="step-item step-2">
                <span class="step-title">STEP 2</span>
                <span class="step-img"></span>
                <p class="step-desc">Click the icon<br />on th top</p>
              </div>
              <span class="step-next"></span>
              <div class="step-item step-3">
                <span class="step-title">STEP 3</span>
                <span class="step-img"></span>
                <p class="step-desc">Verify after<br />code scan</p>
              </div>
              <p class="qr-bottom">Available to scan with other QR Code readers.</p>
            </div>
          </template>
        </v-dialog>
      </li>

      <!-- 제플린 02_HSP_stake1_firststake -->
      <li>
        <v-dialog
          content-class="dialog-hsp"
          :max-width="!isMobile ? '720px' : '100%'"
          scrollable
          :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
        >
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on">Stake Dialog</button>
          </template>

          <template v-slot:default="dialogTest1">
            <v-card class="dialog-contents" tile dark>
              <v-card-title class="title">
                <h2>{{ t('t.hsp.main.dialog.stake') }}</h2>
                <v-spacer></v-spacer>

                <v-btn class="close" @click="dialogTest1.value = false" fab icon>
                  <img src="@/assets/img/common/hsp-dialog/icon-close-white.webp" />
                </v-btn>
              </v-card-title>

              <v-divider></v-divider>

              <v-card-actions class="actions">
                <div class="hydra-label flex" :class="{ error: isError }">
                  <div class="input-header">
                    <v-tooltip v-if="!isMobile" content-class="hydra-tooltip" :open-on-click="isMobile" :open-on-hover="!isMobile" top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" class="btn-info" icon x-small>
                          <img src="@/assets/img/common/hsp-dialog/ico-info.webp" />
                        </v-btn>
                      </template>

                      <span class="tooltip-content">
                        <span>·</span>
                        <span>{{ t('s.hsp.main.add-stake.info') }}</span>
                      </span>
                    </v-tooltip>

                    <span class="input-message">
                      {{ !isErrorUnstake ? t('s.hsp.main.input-stake.unstake') : t('s.hsp.main.input-stake.unstake-lack') }}
                    </span>

                    <v-spacer></v-spacer>

                    <v-tooltip v-if="isMobile" content-class="hydra-tooltip" :open-on-click="isMobile" :open-on-hover="!isMobile" top>
                      <template v-slot:activator="{ on, attrs }">
                        <button v-bind="attrs" v-on="on" class="btn-info">
                          <img src="@/assets/img/common/hsp-dialog/ico-info.webp" />
                        </button>
                      </template>

                      <span class="tooltip-content">
                        <span>·</span>
                        <span>{{ t('s.hsp.main.add-stake.info') }}</span>
                      </span>
                    </v-tooltip>
                  </div>

                  <v-spacer></v-spacer>

                  <div class="options">
                    <div class="amount-wrapper">
                      <div class="amount-label">{{ t('w.hsp.main.add-stake.balance') }}</div>
                      <div class="amount">{{ amount }} HYD</div>
                    </div>

                    <v-spacer></v-spacer>

                    <v-btn v-if="isMobile" @click="selectAll" class="max" light>{{ t('w.hsp.main.un-stake.max') }}</v-btn>
                    <v-btn v-if="isMobile" @click="selectAllDecimal" class="all-decimal text-capitalize" light>{{
                      t('w.hsp.main.stake.all-decimal')
                    }}</v-btn>
                  </div>
                </div>

                <div class="hydra-input" :class="{ error: isError }">
                  <img class="hydra-icon" src="@/assets/img/common/hsp-dialog/img-icon-hydra-gold.webp" alt="hydra" />

                  <v-text-field class="input" type="tel" placeholder="0" v-model="stake" dense solo flat :hide-details="true"></v-text-field>

                  <img v-if="stake" @click="clearStake" class="clear" src="@/assets/img/common/hsp-dialog/icon-clear.webp" alt="clear" />

                  <v-btn v-if="!isMobile" @click="selectAll" class="max" light>{{ t('w.hsp.main.un-stake.max') }}</v-btn>
                  <v-btn v-if="!isMobile" @click="selectAllDecimal" class="text-capitalize" light>{{ t('w.hsp.main.stake.all-decimal') }}</v-btn>
                </div>

                <button type="button" class="btn-stake text-uppercase" :class="{ error: isError }" :disabled="isError">
                  {{ t('t.hsp.main.dialog.stake') }}
                </button>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </li>

      <!-- 제플린 02_HSP_stake2 -->
      <li>
        <v-dialog
          content-class="dialog-hsp"
          scrollable
          :max-width="!isMobile ? '720px' : null"
          :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
        >
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on">Stake Dialog Additional</button>
          </template>

          <template v-slot:default="dialogTest2">
            <v-card class="dialog-contents" tile dark>
              <v-card-title class="title">
                <h2>{{ t('t.playbook.section5.stakemore') }}</h2>
                <v-spacer></v-spacer>

                <v-btn class="close" @click="dialogTest2.value = false" fab icon>
                  <img src="@/assets/img/common/hsp-dialog/icon-close-white.webp" />
                </v-btn>
              </v-card-title>

              <v-divider></v-divider>

              <v-card-text class="additional">
                <div class="additional-info-title added">{{ t('w.hsp.main.add-stake') }}</div>

                <div class="additinal-info">
                  <div>
                    <span class="dot">·</span>
                    <span v-html="t('s.hsp.main.add-stake')"></span>
                  </div>
                  <div>
                    <span class="dot">·</span>
                    <span>{{ t('s.hsp.main.add-stake2') }}</span>
                  </div>
                </div>

                <div class="box-wrapper">
                  <div class="additinal-stake-box">
                    <div>{{ t('w.hsp.main.add-staked') }}</div>

                    <div class="box-contents">
                      <span class="box">
                        <img class="hydra-icon" src="@/assets/img/common/hsp-dialog/img-icon-hydra-gold.webp" alt="hydra" />

                        <v-tooltip content-class="hydra-tooltip price" :open-on-click="isMobile" :open-on-hover="!isMobile" top>
                          <template v-slot:activator="{ on, attrs }">
                            <span
                              class="count"
                              :class="{ error: isErrorAdditional, accent: stake, empty: !sumStake }"
                              v-html="getStyledNumber(sumStake)"
                              v-bind="attrs"
                              v-on="on"
                            ></span>
                          </template>

                          <template class="tooltip-content">
                            <span v-html="`${getStyledNumber(sumStake)}`"></span>
                            <span> HYD</span>
                          </template>
                        </v-tooltip>
                      </span>
                    </div>
                  </div>

                  <div class="additinal-stake-box">
                    <div>{{ t('w.hsp.main.reward-claim') }}</div>

                    <div class="box-contents">
                      <span class="box">
                        <img class="hydra-icon" src="@/assets/img/common/hsp-dialog/img-icon-hydra-gold.webp" alt="hydra" />

                        <v-tooltip content-class="hydra-tooltip price" :open-on-click="isMobile" :open-on-hover="!isMobile" top>
                          <template v-slot:activator="{ on, attrs }">
                            <span class="count" v-html="getStyledNumber(reward)" v-bind="attrs" v-on="on"></span>
                          </template>

                          <template class="tooltip-content">
                            <span v-html="`${getStyledNumber(reward)}`"></span>
                            <span> HYD</span>
                          </template>
                        </v-tooltip>

                        <v-btn @click="refreshReward" width="24" height="24" fab icon>
                          <img :class="{ on: refreshLoading }" class="icon-refresh" src="@/assets/img/common/hsp-dialog/ico-refresh.webp" />
                        </v-btn>
                      </span>
                    </div>
                  </div>
                </div>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions class="actions">
                <div class="hydra-label" :class="{ error: isErrorAdditional }">
                  <div class="input-header">
                    <v-tooltip v-if="!isMobile" content-class="hydra-tooltip" :open-on-click="isMobile" :open-on-hover="!isMobile" top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" class="btn-info" icon x-small>
                          <img src="@/assets/img/common/hsp-dialog/ico-info.webp" />
                        </v-btn>
                      </template>

                      <span class="tooltip-content">
                        <span>·</span>
                        <span>{{ t('s.hsp.main.add-stake.info') }}</span>
                      </span>
                    </v-tooltip>

                    <span class="input-message">
                      {{ !isErrorUnstake ? t('s.hsp.main.input-stake.unstake') : t('s.hsp.main.input-stake.unstake-lack') }}
                    </span>

                    <v-spacer></v-spacer>

                    <v-tooltip v-if="isMobile" content-class="hydra-tooltip" :open-on-click="isMobile" :open-on-hover="!isMobile" top>
                      <template v-slot:activator="{ on, attrs }">
                        <button v-bind="attrs" v-on="on" class="btn-info">
                          <img src="@/assets/img/common/hsp-dialog/ico-info.webp" />
                        </button>
                      </template>

                      <span class="tooltip-content">
                        <span>·</span>
                        <span>{{ t('s.hsp.main.add-stake.info') }}</span>
                      </span>
                    </v-tooltip>
                  </div>

                  <v-spacer></v-spacer>

                  <div class="options">
                    <div class="amount-wrapper">
                      <div class="amount-label">{{ t('w.hsp.main.add-stake.balance') }}</div>
                      <div class="amount">{{ amount }} HYD</div>
                    </div>

                    <v-spacer></v-spacer>

                    <v-btn v-if="isMobile" @click="selectAll" class="max" light>{{ t('w.hsp.main.un-stake.max') }}</v-btn>
                    <v-btn v-if="isMobile" @click="selectAllDecimal" class="all-decimal text-capitalize" light>{{
                      t('w.hsp.main.stake.all-decimal')
                    }}</v-btn>
                  </div>
                </div>

                <div class="hydra-input" :class="{ error: isErrorAdditional }">
                  <img class="hydra-icon" src="@/assets/img/common/hsp-dialog/img-icon-hydra-gold.webp" alt="hydra" />

                  <v-text-field class="input" type="tel" placeholder="0" v-model="stake" dense solo flat :hide-details="true"></v-text-field>

                  <img v-if="stake" @click="clearStake" class="clear" src="@/assets/img/common/hsp-dialog/icon-clear.webp" alt="clear" />

                  <v-btn @click="selectAll" class="max" light>{{ t('w.hsp.main.un-stake.max') }}</v-btn>
                  <v-btn @click="selectAllDecimal" class="text-capitalize" light>{{ t('w.hsp.main.stake.all-decimal') }}</v-btn>
                </div>

                <button type="button" class="btn-stake text-uppercase" :class="{ error: isErrorAdditional }" :disabled="isErrorAdditional">
                  {{ t('t.hsp.main.dialog.stake') }}
                </button>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </li>

      <!-- 제플린 02_HSP_unstake1 -->
      <li>
        <v-dialog
          content-class="dialog-hsp"
          scrollable
          :max-width="!isMobile ? '720px' : null"
          :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
        >
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on">Unstake Dialog</button>
          </template>

          <template v-slot:default="dialogTest3">
            <v-card class="dialog-contents" tile dark>
              <v-card-title class="title">
                <h2>{{ t('t.hsp.main.un-stake') }}</h2>

                <v-spacer></v-spacer>

                <v-btn class="close" @click="dialogTest3.value = false" fab icon>
                  <img src="@/assets/img/common/hsp-dialog/icon-close-white.webp" />
                </v-btn>
              </v-card-title>

              <v-divider></v-divider>

              <v-card-text class="additional">
                <div class="additional-info-title">{{ t('s.hsp.main.un-stake') }}</div>

                <div class="additinal-info">
                  <div>
                    <span class="dot">·</span>
                    <span v-html="t('s.hsp.main.un-stake2')"></span>
                  </div>
                  <div>
                    <span class="dot">·</span>
                    <span>{{ t('s.hsp.main.un-stake3') }}</span>
                  </div>
                </div>

                <div class="box-wrapper">
                  <div class="additinal-stake-box flex">
                    <div>{{ t('w.hsp.main.unstaked') }}</div>

                    <div class="box-contents">
                      <span class="box">
                        <img class="hydra-icon" src="@/assets/img/common/hsp-dialog/img-icon-hydra-gold.webp" alt="hydra" />

                        <v-tooltip content-class="hydra-tooltip price" :open-on-click="isMobile" :open-on-hover="!isMobile" top>
                          <template v-slot:activator="{ on, attrs }">
                            <span class="count" :class="{ empty: !sumStake }" v-html="getStyledNumber(staked)" v-bind="attrs" v-on="on"></span>
                          </template>

                          <template class="tooltip-content">
                            <span v-html="`${getStyledNumber(staked)}`"></span>
                            <span> HYD</span>
                          </template>
                        </v-tooltip>
                      </span>
                    </div>
                  </div>

                  <img v-if="!isMobile" class="icon-add" src="@/assets/img/common/hsp-dialog/ico-plus.webp" />

                  <div class="additinal-stake-box flex">
                    <div>{{ t('w.hsp.history.reward') }}</div>

                    <div class="box-contents">
                      <span class="box">
                        <img class="hydra-icon" src="@/assets/img/common/hsp-dialog/img-icon-hydra-gold.webp" alt="hydra" />

                        <v-tooltip content-class="hydra-tooltip price" :open-on-click="isMobile" :open-on-hover="!isMobile" top>
                          <template v-slot:activator="{ on, attrs }">
                            <span class="count" v-html="getStyledNumber(reward)" v-bind="attrs" v-on="on"></span>
                          </template>

                          <template class="tooltip-content">
                            <span v-html="`${getStyledNumber(reward)}`"></span>
                            <span> HYD</span>
                          </template>
                        </v-tooltip>

                        <v-btn @click="refreshReward" width="24" height="24" fab icon>
                          <img :class="{ on: refreshLoading }" class="icon-refresh" src="@/assets/img/common/hsp-dialog/ico-refresh.webp" />
                        </v-btn>
                      </span>
                    </div>
                  </div>
                </div>
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions class="actions">
                <div class="hydra-label" :class="{ error: isErrorUnstake }">
                  <div class="input-header">
                    <v-tooltip v-if="!isMobile" content-class="hydra-tooltip" :open-on-click="isMobile" :open-on-hover="!isMobile" top>
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn v-bind="attrs" v-on="on" class="btn-info" icon x-small>
                          <img src="@/assets/img/common/hsp-dialog/ico-info.webp" />
                        </v-btn>
                      </template>

                      <span class="tooltip-content">
                        <span>·</span>
                        <span>{{ t('s.hsp.main.add-stake.info') }}</span>
                      </span>
                    </v-tooltip>

                    <span class="input-message">
                      {{ !isErrorUnstake ? t('s.hsp.main.input-stake.unstake') : t('s.hsp.main.input-stake.unstake-lack') }}
                    </span>

                    <v-spacer></v-spacer>

                    <v-tooltip v-if="isMobile" content-class="hydra-tooltip" :open-on-click="isMobile" :open-on-hover="!isMobile" top>
                      <template v-slot:activator="{ on, attrs }">
                        <button v-bind="attrs" v-on="on" class="btn-info">
                          <img src="@/assets/img/common/hsp-dialog/ico-info.webp" />
                        </button>
                      </template>

                      <span class="tooltip-content">
                        <span>·</span>
                        <span>{{ t('s.hsp.main.add-stake.info') }}</span>
                      </span>
                    </v-tooltip>
                  </div>

                  <v-spacer></v-spacer>

                  <div class="options">
                    <div class="amount-wrapper">
                      <div class="amount-label">{{ t('w.hsp.main.un-stake.my-staked') }}</div>
                      <div class="amount">{{ staked }} HYD</div>
                    </div>

                    <v-spacer></v-spacer>

                    <v-btn v-if="isMobile" @click="selectAll" class="max" light>{{ t('w.hsp.main.un-stake.max') }}</v-btn>
                    <v-btn v-if="isMobile" @click="selectAllDecimal" class="all-decimal text-capitalize" light>{{
                      t('w.hsp.main.stake.all-decimal')
                    }}</v-btn>
                  </div>
                </div>

                <div class="hydra-input" :class="{ error: isErrorUnstake }">
                  <img class="hydra-icon" src="@/assets/img/common/hsp-dialog/img-icon-hydra-gold.webp" alt="hydra" />

                  <v-text-field class="input" type="tel" placeholder="0" v-model="stake" dense solo flat :hide-details="true"></v-text-field>

                  <img v-if="stake" @click="clearStake" class="clear" src="@/assets/img/common/hsp-dialog/icon-clear.webp" alt="clear" />

                  <v-btn @click="selectUnstakeAll" class="max" light>{{ t('w.hsp.main.un-stake.max') }}</v-btn>
                  <v-btn @click="selectUnstakeAllDecimal" class="text-capitalize" light>{{ t('w.hsp.main.stake.all-decimal') }}</v-btn>
                </div>

                <button type="button" class="btn-stake btn-unstake text-uppercase" :class="{ error: isErrorUnstake }" :disabled="isErrorUnstake">
                  {{ t('t.hsp.main.un-stake') }}
                </button>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </li>

      <!-- 제플린 02_HSP_reward -->
      <li>
        <v-dialog
          content-class="dialog-hsp"
          scrollable
          :max-width="!isMobile ? '720px' : null"
          :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
        >
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on">Reward Claim Dialog</button>
          </template>

          <template v-slot:default="dialogTest4">
            <v-card class="dialog-contents" tile dark>
              <v-card-title class="title">
                <h2>{{ t('w.hsp.main.reward-claim') }}</h2>
                <v-spacer></v-spacer>

                <v-btn class="close" @click="dialogTest4.value = false" fab icon>
                  <img src="@/assets/img/common/hsp-dialog/icon-close-white.webp" />
                </v-btn>
              </v-card-title>

              <v-divider></v-divider>

              <v-card-text class="additional pb-0">
                <div class="additional-info-title">{{ t('s.hsp.main.reward-claim') }}</div>

                <div class="additinal-info">
                  <div>
                    <span class="dot">·</span>
                    <span v-html="t('s.hsp.main.reward-claim2')"></span>
                  </div>
                  <div>
                    <span class="dot">·</span>
                    <span>{{ t('s.hsp.main.reward-claim3') }}</span>
                  </div>
                </div>

                <div class="reward-label">{{ t('w.hsp.main.reward-claim.claim') }}</div>

                <div class="reward-box">
                  <img class="hydra-icon" src="@/assets/img/common/hsp-dialog/img-icon-hydra-gold.webp" alt="hydra" />

                  <v-tooltip content-class="hydra-tooltip price" :open-on-click="isMobile" :open-on-hover="!isMobile" top>
                    <template v-slot:activator="{ on, attrs }">
                      <span class="count" v-html="getStyledNumber(reward)" v-bind="attrs" v-on="on"></span>
                    </template>

                    <span class="tooltip-content" v-html="`${getStyledNumber(reward)} HYD`"></span>
                  </v-tooltip>

                  <v-btn @click="refreshReward" width="24" height="24" fab icon>
                    <img :class="{ on: refreshLoading }" class="icon-refresh" src="@/assets/img/common/hsp-dialog/ico-refresh.webp" />
                  </v-btn>
                </div>
              </v-card-text>

              <v-divider v-if="isMobile"></v-divider>

              <v-card-actions class="actions">
                <button type="button" class="btn-stake btn-unstake text-uppercase">{{ t('w.hsp.main.reward-claim') }}</button>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </li>

      <!-- 제플린 02_HSP_stake3 -->
      <li>
        <v-dialog
          content-class="dialog-hsp"
          scrollable
          :max-width="!isMobile ? '480px' : null"
          persistent
          :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
        >
          <template v-slot:activator="{ on }">
            <div>
              <button type="button" v-on="on" @click="onLoading(false)">Stake Loading(Success) Dialog</button>
              <span style="margin: 0 16px">\</span>
              <button type="button" v-on="on" @click="onLoading(true)">Stake Loading(Fail) Dialog</button>
            </div>
          </template>

          <template v-slot:default="dialogTest5">
            <v-card class="dialog-loading-contents" tile>
              <v-btn class="close" @click="dialogTest5.value = false" fab icon absolute small>
                <v-icon color="#000">mdi-close</v-icon>
              </v-btn>

              <v-card-text class="loading-contents">
                <img v-if="loading" class="icon-loading" src="@/assets/img/desktop/popup/ico-status-loading.webp" />

                <h2 class="loading-status">
                  {{
                    loading
                      ? t('t.hsp.main.loading.doing')
                      : !loadingError
                      ? t('t.hsp.main.loading.success-stake')
                      : t('t.hsp.main.loading.fail-stake')
                  }}
                </h2>

                <div class="loading-info">
                  {{
                    loading ? t('s.hsp.main.loading.waiting') : !loadingError ? t('s.hsp.main.loading.success-stake') : t('s.hsp.main.loading.fail')
                  }}
                </div>

                <div v-if="loadingError" class="loading-info">Error 60660</div>

                <v-btn @click="dialogTest5.value = false" class="loading-close" color="#aa00ff" elevation="0" x-large dark>{{
                  t('w.hsp.main.stake.ok')
                }}</v-btn>
              </v-card-text>
            </v-card>
          </template>
        </v-dialog>
      </li>

      <!-- 제플린 02_HSP_unstake2 -->
      <li>
        <v-dialog
          content-class="dialog-hsp"
          scrollable
          :max-width="!isMobile ? '480px' : null"
          persistent
          :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
        >
          <template v-slot:activator="{ on }">
            <div>
              <button type="button" v-on="on" @click="onLoading(false)">Unstake Loading(Success) Dialog</button>
              <span style="margin: 0 16px">\</span>
              <button type="button" v-on="on" @click="onLoading(true)">Unstake Loading(Fail) Dialog</button>
            </div>
          </template>

          <template v-slot:default="dialogTest6">
            <v-card class="dialog-loading-contents" tile>
              <v-btn class="close" @click="dialogTest6.value = false" fab icon absolute small>
                <v-icon color="#000">mdi-close</v-icon>
              </v-btn>

              <v-card-text class="loading-contents">
                <img v-if="loading" class="icon-loading" src="@/assets/img/desktop/popup/ico-status-loading.webp" />

                <h2 class="loading-status">
                  {{
                    loading
                      ? t('t.hsp.main.loading.doing')
                      : !loadingError
                      ? t('t.hsp.main.loading.success-unstake')
                      : t('t.hsp.main.loading.fail-unstake')
                  }}
                </h2>

                <div class="loading-info">
                  {{
                    loading
                      ? t('s.hsp.main.loading.waiting')
                      : !loadingError
                      ? t('s.hsp.main.loading.success-unstake')
                      : t('s.hsp.main.loading.fail-unstake')
                  }}
                </div>

                <div v-if="loadingError" class="loading-info">Error 60660</div>

                <v-btn @click="dialogTest6.value = false" class="loading-close" color="#aa00ff" elevation="0" x-large dark>{{
                  t('w.hsp.main.stake.ok')
                }}</v-btn>
              </v-card-text>
            </v-card>
          </template>
        </v-dialog>
      </li>

      <!-- 제플린 02_HSP_reward2 -->
      <li>
        <v-dialog
          content-class="dialog-hsp"
          scrollable
          :max-width="!isMobile ? '480px' : null"
          persistent
          :transition="isMobile ? 'dialog-bottom-transition' : 'scale-transition'"
        >
          <template v-slot:activator="{ on }">
            <div>
              <button type="button" v-on="on" @click="onLoading(false)">Reward Claim Loading(Success) Dialog</button>
              <span style="margin: 0 16px">\</span>
              <button type="button" v-on="on" @click="onLoading(true)">Reward Claim Loading(Fail) Dialog</button>
            </div>
          </template>

          <template v-slot:default="dialogTest7">
            <v-card class="dialog-loading-contents" tile>
              <v-btn class="close" @click="dialogTest7.value = false" fab icon absolute small>
                <v-icon color="#000">mdi-close</v-icon>
              </v-btn>

              <v-card-text class="loading-contents">
                <img v-if="loading" class="icon-loading" src="@/assets/img/desktop/popup/ico-status-loading.webp" />

                <h2 class="loading-status">
                  {{
                    loading
                      ? t('t.hsp.main.loading.doing')
                      : !loadingError
                      ? t('t.hsp.main.loading.success-reward')
                      : t('t.hsp.main.loading.fail-reward')
                  }}
                </h2>

                <div class="loading-info">
                  {{
                    loading ? t('s.hsp.main.loading.waiting') : !loadingError ? t('s.hsp.main.loading.success-reward') : t('s.hsp.main.loading.fail')
                  }}
                </div>

                <div v-if="loadingError" class="loading-info">Error 60660</div>

                <v-btn @click="dialogTest7.value = false" class="loading-close" color="#aa00ff" elevation="0" x-large dark>{{
                  t('w.hsp.main.stake.ok')
                }}</v-btn>
              </v-card-text>
            </v-card>
          </template>
        </v-dialog>
      </li>

      <li>
        <!-- 05_HSP_history  -->
        <v-dialog content-class="dialog-account" v-model="dialogAccount" max-width="560" persistent :fullscreen="isMobile">
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" class="link-popup">[Show AccountPopup]</button>
          </template>
          <div class="content">
            <v-btn class="btn-close" @click="dialogAccount = false" fab plain x-small>
              <v-icon color="#000" size="26">mdi-close</v-icon>
            </v-btn>
            <div class="dialog-header">
              <h3 class="title"><strong>Account Info</strong></h3>
            </div>
            <v-tabs class="tabs" v-model="tab" grow>
              <v-tabs-slider></v-tabs-slider>
              <v-tab>My Characters</v-tab>
              <v-tab>My Wallet</v-tab>
              <v-tab>History</v-tab>
              <v-tabs-items v-model="tab">
                <v-tab-item>
                  <v-card class="my-character"> </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card class="my-wallet"> </v-card>
                </v-tab-item>
                <v-tab-item>
                  <v-card class="my-activity">
                    <div class="tabs-content">
                      <div class="list-header">
                        <div class="msg-notice">You can check the activity at XDRACO for last 90 days.</div>
                      </div>
                      <!-- 동적스크롤 적용시를 대비하여 iscroll선언. -->
                      <!-- .v-virtual-scroll -->
                      <div class="iscroll">
                        <ul class="list">
                          <li>
                            <div class="list-content">
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-hydra.webp" width="48" height="48" alt="draco logo" />
                                </div>
                                <div class="info">
                                  <span class="time">NOW</span>
                                  <div class="desc">{{ t('w.hsp.history.success-stake') }}</div>
                                  <div class="history">
                                    <span class="ico-hydra ico-xs add-inside">5</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-hydra.webp" width="48" height="48" alt="draco logo" />
                                </div>
                                <div class="info">
                                  <span class="time">NOW</span>
                                  <div class="desc">{{ t('w.hsp.history.fail-stake') }}</div>
                                  <div class="history">
                                    <span class="ico-hydra ico-xs add-inside" :class="{ failed: true }">5</span>
                                    <em class="failed"> ({{ t('w.hsp.history.failed') }})</em>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-hydra.webp" width="48" height="48" alt="draco logo" />
                                </div>
                                <div class="info">
                                  <span class="time">5min ago</span>
                                  <div class="desc">{{ t('w.hsp.history.success-unstake') }}</div>
                                  <div class="history">
                                    <em>{{ t('w.hsp.history.refund') }}</em>
                                    <span class="ico-hydra ico-xs add-inside">356,134</span>
                                    <em class="plus">+</em>
                                    <em>{{ t('w.hsp.history.reward') }}</em>
                                    <span class="ico-hydra ico-xs add-inside">0.001244013</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-hydra.webp" width="48" height="48" alt="draco logo" />
                                </div>
                                <div class="info">
                                  <span class="time">5min ago</span>
                                  <div class="desc">{{ t('w.hsp.history.fail-unstake') }}</div>
                                  <div class="history">
                                    <em>{{ t('w.hsp.history.refund') }}</em>
                                    <span class="ico-hydra ico-xs add-inside" :class="{ failed: true }">356,134</span>
                                    <em class="failed"> ({{ t('w.hsp.history.failed') }})</em>
                                    <em class="plus">+</em>
                                    <em>{{ t('w.hsp.history.reward') }}</em>
                                    <span class="ico-hydra ico-xs add-inside" :class="{ failed: true }">0.001244013</span>
                                    <em class="failed"> ({{ t('w.hsp.history.failed') }})</em>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-hydra.webp" width="48" height="48" alt="draco logo" />
                                </div>
                                <div class="info">
                                  <span class="time">5min ago</span>
                                  <div class="desc">{{ t('w.hsp.history.success-reward') }}</div>
                                  <div class="history">
                                    <em>{{ t('w.hsp.history.reward') }}</em>
                                    <span class="ico-hydra ico-xs add-inside">0.001244013</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-warrior.webp" width="48" height="48" alt="warrior" />
                                </div>
                                <div class="info">
                                  <span class="time">NOW</span>
                                  <div class="desc">ASIA134 ‘worryworry’ got the win prize in DSP Round 12</div>
                                  <div class="history"><strong>‘War Dragon Outfit’</strong></div>
                                </div>
                              </div>
                            </div>
                            <!-- .fnc -->
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-draco.webp" width="48" height="48" alt="draco logo" />
                                </div>
                                <div class="info">
                                  <span class="time">5min ago</span>
                                  <div class="desc">Take Refund &amp; Rewards of DSP SEASON1 Round 18</div>
                                  <div class="history">
                                    <em>Refund</em>
                                    <!-- <span class="ico-darco ico-xs"></span> -->
                                    <span class="ico-darco ico-xs add-inside">356,134</span>
                                    <em> + Reward</em>
                                    <span class="ico-darco ico-xs add-inside">0.001244013</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- .fnc -->
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-draco.webp" width="48" height="48" alt="draco logo" />
                                </div>
                                <div class="info">
                                  <span class="time">16th Nov. 2021, 00:00:00 UTC</span>
                                  <div class="desc">DSP Round 19 is Closed</div>
                                  <!-- .history -->
                                </div>
                              </div>
                            </div>
                            <!-- .fnc -->
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-draco.webp" width="48" height="48" alt="draco logo" />
                                </div>
                                <div class="info">
                                  <span class="time">16th Nov. 2021, 00:00:00 UTC</span>
                                  <div class="desc">Stake More DSP Round 19</div>
                                  <div class="history">
                                    <span class="ico-darco ico-xs add-inside">300</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- .fnc -->
                          </li>
                          <li>
                            <div class="list-content">
                              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
                              <div class="active-info">
                                <div class="thumb">
                                  <img src="@/assets/img/desktop/popup/profile-draco.webp" width="48" height="48" alt="draco logo" />
                                </div>
                                <div class="info">
                                  <span class="time">16th Nov. 2021, 00:00:00 UTC</span>
                                  <div class="desc">Pre-stake DSP Round 19</div>
                                  <div class="history">
                                    <span class="ico-darco ico-xs add-inside">100</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <!-- .fnc -->
                          </li>
                        </ul>
                      </div>
                    </div>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>
          </div>
        </v-dialog>
      </li>
    </ul>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'HspDialog',
  components: {
    //
  },
  props: {
    open: {
      type: Boolean,
    },
    setOpen: {
      type: Function,
    },
    remain: {
      type: [Number, String],
    },
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    md: new MobileDetect(window.navigator.userAgent),

    // test for Dialog
    radioTestGroup: '',
    dialogTest1: false,
    dialogTest2: false,
    dialogTest3: false,
    dialogTest4: false,
    dialogTest5: false,
    dialogTest6: false,
    dialogTest7: false,
    dialogWemixScanQr: false,
    dialogAccount: false,
    tab: 2,
    sheet: false,
    stake: null,
    staked: 5,
    amount: 10.0033,
    reward: 0,
    loading: false,
    loadingError: false,
    refreshLoading: false,
  }),
  methods: {
    //
    selectAll() {
      this.stake = this.amount;
    },
    selectUnstakeAll() {
      this.stake = this.staked;
    },
    selectAllDecimal() {
      if (!this.amount) {
        return;
      }

      const splited = this.amount.toString().split('.');

      this.stake = splited.length < 2 ? this.stake : Number(`${this.stake ? this.stake.toString().split('.')[0] : 0}.${splited[1]}`);
    },
    selectUnstakeAllDecimal() {
      if (!this.staked) {
        return;
      }

      const splited = this.staked.toString().split('.');

      this.stake = splited.length < 2 ? this.stake : Number(`${this.stake ? this.stake.toString().split('.')[0] : 0}.${splited[1]}`);
    },
    onLoading(isFail = false) {
      this.loading = true;
      this.loadingError = false;

      setTimeout(() => {
        this.loading = false;
        this.loadingError = isFail;
      }, 1000);
    },
    refreshReward() {
      this.refreshLoading = true;

      setTimeout(() => {
        this.refreshLoading = false;
      }, 5000);
    },
    getStyledNumber(value) {
      if (!value || typeof Number(value) !== 'number') {
        return '0';
      }

      const splited = value.toString().split('.');

      return splited.length < 2 ? value : `${splited[0]}.<em>${splited[1]}</em>`;
    },
    clearStake() {
      this.stake = null;
    },
  },
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
    isError() {
      return this.stake > this.amount;
    },
    isErrorAdditional() {
      return this.stake > this.amount;
    },
    isErrorUnstake() {
      return this.staked < this.stake;
    },
    sumStake() {
      return Number(this.staked) + Number(this.stake) || this.staked;
    },
  },
  setup() {
    const i18n = useI18n();
    return {
      ...i18n,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mixin';
@import '~@/assets/sass/components/hsp-common';
@import '~@/assets/sass/components/hsp-dialog';
</style>
