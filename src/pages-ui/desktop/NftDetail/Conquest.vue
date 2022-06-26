<template>
  <div class="wrap-conquest">
    <ul class="list-conquest">
      <li class="mine">
        <dl class="level">
          <dt>Mine</dt>
          <dd>12</dd>
        </dl>
      </li>
      <li class="forge">
        <dl class="level">
          <dt>Forge</dt>
          <dd>11</dd>
        </dl>
      </li>
      <li class="hydra">
        <dl class="level">
          <dt>Sanctuary of Hydra</dt>
          <dd>5</dd>
        </dl>
      </li>
      <li class="conquest">
        <dl class="level">
          <dt>Tower of<br />Conquest</dt>
          <dd>10</dd>
        </dl>
      </li>
      <li class="quintessence">
        <dl class="level">
          <dt>Tower of<br />Quintessence</dt>
          <dd>12</dd>
        </dl>
      </li>
      <li class="millennial-tree">
        <dl class="level">
          <dt>Millennial Tree</dt>
          <dd>8</dd>
        </dl>
      </li>
      <li class="portal">
        <dl class="level">
          <dt>Portal</dt>
          <dd>6</dd>
        </dl>
      </li>
      <li class="victory">
        <dl class="level">
          <dt>Tower of<br />Victory</dt>
          <dd>1</dd>
        </dl>
      </li>
      <li class="training-sanctum">
        <dl class="level">
          <dt>Training<br />Sanctum</dt>
          <dd>12</dd>
        </dl>
      </li>
      <li class="holy-shrine">
        <dl class="level">
          <dt>Holy Shrine</dt>
          <dd>12</dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount } from '@vue/composition-api';

export default defineComponent({
  components: {
    // DspNav,
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
  }),
});
</script>

<style lang="scss"></style>
