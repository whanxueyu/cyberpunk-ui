---
title: InfiniteTable
lang: zh-CN
---

# InfiniteTable 无限滚动表格

赛博朋克风格的无限滚动表格组件，支持大数据量虚拟滚动、排序、选择等功能。

## 基本用法

<cyber-infinite-table :data="tableData" :columns="columns" />

```vue
<template>
  <cyber-infinite-table :data="tableData" :columns="columns" />
</template>

<script setup>
import { ref } from 'vue'

const columns = [
  { prop: 'id', label: 'ID', width: 80 },
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'email', label: '邮箱' },
  { prop: 'role', label: '角色', width: 120 }
]

const tableData = ref([
  { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员' },
  { id: 2, name: '李四', email: 'lisi@example.com', role: '编辑' },
  { id: 3, name: '王五', email: 'wangwu@example.com', role: '用户' },
  { id: 4, name: '赵六', email: 'zhaoliu@example.com', role: '用户' },
  { id: 5, name: '孙七', email: 'sunqi@example.com', role: '编辑' }
])
</script>
```

## 固定表头

<cyber-infinite-table :data="tableData" :columns="columns" height="300" />

```vue
<template>
  <cyber-infinite-table :data="tableData" :columns="columns" height="300" />
</template>
```

## 选择功能

<cyber-infinite-table :data="tableData" :columns="columns" :selectable="true" @selection-change="handleSelectionChange" />

```vue
<template>
  <cyber-infinite-table
    :data="tableData"
    :columns="columns"
    :selectable="true"
    @selection-change="handleSelectionChange"
  />
</template>

<script setup>
const handleSelectionChange = (selectedRows) => {
  console.log('选中的行:', selectedRows)
}
</script>
```

## 主题

支持四种赛博朋克主题：`neon`、`hologram`、`terminal`、`matrix`

<cyber-infinite-table :data="tableData" :columns="columns" theme="neon" />
<cyber-infinite-table :data="tableData" :columns="columns" theme="hologram" />
<cyber-infinite-table :data="tableData" :columns="columns" theme="terminal" />
<cyber-infinite-table :data="tableData" :columns="columns" theme="matrix" />

```vue
<template>
  <cyber-infinite-table :data="tableData" :columns="columns" theme="neon" />
  <cyber-infinite-table :data="tableData" :columns="columns" theme="hologram" />
  <cyber-infinite-table :data="tableData" :columns="columns" theme="terminal" />
  <cyber-infinite-table :data="tableData" :columns="columns" theme="matrix" />
</template>
```

## 排序功能

<cyber-infinite-table :data="tableData" :columns="sortColumns" :sortable="true" @sort-change="handleSortChange" />

```vue
<template>
  <cyber-infinite-table
    :data="tableData"
    :columns="sortColumns"
    :sortable="true"
    @sort-change="handleSortChange"
  />
</template>

<script setup>
const sortColumns = [
  { prop: 'id', label: 'ID', width: 80, sortable: true },
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'age', label: '年龄', width: 80, sortable: true }
]

const handleSortChange = ({ prop, order }) => {
  console.log('排序字段:', prop, '排序方式:', order)
}
</script>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| data | 表格数据 | array | - | `[]` |
| columns | 列配置 | array | - | `[]` |
| height | 表格高度 | `string \| number` | - | `auto` |
| theme | 主题样式 | string | `neon` / `hologram` / `terminal` / `matrix` | `neon` |
| selectable | 是否可选择 | boolean | - | `false` |
| sortable | 是否可排序 | boolean | - | `false` |
| stripe | 是否斑马纹 | boolean | - | `false` |
| border | 是否显示边框 | boolean | - | `false` |

## 列配置

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| prop | 字段名 | `string` | - |
| label | 列标题 | `string` | - |
| width | 列宽度 | `string \| number` | `auto` |
| sortable | 是否可排序 | `boolean` | `false` |
| align | 对齐方式 | `left` / `center` / `right` | `left` |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| selection-change | 选择项变化 | `(selectedRows)` |
| sort-change | 排序变化 | `({ prop, order })` |
| row-click | 行点击事件 | `(row, column, event)` |

<script setup>
import { ref } from 'vue'

const columns = [
  { prop: 'id', label: 'ID', width: 80 },
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'email', label: '邮箱' },
  { prop: 'role', label: '角色', width: 120 }
]

const sortColumns = [
  { prop: 'id', label: 'ID', width: 80, sortable: true },
  { prop: 'name', label: '姓名', width: 120 },
  { prop: 'age', label: '年龄', width: 80, sortable: true }
]

const tableData = ref([
  { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员', age: 28 },
  { id: 2, name: '李四', email: 'lisi@example.com', role: '编辑', age: 32 },
  { id: 3, name: '王五', email: 'wangwu@example.com', role: '用户', age: 25 },
  { id: 4, name: '赵六', email: 'zhaoliu@example.com', role: '用户', age: 30 },
  { id: 5, name: '孙七', email: 'sunqi@example.com', role: '编辑', age: 27 }
])
</script>
