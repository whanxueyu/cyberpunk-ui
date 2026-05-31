<template>
  <component
    :is="tag"
    :class="[
      'cp-magic-text',
      `cp-magic-text--${speed}`,
      {
        'cp-magic-text--disabled': disabled,
      },
    ]"
    :data-text="content"
    :style="rootStyle"
  >
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { MagicTextSpeed, MagicTextGradient, MagicTextBlendMode, MagicTextDirection } from './instance'

defineOptions({
  name: 'CyberMagicText',
})

const slots = useSlots()

// ===================== 渐变预设映射 =====================
const GRADIENT_PRESETS: Record<MagicTextGradient, string> = {
  cyberpunk: 'linear-gradient(var(--mt-gradient-angle, 45deg), #ff269b, #2ab5f5, #ffbf00)',
  aurora: 'linear-gradient(var(--mt-gradient-angle, 45deg), #00ff87, #00d4ff, #7b2fbe)',
  fire: 'linear-gradient(var(--mt-gradient-angle, 45deg), #ff004c, #ff6b00, #ffe600)',
  ocean: 'linear-gradient(var(--mt-gradient-angle, 45deg), #001f5b, #00a8cc, #7efff5)',
  sunset: 'linear-gradient(var(--mt-gradient-angle, 45deg), #7b2fbe, #ff269b, #ffbf00)',
  neon: 'linear-gradient(var(--mt-gradient-angle, 45deg), #ff00ff, #00ffff, #ff00ff)',
}

// ===================== Props =====================
const props = withDefaults(
  defineProps<{
    /** 动画速度预设 */
    speed?: MagicTextSpeed
    /** 自定义动画时长（秒），优先级高于 speed */
    duration?: number
    /** 渐变预设 */
    gradient?: MagicTextGradient
    /** 自定义渐变色，优先级高于 gradient 预设。如 ['#ff269b', '#2ab5f5', '#ffbf00'] */
    gradientColors?: string[]
    /** 渐变角度，如 '45deg'、'to right' */
    gradientAngle?: string
    /** 高光颜色（径向渐变中心色） */
    glowColor?: string
    /** 高光光斑大小，如 '25%' */
    glowSize?: string
    /** 文字描边颜色 */
    strokeColor?: string
    /** 描边宽度，如 '1px' */
    strokeWidth?: string
    /** 高光混合模式 */
    blendMode?: MagicTextBlendMode
    /** 字体粗细 */
    fontWeight?: string | number
    /** 字体族 */
    fontFamily?: string
    /** 渲染的 HTML 标签 */
    tag?: string
    /** 是否禁用动画效果 */
    disabled?: boolean
    /** 动画播放方向 */
    direction?: MagicTextDirection
  }>(),
  {
    speed: 'normal',
    gradient: 'cyberpunk',
    gradientAngle: '45deg',
    glowColor: '#fff',
    glowSize: '25%',
    strokeColor: '#2b2b50',
    strokeWidth: '1px',
    blendMode: 'color-dodge',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    tag: 'span',
    disabled: false,
    direction: 'normal',
  },
)

// ===================== 计算属性 =====================

/** 从 slot 中递归提取文本内容，支持动态更新 */
const content = computed(() => {
  if (!slots.default) return ''
  const nodes = slots.default()
  if (!nodes || nodes.length === 0) return ''

  const extractText = (node: any): string => {
    if (typeof node === 'string') return node
    if (typeof node === 'number') return String(node)
    if (node.children) {
      if (typeof node.children === 'string') return node.children
      if (Array.isArray(node.children)) return node.children.map(extractText).join('')
    }
    return ''
  }
  return nodes.map(extractText).join('')
})

/** 渐变 CSS 值 */
const gradientValue = computed(() => {
  if (props.gradientColors && props.gradientColors.length > 0) {
    const colors = props.gradientColors.join(', ')
    return `linear-gradient(${props.gradientAngle}, ${colors})`
  }
  return GRADIENT_PRESETS[props.gradient]
})

/** 根元素 CSS 变量 */
const rootStyle = computed(() => {
  const style: Record<string, string> = {
    '--mt-gradient': gradientValue.value,
    '--mt-gradient-angle': props.gradientAngle,
    '--mt-glow-color': props.glowColor,
    '--mt-glow-size': props.glowSize,
    '--mt-stroke-color': props.strokeColor,
    '--mt-stroke-width': props.strokeWidth,
    '--mt-blend-mode': props.blendMode,
    '--mt-font-weight': String(props.fontWeight),
    '--mt-font-family': props.fontFamily,
  }
  // 仅在显式传入 duration 时使用内联样式覆盖，否则走 CSS speed 类
  if (props.duration !== undefined && props.duration > 0) {
    style['--mt-duration'] = `${props.duration}s`
  }
  return style
})
</script>

<style lang="scss" scoped>
// ===================== 基础样式 =====================
.cp-magic-text {
  display: inline-block;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: var(--mt-gradient);
  font-weight: var(--mt-font-weight, bold);
  font-family: var(--mt-font-family, Arial, sans-serif);
  position: relative;
  -webkit-text-stroke: var(--mt-stroke-width, 1px) var(--mt-stroke-color, #2b2b50);

  // ---------- 速度预设（由 speed prop 对应的 CSS 类控制，可被 duration prop 覆盖） ----------
  &--slow {
    --mt-speed-override: 30s;
  }
  &--normal {
    --mt-speed-override: 20s;
  }
  &--fast {
    --mt-speed-override: 10s;
  }

  // ---------- 高光扫描伪元素 ----------
  &::after {
    content: attr(data-text);
    font: inherit;
    color: transparent !important;
    background-clip: text !important;
    -webkit-background-clip: text !important;
    background: radial-gradient(circle, var(--mt-glow-color, #fff), #000 50%);
    background-size: var(--mt-glow-size, 25%) var(--mt-glow-size, 25%);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    mix-blend-mode: var(--mt-blend-mode, color-dodge);
    pointer-events: none;
    animation: cp-magic-text-shine var(--mt-duration, var(--mt-speed-override, 20s)) linear infinite;
  }

  // ---------- 禁用态 ----------
  &--disabled {
    opacity: 0.45;
    cursor: not-allowed;
    filter: grayscale(60%);
    pointer-events: none;

    &::after {
      animation: none !important;
    }
  }
}

// ===================== 高光扫描动画 =====================
@keyframes cp-magic-text-shine {
  0% {
    background-position: -100% -100%;
  }
  100% {
    background-position: 100% 100%;
  }
}
</style>
