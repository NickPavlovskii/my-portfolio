<template>
  <div class="container">
    <h2 class="title">Таймлайн</h2>
    <p class="description">
      События из моей жизни и профессиональной деятельности
    </p>
    <div class="filters">
      <div class="filter-item">
        <PixelButton
          v-for="t in types"
          :key="t"
          :color="'#2c2c38'"
          :hoverColor="typeColor[t]"
          :class="[{ active: activeType === t }]"
          @click="activeType = t"
        >
          {{ t === "" ? "Все" : t === "education" ? "Учёба" : "Работа" }}
        </PixelButton>
        <div class="tooltip-container">
          <v-img class="white-icon" contain width="25" :src="helpIcon" />
          <span class="tooltip-text">
            выбирайте топики чтобы отфильтровать таймлайн
          </span>
        </div>
      </div>
    </div>
    <div class="timeline">
      <div
        v-for="(event, index) in filteredEvents"
        class="timeline-event"
        :key="index"
        :class="`timeline-event ${index % 2 === 0 ? 'left' : 'right'} ${event.type}`"
      >
        <div class="circle" />
        <div class="event-content">
          <p v-if="event.subtitle" class="subtitle">
            <strong>{{ event.subtitle }}</strong>
          </p>
          <h3>{{ event.title }}</h3>
          <p v-for="(line, i) in event.details" :key="i">{{ line }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import PixelButton from "../PixelButton.vue";
import helpIcon from "@/assets/img/help-circle.svg";
import { events as educationAndWork } from "./events";

const activeType = ref("");
const types = ["", "education", "work"];

const typeColor: Record<string, string> = {
  education: "#4caf50",
  work: "#f44336",
};

const filteredEvents = computed(() => {
  return activeType.value
    ? educationAndWork.filter((e) => e.type === activeType.value)
    : educationAndWork;
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  max-width: 1200px;
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
  visibility: hidden;
  background-color: #333;
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 0.85rem;
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
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

.timeline {
  position: relative;
  max-width: 1000px;
  padding: 2rem 0;
}

.timeline::before {
  content: "";
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
  width: 77%;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  animation: fadeIn 0.5s ease forwards;
}

.timeline-event.left {
  left: -27%;
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
