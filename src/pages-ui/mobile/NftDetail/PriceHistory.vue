<template>
  <div class="price-history">
    <div class="display-price">
      <span class="label">All Time Avg. Price</span>
      <span class="ico-wemixcredit ico-sm add-inside">2,153,541</span>
    </div>
    <div class="wrap-chart">
      <div style="height: 200px; background-color: #0a9b7d5e">Chart Area</div>
    </div>
    <div class="list-sale-history">
      <a href="#outlinkURL" class="list-sale-history__item" target="_blank">
        <dl class="obj">
          <dt>판매자 월랫주소</dt>
          <dd>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">0xeb98...455q8e</span>
              </template>
              <span>0xeb98aaabbbcccdddee455q8e</span>
            </v-tooltip>
          </dd>
        </dl>
        <dl class="obj">
          <dt>거래일시</dt>
          <dd>Dec. 23, 2021 07:40 UTC+8</dd>
        </dl>
        <dl class="obj">
          <dt>체결가격</dt>
          <dd>
            <span class="ico-wemixcredit ico-xs add-inside">1,255,291</span>
          </dd>
        </dl>
      </a>
      <a href="#outlinkURL" class="list-sale-history__item" target="_blank">
        <dl class="obj">
          <dt>판매자 월랫주소</dt>
          <dd>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">0xeb98...455q8e</span>
              </template>
              <span>0xeb98aaabbbcccdddee455q8e</span>
            </v-tooltip>
          </dd>
        </dl>
        <dl class="obj">
          <dt>거래일시</dt>
          <dd>Dec. 23, 2021 07:40 UTC+8</dd>
        </dl>
        <dl class="obj">
          <dt>체결가격</dt>
          <dd>
            <span class="ico-wemixcredit ico-xs add-inside">1,255,291</span>
          </dd>
        </dl>
      </a>
      <a href="#outlinkURL" class="list-sale-history__item" target="_blank">
        <dl class="obj">
          <dt>판매자 월랫주소</dt>
          <dd>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">0xeb98...455q8e</span>
              </template>
              <span>0xeb98aaabbbcccdddee455q8e</span>
            </v-tooltip>
          </dd>
        </dl>
        <dl class="obj">
          <dt>거래일시</dt>
          <dd>Dec. 23, 2021 07:40 UTC+8</dd>
        </dl>
        <dl class="obj">
          <dt>체결가격</dt>
          <dd>
            <span class="ico-wemixcredit ico-xs add-inside">1,255,291</span>
          </dd>
        </dl>
      </a>
      <a href="#outlinkURL" class="list-sale-history__item" target="_blank">
        <dl class="obj">
          <dt>판매자 월랫주소</dt>
          <dd>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">0xeb98...455q8e</span>
              </template>
              <span>0xeb98aaabbbcccdddee455q8e</span>
            </v-tooltip>
          </dd>
        </dl>
        <dl class="obj">
          <dt>거래일시</dt>
          <dd>Dec. 23, 2021 07:40 UTC+8</dd>
        </dl>
        <dl class="obj">
          <dt>체결가격</dt>
          <dd>
            <span class="ico-wemixcredit ico-xs add-inside">1,255,291</span>
          </dd>
        </dl>
      </a>
      <a href="#outlinkURL" class="list-sale-history__item" target="_blank">
        <dl class="obj">
          <dt>판매자 월랫주소</dt>
          <dd>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">0xeb98...455q8e</span>
              </template>
              <span>0xeb98aaabbbcccdddee455q8e</span>
            </v-tooltip>
          </dd>
        </dl>
        <dl class="obj">
          <dt>거래일시</dt>
          <dd>Dec. 23, 2021 07:40 UTC+8</dd>
        </dl>
        <dl class="obj">
          <dt>체결가격</dt>
          <dd>
            <span class="ico-wemixcredit ico-xs add-inside">1,255,291</span>
          </dd>
        </dl>
      </a>

      <!-- 외부링크가 아닌 경우 -->
      <div class="list-sale-history__item">
        <dl class="obj">
          <dt>판매자 월랫주소</dt>
          <dd>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">0xeb98...455q8e</span>
              </template>
              <span>0xeb98aaabbbcccdddee455q8e</span>
            </v-tooltip>
          </dd>
        </dl>
        <dl class="obj">
          <dt>거래일시</dt>
          <dd>Dec. 23, 2021 07:40 UTC+8</dd>
        </dl>
        <dl class="obj">
          <dt>체결가격</dt>
          <dd>
            <span class="ico-wemixcredit ico-xs add-inside">1,255,291</span>
          </dd>
        </dl>
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
