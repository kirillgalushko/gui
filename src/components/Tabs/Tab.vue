<script setup lang="ts">
import { onMounted, inject, ref } from 'vue';
import useTabs from './useTabs';

export interface TabProps {
  name: string;
}

const props = defineProps<TabProps>()
const tabRef = ref<HTMLDivElement>()
const tabsData = inject<ReturnType<typeof useTabs>>('tabs')
const stretched = inject<boolean>('stretched')
const { registerTab, selectTab, selectedTab } = tabsData || {}

const handleSelectTab = () => {
  if (tabRef.value) {
    selectTab?.(tabRef.value);
  }
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    handleSelectTab()
  }
};

onMounted(() => {
  if (tabRef.value) {
    registerTab?.(tabRef.value)
  }
})
</script>

<template>
  <div ref="tabRef" tabindex="0" @keydown="handleKeydown" @click="handleSelectTab" :data-name="props.name"
    :class="['tab', { stretched, selected: selectedTab === tabRef }]">
    <slot></slot>
  </div>
</template>

<style scoped>
.tab {
  display: flex;
  align-items: center;
  justify-content: center;
  appearance: button;
  border-radius: var(--tabs-tab-radius, 8px);
  background-color: transparent;
  padding: var(--tabs-tab-padding, 8px 16px);
  height: calc(var(--tabs-height, 40px) - var(--tabs-padding, 4px) * 2);
  font-weight: 500;
  font-size: var(--tabs-font-size, 14px);
  line-height: var(--tabs-line-height, 20px);
  cursor: pointer;
  color: hsl(var(--muted-foreground));
  user-select: none;
  z-index: 1;
  transition: all 0.15s;
  text-align: center;
  position: relative;
  box-sizing: border-box;
}

.stretched {
  width: 100%;
}

.tab:hover,
.tab:focus-visible {
  color: hsl(var(--foreground));
  outline: 0;
}

.tab:active {
  scale: 0.96;
}

.selected {
  color: hsl(var(--foreground));
}
</style>
