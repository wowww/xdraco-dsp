<template>
  <div class="mirage-dashboard">
    <!-- <div class="dashboard-header" v-if="isMobile">
      <h2 class="dashboard-title">MIRAGE Dashboard</h2>
      <div class="mirage-inventory">
        <span class="currency">
          <img src="@/assets/img/common/mirage/ico-20-energy.webp" width="20" height="20" alt="energy" />
          <em class="volume">321</em>
        </span>
        <button type="button" class="btn-charge">Charge</button>
      </div>
    </div> -->
    <dl class="list-dashboard">
      <div>
        <dt>Darksteels</dt>
        <dd>
          <em class="value"><img src="@/assets/img/common/mirage/ico-20-darksteel.webp" width="20" />91,123,456</em>
        </dd>
      </div>
      <div>
        <dt>Septaria</dt>
        <dd>
          <em class="value"><img src="@/assets/img/common/mirage/ico-20-septaria.webp" width="20" />95</em>
        </dd>
      </div>
      <div>
        <dt>MIRAGE Scroll</dt>
        <dd>
          <em class="value"><img src="@/assets/img/common/mirage/img-24-mirage-scroll.webp" width="24" alt="" />33</em>
          <button type="button" class="btn-enhance">Enhance</button>
        </dd>
      </div>
      <div>
        <dt>Vigor Pill</dt>
        <dd>
          <em class="value"><img src="@/assets/img/common/mirage/ico-20-energy.webp" width="20" />240</em>
          <button type="button" class="btn btn-charge">Charge</button>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'MirageDashboard',
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
  },
});
</script>
<style lang="scss">
@import '~@/assets/sass/components/mirage-dashboard';
</style>
