<template>
  <component
    :is="tag"
    :class="[
      'cp-text',
      `cp-text--${effect}`,
      `cp-text--${animationSpeed}`,
      {
        'cp-text--glowing': glowing,
        'cp-text--disabled': disabled,
        'cp-text--line-hidden': !lineVisible,
      },
    ]"
    :data-word="displayText"
    :style="textStyle"
  >
    <slot>{{ text }}</slot>
    <div v-if="lineVisible" class="cp-text-line"></div>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CyberTextEffect, AnimationSpeed } from './instance'

defineOptions({
  name: 'CyberText',
})

const props = withDefaults(
  defineProps<{
    /** 文字内容（用于伪元素复制，推荐使用此属性而非 slot） */
    text?: string
    /** 左侧阴影颜色（::before 伪元素） */
    shadowColor?: string
    /** 右侧故障颜色（::after 伪元素） */
    glitchColor?: string
    /** 扫描线颜色 */
    lineColor?: string
    /** 故障效果类型 */
    effect?: CyberTextEffect
    /** 是否常驻效果（false 则仅 hover 时展示 glitch） */
    glowing?: boolean
    /** 动画播放速度 */
    animationSpeed?: AnimationSpeed
    /** 是否显示扫描线 */
    lineVisible?: boolean
    /** 渲染的 HTML 标签 */
    tag?: string
    /** 是否禁用 */
    disabled?: boolean
  }>(),
  {
    text: '',
    shadowColor: '#ff00b3',
    glitchColor: '#00c3ff',
    lineColor: 'transparent',
    effect: 'glitch',
    glowing: false,
    animationSpeed: 'normal',
    lineVisible: true,
    tag: 'div',
    disabled: false,
  },
)

const displayText = computed(() => props.text || '')

const textStyle = computed(() => {
  return {
    '--shadow-color': props.shadowColor,
    '--glitch-color': props.glitchColor,
    '--line-color': props.lineColor,
  } as Record<string, string>
})
</script>

<style lang="scss" scoped>
.cp-text {
  position: relative;
  font-family: Raleway, Verdana, Arial;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;

  // ===================== 动画速度 =====================
  &--slow {
    --anim-duration-mult: 2;
  }

  &--normal {
    --anim-duration-mult: 1;
  }

  &--fast {
    --anim-duration-mult: 0.5;
  }

  // ===================== 禁用态 =====================
  &--disabled {
    opacity: 0.45;
    cursor: not-allowed;
    filter: grayscale(60%);
    pointer-events: none;

    &::before,
    &::after {
      animation-play-state: paused !important;
    }

    .cp-text-line {
      display: none;
    }
  }

  // ===================== 隐藏扫描线 =====================
  &--line-hidden {
    .cp-text-line {
      display: none;
    }
  }

  // ===================== 伪元素公共样式 =====================
  &::before,
  &::after {
    content: attr(data-word);
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    filter: contrast(200%);
    pointer-events: none;
  }

  // ===================== ::before —— 左侧红/暖色阴影层 =====================
  &::before {
    z-index: 2;
    text-shadow: 2px 0 0 var(--shadow-color);
  }

  // ===================== ::after —— 右侧蓝/冷色阴影层 =====================
  &::after {
    z-index: 3;
    left: -3px;
    text-shadow: -2px 0 0 var(--glitch-color);
    mix-blend-mode: darken;
    clip-path: var(--slice-0, inset(50% 50% 50% 50%));
  }

  // ===================== 扫描线 =====================
  .cp-text-line {
    position: absolute;
    left: 8px;
    width: 100%;
    height: 1px;
    z-index: 4;
    background: var(--line-color);
  }
}

// ==========================================================================
// 效果1：glitch（保留原有逻辑并增强）
// - ::before 高度跳动 + ::after 高度跳动
// - hover / glowing 时 ::after 触发 clip-path 故障位移
// - 扫描线持续上下扫描
// ==========================================================================
.cp-text--glitch {
  &::before {
    animation: text-shadow-jump calc(1s * var(--anim-duration-mult, 1)) ease-in infinite;
  }

  &::after {
    animation: text-height-jump calc(1.5s * var(--anim-duration-mult, 1)) ease-out infinite;
  }

  .cp-text-line {
    animation: scanline-move calc(3s * var(--anim-duration-mult, 1)) ease-out infinite;
  }

  // glowing 常驻模式：glitch 持续运行
  &.cp-text--glowing::after {
    animation:
      text-height-jump calc(1.5s * var(--anim-duration-mult, 1)) ease-out infinite,
      glitch-clip calc(1s * var(--anim-duration-mult, 1)) steps(2, end) infinite;
  }

  // hover 模式：仅 hover 时触发 glitch
  &:not(.cp-text--glowing):not(.cp-text--disabled):hover::after {
    animation:
      text-height-jump calc(1.5s * var(--anim-duration-mult, 1)) ease-out infinite,
      glitch-clip 1s steps(2, end);
  }
}

// ==========================================================================
// 效果2：flicker —— 闪烁干扰
// - ::before / ::after 透明度随机跳变
// - 轻微的水平位移
// - 扫描线快速不规则扫描
// ==========================================================================
.cp-text--flicker {
  &::before {
    animation: flicker-opacity calc(0.15s * var(--anim-duration-mult, 1)) steps(1) infinite;
  }

  &::after {
    animation: flicker-opacity calc(0.12s * var(--anim-duration-mult, 1)) steps(1) infinite reverse;
  }

  .cp-text-line {
    animation: flicker-scanline calc(0.8s * var(--anim-duration-mult, 1)) ease-in-out infinite;
  }

  &.cp-text--glowing {

    &::before,
    &::after {
      animation: flicker-opacity calc(0.15s * var(--anim-duration-mult, 1)) steps(1) infinite;
    }

    &::after {
      animation: flicker-opacity calc(0.12s * var(--anim-duration-mult, 1)) steps(1) infinite reverse;
    }
  }

  &:not(.cp-text--glowing):not(.cp-text--disabled):hover {

    &::before,
    &::after {
      animation: flicker-opacity calc(0.15s * var(--anim-duration-mult, 1)) steps(1) infinite;
    }

    &::after {
      animation: flicker-opacity calc(0.12s * var(--anim-duration-mult, 1)) steps(1) infinite reverse;
    }
  }
}

// ==========================================================================
// 效果3：pulse —— 呼吸脉冲
// - ::before / ::after 的 text-shadow 强度平滑呼吸
// - 整体亮度缓慢波动
// - 扫描线做正弦式上下滑动
// ==========================================================================
.cp-text--pulse {
  &::before {
    animation: pulse-shadow calc(2s * var(--anim-duration-mult, 1)) ease-in-out infinite;
  }

  &::after {
    animation: pulse-shadow calc(2s * var(--anim-duration-mult, 1)) ease-in-out infinite 0.5s;
  }

  .cp-text-line {
    animation: pulse-scanline calc(3s * var(--anim-duration-mult, 1)) ease-in-out infinite;
  }

  &.cp-text--glowing {
    &::before {
      animation: pulse-shadow calc(2s * var(--anim-duration-mult, 1)) ease-in-out infinite;
    }

    &::after {
      animation: pulse-shadow calc(2s * var(--anim-duration-mult, 1)) ease-in-out infinite 0.5s;
    }
  }

  &:not(.cp-text--glowing):not(.cp-text--disabled):hover {
    &::before {
      animation: pulse-shadow calc(2s * var(--anim-duration-mult, 1)) ease-in-out infinite;
    }

    &::after {
      animation: pulse-shadow calc(2s * var(--anim-duration-mult, 1)) ease-in-out infinite 0.5s;
    }
  }
}

// ==========================================================================
// 效果4：static —— 静态故障叠影（无动画）
// - ::before / ::after 固定偏移显示
// - hover 时触发一次短暂 glitch
// - 扫描线静止在中间位置
// ==========================================================================
.cp-text--static {
  &::before {
    left: 1px;
    opacity: 0.6;
  }

  &::after {
    left: -1px;
    opacity: 0.5;
    clip-path: none;
  }

  .cp-text-line {
    top: 50%;
    opacity: 0.4;
  }

  &.cp-text--glowing {

    &::before,
    &::after {
      opacity: 0.8;
    }
  }

  &:not(.cp-text--glowing):not(.cp-text--disabled):hover {
    &::after {
      animation: glitch-clip 0.5s steps(2, end);
    }

    &::before {
      animation: glitch-clip 0.5s steps(2, end) 0.1s;
    }
  }
}

// ====================================================================
// keyframes：glitch-clip —— 故障 clip-path 位移（原 hover glitch）
// ====================================================================
@keyframes glitch-clip {
  0% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(-20px, -10px);
  }

  10% {
    clip-path: inset(10% -6px 85% 0);
    transform: translate(10px, 10px);
  }

  20% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(-10px, 10px);
  }

  30% {
    clip-path: inset(10% -6px 85% 0);
    transform: translate(0px, 5px);
  }

  40% {
    clip-path: inset(50% -6px 30% 0);
    transform: translate(-5px, 0px);
  }

  50% {
    clip-path: inset(10% -6px 85% 0);
    transform: translate(5px, 0px);
  }

  60% {
    clip-path: inset(40% -6px 43% 0);
    transform: translate(5px, 10px);
  }

  70% {
    clip-path: inset(50% -6px 30% 0);
    transform: translate(-10px, 10px);
  }

  80% {
    clip-path: inset(80% -6px 5% 0);
    transform: translate(20px, -10px);
  }

  90% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(-10px, 0px);
  }

  100% {
    clip-path: inset(80% -6px 0 0);
    transform: translate(0);
  }
}

// ====================================================================
// keyframes：text-shadow-jump —— ::before 高度跳动（原 redShadow）
// ====================================================================
@keyframes text-shadow-jump {
  20% {
    height: 32px;
  }

  60% {
    height: 6px;
  }

  100% {
    height: 42px;
  }
}

// ====================================================================
// keyframes：text-height-jump —— ::after 高度跳动（原 redHeight）
// ====================================================================
@keyframes text-height-jump {
  20% {
    height: 42px;
  }

  35% {
    height: 12px;
  }

  50% {
    height: 40px;
  }

  60% {
    height: 20px;
  }

  70% {
    height: 34px;
  }

  80% {
    height: 22px;
  }

  100% {
    height: 0px;
  }
}

// ====================================================================
// keyframes：scanline-move —— 扫描线上下移动（原 whiteMove）
// ====================================================================
@keyframes scanline-move {
  8% {
    top: 38px;
  }

  14% {
    top: 8px;
  }

  20% {
    top: 42px;
  }

  32% {
    top: 2px;
  }

  99% {
    top: 30px;
  }
}

// ====================================================================
// keyframes：flicker-opacity —— 快速透明度跳变
// ====================================================================
@keyframes flicker-opacity {
  0% {
    opacity: 0.6;
  }

  30% {
    opacity: 1;
  }

  45% {
    opacity: 0.3;
  }

  55% {
    opacity: 0.9;
  }

  70% {
    opacity: 0.5;
  }

  85% {
    opacity: 1;
  }

  100% {
    opacity: 0.4;
  }
}

// ====================================================================
// keyframes：flicker-scanline —— 扫描线快速不规则移动
// ====================================================================
@keyframes flicker-scanline {
  0% {
    top: 10%;
  }

  15% {
    top: 85%;
  }

  30% {
    top: 5%;
  }

  45% {
    top: 60%;
  }

  60% {
    top: 20%;
  }

  75% {
    top: 90%;
  }

  100% {
    top: 35%;
  }
}

// ====================================================================
// keyframes：pulse-shadow —— text-shadow 强度呼吸
// ====================================================================
@keyframes pulse-shadow {
  0%,
  100% {
    opacity: 0.4;
    filter: contrast(150%) brightness(100%);
  }

  50% {
    opacity: 0.9;
    filter: contrast(250%) brightness(120%);
  }
}

// ====================================================================
// keyframes：pulse-scanline —— 扫描线正弦式滑动
// ====================================================================
@keyframes pulse-scanline {
  0%,
  100% {
    top: 50%;
    opacity: 0.5;
  }

  25% {
    top: 10%;
    opacity: 0.8;
  }

  50% {
    top: 50%;
    opacity: 0.3;
  }

  75% {
    top: 85%;
    opacity: 0.8;
  }
}
</style>
