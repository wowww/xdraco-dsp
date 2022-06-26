<template>
  <!-- <template> 바로 아래 자식<div>는 의미없는 엘리먼트로 실제 컴포넌트 적용시 제거해주세요~ -->
  <div>
    <!-- U1 - "라운드 시작까지 N시간 초과로 남은 경우 - PRE-STAKE 안됨" -->
    <div class="round" v-if="uiType === 'u1'">
      <div class="round__inner">
        <Card :itemType="itemType"></Card>
        <RoundNumber value="243"></RoundNumber>
        <div class="wrap-detail">
          <div class="block1">
            <h3 class="round-msg-for">Round 59 coming on</h3>
            <p class="upcoming-date">16th Nov. 2021 00:00 UTC</p>
            <p class="message">Running for 2 weeks after opening</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn" disabled>
            <span class="btn-message">2021년 11월 6일 00:00:00 GMT 부터 PRE-STAKE 가능</span>
          </button>
        </div>
      </div>
    </div>

    <!-- U2 - "PRE-STAKE" -->
    <div class="round" v-if="uiType === 'u2'">
      <div class="round__inner">
        <Card :itemType="itemType"></Card>
        <RoundNumber value="243"></RoundNumber>
        <div class="wrap-detail">
          <div class="block1">
            <h3 class="round-msg-for">Round 59 open in</h3>
            <div class="wrap-tick">
              <FlipCountdown targetDate="2021-11-02T23:00:00"></FlipCountdown>
            </div>
            <p class="message">Running for 2 weeks after opening</p>
          </div>

          <div class="block2">
            <div class="wrap-define-balance">
              <dl class="define-balance">
                <dt>Total Pre-Stake</dt>
                <dd class="draco">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">30,125,910,000,000</span>
                    </template>
                    <span>30,125,910,000,000</span>
                  </v-tooltip>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Pre-Stake</dt>
                <dd class="draco">
                  <span>-</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Expected Odds</dt>
                <dd class="odds">
                  <span>-</span>
                </dd>
              </dl>
            </div>
            <p>0.0003% odds increase with 1 DRACO staking</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-primary">PRE-STAKE</button>
        </div>
      </div>
    </div>

    <!-- U3 - "PRE-STAKE MORE" -->
    <div class="round" v-if="uiType === 'u3'">
      <div class="round__inner">
        <Card :itemType="itemType"></Card>
        <RoundNumber value="243"></RoundNumber>
        <div class="wrap-detail">
          <div class="block1">
            <h3 class="round-msg-for">Round 59 open in</h3>
            <div class="wrap-tick">
              <FlipCountdown targetDate="2021-11-01T23:00:17"></FlipCountdown>
            </div>
            <p class="message">Running for 2 weeks after opening</p>
          </div>

          <div class="block2">
            <div class="wrap-define-balance">
              <dl class="define-balance">
                <dt>Total Pre-Stake</dt>
                <dd class="draco">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">30,125,910,000,000</span>
                    </template>
                    <span>30,125,910,000,000</span>
                  </v-tooltip>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Pre-Stake</dt>
                <dd class="draco">
                  <span>45,503,000</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Expected Odds</dt>
                <dd class="odds">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }"> <span v-bind="attrs" v-on="on">11.987654321012345678</span>% </template>
                    <span>11.987654321012345678</span>
                  </v-tooltip>
                </dd>
              </dl>
            </div>
            <p>0.0003% odds increase with 1 DRACO staking</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-primary2">STAKE MORE</button>
        </div>
      </div>
    </div>

    <!-- U4 - "PRE-STAKE MORE - 24시간동안 추가 스테이킹안됨" -->
    <div class="round" v-if="uiType === 'u4'">
      <div class="round__inner">
        <Card :itemType="itemType"></Card>
        <RoundNumber value="243"></RoundNumber>
        <div class="wrap-detail">
          <div class="block1">
            <h3 class="round-msg-for">Round 59 open in</h3>
            <div class="wrap-tick">
              <FlipCountdown targetDate="2021-10-31T23:00:15"></FlipCountdown>
            </div>
            <p class="message">Running for 2 weeks after opening</p>
          </div>

          <div class="block2">
            <div class="wrap-define-balance">
              <dl class="define-balance">
                <dt>Total Pre-Stake</dt>
                <dd class="draco">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">30,125,910,000,000</span>
                    </template>
                    <span>30,125,910,000,000</span>
                  </v-tooltip>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Pre-Stake</dt>
                <dd class="draco">
                  <span>45,503,000</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Expected Odds</dt>
                <dd class="odds">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }"> <span v-bind="attrs" v-on="on">11.987654321012345678</span>% </template>
                    <span>11.987654321012345678</span>
                  </v-tooltip>
                </dd>
              </dl>
            </div>
            <p>0.0003% odds increase with 1 DRACO staking</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn" disabled>
            <span class="btn-message">You can pre-stake more at 16th Nov. 2021. 16:56:45 GMT</span>
          </button>
        </div>
      </div>
    </div>

    <!-- O1 - "STAKE EARLIER" -->
    <div class="round" v-if="uiType === 'o1'">
      <div class="round__inner">
        <Card :itemType="itemType"></Card>
        <RoundNumber value="143"></RoundNumber>
        <div class="wrap-detail">
          <RoundTitle value="Absolutely superawesome ringofring"></RoundTitle>
          <div class="block-border">
            <div class="wrap-define-balance">
              <dl class="define-balance">
                <dt>DSP round closes in</dt>
                <dd>
                  <FlipCountdown targetDate="2021-10-30T23:00:00" smaller></FlipCountdown>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>Joined participants</dt>
                <dd>
                  <!-- <FlipCountup :targetValue="7035" smaller></FlipCountup> -->
                  <NumberImage :targetValue="798329" smaller></NumberImage>
                </dd>
              </dl>
            </div>
          </div>
          <div class="block2">
            <div class="wrap-define-balance">
              <dl class="define-balance">
                <dt>Total Pre-Stake</dt>
                <dd class="draco">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">30,125,910</span>
                    </template>
                    <span>30,125,910</span>
                  </v-tooltip>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Pre-Stake</dt>
                <dd class="draco">
                  <span>-</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Expected Odds</dt>
                <dd class="odds">
                  <span>-</span>
                </dd>
              </dl>
            </div>
            <p>0.0003% odds increase with 1 DRACO staking</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-primary">STAKE EARLIER</button>
        </div>
      </div>
    </div>

    <!-- O2 - "STAKE EARLIER MORE" -->
    <div class="round" v-if="uiType === 'o2'">
      <div class="round__inner">
        <Card :itemType="itemType"></Card>
        <RoundNumber value="143"></RoundNumber>
        <div class="wrap-detail">
          <RoundTitle value="YouAreSobeautiful"></RoundTitle>
          <div class="block-border">
            <div class="wrap-define-balance">
              <dl class="define-balance">
                <dt>DSP round closes in</dt>
                <dd>
                  <FlipCountdown targetDate="2021-10-30T23:00:05" smaller></FlipCountdown>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>Joined participants</dt>
                <dd>
                  <FlipCountup :targetValue="17035" smaller></FlipCountup>
                </dd>
              </dl>
            </div>
          </div>
          <div class="block2">
            <div class="wrap-define-balance">
              <dl class="define-balance">
                <dt>Total Pre-Stake</dt>
                <dd class="draco">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">30,125,910</span>
                    </template>
                    <span>30,125,910</span>
                  </v-tooltip>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Pre-Stake</dt>
                <dd class="draco">
                  <span>1,300</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Expected Odds</dt>
                <dd class="odds">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }"> <span v-bind="attrs" v-on="on">0.09</span>% </template>
                    <span>0.09</span>
                  </v-tooltip>
                </dd>
              </dl>
            </div>
            <p>0.0003% odds increase with 1 DRACO staking</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-primary2">STAKE MORE</button>
        </div>
      </div>
    </div>

    <!-- O3 - "STAKE EARLIER MORE - 24시간동안 추가 스테이킹안됨" -->
    <div class="round" v-if="uiType === 'o3'">
      <div class="round__inner">
        <Card :itemType="itemType"></Card>
        <RoundNumber value="143"></RoundNumber>
        <div class="wrap-detail">
          <RoundTitle></RoundTitle>
          <div class="block-border">
            <div class="wrap-define-balance">
              <dl class="define-balance">
                <dt>DSP round closes in</dt>
                <dd>
                  <FlipCountdown targetDate="2021-10-30T23:00:07" smaller></FlipCountdown>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>Joined participants</dt>
                <dd>
                  <FlipCountup :targetValue="24035" smaller></FlipCountup>
                </dd>
              </dl>
            </div>
          </div>
          <div class="block2">
            <div class="wrap-define-balance">
              <dl class="define-balance">
                <dt>Total Pre-Stake</dt>
                <dd class="draco">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">30,125,910</span>
                    </template>
                    <span>30,125,910</span>
                  </v-tooltip>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Pre-Stake</dt>
                <dd class="draco">
                  <span>1,300</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Expected Odds</dt>
                <dd class="odds">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }"> <span v-bind="attrs" v-on="on">11.987654321012345678</span>% </template>
                    <span>11.987654321012345678</span>
                  </v-tooltip>
                </dd>
              </dl>
            </div>
            <p>0.0003% odds increase with 1 DRACO staking</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn" disabled>
            <span class="btn-message">You can stake more at 16th Nov. 2021. 16:56:45 GMT</span>
          </button>
        </div>
      </div>
    </div>

    <!-- C1 - "Winner" -->
    <div class="round" aria-current="won" v-if="uiType === 'c1'">
      <div class="round__inner">
        <Card :itemType="itemType"></Card>
        <RoundNumber value="53"></RoundNumber>
        <div class="wrap-detail">
          <div class="block1">
            <h3 class="round-msg-for">Round 53 closed</h3>
            <p class="closed-date">16th Nov. 2021 00:00 UTC</p>
            <div class="wrap-define-balance horizontal">
              <dl class="define-balance">
                <dt>Total Pre-Stake</dt>
                <dd class="draco">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on">30,125,910</span>
                    </template>
                    <span>30,125,910</span>
                  </v-tooltip>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>Participants</dt>
                <dd>
                  <span>23,532</span>
                </dd>
              </dl>
            </div>
            <p class="message-result">YOU WON!</p>
          </div>

          <h3 class="title-define-balance">Winner</h3>
          <div class="wrap-define-balance">
            <dl class="define-winner">
              <dt>Class</dt>
              <dd class="thumbs">
                <img src="@/assets/img/desktop/header/thumb-profile-warrior.webp" alt="WARRIOR" />
                <!-- <img src="@/assets/img/desktop/header/thumb-profile-sorcerer.webp" alt="SORCERER" /> -->
                <!-- <img src="@/assets/img/desktop/header/thumb-profile-taoist.webp" alt="TAOIST" /> -->
                <!-- <img src="@/assets/img/desktop/header/thumb-profile-arbalist.webp" alt="ARBALIST" /> -->
                <!-- <img src="@/assets/img/desktop/header/thumb-profile-lancer.webp" alt="LANCER" /> -->
              </dd>
              <dt>Nickname</dt>
              <dd class="nickname">nicknamedraco</dd>
              <dt>Server</dt>
              <dd class="server">ASIA034</dd>
            </dl>
            <dl class="define-balance">
              <dt>Winner Stake</dt>
              <dd class="draco">
                <span>45,503,000</span>
              </dd>
            </dl>
            <dl class="define-balance">
              <dt>Winner Odds</dt>
              <dd class="odds">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }"> <span v-bind="attrs" v-on="on">0.987654321012345678</span>% </template>
                  <span>0.987654321012345678</span>
                </v-tooltip>
              </dd>
            </dl>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-secondary btn-sm">
            <span>WIN PRIZE!</span>
            <span class="emp">Redemptionable period expires on November 16, 2022. 00:00 UTC.</span>
          </button>
        </div>
      </div>
    </div>

    <!-- C2 - "Winner - 수령완료" -->
    <div class="round" aria-current="won" v-if="uiType === 'c2'">
      <div class="round__inner">
        <Card :itemType="itemType"></Card>
        <RoundNumber value="53"></RoundNumber>
        <div class="wrap-detail">
          <div class="block1">
            <h3 class="round-msg-for">Round 53 closed</h3>
            <p class="closed-date">16th Nov. 2021 00:00 UTC</p>
            <div class="wrap-define-balance horizontal">
              <dl class="define-balance">
                <dt>Total Pre-Stake</dt>
                <dd class="draco">
                  <span>21,125,000</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>Participants</dt>
                <dd>
                  <span>23,532</span>
                </dd>
              </dl>
            </div>
            <p class="message-result">YOU WON!</p>
          </div>

          <h3 class="title-define-balance">Winner</h3>
          <div class="wrap-define-balance">
            <dl class="define-winner">
              <dt>Class</dt>
              <dd class="thumbs">
                <img src="@/assets/img/desktop/header/thumb-profile-sorcerer.webp" alt="SORCERER" />
              </dd>
              <dt>Nickname</dt>
              <dd class="nickname">nicknamedraco</dd>
              <dt>Server</dt>
              <dd class="server">ASIA034</dd>
            </dl>
            <dl class="define-balance">
              <dt>Winner Stake</dt>
              <dd class="draco">
                <span>45,503,000</span>
              </dd>
            </dl>
            <dl class="define-balance">
              <dt>Winner Odds</dt>
              <dd class="odds">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }"> <span v-bind="attrs" v-on="on">11.0123</span>% </template>
                  <span>11.0123</span>
                </v-tooltip>
              </dd>
            </dl>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn" disabled>상품 획득 완료</button>
        </div>
      </div>
    </div>

    <!-- C3 - "Loser" -->
    <div class="round" aria-current="lose" v-if="uiType === 'c3'">
      <div class="round__inner">
        <Card :itemType="itemType"></Card>
        <RoundNumber value="53"></RoundNumber>
        <div class="wrap-detail">
          <div class="block1">
            <h3 class="round-msg-for">Round 53 closed</h3>
            <p class="closed-date">16th Nov. 2021 00:00 UTC</p>
            <div class="wrap-define-balance horizontal">
              <dl class="define-balance">
                <dt>Total Pre-Stake</dt>
                <dd class="draco">
                  <span>21,125,000</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>Participants</dt>
                <dd>
                  <span>23,532</span>
                </dd>
              </dl>
            </div>
            <h3 class="title-define-balance">Winner</h3>
            <div class="wrap-define-balance">
              <dl class="define-winner">
                <dt>Class</dt>
                <dd class="thumbs">
                  <img src="@/assets/img/desktop/header/thumb-profile-taoist.webp" alt="TAOIST" />
                </dd>
                <dt>Nickname</dt>
                <dd class="nickname">nicknamedraco</dd>
                <dt>Server</dt>
                <dd class="server">ASIA034</dd>
              </dl>
              <dl class="define-balance">
                <dt>Winner Stake</dt>
                <dd class="draco">
                  <span>45,503,000</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>Winner Odds</dt>
                <dd class="odds">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }"> <span v-bind="attrs" v-on="on">11.987654321012345678</span>% </template>
                    <span>11.987654321012345678</span>
                  </v-tooltip>
                </dd>
              </dl>
            </div>
            <h3 class="title-define-balance">My Round</h3>
            <div class="wrap-define-balance">
              <dl class="define-balance">
                <dt>Rewards</dt>
                <dd class="draco">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <em v-bind="attrs" v-on="on">45,123,000,000,024,000</em>
                    </template>
                    <span>45,123,000,000,024,000</span>
                  </v-tooltip>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Stake</dt>
                <dd class="draco">
                  <span>503,000</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Odds</dt>
                <dd class="odds">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }"> <span v-bind="attrs" v-on="on">11.987654321012345678</span>% </template>
                    <span>11.987654321012345678</span>
                  </v-tooltip>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-primary2 btn-sm">
            <span>REFUND + GET REWARDS</span>
            <span class="emp">Refundable period expires on 16 Nov 2022. 00:00 UTC</span>
          </button>
        </div>
      </div>
    </div>

    <!-- C4 - "Loser - 수령완료" -->
    <div class="round" aria-current="lose" v-if="uiType === 'c4'">
      <div class="round__inner">
        <Card :itemType="itemType"></Card>
        <RoundNumber value="53"></RoundNumber>
        <div class="wrap-detail">
          <div class="block1">
            <h3 class="round-msg-for">Round 53 closed</h3>
            <p class="closed-date">16th Nov. 2021 00:00 UTC</p>
            <div class="wrap-define-balance horizontal">
              <dl class="define-balance">
                <dt>Total Pre-Stake</dt>
                <dd class="draco">
                  <span>21,125,000</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>Participants</dt>
                <dd>
                  <span>23,532</span>
                </dd>
              </dl>
            </div>
            <h3 class="title-define-balance">Winner</h3>
            <div class="wrap-define-balance">
              <dl class="define-winner">
                <dt>Class</dt>
                <dd class="thumbs">
                  <img src="@/assets/img/desktop/header/thumb-profile-taoist.webp" alt="TAOIST" />
                </dd>
                <dt>Nickname</dt>
                <dd class="nickname">nicknamedraco</dd>
                <dt>Server</dt>
                <dd class="server">ASIA034</dd>
              </dl>
              <dl class="define-balance">
                <dt>Winner Stake</dt>
                <dd class="draco">
                  <span>45,503,000</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>Winner Odds</dt>
                <dd class="odds">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }"> <span v-bind="attrs" v-on="on">11.0511</span>% </template>
                    <span>11.0511</span>
                  </v-tooltip>
                </dd>
              </dl>
            </div>
            <h3 class="title-define-balance">My Round</h3>
            <div class="wrap-define-balance">
              <dl class="define-balance">
                <dt>Rewards</dt>
                <dd class="draco">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <em v-bind="attrs" v-on="on">45,123,000,000</em>
                    </template>
                    <span>45,123,000,000</span>
                  </v-tooltip>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Stake</dt>
                <dd class="draco">
                  <span>503,000</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Odds</dt>
                <dd class="odds">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }"> <span v-bind="attrs" v-on="on">0.0511</span>% </template>
                    <span>0.0511</span>
                  </v-tooltip>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn" disabled>환불 완료</button>
        </div>
      </div>
    </div>

    <!-- C5 - "No player" -->
    <div class="round" aria-current="noplayer" v-if="uiType === 'c5'">
      <div class="round__inner">
        <Card :itemType="itemType"></Card>
        <RoundNumber value="53"></RoundNumber>
        <div class="wrap-detail">
          <div class="block1">
            <h3 class="round-msg-for">Round 53 closed</h3>
            <p class="closed-date">16th Nov. 2021 00:00 UTC</p>
            <div class="wrap-define-balance horizontal">
              <dl class="define-balance">
                <dt>Total Pre-Stake</dt>
                <dd class="draco">
                  <span>521,125,000</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>Participants</dt>
                <dd>
                  <span>123,532</span>
                </dd>
              </dl>
            </div>
          </div>
          <div>
            <h3 class="title-define-balance">Winner</h3>
            <div class="wrap-define-balance">
              <dl class="define-winner">
                <dt>Class</dt>
                <dd class="thumbs">
                  <img src="@/assets/img/desktop/header/thumb-profile-taoist.webp" alt="TAOIST" />
                </dd>
                <dt>Nickname</dt>
                <dd class="nickname">nicknamedraco</dd>
                <dt>Server</dt>
                <dd class="server">ASIA034</dd>
              </dl>
              <dl class="define-balance">
                <dt>Winner Stake</dt>
                <dd class="draco">
                  <span>45,503,000</span>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>Winner Odds</dt>
                <dd class="odds">
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }"> <span v-bind="attrs" v-on="on">0.987654321012345678</span>% </template>
                    <span>0.987654321012345678</span>
                  </v-tooltip>
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- L1 - "Loading - type1" -->
    <div class="round" v-if="uiType === 'l1'">
      <div class="round__inner">
        <Card :itemType="itemType"></Card>
        <RoundNumber value="3"></RoundNumber>
        <div class="wrap-detail">
          <RoundTitle value="YouAreSobeautiful"></RoundTitle>
          <div class="block-border">
            <div class="wrap-define-balance">
              <dl class="define-balance">
                <dt>DSP round closes in</dt>
                <dd>
                  <FlipCountdown targetDate="2021-10-30T23:00:05" smaller></FlipCountdown>
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>Joined participants</dt>
                <dd>
                  <FlipCountup :targetValue="217035" smaller></FlipCountup>
                </dd>
              </dl>
            </div>
          </div>
          <div class="block2">
            <div class="wrap-define-balance">
              <dl class="define-balance">
                <dt>Total Pre-Stake</dt>
                <dd class="draco">
                  <!-- 로딩 전 -->
                  <v-progress-circular class="ml-2" :size="16" :width="2" color="#fff" indeterminate></v-progress-circular>

                  <!-- 로딩 후 -->
                  <!-- <span>25,910,000</span> -->
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Pre-Stake</dt>
                <dd class="draco">
                  <!-- 로딩 전 -->
                  <v-progress-circular class="ml-2" :size="16" :width="2" color="#fff" indeterminate></v-progress-circular>

                  <!-- 로딩 후 -->
                  <!-- <span>1,300</span> -->
                </dd>
              </dl>
              <dl class="define-balance">
                <dt>My Expected Odds</dt>
                <dd class="odds">
                  <!-- 로딩 전 -->
                  <v-progress-circular class="ml-2" :size="16" :width="2" color="#fff" indeterminate></v-progress-circular>

                  <!-- 로딩 후 -->
                  <!-- <span>0.09%</span> -->
                </dd>
              </dl>
            </div>
            <p>0.0003% odds increase with 1 DRACO staking</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-primary">
            <!-- 로딩 전 -->
            <v-progress-circular class="ml-2" :size="16" :width="2" color="#fff" indeterminate></v-progress-circular>

            <!-- 로딩 후 -->
            <!-- <span>STAKE</span> -->
          </button>
        </div>
      </div>
    </div>

    <!-- U4 - "PRE-STAKE MORE - 24시간동안 추가 스테이킹안됨" -->
    <div class="round" v-if="uiType === 'roundCountdown'">
      <div class="round__inner">
        <Card :itemType="itemType"></Card>
        <RoundNumber value="3"></RoundNumber>
        <div class="wrap-detail">
          <div class="block1">
            <h3 class="round-msg-for">Round 59 open in</h3>
            <div class="wrap-tick">
              <!-- <FlipCountdown targetDate="2021-11-20T23:00:00"></FlipCountdown> -->
              <round-body-count-down :targetDate="new Date().getTime()" />
              <round-body-count-down :targetDate="new Date().getTime()" smaller />
            </div>
            <p class="message">Running for 2 weeks after opening</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Card from '@/components-ui/common/Card';
import FlipCountdown from '@/components-ui/desktop/FlipCountdown';
import FlipCountup from '@/components-ui/desktop/FlipCountup';
import NumberImage from '@/components-ui/desktop/NumberImage';
import RoundNumber from '@/components-ui/desktop/RoundNumber';
import RoundTitle from '@/components-ui/desktop/RoundTitle';
import RoundBodyCountDown from '@/components/dsp/round/body/RoundBodyCountDown';

export default defineComponent({
  name: 'Round',
  props: {
    uiType: {
      type: String,
      required: false,
    },
    itemType: {
      // for UI Guide
      type: String,
      required: false,
      default: () => 'rare',
    },
  },
  components: {
    Card,
    FlipCountdown,
    FlipCountup,
    NumberImage,
    RoundNumber,
    RoundTitle,
    RoundBodyCountDown,
  },
  data: () => {
    const aa = 'asdf';
    const targetDateString = '2021-11-20T23:00:00';
    const targetDate = new Date(targetDateString).getTime();

    // console.log(new Date(dayjs.unix(targetDate).utcOffset(8).format()).getTime());

    return {
      isDevelopment: process.env.NODE_ENV === 'development',
    };
  },
  methods: {
    transformSlotProps(props) {
      const formattedProps = {};

      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });

      return formattedProps;
    },
  },
});
</script>

<style lang="scss"></style>
