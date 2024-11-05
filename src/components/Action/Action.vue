<template>
  <button v-bind="$attrs" :class="['action']">
    <slot></slot>
  </button>
</template>

<style scoped>
.action {
  display: flex;
  border: 0;
  border-radius: 100%;
  cursor: pointer;
  font-size: 24px;
  background-color: transparent;
  color: hsl(var(--foreground));
  transition: scale 0.2s, background-color 0.2s, color 0.2s;
  padding: 0;
}

.action:hover {
  color: hsl(var(--foreground) / .7);
}

.action:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: -2px;
}

.action:active {
  scale: 0.90;
}
</style>