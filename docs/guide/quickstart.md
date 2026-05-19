---
title: 快速开始
lang: zh-CN
---

# 快速开始

本节将介绍如何在项目中快速引入和使用 CyberPunk-UI。

## 完整引入

在 Vue 3 项目中，你可以选择完整引入所有组件。

```javascript
// main.ts
import { createApp } from 'vue'
import CyberpunkUI from 'cyberpunk-ui'
import 'cyberpunk-ui/lib/style.css'
import App from './App.vue'

const app = createApp(App)

// 使用插件
app.use(CyberpunkUI)

app.mount('#app')
```

::: tip 提示
完整引入会导入所有组件，适合项目中使用较多组件的场景。如果只使用少量组件，可以考虑按需引入以减小打包体积。
:::

## 按需引入

如果你只使用部分组件，可以按需引入以减少打包体积。

```javascript
// main.ts
import { createApp } from 'vue'
import { CyberButton, CyberInput, CyberText } from 'cyberpunk-ui'
import 'cyberpunk-ui/lib/style.css'
import App from './App.vue'

const app = createApp(App)

// 注册需要的组件
app.component('CyberButton', CyberButton)
app.component('CyberInput', CyberInput)
app.component('CyberText', CyberText)

app.mount('#app')
```

## 在模板中使用

引入完成后，你就可以在 Vue 模板中使用这些组件了。

```vue
<template>
  <div class="container">
    <!-- 故障按钮 -->
    <cyber-button type="primary">赛博按钮</cyber-button>
    
    <!-- 霓虹按钮 -->
    <cyber-nenobutton type="success">霓虹按钮</cyber-nenobutton>
    
    <!-- 输入框 -->
    <cyber-input placeholder="请输入内容..." />
    
    <!-- 故障文字 -->
    <cyber-text>CyberPunk UI</cyber-text>
    
    <!-- 发光文字 -->
    <cyber-glow-text>Neon Glow</cyber-glow-text>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
}
</style>
```

## 主题切换

CyberPunk-UI 支持多种赛博朋克主题，你可以通过 `theme` 属性来切换。

```vue
<template>
  <div>
    <!-- Neon 主题（默认） -->
    <cyber-button theme="neon">Neon</cyber-button>
    
    <!-- Hologram 主题 -->
    <cyber-button theme="hologram">Hologram</cyber-button>
    
    <!-- Terminal 主题 -->
    <cyber-button theme="terminal">Terminal</cyber-button>
    
    <!-- Matrix 主题 -->
    <cyber-button theme="matrix">Matrix</cyber-button>
  </div>
</template>
```

## 配合黑暗模式使用

为了获得最佳的视觉效果，建议在黑暗模式下使用 CyberPunk-UI。

```vue
<template>
  <div class="dark-theme">
    <cyber-button>赛博按钮</cyber-button>
    <cyber-text>赛博文字</cyber-text>
  </div>
</template>

<style>
.dark-theme {
  background-color: #0a0a0a;
  min-height: 100vh;
  padding: 40px;
}
</style>
```

## 完整示例

下面是一个完整的页面示例，展示了多个组件的组合使用。

```vue
<template>
  <div class="cyber-page">
    <header>
      <cyber-magic-text>Welcome to CyberPunk UI</cyber-magic-text>
    </header>
    
    <main>
      <section>
        <cyber-divider content="BUTTONS" />
        <div class="button-group">
          <cyber-button type="primary">Primary</cyber-button>
          <cyber-button type="success">Success</cyber-button>
          <cyber-button type="warning">Warning</cyber-button>
          <cyber-button type="danger">Danger</cyber-button>
        </div>
      </section>
      
      <section>
        <cyber-divider content="INPUTS" />
        <cyber-input placeholder="Enter your name..." />
        <cyber-select :options="options" placeholder="Select an option" />
      </section>
      
      <section>
        <cyber-divider content="PROGRESS" />
        <cyber-progress :percentage="75" theme="neon" />
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' }
]
</script>

<style scoped>
.cyber-page {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  min-height: 100vh;
  padding: 40px;
  color: #fff;
}

header {
  text-align: center;
  margin-bottom: 60px;
}

section {
  margin-bottom: 40px;
}

.button-group {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
</style>
```

## 下一步

- 📖 浏览 [组件文档](/components/button) 查看所有可用组件
- 🎨 查看 [自定义主题颜色](/advance/themeColor) 了解如何定制主题
- 💡 访问我们的 [GitHub 仓库](https://github.com/whanxueyu/cyberpunk-ui) 参与贡献