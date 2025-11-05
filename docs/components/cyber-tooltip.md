# CyberTooltip 交互提示组件

交互提示组件提供了全息投影风格的提示框，适合在赛博朋克风格界面中展示悬停提示信息。

## 基本用法

<cyber-tooltip content="这是一个提示信息">
  <button>悬停查看提示</button>
</cyber-tooltip>

```vue
<template>
  <cyber-tooltip content="这是一个提示信息">
    <button>悬停查看提示</button>
  </cyber-tooltip>
</template>
```

## 不同位置


<cyber-tooltip content="顶部提示" position="top">
  <button>顶部</button>
</cyber-tooltip>

<cyber-tooltip content="右侧提示" position="right">
  <button>右侧</button>
</cyber-tooltip>

<cyber-tooltip content="左侧提示" position="left">
  <button>左侧</button>
</cyber-tooltip>

<cyber-tooltip content="底部提示" position="bottom">
  <button>底部</button>
</cyber-tooltip>

<cyber-tooltip content="自动定位" position="auto">
  <button>自动</button>
</cyber-tooltip>


```vue
<template>
  <cyber-tooltip content="顶部提示" position="top">
    <button>顶部</button>
  </cyber-tooltip>
  
  <cyber-tooltip content="右侧提示" position="right">
    <button>右侧</button>
  </cyber-tooltip>
  
  <cyber-tooltip content="左侧提示" position="left">
    <button>左侧</button>
  </cyber-tooltip>

  <cyber-tooltip content="底部提示" position="bottom">
    <button>底部</button>
  </cyber-tooltip>
  
  <cyber-tooltip content="自动定位" position="auto">
    <button>自动</button>
  </cyber-tooltip>
</template>
```

## 不同效果

<cyber-tooltip content="全息效果" effect="hologram">
    <button>全息</button>
</cyber-tooltip>

<cyber-tooltip content="故障效果" effect="glitch">
    <button>故障</button>
</cyber-tooltip>

<cyber-tooltip content="扫描效果" effect="scan">
    <button>扫描</button>
</cyber-tooltip>

<cyber-tooltip content="淡入效果" effect="fade">
    <button>淡入</button>
</cyber-tooltip>

```vue
<template>
  <cyber-tooltip content="全息效果" effect="hologram">
    <button>全息</button>
  </cyber-tooltip>
  
  <cyber-tooltip content="故障效果" effect="glitch">
    <button>故障</button>
  </cyber-tooltip>
  
  <cyber-tooltip content="扫描效果" effect="scan">
    <button>扫描</button>
  </cyber-tooltip>
  
  <cyber-tooltip content="淡入效果" effect="fade">
    <button>淡入</button>
  </cyber-tooltip>
</template>
```

## 不同主题

  <cyber-tooltip content="霓虹主题" theme="neon">
    <button>霓虹</button>
  </cyber-tooltip>
  
  <cyber-tooltip content="终端主题" theme="terminal">
    <button>终端</button>
  </cyber-tooltip>
  
  <cyber-tooltip content="全息主题" theme="holographic">
    <button>全息</button>
  </cyber-tooltip>

```vue
<template>
  <cyber-tooltip content="霓虹主题" theme="neon">
    <button>霓虹</button>
  </cyber-tooltip>
  
  <cyber-tooltip content="终端主题" theme="terminal">
    <button>终端</button>
  </cyber-tooltip>
  
  <cyber-tooltip content="全息主题" theme="holographic">
    <button>全息</button>
  </cyber-tooltip>
</template>
```

## 不同触发方式

<cyber-tooltip content="悬停触发" trigger="hover">
    <button>悬停</button>
  </cyber-tooltip>
  
  <cyber-tooltip content="点击触发" trigger="click">
    <button>点击</button>
  </cyber-tooltip>
  
  <cyber-tooltip content="聚焦触发" trigger="focus">
    <button>聚焦</button>
  </cyber-tooltip>

```vue
<template>
  <cyber-tooltip content="悬停触发" trigger="hover">
    <button>悬停</button>
  </cyber-tooltip>
  
  <cyber-tooltip content="点击触发" trigger="click">
    <button>点击</button>
  </cyber-tooltip>
  
  <cyber-tooltip content="聚焦触发" trigger="focus">
    <button>聚焦</button>
  </cyber-tooltip>
</template>
```

## 自定义内容
<cyber-tooltip>
    <template #content>
      <div>
        <h4>自定义标题</h4>
        <p>这是一段自定义内容</p>
        <button>操作按钮</button>
      </div>
    </template>
    <button>查看详情</button>
  </cyber-tooltip>


```vue
<template>
  <cyber-tooltip>
    <template #content>
      <div>
        <h4>自定义标题</h4>
        <p>这是一段自定义内容</p>
        <button>操作按钮</button>
      </div>
    </template>
    <button>查看详情</button>
  </cyber-tooltip>
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| content | 提示内容 | string | — | — |
| position | 提示框位置 | string | top / right / bottom / left / auto | top |
| effect | 提示框效果 | string | hologram / glitch / scan / fade | hologram |
| trigger | 触发方式 | string | hover / click / focus | hover |
| delay | 显示延迟（毫秒） | number | — | 200 |
| width | 提示框宽度 | string / number | — | auto |
| theme | 提示框主题 | string | neon / terminal / holographic | neon |

## 插槽

| 插槽名 | 说明 |
|--------|------|
| default | 触发元素 |
| content | 提示内容 |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| show | 提示框显示时触发 | — |
| hide | 提示框隐藏时触发 | — |
