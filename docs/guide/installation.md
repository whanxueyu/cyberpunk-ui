---
title: 安装
lang: zh-CN
---

# 安装

CyberPunk-UI 可以通过多种方式安装，选择最适合你的方式开始使用。

## 包管理器安装

推荐使用包管理器进行安装，这样可以方便地管理和更新依赖。

```bash
# npm
npm install cyberpunk-ui

# yarn
yarn add cyberpunk-ui

# pnpm
pnpm add cyberpunk-ui
```

::: tip 提示
确保你的项目已经安装了 Vue 3（>= 3.2.0），因为 CyberPunk-UI 是基于 Vue 3 开发的。
:::

## CDN 引入

如果你只是想快速体验或在小项目中使用，可以直接通过 CDN 引入。

```html
<!-- 在 HTML 中直接引入 -->
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>CyberPunk-UI Demo</title>
  <!-- 引入样式文件 -->
  <link rel="stylesheet" href="https://unpkg.com/cyberpunk-ui/lib/style.css">
</head>
<body>
  <div id="app">
    <cyber-button>赛博按钮</cyber-button>
  </div>
  
  <!-- 引入 Vue 3 -->
  <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
  <!-- 引入 CyberPunk-UI -->
  <script src="https://unpkg.com/cyberpunk-ui/lib/cyberpunk-ui.umd.js"></script>
  
  <script>
    const { createApp } = Vue
    const app = createApp({})
    app.use(CyberpunkUI)
    app.mount('#app')
  </script>
</body>
</html>
```

## 环境要求

- **Node.js**: >= 18.18.2
- **Vue**: >= 3.2.0
- **浏览器**: 支持现代浏览器（Chrome、Firefox、Safari、Edge 等）

::: warning 注意
由于组件使用了较多的 CSS3 特效和动画，建议在支持现代 CSS 特性的浏览器中使用以获得最佳体验。
:::

## 下一步

安装完成后，请查看 [快速开始](/guide/quickstart) 了解如何在项目中使用 CyberPunk-UI。
