---
title: ReflectButton 反光按钮
lang: zh-CN
---

# ReflectButton 反光按钮

具有镜面反射效果和旋转描边动画的赛博朋克按钮，视觉效果非常炫酷。

::: warning 注意
由于按钮具有镜面反射效果，按钮下方建议留出足够的空间，避免被其他内容遮挡。
:::

## 基本用法

<cyber-reflectbutton>PRIMARY</cyber-reflectbutton>
<br /><br /><br />

```vue
<template>
  <cyber-reflectbutton>PRIMARY</cyber-reflectbutton>
</template>
```

## 按钮类型

支持四种主题类型：`primary`、`success`、`warning`、`danger`

<div>
  <cyber-reflectbutton type="primary">PRIMARY</cyber-reflectbutton>
  <cyber-reflectbutton type="success">SUCCESS</cyber-reflectbutton>
  <cyber-reflectbutton type="warning">WARNING</cyber-reflectbutton>
  <cyber-reflectbutton type="danger">DANGER</cyber-reflectbutton>
  <br /><br /><br />
</div>

```vue
<template>
  <cyber-reflectbutton type="primary">PRIMARY</cyber-reflectbutton>
  <cyber-reflectbutton type="success">SUCCESS</cyber-reflectbutton>
  <cyber-reflectbutton type="warning">WARNING</cyber-reflectbutton>
  <cyber-reflectbutton type="danger">DANGER</cyber-reflectbutton>
</template>
```

## 按钮大小

支持三种尺寸：`large`（大）、`default`（中，默认）、`small`（小）

<div>
  <cyber-reflectbutton type="primary" size="large">LARGE</cyber-reflectbutton>
  <cyber-reflectbutton type="primary" size="default">DEFAULT</cyber-reflectbutton>
  <cyber-reflectbutton type="primary" size="small">SMALL</cyber-reflectbutton>
  <br /><br /><br />
</div>

```vue
<template>
  <cyber-reflectbutton type="primary" size="large">LARGE</cyber-reflectbutton>
  <cyber-reflectbutton type="primary" size="default">DEFAULT</cyber-reflectbutton>
  <cyber-reflectbutton type="primary" size="small">SMALL</cyber-reflectbutton>
</template>
```

## 背景色

可以通过 `bg` 属性为按钮添加背景色

<div>
  <div>
    <cyber-reflectbutton type="primary">PRIMARY</cyber-reflectbutton>
    <cyber-reflectbutton type="primary" bg>PRIMARY + BG</cyber-reflectbutton>
  </div>
  <br /><br /><br />
  <div>
    <cyber-reflectbutton type="success">SUCCESS</cyber-reflectbutton>
    <cyber-reflectbutton type="success" bg>SUCCESS + BG</cyber-reflectbutton>
  </div>
  <br /><br /><br />
  <div>
    <cyber-reflectbutton type="warning">WARNING</cyber-reflectbutton>
    <cyber-reflectbutton type="warning" bg>WARNING + BG</cyber-reflectbutton>
  </div>
  <br /><br /><br />
  <div>
    <cyber-reflectbutton type="danger">DANGER</cyber-reflectbutton>
    <cyber-reflectbutton type="danger" bg>DANGER + BG</cyber-reflectbutton>
  </div>
  <br /><br /><br />
</div>

```vue
<template>
  <cyber-reflectbutton type="primary">PRIMARY</cyber-reflectbutton>
  <cyber-reflectbutton type="primary" :bg="true">PRIMARY + BG</cyber-reflectbutton>
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| type | 按钮类型 | string | `primary` / `success` / `warning` / `danger` | `primary` |
| size | 按钮尺寸 | string | `large` / `default` / `small` | `default` |
| bg | 是否显示背景色 | boolean | - | `false` |
