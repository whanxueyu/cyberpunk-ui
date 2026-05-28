---
title: Scrollbar 滚动条
lang: zh-CN
---

# Scrollbar 滚动条

赛博朋克风格的自定义滚动条组件，边角凌厉、不圆滑，完全替代浏览器原生滚动条。支持垂直和水平双向滚动，提供拖拽、滚轮（含横向）、点击轨道跳转三种操作方式。横向内容可直接通过鼠标滚轮滚动，无需拖拽滑块。

## 基本用法

用 `<cyber-scrollbar>` 包裹需要滚动的内容，设置 `height` 限制可视高度。

<cyber-scrollbar height="200px">
  <div style="padding: 16px 24px; white-space: nowrap;">
    <p v-for="i in 12" :key="i" style="margin: 0 0 10px 0; color: #ccc; font-family: Consolas, monospace;">
      [{{ String(i).padStart(2, '0') }}] SYSTEM:// 日志条目 {{ i }} — 子系统运行正常，量子通讯延迟 12ms，护盾能量 98%
    </p>
  </div>
</cyber-scrollbar>

```vue
<template>
  <cyber-scrollbar height="200px">
    <div style="padding: 16px;">
      <p v-for="i in 12" :key="i">
        [{{ i }}] 日志条目内容...
      </p>
    </div>
  </cyber-scrollbar>
</template>
```

## 横向滚动

内容宽度超出容器时，自动显示横向滚动条。

<cyber-scrollbar height="120px">
  <div style="display: flex; gap: 12px; padding: 16px; width: max-content;">
    <div v-for="i in 8" :key="i"
      style="flex-shrink: 0; width: 180px; height: 80px; background: rgba(0,230,246,0.08); border: 1px solid rgba(0,230,246,0.25); display: flex; align-items: center; justify-content: center; font-family: Consolas, monospace; color: #00e6f6;">
      NODE-{{ String(i).padStart(2, '0') }}
    </div>
  </div>
</cyber-scrollbar>

```vue
<template>
  <cyber-scrollbar height="120px">
    <div style="display: flex; gap: 12px;">
      <div v-for="i in 8" :key="i" class="card">
        NODE-{{ i }}
      </div>
    </div>
  </cyber-scrollbar>
</template>
```

## 主题切换

通过 `theme` 属性切换滑块主题色，支持 `primary` / `success` / `warning` / `danger` / `info`。

<cyber-scrollbar height="150px" theme="success" style="margin-bottom: 12px;">
  <p v-for="i in 8" :key="i" style="margin: 0 0 8px 0; padding: 0 16px; color: #aaa;">Success 主题 · 条目 {{ i }}</p>
</cyber-scrollbar>
<cyber-scrollbar height="150px" theme="danger">
  <p v-for="i in 8" :key="i" style="margin: 0 0 8px 0; padding: 0 16px; color: #aaa;">Danger 主题 · 条目 {{ i }}</p>
</cyber-scrollbar>

```vue
<template>
  <cyber-scrollbar height="150px" theme="success">
    <p v-for="i in 8" :key="i">Success 主题 · 条目 {{ i }}</p>
  </cyber-scrollbar>
  <cyber-scrollbar height="150px" theme="danger">
    <p v-for="i in 8" :key="i">Danger 主题 · 条目 {{ i }}</p>
  </cyber-scrollbar>
</template>
```

## 尺寸

`size` 属性控制滑块粗细，可选 `small` / `default` / `large`。

<cyber-scrollbar height="120px" size="small" style="margin-bottom: 12px;">
  <p v-for="i in 10" :key="i" style="margin: 0 0 6px 0; padding: 0 16px; color: #aaa;">small 尺寸 · 行 {{ i }}</p>
</cyber-scrollbar>
<cyber-scrollbar height="120px" size="large">
  <p v-for="i in 10" :key="i" style="margin: 0 0 6px 0; padding: 0 16px; color: #aaa;">large 尺寸 · 行 {{ i }}</p>
</cyber-scrollbar>

```vue
<template>
  <cyber-scrollbar height="120px" size="small">...</cyber-scrollbar>
  <cyber-scrollbar height="120px" size="large">...</cyber-scrollbar>
</template>
```

## 始终显示

设置 `always` 让滑块始终可见（默认仅 hover 时高亮）。

<cyber-scrollbar height="120px" :always="true">
  <p v-for="i in 10" :key="i" style="margin: 0 0 6px 0; padding: 0 16px; color: #aaa;">始终显示滚动条 · 条目 {{ i }}</p>
</cyber-scrollbar>

```vue
<template>
  <cyber-scrollbar height="120px" :always="true">
    <p v-for="i in 10" :key="i">始终显示 · 条目 {{ i }}</p>
  </cyber-scrollbar>
</template>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `height` | `string \| number` | `''` | 容器高度，不设置则继承父级高度 |
| `max-height` | `string \| number` | `''` | 容器最大高度 |
| `theme` | `string` | `'primary'` | 滑块主题色：`primary` / `success` / `warning` / `danger` / `info` |
| `size` | `string` | `'default'` | 滑块尺寸：`small` / `default` / `large` |
| `always` | `boolean` | `false` | 是否始终高亮显示滑块 |

## 方法

| 方法 | 说明 |
| --- | --- |
| `update()` | 内容变化后手动刷新滚动条状态 |
| `scrollToY(y)` | 滚动到指定垂直位置 |
| `scrollToX(x)` | 滚动到指定水平位置 |
