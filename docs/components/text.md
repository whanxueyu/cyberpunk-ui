---
title: Text 故障文字
lang: zh-CN
---

# Text 故障文字

赛博朋克风格的故障艺术效果文字组件，具有扫描线动画效果。

## 基本用法

<cyber-text>CyberPunkUI</cyber-text>

```vue
<template>
  <cyber-text>CyberPunkUI</cyber-text>
</template>
```

## 自定义扫描线颜色

可以通过 `lineColor` 属性自定义扫描线颜色

<cyber-text lineColor="#111">黑色扫描线</cyber-text>
<br />
<cyber-text lineColor="#f30">红色扫描线</cyber-text>
<br />
<cyber-text lineColor="#00ff00">绿色扫描线</cyber-text>

```vue
<template>
  <cyber-text lineColor="#111">黑色扫描线</cyber-text>
  <cyber-text lineColor="#f30">红色扫描线</cyber-text>
  <cyber-text lineColor="#00ff00">绿色扫描线</cyber-text>
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| lineColor | 扫描线颜色 | string | - | `#00e6f6` |
