---
title: Tree
lang: zh-CN
---

# Tree 树形组件

赛博朋克风格的树形组件，支持多级数据展示、节点选择、状态显示等功能。

## 基本用法

<cyber-tree :data="basicData" />

```vue
<template>
  <cyber-tree :data="basicData" />
</template>

<script setup>
import { ref } from 'vue'

const basicData = ref([
  {
    id: 1,
    label: '系统根节点',
    children: [
      {
        id: 2,
        label: '文件夹 1',
        children: [
          { id: 3, label: '文件 1-1' },
          { id: 4, label: '文件 1-2' }
        ]
      },
      {
        id: 5,
        label: '文件夹 2',
        children: [
          { id: 6, label: '文件 2-1' }
        ]
      }
    ]
  }
])
</script>
```

## 主题

支持四种赛博朋克主题：`neon`、`hologram`、`terminal`、`matrix`

<cyber-tree :data="basicData" theme="neon" />
<cyber-tree :data="basicData" theme="hologram" />
<cyber-tree :data="basicData" theme="terminal" />
<cyber-tree :data="basicData" theme="matrix" />

```vue
<template>
  <cyber-tree :data="basicData" theme="neon" />
  <cyber-tree :data="basicData" theme="hologram" />
  <cyber-tree :data="basicData" theme="terminal" />
  <cyber-tree :data="basicData" theme="matrix" />
</template>
```

## 视觉效果

支持多种视觉效果：`glitch`（故障）、`scan`（扫描）、`pulse`（脉冲）、`static`（静态）

<cyber-tree :data="basicData" effect="glitch" />
<cyber-tree :data="basicData" effect="scan" />
<cyber-tree :data="basicData" effect="pulse" />
<cyber-tree :data="basicData" effect="static" />

```vue
<template>
  <cyber-tree :data="basicData" effect="glitch" />
  <cyber-tree :data="basicData" effect="scan" />
  <cyber-tree :data="basicData" effect="pulse" />
  <cyber-tree :data="basicData" effect="static" />
</template>
```

## 显示状态

节点可以显示在线状态：`online`、`offline`、`warning`、`error`

<cyber-tree :data="statusData" :show-status="true" />

```vue
<template>
  <cyber-tree :data="statusData" :show-status="true" />
</template>

<script setup>
import { ref } from 'vue'

const statusData = ref([
  {
    id: 1,
    label: '服务器集群',
    children: [
      { id: 2, label: '服务器 A', status: 'online' },
      { id: 3, label: '服务器 B', status: 'warning' },
      { id: 4, label: '服务器 C', status: 'offline' },
      { id: 5, label: '服务器 D', status: 'error' }
    ]
  }
])
</script>
```

## 节点选择

支持单选和多选模式

<cyber-tree :data="basicData" :multiple="true" @select-change="handleSelectChange" />

```vue
<template>
  <cyber-tree :data="basicData" :multiple="true" @select-change="handleSelectChange" />
</template>

<script setup>
const handleSelectChange = (selectedNodes) => {
  console.log('选中的节点:', selectedNodes)
}
</script>
```

## 默认全部展开

<cyber-tree :data="basicData" :default-expand-all="true" />

```vue
<template>
  <cyber-tree :data="basicData" :default-expand-all="true" />
</template>
```

## 隐藏连接线

<cyber-tree :data="basicData" :show-connectors="false" />

```vue
<template>
  <cyber-tree :data="basicData" :show-connectors="false" />
</template>
```

## 自定义缩进

<cyber-tree :data="basicData" :indent="50" />

```vue
<template>
  <cyber-tree :data="basicData" :indent="50" />
</template>
```

## 点击展开/收起

<cyber-tree :data="basicData" :expand-on-click="true" />

```vue
<template>
  <cyber-tree :data="basicData" :expand-on-click="true" />
</template>
```

## 事件

```vue
<template>
  <cyber-tree
    :data="treeData"
    @node-click="handleNodeClick"
    @node-expand="handleNodeExpand"
    @node-collapse="handleNodeCollapse"
    @select-change="handleSelectChange"
  />
</template>

<script setup>
const handleNodeClick = (node) => {
  console.log('节点点击:', node)
}

const handleNodeExpand = (node) => {
  console.log('节点展开:', node)
}

const handleNodeCollapse = (node) => {
  console.log('节点收起:', node)
}

const handleSelectChange = (selectedNodes) => {
  console.log('选中节点变化:', selectedNodes)
}
</script>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| data | 树形数据 | array | - | `[]` |
| theme | 主题样式 | string | `neon` / `hologram` / `terminal` / `matrix` | `neon` |
| effect | 视觉效果 | string | `glitch` / `scan` / `pulse` / `static` | `scan` |
| showConnectors | 是否显示连接线 | boolean | - | `true` |
| showStatus | 是否显示状态 | boolean | - | `true` |
| showScanline | 是否显示扫描线 | boolean | - | `true` |
| indent | 节点缩进距离 | number | - | `30` |
| defaultExpandAll | 默认全部展开 | boolean | - | `false` |
| expandOnClick | 点击节点展开/收起 | boolean | - | `true` |
| multiple | 是否支持多选 | boolean | - | `false` |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| node-click | 节点点击事件 | `(node)` |
| node-expand | 节点展开事件 | `(node)` |
| node-collapse | 节点收起事件 | `(node)` |
| select-change | 选中节点变化事件 | `(selectedNodes)` |

## 数据结构

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| id | 节点唯一标识 | `string \| number` | - |
| label | 节点显示文本 | `string` | - |
| children | 子节点数组 | `TreeNode[]` | - |
| expanded | 是否展开 | `boolean` | `false` |
| selected | 是否选中 | `boolean` | `false` |
| status | 节点状态 | `online` / `offline` / `warning` / `error` | - |
| icon | 自定义图标类名 | `string` | - |

## 方法

通过 ref 可以调用以下方法：

| 方法名 | 说明 | 参数 |
|--------|------|------|
| getSelectedNodes | 获取选中的节点 | - |
| clearSelection | 清除选中状态 | - |

```vue
<template>
  <cyber-tree ref="treeRef" :data="treeData" />
  <button @click="getSelected">获取选中节点</button>
  <button @click="clearSelection">清除选中</button>
</template>

<script setup>
import { ref } from 'vue'

const treeRef = ref(null)

const getSelected = () => {
  const nodes = treeRef.value.getSelectedNodes()
  console.log('选中的节点:', nodes)
}

const clearSelection = () => {
  treeRef.value.clearSelection()
}
</script>
```
