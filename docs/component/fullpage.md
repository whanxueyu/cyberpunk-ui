---
title: FullPage
lang: en-US
---
# FullPage 全屏滚动
不依赖任何第三方插件，滚动不会修改页面路由，可设置滚动时间，延迟时间
    <div style="width: 100%; height: 500px;">
        <cp-full-page :pageNum="4" @toNext="toNext" @toLast="toLast" @change="changePage" :position="dotPosition">
            <div class="section" style="width: 100%; height: 500px;background: #9ff;">
            section1
            </div>
            <div class="section" style="width: 100%; height: 500px;background: #f69;">
            section2
            </div>
            <div class="section" style="width: 100%; height: 500px;background: #ff9;">
            section3
            </div>
            <div class="section" style="width: 100%; height: 500px;background: #9f9;">
            section4
            </div>
        </cp-full-page>
    </div>
    <div style="padding: 20px;">
        <div>全屏指示点位置</div>
        <cp-nenobutton bg type="primary" @click="changePosition('top')"> 上 ↑</cp-nenobutton>
        <cp-nenobutton bg type="success" @click="changePosition('bottom')"> 下 ↓</cp-nenobutton>
        <cp-nenobutton bg type="danger" @click="changePosition('left')"> 左 ←</cp-nenobutton>
        <cp-nenobutton bg type="warning"  @click="changePosition('right')"> 右 →</cp-nenobutton>
    </div>
    <div style="padding: 60px;">
        <div>滚动距离:{{scrollDistance}}</div>
        <div>滚动方向:{{scrollDirection}}</div>
        <div>当前index：{{pageIndex}}</div>
        <div>指示点位置：{{dotPosition}}</div>
    </div>
<script lang="ts" setup>
import { ref } from 'vue'
const pageIndex = ref(0)
const scrollDistance = ref(0)
const scrollDirection = ref('')
const toNext = (index: number) => {
  pageIndex.value = index;
  scrollDirection.value = 'next'
}
const toLast = (index: number) => {
  pageIndex.value = index;
  scrollDirection.value = 'last'
}
const changePage = (scroll: number) => {
  scrollDistance.value = scroll;
}
const dotPosition = ref('right')
const changePosition = (position: string) => {
  dotPosition.value = position
}
</script>

<style scoped>
.section {
  line-height: 500px;
  font-size: 50px;
  text-align: center;
}
</style>
```vue
<template>
    <div style="width: 100%; height: 500px;">
        <cp-full-page :pageNum="4" @toNext="toNext" @toLast="toLast" @change="changePage" :position="dotPosition">
            <div class="section" style="width: 100%; height: 500px;background: #9ff;">
            section1
            </div>
            <div class="section" style="width: 100%; height: 500px;background: #f69;">
            section2
            </div>
            <div class="section" style="width: 100%; height: 500px;background: #ff9;">
            section3
            </div>
            <div class="section" style="width: 100%; height: 500px;background: #9f9;">
            section4
            </div>
        </cp-full-page>
    </div>
    <div style="padding: 20px;">
        <div>全屏指示点位置</div>
        <cp-nenobutton bg type="primary" @click="changePosition('top')"> 上 ↑</cp-nenobutton>
        <cp-nenobutton bg type="success" @click="changePosition('bottom')"> 下 ↓</cp-nenobutton>
        <cp-nenobutton bg type="danger" @click="changePosition('left')"> 左 ←</cp-nenobutton>
        <cp-nenobutton bg type="warning"  @click="changePosition('right')"> 右 →</cp-nenobutton>
    </div>
    <div style="padding: 60px;">
        <div>滚动距离:{{scrollDistance}}</div>
        <div>滚动方向:{{scrollDirection}}</div>
        <div>当前index：{{pageIndex}}</div>
        <div>指示点位置：{{dotPosition}}</div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const pageIndex = ref(0)
const scrollDistance = ref(0)
const scrollDirection = ref('')
const toNext = (index: number) => {
  pageIndex.value = index;
  scrollDirection.value = 'next'
}
const toLast = (index: number) => {
  pageIndex.value = index;
  scrollDirection.value = 'last'
}
const changePage = (scroll: number) => {
  scrollDistance.value = scroll;
}
const dotPosition = ref('right')
const changePosition = (position: string) => {
  dotPosition.value = position
}
</script>

<style scoped>
.section {
  line-height: 500px;
  font-size: 50px;
  text-align: center;
}
```

## 参数说明

| 名称        | 说明             | 类型              | 默认值     |
| ----------- |:-----------------| -----------------|-----------|
| dots        | 控制按钮-菜单     | `'array'`        | ``default``|
| duration    | 滚动持续时间 | `'number'`         | ``300ms``|
| delay       | 延迟时间       | `'number'`       | ``100ms``  |