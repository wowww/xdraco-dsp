<template>
  <div>
    <div class="top-banner">
      <div class="top-inner">
        <h1 class="bi-top">MiraX</h1>
        <p class="desc" v-html="t('s.mirax-guide.top.desc1')"></p>
      </div>
    </div>

    <section class="section">
      <div class="section__inner">
        <div class="concept">
          <p class="concept-desc">
            <strong>MiraX</strong>
            <span v-html="t('s.mirax-guide.concept.desc1')"></span>
          </p>
        </div>
        <div class="intro">
          <h2 class="section-title" v-html="t('t.mirax-guide.intro')"></h2>
          <p class="desc" v-html="t('s.mirax-guide.intro.desc1')"></p>
          <p class="desc" v-html="t('s.mirax-guide.intro.desc2')"></p>
        </div>
        <div class="wrap-define" :class="{ 'is-reverse': !isMobile }">
          <dl class="define">
            <dt v-html="t('t.mirax-guide.obtaining')"></dt>
            <dd class="desc" v-html="t('s.mirax-guide.obtaining.desc1')"></dd>
          </dl>
          <div class="wrap-img">
            <img src="@/assets/img/mobile/mirage-mirax/img-obtaining.webp" alt="" v-if="isMobile" />
            <img src="@/assets/img/desktop/mirage-mirax/img-obtaining.webp" alt="" v-else />
          </div>
        </div>
        <div class="wrap-define">
          <dl class="define">
            <dt v-html="t('t.mirax-guide.maximum')"></dt>
            <dd class="desc" v-html="t('s.mirax-guide.maximum.desc1')"></dd>
          </dl>
          <div class="wrap-img no-gutter">
            <img src="@/assets/img/mobile/mirage-mirax/img-maximum.webp" alt="" v-if="isMobile" />
            <img src="@/assets/img/desktop/mirage-mirax/img-maximum.webp" alt="" v-else />
          </div>
        </div>
        <dl class="define">
          <dt v-html="t('t.mirax-guide.applying')"></dt>
          <dd>
            <p class="desc" v-html="t('s.mirax-guide.applying.desc1')"></p>
            <p class="desc" v-html="t('s.mirax-guide.applying.desc2')"></p>
            <figure class="figure-img" :class="{ 'no-gutter': isMobile }">
              <figcaption v-html="t('w.mirage-playbook.sec2.part2.caption')"></figcaption>
              <img src="@/assets/img/common/mirage-mirax/img-mirage-score-formula.webp" alt="MIRAGE Score formula" />
            </figure>
            <p class="caution" v-html="t('s.mirax-guide.applying.caution1')"></p>
            <div class="applying-step">
              <div class="wrap-step step1">
                <div class="image"></div>
                <div class="wrap-score">
                  <dl class="mirage-score" :class="{ invisible: !isMobile }">
                    <dt v-html="t('w.mirage.score')"></dt>
                    <dd>380,632</dd>
                  </dl>
                  <dl class="mirax">
                    <dt>MiraX</dt>
                    <dd>0</dd>
                  </dl>
                </div>
                <div class="step-desc" v-if="!isMobile" v-html="t('s.mirax-guide.applying.desc3-br')"></div>
              </div>
              <div class="summary">
                <div class="summary__inner">
                  <strong class="txt" v-if="isMobile" v-html="t('s.mirax-guide.applying.desc3')"></strong>
                  <strong class="txt" v-else v-html="t('w.mirax-guide.import')"></strong>
                </div>
              </div>
              <div class="wrap-step step2">
                <div class="image"></div>
                <div class="wrap-score">
                  <dl class="mirage-score">
                    <dt v-html="t('w.mirage.score')"></dt>
                    <dd>380,632</dd>
                  </dl>
                  <dl class="mirax">
                    <dt>MiraX</dt>
                    <dd>0</dd>
                  </dl>
                </div>
                <div class="step-desc" v-if="isMobile" v-html="t('s.mirax-guide.applying.desc4')"></div>
                <div class="step-desc" v-else v-html="t('s.mirax-guide.applying.desc4-br')"></div>
              </div>
              <div class="summary">
                <div class="summary__inner">
                  <strong class="txt gain">
                    <span class="icon-mirax">MiraX</span>
                    <strong class="gain-value">+100</strong>
                  </strong>
                </div>
              </div>
              <div class="wrap-step step3">
                <div class="image"></div>
                <div class="wrap-score">
                  <dl class="mirage-score">
                    <dt v-html="t('w.mirage.score')"></dt>
                    <dd>381,022</dd>
                  </dl>
                  <dl class="mirax">
                    <dt>MiraX</dt>
                    <dd>100</dd>
                  </dl>
                  <div class="step-desc" v-if="isMobile">
                    <span v-html="t('w.mirage.score')"></span><br />
                    <em>+590</em>
                  </div>
                </div>
                <div class="step-desc" v-if="!isMobile">
                  <span v-html="t('w.mirage.score')"></span><br />
                  <em>+590</em>
                </div>
              </div>
              <div class="summary">
                <div class="summary__inner">
                  <strong class="txt" v-if="isMobile" v-html="t('s.mirax-guide.applying.desc5')"></strong>
                  <strong class="txt" v-else v-html="t('w.mirage.seal')"></strong>
                </div>
              </div>
              <div class="wrap-step step4">
                <div class="image"></div>
                <div class="wrap-score">
                  <dl class="mirage-score" :class="{ invisible: !isMobile }">
                    <dt v-html="t('w.mirage.score')"></dt>
                    <dd>381,022</dd>
                  </dl>
                  <dl class="mirax">
                    <dt>MiraX</dt>
                    <dd>100</dd>
                  </dl>
                </div>
                <div class="step-desc" v-if="!isMobile" v-html="t('s.mirax-guide.applying.desc5-br')"></div>
              </div>
            </div>
          </dd>
        </dl>
        <div class="section-remark">
          <strong v-html="t('s.mirax-guide.remark')"></strong>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import MobileDetect from 'mobile-detect';
import { defineComponent, onBeforeMount, onMounted } from '@vue/composition-api';

// eslint-disable-next-line import/extensions
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'MirageMiraXContents',
  components: {
    //
  },
  data: () => ({
    isDevelopment: process.env.NODE_ENV === 'development',
    md: new MobileDetect(window.navigator.userAgent),
  }),
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
  },
  methods: {
    //
  },
  mounted() {
    //
  },
  setup() {
    onBeforeMount(() => {
      //
    });

    onMounted(() => {
      //
    });

    return {
      ...useI18n(),
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/mirage-mirax';
</style>
