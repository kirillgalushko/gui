import { ref } from "vue"

interface ConfirmOptions {
  title?: string
  description?: string
  confirmButtonText?: string
  cancelButtonText?: string
}

export const useConfirm = () => {
  const title = ref<string>();
  const description = ref<string>();
  const confirmButtonText = ref<string>();
  const cancelButtonText = ref<string>();
  const isOpened = ref(false);
  const resolveRef = ref();
  const rejectRef = ref();

  const handleClose = (callback: (value?: unknown) => void) => () => {
    isOpened.value = false
    callback();
  }

  const confirm = (options?: ConfirmOptions) => {
    title.value = options?.title
    description.value = options?.description
    confirmButtonText.value = options?.confirmButtonText || 'Подтвердить'
    cancelButtonText.value = options?.cancelButtonText || 'Отменить'
    isOpened.value = true 

    return new Promise((resolve, reject) => {
      resolveRef.value = handleClose(resolve)
      rejectRef.value = handleClose(reject)
    })
  }

  return { 
    title,
    description,
    confirm,
    isOpened,
    resolve: resolveRef,
    reject: rejectRef,
    confirmButtonText,
    cancelButtonText,
  }
}