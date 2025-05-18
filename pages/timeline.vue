<template>
  <name-display
    letterColor="#007bff"
    :name="name"
  />
  <div class="container main">
    <h2 class="title">Таймлайн</h2>
    <p class="description">
      События из моей жизни и профессиональной деятельности
    </p>
    <div class="filters">
      <div class="filter-item">
        <animated-button
          v-for="t in types"
          :key="t"
          :color="'#2c2c38'"
          :hoverColor="typeColor[t]"
          :class="[{ active: activeType === t }]"
          @click="activeType = t"
        >
          {{ t === '' ? 'Все' : t === 'education' ? 'Учёба' : 'Работа' }}
        </animated-button>
        <div class="tooltip-container">
          <v-img
            class="white-icon"
            contain
            width="25"
            :src="helpIcon"
          />
          <span class="tooltip-text">
            выбирайте топики чтобы отфильтровать таймлайн
          </span>
        </div>
      </div>
    </div>
    <Timeline :activeType />
  </div>
</template>

<script setup lang="ts">
  import helpIcon from '@/assets/img/help-circle.svg'
  const activeType = ref('')
  const types = ['', 'education', 'work']

  const typeColor: Record<string, string> = {
    education: '#4caf50',
    work: '#f44336',
  }

  const name = 'Nikita Pavlovskij'.split('')
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    margin: 0 auto;
    text-align: center;
  }

  .description {
    margin-bottom: 2rem;
    max-width: 700px;
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .filter-item {
    display: flex;
    align-items: center;
  }

  .tooltip-container {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 1rem;
    cursor: pointer;
  }

  .tooltip-text {
    z-index: 1000;
    visibility: hidden;
    background-color: #333;
    color: #fff;
    padding: 6px 10px;
    border-radius: 6px;
    font-size: 0.75rem;
    position: absolute;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
  }

  .tooltip-container:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }

  .dark .description {
    color: white;
  }

  .dark .white-icon {
    filter: brightness(0) invert(1);
  }
</style>
