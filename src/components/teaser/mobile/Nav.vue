<template>
  <nav id="gnb" class="gnb">
    <div>
      <!-- <a href="/" class="gnb__bi">{{ $t('w.app.draco') }}</a> -->
      <!-- <a href="/" class="gnb__bi">Mir4 NFT</a> -->

      <v-list class="gnb__list">
        <v-list-item-group v-model="selectedItem" color="primary">
          <div class="wrap-item" v-for="(item, i) in items" :key="i">
            <v-list-item active="false" :to="item.path" :href="item.href" :target="item.target">
              <span class="text" :class="item.name">{{ item.name }}</span>
            </v-list-item>
          </div>
        </v-list-item-group>
      </v-list>
    </div>
    <div>
      <ul class="gnb__list-external">
        <li>
          <a href="https://mir4global.com" target="_blank">
            <img src="@/assets/img/mobile/header/bi-mir4.webp" width="56" alt="MIR4" />
          </a>
        </li>
        <!-- <li>
          <a href="https://mir4nft.com" target="_blank">
            <img src="@/assets/img/mobile/header/bi-mir4-nft.webp" width="78" alt="MIR4 NFT" />
          </a>
        </li> -->
        <li>
          <a href="https://wemixnetwork.com" target="_blank">
            <img src="@/assets/img/mobile/header/bi-wemix.webp" width="67" alt="WEMIX" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0, // 선택된 항목

    // 아래 데이터는 dummy입니다. 상황에 맞게 수정해주세요
    items: [
      {
        path: '/',
        name: 'home',
      },
      {
        // path: '/exd',
        href: 'https://exd.xdraco.com',
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
  }),
};
</script>
