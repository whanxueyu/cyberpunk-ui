# GlitchProgress 故障进度条

故障进度条组件融合了故障艺术效果的进度指示器，适合在赛博朋克风格的界面中展示加载、上传、下载等进度。

## 基本用法

<cyber-glitch-progress :progress="50" />

```vue
<template>
  <cyber-glitch-progress :progress="50" />
</template>
```

## 不同方向

<cyber-glitch-progress :progress="50" direction="horizontal" />
<p><br /></p>
  <cyber-glitch-progress :progress="50" direction="vertical" />

```vue
<template>
  <cyber-glitch-progress :progress="50" direction="horizontal" />
  <cyber-glitch-progress :progress="50" direction="vertical" />
</template>
```

## 不确定状态

<cyber-glitch-progress indeterminate />

```vue
<template>
  <cyber-glitch-progress indeterminate />
</template>
```

## 自定义颜色

<cyber-glitch-progress :progress="50" color="#ff00ff" />

```vue
<template>
  <cyber-glitch-progress :progress="50" color="#ff00ff" />
</template>
```

## 故障强度

<cyber-glitch-progress :progress="50" :glitch-intensity="2" />
  <cyber-glitch-progress :progress="50" :glitch-intensity="5" />
  <cyber-glitch-progress :progress="50" :glitch-intensity="8" />

```vue
<template>
  <cyber-glitch-progress :progress="50" :glitch-intensity="2" />
  <cyber-glitch-progress :progress="50" :glitch-intensity="5" />
  <cyber-glitch-progress :progress="50" :glitch-intensity="8" />
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| progress | 进度值（百分比） | number | 0-100 | 0 |
| direction | 进度条方向 | string | horizontal / vertical | horizontal |
| glitchIntensity | 故障效果强度 | number | 1-10 | 5 |
| indeterminate | 是否为不确定状态 | boolean | — | false |
| color | 进度条颜色 | string | — | #00e6f6 |
| showText | 是否显示进度文本 | boolean | — | true |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 进度变化事件 | value: number |
