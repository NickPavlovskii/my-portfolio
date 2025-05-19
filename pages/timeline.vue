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
          <tooltip :icon="helpIcon">
            выбирайте топики чтобы отфильтровать таймлайн
          </tooltip>
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

  .dark .description {
    color: white;
  }


</style>
