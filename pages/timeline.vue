<template>
  <div class="container main">
    <h1 class="title">
      <NameDisplay :name="name" letterColor="#007bff" />
    </h1>

    <Timeline />
  </div>
</template>

<script setup lang="ts">
import NameDisplay from "~/components/NameDisplay.vue"; // Абсолютный путь
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
