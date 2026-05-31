---
title: MagicText 魔法文字
lang: zh-CN
---

# MagicText 魔法文字

具有炫彩渐变和高光扫描效果的魔法文字组件，文字表面会有流光溢彩的动画效果。

## 基本用法

通过 slot 传入文本内容即可使用，默认使用赛博朋克经典渐变 + 白色高光扫描。

<div style="display: flex; font-size: 36px; line-height: 50px">
  <cyber-magic-text>CyberMagicText</cyber-magic-text>
</div>

```vue
<template>
  <cyber-magic-text>CyberMagicText</cyber-magic-text>
</template>
```

## 渐变预设

内置 6 种赛博朋克风格渐变配色，通过 `gradient` 属性快速切换。

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; font-size: 28px; line-height: 40px;">
  <div>
    <span style="font-size: 14px; color: #999;">cyberpunk</span><br/>
    <cyber-magic-text gradient="cyberpunk">赛博朋克</cyber-magic-text>
  </div>
  <div>
    <span style="font-size: 14px; color: #999;">aurora</span><br/>
    <cyber-magic-text gradient="aurora">极光渐变</cyber-magic-text>
  </div>
  <div>
    <span style="font-size: 14px; color: #999;">fire</span><br/>
    <cyber-magic-text gradient="fire">火焰渐变</cyber-magic-text>
  </div>
  <div>
    <span style="font-size: 14px; color: #999;">ocean</span><br/>
    <cyber-magic-text gradient="ocean">海洋渐变</cyber-magic-text>
  </div>
  <div>
    <span style="font-size: 14px; color: #999;">sunset</span><br/>
    <cyber-magic-text gradient="sunset">日落渐变</cyber-magic-text>
  </div>
  <div>
    <span style="font-size: 14px; color: #999;">neon</span><br/>
    <cyber-magic-text gradient="neon">霓虹渐变</cyber-magic-text>
  </div>
</div>

```vue
<template>
  <cyber-magic-text gradient="cyberpunk">赛博朋克</cyber-magic-text>
  <cyber-magic-text gradient="aurora">极光渐变</cyber-magic-text>
  <cyber-magic-text gradient="fire">火焰渐变</cyber-magic-text>
  <cyber-magic-text gradient="ocean">海洋渐变</cyber-magic-text>
  <cyber-magic-text gradient="sunset">日落渐变</cyber-magic-text>
  <cyber-magic-text gradient="neon">霓虹渐变</cyber-magic-text>
</template>
```

## 自定义渐变色

通过 `gradientColors` 和 `gradientAngle` 自定义渐变颜色与角度。

<div style="display: flex; gap: 20px; font-size: 28px; line-height: 40px; flex-wrap: wrap;">
  <cyber-magic-text :gradient-colors="['#ff00ff', '#ffbf00', '#00ffff']" gradient-angle="90deg">
    90° 渐变
  </cyber-magic-text>
  <cyber-magic-text :gradient-colors="['#00ff00', '#00ffcc', '#00aaff']" gradient-angle="135deg">
    135° 渐变
  </cyber-magic-text>
  <cyber-magic-text :gradient-colors="['#ff004c', '#7b2fbe', '#00d4ff']" gradient-angle="to right">
    水平渐变
  </cyber-magic-text>
</div>

```vue
<template>
  <cyber-magic-text
    :gradient-colors="['#ff00ff', '#ffbf00', '#00ffff']"
    gradient-angle="90deg"
  >
    90° 渐变
  </cyber-magic-text>
  <cyber-magic-text
    :gradient-colors="['#00ff00', '#00ffcc', '#00aaff']"
    gradient-angle="135deg"
  >
    135° 渐变
  </cyber-magic-text>
</template>
```

## 动画速度

三种预设速度：`slow`（30秒）/ `normal`（20秒）/ `fast`（10秒），或通过 `duration` 自定义秒数。

<div style="display: flex; gap: 20px; font-size: 28px; line-height: 40px; flex-wrap: wrap;">
  <div>
    <span style="font-size: 13px; color: #999;">slow (30s)</span><br/>
    <cyber-magic-text speed="slow">慢速扫描</cyber-magic-text>
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">normal (20s)</span><br/>
    <cyber-magic-text speed="normal">正常速度</cyber-magic-text>
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">fast (10s)</span><br/>
    <cyber-magic-text speed="fast">快速扫描</cyber-magic-text>
  </div>
  <div>
    <span style="font-size: 13px; color: #999;">duration=5s</span><br/>
    <cyber-magic-text :duration="5">5秒扫描</cyber-magic-text>
  </div>
</div>

```vue
<template>
  <cyber-magic-text speed="slow">慢速扫描</cyber-magic-text>
  <cyber-magic-text speed="normal">正常速度</cyber-magic-text>
  <cyber-magic-text speed="fast">快速扫描</cyber-magic-text>
  <cyber-magic-text :duration="5">5秒扫描</cyber-magic-text>
</template>
```

## 高光效果

自定义扫描高光的颜色、大小和混合模式。

<div style="display: flex; gap: 16px; font-size: 24px; line-height: 36px; flex-wrap: wrap;">
  <cyber-magic-text glow-color="#fff" glow-size="25%" gradient="ocean">
    白色高光
  </cyber-magic-text>
  <cyber-magic-text glow-color="#00ffff" glow-size="28%" blend-mode="screen" gradient="ocean">
    青色+screen
  </cyber-magic-text>
  <cyber-magic-text glow-color="#ffbf00" glow-size="40%" blend-mode="soft-light" gradient="ocean">
    金色大光斑
  </cyber-magic-text>
</div>

```vue
<template>
  <cyber-magic-text glow-color="#fff" glow-size="25%" gradient="ocean">
    白色高光
  </cyber-magic-text>
  <cyber-magic-text
    glow-color="#00ffff"
    glow-size="28%"
    blend-mode="screen"
    gradient="ocean"
  >
    青色+screen
  </cyber-magic-text>
</template>
```

## 描边样式

自定义文字描边的颜色和宽度。

<div style="display: flex; gap: 20px; font-size: 28px; line-height: 40px; flex-wrap: wrap;">
  <cyber-magic-text stroke-color="#ff00ff" stroke-width="2px">紫红描边</cyber-magic-text>
  <cyber-magic-text stroke-color="#00ffff" stroke-width="2px">青色描边</cyber-magic-text>
  <cyber-magic-text stroke-color="transparent" stroke-width="0px">无描边</cyber-magic-text>
</div>

```vue
<template>
  <cyber-magic-text stroke-color="#ff00ff" stroke-width="2px">紫红描边</cyber-magic-text>
  <cyber-magic-text stroke-color="#00ffff" stroke-width="2px">青色描边</cyber-magic-text>
  <cyber-magic-text stroke-color="transparent" stroke-width="0px">无描边</cyber-magic-text>
</template>
```

## 字体样式

通过 `fontWeight` 和 `fontFamily` 自定义文字外观。

<div style="display: flex; gap: 20px; font-size: 28px; line-height: 40px; flex-wrap: wrap;">
  <cyber-magic-text font-weight="300" gradient="aurora">轻量字重</cyber-magic-text>
  <cyber-magic-text font-weight="900" gradient="fire">超粗字重</cyber-magic-text>
  <cyber-magic-text font-family="'Times New Roman', serif" gradient="sunset">
    衬线字体
  </cyber-magic-text>
</div>

```vue
<template>
  <cyber-magic-text font-weight="300" gradient="aurora">轻量字重</cyber-magic-text>
  <cyber-magic-text font-weight="900" gradient="fire">超粗字重</cyber-magic-text>
  <cyber-magic-text font-family="'Times New Roman', serif" gradient="sunset">
    衬线字体
  </cyber-magic-text>
</template>
```

## 渲染标签

通过 `tag` 属性指定 HTML 标签（默认为 `span`）。

```vue
<template>
  <cyber-magic-text tag="h1" gradient="neon">H1 大标题</cyber-magic-text>
  <cyber-magic-text tag="h2" gradient="ocean">H2 副标题</cyber-magic-text>
  <cyber-magic-text tag="p" gradient="fire">段落文字</cyber-magic-text>
</template>
```

## 禁用态

设置 `disabled` 后，动画停止，文字变灰并降低透明度。

<div style="display: flex; gap: 20px; font-size: 28px; line-height: 40px;">
  <cyber-magic-text>正常状态</cyber-magic-text>
  <cyber-magic-text disabled>已禁用</cyber-magic-text>
</div>

```vue
<template>
  <cyber-magic-text disabled>这段文字已禁用</cyber-magic-text>
</template>
```

## 不同尺寸

通过外部 CSS 控制 `font-size`，支持各种尺寸的文字。

<div style="display: flex; gap: 12px; line-height: 1.2; flex-wrap: wrap; align-items: baseline;">
  <span style="font-size: 60px;"><cyber-magic-text gradient="cyberpunk">大字</cyber-magic-text></span>
  <span style="font-size: 36px;"><cyber-magic-text gradient="aurora">中字</cyber-magic-text></span>
  <span style="font-size: 18px;"><cyber-magic-text gradient="fire">小字</cyber-magic-text></span>
</div>

```vue
<template>
  <span style="font-size: 60px">
    <cyber-magic-text gradient="cyberpunk">大字 60px</cyber-magic-text>
  </span>
</template>
```

## 组合效果

综合使用多个参数打造独特的文字视觉风格。

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; font-size: 28px; line-height: 40px;">
  <div style="text-align: center;">
    <span style="font-size: 13px; color: #999;">赛博霓虹</span><br/>
    <cyber-magic-text
      gradient="neon" speed="fast"
      glow-color="#ff00ff" stroke-color="#ff00ff" stroke-width="1px"
    >NEON CYBER</cyber-magic-text>
  </div>
  <div style="text-align: center;">
    <span style="font-size: 13px; color: #999;">深海极光</span><br/>
    <cyber-magic-text
      gradient="ocean" speed="slow"
      glow-color="#7efff5" glow-size="30%" stroke-color="#00d4ff"
    >DEEP OCEAN</cyber-magic-text>
  </div>
  <div style="text-align: center;">
    <span style="font-size: 13px; color: #999;">烈焰风暴</span><br/>
    <cyber-magic-text
      gradient="fire" speed="fast"
      glow-color="#ffe600" stroke-color="#ff6b00" stroke-width="2px" blend-mode="hard-light"
    >FIRE STORM</cyber-magic-text>
  </div>
  <div style="text-align: center;">
    <span style="font-size: 13px; color: #999;">极光幻影</span><br/>
    <cyber-magic-text
      gradient="aurora" speed="normal"
      glow-color="#00ff87" glow-size="28%" stroke-color="#7b2fbe" blend-mode="screen"
    >AURORA</cyber-magic-text>
  </div>
</div>

## 属性 (Props)

| 属性 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- |
| `speed` | `'slow' \| 'normal' \| 'fast'` | `'normal'` | 动画速度预设（慢30s / 中20s / 快10s） |
| `duration` | `number` | — | 自定义动画时长（秒），优先级高于 `speed` |
| `gradient` | `'cyberpunk' \| 'aurora' \| 'fire' \| 'ocean' \| 'sunset' \| 'neon'` | `'cyberpunk'` | 渐变预设配色 |
| `gradientColors` | `string[]` | — | 自定义渐变色数组，优先级高于 `gradient` |
| `gradientAngle` | `string` | `'45deg'` | 渐变角度，支持 `'45deg'`、`'to right'` 等 CSS 值 |
| `glowColor` | `string` | `'#fff'` | 高光扫描颜色（径向渐变中心色） |
| `glowSize` | `string` | `'25%'` | 高光光斑大小 |
| `strokeColor` | `string` | `'#2b2b50'` | 文字描边颜色 |
| `strokeWidth` | `string` | `'1px'` | 描边宽度 |
| `blendMode` | `'color-dodge' \| 'overlay' \| 'soft-light' \| 'screen' \| 'hard-light'` | `'color-dodge'` | 高光混合模式 |
| `fontWeight` | `string \| number` | `'bold'` | 字体粗细 |
| `fontFamily` | `string` | `'Arial, sans-serif'` | 字体族 |
| `tag` | `string` | `'span'` | 渲染的 HTML 标签 |
| `disabled` | `boolean` | `false` | 是否禁用动画效果 |
| `direction` | `'normal' \| 'reverse' \| 'alternate'` | `'normal'` | 动画播放方向 |

## 插槽 (Slots)

| 插槽名 | 说明 |
| --- | --- |
| `default` | 魔法文字显示内容 |

## 动画效果

- 文字具有渐变色效果，内置 6 种预设
- 表面有圆形高光扫描动画
- 高光扫描周期可调（预设 10s / 20s / 30s，或自定义秒数）
- 文字边缘带有可自定义的描边效果
- 支持多种 CSS 混合模式

## 类型导出

组件还导出以下 TypeScript 类型，方便在项目中使用：

```ts
import type {
  MagicTextSpeed,       // 'slow' | 'normal' | 'fast'
  MagicTextGradient,    // 'cyberpunk' | 'aurora' | 'fire' | 'ocean' | 'sunset' | 'neon'
  MagicTextBlendMode,   // 'color-dodge' | 'overlay' | 'soft-light' | 'screen' | 'hard-light'
  MagicTextDirection,   // 'normal' | 'reverse' | 'alternate'
  MagicTextInstance,    // 组件实例类型
} from 'cyberpunk-ui'
```

## 使用建议

- 适合用于标题、重要提示等醒目位置
- 建议搭配深色背景使用，效果更佳
- 通过外部 CSS `font-size` 调整文字大小，各尺寸表现均良好
- 中英文和特殊字符均支持
- 对于大幅标题，推荐使用 `speed="slow"` 营造静谧高级感
- 对于动态提示，推荐使用 `speed="fast"` 增强视觉冲击力
