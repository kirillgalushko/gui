<script setup lang="ts">
export interface ButtonProps {
    mode: 'default' | 'accent',
    stretched?: boolean;
}

const props = defineProps<ButtonProps>()

</script>

<template>
    <button v-bind="$attrs" :class="['button', props.mode, { 'stretched': props.stretched }]">
        <slot></slot>
    </button>
</template>

<style scoped>
.button {
    padding: 8px 16px;
    font-size: 14px;
    cursor: pointer;
    background-color: hsl(var(--secondary));
    color: hsl(var(--secondary-foreground));
    border: none;
    border-radius: 6px;
    box-sizing: border-box;
    font-weight: 500;
    line-height: 20px;
    transition: background-color 0.2s, color 0.2s, scale 0.2s;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-wrap: nowrap;
    font-family: inherit;
}

.button:hover {
    background-color: hsl(var(--secondary) / .8);
}

.button:active {
    scale: 0.97;
}

.button:focus-visible {
    outline: 2px solid hsl(var(--ring));
    outline-offset: 2px;
}

.button.accent {
    background-color: hsl(var(--primary));
    color: hsl(var(--primary-foreground));
}

.button.stretched {
    width: 100%;
}
</style>