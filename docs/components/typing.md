---
title: Typing 打字效果
lang: zh-CN
---

# Typing 打字效果

赛博朋克风格的打字机效果文字组件，通过 JS 驱动实现真正的逐字打字动画，支持循环、调速、自定义光标等。

## 基本用法

通过 `text` 属性传入文字内容，组件会自动逐字显示。

<cyber-typing text="这是一个打字效果的文字" />

```vue
<template>
  <cyber-typing text="这是一个打字效果的文字" />
</template>
```

## 调速与延迟

通过 `speed` 控制打字速度（毫秒/每字），`delay` 控制开始前的等待时间。

<cyber-typing text="快速打字效果" :speed="40" />
<br />
<cyber-typing text="慢速打字效果" :speed="200" :delay="1000" />

```vue
<template>
  <!-- 快速打字：40ms/字 -->
  <cyber-typing text="快速打字效果" :speed="40" />

  <!-- 慢速打字：200ms/字，延迟1秒开始 -->
  <cyber-typing text="慢速打字效果" :speed="200" :delay="1000" />
</template>
```

## 循环打字

设置 `loop` 属性可以让文字在打完一遍后自动擦除并重新打。

<cyber-typing text="循环打字效果展示..." :loop="true" :speed="60" />

```vue
<template>
  <cyber-typing text="循环打字效果展示..." :loop="true" :speed="60" />
</template>
```

## 隐藏光标

设置 `:cursor="false"` 可以隐藏光标，`cursor-color` 自定义光标颜色。

<cyber-typing text="无光标打字" :cursor="false" />
<br />
<cyber-typing text="红色光标" cursor-color="#ef4444" />

```vue
<template>
  <cyber-typing text="无光标打字" :cursor="false" />
  <cyber-typing text="红色光标" cursor-color="#ef4444" />
</template>
```

## 代码片段展示

等宽字体 + 打字效果，非常适合展示命令行和代码。

<cyber-typing text="> npm install cyberpunk-ui" :speed="40" />
<br />
<cyber-typing text="> pnpm run dev" :speed="40" :delay="1500" />

```vue
<template>
  <cyber-typing text="> npm install cyberpunk-ui" :speed="40" />
  <cyber-typing text="> pnpm run dev" :speed="40" :delay="1500" />
</template>
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `text` | `string` | `''` | 要打印的文字内容 |
| `speed` | `number` | `80` | 打字速度，单位 ms/字 |
| `delay` | `number` | `500` | 开始打字前的延迟，单位 ms |
| `loop` | `boolean` | `false` | 是否循环打字 |
| `loop-delay` | `number` | `2000` | 循环模式下，打完到开始擦除的等待时间 |
| `cursor` | `boolean` | `true` | 是否显示光标 |
| `cursor-color` | `string` | `#00e6f6` | 光标颜色 |

## 事件

| 事件名 | 说明 |
| --- | --- |
| `finish` | 每次打字完成时触发（循环模式下每次打完都会触发） |

## 使用建议

- 适合展示命令行输出、代码片段、终端文本
- 建议配合深色背景使用以获得最佳视觉效果
- 通过 `speed` 控制打字节奏，终端风格建议 40-60ms
- `loop` 模式适合展示多词条轮播，常用于 Banner 区域
