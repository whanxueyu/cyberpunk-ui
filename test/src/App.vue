<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark({
  storageKey: 'useDarkKEY',
  // 暗黑class名字
  valueDark: 'dark',
  // 高亮class名字
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)
const sectionList = [
  {
    title: '按钮样式'
  },
  {
    title: '按钮大小'
  },
  {
    title: '霓虹按钮'
  },
  {
    title: '按钮样式'
  },
]
</script>

<template>
  <div class="main">
    <cp-full-page :sectionList="sectionList">
      <div class="section">
        <div class="header">
          <cp-reflectbutton type="primary" bg size="small" @click="toggleDark()">切换</cp-reflectbutton>
        </div>
        <div class="title">按钮样式</div>
        <div class="content">
          <div>
            <cp-text content="cp-text"></cp-text>
          </div>
          <div style="font-size: 48px;font-weight: bold;color:#33f8ff;">
            <!-- 设置颜色不生效 -->
            <cp-shadow-text shadowColor="#33f8ff" type="left">shadowleft</cp-shadow-text>
            <cp-shadow-text shadowColor="#ff5588" type="right">shadow-right</cp-shadow-text>
          </div>
          <div>
            <cp-glow-text color="#3355ff">cp-glow-text</cp-glow-text>
          </div>
          <div>
            <cp-typing>CpTyping 1239945646 这是一段打字效果</cp-typing>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="title">故障按钮</div>
        <div class="content">
          <div class="panel">
            <span class="subtitle">large</span>
            <cp-button type="primary" size="large" content="PRIMARY">PRIMARY</cp-button>
            <cp-button type="success" size="large" content="SUCCESS">SUCCESS</cp-button>
            <cp-button type="warning" size="large" content="WARNING">WARNING</cp-button>
            <cp-button type="danger" size="large" content="DANGER">DANGER</cp-button>
          </div>
          <div class="panel">
            <span class="subtitle">default</span>
            <cp-button type="primary" size="default" content="PRIMARY">PRIMARY</cp-button>
            <cp-button type="success" size="default" content="SUCCESS">SUCCESS</cp-button>
            <cp-button type="warning" size="default" content="WARNING">WARNING</cp-button>
            <cp-button type="danger" size="default" content="DANGER">DANGER</cp-button>
          </div>
          <div class="panel">
            <span class="subtitle">small</span>
            <cp-button type="primary" size="small" content="PRIMARY">PRIMARY</cp-button>
            <cp-button type="success" size="small" content="SUCCESS">SUCCESS</cp-button>
            <cp-button type="warning" size="small" content="WARNING">WARNING</cp-button>
            <cp-button type="danger" size="small" content="DANGER">DANGER</cp-button>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="title">霓虹按钮</div>
        <div class="content">
          <div class="panel">
            <span class="subtitle">大小</span>
            <cp-nenobutton type="primary" size="large">PRIMARY</cp-nenobutton>
            <cp-nenobutton type="primary" size="default">PRIMARY</cp-nenobutton>
            <cp-nenobutton type="primary" size="small">PRIMARY</cp-nenobutton>
          </div>
          <div class="panel">
            <span class="subtitle">类型</span>
            <cp-nenobutton type="primary" size="default">PRIMARY</cp-nenobutton>
            <cp-nenobutton type="success" size="default">SUCCESS</cp-nenobutton>
            <cp-nenobutton type="warning" size="default">WARNING</cp-nenobutton>
            <cp-nenobutton type="danger" size="default">DANGER</cp-nenobutton>
          </div>
          <div class="panel">
            <span class="subtitle">有无背景</span>
            <cp-nenobutton type="primary" size="small">PRIMARY</cp-nenobutton>
            <cp-nenobutton type="primary" size="small" bg>PRIMARY</cp-nenobutton>
            <cp-nenobutton type="success" size="small">SUCCESS</cp-nenobutton>
            <cp-nenobutton type="success" size="small" bg>SUCCESS</cp-nenobutton>
            <cp-nenobutton type="warning" size="small">WARNING</cp-nenobutton>
            <cp-nenobutton type="warning" size="small" bg>WARNING</cp-nenobutton>
            <cp-nenobutton type="danger" size="small">DANGER</cp-nenobutton>
            <cp-nenobutton type="danger" size="small" bg>DANGER</cp-nenobutton>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="title">反光按钮</div>
        <div class="content">
          <div class="panel reflect1">
            <span class="subtitle">大小</span>
            <cp-reflectbutton type="primary" size="large">PRIMARY</cp-reflectbutton>
            <cp-reflectbutton type="primary" size="default">PRIMARY</cp-reflectbutton>
            <cp-reflectbutton type="primary" size="small">PRIMARY</cp-reflectbutton>
          </div>
          <div class="panel reflect2">
            <span class="subtitle">类型</span>
            <cp-reflectbutton type="primary" size="default">PRIMARY</cp-reflectbutton>
            <cp-reflectbutton type="success" size="default">SUCCESS</cp-reflectbutton>
            <cp-reflectbutton type="warning" size="default">WARNING</cp-reflectbutton>
            <cp-reflectbutton type="danger" size="default">DANGER</cp-reflectbutton>
          </div>
          <div class="panel reflect3">
            <span class="subtitle">有无背景</span>
            <cp-reflectbutton type="primary" size="small">PRIMARY</cp-reflectbutton>
            <cp-reflectbutton type="primary" size="small" bg>PRIMARY</cp-reflectbutton>
            <cp-reflectbutton type="success" size="small">SUCCESS</cp-reflectbutton>
            <cp-reflectbutton type="success" size="small" bg>SUCCESS</cp-reflectbutton>
            <cp-reflectbutton type="warning" size="small">WARNING</cp-reflectbutton>
            <cp-reflectbutton type="warning" size="small" bg>WARNING</cp-reflectbutton>
            <cp-reflectbutton type="danger" size="small">DANGER</cp-reflectbutton>
            <cp-reflectbutton type="danger" size="small" bg>DANGER</cp-reflectbutton>
          </div>
        </div>
      </div>
    </cp-full-page>
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;

  .header {
    height: 60px;
  }
}

.section {
  display: flex;
  width: 100vw;
  height: 100vh;
  border: 1px solid #ccc;
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
