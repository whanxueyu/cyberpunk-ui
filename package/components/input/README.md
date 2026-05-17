# CyberInput 赛博朋克输入框组件

## 简介

CyberInput 是一个具有赛博朋克风格的 Vue 3 输入框组件，属于 CyberPunk-UI 组件库的一部分。该组件提供了现代化的视觉效果，包括故障艺术特效、扫描线动画和霓虹发光边框。

## 特性

- 🎨 **多种主题**：支持 primary、success、warning、danger、info 五种主题
- 📏 **三种尺寸**：large、default、small 满足不同场景需求
- ✨ **视觉特效**：故障艺术效果和扫描线动画
- 🔒 **状态支持**：支持禁用和只读状态
- 📝 **多种类型**：支持 text、password、number、email、tel、url 等输入类型
- 🎯 **完整事件**：提供 focus、blur、input、keyup、keydown 等事件
- 🔧 **方法暴露**：支持 focus、blur、select 等方法调用

## 安装

```bash
npm install cyberpunk-ui
```

## 使用

```vue
<template>
  <cyber-input v-model="value" placeholder="请输入内容"></cyber-input>
</template>

<script setup>
import { ref } from 'vue'
import { CyberInput } from 'cyberpunk-ui'

const value = ref('')
</script>
```

## 文档

详细的使用文档请参考：[CyberInput 组件文档](../../docs/components/input.md)

## 示例

查看完整的示例代码：[test/src/conponents/input.vue](../../test/src/conponents/input.vue)

## 许可证

MIT License