---
title: FullPage
lang: en-US
---
# FullPage 全屏滚动

不依赖任何第三方插件，滚动不会修改页面路由，可设置滚动时间，延迟时间

## 示例

<div style="width: 100%; height: 500px;">
    <cyber-full-page :items="sectionItems" :showTitle="showTitle" @toNext="toNext" @toLast="toLast" @change="changePage" :position="dotPosition">
        <div class="section" style="width: 100%; height: 500px;background: #368f8fff;">
        section1
        </div>
        <div class="section" style="width: 100%; height: 500px;background: #a14161ff;">
        section2
        </div>
        <div class="section" style="width: 100%; height: 500px;background: #a3a342ff;">
        section3
        </div>
        <div class="section" style="width: 100%; height: 500px;background: #46a146ff;">
        section4
        </div>
    </cyber-full-page>
</div>
<div style="padding: 20px;">
    <div>显示标题</div>
    <cyber-neon-toggle v-model="showTitle" />
</div>
<div style="padding: 20px;">
    <div>全屏指示点位置</div>
    <cyber-nenobutton bg type="primary" @click="changePosition('top')"> 上 ↑</cyber-nenobutton>
    <cyber-nenobutton bg type="success" @click="changePosition('bottom')"> 下 ↓</cyber-nenobutton>
    <cyber-nenobutton bg type="danger" @click="changePosition('left')"> 左 ←</cyber-nenobutton>
    <cyber-nenobutton bg type="warning"  @click="changePosition('right')"> 右 →</cyber-nenobutton>
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
const showTitle = ref(true)
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
const sectionItems = [
  {
    title: 'section1'
  },
  {
    title: 'section2'
  },
  {
    title: 'section3'
  },
  {
    title: 'section4'
  }
]
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
    <cyber-full-page :items="sectionItems" :showTitle="showTitle" @toNext="toNext" @toLast="toLast" @change="changePage" :position="dotPosition">
        <div class="section" style="width: 100%; height: 500px;background: #368f8fff;">
        section1
        </div>
        <div class="section" style="width: 100%; height: 500px;background: #a14161ff;">
        section2
        </div>
        <div class="section" style="width: 100%; height: 500px;background: #a3a342ff;">
        section3
        </div>
        <div class="section" style="width: 100%; height: 500px;background: #46a146ff;">
        section4
        </div>
    </cyber-full-page>
  </div>
  <div style="padding: 20px;">
      <div>显示标题</div>
      <cyber-neon-toggle v-model="showTitle" />
  </div>
  <div style="padding: 20px;">
      <div>全屏指示点位置</div>
      <cyber-nenobutton bg type="primary" @click="changePosition('top')"> 上 ↑</cyber-nenobutton>
      <cyber-nenobutton bg type="success" @click="changePosition('bottom')"> 下 ↓</cyber-nenobutton>
      <cyber-nenobutton bg type="danger" @click="changePosition('left')"> 左 ←</cyber-nenobutton>
      <cyber-nenobutton bg type="warning"  @click="changePosition('right')"> 右 →</cyber-nenobutton>
  </div>
  <div style="padding: 20px;">
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
const showTitle = ref(true)
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
const sectionItems = [
  {
    title: 'section1'
  },
  {
    title: 'section2'
  },
  {
    title: 'section3'
  },
  {
    title: 'section4'
  }
]
</script>
```


## 参数说明

| 名称        | 说明             | 类型              | 可选值     | 默认值     |
| ----------- |:-----------------| -----------------|-----------|-----------|
| position    | 指示器位置     | `string`| `top、bottom、left、right`| `right`|
| items    | 页面标题对象数组     | `Array`| -| `[{ title: '标题1' }]`|
| showTitle    | 是否显示标题     | `boolean`| -| `true`|

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 页面切换时触发 | 滚动距离 |
| toNext | 滚动至下一个页面时触发 | 当前页面索引 |
| toLast | 滚动至上一个页面时触发 | 当前页面索引 |