<template>
  <main class="contents exd-event">
    <!-- 이벤트 신청완료  -->
    <v-dialog content-class="dialog-exdevent theme-dark" v-model="joinedEvent" max-width="720" persistent>
      <div class="content">
        <v-btn class="btn-close" @click="joinedEvent = false" fab plain x-small>
          <v-icon color="#fff" size="26">mdi-close</v-icon>
        </v-btn>
        <div class="event-content">
          <div class="wrap-reward">
            <img src="@/assets/img/desktop/promotion/2112-exd/reward-1draco.webp" width="293" alt="REWARD 1DRACO" class="ticket" />
            <h4 class="message">Successfully Registered</h4>
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

    <section class="section section1">
      <div
        style="
          position: absolute;
          top: 950px;
          left: 10px;
          background-color: rgba(255, 255, 255, 0.1);
          display: inline-block;
          padding: 8px;
          font-size: 12px;
          cusor: pointer;
        "
      >
        <strong @click="joinedEvent = true" style="display: block; color: #fff">[Popup - 신청완료]</strong>
        <strong @click="toogleContentsUI(0)" style="display: block; color: #fff">[리워드 기본]</strong>
        <strong @click="toogleContentsUI(1)" style="display: block; color: #fff">[리워드 활성화]</strong>
        <strong @click="toogleContentsUI(2)" style="display: block; color: #fff">[리워드 에러]</strong>
        <strong @click="toogleContentsUI(3)" style="display: block; color: #fff">[리워드 로딩]</strong>
      </div>

      <div class="section__inner">
        <hgroup class="wrap-title">
          <h2 class="exd-title"><em class="hidden">Exchange by DRACO</em></h2>
          <h3 class="text-introduce">Available on November 30th</h3>
          <h3 class="event-title">
            <em class="hidden">EXD Kickoff Event</em>
          </h3>
        </hgroup>
        <div class="wrap-preparate">
          <h4 class="event-title">Prepare to Exchange By DRACO</h4>
          <p class="desc"><em>1 bonus DRACO</em> reward will be given to the first <em>50,000</em> people that register for the EXD Kickoff Event</p>
        </div>

        <!-- 기본상태 -->
        <div class="event-content">
          <strong class="notice">Review the event requirements and receive your reward</strong>
          <ul class="event-step">
            <li class="step1">
              <div class="wrap-detail">
                <span class="ico-checked"><em class="hidden">Checked</em></span>
                <div class="goal">
                  <div class="level">
                    <small>LEVEL</small>
                    <strong>40</strong>
                  </div>
                </div>
                <div class="condition">Select your main level 40+ character from an active MIR 4 account</div>
                <!-- alert message -->
                <div class="condition" style="display: none">
                  Select your main character
                  <a href="#" class="setting">Settings</a>
                </div>
              </div>
            </li>
            <li class="step2">
              <div class="wrap-detail">
                <span class="ico-checked"><em class="hidden">Checked</em></span>
                <div class="goal">
                  <div class="wallet">
                    <small>WEMIX WALLET</small>
                    <strong class="ico-wemix ico-sm"><em class="hidden">wemix wallet icon</em></strong>
                  </div>
                </div>
                <div class="condition">Wemix wallet must be linked to an active MIR 4 account</div>
              </div>
            </li>
            <li class="step3">
              <div class="wrap-detail">
                <span class="ico-checked"><em class="hidden">Checked</em></span>
                <div class="goal">
                  <!-- 싱크전에는 아래 'noSync' 문실장님 추가 -->
                  <div class="membercount nosync">
                    <small>TOTAL REWARD</small>
                    <strong>50K</strong>
                  </div>
                  <!-- <div class="membercount">
                    <small>Participants</small>
                    <strong>12,561</strong>
                  </div> -->
                </div>
                <div class="condition">50,000 participants cap has not been reached</div>
              </div>
            </li>
          </ul>
          <div class="wrap-button">
            <button type="button" class="btn btn-checknow">CHECK NOW</button>
          </div>
        </div>

        <!-- 활성화 -->
        <div class="event-content" style="display: none">
          <strong class="notice">All participation requirements have been met</strong>
          <ul class="event-step">
            <li class="step1 active">
              <div class="wrap-detail">
                <span class="ico-checked"><em class="hidden">Checked</em></span>
                <div class="goal">
                  <div class="level">
                    <small>LEVEL</small>
                    <strong>40</strong>
                  </div>
                </div>
                <div class="condition">Select your main level 40+ character from an active MIR 4 account</div>
                <!-- alert message -->
                <div class="condition" style="display: none">
                  Select your main character
                  <a href="#" class="setting">Settings</a>
                </div>
              </div>
            </li>
            <li class="step2 active">
              <div class="wrap-detail">
                <span class="ico-checked"><em class="hidden">Checked</em></span>
                <div class="goal">
                  <div class="wallet">
                    <small>WEMIX WALLET</small>
                    <strong class="ico-wemix ico-sm"><em class="hidden">wemix wallet icon</em></strong>
                  </div>
                </div>
                <div class="condition">Wemix wallet must be linked to an active MIR 4 account</div>
              </div>
            </li>
            <li class="step3 active">
              <div class="wrap-detail">
                <span class="ico-checked"><em class="hidden">Checked</em></span>
                <div class="goal">
                  <div class="membercount">
                    <small>Participants</small>
                    <strong>12,561</strong>
                  </div>
                </div>
                <div class="condition">50,000 participants cap has not been reached</div>
              </div>
            </li>
          </ul>
          <div class="wrap-button">
            <button type="button" class="btn btn-reward">Claim Reward</button>
          </div>
        </div>

        <!-- 에러 -->
        <div class="event-content" style="display: none">
          <strong class="notice">Review the event requirements and receive your reward</strong>
          <ul class="event-step">
            <li class="step1 alert">
              <div class="wrap-detail">
                <span class="ico-checked"><em class="hidden">Checked</em></span>
                <div class="goal">
                  <div class="level">
                    <small>LEVEL</small>
                    <strong>40</strong>
                  </div>
                </div>
                <!-- alert message -->
                <div class="condition">
                  Select your main character
                  <a href="#" class="setting">Settings</a>
                </div>
              </div>
            </li>
            <li class="step2 alert">
              <div class="wrap-detail">
                <span class="ico-checked"><em class="hidden">Checked</em></span>
                <div class="goal">
                  <div class="wallet">
                    <small>WEMIX WALLET</small>
                    <strong class="ico-wemix ico-sm"><em class="hidden">wemix wallet icon</em></strong>
                  </div>
                </div>
                <div class="condition">Wemix wallet must be linked to an active MIR 4 account</div>
              </div>
            </li>
            <li class="step3 alert">
              <div class="wrap-detail">
                <span class="ico-checked"><em class="hidden">Checked</em></span>
                <div class="goal">
                  <div class="membercount">
                    <small>Participants</small>
                    <strong>12,561</strong>
                  </div>
                </div>
                <div class="condition">50,000 participants cap has not been reached</div>
              </div>
            </li>
          </ul>
          <div class="wrap-button">
            <button type="button" disabled="disabled" class="btn">Claim Reward</button>
          </div>
        </div>

        <!-- loading -->
        <div class="event-content" style="display: none">
          <strong class="notice">참가 조건을 확인하고 리워드를 받으세요.</strong>
          <ul class="event-step loading">
            <li class="step1">
              <div class="wrap-detail">
                <v-progress-circular class="ml-2" :size="16" :width="2" color="#fff" indeterminate />
              </div>
            </li>
            <li class="step2">
              <div class="wrap-detail">
                <v-progress-circular class="ml-2" :size="16" :width="2" color="#fff" indeterminate></v-progress-circular>
              </div>
            </li>
            <li class="step3">
              <div class="wrap-detail">
                <v-progress-circular class="ml-2" :size="16" :width="2" color="#fff" indeterminate></v-progress-circular>
              </div>
            </li>
          </ul>
          <div class="wrap-button">
            <button type="button" disabled="disabled" class="btn">
              <v-progress-circular class="ml-2" :size="16" :width="2" color="#fff" indeterminate></v-progress-circular>
            </button>
          </div>
        </div>
      </div>
    </section>

    <section class="section section2">
      <div class="section__inner">
        <div class="exdis">
          <h3 class="headword">EXD Playbook</h3>
          <p class="text-desc">
            XDRACO items can be traded with players from all over the world using DRACOs, and these special items can be obtained through gameplay or
            by participating in DSP(DRACO Staking Program) rounds. All of this becomes possible through EXD(Exchange by DRACO). Find the XDRACO item
            that is perfect for your character, or list your XDRACO items to trade with other players today!
          </p>
        </div>
      </div>
    </section>

    <section class="section section3">
      <div class="section__inner">
        <div class="exd-youtube">
          <div class="wrap-youtube no-gutter">
            <div class="inner">
              <iframe
                width="960"
                height="540"
                src="https://www.youtube.com/embed/eguxHwvKdkU"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="allowfullscreen"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section4">
      <div class="section__inner">
        <div class="exd-item" v-viewer="viewerOption">
          <h3 class="headword">XDRACO item listing</h3>
          <div class="wrap-define">
            <dl class="define sealing">
              <dt>Step 1. Item Sealing</dt>
              <dd>
                <div class="desc">
                  XDRACO items can be sealed through the XDRACO Warehouse menu in game. Sealed XDRACO items become ready to be traded and can be
                  viewed in ‘My Items’ after logging into your account at exd.xdraco.com.
                  <ul>
                    <li>Unsealing XDRACO items will remove it from ‘My Items’.</li>
                  </ul>
                </div>
                <div class="wrap-img">
                  <div class="area">
                    <figure class="wrap-image by-viewer">
                      <img src="@/assets/img/desktop/promotion/2112-exd/exd-sealing-1.webp" alt="XDRACO Warehouse" /><!-- 다국어도 alt 챙겨주세요. -->
                    </figure>
                    <figcaption>XDRACO Warehouse</figcaption>
                  </div>
                </div>
              </dd>
            </dl>
            <dl class="define listing">
              <dt>Step 2. Item Listing</dt>
              <dd>
                <div class="desc">
                  Select your sealed XDRACO item you wish to sell, and input the sales price of the chosen item. Proceed with item registration to
                  list your XDRACO item.
                  <ul>
                    <li>Sales price can be set freely.</li>
                    <li>
                      Once your listed XDRACO item has successfully been sold, the total sales price, minus the transaction fee of 5% will be
                      deposited into your linked WEMIX Wallet.
                    </li>
                    <li>Unsold items will automatically be delisted after 14 days.</li>
                  </ul>
                </div>
                <div class="wrap-img">
                  <div class="area">
                    <figure class="wrap-image by-viewer">
                      <img src="@/assets/img/desktop/promotion/2112-exd/exd-listing-1.webp" alt="List item" />
                    </figure>
                    <figcaption>List item</figcaption>
                  </div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <section class="section section5">
      <div class="section__inner">
        <div class="exd-item" v-viewer="viewerOption">
          <h3 class="headword">XDRACO item purchasing</h3>
          <div class="wrap-define">
            <dl class="define selecting">
              <dt>Step 1. Item Selecting</dt>
              <dd>
                <div class="desc">
                  Browse through the listed XDRACO items on EXD, and find the one you wish to purchase. View the item details and proceed to checkout
                  by clicking on the ‘Purchase’ button.
                  <ul>
                    <li>
                      In order to purchase XDRACO items through EXD, you must first possess an account with at least one level 40+ character and a
                      linked WEMIX Wallet.
                    </li>
                  </ul>
                </div>
                <div class="wrap-img">
                  <div class="area">
                    <figure class="wrap-image by-viewer">
                      <img src="@/assets/img/desktop/promotion/2112-exd/exd-selecting-1.webp" alt="판매 아이템 상세 정보" />
                    </figure>
                    <figcaption>판매 아이템 상세 정보</figcaption>
                  </div>
                </div>
              </dd>
            </dl>
            <dl class="define collecting">
              <dt>Step 2. Item Collecting</dt>
              <dd>
                <div class="desc">
                  You must choose a character that will be receiving the XDRACO item once the transaction has successfully been completed. Proceed
                  with your WEMIX Wallet validation process to complete the purchase transaction.
                  <ul>
                    <li>You must possess enough DRACO funds in your WEMIX Wallet to complete the transaction.</li>
                  </ul>
                </div>
                <div class="wrap-img">
                  <div class="area">
                    <figure class="wrap-image by-viewer">
                      <img
                        src="@/assets/img/desktop/promotion/2112-exd/exd-collecting-1.webp"
                        alt="choose a character that will be receiving the XDRACO item"
                      />
                    </figure>
                    <figcaption>choose a character that will be receiving the XDRACO item</figcaption>
                  </div>
                  <div class="area">
                    <figure class="wrap-image by-viewer">
                      <img src="@/assets/img/desktop/promotion/2112-exd/exd-collecting-2.webp" alt="Purchase" />
                    </figure>
                    <figcaption>Purchase</figcaption>
                  </div>
                </div>
              </dd>
            </dl>
            <dl class="define validating">
              <dt>Step 3. Validating</dt>
              <dd>
                <div class="desc">
                  In order to successfully complete your purchase transaction on EXD, you must confirm and validate the transaction request by signing
                  through your WEMIX Wallet. The purchase validation can be completed by scanning the QR code that will appear once you click the
                  ‘Purchase’ button.
                  <!-- 금번 작업제외 -->
                  <!-- <div class="wrap-function">
                    <a href="#" title="WEMIX WALLET DOWNLOAD">WEMIX WALLET DOWNLOAD</a>
                  </div> -->
                </div>
                <div class="wrap-img">
                  <div class="area">
                    <figure class="wrap-image by-viewer">
                      <img src="@/assets/img/desktop/promotion/2112-exd/exd-validating-1.webp" alt="Purchase validation" />
                    </figure>
                    <figcaption>Purchase validation</figcaption>
                  </div>
                </div>
              </dd>
            </dl>
            <dl class="define redeeming">
              <dt>Step 4. Redeeming</dt>
              <dd>
                <div class="desc">
                  Once the XDRACO item has been successfully purchased, you may redeem the item through the in-game ‘XDRACO Warehouse’. You will also
                  receive a confirmation mail through the in-game mailbox.
                  <ul>
                    <li>The purchased XDRACO item will be sent to the selected character’s XDRACO Warehouse.</li>
                    <li>Your character’s XDRACO Warehouse space must not be full in order to successfully receive the purchased item.</li>
                  </ul>
                </div>
                <div class="wrap-img">
                  <div class="area">
                    <figure class="wrap-image by-viewer">
                      <img src="@/assets/img/desktop/promotion/2112-exd/exd-redeeming-1.webp" alt="In-game mailbox." />
                    </figure>
                    <figcaption>In-game mailbox.</figcaption>
                  </div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </main>
</template>

<script>
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
import { directive as viewer } from 'v-viewer';
import Footer from '@/partials/common/Footer';
import 'viewerjs/dist/viewer.css';

export default defineComponent({
  components: {
    Footer,
  },
  data: () => ({
    joinedEvent: null,
  }),

  directives: {
    viewer: viewer({
      debug: true,
    }),
  },
  methods: {
    toogleContentsUI(num) {
      // vue.js에서는 접근방법을 몰라서 js로 작성해두었습니다.

      const elems = document.getElementsByClassName('event-content');
      for (let i = 0; i < elems.length; i += 1) {
        elems[i].style.display = 'none';
      }
      elems[num].style.display = 'block';
    },
  },
  setup() {
    const state = reactive({
      viewerOption: {
        toolbar: false,
        title: false,
        filter(img) {
          return img.parentNode.classList.contains('by-viewer');
        },
      },
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
@import '~@/assets/sass/desktop/pages/exd-event2112';
</style>
