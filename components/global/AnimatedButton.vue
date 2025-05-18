<template>
  <button class="btn draw-border">
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
    color: '#58afd1',
    hoverColor: '#007bff',
    borderWidth: '4px',
  })
</script>
<style scoped lang="scss">
  @mixin btn-border-drawing(
    $vertical: top,
    $horizontal: left,
    $duration: 0.25s
  ) {
    position: relative;
    color: v-bind(color);
    box-shadow: inset 0 0 0 v-bind(borderWidth) v-bind(color);
    transition: color $duration $duration / 3;
    overflow: hidden;
    border-radius: inherit;

    &::before,
    &::after {
      content: '';
      position: absolute;
      pointer-events: none;
      border: 0 solid transparent;
      box-sizing: border-box;
      width: 0;
      height: 0;
      border-radius: inherit;
      z-index: 1;

      #{$vertical}: 0;
      #{$horizontal}: 0;
    }

    &::before {
      $h-side: if($horizontal == 'left', 'right', 'left');
      border-#{$vertical}-width: v-bind(borderWidth);
      border-#{$h-side}-width: v-bind(borderWidth);
    }

    &::after {
      $v-side: if($vertical == 'top', 'bottom', 'top');
      border-#{$v-side}-width: v-bind(borderWidth);
      border-#{$horizontal}-width: v-bind(borderWidth);
    }

    &:hover,
    &.active {
      color: v-bind(hoverColor);

      &::before,
      &::after {
        border-color: v-bind(hoverColor);
        transition:
          border-color 0s,
          width $duration,
          height $duration;
        width: 100%;
        height: 100%;
      }

      &::before {
        transition-delay: 0s, 0s, $duration;
      }

      &::after {
        transition-delay: 0s, $duration, 0s;
      }
    }
  }

  .draw-border {
    @include btn-border-drawing(bottom, right);
  }

  .btn {
    border-radius: 8px;
    cursor: pointer;
    line-height: 1.5;
    font:
      700 1.2rem 'Roboto Slab',
      sans-serif;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    background: none;
    border: none;
    position: relative;
    transition: color 0.25s 0.083s;
    letter-spacing: 0.05rem;
    overflow: hidden;

    &:focus {
      outline: 2px dotted #55d7dc;
    }
  }
</style>
