---
title: ShadowText 阴影文字
lang: zh-CN
---

# ShadowText 阴影文字

3D立体阴影效果文字组件，可以自定义阴影方向、颜色和长度。

## 基本用法

<cyber-shadow-text>Shadow Text</cyber-shadow-text>

```vue
<template>
  <cyber-shadow-text>Shadow Text</cyber-shadow-text>
</template>
```

## 阴影方向

支持两种阴影方向：`left`（左，默认）、`right`（右）

<div style="font-size: 36px; font-weight: bold; line-height: 1.5">
  <cyber-shadow-text shadowColor="#33a6f9" direction="left" :long="15">左侧阴影</cyber-shadow-text>
  <br />
  <cyber-shadow-text shadowColor="#ff5555" direction="right" :long="15">右侧阴影</cyber-shadow-text>
</div>

```vue
<template>
  <cyber-shadow-text shadowColor="#33a6f9" direction="left" :long="15">左侧阴影</cyber-shadow-text>
  <cyber-shadow-text shadowColor="#ff5555" direction="right" :long="15">右侧阴影</cyber-shadow-text>
</template>
```

## 阴影长度

可以通过 `long` 属性控制阴影的长度（层数）

<div style="font-size: 36px; font-weight: bold; line-height: 1.8">
  <cyber-shadow-text shadowColor="#33a6f9" direction="left" :long="5">short-5</cyber-shadow-text>
  <br />
  <cyber-shadow-text shadowColor="#33a89f" direction="left" :long="10">medium-10</cyber-shadow-text>
  <br />
  <cyber-shadow-text shadowColor="#ff5588" direction="left" :long="20">long-20</cyber-shadow-text>
</div>

```vue
<template>
  <cyber-shadow-text shadowColor="#33a6f9" :long="5">short-5</cyber-shadow-text>
  <cyber-shadow-text shadowColor="#33a89f" :long="10">medium-10</cyber-shadow-text>
  <cyber-shadow-text shadowColor="#ff5588" :long="20">long-20</cyber-shadow-text>
</template>
```

## 自定义阴影颜色

可以通过 `shadowColor` 属性自定义阴影颜色

<div style="font-size: 36px; font-weight: bold; line-height: 1.5">
  <cyber-shadow-text shadowColor="#33a6f9" :long="15">蓝色阴影</cyber-shadow-text>
  <br />
  <cyber-shadow-text shadowColor="#ff5555" :long="15">红色阴影</cyber-shadow-text>
  <br />
  <cyber-shadow-text shadowColor="#22c55e" :long="15">绿色阴影</cyber-shadow-text>
  <br />
  <cyber-shadow-text shadowColor="#a855f7" :long="15">紫色阴影</cyber-shadow-text>
</div>

```vue
<template>
  <cyber-shadow-text shadowColor="#33a6f9" :long="15">蓝色阴影</cyber-shadow-text>
  <cyber-shadow-text shadowColor="#ff5555" :long="15">红色阴影</cyber-shadow-text>
  <cyber-shadow-text shadowColor="#22c55e" :long="15">绿色阴影</cyber-shadow-text>
  <cyber-shadow-text shadowColor="#a855f7" :long="15">紫色阴影</cyber-shadow-text>
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| shadowColor | 阴影颜色 | string | - | `#ae0ed68c` |
| direction | 阴影方向 | string | `left` / `right` | `left` |
| long | 阴影长度（层数） | number | - | `20` |

## 使用建议

- 建议搭配较大的字体尺寸使用，效果更佳
- 可以配合 `font-weight: bold` 增强立体效果
- 支持传入 slot 自定义内容
