<template>
  <main class="contents">
    <section class="section">
      <div class="section__inner">
        <h2 class="linktitle">Flip Count</h2>
        <div class="d-flex justify-space-between mb-4">
          <div>
            <p>목표시간 : 2021-10-31 23:00:00</p>
            <FlipCountdown targetDate="2021-10-31T23:00:00"></FlipCountdown>
          </div>
          <div>
            <p>목표시간 : 2021-12-11 19:07:32</p>
            <FlipCountdown targetDate="2021-12-11T19:07:32"></FlipCountdown>
          </div>
        </div>
        <div class="d-flex justify-space-between mb-10">
          <div>
            <p>목표시간 : 2021-10-31 23:00:00</p>
            <FlipCountdown targetDate="2021-10-31T23:00:00" smaller></FlipCountdown>
          </div>
          <div>
            <div>목표시간 : 2021-12-11 19:07:32</div>
            <FlipCountdown targetDate="2021-12-11T19:07:32" smaller></FlipCountdown>
          </div>
        </div>
        <div class="d-flex justify-space-between mb-10">
          <div>
            <p>목표값 : 986</p>
            <FlipCountup :targetValue="986" smaller></FlipCountup>
          </div>
          <div>
            <p>목표값 : 7,035</p>
            <FlipCountup :targetValue="7035" smaller></FlipCountup>
          </div>
          <div>
            <p>목표값 : 234,517</p>
            <FlipCountup :targetValue="234517" smaller></FlipCountup>
          </div>
        </div>

        <h2 class="linktitle">Card</h2>
        <div class="d-flex justify-space-between mb-10">
          <Card itemType="rare" flipped smaller="xs"></Card>
          <Card itemType="epic" flipped smaller="xs"></Card>
          <Card itemType="legendary" flipped smaller="xs"></Card>
        </div>
        <div class="d-flex justify-space-between mb-10">
          <Card itemType="rare" flipped smaller="sm"></Card>
          <Card itemType="epic" flipped smaller="sm"></Card>
          <Card itemType="legendary" flipped smaller="sm"></Card>
        </div>
        <div class="d-flex justify-space-between mb-10">
          <Card itemType="grade1"></Card>
          <Card itemType="grade1" reverse></Card>
          <Card itemType="grade1" flipped></Card>
        </div>
        <div class="d-flex justify-space-between mb-10">
          <Card itemType="grade2"></Card>
          <Card itemType="grade2" reverse></Card>
          <Card itemType="grade2" flipped></Card>
        </div>
        <div class="d-flex justify-space-between mb-10">
          <Card itemType="rare"></Card>
          <Card itemType="rare" reverse></Card>
          <Card itemType="rare" flipped></Card>
        </div>
        <div class="d-flex justify-space-between mb-10">
          <Card itemType="epic"></Card>
          <Card itemType="epic" reverse></Card>
          <Card itemType="epic" reverse flipped></Card>
        </div>
        <div class="d-flex justify-space-between mb-16">
          <Card itemType="legendary"></Card>
          <Card itemType="legendary" reverse></Card>
          <Card itemType="legendary" flipped></Card>
        </div>
        <div class="d-flex justify-space-between mb-16">
          <card-collectible :itemGrade="3"></card-collectible>
          <card-collectible :itemGrade="4"></card-collectible>
          <card-collectible :itemGrade="5"></card-collectible>
        </div>
        <div class="d-flex justify-space-between mb-10">
          <card-nft :itemGrade="3" characterClass="warrior" smaller="xs" isMirage flipped></card-nft>
          <card-nft :itemGrade="4" characterClass="lancer" smaller="xs" flipped></card-nft>
          <card-nft :itemGrade="5" characterClass="taoist" smaller="xs" flipped></card-nft>
        </div>
        <div class="d-flex justify-space-between mb-10">
          <card-nft :itemGrade="3" characterClass="sorcerer" smaller="sm" isMirage flipped></card-nft>
          <card-nft :itemGrade="4" characterClass="arbalist" smaller="sm" flipped></card-nft>
          <card-nft :itemGrade="5" characterClass="lancer" smaller="sm" flipped></card-nft>
        </div>
        <div class="d-flex justify-space-between mb-10">
          <card-nft :itemGrade="2" characterClass="arbalist" isMirage></card-nft>
          <card-nft :itemGrade="2" characterClass="sorcerer"></card-nft>
          <card-nft :itemGrade="2" characterClass="warrior"></card-nft>
          <card-nft :itemGrade="2" characterClass="lancer" isMirage reverse></card-nft>
          <card-nft :itemGrade="2" characterClass="taoist" flipped></card-nft>
        </div>
        <div class="d-flex justify-space-between mb-10">
          <card-nft :itemGrade="3" characterClass="arbalist"></card-nft>
          <card-nft :itemGrade="3" characterClass="sorcerer"></card-nft>
          <card-nft :itemGrade="3" characterClass="warrior"></card-nft>
          <card-nft :itemGrade="3" characterClass="lancer" reverse></card-nft>
          <card-nft :itemGrade="3" characterClass="taoist" flipped></card-nft>
        </div>
        <div class="d-flex justify-space-between mb-10">
          <card-nft :itemGrade="4" characterClass="arbalist"></card-nft>
          <card-nft :itemGrade="4" characterClass="sorcerer"></card-nft>
          <card-nft :itemGrade="4" characterClass="warrior"></card-nft>
          <card-nft :itemGrade="4" characterClass="lancer" reverse></card-nft>
          <card-nft :itemGrade="4" characterClass="taoist" flipped></card-nft>
        </div>
        <div class="d-flex justify-space-between mb-16">
          <card-nft :itemGrade="5" characterClass="arbalist"></card-nft>
          <card-nft :itemGrade="5" characterClass="sorcerer"></card-nft>
          <card-nft :itemGrade="5" characterClass="warrior"></card-nft>
          <card-nft :itemGrade="5" characterClass="lancer" reverse></card-nft>
          <card-nft :itemGrade="5" characterClass="taoist" flipped></card-nft>
        </div>

        <h2 class="linktitle">Button</h2>
        <div class="d-flex mb-16">
          <div style="width: 200px">&lt;button type="button"&gt;</div>
          <div class="ui-wrap-button">
            <button type="button" class="btn btn-primary">Primary A</button>
            <button type="button" class="btn btn-primary2">Primary B</button>
            <button type="button" class="btn btn-primary-exd">Primary EXD</button>
            <button type="button" class="btn btn-primary-nft">Primary NFT</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-price">
              <em class="price">
                <strong class="ico-darco ico-ss add-inside">150,000</strong>
                <span class="rate">$ 400,000</span>
              </em>
            </button>
            <button type="button" class="btn btn-price-exd">
              <em class="price">
                <strong class="ico-darco ico-ss add-inside">150,000</strong>
                <span class="rate">$ 400,000</span>
              </em>
            </button>
            <button type="button" class="btn btn-price btn-primary-nft">
              <em class="price">
                <strong class="ico-wemixcredit ico-ss add-inside">150,000</strong>
                <span class="rate">$ 400,000</span>
              </em>
            </button>
            <button type="button" class="btn">Base</button>
            <button type="button" class="btn" disabled>Disabled</button>
            <button type="button" class="btn" disabled>
              <span class="btn-message">The message</span>
            </button>
          </div>
          <div class="ml-2 mr-16">Height 56px</div>
          <div class="ui-wrap-button">
            <button type="button" class="btn btn-primary btn-sm">Primary A</button>
            <button type="button" class="btn btn-primary2 btn-sm">Primary B</button>
            <button type="button" class="btn btn-primary-exd btn-sm">Primary EXD</button>
            <button type="button" class="btn btn-secondary btn-sm">Secondary</button>
            <button type="button" class="btn btn-sm">Base</button>
            <button type="button" class="btn btn-sm" disabled>Disabled</button>
            <button type="button" class="btn btn-sm" disabled>
              <span class="btn-message">The message</span>
            </button>
          </div>
          <div class="ml-2">Height 48px</div>
        </div>
        <div class="d-flex mb-16">
          <div style="width: 200px">&lt;a href="#"&gt;</div>
          <div class="ui-wrap-button">
            <a href="#" class="btn btn-primary">Primary A</a>
            <a href="#" class="btn btn-primary2">Primary B</a>
            <a href="#" class="btn btn-primary-exd">Primary EXD</a>
            <a href="#" class="btn btn-secondary">Secondary</a>
            <a href="#" class="btn btn-price">
              <em class="price">
                <strong class="ico-darco ico-ss add-inside">150,000</strong>
                <span class="rate">$ 400,000</span>
              </em>
            </a>
            <a href="#" class="btn btn-price-exd">
              <em class="price">
                <strong class="ico-darco ico-ss add-inside">150,000</strong>
                <span class="rate">$ 400,000</span>
              </em>
            </a>
            <a href="#" class="btn">Base</a>
            <a href="#" class="btn" aria-disabled="true">Disabled</a>
            <a href="#" class="btn" aria-disabled="true">
              <span class="btn-message">The message</span>
            </a>
          </div>
          <div class="ml-2 mr-16">Height 56px</div>
          <div class="ui-wrap-button">
            <a href="#" class="btn btn-primary btn-sm">Primary A</a>
            <a href="#" class="btn btn-primary2 btn-sm">Primary B</a>
            <a href="#" class="btn btn-primary-exd btn-sm">Primary EXD</a>
            <a href="#" class="btn btn-secondary btn-sm">Secondary</a>
            <a href="#" class="btn btn-sm">Base</a>
            <a href="#" class="btn btn-sm" aria-disabled="true">Disabled</a>
            <a href="#" class="btn btn-sm" aria-disabled="true">
              <span class="btn-message">The message</span>
            </a>
          </div>
          <div class="ml-2">Height 48px</div>
        </div>

        <h2 class="linktitle">Dropdown</h2>
        <div class="d-flex mb-16">
          <v-list class="dropdown">
            <v-list-item-group class="dropdown__list" color="primary">
              <v-list-item disabled>
                <span class="text">SEASON 1</span>
                <span class="status">Closed</span>
              </v-list-item>
              <v-list-item disabled>
                <span class="text">SEASON 4</span>
                <span class="status" aria-label="open">OPEN</span>
              </v-list-item>
              <v-list-item disabled>
                <span class="text">SEASON 4</span>
                <span class="status" aria-label="open">OPEN</span>
              </v-list-item>
              <v-list-item>
                <span class="text">SEASON 4</span>
                <span class="status" aria-label="open">OPEN</span>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <div style="width: 40px"></div>

          <v-list class="dropdown">
            <v-list-item-group class="dropdown__list" color="primary">
              <v-list-item to="/my-character" disabled>
                <span class="text">My Character</span>
              </v-list-item>
              <v-list-item to="/my-wallet" disabled>
                <span class="text">My Wallet</span>
              </v-list-item>
              <v-list-item to="/history" disabled>
                <span class="text">History</span>
              </v-list-item>
              <v-list-item class="emp">
                <span class="text">Login</span>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <div style="width: 40px"></div>

          <v-list class="dropdown">
            <v-list-item-group class="dropdown__list" color="primary">
              <v-list-item to="/my-character">
                <span class="text">My Character</span>
              </v-list-item>
              <v-list-item to="/my-wallet">
                <span class="text">My Wallet</span>
              </v-list-item>
              <v-list-item to="/history">
                <span class="text">History</span>
              </v-list-item>
              <v-list-item class="emp">
                <span class="text">Logout</span>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>

        <h2 class="linktitle">Character Profile</h2>
        <div class="d-flex mb-16">
          <div>
            <h3>Login</h3>
            <AccountInfo profile-type="signIn"></AccountInfo>
          </div>
          <div style="width: 40px"></div>
          <div>
            <h3>Login Wemix</h3>
            <AccountInfo profile-type="signInWemix"></AccountInfo>
          </div>
          <div style="width: 40px"></div>
          <div>
            <h3>Login without GameAccount</h3>
            <AccountInfo profile-type="signInWithoutGame"></AccountInfo>
          </div>
        </div>
        <div class="d-flex mb-16">
          <div>
            <h3>월랫 미연동</h3>
            <AccountInfo profile-type="noSync"></AccountInfo>
          </div>
          <div style="width: 40px"></div>
          <div>
            <h3>로그인 완료</h3>
            <AccountInfo profile-type="signUp" more-active></AccountInfo>
          </div>
        </div>
        <div class="d-flex mb-16">
          <div>
            <h3>로그인/월랫 미로그인</h3>
            <AccountInfo profile-type="signInwallet"></AccountInfo>
          </div>
          <div style="width: 40px"></div>
          <div>
            <h3>대표캐릭터 미설정 / 월랫 미연동</h3>
            <AccountInfo profile-type="nomainnowallet"></AccountInfo>
          </div>
          <div style="width: 40px"></div>
          <div>
            <h3>대표캐릭터 미설정 / 월랫 연동</h3>
            <AccountInfo profile-type="nomain"></AccountInfo>
          </div>
        </div>

        <h2 class="linktitle">ICON Set.</h2>
        <div class="d-flex mb-16">
          <span class="ico-darco ico-xs"></span>
          <span class="ico-wemixcredit ico-xs"></span>
          <span class="ico-wemix ico-xs"></span>
          <span class="ico-mir4box ico-xs"></span>
          <span class="ico-wemixbox ico-xs"></span>

          <span class="ico-darco ico-sm"></span>
          <span class="ico-wemixcredit ico-sm"></span>
          <span class="ico-wemix ico-sm"></span>
          <span class="ico-mir4box ico-sm"></span>
          <span class="ico-wemixbox ico-sm"></span>
        </div>
        <div class="d-flex mb-16">
          <span class="ico-darco ico-xs add-inside">55,291.088</span>
          <span class="ico-wemixcredit ico-xs add-inside">55,291.088</span>
          <span class="ico-wemix ico-xs add-inside">55,291.088</span>

          <span class="ico-darco ico-sm add-inside">55,291.088</span>
          <span class="ico-wemixcredit ico-sm add-inside">55,291.088</span>
          <span class="ico-wemix ico-sm add-inside">55,291.088</span>
        </div>
      </div>
    </section>

    <Footer></Footer>
  </main>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
// eslint-disable-next-line import/extensions
import Footer from '@/partials/common/Footer';
import Card from '@/components-ui/common/Card';
import CardNft from '@/components-ui/common/CardNft';
import CardCollectible from '@/components-ui/common/CardCollectible';
import AccountInfo from '@/components-ui/desktop/AccountInfo';
import FlipCountdown from '@/components-ui/desktop/FlipCountdown';
import FlipCountup from '@/components-ui/desktop/FlipCountup';

export default defineComponent({
  components: {
    Footer,
    Card,
    CardNft,
    CardCollectible,
    AccountInfo,
    FlipCountdown,
    FlipCountup,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
  methods: {
    //
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
@import '~@/assets/sass/desktop/ui-guide.scss';
</style>
