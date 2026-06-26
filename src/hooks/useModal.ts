import { ref } from "vue";

export const useModal = (initialVisible = false) => {
  const visible = ref(initialVisible);

  const show = () => {
    visible.value = true;
  };

  const close = () => {
    visible.value = false;
  };

  return { show, close, visible };
};
