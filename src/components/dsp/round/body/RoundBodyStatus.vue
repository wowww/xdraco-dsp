<template>
  <div class="block2">
    <div class="wrap-define-balance">
      <dl class="define-balance">
        <dt>{{ t(ongoing ? 'w.rounds.total.stake' : 'w.rounds.total.pre.stake') }}</dt>
        <dd class="draco">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on">{{ total | currency(0) }}</span>
            </template>
            <span>{{ total | currency(0) }}</span>
          </v-tooltip>
        </dd>
      </dl>
      <dl class="define-balance">
        <dt>{{ t(ongoing ? 'w.rounds.my.stake' : 'w.rounds.my.pre.stake') }}</dt>
        <dd class="draco">
          <span>{{ my | currency(0) }}</span>
        </dd>
      </dl>
      <dl class="define-balance">
        <dt>{{ t(ongoing ? 'w.rounds.my.odds' : 'w.rounds.my.pre.odds') }}</dt>
        <dd class="odds">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on">{{ odds }}</span
              >%
            </template>
            <span>{{ odds | currency(6) }}</span>
          </v-tooltip>
        </dd>
      </dl>
    </div>
    <!--    <p>0.0003% odds increase with 1 DRACO staking</p>-->
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'RoundBodyStatus',
  props: {
    total: Number,
    my: Number,
    odds: Number,
    ongoing: {
      type: Boolean,
      default: false,
    },
  },
  setup({ ongoing }) {
    console.log(ongoing);
    return {
      ...useI18n(),
    };
  },
});
</script>

<style scoped></style>
