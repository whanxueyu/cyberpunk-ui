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
import headVue from './header.vue';
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

    .page-aside {
      width: 240px;
      height: 100%;
      border-right: 1px solid #333;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
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
