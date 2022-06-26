<template>
  <div>
    <!-- U1 - "라운드 시작까지 N시간 초과로 남은 경우 - PRE-STAKE 안됨" -->
    <div class="round" v-if="uiType === 'u1'">
      <RoundNumber value="243"></RoundNumber>
      <Card :itemType="itemType" smaller="sm"></Card>
      <div class="round__inner">
        <div class="wrap-detail">
          <div class="block1">
            <h3 class="round-msg-for">Round 59 coming on</h3>
            <p class="upcoming-date">16th Nov. 2021 00:00 UTC</p>
            <p>Running for 2 weeks after opening</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-sm" disabled>
            <span class="btn-message">You can pre-stake from 16th Nov. 2021. 16:56:45 GMT</span>
          </button>
        </div>
      </div>
    </div>

    <!-- U2 - "PRE-STAKE" -->
    <div class="round" v-if="uiType === 'u2'">
      <Card :itemType="itemType" smaller="sm"></Card>
      <RoundNumber value="243"></RoundNumber>
      <div class="round__inner">
        <div class="wrap-detail">
          <div class="block1">
            <h3 class="round-msg-for">Round 59 open in</h3>
            <div class="wrap-tick">
              <FlipCountdown targetDate="2021-11-02T23:00:00"></FlipCountdown>
            </div>
            <p>Running for 2 weeks after opening</p>
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
            <p class="message">0.0003% odds increase with 1 DRACO staking</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-primary btn-sm">PRE-STAKE</button>
        </div>
      </div>
    </div>

    <!-- U3 - "PRE-STAKE MORE" -->
    <div class="round" v-if="uiType === 'u3'">
      <Card :itemType="itemType" smaller="sm"></Card>
      <RoundNumber value="243"></RoundNumber>
      <div class="round__inner">
        <div class="wrap-detail">
          <div class="block1">
            <h3 class="round-msg-for">Round 59 open in</h3>
            <div class="wrap-tick">
              <FlipCountdown targetDate="2021-11-01T23:00:17"></FlipCountdown>
            </div>
            <p>Running for 2 weeks after opening</p>
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
            <p class="message">0.0003% odds increase with 1 DRACO staking</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-primary2 btn-sm">STAKE MORE</button>
        </div>
      </div>
    </div>

    <!-- U4 - "PRE-STAKE MORE - 24시간동안 추가 스테이킹안됨" -->
    <div class="round" v-if="uiType === 'u4'">
      <Card :itemType="itemType" smaller="sm"></Card>
      <RoundNumber value="243"></RoundNumber>
      <div class="round__inner">
        <div class="wrap-detail">
          <div class="block1">
            <h3 class="round-msg-for">Round 59 open in</h3>
            <div class="wrap-tick">
              <FlipCountdown targetDate="2021-10-31T23:00:15"></FlipCountdown>
            </div>
            <p>Running for 2 weeks after opening</p>
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
            <p class="message">0.0003% odds increase with 1 DRACO staking</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-sm" disabled>
            <span class="btn-message">You can pre-stake more at 16th Nov. 2021. 16:56:45 GMT</span>
          </button>
        </div>
      </div>
    </div>

    <!-- O1 - "STAKE EARLIER" -->
    <div class="round" v-if="uiType === 'o1'">
      <Card :itemType="itemType" smaller="sm"></Card>
      <RoundNumber value="143"></RoundNumber>
      <div class="round__inner">
        <div class="wrap-detail">
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
                  <FlipCountup :targetValue="7035" smaller></FlipCountup>
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
            <p class="message">0.0003% odds increase with 1 DRACO staking</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-primary btn-sm">STAKE EARLIER</button>
        </div>
      </div>
    </div>

    <!-- O2 - "STAKE EARLIER MORE" -->
    <div class="round" v-if="uiType === 'o2'">
      <Card :itemType="itemType" smaller="sm"></Card>
      <RoundNumber value="143"></RoundNumber>
      <div class="round__inner">
        <div class="wrap-detail">
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
            <p class="message">0.0003% odds increase with 1 DRACO staking</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-primary2 btn-sm">STAKE MORE</button>
        </div>
      </div>
    </div>

    <!-- O3 - "STAKE EARLIER MORE - 24시간동안 추가 스테이킹안됨" -->
    <div class="round" v-if="uiType === 'o3'">
      <Card :itemType="itemType" smaller="sm"></Card>
      <RoundNumber value="143"></RoundNumber>
      <div class="round__inner">
        <div class="wrap-detail">
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
                    <template v-slot:activator="{ on, attrs }"> <span v-bind="attrs" v-on="on">0.09</span>% </template>
                    <span>0.09</span>
                  </v-tooltip>
                </dd>
              </dl>
            </div>
            <p class="message">0.0003% odds increase with 1 DRACO staking</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-sm" disabled>
            <span class="btn-message">You can pre-stake more from 16th Nov. 2021. 16:56:45 GMT</span>
          </button>
        </div>
      </div>
    </div>

    <!-- C1 - "Winner" -->
    <div class="round" aria-current="won" v-if="uiType === 'c1'">
      <Card :itemType="itemType" smaller="sm"></Card>
      <RoundNumber value="53"></RoundNumber>
      <div class="round__inner">
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
                <img src="@/assets/img/mobile/header/thumb-profile-warrior.webp" alt="WARRIOR" />
                <!-- <img src="@/assets/img/mobile/header/thumb-profile-sorcerer.webp" alt="SORCERER" /> -->
                <!-- <img src="@/assets/img/mobile/header/thumb-profile-taoist.webp" alt="TAOIST" /> -->
                <!-- <img src="@/assets/img/mobile/header/thumb-profile-arbalist.webp" alt="ARBALIST" /> -->
                <!-- <img src="@/assets/img/mobile/header/thumb-profile-lancer.webp" alt="LANCER" /> -->
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
          <button type="button" class="btn btn-secondary btn-sm">WIN PRIZE!</button>
        </div>
        <p class="message">Expires on Nov. 16, 2022. 00:00 UTC.</p>
      </div>
    </div>

    <!-- C2 - "Winner - 수령완료" -->
    <div class="round" aria-current="won" v-if="uiType === 'c2'">
      <Card :itemType="itemType" smaller="sm"></Card>
      <RoundNumber value="53"></RoundNumber>
      <div class="round__inner">
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
                <img src="@/assets/img/mobile/header/thumb-profile-sorcerer.webp" alt="SORCERER" />
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
          <button type="button" class="btn btn-sm" disabled>상품 획득 완료</button>
        </div>
      </div>
    </div>

    <!-- C3 - "Loser" -->
    <div class="round" aria-current="lose" v-if="uiType === 'c3'">
      <Card :itemType="itemType" smaller="sm"></Card>
      <RoundNumber value="53"></RoundNumber>
      <div class="round__inner">
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
                  <img src="@/assets/img/mobile/header/thumb-profile-taoist.webp" alt="TAOIST" />
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
          <button type="button" class="btn btn-primary2 btn-sm">REFUND + GET REWARDS</button>
        </div>
        <p class="message">Refundable period expires on 16 Nov 2022. 00:00 UTC</p>
      </div>
    </div>

    <!-- C4 - "Loser - 수령완료" -->
    <div class="round" aria-current="lose" v-if="uiType === 'c4'">
      <Card :itemType="itemType" smaller="sm"></Card>
      <RoundNumber value="53"></RoundNumber>
      <div class="round__inner">
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
                  <img src="@/assets/img/mobile/header/thumb-profile-taoist.webp" alt="TAOIST" />
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
                    <template v-slot:activator="{ on, attrs }"> <span v-bind="attrs" v-on="on">11.987654321012345678</span>% </template>
                    <span>11.987654321012345678</span>
                  </v-tooltip>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-sm" disabled>환불 완료</button>
        </div>
      </div>
    </div>

    <!-- C5 - "No player" -->
    <div class="round" aria-current="noplayer" v-if="uiType === 'c5'">
      <Card :itemType="itemType" smaller="sm"></Card>
      <RoundNumber value="53"></RoundNumber>
      <div class="round__inner">
        <div class="wrap-detail">
          <!-- <div class="block1"></div> -->
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
          <h3 class="title-define-balance">Winner</h3>
          <div class="wrap-define-balance">
            <dl class="define-winner">
              <dt>Class</dt>
              <dd class="thumbs">
                <img src="@/assets/img/mobile/header/thumb-profile-taoist.webp" alt="TAOIST" />
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
        </div>
      </div>
    </div>

    <!-- L1 - "Loading - type1" -->
    <div class="round" v-if="uiType === 'l1'">
      <Card :itemType="itemType" smaller="sm"></Card>
      <RoundNumber value="3"></RoundNumber>
      <div class="round__inner">
        <div class="wrap-detail">
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
            <p class="message">0.0003% odds increase with 1 DRACO staking</p>
          </div>
        </div>
        <div class="wrap-button">
          <button type="button" class="btn btn-primary btn-sm">
            <!-- 로딩 전 -->
            <v-progress-circular class="ml-2" :size="16" :width="2" color="#fff" indeterminate></v-progress-circular>

            <!-- 로딩 후 -->
            <!-- <span>STAKE</span> -->
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Card from '@/components-ui/common/Card';
import FlipCountdown from '@/components-ui/mobile/FlipCountdown';
import FlipCountup from '@/components-ui/mobile/FlipCountup';
import RoundNumber from '@/components-ui/mobile/RoundNumber';
import RoundTitle from '@/components-ui/mobile/RoundTitle';

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
    RoundNumber,
    RoundTitle,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
  methods: {
    //
  },
});
</script>

<style lang="scss"></style>
