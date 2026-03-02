<template>
  <div>
    <div
      ref="triggerRef"
      class="tooltip-trigger"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleClick"
      @focus="handleFocus"
      @blur="handleBlur"
    >
      <slot></slot>
    </div>

    <Teleport to="body">
      <div
        v-show="visible"
        ref="tooltipRef"
        :class="[
          'cp-cyber-tooltip',
          `theme-${theme}`,
          `effect-${effect}`,
          `position-${computedPosition}`,
        ]"
        :style="tooltipStyle"
      >
        <div class="tooltip-arrow"></div>
        <div class="tooltip-inner">
          <div class="tooltip-content">
            <slot name="content">{{ content }}</slot>
          </div>
          <div class="tooltip-scanline"></div>
          <div class="tooltip-glitch"></div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch, nextTick } from "vue";

defineOptions({
  name: "CyberTooltip",
});

const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  position: {
    type: String,
    default: "top",
    validator: (value: string) => {
      return ["top", "right", "bottom", "left", "auto"].indexOf(value) !== -1;
    },
  },
  effect: {
    type: String,
    default: "hologram",
    validator: (value: string) => {
      return ["hologram", "glitch", "scan", "fade"].indexOf(value) !== -1;
    },
  },
  trigger: {
    type: String,
    default: "hover",
    validator: (value: string) => {
      return ["hover", "click", "focus"].indexOf(value) !== -1;
    },
  },
  delay: {
    type: Number,
    default: 200,
  },
  width: {
    type: [String, Number],
    default: "auto",
  },
  theme: {
    type: String,
    default: "neon",
    validator: (value: string) => {
      return ["neon", "terminal", "holographic"].indexOf(value) !== -1;
    },
  },
});

const emit = defineEmits(["show", "hide"]);

const visible = ref(false);
const triggerRef = ref<HTMLElement | null>(null);
const tooltipRef = ref<HTMLElement | null>(null);
const timeout = ref<number | null>(null);
const computedPosition = ref(props.position);
const tooltipStyle = ref({});

// 计算最佳位置（用于 auto 模式）
const calculateBestPosition = () => {
  if (!triggerRef.value || !tooltipRef.value || props.position !== "auto") {
    return props.position;
  }

  const triggerRect = triggerRef.value.getBoundingClientRect();
  const tooltipRect = tooltipRef.value.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // 计算各个方向的空间
  const spaceTop = triggerRect.top;
  const spaceRight = viewportWidth - triggerRect.right;
  const spaceBottom = viewportHeight - triggerRect.bottom;
  const spaceLeft = triggerRect.left;

  // 找到空间最大的方向
  const spaces = [
    { position: "top", space: spaceTop },
    { position: "right", space: spaceRight },
    { position: "bottom", space: spaceBottom },
    { position: "left", space: spaceLeft },
  ];

  // 按空间大小排序
  spaces.sort((a, b) => b.space - a.space);

  // 确保有足够的空间显示tooltip
  const requiredSpace = tooltipRect.height || 50;
  const requiredWidth = tooltipRect.width || 150;

  for (const space of spaces) {
    if (
      (space.position === "top" && space.space >= requiredSpace + 10) ||
      (space.position === "bottom" && space.space >= requiredSpace + 10) ||
      (space.position === "left" && space.space >= requiredWidth + 10) ||
      (space.position === "right" && space.space >= requiredWidth + 10)
    ) {
      return space.position;
    }
  }

  return "top"; // 默认返回top
};
// 计算提示框宽度
const tooltipWidth = computed(() => {
  if (typeof props.width === "number") {
    return `${props.width}px`;
  }
  return props.width;
});

// 显示提示框
const show = () => {
  if (timeout.value) {
    clearTimeout(timeout.value);
  }

  timeout.value = window.setTimeout(() => {
    visible.value = true;
    nextTick(() => {
      // 对于 auto 模式，先计算最佳位置
      if (props.position === "auto") {
        computedPosition.value = calculateBestPosition();
      } else {
        computedPosition.value = props.position;
      }
      updatePosition();
      emit("show");
    });
  }, props.delay) as unknown as number;
};

// 隐藏提示框
const hide = () => {
  if (timeout.value) {
    clearTimeout(timeout.value);
  }

  timeout.value = window.setTimeout(() => {
    visible.value = false;
    emit("hide");
  }, 100) as unknown as number;
};
// 更新提示框位置 - 优化版本
const updatePosition = () => {
  if (!triggerRef.value || !tooltipRef.value) return;

  const triggerRect = triggerRef.value.getBoundingClientRect();
  const tooltipRect = tooltipRef.value.getBoundingClientRect();

  // 获取页面滚动偏移量 - 关键修复点
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // 根据位置计算坐标 - 修正版
  let left = 0;
  let top = 0;
  const GAP = 10;

  switch (computedPosition.value) {
    case "top":
      left =
        triggerRect.left +
        triggerRect.width / 2 -
        tooltipRect.width / 2 +
        scrollLeft;
      top = triggerRect.top - tooltipRect.height - GAP + scrollTop;
      break;
    case "right":
      left = triggerRect.right + GAP + scrollLeft;
      top =
        triggerRect.top +
        triggerRect.height / 2 -
        tooltipRect.height / 2 +
        scrollTop;
      break;
    case "bottom":
      left =
        triggerRect.left +
        triggerRect.width / 2 -
        tooltipRect.width / 2 +
        scrollLeft;
      top = triggerRect.bottom + GAP + scrollTop;
      break;
    case "left":
      left = triggerRect.left - tooltipRect.width - GAP + scrollLeft;
      top =
        triggerRect.top +
        triggerRect.height / 2 -
        tooltipRect.height / 2 +
        scrollTop;
      break;
  }

  // 防止提示框超出视口并进行智能调整 - 修正版
  const adjustPosition = () => {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const MARGIN = 10;

    // 水平方向调整
    if (left < MARGIN) {
      left = MARGIN;
    } else if (left + tooltipRect.width > viewportWidth - MARGIN) {
      left = viewportWidth - tooltipRect.width - MARGIN;
    }

    // 垂直方向调整 - 修正：移除 scrollTop
    if (top < MARGIN) {
      top = MARGIN;
    } else if (top + tooltipRect.height > viewportHeight - MARGIN) {
      top = viewportHeight - tooltipRect.height - MARGIN;
    }
  };

  adjustPosition();

  // 更新样式
  tooltipStyle.value = {
    left: `${left}px`,
    top: `${top}px`,
    width: tooltipWidth.value,
  };
};

// 事件处理函数
const handleMouseEnter = () => {
  if (props.trigger === "hover") {
    show();
  }
};

const handleMouseLeave = () => {
  if (props.trigger === "hover") {
    hide();
  }
};

const handleClick = () => {
  if (props.trigger === "click") {
    if (visible.value) {
      hide();
    } else {
      show();
    }
  }
};

const handleFocus = () => {
  if (props.trigger === "focus") {
    show();
  }
};

const handleBlur = () => {
  if (props.trigger === "focus") {
    hide();
  }
};

// 监听窗口大小变化，更新位置
const handleResize = () => {
  if (visible.value) {
    // 重新计算 auto 模式下的位置
    if (props.position === "auto") {
      computedPosition.value = calculateBestPosition();
    }
    updatePosition();
  }
};

// 监听滚动事件，更新位置（节流处理）
const handleScroll = () => {
  if (visible.value) {
    // 清除之前的定时器
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }

    // 使用节流，避免频繁更新
    scrollTimer = setTimeout(() => {
      updatePosition();
    }, 16); // 约60fps
  }
};

// 监听属性变化
watch(
  () => props.position,
  (newPos) => {
    if (visible.value) {
      nextTick(() => {
        // 重新计算位置
        if (newPos === "auto") {
          computedPosition.value = calculateBestPosition();
        } else {
          computedPosition.value = newPos;
        }
        updatePosition();
      });
    }
  }
);

let scrollParents: HTMLElement[] = [];

// 查找所有滚动父元素
const findScrollParents = (element: HTMLElement): HTMLElement[] => {
  let parents: HTMLElement[] = [];
  let parent = element.parentElement;

  while (parent) {
    const style = window.getComputedStyle(parent);
    const overflowRegex = /(auto|scroll)/;

    if (
      overflowRegex.test(style.overflow + style.overflowY + style.overflowX)
    ) {
      parents.push(parent);
    }

    parent = parent.parentElement;
  }

  // 添加window作为滚动元素
  parents.push(document.documentElement);

  return parents;
};

// 组件挂载和卸载
onMounted(() => {
  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll, { passive: true });

  // 点击外部关闭
  document.addEventListener("click", (e) => {
    if (visible.value && props.trigger === "click") {
      const target = e.target as HTMLElement;
      if (
        tooltipRef.value &&
        !tooltipRef.value.contains(target) &&
        triggerRef.value &&
        !triggerRef.value.contains(target)
      ) {
        hide();
      }
    }
  });

  // 新增：查找并监听所有滚动父元素
  // 在 onMounted 中添加
  if (triggerRef.value) {
    scrollParents = findScrollParents(triggerRef.value);

    // 添加防抖处理，避免频繁触发
    const throttledHandleScroll = () => {
      if (scrollTimer) clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        if (visible.value) updatePosition();
      }, 16); // 约60fps
    };

    scrollParents.forEach((parent) => {
      parent.addEventListener("scroll", throttledHandleScroll);
    });
  }
});
let scrollTimer: NodeJS.Timeout | null = null;
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  window.removeEventListener("scroll", handleScroll);

  // 新增：移除所有滚动父元素的监听
  scrollParents.forEach((parent) => {
    parent.removeEventListener("scroll", handleScroll);
  });

  if (timeout.value) {
    clearTimeout(timeout.value);
  }
  if (scrollTimer) {
    clearTimeout(scrollTimer);
  }
});
</script>

<style lang="scss" scoped>
.tooltip-trigger {
  display: inline-block;
  cursor: pointer;
}

.cp-cyber-tooltip {
  position: fixed;
  z-index: 9999;
  padding: 0;
  visibility: visible;
  pointer-events: none;

  .tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px;
    border-color: transparent;

    &::before {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 5px;
      border-color: transparent;
    }
  }

  .tooltip-inner {
    position: relative;
    padding: 12px 16px;
    border-radius: 4px;
    overflow: hidden;

    .tooltip-content {
      position: relative;
      z-index: 2;
      font-family: monospace;
      font-size: 14px;
      line-height: 1.5;
    }

    .tooltip-scanline {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      background: linear-gradient(
        to bottom,
        transparent,
        rgba(255, 255, 255, 0.04),
        transparent
      );
      background-size: 100% 8px;
      pointer-events: none;
      z-index: 1;
    }

    .tooltip-glitch {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      pointer-events: none;
      z-index: 1;
    }
  }

  // 位置样式
  &.position-top {
    .tooltip-arrow {
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      border-top-color: var(--tooltip-border-color);
      border-bottom-width: 0;

      &::before {
        top: -6px;
        left: -5px;
        border-top-color: var(--tooltip-bg-color);
        border-bottom-width: 0;
      }
    }
  }

  &.position-right {
    .tooltip-arrow {
      left: -6px;
      top: 50%;
      transform: translateY(-50%);
      border-right-color: var(--tooltip-border-color);
      border-left-width: 0;

      &::before {
        top: -5px;
        right: -6px;
        border-right-color: var(--tooltip-bg-color);
        border-left-width: 0;
      }
    }
  }

  &.position-bottom {
    .tooltip-arrow {
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      border-bottom-color: var(--tooltip-border-color);
      border-top-width: 0;

      &::before {
        bottom: -6px;
        left: -5px;
        border-bottom-color: var(--tooltip-bg-color);
        border-top-width: 0;
      }
    }
  }

  &.position-left {
    .tooltip-arrow {
      right: -6px;
      top: 50%;
      transform: translateY(-50%);
      border-left-color: var(--tooltip-border-color);
      border-right-width: 0;

      &::before {
        top: -5px;
        left: -6px;
        border-left-color: var(--tooltip-bg-color);
        border-right-width: 0;
      }
    }
  }

  // 主题样式
  &.theme-neon {
    --tooltip-bg-color: rgba(10, 10, 20, 0.9);
    --tooltip-border-color: #00e6f6;
    --tooltip-text-color: #fff;

    .tooltip-inner {
      background-color: var(--tooltip-bg-color);
      border: 1px solid var(--tooltip-border-color);
      box-shadow: 0 0 10px var(--tooltip-border-color);
      color: var(--tooltip-text-color);
    }

    .tooltip-scanline {
      animation: neon-scan 2s linear infinite;
    }
  }

  &.theme-terminal {
    --tooltip-bg-color: rgba(0, 20, 0, 0.9);
    --tooltip-border-color: #0f0;
    --tooltip-text-color: #0f0;

    .tooltip-inner {
      background-color: var(--tooltip-bg-color);
      border: 1px solid var(--tooltip-border-color);
      box-shadow: 0 0 10px var(--tooltip-border-color);
      color: var(--tooltip-text-color);
      font-family: "Courier New", monospace;
    }

    .tooltip-content {
      &::before {
        content: "> ";
      }
    }

    .tooltip-scanline {
      background: linear-gradient(
        to bottom,
        transparent,
        rgba(0, 255, 0, 0.1),
        transparent
      );
      animation: terminal-scan 1.5s linear infinite;
    }
  }

  &.theme-holographic {
    --tooltip-bg-color: rgba(30, 30, 60, 0.7);
    --tooltip-border-color: rgba(255, 255, 255, 0.3);
    --tooltip-text-color: #fff;

    .tooltip-inner {
      background-color: var(--tooltip-bg-color);
      backdrop-filter: blur(10px);
      border: 1px solid var(--tooltip-border-color);
      box-shadow: 0 0 20px rgba(120, 120, 255, 0.5);
      color: var(--tooltip-text-color);
    }

    .tooltip-inner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1),
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.1)
      );
      pointer-events: none;
    }

    .tooltip-scanline {
      background: linear-gradient(
        to bottom,
        transparent,
        rgba(120, 120, 255, 0.1),
        transparent
      );
      animation: holo-scan 3s linear infinite;
    }
  }

  // 效果样式
  &.effect-hologram {
    animation: hologram-appear 0.3s ease-out;

    .tooltip-inner {
      animation: hologram-flicker 5s linear infinite;
    }
  }

  &.effect-glitch {
    animation: glitch-appear 1s ease-out;

    .tooltip-glitch {
      animation: glitch-effect 3s linear infinite;
    }
  }

  &.effect-scan {
    animation: scan-appear 0.3s ease-out;

    .tooltip-inner::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      animation: scan-effect 2s ease-in-out infinite;
    }
  }

  &.effect-fade {
    animation: fade-appear 0.3s ease-out;
  }
}

// 动画定义
@keyframes hologram-appear {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }

  70% {
    opacity: 0.7;
    transform: scale(1.05);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes hologram-flicker {
  0%,
  100% {
    opacity: 1;
  }

  92% {
    opacity: 0.8;
  }

  94% {
    opacity: 0.9;
  }

  96% {
    opacity: 0.4;
  }

  98% {
    opacity: 0.9;
  }
}

@keyframes glitch-appear {
  0% {
    opacity: 0;
    transform: translateX(-10px);
    clip-path: inset(0 0 0 100%);
  }

  10% {
    clip-path: inset(20% 0 20% 0);
  }

  20% {
    clip-path: inset(40% 0 40% 0);
    transform: translateX(10px);
  }

  30% {
    clip-path: inset(60% 0 60% 0);
    transform: translateX(-10px);
  }

  40% {
    clip-path: inset(80% 0 80% 0);
  }

  50% {
    opacity: 1;
    transform: translateX(0);
    clip-path: inset(0 0 0 0);
  }

  80% {
    clip-path: inset(40% 0 40% 0);
    transform: translateX(10px);
  }

  90% {
    opacity: 0;
    clip-path: inset(80% 0 80% 0);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
    clip-path: inset(0 0 0 0);
  }
}

@keyframes glitch-effect {
  0%,
  100% {
    opacity: 0;
  }

  92% {
    opacity: 0;
  }

  92.5% {
    opacity: 1;
    left: -5px;
    background-color: rgba(255, 0, 255, 0.1);
  }

  93% {
    opacity: 0;
  }

  93.5% {
    opacity: 1;
    left: 5px;
    background-color: rgba(0, 255, 255, 0.1);
  }

  94% {
    opacity: 0;
  }
}

@keyframes scan-appear {
  0% {
    opacity: 0;
    clip-path: inset(0 0 100% 0);
  }

  100% {
    opacity: 1;
    clip-path: inset(0 0 0 0);
  }
}

@keyframes scan-effect {
  0% {
    left: -100%;
  }

  100% {
    left: 100%;
  }
}

@keyframes fade-appear {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes neon-scan {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 0 100px;
  }
}

@keyframes terminal-scan {
  0% {
    background-position: 0 -100px;
  }

  100% {
    background-position: 0 100px;
  }
}

@keyframes holo-scan {
  0% {
    background-position: 0 -200px;
  }

  100% {
    background-position: 0 200px;
  }
}
</style>
