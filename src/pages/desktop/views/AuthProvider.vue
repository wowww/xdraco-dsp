<template>
  <main class="contents">
    <div :style="{ display: 'flex', width: '100%', justifyContent: 'center', margin: '10rem auto' }">
      <v-progress-circular class="ml-2" :size="24" :width="4" color="#fff" indeterminate />
    </div>
  </main>
</template>

<script src="@/pages/common/AuthProvider"></script>

<style lang="scss">
@import '~@/assets/sass/desktop/app.scss';
</style>
