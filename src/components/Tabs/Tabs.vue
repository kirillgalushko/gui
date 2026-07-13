<script setup lang="ts">
import { provide, ref, watchEffect } from "vue";
import useTabs from "./useTabs";
import { useResize } from "../../hooks/useResize";
import type { ComponentSize } from "../../types";

export interface TabsProps {
  value: string;
  onChange: (value: string) => void;
  size?: ComponentSize;
  stretched?: boolean;
}

const sliderAnimationDisabled = ref<boolean>(true);
const props = withDefaults(defineProps<TabsProps>(), {
  size: "large",
});
const handleChange = (value: string) => {
  sliderAnimationDisabled.value = false;
  props.onChange(value);
};
const tabs = useTabs(props.value, handleChange);
provide("tabs", tabs);
provide("stretched", props.stretched);

const tabsElementRef = ref();

const sliderStyle = ref({
  width: "0px",
  transform: "translateX(0px)",
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

useResize(tabsElementRef, updateSliderStyle);
</script>

<template>
  <div
    ref="tabsElementRef"
    :class="['tabs', props.size, { stretched: props.stretched }]"
  >
    <div
      :class="['slider', { animated: !sliderAnimationDisabled }]"
      :style="sliderStyle"
    ></div>
    <slot></slot>
  </div>
</template>

<style scoped>
.tabs {
  --tabs-height: 40px;
  --tabs-padding: 4px;
  --tabs-font-size: 14px;
  --tabs-line-height: 20px;
  --tabs-tab-padding: 8px 16px;
  --tabs-radius: 10px;
  --tabs-tab-radius: 8px;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: hsl(var(--input));
  color: hsl(var(--primary));
  border-radius: var(--tabs-radius);
  padding: var(--tabs-padding);
  position: relative;
  box-sizing: border-box;
  height: var(--tabs-height);
}

.extra-small {
  --tabs-height: 24px;
  --tabs-padding: 2px;
  --tabs-tab-padding: 4px 8px;
  --tabs-font-size: 12px;
  --tabs-line-height: 16px;
  --tabs-radius: 8px;
  --tabs-tab-radius: 6px;
}

.small {
  --tabs-height: 32px;
  --tabs-padding: 3px;
  --tabs-tab-padding: 6px 12px;
  --tabs-font-size: 13px;
  --tabs-line-height: 18px;
  --tabs-radius: 8px;
  --tabs-tab-radius: 6px;
}

.medium {
  --tabs-height: 36px;
  --tabs-padding: 4px;
  --tabs-tab-padding: 8px 14px;
  --tabs-font-size: 14px;
  --tabs-line-height: 20px;
  --tabs-radius: 10px;
  --tabs-tab-radius: 8px;
}

.large {
  --tabs-height: 40px;
  --tabs-padding: 4px;
  --tabs-tab-padding: 8px 16px;
  --tabs-font-size: 14px;
  --tabs-line-height: 20px;
  --tabs-radius: 10px;
  --tabs-tab-radius: 8px;
}

.stretched {
  width: 100%;
}

.slider {
  position: absolute;
  bottom: var(--tabs-padding);
  left: 0;
  top: var(--tabs-padding);
  border-radius: var(--tabs-tab-radius);
  background-color: hsl(var(--background));
  z-index: 0;
}

.animated {
  transition:
    transform 0.3s ease,
    width 0.3s ease;
}
</style>
