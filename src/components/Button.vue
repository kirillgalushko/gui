<script setup lang="ts">
import { defineProps } from 'vue';

export interface ButtonProps {
    mode: 'default' | 'accent',
}

const props = defineProps<ButtonProps>()

</script>

<template>
    <button v-bind="$attrs" :class="['button', props.mode]">
        <slot></slot>
    </button>
</template>

<style scoped>
.button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #303030;
    color: white;
    border: none;
    border-radius: 5px;
}

.button.accent {
    background-color: #FF5722;
}
</style>