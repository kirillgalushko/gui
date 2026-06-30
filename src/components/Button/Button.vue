<script setup lang="ts">
import Loader from '../Loader/Loader.vue';

export interface ButtonProps {
    mode?: 'default' | 'contrast' | 'ghost' | 'outline' | 'negative' | 'accent',
    size?: 'extra-small' | 'small' | 'medium' | 'large';
    stretched?: boolean;
    squared?: boolean;
    rounded?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), { mode: 'default', size: 'large' })
</script>

<template>
    <button v-bind="$attrs" :disabled="props.disabled" :class="['button', props.mode, props.size, {
        'stretched': props.stretched,
        'squared': props.squared,
        'rounded': props.rounded,
        'with-loader': props.isLoading,
        'disabled': props.disabled,
    }]">
        <slot></slot>
        <div v-if="isLoading" class="button-loader">
            <Loader size="var(--button-loader-size)" />
        </div>
    </button>
</template>

<style scoped>
.button {
    --button-bg: hsl(var(--secondary));
    --button-text: hsl(var(--secondary-foreground));
    --button-outline: hsl(var(--ring));
    --button-height: 40px;
    --button-padding: 8px 16px;
    --button-font-size: 14px;
    --button-line-height: 20px;
    --button-squared-font-size: 16px;
    --button-loader-size: 18px;
    --button-radius: 10px;

    background-color: var(--button-bg);
    color: var(--button-text);
    padding: var(--button-padding);
    font-size: var(--button-font-size);
    cursor: pointer;
    border: none;
    border-radius: var(--button-radius);
    box-sizing: border-box;
    font-weight: 500;
    line-height: var(--button-line-height);
    transition: background-color 0.2s, color 0.2s, scale 0.2s, width 0.2s;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-wrap: nowrap;
    font-family: inherit;
    gap: var(--gap-1);
    height: var(--button-height);
    position: relative;
}

.extra-small {
    --button-height: 24px;
    --button-padding: 4px 8px;
    --button-font-size: 12px;
    --button-line-height: 16px;
    --button-squared-font-size: 14px;
    --button-loader-size: 12px;
    --button-radius: 8px;
}

.small {
    --button-height: 32px;
    --button-padding: 6px 12px;
    --button-font-size: 13px;
    --button-line-height: 18px;
    --button-squared-font-size: 16px;
    --button-loader-size: 14px;
    --button-radius: 8px;
}

.medium {
    --button-height: 36px;
    --button-padding: 8px 14px;
    --button-font-size: 14px;
    --button-line-height: 20px;
    --button-squared-font-size: 20px;
    --button-loader-size: 16px;
    --button-radius: 10px;
}

.large {
    --button-height: 40px;
    --button-padding: 8px 16px;
    --button-font-size: 14px;
    --button-line-height: 20px;
    --button-squared-font-size: 20px;
    --button-loader-size: 18px;
    --button-radius: 10px;
}

.squared {
    padding: 0;
    min-width: var(--button-height);
    width: var(--button-height);
    font-size: var(--button-squared-font-size);
}

.rounded {
    border-radius: 999px;
}

.disabled {
    background-color: color-mix(in oklab, var(--button-bg) 80%, transparent);
    color: hsl(var(--muted-foreground));
    cursor: not-allowed;
}

.button:hover:not(.disabled) {
    background-color: color-mix(in oklab, var(--button-bg) 80%, transparent);
}

.button:active:not(.disabled) {
    scale: 0.96;
}

.button:focus-visible {
    outline: 2px solid var(--button-outline);
    outline-offset: -2px;
}

.button.contrast {
    --button-bg: hsl(var(--primary));
    --button-text: hsl(var(--primary-foreground));
    --button-outline: hsl(var(--muted-foreground));
}

.button.negative {
    --button-text: hsl(var(--negative));
    --button-bg: color-mix(in oklab, hsl(var(--negative)) 20%, transparent);
    --button-outline: hsl(var(--negative));
}

.button.accent {
    --button-bg: hsl(var(--accent));
    --button-text: hsl(0 0% 98%);
    --button-outline: hsl(var(--accent));
}

.button.ghost {
    background-color: transparent;
}

.button.ghost:hover:not(.disabled) {
    background-color: color-mix(in oklab, var(--button-bg) 80%, transparent);
}

.button.outline {
    --button-text: hsl(var(--contrast-foreground));
    --button-outline: hsl(var(--contrast));
    background-color: transparent;
    border: 1px solid var(--button-outline);
}

.button.outline:hover:not(.disabled) {
    background-color: var(--button-outline);
}


.button.outline.disabled {
    border-color: color-mix(in oklab, var(--button-outline) 80%, transparent);
}

.button.stretched {
    width: 100%;
}

.with-loader {
    color: transparent;
    cursor: progress;
}

.button-loader {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--button-text);
    font-size: var(--button-loader-size);
}
</style>
