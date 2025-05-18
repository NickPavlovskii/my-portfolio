<template>
    <svg
      viewBox="0 0 512 512"
      :width="size"
      :height="size"
      :stroke="color"
      :fill="color"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M160 368L32 256l128-112"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <path
        d="M352 368l128-112l-128-112"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <path
        d="M304 96l-96 320"
        fill="none"
        :stroke="color"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
    </svg>
  </template>
  
  <script setup lang="ts">
  defineProps<{
    color?: string
    size?: string | number
  }>()
  </script>
  