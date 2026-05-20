---
title: 自定义主题颜色
lang: zh-CN
---

# 自定义主题颜色

CyberPunk-UI 提供了灵活的主题定制能力，你可以通过 CSS 变量来修改组件的颜色、样式等。

## 默认主题色

CyberPunk-UI 内置了四种赛博朋克主题：

| 主题 | 说明 | 主要颜色 |
|------|------|----------|
| neon | 霓虹主题（默认） | #00e6f6（青色） |
| hologram | 全息投影主题 | #ff00ff（紫色） |
| terminal | 终端主题 | #00ff00（绿色） |
| matrix | 矩阵主题 | #00ff41（数字绿） |

### 主题效果预览

<div class="theme-preview">
  <div class="theme-card neon-theme">
    <h4>Neon 主题</h4>
    <cyber-button type="primary">Primary</cyber-button>
    <cyber-button type="success">Success</cyber-button>
    <cyber-text lineColor="#00e6f6">Neon Text</cyber-text>
  </div>
  
  <div class="theme-card hologram-theme">
    <h4>Hologram 主题</h4>
    <cyber-button type="primary">Primary</cyber-button>
    <cyber-button type="success">Success</cyber-button>
    <cyber-text lineColor="#ff00ff">Hologram Text</cyber-text>
  </div>
</div>

<style scoped>
.theme-preview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.theme-card {
  padding: 20px;
  border-radius: 8px;
  border: 2px solid;
}

.theme-card h4 {
  margin-top: 0;
  margin-bottom: 15px;
}

.theme-card > * {
  display: block;
  margin-bottom: 10px;
}

.neon-theme {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  border-color: #00e6f6;
}

.hologram-theme {
  background: linear-gradient(135deg, #1a0a1a 0%, #2e1a2e 100%);
  border-color: #ff00ff;
}
</style>

## 通过 CSS 变量定制

### 全局主题色

你可以在全局样式中覆盖 CSS 变量来修改主题色。

```css
/* main.css 或 App.vue 的 style 标签 */
:root {
  /* 主色调 */
  --cp-primary-color: #ff0080;
  --cp-primary-light: #ff3399;
  --cp-primary-dark: #cc0066;
  
  /* 成功色 */
  --cp-success-color: #00ff88;
  
  /* 警告色 */
  --cp-warning-color: #ffaa00;
  
  /* 危险色 */
  --cp-danger-color: #ff3366;
  
  /* 信息色 */
  --cp-info-color: #00ccff;
}
```

### 自定义主题效果

<div class="custom-theme-demo">
  <h4>自定义粉色主题</h4>
  <cyber-button type="primary">Primary Button</cyber-button>
  <cyber-button type="success">Success Button</cyber-button>
  <cyber-button type="warning">Warning Button</cyber-button>
  <cyber-button type="danger">Danger Button</cyber-button>
  <cyber-text lineColor="#ff0080">Custom Theme Text</cyber-text>
</div>

<style scoped>
.custom-theme-demo {
  padding: 20px;
  margin: 20px 0;
  background: linear-gradient(135deg, #1a0a1a 0%, #2e1a2e 100%);
  border-radius: 8px;
  border: 2px solid #ff0080;
  --cp-primary-color: #ff0080;
  --cp-primary-light: #ff3399;
  --cp-success-color: #00ff88;
  --cp-warning-color: #ffaa00;
  --cp-danger-color: #ff3366;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.custom-theme-demo h4 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #ff0080;
}

.custom-theme-demo > * {
  display: block;
  margin-bottom: 10px;
}
</style>

### 组件级别定制

你也可以针对特定组件进行样式定制。

```vue
<template>
  <div class="custom-theme">
    <cyber-button>自定义按钮</cyber-button>
  </div>
</template>

<style scoped>
.custom-theme {
  --cp-primary-color: #ff5500;
  --cp-primary-light: #ff7733;
}
</style>
```

### 组件级定制效果

<div class="component-level-demo">
  <div class="demo-section">
    <h4>默认主题</h4>
    <cyber-button type="primary">Default</cyber-button>
    <cyber-input placeholder="Default Input" />
  </div>
  
  <div class="demo-section orange-theme">
    <h4>橙色主题</h4>
    <cyber-button type="primary">Orange</cyber-button>
    <cyber-input placeholder="Orange Input" />
  </div>
  
  <div class="demo-section purple-theme">
    <h4>紫色主题</h4>
    <cyber-button type="primary">Purple</cyber-button>
    <cyber-input placeholder="Purple Input" />
  </div>
</div>

<style scoped>
.component-level-demo {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.demo-section {
  padding: 20px;
  background: #0a0a0a;
  border-radius: 8px;
  border: 1px solid #333;
}

.demo-section h4 {
  margin-top: 0;
  margin-bottom: 15px;
}

.demo-section > * {
  display: block;
  margin-bottom: 10px;
}

.orange-theme {
  --cp-primary-color: #ff5500;
  --cp-primary-light: #ff7733;
  border-color: #ff5500;
}

.purple-theme {
  --cp-primary-color: #9333ea;
  --cp-primary-light: #a855f7;
  border-color: #9333ea;
}
</style>

## 常用 CSS 变量

以下是常用的 CSS 变量列表：

### 颜色变量

```css
:root {
  /* 主色系 */
  --cp-primary-color: #00e6f6;      /* 主色调 */
  --cp-primary-light: #33eeff;      /* 浅色 */
  --cp-primary-dark: #00b8c4;       /* 深色 */
  
  /* 功能色 */
  --cp-success-color: #22c55e;      /* 成功 */
  --cp-warning-color: #f59e0b;      /* 警告 */
  --cp-danger-color: #ef4444;       /* 危险 */
  --cp-info-color: #3b82f6;         /* 信息 */
  
  /* 中性色 */
  --cp-text-primary: #ffffff;       /* 主要文字 */
  --cp-text-secondary: #a0a0a0;     /* 次要文字 */
  --cp-border-color: #333333;       /* 边框颜色 */
  --cp-bg-color: #0a0a0a;           /* 背景颜色 */
}
```

### 尺寸变量

```css
:root {
  /* 圆角 */
  --cp-border-radius-small: 4px;
  --cp-border-radius-base: 8px;
  --cp-border-radius-large: 12px;
  
  /* 间距 */
  --cp-spacing-xs: 4px;
  --cp-spacing-sm: 8px;
  --cp-spacing-md: 16px;
  --cp-spacing-lg: 24px;
  --cp-spacing-xl: 32px;
}
```

### 动画变量

```css
:root {
  /* 过渡时间 */
  --cp-transition-fast: 0.15s;
  --cp-transition-base: 0.3s;
  --cp-transition-slow: 0.5s;
  
  /* 动画效果 */
  --cp-animation-glow: glow 2s ease-in-out infinite;
  --cp-animation-pulse: pulse 1.5s ease-in-out infinite;
}
```

## 主题切换示例

下面是一个完整的主题切换示例：

```vue
<template>
  <div :class="['app', currentTheme]">
    <header>
      <h1>CyberPunk UI Theme Demo</h1>
      <div class="theme-switcher">
        <button 
          v-for="theme in themes" 
          :key="theme"
          @click="currentTheme = theme"
          :class="{ active: currentTheme === theme }"
        >
          {{ theme }}
        </button>
      </div>
    </header>
    
    <main>
      <cyber-button type="primary">Primary Button</cyber-button>
      <cyber-button type="success">Success Button</cyber-button>
      <cyber-button type="warning">Warning Button</cyber-button>
      <cyber-button type="danger">Danger Button</cyber-button>
      
      <cyber-text>赛博朋克风格文字</cyber-text>
      <cyber-glow-text color="#ff00ff">Neon Glow Text</cyber-glow-text>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const themes = ['neon', 'hologram', 'terminal', 'matrix']
const currentTheme = ref('neon')
</script>

<style>
/* Neon 主题 */
.neon {
  --cp-primary-color: #00e6f6;
  --cp-primary-light: #33eeff;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
}

/* Hologram 主题 */
.hologram {
  --cp-primary-color: #ff00ff;
  --cp-primary-light: #ff66ff;
  background: linear-gradient(135deg, #1a0a1a 0%, #2e1a2e 100%);
}

/* Terminal 主题 */
.terminal {
  --cp-primary-color: #00ff00;
  --cp-primary-light: #66ff66;
  background: linear-gradient(135deg, #0a1a0a 0%, #1a2e1a 100%);
}

/* Matrix 主题 */
.matrix {
  --cp-primary-color: #00ff41;
  --cp-primary-light: #66ff99;
  background: linear-gradient(135deg, #000000 0%, #0a1a0a 100%);
}

.app {
  min-height: 100vh;
  padding: 40px;
  color: #fff;
  transition: all 0.3s ease;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

.theme-switcher {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;
}

.theme-switcher button {
  padding: 8px 16px;
  border: 2px solid var(--cp-primary-color);
  background: transparent;
  color: var(--cp-primary-color);
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
}

.theme-switcher button:hover,
.theme-switcher button.active {
  background: var(--cp-primary-color);
  color: #000;
  box-shadow: 0 0 20px var(--cp-primary-color);
}

main {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
</style>
```

## 高级定制

### 创建自定义主题

你可以创建完全自定义的主题，只需要定义相应的 CSS 变量即可。

```css
/* custom-theme.css */
.my-custom-theme {
  --cp-primary-color: #ff6b6b;
  --cp-primary-light: #ff8e8e;
  --cp-primary-dark: #cc5555;
  --cp-success-color: #51cf66;
  --cp-warning-color: #ffd43b;
  --cp-danger-color: #ff6b6b;
  --cp-info-color: #339af0;
  
  /* 自定义背景 */
  background: linear-gradient(135deg, #2d1b69 0%, #11998e 100%);
}
```

```vue
<template>
  <div class="my-custom-theme">
    <cyber-button>Custom Theme</cyber-button>
  </div>
</template>
```

### 动态主题切换

使用 JavaScript 动态修改 CSS 变量实现更灵活的主题切换。

```vue
<template>
  <div>
    <cyber-button @click="toggleTheme">切换主题</cyber-button>
  </div>
</template>

<script setup>
const toggleTheme = () => {
  const root = document.documentElement
  const currentColor = getComputedStyle(root).getPropertyValue('--cp-primary-color').trim()
  
  if (currentColor === '#00e6f6') {
    // 切换到粉色主题
    root.style.setProperty('--cp-primary-color', '#ff0080')
    root.style.setProperty('--cp-primary-light', '#ff3399')
  } else {
    // 切换回青色主题
    root.style.setProperty('--cp-primary-color', '#00e6f6')
    root.style.setProperty('--cp-primary-light', '#33eeff')
  }
}
</script>
```

## 注意事项

::: tip 最佳实践
1. **优先级**：内联样式 > Scoped 样式 > 全局样式，注意样式的优先级问题
2. **性能**：避免频繁修改 CSS 变量，建议使用类名切换
3. **兼容性**：CSS 变量在现代浏览器中都有良好的支持，但如需兼容旧版浏览器需要额外处理
4. **调试**：可以使用浏览器开发者工具查看和实时修改 CSS 变量
:::

## 参考资源

- [CSS Variables MDN 文档](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)
- [Vue 3 样式绑定](https://cn.vuejs.org/guide/essentials/class-and-style.html)
- [CyberPunk-UI GitHub](https://github.com/whanxueyu/cyberpunk-ui)