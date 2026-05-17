# CyberMenu 赛博朋克菜单组件

一个具有赛博朋克风格的多级菜单组件，支持横向/竖向布局、多种主题和故障特效。

## 基础用法

```vue
<template>
  <CyberMenu
    v-model="activeMenu"
    :items="menuItems"
    direction="vertical"
    theme="neon"
    effect="glitch"
  />
</template>

<script setup>
import { ref } from 'vue'

const activeMenu = ref('home')

const menuItems = [
  { label: '首页', value: 'home' },
  { label: '产品', value: 'products' },
  { label: '服务', value: 'services' }
]
</script>
```

## API

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|--------|--------|
| modelValue / v-model | 当前激活的菜单项 | string \| number | - | '' |
| items | 菜单项数据 | MenuItem[] | - | [] |
| direction | 菜单方向 | string | horizontal / vertical | vertical |
| theme | 主题样式 | string | neon / terminal / matrix / hologram | neon |
| effect | 特效类型 | string | none / glitch / scanline / pulse | none |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| change | 菜单项选中时触发 | (value: string \| number) |
| select | 菜单项被点击时触发 | (item: MenuItem) |
| update:modelValue | v-model 更新时触发 | (value: string \| number) |

### MenuItem 数据结构

```typescript
interface MenuItem {
  label: string          // 菜单项显示文本
  value: string | number // 菜单项唯一标识
  icon?: string          // 图标类名（可选）
  disabled?: boolean     // 是否禁用（可选）
  children?: MenuItem[]  // 子菜单项（可选）
}
```

## 主题示例

### Neon 主题（默认）

```vue
<CyberMenu
  :items="menuItems"
  theme="neon"
/>
```

### Terminal 主题

```vue
<CyberMenu
  :items="menuItems"
  theme="terminal"
/>
```

### Matrix 主题

```vue
<CyberMenu
  :items="menuItems"
  theme="matrix"
/>
```

### Hologram 主题

```vue
<CyberMenu
  :items="menuItems"
  theme="hologram"
/>
```

## 特效示例

### Glitch 故障效果

```vue
<CyberMenu
  :items="menuItems"
  effect="glitch"
/>
```

### Scanline 扫描线效果

```vue
<CyberMenu
  :items="menuItems"
  effect="scanline"
/>
```

### Pulse 脉冲发光效果

```vue
<CyberMenu
  :items="menuItems"
  effect="pulse"
/>
```

## 多级菜单示例

```vue
<script setup>
const menuItems = [
  { 
    label: '用户管理', 
    value: 'user-management',
    children: [
      { label: '个人资料', value: 'user-profile' },
      { label: '账户设置', value: 'account-settings' },
      { 
        label: '权限管理', 
        value: 'permissions',
        children: [
          { label: '角色管理', value: 'roles' },
          { label: '权限分配', value: 'assign-permissions' }
        ]
      }
    ]
  },
  { label: '系统设置', value: 'system-settings' }
]
</script>

<template>
  <CyberMenu :items="menuItems" />
</template>
```

## 水平菜单示例

```vue
<CyberMenu
  :items="menuItems"
  direction="horizontal"
  theme="terminal"
/>
```

## 设计特点

1. **赛博朋克风格**：采用霓虹光效、故障艺术、扫描线等经典赛博朋克视觉元素
2. **多种主题**：提供 Neon、Terminal、Matrix、Hologram 四种主题配色
3. **故障特效**：支持 glitch、scanline、pulse 等多种动态效果
4. **多级嵌套**：支持无限层级的子菜单展开/收起
5. **双向布局**：支持横向和纵向两种布局方式
6. **响应式交互**：悬停、选中状态都有丰富的视觉反馈

## 灵感来源

本组件从 CyberButton 的故障效果获取灵感，运用了以下技术：
- CSS clip-path 实现故障切割效果
- text-shadow 和 box-shadow 创造霓虹光晕
- mix-blend-mode 叠加故障纹理
- CSS animation 实现动态扫描和闪烁
