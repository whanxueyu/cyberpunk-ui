---
title: Menu
lang: zh-CN
---

<script setup>
import { ref } from 'vue'

const activeMenu = ref('home')

const menuItems = [
  { label: '首页', value: 'home' },
  { label: '产品', value: 'products' },
  { label: '关于我们', value: 'about' },
  { label: '联系我们', value: 'contact' }
]

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

const disabledMenu = [
  { label: '正常选项', value: 'normal' },
  { label: '禁用选项', value: 'disabled', disabled: true },
  { label: '另一个选项', value: 'another' }
]
</script>

# Menu 菜单

赛博朋克风格的菜单组件，支持横向/纵向布局、无限层级嵌套、四种主题配色和四种视觉特效。

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

设置 `direction="horizontal"` 启用横向布局，子菜单向下展开。

<cyber-menu v-model="activeMenu" :items="menuItems" direction="horizontal" />

```vue
<cyber-menu v-model="activeMenu" :items="menuItems" direction="horizontal" />
```

## 多级菜单

支持无限层级嵌套，通过 `children` 字段定义子菜单。

<cyber-menu v-model="activeMenu" :items="multiLevelMenu" :expanded-values="['file', 'edit']" />

```vue
<template>
  <cyber-menu
    v-model="activeMenu"
    :items="multiLevelMenu"
    :expanded-values="['file', 'edit']"
  />
</template>

<script setup>
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
      { label: '重做', value: 'redo' }
    ]
  }
]
</script>
```

## 主题

四种赛博朋克主题：`neon`、`terminal`、`matrix`、`hologram`

<cyber-menu v-model="activeMenu" :items="menuItems" theme="neon" />
<cyber-menu v-model="activeMenu" :items="menuItems" theme="terminal" />
<cyber-menu v-model="activeMenu" :items="menuItems" theme="matrix" />
<cyber-menu v-model="activeMenu" :items="menuItems" theme="hologram" />

```vue
<cyber-menu :items="items" theme="neon" />
<cyber-menu :items="items" theme="terminal" />
<cyber-menu :items="items" theme="matrix" />
<cyber-menu :items="items" theme="hologram" />
```

### 主题配色

| 主题 | 主色 | 风格 |
| --- | --- | --- |
| neon | `#00e6f6` | 霓虹蓝青 |
| terminal | `#47f26b` | 终端绿色 |
| matrix | `#00ff41` | 矩阵黑绿 |
| hologram | `#ff40ff` | 全息紫红 |

## 特效

四种视觉特效：`none`、`glitch`、`scanline`、`pulse`

<cyber-menu v-model="activeMenu" :items="menuItems" theme="neon" effect="none" />
<cyber-menu v-model="activeMenu" :items="menuItems" theme="neon" effect="glitch" />
<cyber-menu v-model="activeMenu" :items="menuItems" theme="neon" effect="scanline" />
<cyber-menu v-model="activeMenu" :items="menuItems" theme="neon" effect="pulse" />

```vue
<cyber-menu :items="items" theme="neon" effect="none" />
<cyber-menu :items="items" theme="neon" effect="glitch" />
<cyber-menu :items="items" theme="neon" effect="scanline" />
<cyber-menu :items="items" theme="neon" effect="pulse" />
```

## 禁用项

通过菜单数据的 `disabled` 字段禁用特定菜单项。

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

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 当前选中值 | `string \| number` | — | `''` |
| items | 菜单数据 | `MenuItem[]` | — | `[]` |
| direction | 布局方向 | `string` | `vertical` / `horizontal` | `vertical` |
| theme | 主题配色 | `string` | `neon` / `terminal` / `matrix` / `hologram` | `neon` |
| effect | 视觉特效 | `string` | `none` / `glitch` / `scanline` / `pulse` | `none` |
| expandedValues | 展开的子菜单值（受控） | `(string \| number)[]` | — | `[]` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 选中值变化 | `(value: string \| number)` |
| change | 选中值变化 | `(value: string \| number)` |
| select | 选中菜单项 | `(item: MenuItem)` |
| update:expandedValues | 展开项变化 | `(values: (string \| number)[])` |

### MenuItem 数据结构

| 字段 | 说明 | 类型 | 必填 |
| --- | --- | --- | --- |
| label | 菜单项文本 | `string` | 是 |
| value | 菜单项唯一值 | `string \| number` | 是 |
| icon | 图标 CSS 类名 | `string` | 否 |
| disabled | 是否禁用 | `boolean` | 否 |
| children | 子菜单项 | `MenuItem[]` | 否 |

## 示例代码

完整演示见：`test/src/conponents/menu-test.vue`
