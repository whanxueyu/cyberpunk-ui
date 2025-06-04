# CyberPunk-UI 组件库扩展

本文档提供了CyberPunk-UI组件库的新增组件的集成指南和使用说明。

## 组件概览

我们为CyberPunk-UI组件库新增了9个具有赛博朋克风格的组件：

1. **HoloCard (全息卡片)** - 具有3D视觉效果和动态光影变化的信息卡片
2. **GlitchProgress (故障进度条)** - 融合故障艺术效果的进度指示器
3. **NeonToggle (霓虹开关)** - 带有电流流动视觉效果的开关组件
4. **HoloLoader (全息加载器)** - 三维全息投影风格的加载动画
5. **GlitchImage (故障风格图片)** - 具有数字干扰和视觉冲击力的图像组件
6. **CyberTooltip (交互提示组件)** - 全息投影风格的提示框
7. **CyberNotification (消息提示组件)** - 具有未来感的通知系统
8. **DigitalCounter (数字翻滚组件)** - 动态翻滚效果的数值展示
9. **InfiniteTable (无限滚动表格)** - 赛博朋克风格的大数据表格

## 集成指南

### 安装

将新组件目录复制到您的CyberPunk-UI项目的组件目录中：

```bash
cp -r /path/to/new/components/* /path/to/your/cyberpunk-ui/package/components/
```

### 注册组件

在您的主入口文件中导出这些新组件：

```typescript
// 在 package/index.ts 中添加
import HoloCard from './components/holoCard'
import GlitchProgress from './components/glitchProgress'
import NeonToggle from './components/neonToggle'
import HoloLoader from './components/holoLoader'
import GlitchImage from './components/glitchImage'
import CyberTooltip from './components/cyberTooltip'
import CyberNotification from './components/cyberNotification'
import DigitalCounter from './components/digitalCounter'
import InfiniteTable from './components/infiniteTable'

export {
  // 原有组件
  // ...
  
  // 新增组件
  HoloCard,
  GlitchProgress,
  NeonToggle,
  HoloLoader,
  GlitchImage,
  CyberTooltip,
  CyberNotification,
  DigitalCounter,
  InfiniteTable
}

const components = [
  // 原有组件
  // ...
  
  // 新增组件
  HoloCard,
  GlitchProgress,
  NeonToggle,
  HoloLoader,
  GlitchImage,
  CyberTooltip,
  CyberNotification,
  DigitalCounter,
  InfiniteTable
]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default { install }
```

## 组件文档

每个组件的详细文档可以在以下文件中找到：

- [HoloCard 全息卡片](./components/holo-card.md)
- [GlitchProgress 故障进度条](./components/glitch-progress.md)
- [NeonToggle 霓虹开关](./components/neon-toggle.md)
- [HoloLoader 全息加载器](./components/holo-loader.md)
- [GlitchImage 故障风格图片](./components/glitch-image.md)
- [CyberTooltip 交互提示组件](./components/cyber-tooltip.md)
- [CyberNotification 消息提示组件](./components/cyber-notification.md)
- [DigitalCounter 数字翻滚组件](./components/digital-counter.md)
- [InfiniteTable 无限滚动表格](./components/infinite-table.md)

## 设计原则

所有新组件都遵循以下设计原则：

1. **赛博朋克美学** - 霓虹光效、全息纹理、故障艺术效果等元素
2. **响应式设计** - 适配不同屏幕尺寸和设备
3. **可定制性** - 提供丰富的属性和插槽以满足不同需求
4. **性能优化** - 使用虚拟滚动等技术确保大数据量下的流畅体验
5. **无障碍性** - 支持键盘导航和屏幕阅读器

## 技术实现

所有组件都使用Vue3组合式API实现，具有以下特点：

- 使用TypeScript确保类型安全
- 使用SCSS进行样式编写
- 组件结构清晰，代码可维护性高
- 与现有CyberPunk-UI组件库风格保持一致

## 浏览器兼容性

新组件支持以下浏览器的最新版本：

- Chrome
- Firefox
- Safari
- Edge

## 贡献指南

如果您想为CyberPunk-UI组件库贡献代码，请遵循以下步骤：

1. Fork仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开Pull Request

## 许可证

与原CyberPunk-UI组件库保持一致的许可证。
