<template>
  <nav id="gnb" class="gnb">
    <div class="gnb__left">
      <h1 class="gnb__bi">
        <router-link to="/" class="link">XDRACO</router-link>
        <!-- <a href="https://www.xdraco.com" class="link">XDRACO</a> -->
      </h1>
      <v-list class="gnb__list">
        <!-- <v-list-item-group v-model="selectedItem">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.path" :href="item.href" :target="item.target">
            <span class="text" :class="item.name">{{ item.name }}</span>
          </v-list-item>
        </v-list-item-group> -->
        <v-list-item-group>
          <v-list-item href="https://exd.xdraco.com">
            <span class="text exd">exd</span>
          </v-list-item>
          <v-list-item href="https://dsp.xdraco.com">
            <span class="text dsp">dsp</span>
          </v-list-item>
          <v-list-item to="/mir4nft">
            <span class="text mir4nft">mir4nft</span>
          </v-list-item>
          <v-list-item href="https://mir4draco.com" target="_blank">
            <span class="text draco">draco</span>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>

    <div class="gnb__right">
      <a href="https://discord.gg/mir4global" class="btn-header discord" target="_blank">Discord</a>
      <Language></Language>
      <!-- <Profile></Profile> -->
    </div>
  </nav>
</template>

<script>
import Language from '@/components/teaser/desktop/Language';

export default {
  components: {
    Language,
  },
  data: () => ({
    selectedItem: 0, // 선택된 항목

    // 아래 데이터는 dummy입니다. 상황에 맞게 수정해주세요
    items: [
      {
        href: 'https://exd.xdraco.com',
        path: '/exd',
        name: 'exd',
      },
      {
        // path: '/dsp',
        href: 'https://dsp.xdraco.com',
        name: 'dsp',
      },
      {
        path: '/mir4nft',
        name: 'mir4nft',
      },
      {
        name: 'draco',
        href: 'https://mir4draco.com',
        target: '_blank',
      },
    ],

    // for dialog
    dialogPlayNow: false,
  }),
};
</script>

<style lang="scss"></style>
