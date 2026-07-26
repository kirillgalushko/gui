<script setup lang="ts">
import { inject } from "vue";
import Text from "../Text/Text.vue";
import { attachmentContextKey } from "./context";

const attachment = inject(attachmentContextKey, null);
</script>

<template>
  <Text
    :class="[
      'attachment-title',
      attachment?.orientation.value,
      attachment?.size.value,
    ]"
    typography="label-2"
    ellipsis
  >
    <slot></slot>
  </Text>
</template>

<style scoped>
.attachment-title {
  font-size: 14px;
  line-height: 16px;
}

.attachment-title.large {
  font-size: 16px;
  line-height: 20px;
}

.attachment-title.small {
  font-size: 13px;
  line-height: 16px;
}

.attachment-title.extra-small {
  font-size: 12px;
  line-height: 14px;
}

.attachment-title.vertical {
  font-size: 16px;
  line-height: 20px;
}

.attachment-title.vertical.large {
  font-size: 18px;
  line-height: 24px;
}

.attachment-title.vertical.small {
  font-size: 14px;
  line-height: 18px;
}

.attachment-title.vertical.extra-small {
  font-size: 12px;
  line-height: 14px;
}
</style>
