<template>
  <div class="container main">
    <h1 class="title">
      <NameDisplay :name="name" letterColor="#c7005f" />
    </h1>
  </div>
</template>

<script setup lang="ts">
import NameDisplay from "../components/NameDisplay.vue";

const name = "Nikita Pavlovskij".split("");
</script>

<style scoped>
.title {
  font-size: 86px;
  font-weight: 450;
  line-height: 1.1;
}
</style>