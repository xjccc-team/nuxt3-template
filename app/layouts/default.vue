<template>
  <div class="container">
    <div class="content">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
  useHead({
    title: 'layout page'
  })
</script>
<style scoped></style>
