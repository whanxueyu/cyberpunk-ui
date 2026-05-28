---
title: 主题与样式
lang: zh-CN
---

# 主题与样式

CyberPunk-UI 提供了灵活的主题切换和样式定制能力，让你轻松打造独特的赛博朋克视觉风格。

## 主题切换

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

## 尺寸控制

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

## 特效控制

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

## 自定义主题颜色

除了预设的主题色外，你可以通过 CSS 变量覆盖默认样式，打造专属主题:

```css
:root {
  --cp-primary-color: #00e6f6;
  --cp-success-color: #22c55e;
  --cp-warning-color: #f59e0b;
  --cp-danger-color: #ef4444;
  --cp-info-color: #3b82f6;
}
```

更多关于主题颜色定制的细节，请参考 [自定义主题颜色](/advance/themeColor)。
