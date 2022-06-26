<template>
  <div class="service-help">
    <header><img src="@/assets/img/bi-xdraco-xs.webp" width="108" alt="XDraco" /></header>
    <div class="help-502">
      <img src="@/assets/img/desktop/etc/ico-error.webp" width="80" alt="help for error" />
      <h2 class="title">Error</h2>
      <h3 class="desc">{{ $t('s.etc.500') }}</h3>
    </div>

    <footer class="footer">
      <div class="footer__inner">
        <p class="copyright">© Wemade Co., Ltd. All rights reserved.</p>
        <p class="powered-by">Powered by WEMIX</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
// eslint-disable-next-line import/extensions
export default defineComponent({
  name: 'Servererror',
  components: {
    //
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
  methods: {
    //
  },
});
</script>

<style lang="scss" scoped>
@import '~@/assets/sass/_block.scss';
</style>
