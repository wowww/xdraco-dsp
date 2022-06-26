<template>
  <div class="mirage-round-raid-info">
    <span class="raid-round">{{ roundRaidData.round }}</span>
    <span class="boss-name">{{ roundRaidData.boss }}</span>
    <span class="raid-date">{{ roundRaidData.date }}</span>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MirageRoundRaidInfo',
  components: {
    //
  },
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
  }),
  methods: {
    //
  },
  props: {
    roundRaidData: {
      type: Object,
      required: true,
    },
  },
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-round-raid-info';
</style>
