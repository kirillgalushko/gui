<template>
  <div :class="['SidebarList']">
    <slot></slot>
  </div>
</template>

<style scoped>
.SidebarList {
  display: flex;
  flex-direction: column;
}
</style>