<template>
    <div class="main">
        <div class="header">
            <head-vue @changePosition="changePosition" @changeShow="changeShow"></head-vue>
        </div>
        <div class="page">
            <div class="page-content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import headVue from './header.vue';
const emits = defineEmits(["changePosition","changeShow"])
const changePosition = (position: string) => {
    emits("changePosition",position)
}
const changeShow = (value: boolean) => {
    emits("changeShow",value)
}
</script>
<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;

  .header {
    height: 60px;
    box-shadow: 0 0 5px #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .page {
    height: calc(100vh - 60px);
    display: flex;

    .page-aside {
      width: 200px;
      height: 100%;
      border-right: 1px solid #ccc;
      color: cyan;
      font-size: 40px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    .page-content {
      width: calc(100%);
      height: 100%;
    }
  }
}
</style>
