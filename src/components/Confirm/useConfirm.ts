import { ref } from "vue";

export type ConfirmResult = "confirm" | "secondary";

export interface ConfirmOptions {
  title?: string;
  description?: string;
  confirmButtonText?: string;
  secondaryButtonText?: string;
  cancelButtonText?: string;
}

export const useConfirm = () => {
  const title = ref<string>();
  const description = ref<string>();
  const confirmButtonText = ref<string>();
  const secondaryButtonText = ref<string>();
  const cancelButtonText = ref<string>();
  const isOpened = ref(false);
  const resolveRef = ref();
  const secondaryRef = ref();
  const rejectRef = ref();

  const handleClose = (callback: (value?: unknown) => void) => () => {
    isOpened.value = false;
    callback();
  };

  const confirm = (options?: ConfirmOptions) => {
    title.value = options?.title;
    description.value = options?.description;
    confirmButtonText.value = options?.confirmButtonText || "Подтвердить";
    secondaryButtonText.value = options?.secondaryButtonText;
    cancelButtonText.value = options?.cancelButtonText || "Отменить";
    isOpened.value = true;

    return new Promise<ConfirmResult>((resolve, reject) => {
      resolveRef.value = handleClose(() => resolve("confirm"));
      secondaryRef.value = handleClose(() => resolve("secondary"));
      rejectRef.value = handleClose(reject);
    });
  };

  return {
    title,
    description,
    confirm,
    isOpened,
    resolve: resolveRef,
    secondary: secondaryRef,
    reject: rejectRef,
    confirmButtonText,
    secondaryButtonText,
    cancelButtonText,
  };
};
