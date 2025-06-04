# GlitchImage 故障风格图片

故障风格图片组件提供了具有数字干扰和视觉冲击力的图像展示，适合在赛博朋克风格界面中展示图片内容。

## 基本用法

```vue
<template>
  <cp-glitch-image src="/path/to/image.jpg" alt="图片描述" />
</template>
```

## 不同故障类型

```vue
<template>
  <cp-glitch-image src="/path/to/image.jpg" glitch-type="rgb-shift" />
  <cp-glitch-image src="/path/to/image.jpg" glitch-type="scanline" />
  <cp-glitch-image src="/path/to/image.jpg" glitch-type="pixelate" />
  <cp-glitch-image src="/path/to/image.jpg" glitch-type="noise" />
  <cp-glitch-image src="/path/to/image.jpg" glitch-type="combined" />
</template>
```

## 故障强度

```vue
<template>
  <cp-glitch-image src="/path/to/image.jpg" :intensity="3" />
  <cp-glitch-image src="/path/to/image.jpg" :intensity="7" />
  <cp-glitch-image src="/path/to/image.jpg" :intensity="10" />
</template>
```

## 动画效果

```vue
<template>
  <cp-glitch-image src="/path/to/image.jpg" :animated="true" />
</template>
```

## 触发模式

```vue
<template>
  <cp-glitch-image src="/path/to/image.jpg" trigger-mode="hover" />
  <cp-glitch-image src="/path/to/image.jpg" trigger-mode="click" />
  <cp-glitch-image src="/path/to/image.jpg" trigger-mode="auto" />
  <cp-glitch-image src="/path/to/image.jpg" trigger-mode="random" />
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| src | 图片源 | string | — | — |
| alt | 图片描述 | string | — | Glitch image |
| glitchType | 故障类型 | string | rgb-shift / scanline / pixelate / noise / combined | rgb-shift |
| intensity | 故障强度 | number | 1-10 | 5 |
| animated | 是否启用动画 | boolean | — | false |
| triggerMode | 触发模式 | string | hover / click / auto / random | hover |
| interval | 故障效果间隔（毫秒） | number | — | 1000 |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| glitch-start | 故障效果开始时触发 | — |
| glitch-end | 故障效果结束时触发 | — |
