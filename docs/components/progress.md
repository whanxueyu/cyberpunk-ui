---
title: Progress
lang: zh-CN
---

# Progress 进度条

赛博朋克风格的进度条组件，支持多种主题和百分比显示位置。

## 基本用法

<cyber-progress :percentage="50" />

```vue
<template>
  <cyber-progress :percentage="50" />
</template>
```

## 主题

组件支持四种赛博朋克主题：`neon`、`hologram`、`terminal`、`matrix`

<cyber-progress :percentage="60" theme="neon" />
<cyber-progress :percentage="60" theme="hologram" />
<cyber-progress :percentage="60" theme="terminal" />
<cyber-progress :percentage="60" theme="matrix" />

```vue
<template>
  <cyber-progress :percentage="60" theme="neon" />
  <cyber-progress :percentage="60" theme="hologram" />
  <cyber-progress :percentage="60" theme="terminal" />
  <cyber-progress :percentage="60" theme="matrix" />
</template>
```

## 百分比显示位置

支持在进度条内部或外部显示百分比

<cyber-progress :percentage="75" :show-percentage="true" percentage-position="inside" />
<cyber-progress :percentage="75" :show-percentage="true" percentage-position="outside" />

```vue
<template>
  <cyber-progress :percentage="75" percentage-position="inside" />
  <cyber-progress :percentage="75" percentage-position="outside" />
</template>
```

## 隐藏百分比

<cyber-progress :percentage="80" :show-percentage="false" />

```vue
<template>
  <cyber-progress :percentage="80" :show-percentage="false" />
</template>
```

## 禁用动画

<cyber-progress :percentage="65" :animated="false" />

```vue
<template>
  <cyber-progress :percentage="65" :animated="false" />
</template>
```

## 显示状态指示器

<cyber-progress :percentage="45" :show-status="true" />
<cyber-progress :percentage="85" :show-status="true" />

```vue
<template>
  <cyber-progress :percentage="45" :show-status="true" />
  <cyber-progress :percentage="85" :show-status="true" />
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| percentage | 进度百分比 | number | 0-100 | 0 |
| theme | 主题样式 | string | `neon` / `hologram` / `terminal` / `matrix` | `neon` |
| animated | 是否显示动画 | boolean | - | `true` |
| showPercentage | 是否显示百分比 | boolean | - | `true` |
| percentagePosition | 百分比显示位置 | string | `inside` / `outside` | `outside` |
| showStatus | 是否显示状态指示器 | boolean | - | `false` |

## 状态文本

组件会根据进度自动显示状态文本：
- 0-29%: INITIALIZING
- 30-59%: PROCESSING
- 60-89%: LOADING
- 90-99%: ALMOST
- 100%: COMPLETE
