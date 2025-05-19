<template>
  <div class="tooltip-container">
    <v-img
      class="white-icon"
      contain
      width="25"
      :src="icon"
    />
    <span class="tooltip-text">
      <slot></slot>
    </span>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  const props = defineProps({
    icon: {
      type: String,
      required: true,
    },
  })
</script>

<style scoped>
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

  .dark .white-icon {
    filter: brightness(0) invert(1);
  }
</style>
