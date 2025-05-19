<template>
    <div class="timeline">
      <div
        v-for="(event, index) in filteredEvents"
        class="timeline-event"
        :key="index"
        :class="`timeline-event ${index % 2 === 0 ? 'left' : 'right'} ${event.type}`"
      >
        <div class="circle" />
        <div class="event-content">
          <p
            v-if="event.subtitle"
            class="subtitle"
          >
            <strong>{{ event.subtitle }}</strong>
          </p>
          <h3>{{ event.title }}</h3>
          <p
            v-for="(line, i) in event.details"
            :key="i"
          >
            {{ line }}
          </p>
        </div>
      </div>
    </div>

</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { events as educationAndWork } from './events'

  const props = defineProps<{
  activeType: string
}>()

const filteredEvents = computed(() => {
  if (!props.activeType) return educationAndWork
  return educationAndWork.filter(e => e.type === props.activeType)
})

</script>

<style scoped>
  .timeline {
    position: relative;
    max-width: 1000px;
    padding: 2rem 0;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: #007bff;
    transform: translateX(-50%);
  }

  .timeline-event {
    position: relative;
    width: 74%;
    padding: 1.5rem 2rem;
    box-sizing: border-box;
    animation: fadeIn 0.5s ease forwards;
  }

  .timeline-event.left {
    left: -24%;
    text-align: right;
  }

  .timeline-event.right {
    left: 50%;
    text-align: left;
  }

  .event-content {
    background-color: #1c1c24;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    border: 1px solid rgba(0, 120, 255, 0.5);
    box-shadow: 0 0 15px rgba(0, 120, 255, 0.3);
  }
  .event-content p,
  .event-content h3 {
    color: #f0f0f0;
  }
  .timeline-event.education .event-content {
    border-color: #4caf50;
    box-shadow: 0 0 15px rgba(76, 175, 80, 0.3);
  }

  .timeline-event.work .event-content {
    border-color: #f44336;
    box-shadow: 0 0 15px rgba(244, 67, 54, 0.3);
  }

  .circle {
    position: absolute;
    top: 30px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    z-index: 2;
  }

  .timeline-event.education .circle {
    background-color: #4caf50;
    box-shadow: 0 0 10px #4caf50;
  }

  .timeline-event.work .circle {
    background-color: #f44336;
    box-shadow: 0 0 10px #f44336;
  }

  .timeline-event.left .circle {
    right: -8px;
  }

  .timeline-event.right .circle {
    left: -8px;
  }

  /* Анимации */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.5s ease;
  }
  .fade-slide-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  @media (max-width: 768px) {
    .timeline::before {
      left: 8px;
    }

    .timeline-event {
      width: 100%;
      padding: 1rem;
      left: 0 !important;
      text-align: left !important;
      margin-left: 1.5rem;
    }

    .timeline-event.left,
    .timeline-event.right {
      left: 0;
      text-align: left;
    }

    .timeline-event .circle {
      left: -24px !important;
      right: auto !important;
    }

    .tooltip-container {
      margin-left: 0;
    }

    .tooltip-text {
      bottom: auto;
      top: 120%;
      left: 50%;
      transform: translateX(-50%);
    }

    .title {
      font-size: 20px;
    }

    .description {
      font-size: 14px;
      padding: 0 1rem;
    }

    .event-content {
      padding: 0.75rem 1rem;
    }

    .event-content h3 {
      font-size: 16px;
    }

    .event-content p {
      font-size: 14px;
    }
  }
</style>
