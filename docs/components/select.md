---
title: Select
lang: en-US
---

# Select 选择器

赛博风格下拉选择器，支持单选、多选、搜索、禁用、分组选项、自定义字段名和不同主题。

## 基础用法

<cyber-select v-model="value" :options="options" placeholder="请选择"></cyber-select>

```vue
<template>
  <cyber-select v-model="value" :options="options" placeholder="请选择" />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { label: '选项 1', value: 'option1' },
  { label: '选项 2', value: 'option2' },
  { label: '选项 3', value: 'option3' },
]
</script>
```

## 可搜索

<cyber-select v-model="searchValue" :options="longOptions" filterable placeholder="输入关键词搜索"></cyber-select>

```vue
<template>
  <cyber-select v-model="searchValue" :options="longOptions" filterable />
</template>
```

## 多选

<cyber-select v-model="multiValue" :options="options" multiple placeholder="请选择多个选项"></cyber-select>

```vue
<template>
  <cyber-select v-model="multiValue" :options="options" multiple />
</template>
```

## 主题

<cyber-select theme="neon" :options="options" placeholder="neon"></cyber-select>
<br />
<br />
<cyber-select theme="terminal" :options="options" placeholder="terminal"></cyber-select>
<br />
<br />
<cyber-select theme="matrix" :options="options" placeholder="matrix"></cyber-select>
<br />
<br />
<cyber-select theme="hologram" :options="options" placeholder="hologram"></cyber-select>

```vue
<template>
  <cyber-select theme="neon" :options="options" />
  <cyber-select theme="terminal" :options="options" />
  <cyber-select theme="matrix" :options="options" />
  <cyber-select theme="hologram" :options="options" />
</template>
```

## 分组选项

<cyber-select v-model="groupValue" :options="groupOptions" placeholder="选择技术栈"></cyber-select>

```vue
<template>
  <cyber-select v-model="groupValue" :options="groupOptions" />
</template>

<script setup>
import { ref } from 'vue'

const groupValue = ref('')
const groupOptions = [
  {
    label: '前端技术',
    options: [
      { label: 'Vue.js', value: 'vue' },
      { label: 'React', value: 'react' },
    ],
  },
  {
    label: '后端技术',
    options: [
      { label: 'Node.js', value: 'node' },
      { label: 'Python', value: 'python' },
    ],
  },
]
</script>
```


## 自定义字段

<cyber-select v-model="customValue" :options="customOptions" label-key="name" value-key="id" placeholder="选择项目"></cyber-select>

```vue
<template>
  <cyber-select
    v-model="customValue"
    :options="customOptions"
    label-key="name"
    value-key="id"
  />
</template>
```

## 事件

```vue
<template>
  <cyber-select
    v-model="value"
    :options="options"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
  />
</template>
```

## 参数说明

| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 当前选中值 | `string \| number \| boolean \| null \| Array` | - | `''` |
| options | 选项列表，支持分组 | `Array` | - | `[]` |
| placeholder | 占位文字 | `string` | - | `请选择` |
| searchPlaceholder | 搜索框占位文字 | `string` | - | `搜索选项` |
| noDataText | 空状态文字 | `string` | - | `暂无数据` |
| disabled | 是否禁用 | `boolean` | - | `false` |
| clearable | 是否可清空 | `boolean` | - | `true` |
| filterable | 是否可搜索 | `boolean` | - | `false` |
| multiple | 是否多选 | `boolean` | - | `false` |
| size | 尺寸 | `string` | `large` / `default` / `small` | `default` |
| theme | 主题 | `string` | `neon` / `terminal` / `matrix` / `hologram` | `neon` |
| labelKey | 选项标签字段 | `string` | - | `label` |
| valueKey | 选项值字段 | `string` | - | `value` |

## 事件说明

| 名称 | 说明 | 回调参数 |
| --- | --- | --- |
| change | 选中值变化时触发 | `(value, option)` |
| focus | 获得焦点时触发 | `(event)` |
| blur | 失去焦点时触发 | `(event)` |
| visible-change | 下拉显示状态变化时触发 | `(visible)` |
| clear | 清空选中值时触发 | - |

<script setup>
import { ref } from 'vue'

const value = ref('')
const searchValue = ref('')
const multiValue = ref([])
const groupValue = ref('')
const customValue = ref(null)

const options = [
  { label: '选项 1', value: 'option1' },
  { label: '选项 2', value: 'option2' },
  { label: '选项 3', value: 'option3' },
]

const longOptions = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Grape', value: 'grape' },
  { label: 'Orange', value: 'orange' },
]

const groupOptions = [
  {
    label: '前端技术',
    options: [
      { label: 'Vue.js', value: 'vue' },
      { label: 'React', value: 'react' },
    ],
  },
  {
    label: '后端技术',
    options: [
      { label: 'Node.js', value: 'node' },
      { label: 'Python', value: 'python' },
    ],
  },
]

const customOptions = [
  { id: 1, name: 'Project Alpha' },
  { id: 2, name: 'Project Beta' },
  { id: 3, name: 'Project Gamma' },
]

const multiLevelOptions = [
  {
    label: '文件',
    key: 'file',
    children: [
      { label: '新建', value: 'new', shortcut: 'Ctrl+N' },
      { label: '打开', value: 'open', shortcut: 'Ctrl+O' },
    ],
  },
  {
    label: '编辑',
    key: 'edit',
    children: [
      { label: '撤销', value: 'undo', shortcut: 'Ctrl+Z' },
      { label: '重做', value: 'redo', shortcut: 'Ctrl+Y' },
    ],
  },
]
</script>

## 选项数据结构

### 基础选项

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 选项文本 | `string` | - |
| value | 选项值 | `string \| number` | - |
| disabled | 是否禁用 | `boolean` | `false` |

### 分组选项

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| label | 分组标题 | `string` | - |
| options | 分组内的选项 | `Option[]` | - |
