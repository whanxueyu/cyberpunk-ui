# CLAUDE.md

重要规则：全程使用**简体中文**进行所有回复、解释、代码注释、文档说明，尽量不使用英文；不要随意修改项目配置的关键路径，如果要修改请说明情况等待确认后再执行。

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

CyberPunk-UI 是一个 Vue 3 + TypeScript + Vite 组件库，赛博朋克视觉风格。组件源码在 `package/`，通过 Vite 打包到 `lib/`，文档基于 VitePress 在 `docs/`，本地演示在 `test/`。

## 常用命令

```bash
# 构建组件库（三步：vue-tsc 生成 .d.ts 声明 → vite 打包 → 重命名 CSS）
pnpm run build

# 仅生成类型声明
pnpm run build:types

# 仅 vite 打包
pnpm run build:vite

# 构建文档站
pnpm run docs:build

# 启动文档开发服务器
pnpm run docs:dev

# 启动本地演示开发服务器
pnpm run test:dev
```

构建的三步流程：
1. `build:types` — `vue-tsc` 根据 `tsconfig.package.json` 生成 `.d.ts` 声明到 `lib/types/`
2. `build:vite` — Vite 打包 JS + CSS 到 `lib/`
3. `build:rename-css` — 将 `lib/cyberpunk-ui.css` 重命名为 `lib/style.css`

## 架构：组件注册链路

每个新组件需要按以下顺序修改 **6 个文件**：

| 步骤 | 文件 | 操作 |
| --- | --- | --- |
| 1 | `package/components/<compName>/src/<compName>.vue` | 组件源码 |
| 2 | `package/components/<compName>/src/instance.ts` | 导出组件实例类型 |
| 3 | `package/components/<compName>/index.ts` | 用 `withInstall` 包装，导出 `CyberXxx` |
| 4 | `package/components/index.ts` | 增加 `export * from './compName'` |
| 5 | `package/cyberpunk-ui/component.ts` | 导入并加入 `export default [...]` 数组 |
| 6 | `test/src/conponents/<comp-kebab-name>.vue` | 本地演示（目录拼写是 `conponents`，勿改） |
| 7 | `docs/components/<comp-kebab-name>.md` | 使用文档 |
| 8 | `docs/.vitepress/config.ts` | 侧边栏增加入口 |

`withInstall` 路径固定为 `../../utils/index`。全局安装器在 `package/cyberpunk-ui/defaults.ts`，通过 `makeInstaller([...Components])` 将组件数组转为 `app.use()` 兼容的 installer。通常不需要改 `make-installer.ts` 和 `defaults.ts`。

## 命名规范

- 目录名 / Vue 文件名：lower camelCase，如 `cyberCard`
- 组件 `name` / 导出常量：PascalCase，**必须以 `Cyber` 开头**，如 `CyberCard`
- 使用标签：kebab-case，如 `<cyber-card />`
- CSS 根类名：`cp-` + kebab-case，如 `.cp-cyber-card`
- 文档 / 演示文件名：kebab-case，如 `cyber-card.md`
- 禁止新增不带 `Cyber` 前缀的组件名

## 组件源码模板约束

- 必须使用 `<script setup lang="ts">`
- **所有 `import` 语句必须位于 `<script setup>` 最顶部**，`defineOptions()` 紧跟其后，其他代码（`const`、`let` 等）放在 `defineOptions()` 之后
- 必须写 `defineOptions({ name: 'CyberXxx' })`，否则 `withInstall` 无法全局注册
- 样式必须 `<style lang="scss" scoped>`
- 根类名以 `cp-` 开头
- Props 用 `withDefaults(defineProps<...>(), ...)` 写类型和默认值
- 事件用 `defineEmits` 声明
- 对外方法用 `defineExpose` 暴露
- **禁止在 `<script setup>` 内部定义用于 props/emits 的数据接口**（如 `Notification`、`MenuItem`），必须将这些接口放在 `instance.ts` 中并用 `import type` 导入

## 主题系统

CSS 变量定义在 `package/theme-chalk/const.css`，以 `--cp-` 为前缀，分为 primary / success / warning / danger / info 五个语义色组，每组有五个色阶变体（如 `--cp-primary-color` 到 `--cp-primary-color5`）。组件样式必须同时考虑亮色和暗色模式。

## instance.ts 必须导出所有数据接口

`instance.ts` 不仅导出 `InstanceType<typeof Component>`，还必须导出组件 props/emits 中使用的**所有数据接口**。因为 `vue-tsc` 生成 `.d.ts` 时，如果接口定义在 `<script setup>` 内部，会报 "private name" 错误（TS4023/TS4082）。

示例：notification 组件的 `instance.ts`：

```ts
import type NotificationCmp from './notification.vue'

export type NotificationInstance = InstanceType<typeof NotificationCmp>

// 还必须导出组件内部使用的所有数据类型
export type NotificationType = 'info' | 'success' | 'warning' | 'error'
export type NotificationPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center'
export type NotificationEffect = 'glitch' | 'hologram' | 'circuit'
export interface NotificationAction { text: string; callback?: () => void }
export interface NotificationOptions { ... }
```

然后 `.vue` 文件中用 `import type` 从 `instance.ts` 导入这些接口，而不是在文件内重新定义。

## 类型声明生成与 IDE 智能提示

### 构建声明文件

`tsconfig.package.json` 配置 `rootDir: "./package"`，`vue-tsc` 从 `package/` 入口生成声明。构建命令：

```bash
vue-tsc --project tsconfig.package.json --declaration --emitDeclarationOnly --declarationDir ./lib/types
```

### package.json 类型发布配置

确保消费者 `npm install` 后能获得类型提示，`package.json` 需要：

- `"types"` 指向主入口声明文件
- `"exports"` 中每个路径都要配 `"types"` 条件
- `"files"` 中必须包含 `lib/types/**/*`
- `"exports"` 中需要暴露 `"./global"` 路径，供消费者在 `tsconfig.json` 的 `types` 或 `compilerOptions.types` 中引用 `cyberpunk-ui/global`

### global.d.ts — 全局组件智能提示

项目根目录的 `global.d.ts` 通过 `GlobalComponents` 接口增广为所有 `Cyber*` 组件提供 IDE 智能提示：

```ts
export {}
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    'cyber-input': (typeof import('cyberpunk-ui'))['CyberInput']
    // ... 所有组件
  }
}
```

消费者在 `tsconfig.json` 中加 `"types": ["cyberpunk-ui/global"]` 即可在使用 `<cyber-xxx />` 标签时获得类型提示。

## 关键注意事项

- 演示目录拼写为 `test/src/conponents/`，千万不要改成 `components`
- 禁止手写 `.js` / `.js.map` 构建产物，这些都是构建生成物
- 禁止在组件源码中使用远程图片地址
- 禁止引入新的第三方依赖（除非任务明确要求）
- 禁止修改已有组件的公共 API（除非任务明确要求）
- 所有回答、注释、文档均使用中文

详细规范见根目录 `AI_COMPONENT_SPEC.md`。
