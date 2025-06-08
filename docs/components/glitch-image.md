# GlitchImage 故障风格图片

故障风格图片组件提供了具有数字干扰和视觉冲击力的图像展示，适合在赛博朋克风格界面中展示图片内容。

## 基本用法

<cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="图片描述" />

```vue
<template>
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="图片描述" />
</template>
```
<!-- const urls = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
] -->
## 不同故障类型

<cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" glitch-type="rgb-shift" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" glitch-type="scanline" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" glitch-type="pixelate" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" glitch-type="noise" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" glitch-type="combined" />

```vue
<template>
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" glitch-type="rgb-shift" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" glitch-type="scanline" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" glitch-type="pixelate" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" glitch-type="noise" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" glitch-type="combined" />
</template>
```

## 故障强度

<cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :intensity="3" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :intensity="7" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :intensity="10" />

```vue
<template>
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :intensity="3" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :intensity="7" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :intensity="10" />
</template>
```

## 动画效果

<cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :animated="true" />

```vue
<template>
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :animated="true" />
</template>
```

## 触发模式

<cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" trigger-mode="hover" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" trigger-mode="click" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" trigger-mode="auto" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" trigger-mode="random" />

```vue
<template>
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" trigger-mode="hover" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" trigger-mode="click" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" trigger-mode="auto" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" trigger-mode="random" />
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
