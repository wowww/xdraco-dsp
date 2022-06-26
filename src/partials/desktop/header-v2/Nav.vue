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
  </nav>
</template>

<script>
import { defineComponent, computed } from '@vue/composition-api';
import NavUi from '@/partials/desktop/NavUi';

export default defineComponent({
  name: 'Nav',
  components: {
    NavUi,
  },
  data: () => ({
    isDevelopment: process.env.VUE_APP_DRACO_ENV !== 'production',
  }),
  setup(props, { root }) {
    const items = [
      {
        to: '/coin',
        name: 'coin',
      },
      {
        to: '/exd/list',
        name: 'exd',
      },
      {
        to: '/collectibles',
        name: 'collectible',
      },
      {
        to: '/nft/list',
        name: 'nft',
      },
      {
        to: '/mirage',
        name: 'mirage',
        new: true,
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
@import '~@/assets/sass/desktop/partials/header-v2/nav';
</style>
