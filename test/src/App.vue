<script setup lang="ts">
import { ref } from 'vue';
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark({
  storageKey: 'useDarkKEY',
  // 暗黑class名字
  valueDark: 'dark',
  // 高亮class名字
  valueLight: 'light',
})
console.log(
  '%c %s',
  'border: 1px solid #97E3FE;border-radius: 3px;padding: 2px 5px;color: white;font-weight:bolder;background: linear-gradient(to right, #fF717F,#CC54D1,#4EAFFA,#3DE1C3, #F7DA66)',
  'CyberPunk-UI'
);
const toggleDark = useToggle(isDark)
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
  <div class="main">
    <div class="header">
      <cyber-nenobutton type="primary" bg size="small" @click="toggleDark()">切换</cyber-nenobutton>
      <cyber-nenobutton type="primary" @click="changePosition('top')"> 上 ↑</cyber-nenobutton>
      <cyber-nenobutton type="success" @click="changePosition('bottom')"> 下 ↓</cyber-nenobutton>
      <cyber-nenobutton type="danger" @click="changePosition('left')"> 左 ←</cyber-nenobutton>
      <cyber-nenobutton type="warning" @click="changePosition('right')"> 右 →</cyber-nenobutton>
    </div>
    <div class="page">
      <div class="page-aside"></div>
      <div class="page-content">
        <CyberFullPage :pageNum="4" @toNext="toNext" @toLast="toLast" @change="changePage" :position="dotPosition" :offset="60">
          <div class="section">
            <div class="title">文字样式</div>
            <div class="content">
              <div>
                <cyber-text lineColor="#000">drfghsrthrtjety6</cyber-text>
              </div>
              <div style="font-size: 48px;font-weight: bold;color:#99f8ff;">
                <!-- 设置颜色不生效 -->
                <cyber-shadow-text shadowColor="#33a6f9" direction="left" :long="20">shadow-left-long20</cyber-shadow-text>
                <cyber-shadow-text shadowColor="#33a89f" direction="left" :long="10">shadow-left-long10</cyber-shadow-text>
                <cyber-shadow-text shadowColor="#ff5555" direction="right" :long="10">shadow-right-long10</cyber-shadow-text>
                <cyber-shadow-text shadowColor="#ff5588" direction="right" :long="20">shadow-right-long20</cyber-shadow-text>
              </div>
              <div>
                <cyber-glow-text color="#3355ff">cp-glow-text</cyber-glow-text>
              </div>
              <div>
                <cyber-typing>CpTyping 1239945646 这是一段打字效果</cyber-typing>
              </div>
            </div>
          </div>
          <div class="section">
            <div class="title">故障按钮</div>
            <div class="content">
              <div class="panel">
                <span class="subtitle">large</span>
                <cyber-button type="primary" size="large" content="PRIMARY">PRIMARY</cyber-button>
                <cyber-button type="success" size="large" content="SUCCESS">SUCCESS</cyber-button>
                <cyber-button type="warning" size="large" content="WARNING">WARNING</cyber-button>
                <cyber-button type="danger" size="large" content="DANGER">DANGER</cyber-button>
              </div>
              <div class="panel">
                <span class="subtitle">default</span>
                <cyber-button type="primary" size="default" content="PRIMARY">PRIMARY</cyber-button>
                <cyber-button type="success" size="default" content="SUCCESS">SUCCESS</cyber-button>
                <cyber-button type="warning" size="default" content="WARNING">WARNING</cyber-button>
                <cyber-button type="danger" size="default" content="DANGER">DANGER</cyber-button>
              </div>
              <div class="panel">
                <span class="subtitle">small</span>
                <cyber-button type="primary" size="small" content="PRIMARY">PRIMARY</cyber-button>
                <cyber-button type="success" size="small" content="SUCCESS">SUCCESS</cyber-button>
                <cyber-button type="warning" size="small" content="WARNING">WARNING</cyber-button>
                <cyber-button type="danger" size="small" content="DANGER">DANGER</cyber-button>
              </div>
            </div>
          </div>
          <div class="section">
            <div class="title">霓虹按钮</div>
            <div class="content">
              <div class="panel">
                <span class="subtitle">大小</span>
                <cyber-nenobutton type="primary" size="large">PRIMARY</cyber-nenobutton>
                <cyber-nenobutton type="primary" size="default">PRIMARY</cyber-nenobutton>
                <cyber-nenobutton type="primary" size="small">PRIMARY</cyber-nenobutton>
              </div>
              <div class="panel">
                <span class="subtitle">类型</span>
                <cyber-nenobutton type="primary" size="default">PRIMARY</cyber-nenobutton>
                <cyber-nenobutton type="success" size="default">SUCCESS</cyber-nenobutton>
                <cyber-nenobutton type="warning" size="default">WARNING</cyber-nenobutton>
                <cyber-nenobutton type="danger" size="default">DANGER</cyber-nenobutton>
              </div>
              <div class="panel">
                <span class="subtitle">有无背景</span>
                <cyber-nenobutton type="primary" size="small">PRIMARY</cyber-nenobutton>
                <cyber-nenobutton type="primary" size="small" bg>PRIMARY</cyber-nenobutton>
                <cyber-nenobutton type="success" size="small">SUCCESS</cyber-nenobutton>
                <cyber-nenobutton type="success" size="small" bg>SUCCESS</cyber-nenobutton>
                <cyber-nenobutton type="warning" size="small">WARNING</cyber-nenobutton>
                <cyber-nenobutton type="warning" size="small" bg>WARNING</cyber-nenobutton>
                <cyber-nenobutton type="danger" size="small">DANGER</cyber-nenobutton>
                <cyber-nenobutton type="danger" size="small" bg>DANGER</cyber-nenobutton>
              </div>
            </div>
          </div>
          <div class="section">
            <div class="title">反光按钮</div>
            <div class="content">
              <div class="panel reflect1">
                <span class="subtitle">大小</span>
                <cyber-reflectbutton type="primary" size="large">PRIMARY</cyber-reflectbutton>
                <cyber-reflectbutton type="primary" size="default">PRIMARY</cyber-reflectbutton>
                <cyber-reflectbutton type="primary" size="small">PRIMARY</cyber-reflectbutton>
              </div>
              <div class="panel reflect2">
                <span class="subtitle">类型</span>
                <cyber-reflectbutton type="primary" size="default">PRIMARY</cyber-reflectbutton>
                <cyber-reflectbutton type="success" size="default">SUCCESS</cyber-reflectbutton>
                <cyber-reflectbutton type="warning" size="default">WARNING</cyber-reflectbutton>
                <cyber-reflectbutton type="danger" size="default">DANGER</cyber-reflectbutton>
              </div>
              <div class="panel reflect3">
                <span class="subtitle">有无背景</span>
                <cyber-reflectbutton type="primary" size="small">PRIMARY</cyber-reflectbutton>
                <cyber-reflectbutton type="primary" size="small" bg>PRIMARY</cyber-reflectbutton>
                <cyber-reflectbutton type="success" size="small">SUCCESS</cyber-reflectbutton>
                <cyber-reflectbutton type="success" size="small" bg>SUCCESS</cyber-reflectbutton>
                <cyber-reflectbutton type="warning" size="small">WARNING</cyber-reflectbutton>
                <cyber-reflectbutton type="warning" size="small" bg>WARNING</cyber-reflectbutton>
                <cyber-reflectbutton type="danger" size="small">DANGER</cyber-reflectbutton>
                <cyber-reflectbutton type="danger" size="small" bg>DANGER</cyber-reflectbutton>
              </div>
            </div>
          </div>
        </CyberFullPage>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;

  .header {
    height: 60px;
    box-shadow:0 0 5px #ccc ;
  }

  .page {
    height: calc(100vh - 60px);
    display: flex;

    .page-aside {
      width: 200px;
      height: 100%;
      border-right: 1px solid #ccc;
    }

    .page-content {
      width: calc(100% - 200px);
      height: 100%;
    }
  }
}

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
