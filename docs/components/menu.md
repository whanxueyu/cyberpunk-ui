---
title: Menu
lang: zh-CN
---

# Menu 菜单

赛博朋克风格的菜单组件，支持横向和纵向布局、多级菜单、不同主题。

## 基本用法

<cyber-menu v-model="activeMenu" :items="menuItems" />

```vue
<template>
  <cyber-menu v-model="activeMenu" :items="menuItems" />
</template>

<script setup>
import { ref } from 'vue'

const activeMenu = ref('home')

const menuItems = [
  { label: '首页', value: 'home' },
  { label: '产品', value: 'products' },
  { label: '关于我们', value: 'about' },
  { label: '联系我们', value: 'contact' }
]
</script>
```

## 横向菜单

<cyber-menu v-model="activeMenu" :items="menuItems" direction="horizontal" />

```vue
<template>
  <cyber-menu v-model="activeMenu" :items="menuItems" direction="horizontal" />
</template>
```

## 多级菜单

<cyber-menu v-model="activeMenu" :items="multiLevelMenu" />

```vue
<template>
  <cyber-menu v-model="activeMenu" :items="multiLevelMenu" />
</template>

<script setup>
import { ref } from 'vue'

const activeMenu = ref('')

const multiLevelMenu = [
  {
    label: '文件',
    value: 'file',
    children: [
      { label: '新建', value: 'new' },
      { label: '打开', value: 'open' },
      { label: '保存', value: 'save' }
    ]
  },
  {
    label: '编辑',
    value: 'edit',
    children: [
      { label: '撤销', value: 'undo' },
      { label: '重做', value: 'redo' },
      { label: '剪切', value: 'cut' },
      { label: '复制', value: 'copy' },
      { label: '粘贴', value: 'paste' }
    ]
  },
  {
    label: '视图',
    value: 'view',
    children: [
      { label: '放大', value: 'zoom-in' },
      { label: '缩小', value: 'zoom-out' }
    ]
  }
]
</script>
```

## 主题

支持四种赛博朋克主题：`neon`、`terminal`、`matrix`、`hologram`

<cyber-menu v-model="activeMenu" :items="menuItems" theme="neon" />
<cyber-menu v-model="activeMenu" :items="menuItems" theme="terminal" />
<cyber-menu v-model="activeMenu" :items="menuItems" theme="matrix" />
<cyber-menu v-model="activeMenu" :items="menuItems" theme="hologram" />

```vue
<template>
  <cyber-menu v-model="activeMenu" :items="menuItems" theme="neon" />
  <cyber-menu v-model="activeMenu" :items="menuItems" theme="terminal" />
  <cyber-menu v-model="activeMenu" :items="menuItems" theme="matrix" />
  <cyber-menu v-model="activeMenu" :items="menuItems" theme="hologram" />
</template>
```

## 禁用项

<cyber-menu v-model="activeMenu" :items="disabledMenu" />

```vue
<template>
  <cyber-menu v-model="activeMenu" :items="disabledMenu" />
</template>

<script setup>
const disabledMenu = [
  { label: '正常选项', value: 'normal' },
  { label: '禁用选项', value: 'disabled', disabled: true },
  { label: '另一个选项', value: 'another' }
]
</script>
```

## 事件

```vue
<template>
  <cyber-menu
    v-model="activeMenu"
    :items="menuItems"
    @change="handleChange"
    @select="handleSelect"
  />
</template>

<script setup>
import { ref } from 'vue'

const activeMenu = ref('')

const handleChange = (value) => {
  console.log('菜单值变化:', value)
}

const handleSelect = (item) => {
  console.log('选中菜单项:', item)
}
</script>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| modelValue / v-model | 当前激活的菜单项 | `string \| number` | - | `''` |
| items | 菜单项数据 | array | - | `[]` |
| direction | 菜单方向 | string | `horizontal` / `vertical` | `vertical` |
| theme | 主题样式 | string | `neon` / `terminal` / `matrix` / `hologram` | `neon` |
| expandedValues | 展开的子菜单值 | array | - | `[]` |

## 事件

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 激活菜单项变化 | `(value)` |
| change | 菜单项变化事件 | `(value)` |
| select | 选中菜单项事件 | `(item)` |
| update:expandedValues | 展开的菜单项变化 | `(expandedValues)` |

## 菜单项数据结构

| 属性 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| label | 菜单项文本 | `string` | - |
| value | 菜单项值 | `string \| number` | - |
| icon | 图标类名 | `string` | - |
| disabled | 是否禁用 | `boolean` | `false` |
| children | 子菜单项 | `MenuItem[]` | - |

## 主题配色

| 主题 | 主色调 | 背景色 |
|------|--------|--------|
| neon | #00e6f6 | rgba(8,16,28,0.95) |
| terminal | #47f26b | #0a140a |
| matrix | #00ff41 | #000000 |
| hologram | #ff00ff | rgba(10,0,20,0.9) |
