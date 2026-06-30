<template>
  <ol class="breadcrumb-list">
    <slot></slot>
  </ol>
</template>

<style scoped>
.breadcrumb-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--gap-1);
  margin: 0;
  padding: 0;
  color: hsl(var(--muted-foreground));
  font-family: var(--font-family);
  font-size: 14px;
  line-height: 20px;
  list-style: none;
  word-break: break-word;
}
</style>
