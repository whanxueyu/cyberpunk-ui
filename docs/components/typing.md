---
title: Typing 打字效果
lang: zh-CN
---

# Typing 打字效果

赛博朋克风格的打字机效果文字组件，文字会逐字显示并带有光标闪烁效果。

## 基本用法

<cyber-typing>这是一个打字效果的文字</cyber-typing>

```vue
<template>
  <cyber-typing>这是一个打字效果的文字</cyber-typing>
</template>
```

## 不同内容示例

<cyber-typing>1234567890</cyber-typing>
<br />
<cyber-typing>Hello CyberPunk!</cyber-typing>
<br />
<cyber-typing>console.log('Hello World')</cyber-typing>

```vue
<template>
  <cyber-typing>1234567890</cyber-typing>
  <cyber-typing>Hello CyberPunk!</cyber-typing>
  <cyber-typing>console.log('Hello World')</cyber-typing>
</template>
```

## 属性

打字效果组件目前没有额外的参数配置，直接通过 slot 传入文本内容即可。

## 动画说明

- 文字会从左到右逐字显示
- 右侧带有闪烁的光标效果
- 动画总时长约 8 秒
- 使用等宽字体（Consolas, Monaco, monospace）显示
- 文字加粗显示

## 使用建议

- 适合用于展示代码片段、命令行文本
- 建议配合黑色或深色背景使用
- 文本长度不宜过长，以免影响动画效果
