<template>
  <section class="section section-iso">
    <div class="section__inner">
      <div class="wrap-iso">
        <h3>{{ $t('t.hydra-teaser.iso') }}</h3>
        <p>{{ $t('s.hydra-teaser.iso.date') }}</p>
        <ul>
          <li>
            <img src="~@/assets/img/mobile/hydra/iso-1.webp" width="100" />
            <p v-html="$t('s.hydra-teaser.iso.part1')"></p>
          </li>
          <li>
            <img src="~@/assets/img/mobile/hydra/iso-2.webp" width="320" />
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
  background: #111166 url('~@/assets/img/mobile/hydra/bg-iso.webp') 50% 0 / cover no-repeat;

  .wrap-iso {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
    color: #fff;

    h3 {
      line-height: 35px;
      text-align: center;
      font-size: 32px;
      font-weight: bold;

      + p {
        margin-top: 8px;
        line-height: 1.25;
        text-align: center;
        font-weight: bold;
      }
    }
    em {
      font-weight: 700;
      font-style: normal;
    }
    ul {
      list-style-type: none;
      padding: 0;

      li {
        display: flex;
        align-items: center;
        margin-top: 24px;

        &:nth-child(1) {
          padding: 24px 0;
          
          img {
            margin-right: 16px;
          }
        }
        &:nth-child(2) {
          flex-wrap: wrap;
          justify-content: center;

          p {
            margin-top: 16px;
          }
        }
        p {
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
</style>
