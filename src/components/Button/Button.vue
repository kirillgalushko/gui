<script setup lang="ts">
import Loader from '../Loader/Loader.vue';

export interface ButtonProps {
    mode?: 'default' | 'accent' | 'ghost',
    stretched?: boolean;
    squared?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
}

const props = withDefaults(defineProps<ButtonProps>(), { mode: 'default' })
</script>

<template>
    <button v-bind="$attrs" :disabled="props.disabled" :class="['button', props.mode, {
        'stretched': props.stretched,
        'squared': props.squared,
        'with-loader': props.isLoading,
        'disabled': props.disabled,
    }]">
        <slot></slot>
        <div v-if="isLoading" class="button-loader">
            <Loader />
        </div>
    </button>
</template>

<style scoped>
.button {
    --button-bg: var(--secondary);
    --button-text: var(--secondary-foreground);

    background-color: hsl(var(--button-bg));
    color: hsl(var(--button-text));
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    border-radius: 6px;
    box-sizing: border-box;
    font-weight: 500;
    line-height: 20px;
    transition: background-color 0.2s, color 0.2s, scale 0.2s, width 0.2s;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-wrap: nowrap;
    font-family: inherit;
    gap: var(--gap-1);
    height: 40px;
    position: relative;
}

.squared {
    padding: 0;
    min-width: 40px;
    width: 40px;
    font-size: 16px;
}

.disabled {
    background-color: hsl(var(--button-bg) / .8);
    color: hsl(var(--muted-foreground));
    cursor: not-allowed;
}

.button:hover:not(.disabled) {
    background-color: hsl(var(--button-bg) / .8);
}

.button:active:not(.disabled) {
    scale: 0.96;
}

.button:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
}

.button.accent {
    --button-bg: var(--primary);
    --button-text: var(--primary-foreground);
}

.button.ghost {
    background-color: transparent;
}

.button.ghost:hover:not(.disabled) {
    background-color: hsl(var(--button-bg) / .8);
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
    color: hsl(var(--button-text));
    font-size: 18px;
}
</style>