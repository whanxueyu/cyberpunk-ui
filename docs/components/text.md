---
title: Text
lang: en-US
---
# text
故障效果文字、霓虹效果文字、3D效果文字
## 故障文字
这是一个最基础的按钮，也是最具代表性的，可以设置扫描线的颜色 `lineColor`
<cp-text>CyberPunkUI </cp-text>
<cp-text lineColor="#f30"> 这段文字的lineColor为红色“#ff3300”</cp-text>
```vue
<template>
    <cp-text>CyberPunkUI</cp-text>
    <cp-text lineColor="#f30">这段文字的lineColor为红色“#ff3300”</cp-text>
</template>
```

## 3D文字 
这是一个3D具有阴影效果的文字，可以设置阴影颜色 `shadowColor` 、方向 `direction` 以及阴影长度 `long`
<div style="font-size: 48px;font-weight: bold;line-height: 1.2">
    <cp-shadow-text shadowColor="#33a6f9" direction="left" :long="20">shadow-left-long20</cp-shadow-text>
    <cp-shadow-text shadowColor="#33a89f" direction="left" :long="10">shadow-left-long10</cp-shadow-text>
    <cp-shadow-text shadowColor="#ff5555" direction="right" :long="10">shadow-right-long10</cp-shadow-text>
    <cp-shadow-text shadowColor="#ff5588" direction="right" :long="20">shadow-right-long20</cp-shadow-text>
</div>

```vue
<template>
    <div style="font-size: 48px;font-weight: bold;line-height: 1.2">
        <cp-shadow-text shadowColor="#33a6f9" direction="left" :long="20">shadow-left-long20</cp-shadow-text>
        <cp-shadow-text shadowColor="#33a89f" direction="left" :long="10">shadow-left-long10</cp-shadow-text>
        <cp-shadow-text shadowColor="#ff5555" direction="right" :long="10">shadow-right-long10</cp-shadow-text>
        <cp-shadow-text shadowColor="#ff5588" direction="right" :long="20">shadow-right-long20</cp-shadow-text>
    </div>
</template>
```

## 霓虹文字
这是一个鼠标悬浮后有霓虹发光效果的文字，可以设置发光颜色 `color`
<cp-glow-text color="#ff5588">cp-glow-text</cp-glow-text>
```vue
<template>
    <cp-glow-text color="#ff5588">cp-glow-text</cp-glow-text>
</template>
```