<template>
  <div class="skills-chart">
    <ClientOnly>
      <apexchart
        type="polarArea"
        height="350"
        :options="chartOptions"
        :series="series"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  const series = [70, 35, 10]

  const chartOptions = {
    chart: {
      height: 550,
      type: 'polarArea',
    },
    labels: ['Vue', 'React', 'Angular'],
    colors: ['#00E396', '#008FFB', '#FF4560'],
    stroke: {
      colors: ['#fff'],
    },
    fill: {
      opacity: 0.8,
    },
    legend: {
      position: 'bottom',
      fontSize: '14px',
    },
    yaxis: {
      show: false,
      max: 100,
    },
    plotOptions: {
      polarArea: {
        rings: {
          strokeWidth: 0,
        },
        spokes: {
          strokeWidth: 0,
        },
      },
    },
  }
</script>

<style scoped>
  .skills-chart {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
  }
</style>
