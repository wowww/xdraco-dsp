<template>
  <dl :class="[klass, 'price']">
    <dt v-show="!hideLabel" :class="[labelClass]">{{ t('t.exd.purchased.price') }}</dt>
    <dd v-if="!isMobile" :class="[primaryClass]">
      <strong class="ico-hydra add-inside" :class="[`ico-${iconSize}`]">{{ formattedPrice[0] }}<small>{{ formattedPrice[1] }}</small></strong>
    </dd>
    <dd v-if="!isMobile && !hideUsd" class="us-dollar">{{ formattedUsd[0] }}<small>{{ formattedUsd[1] }}</small></dd>
    <dd v-if="isMobile">
      <div :class="[primaryClass]">
        <span class="ico-hydra add-inside" :class="[`ico-${iconSize}`]"></span>
        <span>{{ formattedPrice[0] }}<small>{{ formattedPrice[1] }}</small></span>
      </div>
      <div v-if="!hideUsd" class="us-dollar">
        {{ formattedUsd[0] }}<small>{{ formattedUsd[1] }}</small>
      </div>
    </dd>
  </dl>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { useFormattedNumber, useFormattedRefNumber, useMobile } from '@/composables/common';
import { useToUsd } from '@/composables/exchange';
import useI18n from '@/utils/useI18n';

export default defineComponent({
  name: 'ExdHydraPrice',
  props: {
    klass: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      default: '0',
    },
    iconSize: {
      type: String,
      default: 'sm',
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
    hideUsd: {
      type: Boolean,
      default: false,
    },
    labelClass: {
      type: String,
      default: '',
    },
    primaryClass: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const { isMobile } = useMobile();
    const formattedPrice = useFormattedNumber(props.price);
    const { usd, formattedUsd } = useToUsd(props.price);

    return {
      ...useI18n(),
      isMobile,
      formattedPrice,
      usd,
      formattedUsd,
    };
  },
});
</script>

<style scoped></style>