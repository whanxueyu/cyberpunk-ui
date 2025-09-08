<script setup lang="ts">
import { ref } from 'vue';
import layout from './layout/layout.vue';
import buttonPanel from './conponents/button.vue'
import textPanel from './conponents/text.vue'
console.log(
  '%c %s',
  'border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)',
  'CyberPunk-UI'
);
const toNext = (index: number) => {
  console.log(index)
}
const toLast = (index: number) => {
  console.log(index)
}
const changePage = (scroll: number) => {
  console.log(scroll)
}
const dotPosition = ref('right')
const changePosition = (position: string) => {
  dotPosition.value = position
}
</script>

<template>
  <layout @changePosition="changePosition">
    <CyberFullPage :pageNum="4" @toNext="toNext" @toLast="toLast" @change="changePage" :position="dotPosition"
      :offset="60">
      <div class="section">
        <div class="title">文字样式</div>
        <textPanel></textPanel>
      </div>
      <div class="section">
        <div class="title">
          <div class="title_text">故障按钮</div>
          <div class="title_text">霓虹按钮</div>
          <div class="title_text">反光按钮</div>
        </div>
        <buttonPanel></buttonPanel>
      </div>
      <div class="section">
        <div class="title">霓虹按钮</div>
        <div class="content">

        </div>
      </div>
      <div class="section">
        <div class="title">反光按钮</div>
        <div class="content">

        </div>
      </div>
    </CyberFullPage>
  </layout>
</template>

<style scoped lang="scss">
.section {
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);
}

.title {
  min-width: 200px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .title_text {
    padding: 10px;
  }
}

.content {
  border-left: 1px solid #ccc;
  padding: 20px;
  text-align: left;
}

.panel {
  margin-bottom: 20px;

  &.reflect1 {
    height: 150px;
  }

  &.reflect2 {
    height: 100px;
  }

  &.reflect3 {
    height: 60px;
  }
}

.subtitle {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 20px;
}
</style>
