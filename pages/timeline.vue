<template>
  <name-display :name="name" letterColor="#007bff" />
  <Timeline />
</template>

<script setup lang="ts">
import Timeline from "~/components/timeline/Timeline.vue";

const name = "Nikita Pavlovskij".split("");
</script>

<style scoped></style>
