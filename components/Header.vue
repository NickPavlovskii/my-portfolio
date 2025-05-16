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
    <nav :class="['nav', { open: isOpen }]">
      <NuxtLink
        to="/portfolio"
        class="nav-link"
        :class="{ 'active-portfolio': $route.path === '/portfolio' }"
        @click="closeMenu"
        >Портфолио</NuxtLink
      >
      <NuxtLink
        to="/resume"
        class="nav-link"
        :class="{ 'active-resume': $route.path === '/resume' }"
        @click="closeMenu"
        >Резюме</NuxtLink
      >
      <NuxtLink
        to="/contact"
        class="nav-link"
        :class="{ 'active-contact': $route.path === '/contact' }"
        @click="closeMenu"
        >Контакты</NuxtLink
      >
      <NuxtLink
        to="/timeline"
        class="nav-link"
        :class="{ active: $route.path === '/timeline' }"
        @click="closeMenu"
        >Таймлайн</NuxtLink
      >
    </nav>
    <div class="right-panel" style="display: flex">
      <div class="theme-icon" @click="toggleTheme">
        <img :src="icon" width="25" />
      </div>

      <div
        class="burger"
        :class="isOpen ? 'is-open' : 'is-closed'"
        @click="isOpen = !isOpen"
      >
        <div class="menu-bar"></div>
        <div class="menu-bar"></div>
        <div class="menu-bar"></div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import moonIcon from "@/assets/img/switch-moon.svg";
import sunIcon from "@/assets/img/switch-sun.svg";

const icon = ref(moonIcon);
const isDark = ref(false);
const isOpen = ref(false);

function toggleTheme() {
  isDark.value = !isDark.value;
}

function closeMenu() {
  isOpen.value = false;
}

onMounted(() => {
  watchEffect(() => {
    icon.value = isDark.value ? sunIcon : moonIcon;
    document.documentElement.classList.toggle("dark", isDark.value);
  });
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-family: "Montserrat", sans-serif;
  position: relative;
}

.logo {
  font-size: 1.75rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.letter {
  margin-right: 2px;
}

.underline {
  border-bottom: 3px solid black;
}

.dark .underline {
  border-bottom: 3px solid white;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: inherit;
}

.nav-link.active {
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

.burger {
  margin-left: 10px;
  display: none;
  flex-direction: column;
  cursor: pointer;
}

.menu-bar {
  width: 25px;
  height: 3px;
  margin: 2px 0;
  border-radius: 4px;
  background-color: black;
  box-shadow: 0 2px 2px hsla(0, 0%, 0%, 0.2);
  transform-origin: center;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

.dark .menu-bar {
  background-color: white;
}

/* Открытие */
.is-open .menu-bar:first-child {
  animation-name: topBarOpen;
}
.is-open .menu-bar:nth-child(2) {
  animation-name: middleBarOpen;
}
.is-open .menu-bar:last-child {
  animation-name: bottomBarOpen;
}

/* Закрытие */
.is-closed .menu-bar:first-child {
  animation-name: topBarClose;
}
.is-closed .menu-bar:nth-child(2) {
  animation-name: middleBarClose;
}
.is-closed .menu-bar:last-child {
  animation-name: bottomBarClose;
}

/* Анимации */
@keyframes topBarOpen {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
  100% {
    transform: translateY(6px) rotate(45deg);
  }
}
@keyframes bottomBarOpen {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(-6px) rotate(135deg);
  }
}
@keyframes middleBarOpen {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes topBarClose {
  0% {
    transform: translateY(6px) rotate(45deg);
  }
  50% {
    transform: translateY(6px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes bottomBarClose {
  0% {
    transform: translateY(-6px) rotate(135deg);
  }
  50% {
    transform: translateY(-6px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes middleBarClose {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

/* Мобильная адаптация */
@media (max-width: 768px) {
  .nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .nav.open {
    display: flex;
  }

  .burger {
    display: flex;
  }

  .dark .nav {
    background: #121212;
  }

  .dark .burger .menu-bar {
    background-color: white;
  }
}
</style>
