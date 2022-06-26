<template>
  <section class="section section-iso">
    <div class="section__inner">
      <div class="wrap-iso">
        <h3>{{ $t('t.hydra-teaser.iso') }}</h3>
        <p>{{ $t('s.hydra-teaser.iso.date') }}</p>
        <ul>
          <li>
            <img src="~@/assets/img/desktop/hydra/iso-1.webp" width="146" />
            <p v-html="$t('s.hydra-teaser.iso.part1')"></p>
          </li>
          <li>
            <img src="~@/assets/img/desktop/hydra/iso-2.webp" width="456" />
            <p v-html="$t('s.hydra-teaser.iso.part2')"></p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Chronicles',
  components: {
    //
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
// style 선언은 우선 여기에, 추후 scss파일로 병합 예정

.section-iso {
  background: url('~@/assets/img/desktop/hydra/bg-iso.webp') 50% 0 / cover no-repeat;

  .wrap-iso {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 660px;
    padding: 64px 0 72px;
    color: #fff;

    h3 {
      font-size: 42px;
      font-weight: bold;
    }
    h3 + p {
      margin-top: -17px;
      font-size: 24px;
      font-weight: bold;
    }
    em {
      font-weight: 700;
      font-style: normal;
    }
    ul {
      list-style-type: none;
      margin-top: 36px;
      padding: 0;

      li {
        display: flex;
        align-items: center;

        &:nth-child(1) {
          img {
            margin-right: 22px;
          }
          p {
            width: 546px;
          }
        }
        &:nth-child(2) {
          flex-direction: row-reverse;
          align-items: flex-start;
          margin-top: -62px;

          p {
            width: 362px;
            margin-top: 107px;
            line-height: 24px;

            em {
              font-weight: bold;
              font-style: normal;
            }
          }
        }
      }
    }
  }
}
</style>
