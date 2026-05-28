---
title: 快速开始
lang: zh-CN
---

# 快速开始

本节将介绍如何在项目中快速引入和使用 CyberPunk-UI。

## 环境要求

- Vue 3.0+
- Node.js 16+

## 安装

首先,通过 npm、yarn 或 pnpm 安装 CyberPunk-UI:

```bash
npm install cyberpunk-ui
# 或者
yarn add cyberpunk-ui
# 或者
pnpm add cyberpunk-ui
```

## 完整引入

在 Vue 3 项目中，你可以选择完整引入所有组件。

```javascript
// main.ts
import { createApp } from "vue";
import CyberpunkUI from "cyberpunk-ui";
import "cyberpunk-ui/lib/style.css";
import App from "./App.vue";

const app = createApp(App);

// 使用插件
app.use(CyberpunkUI);

app.mount("#app");
```

::: tip 提示
完整引入会导入所有组件，适合项目中使用较多组件的场景。如果只使用少量组件，可以考虑按需引入以减小打包体积。
:::

## 按需引入

如果你只使用部分组件，可以按需引入以减少打包体积。

```javascript
// main.ts
import { createApp } from "vue";
import { CyberButton, CyberInput, CyberText } from "cyberpunk-ui";
import "cyberpunk-ui/lib/style.css";
import App from "./App.vue";

const app = createApp(App);

// 注册需要的组件
app.component("CyberButton", CyberButton);
app.component("CyberInput", CyberInput);
app.component("CyberText", CyberText);

app.mount("#app");
```

## TypeScript 类型导入

如果你的项目使用 TypeScript，可以从 `cyberpunk-ui` 中导入各组件的类型定义，用于 props 类型标注或数据模型定义。

```typescript
import type {
  MenuItem,
  MenuDirection,
  MenuTheme,
  MenuEffect,
  TreeNode,
  SelectOption,
  OptionGroup,
  CascaderOption,
  FullPageItem,
  NotificationOptions,
  NotificationType,
  NotificationPosition,
  NotificationEffect,
  NotificationAction,
} from "cyberpunk-ui";

// 使用类型定义菜单数据
const menuItems: MenuItem[] = [
  { label: "首页", value: "home" },
  { label: "设置", value: "settings", children: [
    { label: "个人设置", value: "profile" },
    { label: "系统设置", value: "system" },
  ]},
];

// 使用类型定义树数据
const treeData: TreeNode[] = [
  { id: 1, label: "节点一", expanded: true, children: [
    { id: 2, label: "节点1-1" },
    { id: 3, label: "节点1-2" },
  ]},
];
```

### 全局组件类型提示

在 `tsconfig.json` 中配置 `types` 字段，即可在模板中使用 `<cyber-xxx />` 标签时获得 IDE 智能提示：

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["cyberpunk-ui/global"]
  }
}
```

## 在模板中使用

引入完成后,你就可以在 Vue 模板中使用这些组件了。

### 基础示例

<div class="demo-container">
  <cyber-button type="primary">赛博按钮</cyber-button>
  <cyber-nenobutton type="success" bg>霓虹按钮</cyber-nenobutton>
  <cyber-input placeholder="请输入内容..." theme="primary" style="max-width: 300px;" />
  <cyber-text>CyberPunk UI</cyber-text>
  <cyber-glow-text color="#00e6f6">Neon Glow</cyber-glow-text>
</div>

```vue
<template>
  <div class="container">
    <!-- 故障按钮 -->
    <cyber-button type="primary">赛博按钮</cyber-button>

    <!-- 霓虹按钮 -->
    <cyber-nenobutton type="success" bg>霓虹按钮</cyber-nenobutton>

    <!-- 输入框 -->
    <cyber-input
      v-model="inputValue"
      placeholder="请输入内容..."
      theme="primary"
    />

    <!-- 故障文字 -->
    <cyber-text>CyberPunk UI</cyber-text>

    <!-- 发光文字 -->
    <cyber-glow-text color="#00e6f6">Neon Glow</cyber-glow-text>
  </div>
</template>

<script setup>
import { ref } from "vue";

const inputValue = ref("");
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background: #0a0a0a;
}
</style>
```

<style scoped>
.demo-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  margin-bottom: 20px;
  background: #0a0a0a;
  border-radius: 8px;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
}
</style>

## 组件类型与特性

CyberPunk-UI 提供了丰富的赛博朋克风格组件,主要包括:

### 按钮类组件

- `CyberButton`: 故障艺术效果按钮,支持多种主题和尺寸
- `CyberNenoButton`: 霓虹发光按钮,带有强烈的光晕效果
- `CyberReflectButton`: 反射效果按钮

### 文字类组件

- `CyberText`: 故障文字效果,带扫描线动画
- `CyberGlowText`: 霓虹发光文字,悬停时产生光晕
- `CyberShadowText`: 阴影文字效果
- `CyberTyping`: 打字机效果文字
- `CyberMagicText`: 魔法渐变文字

### 表单组件

- `CyberInput`: 赛博朋克风格输入框
- `CyberSelect`: 下拉选择框
- `CyberCascader`: 级联选择器
- `CyberTree`: 树形控件

### 数据展示

- `CyberProgress`: 进度条,支持多种主题
- `CyberDigitalCounter`: 数字计数器
- `CyberInfiniteTable`: 虚拟滚动表格
- `CyberBanner`: 状态横幅

### 其他组件

- `CyberDivider`: 分割线
- `CyberMenu`: 菜单
- `CyberNotification`: 通知
- `CyberTooltip`: 提示框
- `CyberImage`: 图片组件
- `CyberGlitchImage`: 故障图片
- `CyberHoloCard`: 全息卡片
- `CyberHoloLoader`: 全息加载器
- `CyberFullPage`: 全屏页面

## 下一步

恭喜你已经完成了 CyberPunk-UI 的快速入门!接下来你可以:

### 📖 深入学习

- 浏览 [组件文档](/components/button) 查看所有可用组件的详细用法
- 查看 [按钮组件](/components/button) 了解故障按钮的各种配置
- 查看 [输入框组件](/components/input) 学习表单组件的使用
- 查看 [文字组件](/components/text) 探索各种文字特效

### 💡 实战案例

- 查看 [登录表单与管理后台案例](/guide/examples) 获取完整可运行的实战代码

### 🎨 主题定制

- 查看 [自定义主题颜色](/advance/themeColor) 了解如何定制专属主题
- 学习如何使用 CSS 变量覆盖默认样式
- 探索不同主题之间的组合效果

### 💡 实战技巧

### 🔧 高级用法

- 查看各个组件的 API 文档,了解所有可用的属性和事件
- 学习如何通过 slot 自定义组件内容
- 探索组件的组合使用和嵌套场景

### 🤝 参与贡献

- 访问我们的 [GitHub 仓库](https://github.com/whanxueyu/cyberpunk-ui)
- 报告 Bug 或提出新功能建议
- 提交 Pull Request 帮助改进项目
- 分享你使用 CyberPunk-UI 构建的作品

### 📚 相关资源

- [Vue 3 官方文档](https://cn.vuejs.org/)
- [Vite 构建工具](https://cn.vitejs.dev/)
- [赛博朋克设计灵感](https://www.pinterest.com/search/pins/?q=cyberpunk%20ui)

---

::: tip 提示
如果你在使用过程中遇到任何问题,欢迎在 GitHub Issues 中提问,我们会尽快回复!
:::
