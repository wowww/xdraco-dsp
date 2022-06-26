<template>
  <main class="contents">
    <section class="section">
      <div class="section__inner">
        <div style="height: 99px">&nbsp;</div>
        <!-- 이벤트 참여 배너 -->
        <div class="dsp-preround">
          <button type="button" class="btn btn-sm btn-logout">Logout</button>
          <h2 class="title"><em class="hidden">DSP Preparation Event</em></h2>
          <h3 class="desc">
            Opt-in to our DSP KICKOFF EVENT by logging into your Wemix Wallet and receive<br />
            1 free bonus DRACO to cover your entry fee for upcoming DSP rounds.
          </h3>

          <div class="wrap-button">
            <p class="deadline">
              <time datetime="2021-11-08T:23:59:59+08:00">Event ends on November 8th 2021, 23:59:59 (UTC+8)</time>
            </p>
            <button type="button" class="btn-wemix"><em class="hidden">WEMIX </em>LOGIN</button>
          </div>
        </div>

        <br /><br />

        <div class="dsp-preround">
          <h2 class="title"><em class="hidden">DSP Preparation Event</em></h2>
          <h3 class="desc">
            Opt-in to our DSP KICKOFF EVENT by logging into your Wemix Wallet and receive<br />
            1 free bonus DRACO to cover your entry fee for upcoming DSP rounds.
          </h3>

          <div class="wrap-button">
            <p class="deadline">
              <time datetime="2021-11-08T:23:59:59+08:00">Event ends on November 8th 2021, 23:59:59 (UTC+8)</time>
            </p>
            <button type="button" disabled="disabled" class="btn">
              <span class="btn-message">이벤트가 조기 종료되었습니다.</span>
              <!-- <span class="btn-message">이미 이벤트에 참여하였습니다.</span> -->
            </button>
          </div>
        </div>

        <!-- 이벤트종료  -->
        <v-dialog content-class="dialog-common" v-model="eventClose" max-width="480" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" style="display: block; color: #fff; font-weight: bold">[Popup - 이벤트 종료]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="eventClose = false" fab plain x-small>
              <v-icon color="#000" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="dialog-header">&nbsp;</div>
            <div class="wrap-notice">
              <div class="msgbox vcenter">
                <div>
                  <h4 class="title">이벤트 종료</h4>
                  <div class="desc">20만 DRACO가 모두 소진되어 이벤트가 종료되었습니다.</div>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-primary btn-sm" @click="eventClose = false">닫기</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- 이벤트 이미신청완료  -->
        <v-dialog content-class="dialog-common" v-model="alreadyEvent" max-width="480" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" style="display: block; color: #fff; font-weight: bold">
              [Popup - 이미 신청이 완료되었습니다.]
            </button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="alreadyEvent = false" fab plain x-small>
              <v-icon color="#000" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="dialog-header">&nbsp;</div>
            <div class="wrap-notice">
              <div class="msgbox vcenter">
                <div>
                  <h4 class="title">이미 신청이 완료되었습니다.</h4>
                  <div class="desc">DSP PRE-ROUND EVENT는 1회만 참여할 수 있습니다.</div>
                  <div class="wrap-button">
                    <button type="button" class="btn btn-primary btn-sm" @click="alreadyEvent = false">닫기</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- 이벤트 참여 가능  -->
        <v-dialog content-class="dialog-launch theme-dark" v-model="dialogEventProgress" max-width="720" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" style="display: block; color: #fff; font-weight: bold">[Popup - 이벤트 상태 가능]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogEventProgress = false" fab plain x-small>
              <v-icon color="#fff" size="26">mdi-close</v-icon>
            </v-btn>
            <div class="dialog-header">
              <h4 class="title"><em class="hidden">DSP KICKOFF EVENT, We've Got You CoVered!</em></h4>
              <div class="desc">
                <p>
                  We welcome all eager DSP participants to our Kickoff event.<br />
                  Simply hold more than 10 DRACOs in your wallet and opt-in to receive <br />
                  1 DRACO completely free to cover for your first DSP round entry fee.
                </p>
                <small>You can only opt-in once to receive your bonus DRACO</small>
              </div>
            </div>
            <div class="event-content">
              <strong class="notice"> All participation requirements have been met </strong>
              <ul class="event-step">
                <li class="step1">
                  <div class="wrap-detail">
                    <span class="ico-checked"><em class="hidden">Checked</em></span>
                    <div class="goal">
                      <strong class="ico-darco ico-sm add-inside">10</strong>
                    </div>
                    <div class="condition">
                      Wemix wallet must <br />
                      possess more than <br />
                      10 DRACOs
                    </div>
                  </div>
                </li>
                <li class="step2">
                  <div class="wrap-detail">
                    <span class="ico-checked"><em class="hidden">Checked</em></span>
                    <div class="goal">
                      <strong class="ico-wemixbox ico-sm"></strong>
                      <strong class="ico-mir4box ico-sm"></strong>
                    </div>
                    <div class="condition">
                      Wemix wallet must be <br />
                      linked to an active <br />
                      MIR 4 account
                    </div>
                  </div>
                </li>
                <li class="step3">
                  <div class="wrap-detail">
                    <span class="ico-checked"><em class="hidden">Checked</em></span>
                    <div class="goal">
                      <div class="membercount">
                        <small>Gurrent Participant</small>
                        <strong>190,910</strong>
                      </div>
                    </div>
                    <div class="condition">
                      200,000 participant<br />
                      cap has not been<br />
                      reached
                    </div>
                  </div>
                </li>
              </ul>
              <div class="wrap-button">
                <p class="deadline">
                  <time datetime="2021-11-08T:23:59:59+08:00">Event ends on November 8th 2021, 23:59:59 (UTC+8)</time>
                </p>
                <button type="button" class="btn btn-secondary">JOIN NOW</button>
                <!-- <button type="button" aria-disabled="true" class="btn">조건을 확인하고 다시 시도하세요.</button> -->
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- 이벤트 참여 경고  -->
        <v-dialog content-class="dialog-launch theme-dark" v-model="dialogEventProgressAlert" max-width="720" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" style="display: block; color: #fff; font-weight: bold">[Popup - 이벤트 상태 미달]</button>
          </template>

          <div class="content">
            <v-btn class="btn-close" @click="dialogEventProgressAlert = false" fab plain x-small>
              <v-icon color="#fff" size="26">mdi-close</v-icon>
            </v-btn>
            <div class="dialog-header">
              <h4 class="title"><em class="hidden">DSP KICKOFF EVENT, We've Got You CoVered!</em></h4>
              <div class="desc">
                <p>
                  We welcome all eager DSP participants to our Kickoff event.<br />
                  Simply hold more than 10 DRACOs in your wallet and opt-in to receive <br />
                  1 DRACO completely free to cover for your first DSP round entry fee.
                </p>
                <small>You can only opt-in once to receive your bonus DRACO</small>
              </div>
            </div>
            <div class="event-content">
              <strong class="notice alert">
                You do not possess enough DRACOs<br />
                Your Wemix wallet is not linked to an active MIR 4 account<br />
                200,000 DRACO event rewards have been exhausted<br />
              </strong>
              <ul class="event-step">
                <li class="step1 alert">
                  <div class="wrap-detail">
                    <span class="ico-close-point"><em class="hidden">Not Yet</em></span>
                    <div class="goal">
                      <strong class="ico-darco ico-sm add-inside">10</strong>
                    </div>
                    <div class="condition">
                      Wemix wallet must <br />
                      possess more than <br />
                      10 DRACOs
                    </div>
                  </div>
                </li>
                <li class="step2 alert">
                  <div class="wrap-detail">
                    <span class="ico-close-point"><em class="hidden">Not Yet</em></span>
                    <div class="goal">
                      <strong class="ico-wemixbox ico-sm"></strong>
                      <strong class="ico-mir4box ico-sm"></strong>
                    </div>
                    <div class="condition">
                      Wemix wallet must be <br />
                      linked to an active <br />
                      MIR 4 account
                    </div>
                  </div>
                </li>
                <li class="step3 alert">
                  <div class="wrap-detail">
                    <span class="ico-close-point"><em class="hidden">Not Yet</em></span>
                    <div class="goal">
                      <div class="membercount">
                        <small>Gurrent Participant</small>
                        <strong>200,000</strong>
                      </div>
                    </div>
                    <div class="condition">
                      200,000 participant<br />
                      cap has not been<br />
                      reached
                    </div>
                  </div>
                </li>
              </ul>
              <div class="wrap-button">
                <p class="deadline">
                  <time datetime="2021-11-08T:23:59:59+08:00">Event ends on November 8th 2021, 23:59:59 (UTC+8)</time>
                </p>
                <button type="button" aria-disabled="true" class="btn">조건을 확인하고 다시 시도하세요.</button>
              </div>
            </div>
          </div>
        </v-dialog>

        <!-- 이벤트 신청완료  -->
        <v-dialog content-class="dialog-launch theme-dark" v-model="joinedEvent" max-width="720" persistent>
          <template v-slot:activator="{ on, attrs }">
            <button type="button" v-bind="attrs" v-on="on" style="display: block; color: #fff; font-weight: bold">[Popup - 신청완료]</button>
          </template>
          <div class="content">
            <v-btn class="btn-close" @click="joinedEvent = false" fab plain x-small>
              <v-icon color="#fff" size="26">mdi-close</v-icon>
            </v-btn>
            <!-- dialogTitle이 있는 경우 대비 -->
            <div class="dialog-header">
              <h4 class="title"><em class="hidden">DSP KICKOFF EVENT, We've Got You CoVered!</em></h4>
            </div>

            <div class="event-content">
              <div class="wrap-reward">
                <img src="@/assets/img/desktop/promotion/2111/reward-1draco.webp" width="293" alt="REWARD 1DRACO" class="ticket" />
                <h4 class="message">
                  You have successfully opted-in to<br />
                  DSP KICKOFF EVENT.
                </h4>
                <p class="desc">
                  Your 1 DRACO event reward will be sent to your Wemix wallet in sequential order.<br />
                  Reward payment may take more than 48 hours.
                </p>
              </div>

              <div class="wrap-button">
                <button type="button" class="btn btn-primary2">OK</button>
              </div>
            </div>
          </div>
        </v-dialog>
      </div>
    </section>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Footer from '@/partials/common/Footer';

export default defineComponent({
  components: {
    Footer,
  },
  data: () => ({
    // for dialog
    eventClose: null,
    alreadyEvent: null,
    joinedEvent: null,
    dialogEventProgress: true,
    dialogEventProgressAlert: null,
  }),
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
@import '~@/assets/sass/desktop/ui-guide.scss';
</style>
