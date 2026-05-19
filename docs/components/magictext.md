---
title: MagicText 魔法文字
lang: zh-CN
---

# MagicText 魔法文字

具有炫彩渐变和高光扫描效果的魔法文字组件，文字表面会有流光溢彩的动画效果。

## 基本用法

<div style="display: flex; font-size: 36px; line-height: 50px">
  <cyber-magic-text>CyberMagicText</cyber-magic-text>
</div>

```vue
<template>
  <cyber-magic-text>CyberMagicText</cyber-magic-text>
</template>
```

## 不同尺寸

魔法文字支持多种字体尺寸

<div style="display: flex; font-size: 48px; line-height: 60px">
  <cyber-magic-text>CyberMagicText</cyber-magic-text>
</div>
<br />
<div style="display: flex; font-size: 36px; line-height: 50px">
  <cyber-magic-text>赛博朋克魔术文字</cyber-magic-text>
</div>
<br />
<div style="display: flex; font-size: 24px; line-height: 40px">
  <cyber-magic-text>CyberMagicText</cyber-magic-text>
  <cyber-magic-text>1234567890</cyber-magic-text>
</div>
<br />
<div style="display: flex; font-size: 18px; line-height: 30px">
  <cyber-magic-text>~!@#$%^&*()_+</cyber-magic-text>
  <cyber-magic-text>赛博朋克</cyber-magic-text>
</div>

```vue
<template>
  <div style="font-size: 48px">
    <cyber-magic-text>CyberMagicText</cyber-magic-text>
  </div>
  <div style="font-size: 36px">
    <cyber-magic-text>赛博朋克魔术文字</cyber-magic-text>
  </div>
  <div style="font-size: 24px">
    <cyber-magic-text>CyberMagicText</cyber-magic-text>
    <cyber-magic-text>1234567890</cyber-magic-text>
  </div>
  <div style="font-size: 18px">
    <cyber-magic-text>~!@#$%^&*()_+</cyber-magic-text>
    <cyber-magic-text>赛博朋克</cyber-magic-text>
  </div>
</template>
```

## 特殊字符支持

支持各种特殊字符和符号

<div style="display: flex; font-size: 32px; line-height: 50px">
  <cyber-magic-text>!@#$%^&*()</cyber-magic-text>
</div>
<br />
<div style="display: flex; font-size: 32px; line-height: 50px">
  <cyber-magic-text>+-*/\|{}[]</cyber-magic-text>
</div>

```vue
<template>
  <cyber-magic-text>!@#$%^&*()</cyber-magic-text>
  <cyber-magic-text>+-*/\|{}[]</cyber-magic-text>
</template>
```

## 属性

魔法文字组件目前没有额外的参数配置，直接通过 slot 传入文本内容即可。

## 动画效果

- 文字具有渐变色效果（粉色 → 蓝色 → 金色）
- 表面有圆形高光扫描动画
- 高光每 20 秒循环一次
- 文字边缘带有描边效果

## 使用建议

- 适合用于标题、重要提示等醒目位置
- 建议搭配深色背景使用，效果更佳
- 可以调整字体大小适应不同场景
- 中英文和特殊字符均支持良好
