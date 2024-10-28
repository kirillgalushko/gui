<template>
  <div :class="['base-menu-separator']"></div>
</template>

<style scoped>
.base-menu-separator {
  width: calc(100% + var(--menu-padding) * 2);
  background-color: hsl(var(--muted));
  height: 1px;
  margin: 4px 0;
  margin-left: calc(0px - var(--menu-padding));
}
</style>