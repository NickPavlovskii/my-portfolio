<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface Props {
  color?: string;
  hoverColor?: string;
  borderWidth?: string;
}
withDefaults(defineProps<Props>(), {
  color: "#58afd1",
  hoverColor: "#007bff",
  borderWidth: "4px",
});
</script>
<style scoped lang="scss">
.btn {
  margin: 0 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  line-height: 1.2;
  font:
    700 1.2rem "Roboto Slab",
    sans-serif;

  position: relative;
  box-shadow: inset 0 0 0 v-bind(borderWidth) v-bind(color);
  color: v-bind(color);
  transition: color 0.25s 0.083s;

  &:focus {
    outline: 4px dotted v-bind(hoverColor);
  }
  &.active {
    box-shadow: inset 0 0 0 v-bind(borderWidth) v-bind(hoverColor);
    color: v-bind(hoverColor);
    border-color: v-bind(hoverColor);
  }
  &::before,
  &::after {
    content: "";
    position: absolute;
    border: 0 solid transparent;
    pointer-events: none;
    box-sizing: border-box;
    width: 0;
    height: 0;
    border-radius: 8px;
  }

  &::before {
    bottom: 0;
    right: 0;
    border-bottom-width: v-bind(borderWidth);
    border-left-width: v-bind(borderWidth);
    border-radius: 8px;
  }

  &::after {
    top: 0;
    left: 0;
    border-top-width: v-bind(borderWidth);
    border-right-width: v-bind(borderWidth);
    border-radius: 8px;
  }

  &:hover {
    color: v-bind(hoverColor);
    border-radius: 8px;
    &::before,
    &::after {
      border-color: v-bind(hoverColor);
      transition:
        border-color 0s,
        width 0.25s,
        height 0.25s;
      width: 100%;
      border-radius: 8px;
      height: 100%;
    }

    &::before {
      transition-delay: 0s, 0s, 0.25s;
      border-radius: 8px;
    }

    &::after {
      transition-delay: 0s, 0.25s, 0s;
      border-radius: 8px;
    }
  }
}
</style>
