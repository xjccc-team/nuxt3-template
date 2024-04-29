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
<style lang="less" scoped>
  .ccss {
    color: red;
  }
  a {
    top: calc(1px + 2px);
  }

  .a::v-deep {
    color: yellow;
  }

  .a {
    color: red;
  }

  text * {
    font-size: var(100%);
  }

  .bg {
    background-color: url('https://img.alicdn.com/tfs/TB1.rjJQFXXXXXKXpXXXXXXXXXX-200-200.png');
  }
</style>
