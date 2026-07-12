<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, ref, useAttrs, watch } from 'vue';
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/vue';
import Card from '../Card/Card.vue';

defineOptions({
  inheritAttrs: false,
});

export type HoverCardPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'

export interface HoverCardProps {
  open?: boolean;
  disabled?: boolean;
  placement?: HoverCardPlacement;
  openDelay?: number;
  closeDelay?: number;
  sideOffset?: number;
  updateKey?: string | number | boolean;
  contentClass?: string;
}

const props = withDefaults(defineProps<HoverCardProps>(), {
  open: undefined,
  disabled: false,
  placement: 'bottom-start',
  openDelay: 0,
  closeDelay: 100,
  sideOffset: 8,
  updateKey: undefined,
  contentClass: undefined,
});

const emit = defineEmits<{
  'update:open': [value: boolean];
}>();

const targetRef = ref<HTMLElement | null>(null);
const floatingRef = ref<HTMLElement | null>(null);
const localOpen = ref(false);
const timeout = ref<ReturnType<typeof setTimeout> | null>(null);
const attrs = useAttrs();

const isControlled = computed(() => props.open !== undefined);
const isOpen = computed(() => !props.disabled && (isControlled.value ? props.open === true : localOpen.value));
const middleware = computed(() => [offset(props.sideOffset), flip(), shift({ padding: 8 })]);

const { floatingStyles, update } = useFloating(targetRef, floatingRef, {
  placement: computed(() => props.placement),
  middleware,
  whileElementsMounted: autoUpdate,
});

const setOpen = (value: boolean) => {
  if (!isControlled.value) {
    localOpen.value = value;
  }

  emit('update:open', value);
};

const clearDelay = () => {
  if (timeout.value !== null) {
    clearTimeout(timeout.value);
    timeout.value = null;
  }
};

const openCard = () => {
  if (props.disabled) {
    return;
  }

  clearDelay();
  timeout.value = setTimeout(() => {
    setOpen(true);
    nextTick(update);
  }, props.openDelay);
};

const closeCard = () => {
  clearDelay();
  timeout.value = setTimeout(() => {
    setOpen(false);
  }, props.closeDelay);
};

watch(isOpen, (value) => {
  if (value) {
    nextTick(update);
  }
});

watch(() => props.updateKey, () => {
  if (isOpen.value) {
    nextTick(update);
  }
});

onBeforeUnmount(clearDelay);
</script>

<template>
  <div v-bind="attrs" ref="targetRef" class="hover-card__trigger" @focusin="openCard" @focusout="closeCard"
    @mouseenter="openCard" @mouseleave="closeCard">
    <slot></slot>
  </div>

  <Teleport to="body">
    <Transition name="hover-card-fade">
      <div v-if="isOpen" ref="floatingRef" class="hover-card" :style="floatingStyles" role="dialog"
        @mouseenter="openCard" @mouseleave="closeCard">
        <Card :class="['hover-card__content', props.contentClass]" :padding="0" :border-radius="8">
          <slot name="content"></slot>
        </Card>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.hover-card__trigger {
  display: inline-flex;
}

.hover-card {
  z-index: 50;
  width: max-content;
  max-width: calc(100vw - 16px);
  box-sizing: border-box;
  outline: none;
}

.hover-card__content {
  max-width: inherit;
  /* box-shadow: 0px 0px 30px 0px hsl(var(--border) / 0.16); */
}

.hover-card-fade-enter-active,
.hover-card-fade-leave-active {
  transition:
    opacity 160ms ease;
}

.hover-card-fade-enter-from,
.hover-card-fade-leave-to {
  opacity: 0;
}
</style>
