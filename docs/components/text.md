---
title: Text 故障文字
lang: zh-CN
---

# Text 故障文字

赛博朋克风格的故障艺术效果文字组件，通过 `::before` / `::after` 伪元素生成红蓝偏移叠影，配合扫描线动画和 clip-path 故障位移，模拟 CRT 屏幕信号干扰的视觉效果。

## 基本用法

`text` 属性设置文字内容（用于伪元素复制），默认 `effect="glitch"`，hover 时触发故障位移。

<cyber-text text="CyberPunkUI"></cyber-text>

```vue
<template>
  <cyber-text text="CyberPunkUI"></cyber-text>
</template>
```

> 也可以使用默认插槽代替 `text` 属性，但推荐使用 `text` 属性以确保伪元素能正确复制文字内容。

## 四种故障效果

通过 `effect` 属性切换不同的视觉效果。

### glitch — 经典故障位移

保留并增强的原有效果：`::before` 高度跳动（红影），`::after` 高度跳动（蓝影），hover 时触发 clip-path 故障位移。

<cyber-text text="GLITCH 故障文字" effect="glitch" shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"></cyber-text>

```vue
<template>
  <cyber-text
    text="GLITCH 故障文字"
    effect="glitch"
    shadow-color="#ff00b3"
    glitch-color="#00c3ff"
    line-color="#fff"
  />
</template>
```

### flicker — 快速闪烁干扰

`::before` / `::after` 透明度随机跳变，模拟信号干扰导致的画面闪烁，扫描线快速不规则移动。

<cyber-text text="FLICKER 闪烁干扰" effect="flicker" shadow-color="#ff5500" glitch-color="#00ff88" line-color="#ff5500"></cyber-text>

```vue
<template>
  <cyber-text
    text="FLICKER 闪烁干扰"
    effect="flicker"
    shadow-color="#ff5500"
    glitch-color="#00ff88"
    line-color="#ff5500"
  />
</template>
```

### pulse — 呼吸脉冲

`::before` / `::after` 的对比度和亮度平滑呼吸，扫描线正弦式上下滑动，节奏感强。

<cyber-text text="PULSE 呼吸脉冲" effect="pulse" shadow-color="#a855f7" glitch-color="#00e6f6" line-color="#a855f7"></cyber-text>

```vue
<template>
  <cyber-text
    text="PULSE 呼吸脉冲"
    effect="pulse"
    shadow-color="#a855f7"
    glitch-color="#00e6f6"
    line-color="#a855f7"
  />
</template>
```

### static — 静态故障叠影

`::before` / `::after` 固定偏移显示，无循环动画。hover 时触发一次短暂的 glitch 位移。

<cyber-text text="STATIC 静态叠影" effect="static" shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"></cyber-text>

```vue
<template>
  <cyber-text
    text="STATIC 静态叠影"
    effect="static"
    shadow-color="#ff00b3"
    glitch-color="#00c3ff"
    line-color="#fff"
  />
</template>
```

## 常驻效果 glowing

默认 `glowing="false"`，仅在 hover 时展示故障动画。设置为 `true` 则动画持续运行。

<cyber-text text="常驻故障" effect="glitch" glowing shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"></cyber-text>
<br />
<cyber-text text="常驻闪烁" effect="flicker" glowing shadow-color="#ff5500" glitch-color="#00ff88" line-color="#ff5500"></cyber-text>
<br />
<cyber-text text="常驻呼吸" effect="pulse" glowing shadow-color="#a855f7" glitch-color="#00e6f6" line-color="#a855f7"></cyber-text>
<br />
<cyber-text text="常驻叠影" effect="static" glowing shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"></cyber-text>

```vue
<template>
  <cyber-text text="常驻故障" effect="glitch" glowing shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff" />
  <cyber-text text="常驻闪烁" effect="flicker" glowing shadow-color="#ff5500" glitch-color="#00ff88" line-color="#ff5500" />
  <cyber-text text="常驻呼吸" effect="pulse" glowing shadow-color="#a855f7" glitch-color="#00e6f6" line-color="#a855f7" />
  <cyber-text text="常驻叠影" effect="static" glowing shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff" />
</template>
```

## 自定义配色

通过 `shadow-color`（红/暖色侧）和 `glitch-color`（蓝/冷色侧）自定义双色叠影。

<cyber-text text="CYBERPUNK 2077" effect="glitch" glowing shadow-color="#ff00b3" glitch-color="#00e6f6" line-color="#fff"></cyber-text>
<br />
<cyber-text text="TERMINAL V2.0" effect="glitch" glowing shadow-color="#ff6600" glitch-color="#00ff66" line-color="#ff6600"></cyber-text>
<br />
<cyber-text text="NEON CITY" effect="pulse" glowing shadow-color="#a855f7" glitch-color="#ffd700" line-color="#a855f7"></cyber-text>

```vue
<template>
  <!-- 经典赛博：粉 + 青 -->
  <cyber-text text="CYBERPUNK 2077" effect="glitch" glowing
    shadow-color="#ff00b3" glitch-color="#00e6f6" line-color="#fff" />

  <!-- 终端风格：橙 + 绿 -->
  <cyber-text text="TERMINAL V2.0" effect="glitch" glowing
    shadow-color="#ff6600" glitch-color="#00ff66" line-color="#ff6600" />

  <!-- 霓虹风格：紫 + 金 -->
  <cyber-text text="NEON CITY" effect="pulse" glowing
    shadow-color="#a855f7" glitch-color="#ffd700" line-color="#a855f7" />
</template>
```

## 动画速度

通过 `animationSpeed` 控制动画周期倍率。

<cyber-text text="SLOW 慢速" effect="glitch" glowing animation-speed="slow" shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"></cyber-text>
&nbsp;&nbsp;
<cyber-text text="NORMAL 正常" effect="glitch" glowing animation-speed="normal" shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"></cyber-text>
&nbsp;&nbsp;
<cyber-text text="FAST 快速" effect="glitch" glowing animation-speed="fast" shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff"></cyber-text>

```vue
<template>
  <cyber-text text="SLOW" effect="glitch" glowing animation-speed="slow"
    shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff" />
  <cyber-text text="NORMAL" effect="glitch" glowing animation-speed="normal"
    shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff" />
  <cyber-text text="FAST" effect="glitch" glowing animation-speed="fast"
    shadow-color="#ff00b3" glitch-color="#00c3ff" line-color="#fff" />
</template>
```

## 扫描线与禁用

控制扫描线显隐和组件禁用。

<cyber-text text="隐藏扫描线" effect="glitch" glowing :line-visible="false" shadow-color="#ff00b3" glitch-color="#00c3ff"></cyber-text>
&nbsp;&nbsp;
<cyber-text text="禁用状态" effect="glitch" disabled shadow-color="#ff00b3" glitch-color="#00c3ff"></cyber-text>

```vue
<template>
  <!-- 隐藏扫描线 -->
  <cyber-text text="隐藏扫描线" effect="glitch" glowing
    :line-visible="false" shadow-color="#ff00b3" glitch-color="#00c3ff" />

  <!-- 禁用状态 -->
  <cyber-text text="禁用状态" effect="glitch" disabled
    shadow-color="#ff00b3" glitch-color="#00c3ff" />
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|--------|------|------|--------|--------|
| text | 文字内容（用于伪元素复制，推荐使用） | string | — | `''` |
| shadowColor | ::before 左侧暖色阴影 | string | — | `#ff00b3` |
| glitchColor | ::after 右侧冷色阴影 | string | — | `#00c3ff` |
| lineColor | 扫描线颜色 | string | — | `transparent` |
| effect | 故障效果类型 | string | `glitch` / `flicker` / `pulse` / `static` | `glitch` |
| glowing | 是否常驻效果（false 则仅 hover 触发） | boolean | — | `false` |
| animationSpeed | 动画速度 | string | `slow` / `normal` / `fast` | `normal` |
| lineVisible | 是否显示扫描线 | boolean | — | `true` |
| tag | 渲染的 HTML 标签 | string | — | `div` |
| disabled | 是否禁用 | boolean | — | `false` |
