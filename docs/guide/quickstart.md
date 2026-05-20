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

### 登录表单示例

下面是一个使用 CyberPunk-UI 组件构建的登录表单示例:

<div class="login-demo">
  <cyber-magic-text style="font-size: 28px;margin-bottom: 20px;">系统登录</cyber-magic-text>
  
  <div class="form-group">
    <cyber-input 
      placeholder="用户名" 
      theme="primary"
    />
  </div>
  
  <div class="form-group">
    <cyber-input 
      type="password" 
      placeholder="密码" 
      theme="primary"
    />
  </div>
  
  <div class="button-group">
    <cyber-button type="primary">
      登录
    </cyber-button>
    <cyber-button type="success">
      注册
    </cyber-button>
  </div>
</div>

```vue
<template>
  <div class="login-demo">
    <cyber-magic-text style="font-size: 28px;margin-bottom: 20px;">系统登录</cyber-magic-text>
    
    <div class="form-group">
      <cyber-input 
        placeholder="用户名" 
        theme="primary"
      />
    </div>
    
    <div class="form-group">
      <cyber-input 
        type="password" 
        placeholder="密码" 
        theme="primary"
      />
    </div>
    
    <div class="button-group">
      <cyber-button type="primary">
        登录
      </cyber-button>
      <cyber-button type="success">
        注册
      </cyber-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

const handleLogin = () => {
  console.log("登录:", username.value, password.value);
  // 这里添加登录逻辑
};

const handleRegister = () => {
  console.log("注册:", username.value, password.value);
  // 这里添加注册逻辑
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 40px;
  background: rgba(10, 10, 30, 0.9);
  border: 1px solid #00e6f6;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 230, 246, 0.3);
}

.form-group {
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  gap: 15px;
  margin-top: 30px;
}
</style>
```

<style scoped>
.login-demo {
  text-align: center;
  max-width: 400px;
  margin: 20px auto;
  padding: 40px;
  background: rgba(10, 10, 30, 0.9);
  border: 1px solid #00e6f6;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 230, 246, 0.3);
}

.login-demo .form-group {
  margin-bottom: 20px;
}

.login-demo .button-group {
  display: flex;
  gap: 15px;
  margin-top: 30px;
  justify-content: space-around;
}
</style>

## 组件类型与特性

CyberPunk-UI 提供了丰富的赛博朋克风格组件,主要包括:

### 按钮类组件

- **CyberButton**: 故障艺术效果按钮,支持多种主题和尺寸
- **CyberNenoButton**: 霓虹发光按钮,带有强烈的光晕效果
- **CyberReflectButton**: 反射效果按钮

### 文字类组件

- **CyberText**: 故障文字效果,带扫描线动画
- **CyberGlowText**: 霓虹发光文字,悬停时产生光晕
- **CyberShadowText**: 阴影文字效果
- **CyberTyping**: 打字机效果文字
- **CyberMagicText**: 魔法渐变文字

### 表单组件

- **CyberInput**: 赛博朋克风格输入框
- **CyberSelect**: 下拉选择框
- **CyberCascader**: 级联选择器
- **CyberTree**: 树形控件

### 数据展示

- **CyberProgress**: 进度条,支持多种主题
- **CyberDigitalCounter**: 数字计数器
- **CyberInfiniteTable**: 虚拟滚动表格
- **CyberBanner**: 状态横幅

### 其他组件

- **CyberDivider**: 分割线
- **CyberMenu**: 菜单
- **CyberNotification**: 通知
- **CyberTooltip**: 提示框
- **CyberImage**: 图片组件
- **CyberGlitchImage**: 故障图片
- **CyberHoloCard**: 全息卡片
- **CyberHoloLoader**: 全息加载器
- **CyberFullPage**: 全屏页面

## 主题与样式

### 主题切换

大部分组件支持通过 `theme` 或 `type` 属性来切换主题:

```vue
<template>
  <div>
    <!-- 按钮主题 -->
    <cyber-button type="primary">Primary</cyber-button>
    <cyber-button type="success">Success</cyber-button>
    <cyber-button type="warning">Warning</cyber-button>
    <cyber-button type="danger">Danger</cyber-button>

    <!-- 输入框主题 -->
    <cyber-input theme="primary" placeholder="主要主题" />
    <cyber-input theme="success" placeholder="成功主题" />
    <cyber-input theme="info" placeholder="信息主题" />
  </div>
</template>
```

### 尺寸控制

大多数组件支持三种尺寸:

```vue
<template>
  <div>
    <cyber-button size="large">大按钮</cyber-button>
    <cyber-button size="default">默认按钮</cyber-button>
    <cyber-button size="small">小按钮</cyber-button>
  </div>
</template>
```

### 特效控制

部分组件支持控制特效的显示:

```vue
<template>
  <div>
    <!-- 关闭故障特效 -->
    <cyber-input :glitch-effect="false" placeholder="无故障特效" />

    <!-- 自定义发光颜色 -->
    <cyber-glow-text color="#ff5588">粉色发光</cyber-glow-text>

    <!-- 自定义扫描线颜色 -->
    <cyber-text lineColor="#f30">红色扫描线</cyber-text>
  </div>
</template>
```

## 最佳实践

### 1. 配合黑暗模式使用

为了获得最佳的视觉效果,建议在黑暗模式下使用 CyberPunk-UI:

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

### 2. 使用 CSS 变量定制主题

CyberPunk-UI 支持通过 CSS 变量自定义主题色:

```css
:root {
  --cyber-primary: #00e6f6;
  --cyber-success: #22c55e;
  --cyber-warning: #f59e0b;
  --cyber-danger: #ef4444;
}
```

### 3. 性能优化建议

- 按需引入组件以减小打包体积
- 对于大量数据列表,使用 `CyberInfiniteTable` 虚拟滚动
- 避免在循环中频繁创建复杂动画效果的组件

### 4. 响应式设计

所有组件都支持响应式布局,可以配合 Flexbox 或 Grid 使用:

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

## 综合实战示例

下面是一个完整的赛博朋克风格管理后台页面示例,展示了多个组件的组合使用:

<div class="comprehensive-demo">
  <!-- 顶部导航 -->
  <header class="demo-header">
    <cyber-magic-text size="large">CyberPunk Admin</cyber-magic-text>
    <nav>
      <cyber-button type="primary" size="small">首页</cyber-button>
      <cyber-button type="success" size="small">数据</cyber-button>
      <cyber-button type="warning" size="small">设置</cyber-button>
    </nav>
  </header>
  
  <!-- 主内容区 -->
  <main class="demo-main">
    <!-- 统计卡片 -->
    <section class="stats-section">
      <div class="stat-card">
        <cyber-typing text="总用户数" />
        <cyber-digital-counter :value="12580" />
      </div>
      <div class="stat-card">
        <cyber-typing text="在线人数" />
        <cyber-digital-counter :value="342" />
      </div>
      <div class="stat-card">
        <cyber-typing text="今日访问" />
        <cyber-digital-counter :value="8765" />
      </div>
      <div class="stat-card">
        <cyber-typing text="系统负载" />
        <cyber-progress :percentage="45" theme="neon" />
      </div>
    </section>
    <section class="actions-section">
      <cyber-divider content="快捷操作" />
      <div class="action-buttons">
        <cyber-nenobutton type="primary" bg>
          新增数据
        </cyber-nenobutton>
        <cyber-nenobutton type="success" bg>
          导出数据
        </cyber-nenobutton>
        <cyber-reflectbutton>
          刷新
        </cyber-reflectbutton>
      </div>
    </section>
    <section class="status-section">
      <cyber-divider content="系统状态" />
      <div class="status-grid">
        <div class="status-item">
          <cyber-glow-text color="#22c55e">服务正常</cyber-glow-text>
          <div>
          <cyber-text lineColor="#000">API Gateway</cyber-text>
          </div>
        </div>
        <div class="status-item">
          <cyber-glow-text color="#f59e0b">维护中</cyber-glow-text>
          <div>
          <cyber-text lineColor="#000">Database</cyber-text>
          </div>
        </div>
        <div class="status-item">
          <cyber-glow-text color="#ef4444">异常</cyber-glow-text>
          <div>
          <cyber-text lineColor="#000">Cache Server</cyber-text>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

```vue
<template>
  <div class="cyber-dashboard">
    <!-- 顶部导航 -->
    <header class="dashboard-header">
      <cyber-magic-text size="large">CyberPunk Admin</cyber-magic-text>
      <nav>
        <cyber-button type="primary" size="small">首页</cyber-button>
        <cyber-button type="success" size="small">数据</cyber-button>
        <cyber-button type="warning" size="small">设置</cyber-button>
      </nav>
    </header>

    <!-- 主内容区 -->
    <main class="dashboard-main">
      <!-- 统计卡片 -->
      <section class="stats-section">
        <div class="stat-card">
          <cyber-typing text="总用户数" />
          <cyber-digital-counter :value="totalUsers" />
        </div>
        <div class="stat-card">
          <cyber-typing text="在线人数" />
          <cyber-digital-counter :value="onlineUsers" />
        </div>
        <div class="stat-card">
          <cyber-typing text="今日访问" />
          <cyber-digital-counter :value="todayVisits" />
        </div>
        <div class="stat-card">
          <cyber-typing text="系统负载" />
          <cyber-progress :percentage="systemLoad" theme="neon" />
        </div>
      </section>

      <!-- 快捷操作 -->
      <section class="actions-section">
        <cyber-divider content="快捷操作" />
        <div class="action-buttons">
          <cyber-nenobutton type="primary" bg @click="handleAdd">
            新增数据
          </cyber-nenobutton>
          <cyber-nenobutton type="success" bg @click="handleExport">
            导出数据
          </cyber-nenobutton>
          <cyber-reflect-button @click="handleRefresh">
            刷新
          </cyber-reflect-button>
        </div>
      </section>

      <!-- 系统状态 -->
      <section class="status-section">
        <cyber-divider content="系统状态" />
        <div class="status-grid">
          <div class="status-item">
            <cyber-glow-text color="#22c55e">服务正常</cyber-glow-text>
            <cyber-text lineColor="#000">API Gateway</cyber-text>
          </div>
          <div class="status-item">
            <cyber-glow-text color="#f59e0b">维护中</cyber-glow-text>
000          </div>
          <div class="status-item">
            <cyber-glow-text color="#ef4444">异常</cyber-glow-text>
            <cyber-text lineColor="#ef4444">Cache Server</cyber-text>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// 统计数据
const totalUsers = ref(12580);
const onlineUsers = ref(342);
const todayVisits = ref(8765);
const systemLoad = ref(45);

// 事件处理
const handleAdd = () => {
  console.log("新增数据");
};

const handleExport = () => {
  console.log("导出数据");
};

const handleRefresh = () => {
  console.log("刷新数据");
  // 模拟刷新
  systemLoad.value = Math.floor(Math.random() * 60) + 20;
};

// 模拟实时更新
onMounted(() => {
  setInterval(() => {
    onlineUsers.value = Math.floor(Math.random() * 200) + 200;
    systemLoad.value = Math.floor(Math.random() * 40) + 30;
  }, 3000);
});
</script>

<style scoped>
.cyber-dashboard {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: #fff;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 2px solid rgba(0, 230, 246, 0.3);
  background: rgba(0, 0, 0, 0.5);
}

.dashboard-header nav {
  display: flex;
  gap: 15px;
}

.dashboard-main {
  padding: 40px;
}

.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
  font-size: 30px;
}

.stat-card {
  padding: 25px;
  background: rgba(0, 230, 246, 0.05);
  border: 1px solid rgba(0, 230, 246, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.stat-card:hover {
  border-color: rgba(0, 230, 246, 0.5);
  box-shadow: 0 0 20px rgba(0, 230, 246, 0.2);
}

.actions-section,
.status-section {
  margin-bottom: 40px;
}

.action-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

.status-item {
  padding: 20px;
  background: rgba(0, 230, 246, 0.05);
  border: 1px solid rgba(0, 230, 246, 0.2);
  border-radius: 8px;
  text-align: center;
}
</style>
```

<style scoped>
.comprehensive-demo {
  min-height: auto;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  color: #fff;
  border-radius: 8px;
  margin: 20px 0;
  overflow: hidden;
}

.demo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  border-bottom: 2px solid rgba(0, 230, 246, 0.3);
  background: rgba(0, 0, 0, 0.5);
}

.demo-header nav {
  display: flex;
  gap: 10px;
}

.demo-main {
  padding: 30px;
}

.comprehensive-demo .stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 30px;
  font-size: 30px;
}

.comprehensive-demo .stat-card {
  padding: 20px;
  background: rgba(0, 230, 246, 0.05);
  border: 1px solid rgba(0, 230, 246, 0.2);
  border-radius: 8px;
}

.comprehensive-demo .action-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.comprehensive-demo .status-section {
  margin-top: 30px;
}

.comprehensive-demo .status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 15px;
}

.comprehensive-demo .status-item {
  padding: 20px;
  background: rgba(0, 230, 246, 0.05);
  border: 1px solid rgba(0, 230, 246, 0.2);
  border-radius: 8px;
  text-align: center;
}
</style>

## 下一步

恭喜你已经完成了 CyberPunk-UI 的快速入门!接下来你可以:

### 📖 深入学习

- 浏览 [组件文档](/components/button) 查看所有可用组件的详细用法
- 查看 [按钮组件](/components/button) 了解故障按钮的各种配置
- 查看 [输入框组件](/components/input) 学习表单组件的使用
- 查看 [文字组件](/components/text) 探索各种文字特效

### 🎨 主题定制

- 查看 [自定义主题颜色](/advance/themeColor) 了解如何定制专属主题
- 学习如何使用 CSS 变量覆盖默认样式
- 探索不同主题之间的组合效果

### 💡 实战技巧

- 参考上面的综合实战示例,构建自己的赛博朋克风格应用
- 尝试组合使用多个组件,创造独特的视觉效果
- 关注性能优化,合理使用虚拟滚动和按需加载

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
