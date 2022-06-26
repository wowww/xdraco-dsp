<template>
  <section class="section section-count">
    <div class="section__inner">
      <h2 class="section-title">
        <img src="@/assets/img/desktop/hydra/title-ss2020.webp" height="64" :alt="$t('t.hydra-teaser.seoul-spooning')" />
      </h2>
      <p class="date-release">{{ $t('s.hydra-teaser.seoul-spooning.date') }}</p>
      <countdown targetDate="2022-01-25T12:00:00+08:00" />
      <p v-html="$t('s.hydra-teaser.seoul-spooning.desc')"></p>
    </div>
  </section>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import Countdown from '@/components/coin/common/Countdown';

export default defineComponent({
  name: 'Count1',
  components: {
    Countdown,
  },
});
</script>

<style lang="scss">
.section-count {
  --section-count-height: 960px;

  height: var(--section-count-height);
  line-height: 1.6;
  color: #fff;
  font-size: 20px;
  background: #061b3b url('~@/assets/img/desktop/hydra/bg-hydra-top.webp') 50% 0 / auto 100% no-repeat;

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
    position: relative;
    padding-top: 556px;
    height: 100%;
    box-sizing: border-box;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: calc(50% - 346px);
      z-index: 1;
      width: 700px;
      height: 620px;
      background: url('~@/assets/img/desktop/hydra/hydra.jpg') 0 0 / 700px 100% no-repeat;
    }
  }
  .section-title {
    position: relative;
    z-index: 1;
  }
  .date-release {
    margin-top: 16px;
    line-height: 1.143;
    font-size: 28px;
    font-weight: 700;
  }
}
</style>
