<template>
  <header class="header">
    <NuxtLink to="/" class="logo">
      <span class="letter underline">N</span>
      <span class="letter">i</span>
      <span class="letter">k</span>
      <span class="letter">l</span>
      <span class="letter">a</span>
      <span class="letter">d</span>
    </NuxtLink>
    <nav class="nav">
      <NuxtLink
        to="/portfolio"
        class="nav-link"
        :class="{ 'active-portfolio': $route.path === '/portfolio' }"
        >Портфолио</NuxtLink
      >

      <NuxtLink
        to="/resume"
        class="nav-link"
        :class="{ 'active-resume': $route.path === '/resume' }"
        >Резюме</NuxtLink
      >

      <NuxtLink
        to="/contact"
        class="nav-link"
        :class="{ 'active-contact': $route.path === '/contact' }"
        >Контакты</NuxtLink
      >

      <NuxtLink
        to="/timeline"
        class="nav-link"
        :class="{ 'active-timeline': $route.path === '/timeline' }"
        >Таймлайн</NuxtLink
      >
    </nav>
    <div class="theme-icon" @click="toggleTheme">
      <v-img contain width="25" :src="icon" />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, watchEffect, onMounted } from "vue";
import moonIcon from "@/assets/img/switch-moon.svg";
import sunIcon from "@/assets/img/switch-sun.svg";

const isDark = ref(false);
const icon = ref(moonIcon);

onMounted(() => {
  watchEffect(() => {
    icon.value = isDark.value ? sunIcon : moonIcon;

    const html = document.documentElement;
    if (isDark.value) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  });
});

function toggleTheme() {
  isDark.value = !isDark.value;
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap");

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  font-family: "Montserrat", sans-serif;
  color: #000;
}

.logo {
  cursor: pointer;
  text-decoration: none;
  font-size: 1.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.letter {
  display: inline-block;
  margin-right: 2px;
}

.underscore {
  margin-left: 4px;
  font-weight: normal;
}

.nav {
  display: flex;
  gap: 1.5rem;
  font-size: 1.125rem;
}

.nav-link {
  color: inherit;
  text-decoration: none;
}
.nav-link.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

.active-portfolio {
  color: #08b200;
}

.active-resume {
  color: #c7005f;
}

.active-contact {
  color: #ffc107;
}

.active-timeline {
  color: #007bff;
}
.underline {
  border-bottom: 3px solid black;
}

.dark .underline {
  border-bottom: 3px solid white;
}

.nav-link:hover {
  text-decoration: underline;
}

.theme-icon {
  font-size: 1.5rem;
}
</style>
