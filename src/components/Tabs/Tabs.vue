<script setup lang="ts">
import { provide, ref, onMounted, onBeforeUnmount, watchEffect } from 'vue';
import useTabs from './useTabs';

export interface TabsProps {
  value: string
  onChange: (value: string) => void;
  stretched?: boolean;
}

const sliderAnimationDisabled = ref<boolean>(true);
const props = defineProps<TabsProps>()
const handleChange = (value: string) => {
  sliderAnimationDisabled.value = false
  props.onChange(value)
}
const tabs = useTabs(props.value, handleChange);
provide('tabs', tabs)
provide('stretched', props.stretched)

const resizeObserver = ref<ResizeObserver | null>(null);

const sliderStyle = ref({
  width: '0px',
  transform: 'translateX(0px)',
});

const updateSliderStyle = () => {
  const selectedTab = tabs.selectedTab.value;
  if (selectedTab) {
    sliderStyle.value = {
      width: `${selectedTab.offsetWidth}px`,
      transform: `translateX(${selectedTab.offsetLeft}px)`,
    };
  }
};

watchEffect(() => {
  updateSliderStyle();
});

onMounted(() => {
  updateSliderStyle();
  resizeObserver.value = new ResizeObserver(updateSliderStyle);
  tabs.tabs.value.forEach(tab => {
    resizeObserver.value?.observe(tab);
  });
});

onBeforeUnmount(() => {
  resizeObserver.value?.disconnect();
});
</script>

<template>
  <div :class="['tabs', { stretched: props.stretched, }]">
    <div :class="['slider', { animated: !sliderAnimationDisabled }]" :style="sliderStyle"></div>
    <slot></slot>
  </div>
</template>

<style scoped>
.tabs {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: hsl(var(--muted));
  color: hsl(var(--muted-foreground));
  border-radius: 8px;
  padding: 4px;
  position: relative;
  box-sizing: border-box;
}

.stretched {
  width: 100%;
}

.slider {
  position: absolute;
  bottom: 4px;
  left: 0;
  top: 4px;
  border-radius: 6px;
  background-color: hsl(var(--background));
  z-index: 0;
}

.animated {
  transition: transform 0.3s ease, width 0.3s ease;
}
</style>