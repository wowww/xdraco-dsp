<template>
  <section class="section section-count">
    <div class="section__inner">
      <h2>
        <img src="@/assets/img/mobile/hydra/title-ss2020.webp" height="132" :alt="$t('t.hydra-teaser.seoul-spooning')" />
      </h2>
      <p class="date-release">{{ $t('s.hydra-teaser.seoul-spooning.date') }}</p>
      <countdown targetDate="2022-01-25T12:00:00+08:00" smaller />
      <p v-html="$t('s.hydra-teaser.seoul-spooning.desc')"></p>
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Countdown from '@/components/coint/common/Countdown';

export default defineComponent({
  name: 'HydraCount1',
  components: {
    Countdown,
  },
  data: () => ({
    //
  }),
  methods: {
    //
  },
});
</script>

<style lang="scss">
.section-count {
  --section-count-height: 870px;

  min-height: var(--section-count-height);
  line-height: 1.4;
  color: #fff;
  font-size: 20px;
  background: #034177 url('~@/assets/img/mobile/hydra/bg-hydra-top.webp') 50% 0 / auto 870px no-repeat;

  img {
    display: block;
  }
  p {
    text-align: center;
  }
  em {
    font-weight: 700;
    font-style: normal;
  }
  .section__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 449px 0 40px;
    height: 100%;
    box-sizing: border-box !important;
  }
  .date-release {
    margin-top: 8px;
    line-height: 1.6;
    font-size: 20px;
    font-weight: 700;
  }
  .tick {
    margin: 40px 0 24px;
  }
}
</style>
