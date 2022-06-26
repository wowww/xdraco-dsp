<template>
  <section class="wrap-banner">
    <a href="https://mir4global.com" class="banner mir4" target="_blank">
      <p v-html="$t('s.footer.banner1.desc')"></p>
      <button type="button" class="button">{{ $t('s.footer.banner1.button') }}</button>
    </a>
    <a href="https://mir4draco.com" class="banner draco" target="_blank">
      <p v-html="$t('s.footer.banner2.desc')"></p>
    </a>
  </section>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>
