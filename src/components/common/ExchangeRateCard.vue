<template>
  <div class="exchange-rate-card">
    <div class="inner">
      <div class="exchange-rate-card__head">
        <div class="standard-per">
          <template v-if="isMobile">
            <img src="~@/assets/img/mobile/exchange-rate-card/logo-hydra-coin.webp" width="36" alt="Hydra" v-if="currency === 'hyd'" />
            <img src="~@/assets/img/mobile/exchange-rate-card/logo-usd-coin.webp" width="36" alt="USD" v-else />
          </template>
          <template v-else>
            <img src="~@/assets/img/desktop/exchange-rate-card/logo-hydra-coin.webp" width="46" alt="Hydra" v-if="currency === 'hyd'" />
            <img src="~@/assets/img/desktop/exchange-rate-card/logo-usd-coin.webp" width="46" alt="USD" v-else />
          </template>
          <span class="amount">1 =</span>
        </div>
        <div class="toggle-currency" :class="{ currency }">
          <button
            type="button"
            class="btn-currency"
            :class="{ 'currency--active': currency === 'usd' }"
            data-currency-value="hyd"
            @click="changeCurrency('usd')"
          >
            HYDRA
          </button>
          <button
            type="button"
            class="btn-currency"
            :class="{ 'currency--active': currency === 'hyd' }"
            data-currency-value="usd"
            @click="changeCurrency('hyd')"
          >
            USD
          </button>
        </div>
      </div>
      <div class="exchange-rate-card__body">
        <div class="display-exchange-rate">
          <span v-for="val in unitValue" :key="val.id" :data-num-value="val">{{ val }}</span>
          <span v-for="val in unit" :key="val.id" :data-unit-value="val">{{ val }}</span>
        </div>
      </div>
      <div class="exchange-rate-card__footer">
        <div class="txt">by TRINITY ORACLE</div>
        <img src="~@/assets/img/mobile/exchange-rate-card/logo-trinity.webp" class="logo-trinity" alt="trinity" v-if="isMobile" />
        <img src="~@/assets/img/desktop/exchange-rate-card/logo-trinity.webp" class="logo-trinity" alt="trinity" v-else />
      </div>
      <div id="countUpRef" ref="countUpRef" v-show="false" />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, onUnmounted, reactive, ref, toRefs, watch } from '@vue/composition-api';
import BigNumber from 'bignumber.js';
import { CountUp } from 'countup.js';
import MobileDetect from 'mobile-detect';

export default defineComponent({
  name: 'ExchangeRateCard',
  data: () => ({
    md: new MobileDetect(window.navigator.userAgent),
  }),
  computed: {
    isMobile() {
      return this.md.mobile() !== null;
    },
  },
  props: {
    exchangeValue: {
      type: String,
      require: true,
      default: () => '0000.0000',
    },
    oracle: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const countUpRef = ref(null);
    const state = reactive({
      currency: 'hyd',
      unit: 'usd',
      unitValue: '',
      timer: null,
      cnt: 0,
      idx: 0,
      max: 0,
      intervalValue: 0,
      duration: 0,
      countUpInstance: null,
    });

    const hyd = computed(() => {
      return new BigNumber(props.oracle).div(0.95).toFixed(4, 0);
    });

    const usd = computed(() => {
      if (props.oracle === 0) {
        return '0.00';
      }

      return new BigNumber(1).div(props.oracle).times(0.95).toFixed(4, 0);
    });

    // eslint-disable-next-line no-unused-vars
    const changeValue = () => {
      // console.log('changeValue');
      const arr = state.unit === 'hyd' ? hyd.value.split('').reverse() : usd.value.split('').reverse();
      const chg = [...state.unitValue.split('').reverse()];

      if (state.cnt === 0) {
        chg.forEach((_, i) => {
          if (state.cnt < arr[i]) chg[i] = `${state.cnt}`;
        });
        // console.log(chg.join(''));
      }

      // console.log(Number(chg[state.idx]) + 1, arr[state.idx], state.cnt, state.max);
      if (Number(chg[state.idx]) + 1 <= Number(arr[state.idx])) chg[state.idx] = Number(chg[state.idx]) + 1;
      else state.idx += 1;

      // console.log(state.idx, chg.join(''));

      state.unitValue = chg.reverse().join('');

      state.cnt += 1;

      if (state.cnt > state.max && state.timer !== null) {
        console.log('clear');
        clearInterval(state.timer);
        state.cnt = 0;
        state.max = 0;
        state.idx = 0;
        state.timer = null;
        state.intervalValue = 0;
        state.duration = 0;
      }
    };

    // eslint-disable-next-line no-unused-vars
    const changeInterval = () => {
      state.intervalValue += state.duration;

      if (state.unit === 'hyd') {
        if (state.intervalValue > hyd.value) {
          state.intervalValue = hyd.value;
          clearInterval(state.timer);

          state.timer = null;
        }
      } else if (state.intervalValue > usd.value) {
        state.intervalValue = usd.value;

        clearInterval(state.timer);

        state.timer = null;
      }

      console.log(state.intervalValue);
    };

    const changeCurrency = (v) => {
      state.currency = v;
      state.unit = v === 'hyd' ? 'usd' : 'hyd';
      state.countUpInstance.update(v === 'hyd' ? hyd.value : usd.value);
    };

    onMounted(() => {
      state.countUpInstance = new CountUp('countUpRef', 0, { decimalPlaces: 4, duration: 0.5 });
      changeCurrency('hyd');
    });

    onUnmounted(() => {
      state.countUpInstance.reset();
      state.countUpInstance = null;
    });

    watch(
      () => props.oracle,
      () => {
        changeCurrency('hyd');
      },
    );

    const countUp = computed(() => {
      if (countUpRef.value) {
        return countUpRef.value.innerText;
      }

      return '';
    });

    watch(
      () => state.countUpInstance && state.countUpInstance.frameVal,
      (v) => {
        if (v) {
          state.unitValue = v.toString();
        }
      },
    );

    return {
      countUpRef,
      ...toRefs(state),
      changeCurrency,
      countUp,
    };
  },
});
</script>

<style lang="scss">
@import '~@/assets/sass/components/exchange-rate-card';
</style>
