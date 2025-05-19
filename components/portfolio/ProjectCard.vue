<template>
  <v-card
    class="project-card"
    :class="{ selected: isHovered }"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    @click="navigateToProject"
  >
    <v-card-title class="project-title">
      <p>{{ project.title }}</p>
    </v-card-title>

    <v-card-subtitle class="project-subtitle">
      <p>{{ project.description }}</p>
    </v-card-subtitle>

    <v-card-text class="project-text">
      <div class="stack-container">
        <code-icon
          size="24"
          :color="TYPE_COLORS[props.project.type]"
        />
        <p class="stack-text">
          {{ project.stack }}
        </p>
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

      <div class="tags-container">
        <v-chip
          v-for="tag in project.tags"
          small
          class="tag-chip"
          :key="tag"
          :color="TAG_COLORS[tag] || 'gray'"
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
  import { TAG_COLORS, TYPE_COLORS } from './projects'
  import codeIcon from './code-icon.vue'

  const props = defineProps<{
    project: {
      id: number
      title: string
      type: string
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
    position: relative;
    border-radius: 10px;
    min-height: 200px;
    max-height: 210px;
    padding: 1rem;
    transition: all 0.3s ease;
    cursor: pointer;
    background-color: #ffffff;
    color: #1a1a1a;
  }

  .dark .project-card {
    background-color: #2c2c2c;
    color: white;
  }

  .project-card::after {
    content: '';
    background: v-bind(TYPE_COLORS[props.project.type]);
    border-radius: 10px;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
    clip-path: circle(10% at 0% 0%);
    transition: all 0.3s ease-in;
  }

  .project-card.selected {
    border: 2px solid #00cc00;
  }

  .project-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #333;
  }

  .project-subtitle {
    font-size: 0.875rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

  .project-text {
    font-size: 0.875rem;
    color: #444;
    padding-top: 0;
  }

  .stack-container {
    display: flex;
    align-items: center;
    margin-top: 4px;
  }

  .stack-text {
    margin-left: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: calc(100% - 30px);
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

  .v-card__title,
  .v-card__subtitle,
  .v-card__text,
  .v-chip {
    ::selection {
      background-color: #00cc00;
      color: #fff;
    }
  }
</style>
