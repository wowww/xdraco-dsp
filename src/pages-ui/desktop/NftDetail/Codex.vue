<template>
  <div class="wrap-circle-progress codex">
    <div class="wrap-item-chart">
      <div class="chart-item">
        <div class="circle-area"></div>
        <div class="cirin-data">
          <p class="minmax">402/601</p>
          <p class="percent">75.54%</p>
        </div>
        <p class="name">Character</p>
        <p class="progress">In Progress<span>19</span></p>
        <p class="completed">Completed<span>293</span></p>
      </div>
      <div class="chart-item">
        <div class="circle-area">
          <chart></chart>
        </div>
        <div class="cirin-data">
          <p class="minmax">402/601</p>
          <p class="percent">75.54%</p>
        </div>
        <p class="name">Character</p>
        <p class="progress">In Progress<span>19</span></p>
        <p class="completed">Completed<span>293</span></p>
      </div>
      <div class="chart-item">
        <div class="circle-area">
          <chart></chart>
        </div>
        <div class="cirin-data">
          <p class="minmax">402/601</p>
          <p class="percent">75.54%</p>
        </div>
        <p class="name">Character</p>
        <p class="progress">In Progress<span>19</span></p>
        <p class="completed">Completed<span>293</span></p>
      </div>
      <div class="chart-item">
        <div class="circle-area">
          <chart></chart>
        </div>
        <div class="cirin-data">
          <p class="minmax">402/601</p>
          <p class="percent">75.54%</p>
        </div>
        <p class="name">Character</p>
        <p class="progress">In Progress<span>19</span></p>
        <p class="completed">Completed<span>293</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount } from '@vue/composition-api';
import Vue from 'vue';
// import Chart from 'vue-chartjs';
//
// Vue.component('chart', {
//   extends: Chart.Doughnut,
//   props: ['data', 'options'],
//   mounted() {
//     this.renderChart(
//       {
//         datasets: [
//           {
//             data: [5, 70, 25],
//             borderWidth: 0,
//             backgroundColor: ['#2354ff', '#23b0ff', '#000000'],
//             rotation: 0,
//             clip: 0,
//             circumference: 360,
//             cutout: 0,
//             radius: 0,
//           },
//         ],
//       },
//       {
//         animation: {
//           duration: 0,
//         },
//         cutoutPercentage: 91,
//       },
//     );
//   },
// });

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
