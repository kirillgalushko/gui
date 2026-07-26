<script setup lang="ts">
import { inject } from "vue";
import Text from "../Text/Text.vue";
import { attachmentContextKey } from "./context";

const attachment = inject(attachmentContextKey, null);
</script>

<template>
  <Text
    :class="[
      'attachment-description',
      attachment?.orientation.value,
      attachment?.size.value,
    ]"
    color="secondary"
    ellipsis
  >
    <slot></slot>
  </Text>
</template>

<style scoped>
.attachment-description {
  font-size: 14px;
  line-height: 18px;
}

.attachment-description.large {
  font-size: 14px;
  line-height: 20px;
}

.attachment-description.small {
  font-size: 12px;
  line-height: 16px;
}

.attachment-description.extra-small {
  font-size: 11px;
  line-height: 14px;
}

.attachment-description.vertical {
  font-size: 14px;
  line-height: 20px;
}

.attachment-description.vertical.large {
  font-size: 16px;
  line-height: 22px;
}

.attachment-description.vertical.small {
  font-size: 12px;
  line-height: 16px;
}

.attachment-description.vertical.extra-small {
  font-size: 11px;
  line-height: 14px;
}
</style>
