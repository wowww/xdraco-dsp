<template>
  <div class="training">
    <div class="wrap-item-training">
      <div class="training-sold">
        <div class="training-item">
          <div class="training-dec">
            <p>Consitution</p>
          </div>
          <div class="training-tier">
            <span>Tier</span>
            <p>67</p>
          </div>
        </div>
      </div>
      <div class="training-item">
        <div class="training-dec">
          <p>Muscles <br />STR M.</p>
        </div>
        <div class="training-tier">
          <span>Tier</span>
          <p>6</p>
        </div>
      </div>
      <div class="training-item">
        <div class="training-dec">
          <p>Nine Yin M.</p>
        </div>
        <div class="training-tier">
          <span>Tier</span>
          <p>10</p>
        </div>
      </div>
      <div class="training-item">
        <div class="training-dec">
          <p>Nine Yin M.</p>
        </div>
        <div class="training-tier">
          <span>Tier</span>
          <p>12</p>
        </div>
      </div>
      <div class="training-item">
        <div class="training-dec">
          <p>Violet Mist Art</p>
        </div>
        <div class="training-tier">
          <span>Tier</span>
          <p>12</p>
        </div>
      </div>
      <div class="training-item">
        <div class="training-dec">
          <p>Northern Profound Art</p>
        </div>
        <div class="training-tier lock"></div>
      </div>
      <div class="training-item">
        <div class="training-dec">
          <p>Toad Stance</p>
        </div>
        <div class="training-tier lock"></div>
      </div>
      <div class="training-sold">
        <div class="training-item">
          <div class="training-dec">
            <p>Solitude Training</p>
            <p>Transformation <br />Realm LV.8</p>
          </div>
          <div class="training-tier">
            <span>Tier</span>
            <p>67</p>
          </div>
        </div>
      </div>
    </div>
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
