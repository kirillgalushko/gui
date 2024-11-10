<script setup lang="ts">
import { computed } from 'vue';

export type Typography =
    'title-1' |
    'title-2' |
    'title-3' |
    'title-4' |
    'subtitle-1' |
    'subtitle-2' |
    'subtitle-3' |
    'subtitle-4' |
    'label-1' |
    'label-2' |
    'label-3' |
    'paragraph-1' |
    'paragraph-2'

export interface TextProps {
    Element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
    typography?: Typography,
    clamp?: 2 | 3 | 4,
    ellipsis?: boolean,
    color?: 'default' | 'inherit' | 'secondary'
}

const props = withDefaults(defineProps<TextProps>(), {
    Element: 'div',
    color: 'default',
})

const styles = computed(() => {
    const clampStyles = props.clamp ? {
        '-webkit-line-clamp': props.clamp,
        'line-clamp': props.clamp
    } : {}

    return {
        ...clampStyles,
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

.title-1 {
    font-size: 132px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -4px;
}

.title-2 {
    font-size: 64px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -2px;
}

.title-3 {
    font-size: 24px;
    font-weight: 600;
    line-height: 32px;
    letter-spacing: -0.6px;
}

.title-4 {
    font-size: 16px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.4px;
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
