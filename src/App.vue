<script setup lang="ts">
import Button from './components/Button/Button.vue'

const onClick = (event: MouseEvent) => {
  console.log(event)
}

</script>

<template>
  <Button mode="accent" @click="onClick">Test button</Button>
</template>
