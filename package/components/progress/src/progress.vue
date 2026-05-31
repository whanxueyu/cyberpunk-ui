<template>
  <div
    class="cyber-progress"
    :class="rootClasses"
    :style="rootVars"
    role="progressbar"
    :aria-valuenow="indeterminate ? undefined : Number(displayPercentage)"
    :aria-valuemin="0"
    :aria-valuemax="100"
    :aria-label="indeterminate ? '加载中' : `进度 ${displayPercentage}%`"
  >
    <!-- 3D 透视容器 -->
    <div class="pipe-container">
      <div class="pipe-track">
        <!-- 管道壁 -->
        <div class="pipe-wall">
          <!-- 管道内腔 -->
          <div class="pipe-lumen">
            <!-- 网格纹理 -->
            <div class="track-grid"></div>

            <!-- 液体填充区 -->
            <div class="progress-fill" :style="fillSize">
              <!-- 液体内部高光层 -->
              <div class="fill-highlight"></div>
              <!-- 表面扫描线 -->
              <div class="fill-scanline"></div>
              <!-- 微粒效果 -->
              <div class="fill-particles">
                <span v-for="i in 3" :key="i" class="particle"></span>
              </div>
              <!-- 内部百分比 -->
              <span
                v-if="showPercentage && percentagePosition === 'inside'"
                class="percentage-inside"
              >
                {{ displayPercentage }}%
              </span>
            </div>

            <!-- 3D 刻度标记 -->
            <div class="tick-marks">
              <span
                v-for="i in 10"
                :key="i"
                class="tick"
                :class="{ active: i * 10 <= percentage }"
              ></span>
            </div>
          </div>

          <!-- 管道左侧端口光 -->
          <div class="pipe-port port-start"></div>
          <!-- 管道右侧端口光 -->
          <div class="pipe-port port-end"></div>
        </div>
      </div>
    </div>

    <!-- 外部百分比（悬浮在管道上方） -->
    <span
      v-if="showPercentage && percentagePosition === 'outside'"
      class="percentage-outside"
    >
      {{ displayPercentage }}%
    </span>

    <!-- 状态指示器 -->
    <div class="status-indicator" v-if="showStatus">
      <div class="indicator-dot"></div>
      <span class="status-text">{{ statusText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'CyberProgress',
})

const props = withDefaults(
  defineProps<{
    /** 进度百分比，取值范围 0-100 */
    percentage?: number
    /** 赛博主题色 */
    theme?: 'neon' | 'hologram' | 'terminal' | 'matrix'
    /** 是否启用动画效果 */
    animated?: boolean
    /** 是否显示百分比数字 */
    showPercentage?: boolean
    /** 百分比位置：管道内部 / 管道外部 */
    percentagePosition?: 'inside' | 'outside'
    /** 是否显示状态指示器 */
    showStatus?: boolean
    /** 不确定加载态，开启后循环动画，忽略 percentage */
    indeterminate?: boolean
    /** 进度条方向 */
    direction?: 'horizontal' | 'vertical'
    /** 自定义管道主色，覆盖 theme 预设 */
    color?: string
    /** 管道高度(px) */
    height?: number
    /** 发光强度 1-10 */
    glowIntensity?: number
  }>(),
  {
    percentage: 0,
    theme: 'neon',
    animated: true,
    showPercentage: true,
    percentagePosition: 'outside',
    showStatus: false,
    indeterminate: false,
    direction: 'horizontal',
    height: 24,
    glowIntensity: 5,
  },
)

// ===================== 计算属性 =====================

/** 限制百分比在 0-100 之间 */
const displayPercentage = computed(() => {
  return Math.min(100, Math.max(0, props.percentage)).toFixed(0)
})

/** 状态文本 */
const statusText = computed(() => {
  if (props.indeterminate) return '处理中'
  const pct = Number(displayPercentage.value)
  if (pct < 30) return '初始化'
  if (pct < 60) return '处理中'
  if (pct < 90) return '加载中'
  if (pct < 100) return '即将完成'
  return '已完成'
})

/** 是否使用自定义颜色 */
const isCustomColor = computed(() => !!props.color)

/** 根元素 class 绑定 */
const rootClasses = computed(() => ({
  [`theme-${props.theme}`]: !isCustomColor.value,
  'is-custom-color': isCustomColor.value,
  'is-animated': props.animated,
  'is-indeterminate': props.indeterminate,
  'is-vertical': props.direction === 'vertical',
  'is-complete': Number(displayPercentage.value) >= 100,
}))

/** 发光半径（1-10 → 4px-40px） */
const glowRadius = computed(() => `${props.glowIntensity * 4}px`)

/** 发光扩散（1-10 → 2px-20px） */
const glowSpread = computed(() => `${props.glowIntensity * 2}px`)

/** 6位 hex 转 rgb 数值字符串 */
function hexToRgb(hex: string): string {
  const h = hex.replace('#', '')
  if (h.length === 3) {
    return [
      parseInt(h[0] + h[0], 16),
      parseInt(h[1] + h[1], 16),
      parseInt(h[2] + h[2], 16),
    ].join(', ')
  }
  return [
    parseInt(h.substring(0, 2), 16),
    parseInt(h.substring(2, 4), 16),
    parseInt(h.substring(4, 6), 16),
  ].join(', ')
}

/** 自定义颜色时的 CSS 变量覆盖 */
const customColorVars = computed(() => {
  if (!props.color) return {}
  return {
    '--progress-primary': props.color,
    '--progress-primary-rgb': hexToRgb(props.color),
  } as Record<string, string>
})

/** 根元素 CSS 变量 */
const rootVars = computed(() => {
  return {
    ...customColorVars.value,
    '--pipe-height': `${props.height}px`,
    '--glow-radius': glowRadius.value,
    '--glow-spread': glowSpread.value,
  } as Record<string, string>
})

/** 进度条填充尺寸 */
const fillSize = computed(() => {
  if (props.indeterminate) return undefined
  const pct = Number(displayPercentage.value)
  return props.direction === 'vertical'
    ? { height: `${pct}%` }
    : { width: `${pct}%` }
})
</script>

<style lang="scss" scoped>
// ====================================================================
// 根布局
// ====================================================================
.cyber-progress {
  position: relative;
  width: 100%;
  padding: 2px 0;
  display: flex;
  align-items: center;
  gap: 10px;

  // ======================== 主题色变量 ========================
  &.theme-neon {
    --progress-primary: #00f0ff;
    --progress-primary-rgb: 0, 240, 255;
    --progress-primary-dim: #006070;
    --progress-secondary: #ff003c;
    --progress-accent: #0080ff;
    --progress-bg: rgba(0, 240, 255, 0.08);
    --progress-glow: rgba(0, 240, 255, 0.6);
    --progress-wall: rgba(0, 40, 50, 0.6);
    --progress-wall-light: rgba(0, 120, 140, 0.3);
    --progress-liquid-top: #00f0ff;
    --progress-liquid-mid: #0090a0;
    --progress-liquid-bottom: #004050;
    --progress-port-glow: rgba(0, 240, 255, 0.8);
  }

  &.theme-hologram {
    --progress-primary: #a855f7;
    --progress-primary-rgb: 168, 85, 247;
    --progress-primary-dim: #542a7c;
    --progress-secondary: #f43f5e;
    --progress-accent: #06b6d4;
    --progress-bg: rgba(168, 85, 247, 0.08);
    --progress-glow: rgba(168, 85, 247, 0.6);
    --progress-wall: rgba(30, 15, 50, 0.6);
    --progress-wall-light: rgba(80, 40, 120, 0.3);
    --progress-liquid-top: #c084fc;
    --progress-liquid-mid: #7c3aed;
    --progress-liquid-bottom: #4c1d95;
    --progress-port-glow: rgba(168, 85, 247, 0.8);
  }

  &.theme-terminal {
    --progress-primary: #22c55e;
    --progress-primary-rgb: 34, 197, 94;
    --progress-primary-dim: #0e622f;
    --progress-secondary: #f31212;
    --progress-accent: #fbbf24;
    --progress-bg: rgba(34, 197, 94, 0.08);
    --progress-glow: rgba(34, 197, 94, 0.6);
    --progress-wall: rgba(5, 40, 15, 0.6);
    --progress-wall-light: rgba(20, 100, 40, 0.3);
    --progress-liquid-top: #4ade80;
    --progress-liquid-mid: #16a34a;
    --progress-liquid-bottom: #14532d;
    --progress-port-glow: rgba(34, 197, 94, 0.8);
  }

  &.theme-matrix {
    --progress-primary: #ef4444;
    --progress-primary-rgb: 239, 68, 68;
    --progress-primary-dim: #772222;
    --progress-secondary: #fbbf24;
    --progress-accent: #10b981;
    --progress-bg: rgba(251, 191, 36, 0.08);
    --progress-glow: rgba(251, 133, 36, 0.6);
    --progress-wall: rgba(50, 20, 5, 0.6);
    --progress-wall-light: rgba(120, 60, 15, 0.3);
    --progress-liquid-top: #f87171;
    --progress-liquid-mid: #dc2626;
    --progress-liquid-bottom: #991b1b;
    --progress-port-glow: rgba(239, 68, 68, 0.8);
  }

  // ======================== 自定义颜色覆盖 ========================
  &.is-custom-color {
    --progress-primary-dim: rgba(var(--progress-primary-rgb), 0.4);
    --progress-secondary: rgba(var(--progress-primary-rgb), 0.8);
    --progress-accent: rgba(var(--progress-primary-rgb), 0.5);
    --progress-bg: rgba(var(--progress-primary-rgb), 0.08);
    --progress-glow: rgba(var(--progress-primary-rgb), 0.6);
    --progress-wall: rgba(var(--progress-primary-rgb), 0.15);
    --progress-wall-light: rgba(var(--progress-primary-rgb), 0.25);
    --progress-liquid-top: rgba(var(--progress-primary-rgb), 1);
    --progress-liquid-mid: rgba(var(--progress-primary-rgb), 0.6);
    --progress-liquid-bottom: rgba(var(--progress-primary-rgb), 0.3);
    --progress-port-glow: rgba(var(--progress-primary-rgb), 0.8);
  }
}

// ====================================================================
// 3D 透视环境
// ====================================================================
.pipe-container {
  perspective: 600px;
  perspective-origin: center center;
  flex: 1;
  min-width: 100px;
}

.pipe-track {
  transform-style: preserve-3d;
  transform: rotateX(2deg);
  transition: transform 0.4s ease;
}

// ====================================================================
// 管道壁 —— 核心3D造型
// ====================================================================
.pipe-wall {
  position: relative;
  width: 100%;
  height: var(--pipe-height, 24px);
  border-radius: 3px;
  background: var(--progress-bg);
  overflow: hidden;

  // 4层阴影模拟圆柱体管壁
  box-shadow:
    // 第1层：外发光（主题色光晕）
    0 0 var(--glow-radius, 20px) var(--glow-spread, 10px) var(--progress-glow),
    // 第2层：管壁顶部高光线
    inset 0 1px 2px rgba(255, 255, 255, 0.15),
    // 第3层：管壁底部暗面
    inset 0 -4px 6px rgba(0, 0, 0, 0.4),
    // 第4层：内腔整体凹陷感
    inset 0 0 8px rgba(0, 0, 0, 0.3);

  border: 1px solid rgba(var(--progress-primary-rgb, 0, 240, 255), 0.15);

  // 管道顶部高光线
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.25), transparent);
    z-index: 10;
    pointer-events: none;
    border-radius: 3px 3px 0 0;
  }
}

// ====================================================================
// 管道内腔
// ====================================================================
.pipe-lumen {
  position: relative;
  width: 100%;
  height: 100%;
}

// ====================================================================
// 网格纹理
// ====================================================================
.track-grid {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(0deg, transparent 24%, var(--progress-primary) 25%, transparent 26%, transparent 74%, var(--progress-primary) 75%, transparent 76%),
    linear-gradient(90deg, transparent 24%, var(--progress-primary) 25%, transparent 26%, transparent 74%, var(--progress-primary) 75%, transparent 76%);
  background-size: 20px 20px;
  opacity: 0.05;
  pointer-events: none;
  z-index: 1;
}

// ====================================================================
// 液体填充 —— 4层渐变模拟3D圆柱体液
// ====================================================================
.progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0%;
  overflow: hidden;
  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;

  // 3层纵向渐变 + 内阴影
  background:
    // 第1层：顶部强高光条（圆柱体顶部受光面）
    linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.12) 15%, transparent 35%),
    // 第2层：液体主色渐变（亮→中→暗）
    linear-gradient(to bottom, var(--progress-liquid-top) 0%, var(--progress-liquid-mid) 50%, var(--progress-liquid-bottom) 100%),
    // 第3层：底部暗部加深
    linear-gradient(to bottom, transparent 60%, rgba(0, 0, 0, 0.3) 85%, rgba(0, 0, 0, 0.5) 100%);

  box-shadow:
    // 液体表面发光
    0 0 var(--glow-radius, 20px) var(--progress-glow),
    // 底部与管壁接触暗线
    inset 0 -2px 4px rgba(0, 0, 0, 0.3);

  // 水平微渐变增强柱面感
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.22) 30%, rgba(255, 255, 255, 0.12) 50%, rgba(255, 255, 255, 0.04) 70%, rgba(0, 0, 0, 0.12) 100%);
    pointer-events: none;
    z-index: 1;
  }
}

// 液体高光层
.fill-highlight {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent);
  pointer-events: none;
  z-index: 3;
}

// 表面扫描线
.fill-scanline {
  position: absolute;
  top: 0;
  left: -40%;
  width: 35%;
  height: 100%;
  background: linear-gradient(to right, transparent 0%, rgba(255, 255, 255, 0.18) 50%, transparent 100%);
  z-index: 4;
  pointer-events: none;
  animation: scanline-slide 3s linear infinite;
}

// 液体微粒
.fill-particles {
  position: absolute;
  inset: 0;
  z-index: 5;
  pointer-events: none;
  overflow: hidden;

  .particle {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);

    &:nth-child(1) {
      bottom: 25%;
      left: 25%;
      animation: particle-float 3s ease-in-out infinite;
    }
    &:nth-child(2) {
      bottom: 55%;
      left: 55%;
      animation: particle-float 4s ease-in-out 1.2s infinite;
    }
    &:nth-child(3) {
      bottom: 38%;
      left: 75%;
      animation: particle-float 3.5s ease-in-out 0.6s infinite;
    }
  }
}

// 内部百分比文字
.percentage-inside {
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Courier New', monospace;
  font-size: 11px;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.8), 0 1px 2px rgba(0, 0, 0, 0.6);
  white-space: nowrap;
  letter-spacing: 1px;
  z-index: 6;
}

// ====================================================================
// 3D 刻度标记
// ====================================================================
.tick-marks {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2px;
  pointer-events: none;
  z-index: 7;

  .tick {
    width: 1px;
    height: 8px;
    background: var(--progress-primary);
    opacity: 0.25;
    // drop-shadow 产生凸起感
    filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.6))
            drop-shadow(0 -1px 0 rgba(255, 255, 255, 0.08));

    &.active {
      opacity: 0.9;
      background: var(--progress-secondary);
      filter: drop-shadow(0 1px 0 rgba(0, 0, 0, 0.6))
              drop-shadow(0 -1px 0 rgba(255, 255, 255, 0.15))
              drop-shadow(0 0 3px var(--progress-glow));
    }
  }
}

// ====================================================================
// 管道端口光
// ====================================================================
.pipe-port {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 14px;
  pointer-events: none;
  z-index: 3;
  opacity: 0.55;

  &.port-start {
    left: 1px;
    background: radial-gradient(ellipse at left center, var(--progress-port-glow) 0%, rgba(0, 0, 0, 0) 70%);
  }

  &.port-end {
    right: 1px;
    background: radial-gradient(ellipse at right center, var(--progress-port-glow) 0%, rgba(0, 0, 0, 0) 70%);
  }
}

// ====================================================================
// 外部悬浮百分比
// ====================================================================
.percentage-outside {
  display: inline-block;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  font-weight: bold;
  color: var(--progress-primary);
  letter-spacing: 2px;
  line-height: var(--pipe-height, 24px);
  vertical-align: middle;
  // 3D 文字阴影
  text-shadow:
    0 1px 0 var(--progress-wall),
    0 2px 0 rgba(0, 0, 0, 0.3),
    0 0 10px var(--progress-glow),
    0 0 20px var(--progress-glow);
  transform: translateY(-2px);
  transition: transform 0.3s ease;
  white-space: nowrap;
}

// ====================================================================
// 状态指示器
// ====================================================================
.status-indicator {
  position: absolute;
  top: calc(var(--pipe-height, 24px) + 10px);
  right: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Courier New', monospace;
  font-size: 11px;
  color: var(--progress-primary);
  letter-spacing: 1px;

  .indicator-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--progress-primary);
    box-shadow:
      0 0 8px var(--progress-glow),
      0 1px 2px rgba(0, 0, 0, 0.5);
    animation: dot-pulse 1.5s ease-in-out infinite;
  }

  .status-text {
    text-shadow: 0 0 5px var(--progress-glow);
  }
}

// ====================================================================
// 不确定态 —— 光带循环滑动
// ====================================================================
.cyber-progress.is-indeterminate {
  .progress-fill {
    width: 35% !important;
    animation: indeterminate-shimmer 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  .fill-scanline {
    animation: scanline-slide 1.5s linear infinite;
  }
}

// ====================================================================
// 完成态
// ====================================================================
.cyber-progress.is-complete {
  .progress-fill {
    animation: complete-glow 1.5s ease-in-out;
    box-shadow:
      0 0 calc(var(--glow-radius, 20px) * 2) calc(var(--glow-spread, 10px) * 2) var(--progress-glow),
      inset 0 -2px 4px rgba(0, 0, 0, 0.3);
  }

  .indicator-dot {
    animation: none;
    opacity: 1;
    background: var(--progress-primary);
    box-shadow: 0 0 20px var(--progress-glow);
  }
}

// ====================================================================
// 禁用动画
// ====================================================================
.cyber-progress:not(.is-animated) {
  .progress-fill {
    transition: none;
  }
  .fill-scanline {
    animation: none;
    display: none;
  }
  .indicator-dot {
    animation: none;
  }
  .particle {
    animation: none;
    display: none;
  }
  &.is-indeterminate .progress-fill {
    animation: none;
  }
}

// ====================================================================
// 垂直方向
// ====================================================================
.cyber-progress.is-vertical {
  flex-direction: column;
  align-items: center;
  gap: 6px;
  height: 200px;
  min-height: 140px;
  width: auto;
  padding: 2px;

  .pipe-container {
    flex: 1;
    height: 100%;
    min-height: 120px;
    min-width: auto;
    width: var(--pipe-height, 24px);
  }

  .pipe-track {
    height: 100%;
    width: var(--pipe-height, 24px);
    transform: rotateY(2deg);
  }

  .pipe-wall {
    width: var(--pipe-height, 24px);
    height: 100%;

    // 阴影方向改为侧面
    box-shadow:
      0 0 var(--glow-radius, 20px) var(--glow-spread, 10px) var(--progress-glow),
      inset 2px 0 3px rgba(255, 255, 255, 0.1),
      inset -4px 0 6px rgba(0, 0, 0, 0.35),
      inset 0 0 8px rgba(0, 0, 0, 0.3);

    &::before {
      top: 0;
      bottom: 0;
      left: 0;
      right: auto;
      width: 2px;
      height: 100%;
      background: linear-gradient(to right, rgba(255, 255, 255, 0.25), transparent);
      border-radius: 3px 0 0 3px;
    }
  }

  .progress-fill {
    top: auto;
    bottom: 0;
    width: 100% !important;
    height: 0%;
    transition: height 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    // 渐变轴旋转：从上到下 → 从左到右
    background:
      linear-gradient(to right, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.12) 20%, transparent 40%),
      linear-gradient(to right, var(--progress-liquid-top) 0%, var(--progress-liquid-mid) 50%, var(--progress-liquid-bottom) 100%),
      linear-gradient(to right, transparent 60%, rgba(0, 0, 0, 0.3) 85%, rgba(0, 0, 0, 0.5) 100%);

    box-shadow:
      0 0 var(--glow-radius, 20px) var(--progress-glow),
      inset -2px 0 4px rgba(0, 0, 0, 0.3);

    &::after {
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.22) 30%, rgba(255, 255, 255, 0.1) 50%, rgba(0, 0, 0, 0.05) 70%, rgba(0, 0, 0, 0.18) 100%);
    }
  }

  .fill-highlight {
    top: 0;
    bottom: auto;
    left: 0;
    right: auto;
    width: 40%;
    height: 100%;
    background: linear-gradient(to right, rgba(255, 255, 255, 0.3), transparent);
  }

  .fill-scanline {
    top: -30%;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.18) 50%, transparent 100%);
    animation: scanline-slide-vertical 3s linear infinite;
  }

  // 端口光改为上下
  .pipe-port {
    left: 0;
    right: 0;
    width: auto;
    height: 14px;

    &.port-start {
      top: 1px;
      bottom: auto;
      background: radial-gradient(ellipse at center top, var(--progress-port-glow) 0%, rgba(0, 0, 0, 0) 70%);
    }

    &.port-end {
      bottom: 1px;
      top: auto;
      background: radial-gradient(ellipse at center bottom, var(--progress-port-glow) 0%, rgba(0, 0, 0, 0) 70%);
    }
  }

  // 刻度标记方向
  .tick-marks {
    flex-direction: column;
    padding: 2px 0;
    .tick {
      width: 8px;
      height: 1px;
    }
  }

  // 外部百分比
  .percentage-outside {
    transform: translateX(4px);
    writing-mode: horizontal-tb;
    line-height: 1;
    font-size: 12px;
  }

  // 状态指示器
  .status-indicator {
    position: relative;
    top: auto;
    right: auto;
    writing-mode: vertical-rl;
    flex-direction: column;
    gap: 4px;
  }

  // 不确定态垂直
  &.is-indeterminate .progress-fill {
    height: 35% !important;
    width: 100% !important;
    animation: indeterminate-shimmer-vertical 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
}

// ====================================================================
// 动画关键帧
// ====================================================================
@keyframes scanline-slide {
  0%   { left: -40%; }
  100% { left: 100%; }
}

@keyframes scanline-slide-vertical {
  0%   { top: -30%; }
  100% { top: 100%; }
}

@keyframes indeterminate-shimmer {
  0%   { left: -35%; opacity: 0.5; }
  25%  { opacity: 1; }
  50%  { left: 100%; opacity: 0.5; }
  75%  { opacity: 1; }
  100% { left: -35%; opacity: 0.5; }
}

@keyframes indeterminate-shimmer-vertical {
  0%   { bottom: -35%; opacity: 0.5; }
  25%  { opacity: 1; }
  50%  { bottom: 100%; opacity: 0.5; }
  75%  { opacity: 1; }
  100% { bottom: -35%; opacity: 0.5; }
}

@keyframes particle-float {
  0%, 100% { transform: translateY(0); opacity: 0.3; }
  50%      { transform: translateY(-6px); opacity: 0.9; }
}

@keyframes dot-pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.4; transform: scale(0.7); }
}

@keyframes complete-glow {
  0%   { filter: brightness(1); }
  30%  { filter: brightness(1.8); }
  60%  { filter: brightness(1.3); }
  80%  { filter: brightness(1.9); }
  100% { filter: brightness(1.2); }
}
</style>
