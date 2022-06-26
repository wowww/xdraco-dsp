<template>
  <div class="float-bottom mirage-bottom">
    <div class="float-bottom-inner">
      <ul class="list-resources">
        <li>
          <span class="title-resource">HYDAR Balance</span>
          <em class="value">
            <img src="@/assets/img/common/mirage-popup/ico-16-hydra.webp" width="16" v-if="isMobile" />
            <img src="@/assets/img/common/mirage-popup/icon-hydra-sm.webp" width="20" v-else />156
            <span class="decimal">.0456</span>
          </em>
        </li>
        <li>
          <span class="title-resource">DRACO Balance</span>
          <em class="value">
            <img src="@/assets/img/common/mirage-popup/icon-draco-sm.webp" width="16" v-if="isMobile" />
            <img src="@/assets/img/common/mirage-popup/icon-draco-sm.webp" v-else width="20" />240
            <span class="decimal">.0456</span>
          </em>
        </li>
        <li v-if="!isMobile">
          <span class="title-resource">Darksteels</span>
          <em class="value">
            <img src="@/assets/img/common/mirage-popup/icon-darksteel-sm.webp" width="20" />0
          </em>
        </li>
        <li v-if="!isMobile">
          <span class="title-resource">Septaria</span>
          <em class="value">
            <img src="@/assets/img/common/mirage/ico-20-septaria.webp" width="20" />0
          </em>
        </li>
      </ul>
      <div class="wrap-buy">
        <button type="button" class="btn">
          <img src="@/assets/img/common/mirage/img-hydra-gold.webp" width="56" v-show="!isMobile" />Refine HYDRAs
        </button>
        <button type="button" class="btn">
          <img src="@/assets/img/common/mirage/img-draco-gold.webp" width="56" v-show="!isMobile" />Smelt DRACOs
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MirageBottom',
  components: {
    //
  },
  props: {
    //
  },
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
  }),
  methods: {
    //
  },
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
  }
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-bottom';
</style>
