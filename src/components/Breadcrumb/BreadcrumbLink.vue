<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

export interface BreadcrumbLinkProps {
  Element?: 'a' | 'button' | 'span'
}

const props = withDefaults(defineProps<BreadcrumbLinkProps>(), {
  Element: 'a',
})
</script>

<template>
  <component v-bind="$attrs" :is="props.Element" class="breadcrumb-link">
    <slot></slot>
  </component>
</template>

<style scoped>
.breadcrumb-link {
  color: hsl(var(--muted-foreground));
  font-family: var(--font-family);
  font-size: inherit;
  line-height: inherit;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: hsl(var(--foreground));
}

.breadcrumb-link:focus-visible {
  outline: 2px solid hsl(var(--ring));
  outline-offset: 2px;
}

button.breadcrumb-link {
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;
}
</style>
