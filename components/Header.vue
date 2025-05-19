<template>
  <header class="header">
    <NuxtLink
      to="/"
      class="logo"
    >
      <span class="letter underline">N</span>
      <span class="letter">i</span>
      <span class="letter">k</span>
      <span class="letter">l</span>
      <span class="letter">a</span>
      <span class="letter">d</span>
    </NuxtLink>
    <nav class="nav-desktop">
      <NuxtLink
        to="/portfolio"
        :class="[
          'nav-link',
          { 'active-portfolio': $route.path === '/portfolio' },
        ]"
      >
        Портфолио
      </NuxtLink>
      <NuxtLink
        to="/resume"
        :class="['nav-link', { 'active-resume': $route.path === '/resume' }]"
      >
        Резюме
      </NuxtLink>
      <NuxtLink
        to="/contact"
        :class="['nav-link', { 'active-contact': $route.path === '/contact' }]"
      >
        Контакты
      </NuxtLink>
      <NuxtLink
        to="/timeline"
        :class="[
          'nav-link',
          { 'active-timeline': $route.path === '/timeline' },
        ]"
      >
        Таймлайн
      </NuxtLink>
    </nav>
    <div class="right-panel">
      <div class="right-panel">
        <div
          class="theme-icon"
          @click="toggleTheme"
        >
          <transition
            name="fade-theme-icon"
            mode="out-in"
          >
            <img
              :key="icon"
              class="theme-img"
              width="25"
              :src="icon"
            />
          </transition>
        </div>
      </div>

      <div
        :class="['burger', isMenuOpen ? 'is-open' : 'is-closed']"
        @click="toggleMenu"
      >
        <div class="menu-bar"></div>
        <div class="menu-bar"></div>
        <div class="menu-bar"></div>
      </div>
    </div>
    <div
      class="slide-menu"
      :class="{ open: isMenuOpen }"
    >
      <div class="mobile-nav">
        <NuxtLink
          to="/portfolio"
          :class="[
            'nav-link',
            { 'active-portfolio': $route.path === '/portfolio' },
          ]"
          @click="closeMenu"
        >
          Портфолио
        </NuxtLink>
        <NuxtLink
          to="/resume"
          :class="['nav-link', { 'active-resume': $route.path === '/resume' }]"
          @click="closeMenu"
        >
          Резюме
        </NuxtLink>
        <NuxtLink
          to="/contact"
          :class="[
            'nav-link',
            { 'active-contact': $route.path === '/contact' },
          ]"
          @click="closeMenu"
        >
          Контакты
        </NuxtLink>
        <NuxtLink
          to="/timeline"
          :class="[
            'nav-link',
            { 'active-timeline': $route.path === '/timeline' },
          ]"
          @click="closeMenu"
        >
          Таймлайн
        </NuxtLink>
      </div>
      <div class="bottom-image-container d-sm-none">
        <v-img
          height="240"
          width="240"
          src="./me.png"
        />
      </div>
    </div>
  </header>
</template>

<script setup>
  import { ref, onMounted, watchEffect } from 'vue'
  import moonIcon from '@/assets/img/switch-moon.svg'
  import sunIcon from '@/assets/img/switch-sun.svg'

  const icon = ref(moonIcon)
  const isDark = ref(false)
  const isMenuOpen = ref(false)

  function toggleTheme() {
    isDark.value = !isDark.value
  }

  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value
  }

  function closeMenu() {
    isMenuOpen.value = false
  }

  onMounted(() => {
    watchEffect(() => {
      icon.value = isDark.value ? sunIcon : moonIcon
      document.documentElement.classList.toggle('dark', isDark.value)
    })
  })
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    font-family: 'Montserrat', sans-serif;
    position: relative;
    z-index: 1001;
    flex-wrap: wrap;
  }
  .slide-menu {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 1rem;
  }

  .mobile-nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .bottom-image-container {
    margin-top: auto;
    display: flex;
    justify-content: center;
    padding-top: 1rem;
  }

  .bottom-image-container {
    margin-top: auto;
    display: flex;
    justify-content: center;
    padding-top: 1rem;
  }
  .logo {
    font-size: 1.75rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 1.5rem;
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

  .nav-desktop {
    display: flex;
    gap: 1.25rem;
  }

  .nav-link {
    text-decoration: none;
    color: inherit;
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

  .right-panel {
    display: flex;
    align-items: center;
    margin-left: 1.5rem;
  }

  .theme-icon {
    z-index: 1002;
    cursor: pointer;
  }
  .fade-theme-icon-enter-active {
    animation: rotateIn 0.1s ease;
  }

  @keyframes rotateIn {
    0% {
      opacity: 0;
      transform: rotate(-90deg);
    }
    100% {
      opacity: 1;
      transform: rotate(0deg);
    }
  }

  .burger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    z-index: 1002;
    margin-left: 1.5rem;
  }

  .menu-bar {
    width: 25px;
    height: 3px;
    margin: 3px 0;
    border-radius: 4px;
    background-color: black;
    transition: 0.3s;
    animation-duration: 0.4s;
    animation-fill-mode: forwards;
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

  /* Анимации открытия */
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
      transform: translateY(-12px) rotate(135deg);
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

  /* Анимации закрытия */
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

  .dark .menu-bar {
    background-color: white;
  }
  .is-open .menu-bar:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }
  .is-open .menu-bar:nth-child(2) {
    transform: scale(0);
  }
  .is-open .menu-bar:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }

  .slide-menu {
    position: fixed;
    top: 0;
    right: 0;
    left: auto;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(10px);
    transform: translateX(100%);
    transition: transform 0.4s ease;
    z-index: 1000;
    padding: 2rem 1.5rem;
  }

  .slide-menu.open {
    transform: translateX(0);
  }

  .dark .slide-menu {
    background: rgba(26, 26, 26, 0.95);
  }

  .mobile-nav {
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .theme-toggle-mobile {
    align-self: flex-end;
    cursor: pointer;
  }

  .mobile-nav {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .nav-desktop {
      display: none;
    }

    .burger {
      display: flex;
    }
  }

  .fade-theme-icon-enter-active,
  .fade-theme-icon-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-theme-icon-enter-from,
  .fade-theme-icon-leave-to {
    opacity: 0;
  }
</style>
