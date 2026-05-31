<template>
  <div
    :class="['cp-cubic-progress', { 'indeterminate': indeterminate }]"
    :style="rootStyle"
  >
    <!-- 3D 透视容器 -->
    <div class="perspective-wrapper" :style="perspectiveStyle">
      <ul class="pipe" :style="pipeStyle">
        <li class="face top" :style="topFaceStyle"></li>
        <li class="face bottom" :style="bottomFaceStyle"></li>
        <li class="face front" :style="frontFaceStyle"></li>
        <li class="face back" :style="backFaceStyle"></li>
      </ul>
    </div>

    <!-- 进度文字（管道后方） -->
    <div class="progress-info" v-if="showText">
      <span v-if="indeterminate" class="progress-label loading-text">LOADING</span>
      <span v-else class="progress-label">{{ percent }}%</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'CyberCubicProgress',
})

// ==================== Props ====================
const props = withDefaults(defineProps<{
  /** 进度百分比 0-100 */
  percent?: number
  /** 预设配色方案 或 自定义十六进制颜色（如 #ff226d） */
  color?: string
  /** 管道宽度 (px) */
  pipeWidth?: number
  /** 管道厚度 (px)，即面的高度 */
  pipeHeight?: number
  /** 3D 透视距离 */
  perspective?: number
  /** X 轴旋转角度 */
  rotateX?: number
  /** 是否启动不确定加载态 */
  indeterminate?: boolean
  /** 是否显示进度文字 */
  showText?: boolean
  /** 发光强度 1-10 */
  glowIntensity?: number
}>(), {
  percent: 0,
  color: 'pink',
  pipeWidth: 600,
  pipeHeight: 100,
  perspective: 520,
  rotateX: -33.5,
  indeterminate: false,
  showText: true,
  glowIntensity: 5,
})

// ==================== 预设配色 ====================
interface ColorSet {
  primary: string
  secondary: string
  empty: string
}

const COLOR_PRESETS: Record<string, ColorSet> = {
  /** 赛博粉紫 — 经典霓虹粉 */
  pink: {
    primary: '#ff226d',
    secondary: '#ffd922',
    empty: '#ff226d',
  },
  /** 赛博青蓝 — 数字海洋 */
  cyan: {
    primary: '#00e6f6',
    secondary: '#0055ff',
    empty: '#00e6f6',
  },
  /** 矩阵绿 — 黑客帝国 */
  green: {
    primary: '#00ff41',
    secondary: '#1a8a3a',
    empty: '#00ff41',
  },
  /** 赛博金 — 废土黄昏 */
  gold: {
    primary: '#ffb800',
    secondary: '#ff4500',
    empty: '#ffb800',
  },
  /** 霓虹紫 — 合成意识 */
  purple: {
    primary: '#b300ff',
    secondary: '#ff00e6',
    empty: '#b300ff',
  },
}

/** 将十六进制颜色转换为 RGB，用于构造渐变中的透明度变体 */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const clean = hex.replace('#', '')
  if (clean.length !== 6) return null
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  }
}

/** 根据用户传入的 color 解析出实际配色 */
function resolveColorSet(input: string): ColorSet {
  // 预设名称
  if (COLOR_PRESETS[input]) {
    return COLOR_PRESETS[input]
  }
  // 自定义十六进制颜色
  if (input.startsWith('#') && input.length === 7) {
    const rgb = hexToRgb(input)
    if (rgb) {
      // 根据主色派生出辅助色（色调偏移 + 降低饱和度）
      const secondary = deriveSecondary(rgb)
      return {
        primary: input,
        secondary,
        empty: input,
      }
    }
  }
  // 兜底：默认 pink
  return COLOR_PRESETS.pink
}

/** 基于主色 RGB 派生辅助色：色调偏移约 40°，略微提亮 */
function deriveSecondary(rgb: { r: number; g: number; b: number }): string {
  // 简单的 HSL 偏移：将色相旋转 40°
  const { h, s, l } = rgbToHsl(rgb.r, rgb.g, rgb.b)
  const newH = (h + 40) % 360
  const { r, g, b } = hslToRgb(newH, Math.min(s + 0.05, 1), Math.min(l + 0.08, 1))
  return `#${[r, g, b].map(v => v.toString(16).padStart(2, '0')).join('')}`
}

function rgbToHsl(r: number, g: number, b: number) {
  const nr = r / 255, ng = g / 255, nb = b / 255
  const max = Math.max(nr, ng, nb), min = Math.min(nr, ng, nb)
  const l = (max + min) / 2
  if (max === min) return { h: 0, s: 0, l }
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h = 0
  switch (max) {
    case nr: h = ((ng - nb) / d + (ng < nb ? 6 : 0)) / 6; break
    case ng: h = ((nb - nr) / d + 2) / 6; break
    case nb: h = ((nr - ng) / d + 4) / 6; break
  }
  return { h: h * 360, s, l }
}

function hslToRgb(h: number, s: number, l: number) {
  const hueToRgb = (p: number, q: number, t: number) => {
    if (t < 0) t += 1
    if (t > 1) t -= 1
    if (t < 1 / 6) return p + (q - p) * 6 * t
    if (t < 1 / 2) return q
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
    return p
  }
  const hue = h / 360
  if (s === 0) {
    const v = Math.round(l * 255)
    return { r: v, g: v, b: v }
  }
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s
  const p = 2 * l - q
  return {
    r: Math.round(hueToRgb(p, q, hue + 1 / 3) * 255),
    g: Math.round(hueToRgb(p, q, hue) * 255),
    b: Math.round(hueToRgb(p, q, hue - 1 / 3) * 255),
  }
}

const resolvedColors = computed(() => resolveColorSet(props.color))

// ==================== 样式计算 ====================

/** 半管高度，用于 translateZ 偏移 */
const halfHeight = computed(() => props.pipeHeight / 2)

/** 根容器样式 */
const rootStyle = computed(() => ({
  '--cp-primary': resolvedColors.value.primary,
  '--cp-secondary': resolvedColors.value.secondary,
  '--cp-glow': `${props.glowIntensity * 2}px`,
} as Record<string, string>))

/** 3D 透视容器样式 */
const perspectiveStyle = computed(() => ({
  perspective: `${props.perspective}px`,
  height: `${props.pipeHeight * 2.5}px`,
}))

/** 管道 transform 样式 */
const pipeStyle = computed(() => ({
  width: `${props.pipeWidth}px`,
  height: `${props.pipeHeight}px`,
  transformOrigin: `${halfHeight.value}px ${halfHeight.value}px`,
  transform: `translate(-50%, -50%) rotateX(${props.rotateX}deg)`,
}))

/** 各面共享的背景渐变样式 */
const gradientStyle = computed(() => {
  const primary = resolvedColors.value.primary
  const secondary = resolvedColors.value.secondary
  const empty = resolvedColors.value.empty

  if (props.indeterminate) {
    // 不确定态：光带在管道中来回滑动
    return {
      background: `linear-gradient(90deg,
        ${empty}1a 0%,
        ${empty}1a 35%,
        ${primary}cc 45%,
        ${secondary}99 50%,
        ${primary}cc 55%,
        ${empty}1a 65%,
        ${empty}1a 100%)`,
      backgroundSize: '250% 100%',
    }
  }

  // 正常进度：渐变位置由 percent 决定
  const p = Math.max(0, Math.min(100, props.percent))
  return {
    background: `linear-gradient(90deg,
      ${secondary}99 0%,
      ${primary}cc ${p}%,
      ${empty}1a ${p}%,
      ${empty}1a 100%)`,
  }
})

/** 顶部面：向上翻转 + 上移半管高度 */
const topFaceStyle = computed(() => ({
  ...gradientStyle.value,
  transform: `rotateX(90deg) translateZ(${halfHeight.value}px)`,
}))

/** 底部面：向下翻转 + 下移半管高度 */
const bottomFaceStyle = computed(() => ({
  ...gradientStyle.value,
  transform: `rotateX(-90deg) translateZ(${halfHeight.value}px)`,
}))

/** 前面：仅前移半管高度 */
const frontFaceStyle = computed(() => ({
  ...gradientStyle.value,
  transform: `translateZ(${halfHeight.value}px)`,
}))

/** 后面：向后翻转 + 后移半管高度 */
const backFaceStyle = computed(() => ({
  ...gradientStyle.value,
  transform: `rotateX(-180deg) translateZ(${halfHeight.value}px)`,
}))
</script>

<style lang="scss" scoped>
.cp-cubic-progress {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  // ---- 3D 透视容器 ----
  .perspective-wrapper {
    position: relative;
    width: 100%;
    transform-style: preserve-3d;
  }

  // ---- 管道主体 ----
  .pipe {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-style: preserve-3d;
    list-style: none;
    margin: 0;
    padding: 0;

    .face {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      transition: background 0.35s ease; // 进度变化时平滑过渡

      // 管道面发光
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        box-shadow:
          inset 0 0 var(--cp-glow) var(--cp-primary),
          0 0 calc(var(--cp-glow) * 1.5) var(--cp-primary);
        opacity: 0.7;
        pointer-events: none;
      }
    }
  }

  // ---- 不确定态动画 ----
  &.indeterminate {
    .face {
      animation: cp-cubic-slide 2s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    }
  }

  // ---- 进度文字 ----
  .progress-info {
    margin-top: 16px;
    text-align: center;
  }

  .progress-label {
    font-family: 'Courier New', 'Consolas', monospace;
    font-size: 18px;
    font-weight: bold;
    color: var(--cp-primary);
    text-shadow:
      0 0 var(--cp-glow) var(--cp-primary),
      0 0 calc(var(--cp-glow) * 3) var(--cp-primary);
    letter-spacing: 2px;
    transition: color 0.3s ease, text-shadow 0.3s ease;
  }

  // ---- 加载文字闪烁 ----
  .loading-text {
    animation: cp-cubic-text-pulse 1.2s ease-in-out infinite;
  }
}

// ======================== 关键帧动画 ========================

// 不确定态：光带滑动
@keyframes cp-cubic-slide {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0% 0;
  }
}

// 加载文字脉冲
@keyframes cp-cubic-text-pulse {
  0%, 100% {
    opacity: 0.4;
  }
  50% {
    opacity: 1;
  }
}
</style>
