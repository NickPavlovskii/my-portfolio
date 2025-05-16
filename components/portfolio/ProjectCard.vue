<template>
  <v-card
    class="project-card elevation-2"
    :class="{ selected: isHovered }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    @click="navigateToProject"
  >
    <v-card-title class="text-lg font-semibold text-gray-800">
      {{ project.title }}
    </v-card-title>

    <v-card-subtitle class="text-sm text-gray-600">
      {{ project.description }}
    </v-card-subtitle>

    <v-card-text class="text-sm text-gray-700">
      <div class="stack-container">
        <v-icon small>mdi-github</v-icon>
        {{ project.stack }}
      </div>
    </v-card-text>
    <v-card-actions class="card-actions">
      <a
        target="_blank"
        class="github-link"
        :href="project.github"
        @click.stop
      >
        <v-img
          height="24"
          width="24"
          alt="GitHub"
          :src="githubIcon"
        />
      </a>

      <a
        v-if="project.demoUrl"
        target="_blank"
        class="demo-link"
        :href="project.demoUrl"
        @click.stop
      >
        <v-icon small>mdi-play-circle-outline</v-icon>
      </a>

      <div class="tags-container">
        <v-chip
          v-for="tag in project.tags"
          small
          class="tag-chip"
          в
          :key="tag"
          :color="tagColors[tag] || 'gray'"
        >
          {{ tag }}
        </v-chip>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { navigateTo } from '#app'
  import githubIcon from '~/assets/img/social/github.svg'
  import { TAG_COLORS } from './projects'

  const props = defineProps<{
    project: {
      id: number
      title: string
      description: string
      stack: string
      time?: number
      tags: string[]
      github: string
      projectUrl: string
      image?: string
      demoUrl?: string
    }
  }>()

  const isHovered = ref(false)
  const tagColors = TAG_COLORS

  const navigateToProject = async () => {
    try {
      await navigateTo(props.project.projectUrl)
    } catch (err) {
      console.error('Navigation error:', err)
    }
  }
</script>

<style scoped>
  .project-card {
    border-radius: 8px;
    padding: 1rem;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .project-card.selected {
    border: 2px solid #00cc00;
  }

  .v-card__title,
  .v-card__subtitle,
  .v-card__text,
  .v-chip {
    ::selection {
      background-color: #00cc00;
      color: #fff;
    }
  }

  .v-card__title {
    word-break: break-word;
  }

  .v-card__subtitle {
    margin-bottom: 0.5rem;
  }

  .v-card__text {
    padding-top: 0;
  }

  .stack-container,
  .time-container {
    display: flex;
    align-items: center;
    margin-top: 4px;
  }

  .stack-container .v-icon,
  .time-container .v-icon {
    margin-right: 4px;
  }

  .card-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .github-link,
  .demo-link {
    display: flex;
    align-items: center;
    margin-right: 8px;
  }

  .tags-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    flex: 1;
  }

  .tag-chip {
    margin: 0 4px 4px 0;
    font-size: 0.75rem;
  }
</style>
