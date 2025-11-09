<template>
  <div :class="[
    'cp-holo-card',
    `depth-${depth}`,
    cardType,
    `theme-${theme}`,
    `effect-${effect}`
  ]" :style="cardStyle" @mousemove="throttledHandleMouseMove" @mouseleave="handleMouseLeave" @focus="handleFocus"
    @blur="handleMouseLeave" :tabindex="disabled ? -1 : 0" role="button" :aria-disabled="disabled" :aria-label="title">
    <div class="holo-card-content">
      <div v-if="title && !slots.title" class="card-title">{{ title }}</div>
      <slot name="title"></slot>
      <slot></slot>
      <slot name="footer"></slot>
    </div>
    <div class="holo-card-hologram-effect" :style="hologramStyle"></div>
    <div class="holo-card-glow" :style="glowStyle"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, useSlots, onMounted, nextTick } from 'vue';
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance();
defineOptions({
  name: 'CyberHoloCard',
})

const slots = useSlots();

const props = defineProps({
  type: {
    type: String,
    default: 'basic',
    validator: (value: string) => {
      return ['basic', 'media', 'action'].indexOf(value) !== -1
    }
  },
  glowIntensity: {
    type: Number,
    default: 50,
    validator: (value: number) => {
      return value >= 0 && value <= 100
    }
  },
  hologramColor: {
    type: String,
    default: '#00e6f6'
  },
  depth: {
    type: Number,
    default: 3,
    validator: (value: number) => {
      return value >= 1 && value <= 5
    }
  },
  title: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: true
  },
  theme: {
    type: String,
    default: 'default',
    validator: (value: string) => {
      return ['default', 'neon', 'hologram', 'terminal'].indexOf(value) !== -1
    }
  },
  effect: {
    type: String,
    default: 'default',
    validator: (value: string) => {
      return ['default', 'scan', 'glitch', 'pulse'].indexOf(value) !== -1
    }
  }
});

const mousePosition = ref({ x: 0, y: 0 });
const isHovering = ref(false);

// 节流函数
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function () {
    const args = arguments;
    const context = instance;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

const handleMouseMove = (event: MouseEvent) => {
  if (props.disabled) return;

  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
  mousePosition.value = {
    x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
    y: ((event.clientY - rect.top) / rect.height) * 2 - 1
  };
  isHovering.value = true;
};

const throttledHandleMouseMove = throttle(handleMouseMove, 16);

const handleMouseLeave = () => {
  isHovering.value = false;
  // 重置鼠标位置，使卡片回到原始状态
  mousePosition.value = { x: 0, y: 0 };
};

const handleFocus = () => {
  if (!props.disabled) {
    isHovering.value = true;
    // 设置默认的鼠标位置为中心
    mousePosition.value = { x: 0, y: 0 };
  }
};

const cardType = computed(() => {
  const baseType = (() => {
    switch (props.type) {
      case 'basic':
        return 'basic-type';
      case 'media':
        return 'media-type';
      case 'action':
        return 'action-type';
      default:
        return 'basic-type';
    }
  })();

  return [baseType];
});

const cardStyle = computed(() => {
  const baseStyle: Record<string, string> = {};

  if (!props.rounded) {
    baseStyle.borderRadius = '0';
  }

  if (props.disabled) {
    baseStyle.cursor = 'not-allowed';
    baseStyle.opacity = '0.6';
  }

  if (!isHovering.value || props.disabled) return baseStyle;

  // 根据鼠标位置计算卡片的旋转角度
  const tiltX = mousePosition.value.y * 10; // 垂直方向的倾斜
  const tiltY = -mousePosition.value.x * 10; // 水平方向的倾斜

  return {
    ...baseStyle,
    transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.05, 1.05, 1.05)`,
    transition: 'transform 0.1s ease'
  };
});

const hologramStyle = computed(() => {
  if (!isHovering.value || props.disabled) return {};

  // 根据鼠标位置计算全息效果的位置
  const moveX = Math.max(-50, Math.min(50, mousePosition.value.x * 10));
  const moveY = Math.max(-50, Math.min(50, mousePosition.value.y * 10));

  return {
    background: `radial-gradient(circle at ${50 + moveX}% ${50 + moveY}%, ${props.hologramColor}33, transparent 70%)`,
    opacity: 0.8,
    transition: 'background 0.1s ease'
  };
});

const glowStyle = computed(() => {
  const intensity = props.glowIntensity / 100;

  return {
    boxShadow: `0 0 ${10 + props.glowIntensity / 5}px ${props.hologramColor}${Math.floor(intensity * 99).toString(16).padStart(2, '0')}`,
    opacity: (isHovering.value && !props.disabled) ? intensity : intensity * 0.5
  };
});

onMounted(() => {
  nextTick(() => {
    // 强制重绘以确保动画正确初始化
    const card = document.querySelector('.cp-holo-card.effect-scan');
    if (card) {
      // 触发重排
      const forceRepaint = card.offsetHeight;
      console.log('Forced repaint for scan effect', forceRepaint);
    }
  });
});
</script>

<style lang="scss" scoped>
.cp-holo-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background: rgba(20, 20, 30, 0.7);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 4px 10px;
  color: #fff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  // 玻璃态效果
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0) 100%);
    z-index: 1;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .holo-card-content {
    position: relative;
    z-index: 3;

    .card-title {
      font-size: 1.2em;
      font-weight: bold;
      margin-bottom: 10px;
    }
  }

  .holo-card-hologram-effect {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  .holo-card-glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    pointer-events: none;
    border-radius: 8px;
    opacity: 0;
    transition: opacity 0.2s ease-out;
  }

  &:hover,
  &:focus {
    outline: none;

    .holo-card-hologram-effect {
      opacity: 1;
    }

    .holo-card-glow {
      opacity: 1;
    }
  }

  // 焦点可见性样式（提升可访问性）
  &:focus-visible {
    outline: 2px solid v-bind('props.hologramColor');
    outline-offset: 2px;
  }

  // 禁用状态样式优化
  &[aria-disabled="true"] {
    cursor: not-allowed;
    filter: grayscale(50%);
    opacity: 0.6;

    &:hover {
      transform: none !important;
    }
  }

  // 主题样式
  &.theme-neon {
    background: rgba(10, 10, 20, 0.8);
    border: 1px solid rgba(0, 230, 246, 0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &::before {
      background: linear-gradient(135deg, rgba(0, 230, 246, 0.2) 0%, rgba(0, 230, 246, 0.1) 50%, transparent 100%);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &.theme-hologram {
    background: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(148, 0, 211, 0.4);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &::before {
      background: linear-gradient(135deg, rgba(148, 0, 211, 0.3) 0%, rgba(255, 0, 255, 0.2) 50%, transparent 100%);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  &.theme-terminal {
    background: rgba(0, 15, 0, 0.7);
    border: 1px solid rgba(0, 255, 0, 0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &::before {
      background: linear-gradient(135deg, rgba(0, 255, 0, 0.2) 0%, rgba(0, 100, 0, 0.1) 50%, transparent 100%);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .holo-card-content {
      font-family: 'Courier New', monospace;
    }
  }

  // 效果样式
  &.effect-scan {
    overflow: hidden;
    position: relative;
    /* 确保定位上下文 */

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(to right, transparent, v-bind('props.hologramColor'), transparent);
      box-shadow: 0 0 10px v-bind('props.hologramColor');
      animation: scan 3s linear infinite;
      z-index: 5;
      /* 提高 z-index 避免被覆盖 */
      pointer-events: none;
      transform: translateZ(0);
      /* 启用硬件加速 */
      will-change: top, opacity;
      /* 优化动画性能 */
    }

    &[aria-disabled="true"] {
      &::after {
        display: none !important;
        /* 确保禁用状态下不显示 */
      }
    }
  }

  &.effect-glitch {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* 优化前：rgba(0, 0, 0, 0.1) */
      background: repeating-linear-gradient(0deg,
          rgba(0, 0, 0, 0.35) 0px,
          /* 提高对比度 */
          rgba(0, 0, 0, 0.35) 3px,
          /* 加宽条纹 */
          transparent 3px,
          transparent 10px
          /* 增大间隔 */
        );
      animation: glitch 0.2s infinite;
      /* 加快动画速度 */
      z-index: 4;
      pointer-events: none;
      opacity: 1;
      /* 完全不透明 */
      mix-blend-mode: overlay;
      /* 添加混合模式增强效果 */
      /* 新增：硬件加速 */
      transform: translateZ(0);
      will-change: transform, opacity;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* 添加彩色光斑效果 */
      background:
        radial-gradient(circle at 20% 30%, rgba(255, 0, 0, 0.15) 0%, transparent 15%),
        radial-gradient(circle at 80% 70%, rgba(0, 255, 0, 0.15) 0%, transparent 15%),
        radial-gradient(circle at 50% 50%, rgba(0, 0, 255, 0.1) 0%, transparent 25%);
      animation: glitch-extra 1.2s infinite;
      z-index: 5;
      pointer-events: none;
      opacity: 0.6;
      mix-blend-mode: color-dodge;
      /* 增强发光效果 */
      transform: translateZ(0);
      will-change: opacity, transform;
    }
  }

  &.effect-pulse {
    animation: pulse 2s infinite;
  }

  // 响应式设计
  @media (max-width: 768px) {
    padding: 15px;

    .basic-type {
      min-height: 80px !important;
    }

    .media-type {
      min-height: 150px !important;
    }

    .action-type {
      min-height: 120px !important;
    }

    // 移动端降低动画效果以提高性能
    &.effect-scan::after {
      animation-duration: 4s;
    }

    &.effect-pulse {
      animation-duration: 3s;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;
    border-radius: 6px;

    .basic-type {
      min-height: 60px !important;
    }

    .media-type {
      min-height: 120px !important;
    }

    .action-type {
      min-height: 100px !important;
    }

    // 进一步降低动画效果
    &.effect-scan::after {
      animation-duration: 5s;
    }

    &.effect-pulse {
      animation-duration: 4s;
    }

    // 减少复杂效果以提高移动端性能
    &.effect-glitch {
      &::after {
        display: none;
      }

      .holo-card-content {
        animation: none;
      }
    }
  }
}

// 深度效果
.depth-1 {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;
}

.depth-2 {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.3s ease;
}

.depth-3 {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  transition: box-shadow 0.3s ease;
}

.depth-4 {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease;
}

.depth-5 {
  box-shadow: 0 16px 50px rgba(0, 0, 0, 0.6);
  transition: box-shadow 0.3s ease;
}

// 卡片类型样式
.basic-type {
  min-height: 100px;
}

.media-type {
  min-height: 200px;

  img,
  video {
    width: 100%;
    border-radius: 4px;
    margin-bottom: 10px;
  }
}

.action-type {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 150px;

  .action-buttons {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }
}

@keyframes glitch-extra {

  0%,
  100% {
    opacity: 0;
    transform: scale(0.9);
  }

  10% {
    opacity: 0.8;
    transform: scale(1.1);
  }

  20% {
    opacity: 0;
  }

  30% {
    opacity: 0.6;
    transform: scale(1.2);
  }

  40% {
    opacity: 0;
  }

  50% {
    opacity: 0.4;
    transform: scale(0.85);
  }

  60% {
    opacity: 0;
  }

  70% {
    opacity: 0.7;
    transform: scale(1.15);
  }

  80% {
    opacity: 0;
  }

  90% {
    opacity: 0.5;
    transform: scale(1.25);
  }
}

// 在组件样式中添加
.cp-holo-card.effect-glitch {
  animation: glitch-burst 8s infinite;
}

@keyframes glitch-burst {

  0%,
  100% {
    filter: none;
  }

  95% {
    filter: none;
  }

  96% {
    filter: brightness(1.5) contrast(1.2);
  }

  97% {
    filter: brightness(0.5) contrast(2);
  }

  98% {
    filter: brightness(1.8) contrast(0.8) hue-rotate(180deg);
  }

  99% {
    filter: brightness(0.2) contrast(3);
  }
}

// 全息边缘动画
@keyframes hologramEdge {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

.cp-holo-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid transparent;
  border-radius: 8px;
  background: linear-gradient(90deg, #00e6f6, #9400d3, #ff00ff, #00e6f6) border-box;
  background-size: 300% 100%;
  animation: hologramEdge 6s linear infinite;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  pointer-events: none;
  opacity: 0.7;
  z-index: 2;
  transition: opacity 0.3s ease;
}

// 效果动画
@keyframes scan {
  0% {
    top: 0;
    opacity: 1;
    /* 修复：初始状态设为可见 */
    transform: scaleX(0.1);
    /* 添加缩放效果 */
  }

  10% {
    transform: scaleX(1);
  }

  90% {
    transform: scaleX(1);
  }

  100% {
    top: 100%;
    opacity: 1;
    /* 修复：结束状态保持可见 */
    transform: scaleX(0.1);
  }
}

@keyframes glitch {
  0% {
    transform: translate(0);
    opacity: 0.7;
  }

  /* 添加更多关键帧，增大位移范围 */
  5% {
    transform: translate(-12px, 0);
    opacity: 1;
  }

  10% {
    transform: translate(12px, 0);
    opacity: 0.9;
  }

  15% {
    transform: translate(-8px, 3px);
    opacity: 1;
  }

  20% {
    transform: translate(8px, -3px);
    opacity: 0.8;
  }

  25% {
    transform: translate(-6px, 2px);
    opacity: 1;
  }

  /* 添加"崩溃"效果 */
  30% {
    transform: translate(0);
    opacity: 0.7;
  }

  35% {
    transform: translate(15px, 0);
    opacity: 0.9;
  }

  40% {
    transform: translate(-15px, 0);
    opacity: 1;
  }

  45% {
    transform: translate(0);
    opacity: 0.7;
  }

  /* 添加随机大位移 */
  50% {
    transform: translate(0);
    opacity: 0.7;
  }

  55% {
    transform: translate(-18px, 0);
    opacity: 0.8;
  }

  60% {
    transform: translate(18px, 0);
    opacity: 1;
  }

  65% {
    transform: translate(0);
    opacity: 0.7;
  }

  70% {
    transform: translate(-20px, 0);
    opacity: 0.7;
  }

  75% {
    transform: translate(20px, 0);
    opacity: 1;
  }

  80% {
    transform: translate(0);
    opacity: 0.7;
  }

  85% {
    transform: translate(-7px, 0);
    opacity: 0.9;
  }

  90% {
    transform: translate(7px, 0);
    opacity: 1;
  }

  95% {
    transform: translate(0);
    opacity: 0.7;
  }

  100% {
    transform: translate(0);
    opacity: 0.7;
  }
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 230, 246, 0.7);
    transform: scale(1);
  }

  50% {
    transform: scale(1.02);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(0, 230, 246, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(0, 230, 246, 0);
    transform: scale(1);
  }
}

// 文字故障动画
@keyframes textGlitch {

  0%,
  100% {
    transform: translate(0);
    text-shadow: none;
  }

  /* 优化前：位移仅 ±2px */
  3% {
    transform: translate(-8px, 0);
    /* 添加颜色通道分离效果 */
    text-shadow:
      8px 0 red,
      4px 0 white;
  }

  5% {
    transform: translate(8px, 0);
    text-shadow:
      -8px 0 blue,
      -4px 0 white;
  }

  8% {
    transform: translate(-5px, 3px);
    text-shadow:
      5px -3px green,
      -5px 3px red;
  }

  10% {
    transform: translate(5px, -3px);
    text-shadow:
      -5px 3px cyan,
      5px -3px magenta;
  }

  /* 添加倾斜效果 */
  13% {
    transform: translate(-6px, 2px) skew(-5deg);
    text-shadow:
      6px -2px yellow,
      -6px 2px purple;
  }

  16% {
    transform: translate(0);
    text-shadow: none;
  }

  /* 添加随机"崩溃"效果 */
  18% {
    transform: translate(-10px, 0);
    text-shadow:
      10px 0 red,
      5px 0 white;
  }

  20% {
    transform: translate(10px, 0);
    text-shadow:
      -10px 0 blue,
      -5px 0 white;
  }

  23% {
    transform: translate(0);
    text-shadow: none;
  }

  /* 添加闪烁效果 */
  25% {
    transform: translate(-12px, 0);
    text-shadow: 12px 0 cyan;
    opacity: 0.9;
  }

  27% {
    transform: translate(12px, 0);
    text-shadow: -12px 0 magenta;
    opacity: 1;
  }

  30% {
    transform: translate(0);
    text-shadow: none;
    opacity: 1;
  }
}
</style>