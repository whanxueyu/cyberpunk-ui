---
title: CyberInput
lang: en-US
---

# CyberInput 输入框

赛博朋克风格的输入框组件，支持多种主题配色、尺寸、清除按钮、密码可见切换、前后缀插槽以及故障特效。

<script setup>
import { ref } from 'vue'
const value = ref('')
const pw = ref('')
</script>

## 基础用法

<cyber-input v-model="value" placeholder="请输入内容" style="max-width: 360px;"></cyber-input>

```vue
<template>
  <cyber-input v-model="value" placeholder="请输入内容"></cyber-input>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

## 可清除

设置 `clearable` 后，输入框有内容时会显示清除按钮。

<cyber-input v-model="value" placeholder="输入后出现清除按钮" clearable style="max-width: 360px;"></cyber-input>

```vue
<cyber-input v-model="value" placeholder="输入内容" clearable></cyber-input>
```

## 密码输入

`type="password"` 配合 `show-password` 可显示密码可见切换按钮。

<cyber-input v-model="pw" type="password" placeholder="请输入密码" show-password style="max-width: 360px;"></cyber-input>

```vue
<cyber-input v-model="pw" type="password" placeholder="请输入密码" show-password></cyber-input>
```

## 不同主题

支持 5 种赛博朋克主题配色：`primary`、`success`、`warning`、`danger`、`info`

<cyber-input theme="primary" placeholder="Primary 主要"></cyber-input>
<cyber-input theme="success" placeholder="Success 成功"></cyber-input>
<cyber-input theme="warning" placeholder="Warning 警告"></cyber-input>
<cyber-input theme="danger" placeholder="Danger 危险"></cyber-input>
<cyber-input theme="info" placeholder="Info 信息"></cyber-input>

```vue
<template>
  <cyber-input theme="primary" placeholder="Primary"></cyber-input>
  <cyber-input theme="success" placeholder="Success"></cyber-input>
  <cyber-input theme="warning" placeholder="Warning"></cyber-input>
  <cyber-input theme="danger" placeholder="Danger"></cyber-input>
  <cyber-input theme="info" placeholder="Info"></cyber-input>
</template>
```

## 不同尺寸

提供 `large`、`default`、`small` 三种尺寸。

<cyber-input size="large" placeholder="大尺寸 Large" style="max-width: 400px;"></cyber-input>
<cyber-input size="default" placeholder="默认尺寸 Default" style="max-width: 360px;"></cyber-input>
<cyber-input size="small" placeholder="小尺寸 Small" style="max-width: 280px;"></cyber-input>

```vue
<cyber-input size="large" placeholder="大尺寸"></cyber-input>
<cyber-input size="default" placeholder="默认尺寸"></cyber-input>
<cyber-input size="small" placeholder="小尺寸"></cyber-input>
```

## 前缀 / 后缀插槽

使用 `#prefix` 和 `#suffix` 插槽在输入框前后插入图标或文字。

<cyber-input v-model="value" placeholder="搜索" style="max-width: 360px;">
  <template #prefix>🔍</template>
</cyber-input>

<cyber-input v-model="value" placeholder="域名" style="max-width: 360px;">
  <template #suffix>@cyber.io</template>
</cyber-input>

```vue
<cyber-input v-model="value" placeholder="搜索">
  <template #prefix>🔍</template>
</cyber-input>

<cyber-input v-model="value" placeholder="域名">
  <template #suffix>@cyber.io</template>
</cyber-input>
```

## 禁用与只读

<cyber-input disabled placeholder="禁用状态"></cyber-input>
<cyber-input readonly model-value="只读内容，不可编辑"></cyber-input>

```vue
<cyber-input disabled placeholder="禁用状态"></cyber-input>
<cyber-input readonly model-value="只读内容"></cyber-input>
```

## 输入类型

支持 HTML 标准输入类型：`text`、`password`、`number`、`email`、`tel`、`url`、`search`

<cyber-input type="email" placeholder="邮箱地址" style="max-width: 360px;"></cyber-input>
<cyber-input type="number" placeholder="数字输入" style="max-width: 360px;"></cyber-input>
<cyber-input type="tel" placeholder="电话号码" style="max-width: 360px;"></cyber-input>

```vue
<cyber-input type="email" placeholder="邮箱地址"></cyber-input>
<cyber-input type="number" placeholder="数字输入"></cyber-input>
<cyber-input type="tel" placeholder="电话号码"></cyber-input>
```

## 最大长度限制

<cyber-input :maxlength="10" placeholder="最多输入10个字符" style="max-width: 360px;"></cyber-input>

```vue
<cyber-input :maxlength="10" placeholder="最多10个字符"></cyber-input>
```

## 特效控制

可通过 `glitch-effect` 和 `scanline-effect` 属性控制故障特效和扫描线特效的开关。

<cyber-input :glitch-effect="false" placeholder="关闭故障特效" style="max-width: 360px;"></cyber-input>
<cyber-input :scanline-effect="false" placeholder="关闭扫描线" style="max-width: 360px;"></cyber-input>
<cyber-input :glitch-effect="false" :scanline-effect="false" placeholder="关闭全部特效" style="max-width: 360px;"></cyber-input>

```vue
<!-- 关闭故障特效 -->
<cyber-input :glitch-effect="false" placeholder="无故障特效"></cyber-input>

<!-- 关闭扫描线 -->
<cyber-input :scanline-effect="false" placeholder="无扫描线"></cyber-input>

<!-- 关闭全部特效 -->
<cyber-input :glitch-effect="false" :scanline-effect="false" placeholder="纯净模式"></cyber-input>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| modelValue / v-model | 绑定值 | `string \| number` | — | `''` |
| type | 输入框类型 | `string` | `text` / `password` / `number` / `email` / `tel` / `url` / `search` | `text` |
| placeholder | 占位文本 | `string` | — | `'请输入...'` |
| disabled | 是否禁用 | `boolean` | — | `false` |
| readonly | 是否只读 | `boolean` | — | `false` |
| maxlength | 最大输入长度 | `string \| number` | — | — |
| autocomplete | 自动完成 | `string` | `on` / `off` | `off` |
| name | 原生 name 属性 | `string` | — | — |
| size | 尺寸 | `string` | `large` / `default` / `small` | `default` |
| theme | 主题配色 | `string` | `primary` / `success` / `warning` / `danger` / `info` | `primary` |
| glitchEffect | 故障特效 | `boolean` | — | `true` |
| scanlineEffect | 扫描线特效 | `boolean` | — | `true` |
| clearable | 可清除按钮 | `boolean` | — | `false` |
| showPassword | 密码可见切换 | `boolean` | — | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:modelValue | 绑定值变化时触发 | `(value: string \| number)` |
| input | 输入时实时触发 | `(value: string)` |
| change | 值改变且失焦时触发 | `(value: string \| number)` |
| focus | 获取焦点时触发 | `(event: FocusEvent)` |
| blur | 失去焦点时触发 | `(event: FocusEvent)` |
| keyup | 键盘抬起时触发 | `(event: KeyboardEvent)` |
| keydown | 键盘按下时触发 | `(event: KeyboardEvent)` |
| clear | 点击清除按钮时触发 | — |

### Slots

| 插槽名 | 说明 |
| --- | --- |
| default | 默认插槽（无实际用途） |
| prefix | 输入框前缀内容，通常放置图标 |
| suffix | 输入框后缀内容，通常放置文字或图标 |

### Methods

通过 `ref` 调用组件实例方法：

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| focus() | 获取焦点 | — |
| blur() | 失去焦点 | — |
| select() | 选中输入框文本 | — |
| clear() | 清空输入并触发 change | — |

## 示例代码

完整演示示例见：`test/src/conponents/input.vue`
