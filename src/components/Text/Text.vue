<script setup lang="ts">
import { computed } from 'vue';
import type { TextProps } from './types';
export type { TextProps, Typography } from './types';

const props = withDefaults(defineProps<TextProps>(), {
    Element: 'div',
    color: 'default',
    textAlign: 'inherit',
})

const styles = computed(() => {
    const clampStyles = props.clamp ? {
        '-webkit-line-clamp': props.clamp,
        'line-clamp': props.clamp
    } : {}

    return {
        ...clampStyles,
        textAlign: props.textAlign,
    }
})
</script>

<template>
    <component v-bind="$attrs" :is="props.Element" :class="[
        props.typography,
        props.color,
        {
            ellipsis,
            clamp,
            [`clamp-${clamp}`]: !!clamp
        }
    ]" :style="styles">
        <slot></slot>
    </component>
</template>

<style scoped>
.default {
    color: hsl(var(--foreground));
}

.secondary {
    color: hsl(var(--muted-foreground));
}

.negative {
    color: hsl(var(--negative));
}

.inherit {
    color: inherit;
}

.ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.clamp {
    display: -webkit-box;
    white-space: normal;
    -webkit-box-orient: vertical;
}

.inherit {
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: inherit;
}

.title-1 {
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.4px;
}

.title-2 {
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.4px;
}

.title-3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: -0.5px;
}

.title-4 {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.6px;
}

.title-5 {
    font-size: 32px;
    font-weight: 600;
    line-height: 36px;
    letter-spacing: -0.8px;
}

.title-6 {
    font-size: 36px;
    font-weight: 600;
    line-height: 40px;
    letter-spacing: -1px;
}

.title-7 {
    font-size: 48px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -1.5px;
}

.title-8 {
    font-size: 64px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -2px;
}

.title-9 {
    font-size: 96px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -3px;
}

.title-10 {
    font-size: 132px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -4px;
}

.subtitle-1 {
    font-size: 36px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -1.5px;
}

.subtitle-2 {
    font-size: 22px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.6px;
}

.subtitle-3 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    letter-spacing: -0.4px;
}


.subtitle-4 {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.2px;
}

.paragraph-1 {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
}

.paragraph-2 {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
}

.label-1 {
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.4px;
}

.label-2 {
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: -0.2px;
}

.label-3 {
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: -0.2px;
}
</style>
