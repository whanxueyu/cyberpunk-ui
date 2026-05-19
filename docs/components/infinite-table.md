---
title: InfiniteTable
lang: zh-CN
---

<script setup>
import { ref } from 'vue'

const columns = [
  { title: 'ID', field: 'id', width: '80px', align: 'center' },
  { title: '姓名', field: 'name', minWidth: '120px' },
  { title: '邮箱', field: 'email', minWidth: '200px' },
  { title: '角色', field: 'role', width: '120px', align: 'center' }
]

const sortColumns = [
  { title: 'ID', field: 'id', width: '80px', align: 'center' },
  { title: '姓名', field: 'name', minWidth: '120px' },
  { title: '年龄', field: 'age', width: '80px', align: 'center' }
]

const tableData = ref([
  { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员', age: 28 },
  { id: 2, name: '李四', email: 'lisi@example.com', role: '编辑', age: 32 },
  { id: 3, name: '王五', email: 'wangwu@example.com', role: '用户', age: 25 },
  { id: 4, name: '赵六', email: 'zhaoliu@example.com', role: '用户', age: 30 },
  { id: 5, name: '孙七', email: 'sunqi@example.com', role: '编辑', age: 27 }
])

const handleSelectionChange = (selectedRows) => {
  console.log('选中的行:', selectedRows)
}

const handleSortChange = ({ prop, order }) => {
  console.log('排序字段:', prop, '排序方式:', order)
}
</script>

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
  { title: 'ID', field: 'id', width: '80px', align: 'center' },
  { title: '姓名', field: 'name', minWidth: '120px' },
  { title: '邮箱', field: 'email', minWidth: '200px' },
  { title: '角色', field: 'role', width: '120px', align: 'center' }
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

<cyber-infinite-table :data="tableData" :columns="columns" :row-num="3" />

```vue
<template>
  <cyber-infinite-table :data="tableData" :columns="columns" :row-num="3" />
</template>
```

## 选择功能

<cyber-infinite-table :data="tableData" :columns="columns" :row-num="3" />

```vue
<template>
  <cyber-infinite-table :data="tableData" :columns="columns" :row-num="3" />
</template>

<script setup>
const handleSelectionChange = (selectedRows) => {
  console.log('选中的行:', selectedRows)
}
</script>
```

## 主题

支持四种赛博朋克主题：`neon`、`hologram`、`terminal`、`matrix`

<cyber-infinite-table :data="tableData" :columns="columns" theme="neon" :row-num="3" />
<cyber-infinite-table :data="tableData" :columns="columns" theme="hologram" :row-num="3" />
<cyber-infinite-table :data="tableData" :columns="columns" theme="terminal" :row-num="3" />
<cyber-infinite-table :data="tableData" :columns="columns" theme="matrix" :row-num="3" />

```vue
<template>
  <cyber-infinite-table :data="tableData" :columns="columns" theme="neon" :row-num="3" />
  <cyber-infinite-table :data="tableData" :columns="columns" theme="hologram" :row-num="3" />
  <cyber-infinite-table :data="tableData" :columns="columns" theme="terminal" :row-num="3" />
  <cyber-infinite-table :data="tableData" :columns="columns" theme="matrix" :row-num="3" />
</template>
```

## 排序功能

<cyber-infinite-table :data="tableData" :columns="sortColumns" :row-num="3" />

```vue
<template>
  <cyber-infinite-table :data="tableData" :columns="sortColumns" :row-num="3" />
</template>

<script setup>
const sortColumns = [
  { title: 'ID', field: 'id', width: '80px', align: 'center' },
  { title: '姓名', field: 'name', minWidth: '120px' },
  { title: '年龄', field: 'age', width: '80px', align: 'center' }
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
| theme | 主题样式 | string | `neon` / `hologram` / `terminal` / `matrix` | `neon` |
| rowHeight | 行高 | number | - | `40` |
| rowNum | 显示行数 | number | - | `5` |
| autoScroll | 是否自动滚动 | boolean | - | `true` |
| scrollType | 滚动类型 | string | `single` / `page` | `single` |
| waitTime | 滚动等待时间（毫秒） | number | - | `2000` |
| hoverPause | 鼠标悬停暂停 | boolean | - | `true` |
| showScanline | 是否显示扫描线 | boolean | - | `true` |

## 列配置

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| title | 列标题 | `string` | - |
| field | 字段名 | `string` | - |
| width | 列宽度 | `string` | `auto` |
| minWidth | 最小宽度 | `string` | `100px` |
| align | 对齐方式 | `left` / `center` / `right` | `left` |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| row-click | 行点击事件 | `(row, column, event)` |
