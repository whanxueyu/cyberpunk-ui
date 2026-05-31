---
title: Progress 赛博进度条
lang: zh-CN
---

# Progress 3D 赛博进度条

3D 透明管道风格的赛博朋克进度条组件，利用 CSS 3D 透视 + 多层渐变模拟圆柱体管道的液体填充效果。

## 基本用法

<div style="width: 100%; max-width: 500px;">
  <cyber-progress :percentage="75" />
</div>

```vue
<template>
  <cyber-progress :percentage="75" />
</template>
```

## 主题配色

内置 4 种赛博朋克主题：`neon`（青霓虹）、`hologram`（紫全息）、`terminal`（绿终端）、`matrix`（红矩阵）。

<div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
  <div>
    <span style="font-size: 13px; color: #999;">neon</span>
    <cyber-progress :percentage="75" theme="neon" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">hologram</span>
    <cyber-progress :percentage="60" theme="hologram" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">terminal</span>
    <cyber-progress :percentage="45" theme="terminal" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">matrix</span>
    <cyber-progress :percentage="90" theme="matrix" />
  </div>
</div>

```vue
<template>
  <cyber-progress :percentage="75" theme="neon" />
  <cyber-progress :percentage="60" theme="hologram" />
  <cyber-progress :percentage="45" theme="terminal" />
  <cyber-progress :percentage="90" theme="matrix" />
</template>
```

## 自定义颜色

通过 `color` 属性传入任意颜色，覆盖主题预设。组件会自动派生液体层次色和管壁色。

<div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
  <cyber-progress :percentage="80" color="#ff00ff" />
  <cyber-progress :percentage="55" color="#ffbf00" />
  <cyber-progress :percentage="35" color="#00ff88" />
</div>

```vue
<template>
  <cyber-progress :percentage="80" color="#ff00ff" />
  <cyber-progress :percentage="55" color="#ffbf00" />
  <cyber-progress :percentage="35" color="#00ff88" />
</template>
```

## 百分比位置

通过 `percentagePosition` 控制百分比显示位置：管道内部 (`inside`) 或管道外部悬浮 (`outside`)。

<div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
  <div>
    <span style="font-size: 13px; color: #999;">外部悬浮 (默认)</span>
    <cyber-progress :percentage="65" theme="neon" percentage-position="outside" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">内部嵌入</span>
    <cyber-progress :percentage="65" theme="neon" percentage-position="inside" />
  </div>
</div>

```vue
<template>
  <cyber-progress :percentage="65" percentage-position="outside" />
  <cyber-progress :percentage="65" percentage-position="inside" />
</template>
```

## 状态指示器

设置 `showStatus` 后显示状态指示灯和中文状态文本，根据百分比自动切换。

<div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
  <cyber-progress :percentage="20" theme="neon" :show-status="true" />
  <cyber-progress :percentage="50" theme="neon" :show-status="true" />
  <cyber-progress :percentage="80" theme="neon" :show-status="true" />
  <cyber-progress :percentage="100" theme="neon" :show-status="true" />
</div>

```vue
<template>
  <cyber-progress :percentage="50" theme="neon" :show-status="true" />
</template>
```

状态文本规则：

| 百分比 | 状态文本 |
|--------|----------|
| 0-29% | 初始化 |
| 30-59% | 处理中 |
| 60-89% | 加载中 |
| 90-99% | 即将完成 |
| 100% | 已完成 |

## 不确定态

设置 `indeterminate` 进入加载循环动画，光带持续滑动。此时忽略 `percentage` 值。

<div style="display: flex; gap: 16px; max-width: 500px; align-items: flex-end;">
  <cyber-progress indeterminate theme="neon" />
  <cyber-progress indeterminate theme="hologram" />
</div>

```vue
<template>
  <cyber-progress indeterminate theme="neon" />
</template>
```

## 垂直方向

设置 `direction="vertical"` 将管道旋转 90°，液体从底部向上填充。适合仪表盘、技能条等场景。

<div style="display: flex; gap: 30px; align-items: flex-end; height: 200px;">
  <cyber-progress :percentage="80" direction="vertical" theme="neon" />
  <cyber-progress :percentage="50" direction="vertical" theme="hologram" :height="16" />
  <cyber-progress :percentage="95" direction="vertical" theme="matrix" :height="30" />
</div>

```vue
<template>
  <cyber-progress :percentage="80" direction="vertical" theme="neon" />
  <cyber-progress :percentage="50" direction="vertical" theme="hologram" :height="16" />
</template>
```

## 管道高度

通过 `height` 控制 3D 管道的粗细（像素）。

<div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
  <div>
    <span style="font-size: 13px; color: #999;">细管 12px</span>
    <cyber-progress :percentage="70" theme="neon" :height="12" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">标准 24px</span>
    <cyber-progress :percentage="70" theme="neon" :height="24" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">粗管 40px</span>
    <cyber-progress :percentage="70" theme="neon" :height="40" />
  </div>
</div>

```vue
<template>
  <cyber-progress :percentage="70" :height="12" />
  <cyber-progress :percentage="70" :height="24" />
  <cyber-progress :percentage="70" :height="40" />
</template>
```

## 发光强度

通过 `glowIntensity`（1-10）控制管道外发光和液体辉光强度。

<div style="display: flex; flex-direction: column; gap: 16px; max-width: 500px;">
  <div>
    <span style="font-size: 13px; color: #999;">微弱 (1)</span>
    <cyber-progress :percentage="60" theme="neon" :glow-intensity="1" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">标准 (5)</span>
    <cyber-progress :percentage="60" theme="neon" :glow-intensity="5" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">强光 (10)</span>
    <cyber-progress :percentage="60" theme="neon" :glow-intensity="10" />
  </div>
</div>

```vue
<template>
  <cyber-progress :percentage="60" :glow-intensity="1" />
  <cyber-progress :percentage="60" :glow-intensity="5" />
  <cyber-progress :percentage="60" :glow-intensity="10" />
</template>
```

## 禁用动画

设置 `:animated="false"` 关闭扫描线和微粒动画，仅保留静态 3D 管道造型。

<div style="max-width: 500px;">
  <cyber-progress :percentage="65" :animated="false" />
</div>

```vue
<template>
  <cyber-progress :percentage="65" :animated="false" />
</template>
```

## 属性 (Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `percentage` | `number` | `0` | 进度百分比 (0-100) |
| `theme` | `'neon' \| 'hologram' \| 'terminal' \| 'matrix'` | `'neon'` | 赛博主题色 |
| `animated` | `boolean` | `true` | 是否启用动画效果 |
| `showPercentage` | `boolean` | `true` | 是否显示百分比数字 |
| `percentagePosition` | `'inside' \| 'outside'` | `'outside'` | 百分比位置 |
| `showStatus` | `boolean` | `false` | 是否显示状态指示器 |
| `indeterminate` | `boolean` | `false` | 不确定加载态 |
| `direction` | `'horizontal' \| 'vertical'` | `'horizontal'` | 进度条方向 |
| `color` | `string` | — | 自定义颜色，覆盖 `theme` |
| `height` | `number` | `24` | 管道高度 (px) |
| `glowIntensity` | `number` | `5` | 发光强度 (1-10) |

## 插槽 (Slots)

本组件无插槽。

## 3D 视觉效果

组件使用以下 CSS 技术实现 3D 立体管道效果：

- **透视环境**：`perspective: 600px` + `rotateX(2deg)` 微倾斜创造俯视 3D 感
- **管道壁**：4 层 `box-shadow`（外发光 + 内高光 + 内暗面 + 内凹陷）模拟管壁厚度
- **液体填充**：4 层 `linear-gradient`（顶部强高光 + 主色渐变 + 底部暗部 + 水平柱面光）模拟圆柱体液
- **管道端口**：`radial-gradient` 椭圆光晕
- **3D 刻度**：`drop-shadow` 多层叠加产生凸起感
- **悬浮文字**：多层 `text-shadow` 偏移产生 3D 立体投影
- **表面扫描**：`linear-gradient` 白色半透明条 + `translateX` 滑动动画
- **液体微粒**：3 个浮动圆点模拟液体中气泡

## 类型导出

```ts
import type {
  ProgressInstance,    // 组件实例类型
  ProgressTheme,       // 'neon' | 'hologram' | 'terminal' | 'matrix'
  ProgressDirection,   // 'horizontal' | 'vertical'
} from 'cyberpunk-ui'
```
