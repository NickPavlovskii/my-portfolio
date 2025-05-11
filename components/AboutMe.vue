<template>
  <div class="container main">
    <h1 class="title">
      <NameDisplay :name="name" letterColor="#007bff" />
    </h1>
    <h2 class="greeting">Привет!</h2>
    <p class="intro mt-3">Меня зовут Никита, я веб-разработчик</p>
    <p class="description mt-8 w-full mx-auto">
      Это моя домашняя страница. Тут можно найти мои проекты, сложенные в
      <NuxtLink to="/portfolio" class="link green">портфолио</NuxtLink>,
      посмотреть моё <NuxtLink to="/resume" class="link resume">резюме</NuxtLink>,
      <NuxtLink to="/timeline" class="link timeline">таймлайн</NuxtLink> и узнать
      как
      <NuxtLink to="/contact" class="link cyan">связаться со мной</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import NameDisplay from "./NameDisplay.vue";
const name = "Nikita Pavlovskij".split("");
</script>

<style scoped lang="scss">
.title {
  font-size: 86px;
  font-weight: 450;
  line-height: 1.1;
}

.greeting {
  font-size: 2rem;
  margin-top: 3rem;
  font-weight: bold;
}

.intro {
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 500;
}

.description {
  margin-top: 2rem;
  line-height: 1.6;
}

.dark .description {
  color: white;
}

.link {
  text-decoration: underline;
}
.link.green {
  color: green;
}
.link.resume {
  color: #c7005f;
}
.link.timeline {
  color: #007bff;
}
.link.cyan {
  color: #00bcd4;
}

@media (min-width: 768px) {
  .description {
    width: 42.8%;
  }
}
</style>
