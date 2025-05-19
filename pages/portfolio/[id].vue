<template>
  <v-container class="py-6">
    <v-row>
      <v-col
        cols="12"
        md="8"
      >
        <h1 class="project-title">
          <span class="yellow-text">{{ firstLetter }}</span>
          {{ restTitle }}
        </h1>

        <p class="project-subtitle">
          {{ project?.description || 'Описание отсутствует' }}
        </p>

        <v-btn
          v-if="project?.demoUrl"
          color="yellow-darken-2"
          class="my-4"
          @click="goToDemo"
        >
          Посетить проект
        </v-btn>

        <v-divider class="my-4"></v-divider>

        <p class="mt-4">{{ project?.longDescription }}</p>

        <h2
          v-if="project?.flow"
          class="section-heading"
        >
          Юзерфлоу или CJM
        </h2>
        <ol class="custom-list">
          <li
            v-for="(step, i) in project?.flow || []"
            :key="i"
          >
            {{ step }}
          </li>
        </ol>

        <h2
          v-if="project?.mainFeature"
          class="section-heading"
        >
          Функционал
        </h2>
        <p>{{ project?.mainFeature }}</p>
        <ul class="custom-list">
          <li
            v-for="(f, i) in project?.features || []"
            :key="i"
          >
            {{ f }}
          </li>
        </ul>
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <h3
          v-if="project?.tags"
          class="section-subheading"
        >
          Топики
        </h3>
        <v-chip
          v-for="(topic, index) in project?.tags || []"
          class="mb-2 me-2"
          label
          :key="index"
          :color="topicColors[topic] || 'grey'"
        >
          {{ topic }}
        </v-chip>

        <h3
          v-if="project?.stack"
          class="section-subheading"
        >
          Технологии
        </h3>
        <v-chip
          v-for="(tech, i) in project?.stack?.split(',') || []"
          :key="i"
          class="mb-2 me-2"
          variant="flat"
          color="#ffdb58"
          label
        >
          {{ tech.trim() }}
        </v-chip>

        <h3 class="section-subheading">Ссылки</h3>
        <v-btn
          v-for="(link, i) in project.links || []"
          :key="i"
          :href="link.url"
          variant="text"
          color="deep-orange"
          target="_blank"
          class="me-2 mb-2"
        >
          <v-icon start>{{ link.icon }}</v-icon>
          {{ link.name }}
        </v-btn>
        <div
          v-if="project.images"
          class="carousel"
        >
          <h3
            v-if="project?.images"
            class="section-subheading"
          >
           Фотографии
          </h3>
          <v-carousel
            show-arrows="hover"
            class="rounded-lg elevation-3 mt-10"
            height="500"
            width="600"
          >
            <v-carousel-item
              v-for="(img, index) in project.images"
              :key="index"
            >
              <v-img
                cover
                class="carousel-img"
                :src="img"
              />
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { PROJECTS } from '~/components/portfolio/projects'
  import githubIcon from '~/assets/img/social/github.svg'

  const route = useRoute()
  const project = computed(() => {
    const foundProject = PROJECTS.find(
      (p) => p.projectUrl === `/portfolio/${route.params.id}`,
    )
    return foundProject
  })

  const topicColors = {
    Фронтенд: 'blue',
    Бэкенд: 'orange',
    'UI/UX': 'green',
  }

  const firstLetter = computed(() => {
    return project.value?.title?.charAt(0) || ''
  })
  const restTitle = computed(() => {
    return project.value?.title?.slice(1) || ''
  })

  const goToDemo = () => {
    if (project.value?.demoUrl) {
      window.open(project.value.demoUrl, '_blank')
    }
  }
</script>

<style scoped>
  .project-title {
    font-size: 2.5rem;
    font-weight: bold;
  }
  .carousel :deep(.v-btn--active) {
    background-color: #fdd835;
  }
  .yellow-text {
    color: #fdd835;
  }

  .project-subtitle {
    font-style: italic;
    color: #555;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  .section-heading {
    font-size: 1.25rem;
    margin-top: 2rem;
    font-weight: 600;
  }

  .section-subheading {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  .custom-list {
    padding-left: 1.5rem;
    margin-top: 0.5rem;
  }

  .custom-list li {
    margin-bottom: 0.5rem;
  }
  .project-title {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
  }

  .yellow-text {
    color: #fdd835;
  }

  .project-subtitle {
    font-style: italic;
    color: #555;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }

  .section-heading,
  .section-subheading {
    text-align: center;
  }

  .custom-list {
    padding-left: 1.5rem;
    margin-top: 0.5rem;
  }

  .custom-list li {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    .project-title {
      font-size: 1.8rem;
    }

    .carousel-wrapper {
      max-width: 100%;
      margin: 0 auto;
    }

    .v-carousel {
      height: 250px !important;
      width: 100% !important;
    }
  }

  .carousel-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
</style>
