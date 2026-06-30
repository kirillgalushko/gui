<template>
  <caption class="table-caption">
    <slot></slot>
  </caption>
</template>

<style scoped>
.table-caption {
  margin-top: var(--gap-4);
  color: hsl(var(--muted-foreground));
  font-size: 14px;
  line-height: 20px;
}
</style>
