<template>
  <div :class="['dropdown-list']">
    <slot></slot>
  </div>
</template>

<style scoped>
.dropdown-list {
  display: flex;
  flex-direction: column;
}
</style>