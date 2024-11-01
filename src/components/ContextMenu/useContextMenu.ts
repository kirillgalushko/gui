import { onBeforeUnmount, onMounted, ref } from "vue";
import { useFloating, flip, shift } from '@floating-ui/vue';

export const useContextMenu = () => {
  const isContextMenuVisible = ref(false);
  const position = ref({ x: 0, y: 0 });
  const targetRef = ref<HTMLElement | null>(null);
  const positionRef = ref<HTMLElement | null>(null);
  const floatingRef = ref(null);
  const middleware = ref([flip(), shift()]);
  const { floatingStyles, update } = useFloating(positionRef, floatingRef, {
    placement: 'right-start',
    strategy: 'fixed',
    middleware,
  });

  const showContextMenu = (event: MouseEvent) => {
    event.preventDefault();
    position.value = { x: event.clientX, y: event.clientY };
    isContextMenuVisible.value = true;
    update();
  }

  const hideContextMenu = () => {
    isContextMenuVisible.value = false;
  }

  onMounted(() => {
    if (targetRef.value) {
      targetRef.value.addEventListener('contextmenu', showContextMenu);
      document.addEventListener('click', hideContextMenu);
    }
  })

  onBeforeUnmount(() => {
    if (targetRef.value) {
      targetRef.value.removeEventListener('contextmenu', showContextMenu);
    }
    document.removeEventListener('click', hideContextMenu);
  })

  return { contextMenuData: { floatingStyles, floatingRef, position, positionRef, isContextMenuVisible }, targetRef }
}