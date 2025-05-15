<template>
  <h1 class="title">
    <span class="name-underline">
      <span
        v-for="(char, index) in name"
        :key="index"
        :style="{
          animationDelay: `${index * 0.05}s`,
          color: char === 'N' || char === 'P' ? letterColor : '',
        }"
        :class="[
          'letter',
          { 'blue-letter': char === 'N' || char === 'P' },
          { space: char === ' ' },
        ]"
      >
        {{ char === " " ? "\u00A0" : char }}
      </span>
    </span>
  </h1>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    name: string[];
    letterColor: string;
  }>(),
  {
    letterColor: "#58afd1",
  }
);

const letterColor = computed(() => props.letterColor);
</script>

<style scoped>
@keyframes fadeInLetter {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.title {
  font-family: "Montserrat", sans-serif;
  text-align: center;
  margin-bottom: 0.25rem;
  font-size: 86px;
  font-weight: 450;
  line-height: 1.1;
}
.name-underline {
  font-family: "Montserrat", sans-serif;
  position: relative;
  display: inline-block;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 17% 4px;
  transition: background-size 0.8s ease;
  background-image: linear-gradient(black, black);
}

.name-underline:hover {
  background-size: 100% 4px;
}

.dark .name-underline {
  background-image: linear-gradient(white, white);
}

.letter {
  display: inline-block;
  opacity: 0;
  animation: fadeInLetter 0.6s ease forwards;
  transition: color 0.3s ease;
}

.letter.space {
  margin-left: 0.2em;
}

.name-underline {
  display: inline-block;
  text-decoration: underline;
}

.blue-letter {
  color: blue;
}

@media (max-width: 768px) {
  .title {

    font-size: 40px;
    font-weight: 450;
    line-height: 1.1;
  }

}
</style>
