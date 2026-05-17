# CyberInput 输入框

赛博朋克风格的输入框组件，支持多种主题、尺寸和特效。

## 基础用法

```vue
<template>
  <cyber-input v-model="value" placeholder="请输入内容"></cyber-input>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
```

## 不同主题

组件支持 5 种主题样式：`primary`、`success`、`warning`、`danger`、`info`

```vue
<template>
  <cyber-input theme="primary" placeholder="主要主题"></cyber-input>
  <cyber-input theme="success" placeholder="成功主题"></cyber-input>
  <cyber-input theme="warning" placeholder="警告主题"></cyber-input>
  <cyber-input theme="danger" placeholder="危险主题"></cyber-input>
  <cyber-input theme="info" placeholder="信息主题"></cyber-input>
</template>
```

## 不同尺寸

支持 3 种尺寸：`large`、`default`、`small`

```vue
<template>
  <cyber-input size="large" placeholder="大尺寸"></cyber-input>
  <cyber-input size="default" placeholder="默认尺寸"></cyber-input>
  <cyber-input size="small" placeholder="小尺寸"></cyber-input>
</template>
```

## 禁用状态

```vue
<template>
  <cyber-input disabled placeholder="禁用状态"></cyber-input>
</template>
```

## 只读状态

```vue
<template>
  <cyber-input readonly model-value="只读内容"></cyber-input>
</template>
```

## 输入类型

支持多种输入类型：`text`、`password`、`number`、`email`、`tel`、`url`

```vue
<template>
  <cyber-input type="password" placeholder="密码输入"></cyber-input>
  <cyber-input type="email" placeholder="邮箱输入"></cyber-input>
  <cyber-input type="number" placeholder="数字输入"></cyber-input>
</template>
```

## 最大长度限制

```vue
<template>
  <cyber-input maxlength="10" placeholder="最多10个字符"></cyber-input>
</template>
```

## 特效控制

可以控制故障特效和扫描线特效的显示

```vue
<template>
  <!-- 关闭故障特效 -->
  <cyber-input :glitch-effect="false" placeholder="无故障特效"></cyber-input>
  
  <!-- 关闭扫描线特效 -->
  <cyber-input :scanline-effect="false" placeholder="无扫描线特效"></cyber-input>
  
  <!-- 关闭所有特效 -->
  <cyber-input :glitch-effect="false" :scanline-effect="false" placeholder="无特效"></cyber-input>
</template>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| modelValue / v-model | 绑定值 | string \| number | — | '' |
| type | 输入框类型 | string | text/password/number/email/tel/url | text |
| placeholder | 占位文本 | string | — | '请输入...' |
| disabled | 是否禁用 | boolean | — | false |
| readonly | 是否只读 | boolean | — | false |
| maxlength | 最大输入长度 | string \| number | — | undefined |
| autocomplete | 自动完成 | string | on/off | off |
| size | 输入框尺寸 | string | large/default/small | default |
| theme | 主题样式 | string | primary/success/warning/danger/info | primary |
| glitchEffect | 是否显示故障特效 | boolean | — | true |
| scanlineEffect | 是否显示扫描线特效 | boolean | — | true |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 当绑定值变化时触发 | (value: string \| number) |
| input | 输入时触发 | (value: string) |
| focus | 获得焦点时触发 | (event: FocusEvent) |
| blur | 失去焦点时触发 | (event: FocusEvent) |
| keyup | 键盘抬起时触发 | (event: KeyboardEvent) |
| keydown | 键盘按下时触发 | (event: KeyboardEvent) |

### Methods

| 方法名 | 说明 | 参数 |
|--------|------|------|
| focus | 使输入框获取焦点 | — |
| blur | 使输入框失去焦点 | — |
| select | 选中输入框中的文本 | — |

### Slots

暂无

## 示例代码

完整的示例可以参考测试页面：`test/src/conponents/input.vue`