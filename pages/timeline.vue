<template>
  <name-display :name="name" letterColor="#007bff" />

  <Timeline />
</template>

<script setup lang="ts">
import Timeline from "~/components/timeline/Timeline.vue"; // Абсолютный путь

const name = "Nikita Pavlovskij".split("");
</script>

<style scoped>
.title {
  font-size: 86px;
  font-weight: 450;
  line-height: 1.1;
}
</style>
