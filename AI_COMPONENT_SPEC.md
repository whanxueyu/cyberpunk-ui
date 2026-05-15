# CyberPunk-UI 组件封装规范（AI 必须遵守）

本文档是给 AI 编程工具使用的强约束规范。后续新增、修改组件时，必须先阅读本文件，并严格按照这里的目录、命名、注册、文档和验证流程执行。

## 1. 项目封装逻辑

CyberPunk-UI 是 Vue 3 + TypeScript + Vite 组件库。

单个组件的封装链路如下：

1. 在 `package/components/<componentName>/src/<componentName>.vue` 编写组件源码。
2. 在同目录创建 `instance.ts` 导出组件实例类型。
3. 在 `package/components/<componentName>/index.ts` 使用 `withInstall` 包装组件，使组件支持 `app.use()`。
4. 在 `package/components/index.ts` 导出单组件入口，支持按需导入。
5. 在 `package/cyberpunk-ui/component.ts` 导入并加入组件数组，支持全量安装。
6. 在 `package/cyberpunk-ui/index.ts` 中通过现有 `installer.install` 暴露全量安装能力。通常不要改这个文件。
7. 在 `docs/components/<component-kebab-name>.md` 补充使用文档。
8. 在 `test/src/conponents/<component-kebab-name>.vue` 补充本地演示页面。注意：当前项目目录名是 `conponents`，不要改成 `components`。

## 2. 命名规范

新增组件时必须同时确定三种名称：

| 名称类型 | 规则 | 示例 |
| --- | --- | --- |
| 目录名 | lower camelCase，和现有目录风格一致 | `cyberCard`、`glitchProgress` |
| Vue 文件名 | 与目录名一致 | `cyberCard.vue` |
| 组件 name | PascalCase，必须以 `Cyber` 开头 | `CyberCard`、`CyberGlitchProgress` |
| 导出变量 | 与组件 name 一致 | `CyberCard` |
| 使用标签 | Vue 会从组件名转换为 kebab-case | `<cyber-card />` |
| CSS 根类名 | `cp-` + kebab-case | `.cp-cyber-card` |
| 文档文件名 | kebab-case | `cyber-card.md` |
| 演示文件名 | kebab-case | `cyber-card.vue` |

禁止：

- 禁止新增不带 `Cyber` 前缀的组件名。
- 禁止目录名、Vue 文件名、导出变量、组件 `name` 互相不一致。
- 禁止复用已有组件名、导出名、根 CSS 类名。

## 3. 必须新增的源文件

每个普通 SFC 组件必须包含以下三个源文件：

```text
package/components/<componentName>/
  index.ts
  src/
    <componentName>.vue
    instance.ts
```

只把 `.vue` 和 `.ts` 当作源码维护。仓库里存在历史生成的 `.js` 和 `.js.map` 文件，但新增或修改组件时不要手写这些生成物；需要生成时运行构建命令。

## 4. `index.ts` 固定格式

`package/components/<componentName>/index.ts` 必须使用下面格式：

```ts
import { withInstall } from '../../utils/index'
import ComponentName from './src/componentName.vue'

export const CyberComponentName = withInstall(ComponentName)
export default CyberComponentName

export type { ComponentNameInstance } from './src/instance'
```

示例：

```ts
import { withInstall } from '../../utils/index'
import Card from './src/card.vue'

export const CyberCard = withInstall(Card)
export default CyberCard

export type { CardInstance } from './src/instance'
```

注意：

- `withInstall` 路径必须是 `../../utils/index`。
- 默认导出必须是包装后的 `CyberXxx`，不是原始 SFC。
- 类型导出优先不带 `.ts` 后缀，保持 TypeScript 导入风格。
- 组件样式需要考虑亮色模式和暗色模式的显示效果

## 5. `instance.ts` 固定格式

`package/components/<componentName>/src/instance.ts` 必须使用下面格式：

```ts
import type ComponentName from './componentName.vue'

export type ComponentNameInstance = InstanceType<typeof ComponentName>
```

示例：

```ts
import type Card from './card.vue'

export type CardInstance = InstanceType<typeof Card>
```

## 6. `.vue` 组件固定结构

组件文件必须使用 Vue 3 `<script setup lang="ts">`：

```vue
<template>
  <div class="cp-component-name">
    <!-- component content -->
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'CyberComponentName',
})

const props = withDefaults(defineProps<{
  modelValue?: string
  type?: 'primary' | 'success' | 'warning' | 'danger'
}>(), {
  modelValue: '',
  type: 'primary',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'change', value: string): void
}>()
</script>

<style lang="scss" scoped>
.cp-component-name {
  color: #fff;
}
</style>
```

必须遵守：

- 必须写 `defineOptions({ name: 'CyberXxx' })`，否则 `withInstall` 无法正确全局注册。
- 优先使用 `withDefaults(defineProps<...>(), ...)` 写类型和默认值。
- 需要运行时校验的枚举 props，可以使用现有组件中的对象式 `defineProps` + `validator`。
- 事件必须通过 `defineEmits` 明确声明。
- 对外方法必须通过 `defineExpose` 明确暴露；不要把内部状态随意暴露。
- 样式必须加 `scoped`，样式语言使用 `scss`。
- 根类名必须以 `cp-` 开头，并使用组件 kebab 名称，例如 `.cp-glitch-progress`。
- 组件内部 class 不要使用过于通用的名字作为全局根选择器，例如 `.button`、`.content`、`.title`；如果必须使用，应嵌套在根类名下。

## 7. Props、事件、插槽规范

Props：

- 所有 props 必须有明确类型。
- 有默认值的 props 必须写默认值。
- 枚举值必须使用联合类型或 `validator` 限制。
- 布尔 props 默认值必须明确写出。
- 数组、对象默认值必须使用函数返回。

事件：

- 事件名使用 kebab-case 或 Vue 标准事件名，如 `change`、`node-click`、`update:modelValue`。
- 不要使用未声明事件。
- 事件载荷要有类型。

插槽：

- 默认插槽使用 `<slot />`。
- 具名插槽必须在文档中说明名称、作用域参数和示例。
- 不要为了判断插槽存在而直接把 `useSlots()` 整体当布尔值；应判断具体 slot，例如 `slots.default`。

## 8. 样式与主题规范

- 组件样式默认写在组件自身 `<style lang="scss" scoped>` 中。
- 共用主题变量优先使用 `package/theme-chalk/const.css` 中的 `--cp-*` CSS 变量。
- 新增全局变量时必须写在 `package/theme-chalk/const.css`，并保证命名为 `--cp-xxx`。
- 组件内部可以定义局部 CSS 变量，但必须挂在根类名下。
- 禁止无必要的全局样式、`body` 样式、通配符重置。
- 禁止在组件源码中依赖远程图片地址；远程图片只能出现在 docs 或 test 演示中。

## 9. 注册方式

### 9.1 单组件导出

在 `package/components/index.ts` 增加：

```ts
export * from './componentName'
```

保持和现有文件一致的相对路径，不写文件后缀。

### 9.2 全量安装注册

在 `package/cyberpunk-ui/component.ts` 增加导入：

```ts
import { CyberComponentName } from '../components/componentName'
```

然后把组件加入默认导出的数组：

```ts
export default [
  CyberButton,
  CyberComponentName,
]
```

必须保证：

- 导入名和组件 `index.ts` 的 `export const CyberXxx` 完全一致。
- 新组件必须加入默认数组，否则 `app.use(CyberpunkUI)` 无法全局注册。
- 不要改 `make-installer.ts`、`defaults.ts` 的安装逻辑，除非任务明确要求修改安装机制。

## 10. 文档规范

每个新增组件必须新增文档：

```text
docs/components/<component-kebab-name>.md
```

文档必须包含：

1. frontmatter：

```md
---
title: ComponentName
lang: en-US
---
```

2. 一级标题：

```md
# ComponentName 组件中文名
```

3. 基础用法示例。
4. 主要 props 示例。
5. 事件示例（如有）。
6. 插槽示例（如有）。
7. 方法示例（如有 `defineExpose`）。
8. 参数说明表。

参数说明表格式：

```md
| 名称 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 组件类型 | `'primary' \| 'success'` | `primary` / `success` | `primary` |
```

同时必须在 `docs/.vitepress/config.ts` 的组件侧边栏中增加入口：

```ts
{ text: "ComponentName 中文名", link: "/components/component-kebab-name" }
```

## 11. 本地演示规范

每个新增组件必须新增演示文件：

```text
test/src/conponents/<component-kebab-name>.vue
```

注意这里目录拼写是项目现状：`conponents`。不要擅自重命名目录。

演示文件要求：

- 展示基础用法。
- 展示所有重要 props 的不同状态。
- 展示事件或 `v-model` 行为（如有）。
- 不要把演示逻辑写进组件源码。

然后在 `test/src/App.vue` 中：

1. import 新演示组件。
2. 在 `sections` 数组中追加一项。
3. 根据展示需要设置 `hasContentBox`。

## 12. 构建与验证

修改完成后必须至少运行：

```bash
pnpm run build
```

如果改了文档，还应运行：

```bash
pnpm run docs:build
```

如果只验证演示站，可运行：

```bash
pnpm run test:dev
```

验证重点：

- TypeScript 无报错。
- Vite 构建通过。
- 新组件可以通过 `app.use(CyberpunkUI)` 全局注册。
- 新组件可以通过 `import { CyberXxx } from 'cyberpunk-ui'` 按需导入。
- 文档示例中的标签名与真实组件名一致。

## 13. AI 新增组件执行清单

AI 新增组件时必须按顺序执行：

1. 检查 `package/components`，确认组件名不冲突。
2. 创建 `package/components/<componentName>/src/<componentName>.vue`。
3. 创建 `package/components/<componentName>/src/instance.ts`。
4. 创建 `package/components/<componentName>/index.ts`。
5. 修改 `package/components/index.ts`，增加导出。
6. 修改 `package/cyberpunk-ui/component.ts`，增加导入和数组注册。
7. 创建 `docs/components/<component-kebab-name>.md`。
8. 修改 `docs/.vitepress/config.ts`，增加侧边栏入口。
9. 创建 `test/src/conponents/<component-kebab-name>.vue`。
10. 修改 `test/src/App.vue`，接入演示组件。
11. 运行构建验证。
12. 汇报改动文件和验证结果。

## 14. 禁止事项

- 禁止只写组件源码但不注册。
- 禁止只注册到 `package/components/index.ts`，漏掉 `package/cyberpunk-ui/component.ts`。
- 禁止修改已有组件公共 API，除非任务明确要求。
- 禁止把组件私有工具函数放到全局 utils，除非至少两个组件复用。
- 禁止引入新的第三方依赖，除非任务明确要求，并同步修改 `package.json`。
- 禁止手写或直接编辑 `.js`、`.js.map` 构建产物。
- 禁止在源码中使用不可控远程资源。
- 禁止为了新组件重构整个安装器、构建配置或文档框架。

## 15. 标准模板

### 15.1 `index.ts`

```ts
import { withInstall } from '../../utils/index'
import ComponentName from './src/componentName.vue'

export const CyberComponentName = withInstall(ComponentName)
export default CyberComponentName

export type { ComponentNameInstance } from './src/instance'
```

### 15.2 `instance.ts`

```ts
import type ComponentName from './componentName.vue'

export type ComponentNameInstance = InstanceType<typeof ComponentName>
```

### 15.3 `componentName.vue`

```vue
<template>
  <div class="cp-component-name">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'CyberComponentName',
})

const props = withDefaults(defineProps<{
  type?: 'primary' | 'success' | 'warning' | 'danger'
}>(), {
  type: 'primary',
})
</script>

<style lang="scss" scoped>
.cp-component-name {
  color: #fff;
}
</style>
```

使用模板时必须把 `ComponentName`、`componentName`、`component-name`、`cp-component-name` 替换成真实名称。
