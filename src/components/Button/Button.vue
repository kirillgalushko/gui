<script setup lang="ts">
export interface ButtonProps {
    mode: 'default' | 'accent' | 'ghost',
    stretched?: boolean;
    squared?: boolean;
}

const props = defineProps<ButtonProps>()

</script>

<template>
    <button v-bind="$attrs" :class="['button', props.mode, { 'stretched': props.stretched, 'squared': props.squared }]">
        <slot></slot>
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
}

.squared {
    padding: 0;
    width: 40px;
    font-size: 16px;
}

.button:hover {
    background-color: hsl(var(--button-bg) / .8);
}

.button:active {
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

.button.ghost:hover {
    background-color: hsl(var(--button-bg) / .8);
}

.button.stretched {
    width: 100%;
}
</style>