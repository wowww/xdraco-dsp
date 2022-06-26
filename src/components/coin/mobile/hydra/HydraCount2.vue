<template>
  <section class="section section-count2">
    <div class="section__inner">
      <h2>
        <img src="@/assets/img/mobile/hydra/title-ss2020b.webp" height="100" :alt="$t('t.hydra-teaser.seoul-spooning')" />
      </h2>
      <p class="date-release">{{ $t('s.hydra-teaser.seoul-spooning.date') }}</p>
      <countdown targetDate="2022-01-25T12:00:00+08:00" smaller />
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Countdown from '@/components/coin/common/Countdown';

export default defineComponent({
  name: 'HydraCount2',
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
.section-count2 {
  --section-count-height: 280px;

  color: #fff;
  font-size: 20px;
  background-image: linear-gradient(to bottom, rgba(#050549, 0) 27%, #050549 100%);

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
    justify-content: center;
    align-items: center;
    padding: 12px 0;
    min-height: var(--section-count-height);
    box-sizing: border-box !important;
  }
  .date-release {
    margin-top: 8px;
    line-height: 2;
    font-size: 16px;
    font-weight: 700;
  }
  .tick {
    margin-top: 24px;
  }
}
</style>
