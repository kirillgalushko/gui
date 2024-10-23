<script setup lang="ts">
import { Gap, Align } from '../../types';

export interface StackProps {
    direction: 'row' | 'column',
    gap?: Gap,
    fullHeight?: boolean;
    align?: Align;
}

const props = defineProps<StackProps>()
</script>

<template>
    <div
        :class="['stack', props.direction, props.align, { [`gap-${props.gap}`]: !!gap, 'fullHeight': props.fullHeight }]">
        <slot></slot>
    </div>
</template>

<style scoped>
.stack {
    display: inline-flex;
}

.row {
    flex-direction: row;
}

.column {
    flex-direction: column;
}

.start {
    align-items: start;
}

.center {
    align-items: center;
}

.end {
    align-items: end;
}

.fullHeight {
    height: 100%;
}

.gap-1 {
    gap: var(--gap-1)
}

.gap-2 {
    gap: var(--gap-2)
}

.gap-3 {
    gap: var(--gap-3)
}

.gap-4 {
    gap: var(--gap-4)
}

.gap-5 {
    gap: var(--gap-5)
}

.gap-6 {
    gap: var(--gap-6)
}
</style>