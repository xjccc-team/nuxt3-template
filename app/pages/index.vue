<template>
  <div
    class="container"
    style="color: red"
  >
    首页
  </div>
</template>
<script setup lang="ts">
  const a = ref(0)
</script>
<style scoped>
  .ccss {
    color: red;
  }
  a {
    top: calc(1px + 2px);
  }

  :deep(.a) {
    color: yellow;
  }
  .a {
    color: red;
  }

  text * {
    font-size: var(100%);
  }

  .bg {
    --uno: 'bg-[url(theme(STATIC)/tfs/TB1.rjJQFXXXXXKXpXXXXXXXXXX-200-200.png)]';
  }
</style>
