<script setup lang="ts">
import { BorderRadius, Padding } from '../../types';

interface Card {
    background?: 'default' | 'secondary';
    stretched?: boolean;
    padding?: Padding;
    borderRadius?: BorderRadius;
}

interface NonInteractiveCard extends Card {
    interactive?: false;
    onClick?: (event: MouseEvent) => void;
}

interface InteractiveCard extends Card {
    interactive: true;
    onClick: (event: MouseEvent) => void;
}

export type CardProps = NonInteractiveCard | InteractiveCard

const props = withDefaults(defineProps<CardProps>(), {
    interactive: false,
    background: 'default',
    padding: 8,
    borderRadius: 8,
})
</script>

<template>
    <component :is="props.interactive ? 'button' : 'div'"
        :class="['card', props.background, { interactive: props.interactive, stretched: props.stretched }]"
        :style="{ padding: `${props.padding}px`, borderRadius: `${props.borderRadius}px` }" @click="onClick">
        <slot></slot>
    </component>
</template>

<style scoped>
.card {
    box-sizing: border-box;
    border: 1px solid hsl(var(--border));
    border-radius: 8px;
    padding: 12px;
    display: inline-block;
    font-family: 'Inter', Helvetica, system-ui, Avenir, Arial, sans-serif;
}

.default {
    background-color: transparent;
}

.secondary {
    background-color: hsl(var(--secondary));
}

.interactive {
    text-align: initial;
    transition: background-color 0.2s;
    cursor: pointer;
}

.interactive:hover {
    background-color: hsl(var(--secondary));
}

.stretched {
    width: 100%;
}
</style>