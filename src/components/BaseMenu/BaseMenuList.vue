<template>
  <div :class="['base-menu-list']">
    <slot></slot>
  </div>
</template>

<style scoped>
.base-menu-list {
  display: flex;
  flex-direction: column;
}
</style>