<template>
  <div class="main">
    <div class="header">
      <head-vue />
    </div>
    <div class="page">
      <div class="page-aside">
        <slot name="aside"></slot>
      </div>
      <div class="page-content">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import headVue from "./header.vue";
</script>
<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .header {
    height: 60px;
    width: 100%;
    flex-shrink: 0;
    border-bottom: 1px solid #333;
  }

  .page {
    flex: 1;
    display: flex;
    overflow: hidden;
    ::-webkit-scrollbar {
      width: 8px; /* 垂直滚动条宽度 */
    }
    ::-webkit-scrollbar-track {
      background: #5353539d;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background: #858585;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #a0a0a0;
    }

    .page-aside {
      width: 240px;
      height: 100%;
      border-right: 1px solid #333;
      overflow-y: auto;
      // display: flex;
      // flex-direction: column;
    }

    .page-content {
      flex: 1;
      height: 100%;
      overflow-y: auto;
      padding: 30px;
      box-sizing: border-box;
    }
  }
}
</style>
