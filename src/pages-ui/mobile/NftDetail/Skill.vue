<template>
  <div class="skill">
    <!-- 
      기본: <div class="badge-wrap"> , <div class="badge-wrap badge-big">
      활성: <div class="badge-wrap on"> , <div class="badge-wrap badge-big on">
      비활성: <div class="badge-wrap disabled"> , <div class="badge-wrap badge-big disabled">
      비활성 상태일 경우 <span class="sm-tier">7</span> 제거
     -->

    <!-- warrior -->
    <div class="wrap-item-skill" data-character-class="1">
      <div class="badge-wrap badge-big">
        <div class="badge" data-character-skill="0"></div>
        <span class="big-tier">Tier 8</span>
      </div>
      <div class="badge-wrap badge-big on">
        <div class="badge" data-character-skill="0"></div>
        <span class="big-tier">Tier 7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="1"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap on">
        <div class="badge" data-character-skill="2"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="3"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="4"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="5"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="6"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="7"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="8"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="9"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap disabled">
        <div class="badge" data-character-skill="10"></div>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="11"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="12"></div>
        <span class="sm-tier">7</span>
      </div>
    </div>

    <!-- sorcerer -->
    <!-- <div class="wrap-item-skill" data-character-class="2">
      <div class="badge-wrap badge-big">
        <div class="badge" data-character-skill="0"></div>
        <span class="big-tier">Tier 8</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="1"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="2"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="3"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="4"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="5"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="6"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="7"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="8"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="9"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="10"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="11"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="12"></div>
        <span class="sm-tier">7</span>
      </div>
    </div> -->

    <!-- taoist -->
    <!-- <div class="wrap-item-skill" data-character-class="3">
      <div class="badge-wrap badge-big">
        <div class="badge" data-character-skill="0"></div>
        <span class="big-tier">Tier 8</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="1"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="2"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="3"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="4"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="5"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="6"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="7"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="8"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="9"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="10"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="11"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="12"></div>
        <span class="sm-tier">7</span>
      </div>
    </div> -->

    <!-- arbalist -->
    <!-- <div class="wrap-item-skill" data-character-class="4">
      <div class="badge-wrap badge-big">
        <div class="badge" data-character-skill="0"></div>
        <span class="big-tier">Tier 8</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="1"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="2"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="3"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="4"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="5"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="6"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="7"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="8"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="9"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="10"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="11"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="12"></div>
        <span class="sm-tier">7</span>
      </div>
    </div> -->

    <!-- lancer -->
    <!-- <div class="wrap-item-skill" data-character-class="5">
      <div class="badge-wrap badge-big">
        <div class="badge" data-character-skill="0"></div>
        <span class="big-tier">Tier 8</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="1"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="2"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="3"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="4"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="5"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="6"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="7"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="8"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="9"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="10"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="11"></div>
        <span class="sm-tier">7</span>
      </div>
      <div class="badge-wrap">
        <div class="badge" data-character-skill="12"></div>
        <span class="sm-tier">7</span>
      </div>
    </div> -->
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
