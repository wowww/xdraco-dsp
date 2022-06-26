<template>
  <div class="account-info" v-if="profileType === 'signIn'">
    <div class="wrap-signin">
      <div class="info-char">
        <div class="char">
          <!-- no image show mir4 brand-logo -->
          <div class="wrap-thumb-profile">
            <span class="base-profile"></span>
          </div>
        </div>
      </div>

      <span class="desc"> log in to XDRACO with <br />MIR4 account </span>
      <div class="wrap-button">
        <!-- 글로벌 사이트에서는 SignIn을 더 많이 사용하지 않나요? -->
        <button type="button" class="btn btn-primary btn-sm btn-max">LOG IN</button>
      </div>
    </div>
  </div>

  <div class="account-info" data-by-wemix="true" v-else-if="profileType === 'signInWemix'">
    <div class="wrap-signin">
      <div class="info-char">
        <div class="char">
          <!-- no image show mir4 brand-logo -->
          <div class="wrap-thumb-profile by-wemix">
            <!-- <img src="@/assets/img/common/login-profile/profile-lancer.webp" width="120" height="120" alt="lancer" /> -->
            <span class="base-profile"></span>
          </div>
        </div>
      </div>

      <span class="desc"> log in to XDRACO with <br />MIR4 account </span>
      <div class="wrap-button">
        <!-- 글로벌 사이트에서는 SignIn을 더 많이 사용하지 않나요? -->
        <button type="button" class="btn btn-wemix-login btn-sm btn-max">LOGIN</button>
      </div>
    </div>
  </div>

  <div class="account-info" data-by-wemix="true" v-else-if="profileType === 'signInWithoutGame'">
    <div class="wrap-member">
      <v-menu offset-y left>
        <template v-slot:activator="{ on, attrs }">
          <button type="button" class="btn-more" :class="{ active: moreActive }" v-bind="attrs" v-on="on">
            <em class="hidden">MyAccount More</em>
          </button>
        </template>
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
            <v-list-item>
              <span class="text">Sign out</span>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <div class="info-char">
        <div class="char">
          <!-- no image show mir4 brand-logo -->
          <div class="wrap-thumb-profile by-wemix">
            <span class="base-profile"></span>
          </div>
          <div class="without-game-account">
            <div class="nick">0xa4c1...154320</div>
            <p class="desc">Create a MIR4 account for full access to XDRACO services</p>
            <a href="https://mir4global.com" class="link-play-mir4" target="_blank">PLAY MIR4</a>
          </div>
        </div>
      </div>

      <div class="list-balance">
        <ul class="list">
          <li>
            <div class="list-content">
              <div class="credit-info">
                <div class="category">DRACO Balance</div>
                <div class="info">
                  <span class="ico-darco ico-xs add-inside">1,342,456.0000</span>
                </div>
              </div>
            </div>
            <div class="fnc">
              <button type="button" class="btn ico-plus-circle"><span class="hidden">ADD</span></button>
            </div>
          </li>
          <li>
            <div class="list-content">
              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
              <div class="credit-info">
                <div class="category">WEMIX CREDIT Balance</div>
                <div class="info">
                  <span class="ico-wemixcredit ico-xs add-inside">2,456.0153</span>
                </div>
              </div>
            </div>
            <div class="fnc">
              <button type="button" class="btn ico-plus-circle"><span class="hidden">ADD</span></button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="account-info" v-else-if="profileType === 'nomainnowallet'">
    <div class="wrap-member">
      <v-menu offset-y left>
        <template v-slot:activator="{ on, attrs }">
          <button type="button" class="btn-more" :class="{ active: moreActive }" v-bind="attrs" v-on="on">
            <em class="hidden">MyAccount More</em>
          </button>
        </template>
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
            <v-list-item>
              <span class="text">Sign out</span>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <div class="info-char">
        <div class="char">
          <!-- no image show mir4 brand-logo -->
          <div class="wrap-thumb-profile">
            <span class="base-profile"></span>
          </div>
        </div>
      </div>

      <span class="set-mainchar"><a href="#">대표 캐릭터 설정 하기</a></span>

      <div class="wallet-link">
        <p class="desc">Your MIR4 account is not linked to the <br />WEMIX WALLET</p>
        <a href="#">WEMIX WALLET LINK GUIDE</a>
      </div>
    </div>
  </div>

  <div class="account-info" v-else-if="profileType === 'nomain'">
    <div class="wrap-member">
      <v-menu offset-y left>
        <template v-slot:activator="{ on, attrs }">
          <button type="button" class="btn-more" :class="{ active: moreActive }" v-bind="attrs" v-on="on">
            <em class="hidden">MyAccount More</em>
          </button>
        </template>
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
            <v-list-item>
              <span class="text">Sign out</span>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <div class="info-char">
        <div class="char">
          <div class="wrap-thumb-profile">
            <span class="base-profile"></span>
          </div>
        </div>
      </div>

      <span class="set-mainchar"><a href="#">대표 캐릭터 설정 하기</a></span>

      <div class="list-balance">
        <ul class="list">
          <li>
            <div class="list-content">
              <div class="credit-info">
                <div class="category">DRACO Balance</div>
                <div class="info">
                  <span class="ico-darco ico-xs add-inside">1,342,456.0000</span>
                </div>
              </div>
            </div>
            <div class="fnc">
              <button type="button" class="btn ico-plus-circle"><span class="hidden">ADD</span></button>
            </div>
          </li>
          <li>
            <div class="list-content">
              <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
              <div class="credit-info">
                <div class="category">WEMIX CREDIT Balance</div>
                <div class="info">
                  <span class="ico-wemixcredit ico-xs add-inside">2,456.0153</span>
                </div>
              </div>
            </div>
            <div class="fnc">
              <button type="button" class="btn ico-plus-circle"><span class="hidden">ADD</span></button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="account-info" v-else-if="profileType === 'signInwallet'">
    <div class="wrap-member">
      <v-menu offset-y left>
        <template v-slot:activator="{ on, attrs }">
          <button type="button" class="btn-more" :class="{ active: moreActive }" v-bind="attrs" v-on="on">
            <em class="hidden">MyAccount More</em>
          </button>
        </template>
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
            <v-list-item>
              <span class="text">Sign out</span>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <div class="info-char">
        <div class="char">
          <div class="wrap-thumb-profile">
            <!-- <img src="@/assets/img/desktop/popup/profile-warrior.webp" width="120" alt="warrior" /> -->
            <!-- <img src="@/assets/img/desktop/popup/profile-sorcerer.webp" width="120" alt="sorcerer" /> -->
            <!-- <img src="@/assets/img/desktop/popup/profile-taoist.webp" width="120" alt="taoist" /> -->
            <img src="@/assets/img/desktop/popup/profile-lancer.webp" width="120" alt="lancer" />
            <!-- <img src="@/assets/img/desktop/popup/profile-arbalist.webp" width="120" alt="arbalist" /> -->
            <span class="base-profile"></span>
          </div>
          <strong class="nick">dracoqueen</strong>
          <span class="server">ASIA 220</span>
        </div>
      </div>

      <!-- profile-infomation -->
      <div class="info-mychar">
        <ul>
          <li class="class">
            <em>Class</em>
            <strong>LANCER</strong>
          </li>
          <li class="power">
            <em>Power</em>
            <strong>185,498</strong>
          </li>
          <li class="level">
            <em>Level</em>
            <strong>56</strong>
          </li>
        </ul>
      </div>

      <div class="wrap-button">
        <button type="button" class="btn-wemix"><em class="hidden">WEMIX </em>LOGIN</button>
      </div>
    </div>
  </div>

  <div class="account-info" v-else>
    <div class="wrap-member">
      <v-menu offset-y left>
        <template v-slot:activator="{ on, attrs }">
          <button type="button" class="btn-more" :data-get-activity="moreActive" v-bind="attrs" v-on="on">
            <em class="hidden">MyAccount More</em>
          </button>
        </template>
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
            <v-list-item>
              <span class="text">Sign out</span>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>

      <div class="info-char">
        <div class="char">
          <div class="wrap-thumb-profile">
            <!-- <img src="@/assets/img/desktop/popup/profile-arbalist.webp" width="120" height="120" alt="arbalist" /> -->
            <!-- <img src="@/assets/img/desktop/popup/profile-warrior.webp" width="120" height="120" alt="warrior" /> -->
            <!-- <img src="@/assets/img/desktop/popup/profile-sorcerer.webp" width="120" height="120" alt="sorcerer" /> -->
            <!-- <img src="@/assets/img/desktop/popup/profile-taoist.webp" width="120" height="120" alt="taoist" /> -->
            <img src="@/assets/img/desktop/popup/profile-lancer.webp" width="120" height="120" alt="lancer" />
            <!-- <img src="@/assets/img/desktop/popup/profile-arbalist.webp" width="120" height="120" alt="" /> -->
            <span class="base-profile"></span>
          </div>
          <strong class="nick">dracoqueen</strong>
          <span class="server">ASIA 220</span>
        </div>
      </div>

      <!-- profile-infomation -->
      <div class="info-mychar">
        <ul>
          <li class="class">
            <em>Class</em>
            <strong>LANCER</strong>
          </li>
          <li class="power">
            <em>Power</em>
            <strong>185,498</strong>
          </li>
          <li class="level">
            <em>Level</em>
            <strong>56</strong>
          </li>
        </ul>
      </div>

      <div class="wrap-button">
        <router-link to="/exd/my-items/blahblah" class="btn btn-primary-exd btn-sm" style="width: 100%">Item Listing</router-link>
      </div>
    </div>
    <div class="wallet-link" v-if="profileType === 'noSync'">
      <p class="desc">Your MIR4 account is not linked to the <br />WEMIX WALLET</p>
      <a href="#">WEMIX WALLET LINK GUIDE</a>
    </div>
    <div class="list-balance" v-if="profileType === 'signUp'">
      <ul class="list">
        <li>
          <div class="list-content">
            <div class="credit-info">
              <div class="category">DRACO Balance</div>
              <div class="info">
                <span class="ico-darco ico-xs add-inside">1,342,456.0000</span>
              </div>
            </div>
          </div>
          <div class="fnc">
            <button type="button" class="btn ico-plus-circle"><span class="hidden">ADD</span></button>
          </div>
        </li>
        <li>
          <div class="list-content">
            <!-- 아직 공용으로 쓰일만한 요소는 없음 -->
            <div class="credit-info">
              <div class="category">WEMIX CREDIT Balance</div>
              <div class="info">
                <span class="ico-wemixcredit ico-xs add-inside">2,456.0153</span>
              </div>
            </div>
          </div>
          <div class="fnc">
            <button type="button" class="btn ico-plus-circle"><span class="hidden">ADD</span></button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    profileType: {
      type: String,
      required: true,
    },
    moreActive: {
      type: Boolean,
      required: false,
      default: () => false,
    },
  },
  methods: {
    //
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    items: [{ title: 'My Character' }, { title: 'My Wallet' }, { title: 'Activity' }, { title: 'Logout' }],
  }),
};
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/components/account-info';
</style>
