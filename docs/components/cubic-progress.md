---
title: Cubic Progress 立体管道进度条
lang: zh-CN
---

# Cubic Progress 立体管道进度条

利用 CSS 3D Transform 构建的立体管道进度条，通过 4 个面（顶/底/前/后）围成管道截面，渐变填充模拟液体推进效果。

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const loopPercent = ref(0)
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    if (loopPercent.value >= 100) {
      loopPercent.value = 0
    } else {
      loopPercent.value++
    }
  }, 60)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

## 基本用法

下方演示从 0% 到 100% 缓慢加载再循环，完整展示 3D 管道液体推进效果：

<div style="width: 100%;">
  <cyber-cubic-progress :percent="loopPercent" />
</div>

```vue
<template>
  <cyber-cubic-progress :percent="50" />
</template>
```

## 预设配色

内置 5 套赛博朋克配色方案：`pink`（粉紫）、`cyan`（青蓝）、`green`（矩阵绿）、`gold`（赛博金）、`purple`（霓虹紫）。

<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <span style="font-size: 13px; color: #999;">pink 粉紫</span>
    <cyber-cubic-progress :percent="75" color="pink" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">cyan 青蓝</span>
    <cyber-cubic-progress :percent="75" color="cyan" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">green 矩阵绿</span>
    <cyber-cubic-progress :percent="75" color="green" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">gold 赛博金</span>
    <cyber-cubic-progress :percent="75" color="gold" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">purple 霓虹紫</span>
    <cyber-cubic-progress :percent="75" color="purple" />
  </div>
</div>

```vue
<template>
  <cyber-cubic-progress :percent="75" color="pink" />
  <cyber-cubic-progress :percent="75" color="cyan" />
  <cyber-cubic-progress :percent="75" color="green" />
  <cyber-cubic-progress :percent="75" color="gold" />
  <cyber-cubic-progress :percent="75" color="purple" />
</template>
```

## 自定义颜色

通过 `color` 属性传入任意十六进制颜色，组件会自动派生辅助色完成渐变。

<div style="display: flex; flex-direction: column; gap: 16px;">
  <cyber-cubic-progress :percent="60" color="#ff6600" />
  <cyber-cubic-progress :percent="80" color="#ff00ff" />
  <cyber-cubic-progress :percent="45" color="#00ffcc" />
</div>

```vue
<template>
  <cyber-cubic-progress :percent="60" color="#ff6600" />
  <cyber-cubic-progress :percent="80" color="#ff00ff" />
  <cyber-cubic-progress :percent="45" color="#00ffcc" />
</template>
```

## 百分比阶梯

不同进度值的填充效果对比。

<div style="display: flex; flex-direction: column; gap: 16px;">
  <div v-for="pct in [0, 15, 30, 50, 75, 100]" :key="pct">
    <span style="font-size: 13px; color: #999;">{{ pct }}%</span>
    <cyber-cubic-progress :percent="pct" color="pink" />
  </div>
</div>

```vue
<template>
  <cyber-cubic-progress :percent="0" color="pink" />
  <cyber-cubic-progress :percent="30" color="pink" />
  <cyber-cubic-progress :percent="50" color="pink" />
  <cyber-cubic-progress :percent="75" color="pink" />
  <cyber-cubic-progress :percent="100" color="pink" />
</template>
```

## 不确定态

设置 `indeterminate` 进入加载循环动画，光带在管道中持续滑动。此时忽略 `percent` 值，文字显示为 "LOADING"。

<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <span style="font-size: 13px; color: #999;">pink</span>
    <cyber-cubic-progress indeterminate color="pink" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">cyan</span>
    <cyber-cubic-progress indeterminate color="cyan" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">green</span>
    <cyber-cubic-progress indeterminate color="green" />
  </div>
</div>

```vue
<template>
  <cyber-cubic-progress indeterminate color="pink" />
  <cyber-cubic-progress indeterminate color="cyan" />
</template>
```

## 管道粗细

通过 `pipeHeight` 控制 3D 管道的截面高度（像素）。

<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <span style="font-size: 13px; color: #999;">细管 40px</span>
    <cyber-cubic-progress :percent="70" :pipe-height="40" color="cyan" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">标准 100px</span>
    <cyber-cubic-progress :percent="70" :pipe-height="100" color="cyan" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">粗管 160px</span>
    <cyber-cubic-progress :percent="70" :pipe-height="160" color="cyan" />
  </div>
</div>

```vue
<template>
  <cyber-cubic-progress :percent="70" :pipe-height="40" color="cyan" />
  <cyber-cubic-progress :percent="70" :pipe-height="100" color="cyan" />
  <cyber-cubic-progress :percent="70" :pipe-height="160" color="cyan" />
</template>
```

## 发光强度

通过 `glowIntensity`（1-10）控制管道面发光和文字辉光强度。

<div style="display: flex; flex-direction: column; gap: 16px;">
  <div>
    <span style="font-size: 13px; color: #999;">微弱 (1)</span>
    <cyber-cubic-progress :percent="60" color="purple" :glow-intensity="1" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">标准 (5)</span>
    <cyber-cubic-progress :percent="60" color="purple" :glow-intensity="5" />
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">强光 (10)</span>
    <cyber-cubic-progress :percent="60" color="purple" :glow-intensity="10" />
  </div>
</div>

```vue
<template>
  <cyber-cubic-progress :percent="60" color="purple" :glow-intensity="1" />
  <cyber-cubic-progress :percent="60" color="purple" :glow-intensity="5" />
  <cyber-cubic-progress :percent="60" color="purple" :glow-intensity="10" />
</template>
```

## 隐藏文字

设置 `:show-text="false"` 隐藏管道下方的百分比文字，仅保留纯 3D 管道视觉。

<div style="max-width: 500px;">
  <cyber-cubic-progress :percent="88" color="gold" :show-text="false" />
</div>

```vue
<template>
  <cyber-cubic-progress :percent="88" color="gold" :show-text="false" />
</template>
```

## 属性 (Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `percent` | `number` | `0` | 进度百分比 (0-100) |
| `color` | `string` | `'pink'` | 预设配色名（`pink` / `cyan` / `green` / `gold` / `purple`）或自定义十六进制颜色 |
| `pipeWidth` | `number` | `600` | 管道宽度 (px) |
| `pipeHeight` | `number` | `100` | 管道截面高度 (px) |
| `perspective` | `number` | `520` | 3D 透视距离 |
| `rotateX` | `number` | `-33.5` | 管道 X 轴旋转角度 |
| `indeterminate` | `boolean` | `false` | 不确定加载态，光带持续滑动 |
| `showText` | `boolean` | `true` | 是否显示进度文字 |
| `glowIntensity` | `number` | `5` | 发光强度 (1-10) |

## 插槽 (Slots)

本组件无插槽。

## 3D 视觉效果

组件使用以下 CSS 技术实现 3D 立体管道效果：

- **透视环境**：`perspective` + `transform-style: preserve-3d` 创建 3D 渲染上下文
- **管道截面**：4 个 `<li>` 面（top / bottom / front / back）通过 `rotateX` + `translateZ` 围成矩形管壁
- **整体旋转**：管道绕 X 轴倾斜 `rotateX`（默认 -33.5°），形成俯视视角
- **液体填充**：`linear-gradient` 动态色标位置由 `percent` 实时计算，模拟液体推进
- **管壁发光**：`::after` 伪元素叠加 `box-shadow` 内外发光
- **不确定态**：光带梯度 + `background-position` 滑动动画
- **文字辉光**：多层 `text-shadow` 叠加主色发光

## 类型导出

```ts
import type {
  CubicProgressInstance,   // 组件实例类型
  ColorPreset,           // 'pink' | 'cyan' | 'green' | 'gold' | 'purple'
  ColorSet,              // 配色数据结构 { primary, secondary, empty }
} from 'cyberpunk-ui'
```
