<template>
  <div
    class="container"
    style="color: red"
  >
    首页
    <div class="black-">black</div>
    <div class="black-0.9 text-line-2">black-0.9</div>
    <span class="black-0.8">black-0.8</span>
    <span class="black-0.7">black-0.7</span>
    <span class="black-0.6">black-0.6</span>
    <span class="black-0.5">black-0.5</span>
    <span class="black-0.4">black-0.4</span>
    <span class="black-0.3">black-0.3</span>
    <span class="black-0.2">black-0.2</span>
    <span class="black-0.1">black-0.1</span>
    <span class="black-0">black-0</span>
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
