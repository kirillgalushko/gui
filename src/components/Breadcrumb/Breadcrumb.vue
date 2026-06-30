<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})

export interface BreadcrumbProps {
  label?: string
}

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  label: 'breadcrumb',
})
</script>

<template>
  <nav v-bind="$attrs" :aria-label="props.label">
    <slot></slot>
  </nav>
</template>
