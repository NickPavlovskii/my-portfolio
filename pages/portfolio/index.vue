<template>
  <v-container class="projects-page min-h-screen bg-gray-100 py-6">
    <name-display
      :name="name"
      letterColor="#08b200"
    />
    <v-row
      justify="center"
      class="mb-6"
    >
      <v-col
        cols="12"
        class="text-center"
      >
        <h1 class="text-2xl font-bold text-gray-800">Портфолио</h1>
        <p class="text-sm text-gray-600">Мои пет-проекты</p>
      </v-col>
    </v-row>
    <v-row class="mb-6">
      <v-col
        cols="12"
        md="6"
      >
        <v-select
          v-model="selectedFramework"
          label="Фильтр по ЯП"
          outlined
          dense
          clearable
          :items="frameworks"
        ></v-select>
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-select
          v-model="selectedType"
          :items="projectTypes"
          label="Фильтр по типу проекта"
          outlined
          dense
          clearable
        ></v-select>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      class="gap-4"
    >
      <v-col
        v-for="project in filteredProjects"
        :key="project.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="project-card-wrapper"
      >
        <project-card :project="project" />
      </v-col>
    </v-row>
    <v-row
      v-if="filteredProjects.length === 0"
      justify="center"
      class="mt-6"
    >
      <v-col
        cols="12"
        class="text-center"
      >
        <p class="text-gray-500 text-sm">
          Проекты не найдены. Попробуйте изменить фильтры.
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import {
    PROJECTS,
    FRAMEWORKS,
    PROJECT_TYPES,
  } from '~/components/portfolio/projects'
  import ProjectCard from '~/components/portfolio/ProjectCard.vue'

  const name = 'Nikita Pavlovskij'.split('')
  const projects = ref(PROJECTS)
  const frameworks = FRAMEWORKS
  const projectTypes = PROJECT_TYPES

  const selectedFramework = ref<string | null>(null)
  const selectedType = ref<string | null>(null)

  const filteredProjects = computed(() => {
    return projects.value.filter((project) => {
      const matchesFramework = selectedFramework.value
        ? project.framework === selectedFramework.value
        : true
      const matchesType = selectedType.value
        ? project.type === selectedType.value
        : true
      return matchesFramework && matchesType
    })
  })
</script>

<style scoped>
  .projects-page {
    padding: 1rem;
  }

  .projects-page *::selection {
    background-color: #00cc00 !important;
    color: #fff !important;
  }

  .projects-page *::-moz-selection {
    background-color: #00cc00 !important;
    color: #fff !important;
  }
</style>
