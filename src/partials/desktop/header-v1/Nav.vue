<template>
  <nav id="gnb" class="gnb">
    <div class="gnb__left">
      <h1 class="gnb__bi">
        <router-link to="/" class="link">XDRACO</router-link>
      </h1>
      <v-list class="gnb__list">
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :class="{ 'v-item--active': i === selectedItemIdx, 'v-item--new': item.new }"
            :key="i"
            :to="item.to"
            :href="item.href"
            :target="item.target"
          >
            <span class="text" :class="item.name">{{ item.name }}</span>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <NavUi v-if="isDevelopment"></NavUi>
    </div>

    <div class="gnb__right">
      <a href="https://mir4draco.com" class="btn-header btn-text" target="_blank">HYDRA &amp; DRACO</a>
      <a href="https://mir4global.com" class="btn-header" target="_blank">
        <img src="@/assets/img/desktop/header-v1/bi-mir4-header.webp" height="23" alt="MIR4" />
      </a>
      <a href="https://discord.gg/mir4global" class="btn-header" target="_blank">
        <img src="@/assets/img/desktop/header-v1/icon-discord.webp" height="20" alt="discord" />
      </a>
      <a href="https://twitter.com/mir4xdraco" class="btn-header" target="_blank">
        <img src="@/assets/img/desktop/header/icon-twitter.webp" height="32" alt="twitter" />
      </a>
      <a href="https://cs.mir4global.com/customer?category=191" class="btn-header" target="_blank">
        <img src="@/assets/img/desktop/header-v1/ico-contact-us.svg" height="25" alt="contact us" />
      </a>
      <Language />
      <!-- // 9일전까지는 비노출 -->
      <Profile />
    </div>
  </nav>
</template>

<script>
import { defineComponent, computed, ref, watch } from '@vue/composition-api';
import Language from '@/partials/desktop/header-v1/Language';
import Profile from '@/partials/desktop/header-v1/Profile';
import NavUi from '@/partials/desktop/NavUi';

export default defineComponent({
  name: 'Nav',
  components: {
    Language,
    Profile,
    NavUi,
  },
  data: () => ({
    isDevelopment: process.env.VUE_APP_DRACO_ENV !== 'production',
  }),
  setup(props, { root }) {
    const items = [
      {
        to: '/exd/list',
        name: 'exd',
      },
      {
        to: '/collectibles',
        name: 'collectible',
      },
      {
        to: '/hsp',
        name: 'hsp',
        // new: true,
      },
      {
        to: '/dsp/rounds',
        name: 'dsp',
      },
      {
        to: '/mirage',
        name: 'mirage',
      },
      {
        to: '/nft/list',
        name: 'mir4nft',
      },
    ];

    const selectedItemIdx = computed(() => items.findIndex((item) => root.$route.path.includes(item.name)));

    return {
      items,
      selectedItemIdx,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/desktop/partials/header-v1/nav';
</style>
