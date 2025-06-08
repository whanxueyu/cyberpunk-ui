# HoloLoader 全息加载器

全息加载器组件提供了三维全息投影风格的加载动画，适合在赛博朋克风格界面中展示加载状态。

## 基本用法

<cyber-holo-loader />

```vue
<template>
  <cyber-holo-loader />
</template>
```

## 不同类型

<cyber-holo-loader type="cube" />
  <cyber-holo-loader type="sphere" />
  <cyber-holo-loader type="datastream" />
  <cyber-holo-loader type="circuit" />

```vue
<template>
  <cyber-holo-loader type="cube" />
  <cyber-holo-loader type="sphere" />
  <cyber-holo-loader type="datastream" />
  <cyber-holo-loader type="circuit" />
</template>
```

## 不同尺寸

<cyber-holo-loader size="small" />
  <cyber-holo-loader size="default" />
  <cyber-holo-loader size="large" />

```vue
<template>
  <cyber-holo-loader size="small" />
  <cyber-holo-loader size="default" />
  <cyber-holo-loader size="large" />
</template>
```

## 自定义文本

<cyber-holo-loader text="加载中..." />
  <cyber-holo-loader text="正在处理数据..." />
  <cyber-holo-loader text="" /> <!-- 不显示文本 -->

```vue
<template>
  <cyber-holo-loader text="加载中..." />
  <cyber-holo-loader text="正在处理数据..." />
  <cyber-holo-loader text="" /> <!-- 不显示文本 -->
</template>
```

## 动画速度

<cyber-holo-loader :speed="0.5" />
  <cyber-holo-loader :speed="1" />
  <cyber-holo-loader :speed="2" />

```vue
<template>
  <cyber-holo-loader :speed="0.5" />
  <cyber-holo-loader :speed="1" />
  <cyber-holo-loader :speed="2" />
</template>
```

## 透明背景

<cyber-holo-loader :transparent="true" />

```vue
<template>
  <cyber-holo-loader :transparent="true" />
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| type | 加载器类型 | string | cube / sphere / datastream / circuit | cube |
| size | 加载器尺寸 | string | small / default / large | default |
| text | 加载文本 | string | — | Loading... |
| speed | 动画速度 | number | 0.1-3 | 1 |
| transparent | 是否使用透明背景 | boolean | — | false |
