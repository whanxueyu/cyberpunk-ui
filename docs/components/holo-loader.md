# HoloLoader 全息加载器

全息加载器组件提供了三维全息投影风格的加载动画，适合在赛博朋克风格界面中展示加载状态。

## 基本用法

```vue
<template>
  <cp-holo-loader />
</template>
```

## 不同类型

```vue
<template>
  <cp-holo-loader type="cube" />
  <cp-holo-loader type="sphere" />
  <cp-holo-loader type="datastream" />
  <cp-holo-loader type="circuit" />
</template>
```

## 不同尺寸

```vue
<template>
  <cp-holo-loader size="small" />
  <cp-holo-loader size="default" />
  <cp-holo-loader size="large" />
</template>
```

## 自定义文本

```vue
<template>
  <cp-holo-loader text="加载中..." />
  <cp-holo-loader text="正在处理数据..." />
  <cp-holo-loader text="" /> <!-- 不显示文本 -->
</template>
```

## 动画速度

```vue
<template>
  <cp-holo-loader :speed="0.5" />
  <cp-holo-loader :speed="1" />
  <cp-holo-loader :speed="2" />
</template>
```

## 透明背景

```vue
<template>
  <cp-holo-loader :transparent="true" />
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
