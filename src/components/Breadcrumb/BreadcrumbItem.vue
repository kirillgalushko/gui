<template>
  <li class="breadcrumb-item">
    <slot></slot>
  </li>
</template>

<style scoped>
.breadcrumb-item {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-2);
}
</style>
