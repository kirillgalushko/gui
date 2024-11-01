import { inject, provide, ref } from "vue";
import { useFloating, flip, shift } from '@floating-ui/vue';

export const useHoverMenu = () => {
  const onMenuShown = inject('hover-submenu-shown', ref());
  const onMenuHidden = inject('hover-submenu-hidden', ref());
  const isVisible = ref(false);
  const isSubmenuVisible = ref(false);
  const targetRef = ref<HTMLElement | null>(null);
  const floatingRef = ref<HTMLElement | null>(null);
  const timeout = ref<ReturnType<typeof setTimeout>>();
  const middleware = ref([flip(), shift()]);
  const { floatingStyles, update } = useFloating(targetRef, floatingRef, {
    placement: 'right-start',
    middleware,
  });

  const showHoverMenu = (event?: MouseEvent) => {
    clearTimeout(timeout.value);
    event?.preventDefault();
    isVisible.value = true;
    onMenuShown.value?.()
    update();
  }

  const hideMenu = () => {
    timeout.value = setTimeout(() => {
      isVisible.value = false;
      onMenuHidden.value?.();
    }, 100);
  };

  const submenuShown = () => {
    isSubmenuVisible.value = true
  }

  const submenuHidden = () => {
    isSubmenuVisible.value = false
  }

  provide('hover-submenu-shown', ref(submenuShown))
  provide('hover-submenu-hidden', ref(submenuHidden))
  return { floatingStyles, floatingRef, targetRef, isVisible, isSubmenuVisible, hideMenu, showHoverMenu }
}