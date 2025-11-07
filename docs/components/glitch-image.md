# GlitchImage 故障风格图片

故障风格图片组件提供了具有数字干扰和视觉冲击力的图像展示，适合在赛博朋克风格界面中展示图片内容。

## 基本用法

<cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="图片描述" />

```vue
<template>
  <cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" alt="图片描述" />
</template>
```
## 不同故障类型

### glitchType

#### rgb-shift

<cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" glitch-type="rgb-shift"/>


#### scanline

<cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    glitch-type="scanline" />


#### pixelate

<cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    glitch-type="pixelate" />


##### noise

<cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    glitch-type="noise" />


#### combined

<cyber-glitch-image class="pic" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    glitch-type="combined" />

```vue
<template>
  <cyber-glitch-image glitch-type="rgb-shift" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
  <cyber-glitch-image glitch-type="scanline" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
  <cyber-glitch-image glitch-type="pixelate" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
  <cyber-glitch-image glitch-type="noise" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
  <cyber-glitch-image glitch-type="combined" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
</template>
```

## 故障强度

### intensity

#### 强度 3

<cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :intensity="3" />

#### 强度 7

<cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :intensity="7" />

#### 强度 10

<cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :intensity="10" />

```vue
<template>
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :intensity="3" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :intensity="7" />
  <cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" :intensity="10" />
</template>
```

## 触发模式

### triggerMode

#### hover

<cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" trigger-mode="hover" />

#### click

<cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" trigger-mode="click" />

#### auto

<cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" trigger-mode="auto" />

#### random

<cyber-glitch-image src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" trigger-mode="random" />

```vue
<template>
  <cyber-glitch-image trigger-mode="hover" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
  <cyber-glitch-image trigger-mode="click" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
  <cyber-glitch-image trigger-mode="auto" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
  <cyber-glitch-image trigger-mode="random" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"/>
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| src | 图片源 | string | — | — |
| alt | 图片描述 | string | — | Glitch image |
| glitchType | 故障类型 | string | rgb-shift / scanline / pixelate / noise / combined | rgb-shift |
| intensity | 故障强度 | number | 1-10 | 5 |
| triggerMode | 触发模式 | string | hover / click / auto / random | hover |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| glitch-start | 故障效果开始时触发 | — |
| glitch-end | 故障效果结束时触发 | — |
