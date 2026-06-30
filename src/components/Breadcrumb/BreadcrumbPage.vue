<template>
  <span class="breadcrumb-page" role="link" aria-disabled="true" aria-current="page">
    <slot></slot>
  </span>
</template>

<style scoped>
.breadcrumb-page {
  color: hsl(var(--foreground));
  font-family: var(--font-family);
  font-size: inherit;
  line-height: inherit;
  font-weight: 400;
}
</style>
