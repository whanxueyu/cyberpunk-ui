---
title: GlowText 发光文字
lang: zh-CN
---

# GlowText 发光文字

霓虹发光效果文字组件，鼠标悬停时会产生强烈的霓虹光晕效果。

## 基本用法

<cyber-glow-text>CyberGlowText</cyber-glow-text>

```vue
<template>
  <cyber-glow-text>CyberGlowText</cyber-glow-text>
</template>
```

## 自定义发光颜色

可以通过 `color` 属性自定义发光颜色

<cyber-glow-text color="#ff5588">粉色发光</cyber-glow-text>
<br />
<cyber-glow-text color="#00e6f6">青色发光</cyber-glow-text>
<br />
<cyber-glow-text color="#22c55e">绿色发光</cyber-glow-text>
<br />
<cyber-glow-text color="#a855f7">紫色发光</cyber-glow-text>

```vue
<template>
  <cyber-glow-text color="#ff5588">粉色发光</cyber-glow-text>
  <cyber-glow-text color="#00e6f6">青色发光</cyber-glow-text>
  <cyber-glow-text color="#22c55e">绿色发光</cyber-glow-text>
  <cyber-glow-text color="#a855f7">紫色发光</cyber-glow-text>
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| color | 发光颜色 | string | - | `#e91e84` |

## 交互效果

鼠标悬停在文字上时，会触发霓虹发光动画效果，文字颜色会变为白色并产生多层光晕。
