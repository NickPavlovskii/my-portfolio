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

    <!-- Навигация -->
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
        :class="{ 'active-timeline': $route.path === '/timeline' }"
        @click="closeMenu"
        >Таймлайн</NuxtLink
      >
    </nav>
    <div style="display: flex">
      <!-- Иконка темы -->
      <div class="theme-icon" @click="toggleTheme">
        <img :src="icon" width="25" />
      </div>
      <!-- Бургер -->
      <button class="burger" @click="isOpen = !isOpen">
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
        <span :class="{ open: isOpen }"></span>
      </button>
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
  padding: 1.5rem 2rem;
  position: relative;
  font-family: "Montserrat", sans-serif;
}

.logo {
  font-size: 1.75rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
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

/* Бургер */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  margin-top: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
}

.burger span {
  width: 25px;
  height: 3px;
  background: black;
  transition: all 0.3s ease;
}

.burger span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile styles */
@media (max-width: 768px) {
  .nav {
    display: none;
    position: absolute;
    top: 90%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 1rem;
    z-index: 10;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }

  .nav.open {
    display: flex;
  }
  .dark .nav {
    background: #121212;
  }
  .dark .burger span {
    background-color: white;
    color: white;
  }
  .burger {
    display: flex;
  }

  .theme-icon {
    margin-left: 10px;
    order: 2;
  }
  .dark .underline {
    border-bottom: 3px solid white;
  }

  .nav-link:hover {
    text-decoration: underline;
  }
}
</style>
