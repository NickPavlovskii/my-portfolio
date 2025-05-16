<template>
  <name-display
    letterColor="#007bff"
    :name="name"
  />
  <Timeline />
</template>

<script setup lang="ts">
  import Timeline from '~/components/timeline/Timeline.vue'

  const name = 'Nikita Pavlovskij'.split('')
</script>

<style scoped></style>
