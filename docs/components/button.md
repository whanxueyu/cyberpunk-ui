---
title: Button 故障按钮
lang: zh-CN
---

# Button 故障按钮

赛博朋克风格的故障艺术效果按钮，是最具代表性的基础按钮组件。

## 基本用法

<cyber-button>CyberPunkUI</cyber-button>

```vue
<template>
  <cyber-button>CyberPunkUI</cyber-button>
</template>
```

## 按钮类型

支持四种主题类型：`primary`、`success`、`warning`、`danger`

<div>
  <cyber-button type="primary">PRIMARY</cyber-button>
  <cyber-button type="success">SUCCESS</cyber-button>
</div>
<br />
<div>
  <cyber-button type="warning">WARNING</cyber-button>
  <cyber-button type="danger">DANGER</cyber-button>
</div>

```vue
<template>
  <cyber-button type="primary">PRIMARY</cyber-button>
  <cyber-button type="success">SUCCESS</cyber-button>
  <cyber-button type="warning">WARNING</cyber-button>
  <cyber-button type="danger">DANGER</cyber-button>
</template>
```

## 按钮大小

支持三种尺寸：`large`（大）、`default`（中，默认）、`small`（小）

<div>
  <cyber-button type="primary" size="large">LARGE</cyber-button>
  <cyber-button type="primary" size="default">DEFAULT</cyber-button>
  <cyber-button type="primary" size="small">SMALL</cyber-button>
</div>
<br />
<div>
  <cyber-button type="success" size="large">LARGE</cyber-button>
  <cyber-button type="success" size="default">DEFAULT</cyber-button>
  <cyber-button type="success" size="small">SMALL</cyber-button>
</div>
<br />
<div>
  <cyber-button type="warning" size="large">LARGE</cyber-button>
  <cyber-button type="warning" size="default">DEFAULT</cyber-button>
  <cyber-button type="warning" size="small">SMALL</cyber-button>
</div>
<br />
<div>
  <cyber-button type="danger" size="large">LARGE</cyber-button>
  <cyber-button type="danger" size="default">DEFAULT</cyber-button>
  <cyber-button type="danger" size="small">SMALL</cyber-button>
</div>

```vue
<template>
  <cyber-button type="primary" size="large">LARGE</cyber-button>
  <cyber-button type="primary" size="default">DEFAULT</cyber-button>
  <cyber-button type="primary" size="small">SMALL</cyber-button>
</template>
```

## 自定义内容

可以通过 slot 传入自定义内容

<cyber-button type="danger">
  <span>🚀 自定义内容</span>
</cyber-button>

```vue
<template>
  <cyber-button type="danger">
    <span>🚀 自定义内容</span>
  </cyber-button>
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| type | 按钮类型 | string | `primary` / `success` / `warning` / `danger` | `primary` |
| size | 按钮尺寸 | string | `large` / `default` / `small` | `default` |
| content | 按钮文本（无slot时使用） | string | - | `CyberPunk-UI` |
