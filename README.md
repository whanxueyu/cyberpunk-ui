<!--
 * @Author: anxueyu
 * @Date: 2024-07-30 16:19:04
 * @LastEditors: anxueyu 1358042645@qq.com
 * @LastEditTime: 2024-09-02 14:42:52
 * @FilePath: \cyberpunk-ui\README.md
 * @Description: 
-->
# CyberPunk UI 🚀

🌟 **探索未来世界的界面设计** 🌆

---

## 📝 介绍

欢迎来到CyberPunk Vue组件库，这是一套专为Vue.js应用设计的、充满未来感与科技风的UI组件集合。我们致力于提供既美观又实用的组件，帮助开发者轻松构建具有赛博朋克风格的用户界面。

-  **文档**：[在线文档](https://cyberpunk-ui.netlify.app/)
-  **仓库**：[GitHub仓库](https://github.com/whanxueyu/cyberpunk-ui)



## ✨ 特性

- 🔧 **丰富的组件选择**：从按钮到按钮、文字、表格，从模态框到进度条，我们提供了多种组件以满足不同场景的需求。
- 🎨 **高度可定制**：每个组件都支持颜色、大小和样式自定义，确保与您的设计完美融合。
- 📱 **响应式设计**：所有组件均采用响应式布局，确保在各种设备上都能提供优秀的用户体验。
- 💻 **易于集成**：只需几行代码即可将我们的组件集成到您的Vue项目中。
- 📊 **数据可视化**：提供丰富的图表组件，助您轻松创建动态、交互式的图表。

## 🚀 快速开始

### 📦 安装

通过npm或yarn安装本组件库：

```bash
npm install cyberpunk-ui
# 或者
yarn add cyberpunk-ui
```

### 🛠️ 使用
在您的Vue项目中导入所需的组件：

```javascript
//main.ts
import { createApp } from 'vue'
import App from './App.vue'
import CyberpunkUi from 'cyberpunk-ui'
import "cyberpunk-ui/lib/style.css";
const app = createApp(App)
app.use(CyberpunkUi)
app.mount('#app')
```
然后在模板中使用这些组件：

```html
<template>
  <div>
    <cp-button>点击我</cp-button>
    <cp-card>
      <h2 slot="header">卡片标题</h2>
      <p>卡片内容...</p>
    </cp-card>
  </div>
</template>
```
### 📚 文档
详细的组件文档和示例，请访问我们的官方网站[在线文档](https://cyberpunk-ui.netlify.app/)


### 📊 仓库
GitHub仓库：[GitHub仓库](https://github.com/whanxueyu/cyberpunk-ui)

### 🤝 贡献
我们欢迎社区的贡献！如果您有任何改进建议或发现bug，请提交issue或直接创建pull request。

### 📄 许可证
本项目遵循MIT许可证，详情见LICENSE文件。

🌟 加入我们，一起创造未来！

