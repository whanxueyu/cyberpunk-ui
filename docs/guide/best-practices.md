---
title: 最佳实践
lang: zh-CN
---

# 最佳实践

本节总结了使用 CyberPunk-UI 时的推荐做法和常见优化技巧。

## 1. 配合黑暗模式使用

为了获得最佳的视觉效果，建议在黑暗模式下使用 CyberPunk-UI：

```vue
<template>
  <div class="cyber-app">
    <cyber-button>赛博按钮</cyber-button>
    <cyber-text>赛博文字</cyber-text>
  </div>
</template>

<style>
.cyber-app {
  background-color: #0a0a0a;
  min-height: 100vh;
  padding: 40px;
}
</style>
```

## 2. 使用 CSS 变量定制主题

CyberPunk-UI 支持通过 CSS 变量自定义主题色：

```css
:root {
  --cyber-primary: #00e6f6;
  --cyber-success: #22c55e;
  --cyber-warning: #f59e0b;
  --cyber-danger: #ef4444;
}
```

## 3. 性能优化建议

- 按需引入组件以减小打包体积
- 对于大量数据列表，使用 `CyberInfiniteTable` 虚拟滚动
- 避免在循环中频繁创建复杂动画效果的组件

## 4. 响应式设计

所有组件都支持响应式布局，可以配合 Flexbox 或 Grid 使用：

```vue
<template>
  <div class="responsive-grid">
    <cyber-button v-for="i in 6" :key="i">按钮 {{ i }}</cyber-button>
  </div>
</template>

<style scoped>
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
}
</style>
```

## 5. TypeScript 支持

推荐在项目中使用 TypeScript 以获得更好的类型提示。从 `cyberpunk-ui` 中导入类型定义：

```typescript
import type { MenuItem, TreeNode, SelectOption } from "cyberpunk-ui";
```

在 `tsconfig.json` 中配置 `types` 字段，即可在模板中获得组件类型提示：

```json
{
  "compilerOptions": {
    "types": ["cyberpunk-ui/global"]
  }
}
```
