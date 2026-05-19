---
title: NenoButton 霓虹按钮
lang: zh-CN
---

# NenoButton 霓虹按钮

具有霓虹发光效果和描边动画的赛博朋克按钮，鼠标悬停时会有强烈的光晕效果。

## 基本用法

<cyber-nenobutton>PRIMARY</cyber-nenobutton>

```vue
<template>
  <cyber-nenobutton>PRIMARY</cyber-nenobutton>
</template>
```

## 按钮类型

支持四种主题类型：`primary`、`success`、`warning`、`danger`

<div>
  <cyber-nenobutton type="primary">PRIMARY</cyber-nenobutton>
  <cyber-nenobutton type="success">SUCCESS</cyber-nenobutton>
  <cyber-nenobutton type="warning">WARNING</cyber-nenobutton>
  <cyber-nenobutton type="danger">DANGER</cyber-nenobutton>
</div>

```vue
<template>
  <cyber-nenobutton type="primary">PRIMARY</cyber-nenobutton>
  <cyber-nenobutton type="success">SUCCESS</cyber-nenobutton>
  <cyber-nenobutton type="warning">WARNING</cyber-nenobutton>
  <cyber-nenobutton type="danger">DANGER</cyber-nenobutton>
</template>
```

## 按钮大小

支持三种尺寸：`large`（大）、`default`（中，默认）、`small`（小）

<div>
  <cyber-nenobutton type="primary" size="large">LARGE</cyber-nenobutton>
  <cyber-nenobutton type="primary" size="default">DEFAULT</cyber-nenobutton>
  <cyber-nenobutton type="primary" size="small">SMALL</cyber-nenobutton>
</div>
<br />
<div>
  <cyber-nenobutton type="success" size="large">LARGE</cyber-nenobutton>
  <cyber-nenobutton type="success" size="default">DEFAULT</cyber-nenobutton>
  <cyber-nenobutton type="success" size="small">SMALL</cyber-nenobutton>
</div>

```vue
<template>
  <cyber-nenobutton type="primary" size="large">LARGE</cyber-nenobutton>
  <cyber-nenobutton type="primary" size="default">DEFAULT</cyber-nenobutton>
  <cyber-nenobutton type="primary" size="small">SMALL</cyber-nenobutton>
</template>
```

## 背景色

可以通过 `bg` 属性为按钮添加背景色

<div>
  <div>
    <cyber-nenobutton type="primary">PRIMARY</cyber-nenobutton>
    <cyber-nenobutton type="primary" bg>PRIMARY + BG</cyber-nenobutton>
  </div>
  <br />
  <div>
    <cyber-nenobutton type="success">SUCCESS</cyber-nenobutton>
    <cyber-nenobutton type="success" bg>SUCCESS + BG</cyber-nenobutton>
  </div>
  <br />
  <div>
    <cyber-nenobutton type="warning">WARNING</cyber-nenobutton>
    <cyber-nenobutton type="warning" bg>WARNING + BG</cyber-nenobutton>
  </div>
  <br />
  <div>
    <cyber-nenobutton type="danger">DANGER</cyber-nenobutton>
    <cyber-nenobutton type="danger" bg>DANGER + BG</cyber-nenobutton>
  </div>
</div>

```vue
<template>
  <cyber-nenobutton type="primary">PRIMARY</cyber-nenobutton>
  <cyber-nenobutton type="primary" :bg="true">PRIMARY + BG</cyber-nenobutton>
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| type | 按钮类型 | string | `primary` / `success` / `warning` / `danger` | `primary` |
| size | 按钮尺寸 | string | `large` / `default` / `small` | `default` |
| bg | 是否显示背景色 | boolean | - | `false` |
