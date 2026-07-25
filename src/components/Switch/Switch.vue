<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

export interface SwitchProps {
  disabled?: boolean;
  size?: "small" | "medium";
}

const props = withDefaults(defineProps<SwitchProps>(), {
  disabled: false,
  size: "medium",
});

const model = defineModel<boolean>({ default: false });
</script>

<template>
  <label :class="['switch', props.size, { disabled: props.disabled }]">
    <input
      v-bind="$attrs"
      v-model="model"
      class="switch-input"
      type="checkbox"
      role="switch"
      :disabled="props.disabled"
    />
    <span class="switch-track" aria-hidden="true">
      <span class="switch-thumb"></span>
    </span>
  </label>
</template>

<style scoped>
.switch {
  --switch-width: 36px;
  --switch-height: 20px;
  --switch-thumb-size: 16px;
  --switch-offset: 2px;

  position: relative;
  display: inline-flex;
  width: var(--switch-width);
  height: var(--switch-height);
  flex: 0 0 auto;
  cursor: pointer;
}

.switch.small {
  --switch-width: 32px;
  --switch-height: 18px;
  --switch-thumb-size: 14px;
}

.switch.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.switch-input {
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: inherit;
  opacity: 0;
}

.switch-track {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid hsl(var(--border));
  border-radius: 999px;
  background: hsl(var(--secondary));
  outline: 2px solid transparent;
  outline-offset: 2px;
  transition:
    background-color 0.18s ease,
    border-color 0.18s ease,
    outline-color 0.1s ease;
}

.switch-thumb {
  width: var(--switch-thumb-size);
  height: var(--switch-thumb-size);
  border-radius: 999px;
  background: hsl(var(--background));
  box-shadow: 0 1px 3px hsl(var(--foreground) / 0.2);
  transform: translateX(var(--switch-offset));
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}

.switch-input:checked + .switch-track {
  border-color: hsl(var(--primary));
  background: hsl(var(--primary));
}

.switch-input:checked + .switch-track .switch-thumb {
  transform: translateX(
    calc(
      var(--switch-width) - var(--switch-thumb-size) - var(--switch-offset) -
        2px
    )
  );
}

.switch-input:focus-visible + .switch-track {
  outline-color: hsl(var(--ring));
}

.switch-input[aria-invalid="true"] + .switch-track {
  border-color: hsl(var(--negative));
}
</style>
