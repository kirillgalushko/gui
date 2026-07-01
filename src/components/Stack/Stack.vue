<script setup lang="ts">
import { Gap, Align } from '../../types';

export interface StackProps {
    direction: 'row' | 'column',
    gap?: Gap,
    fullHeight?: boolean;
    alignItems?: Align;
    stretched?: boolean;
    wrap?: boolean;
}

const props = defineProps<StackProps>()
</script>

<template>
    <div :class="['stack',
        props.direction,
        props.alignItems,
        {
            'with-gap': !!props.gap,
            'fullHeight': props.fullHeight,
            'stretched': props.stretched,
            'wrap': props.wrap,
        }
    ]" :style="props.gap ? { '--stack-gap-size': `var(--gap-${props.gap})` } : undefined">
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

.stretched {
    width: 100%;
}

.wrap {
    flex-wrap: wrap;
}

.with-gap {
    gap: var(--stack-gap-size);
}
</style>
