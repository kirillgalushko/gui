<script setup lang="ts">
import { provide, ref, watchEffect } from 'vue';
import useTabs from './useTabs';
import { useResize } from '../../hooks/useResize';

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

const tabsElementRef = ref()


const sliderStyle = ref({
  width: '0px',
  transform: 'translateX(0px)',
});

const updateSliderStyle = () => {
  console.log('updateSliderStyle')
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

// onMounted(() => {
//   updateSliderStyle();
//   resizeObserver.value = new ResizeObserver(updateSliderStyle);
//   mutationObserver.value = new MutationObserver(updateSliderStyle);
//   console.log('tabs.tabs.value', tabs.tabs.value)
//   tabs.tabs.value.forEach(tab => {
//     console.log('tab', tab)
//     resizeObserver.value?.observe(tab);
//     mutationObserver.value?.observe(tab, {
//       childList: true,
//       subtree: true
//     });
//   });
// });

// onBeforeUnmount(() => {
//   resizeObserver.value?.disconnect();
//   mutationObserver.value?.disconnect();
// });

useResize(tabsElementRef, updateSliderStyle)
</script>

<template>
  <div ref="tabsElementRef" :class="['tabs', { stretched: props.stretched, }]">
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
  min-height: 40px;
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