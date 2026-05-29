---
title: GlowText 发光文字
lang: zh-CN
---

# GlowText 发光文字

霓虹发光效果文字组件，支持四种光效类型，可设置为常驻发光或 hover 触发，支持多档尺寸和动画速度调节。

## 基本用法

默认 `effect="neon"`，hover 时触发霓虹光效。

<cyber-glow-text>CyberGlowText</cyber-glow-text>

```vue
<template>
  <cyber-glow-text>CyberGlowText</cyber-glow-text>
</template>
```

## 四种光效类型

通过 `effect` 属性切换不同的霓虹光效。

### neon — 经典霓虹灯管

参考霓虹灯管招牌效果，亮部与暗部交替呼吸，`ease-in-out` 缓动。

<cyber-glow-text color="#e91e84" effect="neon">NEON 霓虹灯管</cyber-glow-text>
<br />
<cyber-glow-text color="#00e6f6" effect="neon">NEON 青色</cyber-glow-text>

```vue
<template>
  <cyber-glow-text color="#e91e84" effect="neon">NEON 霓虹灯管</cyber-glow-text>
  <cyber-glow-text color="#00e6f6" effect="neon">NEON 青色</cyber-glow-text>
</template>
```

### flux — 线性平滑呼吸

`linear` 线性过渡，光晕从暗到亮再回到暗，呼吸感更平缓。

<cyber-glow-text color="#22c55e" effect="flux">FLUX 呼吸光晕</cyber-glow-text>
<br />
<cyber-glow-text color="#a855f7" effect="flux">FLUX 紫色</cyber-glow-text>

```vue
<template>
  <cyber-glow-text color="#22c55e" effect="flux">FLUX 呼吸光晕</cyber-glow-text>
  <cyber-glow-text color="#a855f7" effect="flux">FLUX 紫色</cyber-glow-text>
</template>
```

### turnon — 灯管启动闪烁

模拟霓虹灯管通电后反复闪烁、最终稳定的过程，使用 `steps(2, start)` 制造跳变感。每次移入重新触发。

<cyber-glow-text color="#ff55de" effect="turnon">TURNON 启动闪烁</cyber-glow-text>
<br />
<cyber-glow-text color="#00e6f6" effect="turnon">TURNON 青色</cyber-glow-text>

```vue
<template>
  <cyber-glow-text color="#ff55de" effect="turnon">TURNON 启动闪烁</cyber-glow-text>
  <cyber-glow-text color="#00e6f6" effect="turnon">TURNON 青色</cyber-glow-text>
</template>
```

### blink — 急速闪烁

参考霓虹灯管接触不良时的急速闪烁效果，透明度和光晕快速跳变。

<cyber-glow-text color="#ff0040" effect="blink">BLINK 急速闪烁</cyber-glow-text>
<br />
<cyber-glow-text color="#00ff88" effect="blink">BLINK 绿色</cyber-glow-text>

```vue
<template>
  <cyber-glow-text color="#ff0040" effect="blink">BLINK 急速闪烁</cyber-glow-text>
  <cyber-glow-text color="#00ff88" effect="blink">BLINK 绿色</cyber-glow-text>
</template>
```

## 常驻发光 glowing

默认 `glowing="false"`，仅在 hover 时展示光效。设置为 `true` 则始终发光。

<cyber-glow-text color="#e91e84" effect="neon" glowing>常驻霓虹</cyber-glow-text>
&nbsp;&nbsp;
<cyber-glow-text color="#22c55e" effect="flux" glowing>常驻呼吸</cyber-glow-text>
&nbsp;&nbsp;
<cyber-glow-text color="#a855f7" effect="turnon" glowing>常驻启动</cyber-glow-text>
&nbsp;&nbsp;
<cyber-glow-text color="#ff0040" effect="blink" glowing>WARNING</cyber-glow-text>

```vue
<template>
  <cyber-glow-text color="#e91e84" effect="neon" glowing>常驻霓虹</cyber-glow-text>
  <cyber-glow-text color="#22c55e" effect="flux" glowing>常驻呼吸</cyber-glow-text>
  <cyber-glow-text color="#a855f7" effect="turnon" glowing>常驻启动</cyber-glow-text>
  <cyber-glow-text color="#ff0040" effect="blink" glowing>WARNING</cyber-glow-text>
</template>
```

## 自定义发光颜色

通过 `color` 属性自定义光色。

<cyber-glow-text color="#ff5588" glowing effect="neon">粉色发光</cyber-glow-text>
<br />
<cyber-glow-text color="#00e6f6" glowing effect="flux">青色发光</cyber-glow-text>
<br />
<cyber-glow-text color="#22c55e" glowing effect="neon">绿色发光</cyber-glow-text>
<br />
<cyber-glow-text color="#a855f7" glowing effect="flux">紫色发光</cyber-glow-text>

```vue
<template>
  <cyber-glow-text color="#ff5588" glowing effect="neon">粉色发光</cyber-glow-text>
  <cyber-glow-text color="#00e6f6" glowing effect="flux">青色发光</cyber-glow-text>
  <cyber-glow-text color="#22c55e" glowing effect="neon">绿色发光</cyber-glow-text>
  <cyber-glow-text color="#a855f7" glowing effect="flux">紫色发光</cyber-glow-text>
</template>
```

## 动画速度

通过 `animationSpeed` 控制 `neon` / `flux` / `blink` 三种效果的动画周期（`turnon` 效果不适用）。

<cyber-glow-text animation-speed="slow" glowing effect="flux" color="#22c55e">SLOW 3s</cyber-glow-text>
&nbsp;&nbsp;
<cyber-glow-text animation-speed="normal" glowing effect="flux" color="#00e6f6">NORMAL 1.5s</cyber-glow-text>
&nbsp;&nbsp;
<cyber-glow-text animation-speed="fast" glowing effect="flux" color="#ff5588">FAST 0.75s</cyber-glow-text>

```vue
<template>
  <cyber-glow-text animation-speed="slow" glowing effect="flux" color="#22c55e">SLOW 3s</cyber-glow-text>
  <cyber-glow-text animation-speed="normal" glowing effect="flux" color="#00e6f6">NORMAL 1.5s</cyber-glow-text>
  <cyber-glow-text animation-speed="fast" glowing effect="flux" color="#ff5588">FAST 0.75s</cyber-glow-text>
</template>
```

## 禁用状态

`disabled` 状态下灰阶降暗，无 hover 交互。

<cyber-glow-text disabled color="#e91e84">禁用的发光文字</cyber-glow-text>
&nbsp;&nbsp;
<cyber-glow-text disabled glowing effect="neon" color="#00e6f6">禁用常驻</cyber-glow-text>

```vue
<template>
  <cyber-glow-text disabled color="#e91e84">禁用的发光文字</cyber-glow-text>
  <cyber-glow-text disabled glowing effect="neon" color="#00e6f6">禁用常驻</cyber-glow-text>
</template>
```

## 自定义 HTML 标签

通过 `tag` 属性指定渲染的 HTML 元素，默认为 `<span>`。

```vue
<template>
  <!-- 渲染为 h2 -->
  <cyber-glow-text tag="h2" glowing effect="neon" color="#e91e84">标题文字</cyber-glow-text>

  <!-- 渲染为 div -->
  <cyber-glow-text tag="div" effect="flux" color="#00e6f6">块级文字</cyber-glow-text>
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| color | 霓虹主光色 | string | — | `#e91e84` |
| glowing | 是否常驻发光（false 则仅 hover 触发） | boolean | — | `false` |
| effect | 霓虹光效类型 | string | `neon` / `flux` / `turnon` / `blink` | `neon` |
| animationSpeed | 动画速度（turnon 不适用） | string | `slow` / `normal` / `fast` | `normal` |
| tag | 渲染的 HTML 标签 | string | — | `span` |
| disabled | 是否禁用 | boolean | — | `false` |
