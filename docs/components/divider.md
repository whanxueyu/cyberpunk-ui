---
title: Divider
lang: en-US
---

# Divider 分割线

用于内容分隔的赛博朋克风格分割线组件，支持水平/垂直方向、多种主题色和自定义内容。

## 基础用法

最基础的分割线用法。

<div>
  <p>上方内容</p>
  <cyber-divider />
  <p>下方内容</p>
</div>

```vue
<template>
  <div>
    <p>上方内容</p>
    <cyber-divider />
    <p>下方内容</p>
  </div>
</template>
```

## 不同主题类型

通过 `type` 属性设置不同的主题颜色。

<cyber-divider type="primary" />
<cyber-divider type="success" />
<cyber-divider type="warning" />
<cyber-divider type="danger" />
<cyber-divider type="info" />

```vue
<template>
  <div>
    <cyber-divider type="primary" />
    <cyber-divider type="success" />
    <cyber-divider type="warning" />
    <cyber-divider type="danger" />
    <cyber-divider type="info" />
  </div>
</template>
```

## 带内容的分割线

在分割线中间添加文本内容。

<cyber-divider content="CHAPTER 01" />
<cyber-divider type="success" content="SYSTEM STATUS" />
<cyber-divider type="danger">
  <strong>WARNING</strong>
</cyber-divider>

```vue
<template>
  <div>
    <cyber-divider content="CHAPTER 01" />
    <cyber-divider type="success" content="SYSTEM STATUS" />
    <cyber-divider type="danger">
      <strong>WARNING</strong>
    </cyber-divider>
  </div>
</template>
```

## 垂直分割线

使用 `direction` 属性创建垂直分割线。

<div style="display: flex; height: 200px; align-items: center; gap: 20px;">
  <span>左侧内容</span>
  <cyber-divider direction="vertical" />
  <span>右侧内容</span>
</div>

```vue
<template>
  <div style="display: flex; height: 200px; align-items: center;">
    <span>左侧内容</span>
    <cyber-divider direction="vertical" />
    <span>右侧内容</span>
  </div>
</template>
```

## 自定义尺寸

通过 `size` 属性自定义分割线的宽度或高度。

<cyber-divider size="50%" />
<cyber-divider size="200px" content="CUSTOM WIDTH" />

```vue
<template>
  <div>
    <cyber-divider size="50%" />
    <cyber-divider size="200px" content="CUSTOM WIDTH" />
  </div>
</template>
```

## 控制线条显示

通过 `show-left-line` 和 `show-right-line` 控制线条的显示。

<cyber-divider content="LEFT ONLY" :show-right-line="false" />
<cyber-divider content="RIGHT ONLY" :show-left-line="false" />
<cyber-divider content="NO LINES" :show-left-line="false" :show-right-line="false" />

```vue
<template>
  <div>
    <cyber-divider content="LEFT ONLY" :show-right-line="false" />
    <cyber-divider content="RIGHT ONLY" :show-left-line="false" />
    <cyber-divider content="NO LINES" :show-left-line="false" :show-right-line="false" />
  </div>
</template>
```

## API

### Attributes

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| direction | 分割线方向 | `'horizontal' \| 'vertical'` | `horizontal` / `vertical` | `horizontal` |
| type | 分割线主题类型 | `'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | `primary` / `success` / `warning` / `danger` / `info` | `primary` |
| content | 分割线内容文本 | `string` | — | `''` |
| show-left-line | 是否显示左侧/上侧线条 | `boolean` | — | `true` |
| show-right-line | 是否显示右侧/下侧线条 | `boolean` | — | `true` |
| size | 自定义宽度（水平）或高度（垂直） | `string` | — | `''` |

### Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义分割线内容，优先级高于 `content` 属性 |
