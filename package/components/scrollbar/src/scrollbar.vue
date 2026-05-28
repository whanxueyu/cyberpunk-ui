<template>
  <div
    class="cp-scrollbar"
    :class="[`theme-${theme}`, `size-${size}`, { 'is-always': always }]"
    :style="containerStyle"
  >
    <div
      ref="wrapRef"
      class="cp-scrollbar__wrap"
      @wheel.passive="handleWheel"
    >
      <div ref="viewRef" class="cp-scrollbar__view">
        <slot></slot>
      </div>
    </div>

    <!-- 垂直滚动条 -->
    <div
      v-show="showVertical"
      ref="vTrackRef"
      class="cp-scrollbar__track is-vertical"
      @mousedown="handleVerticalTrackClick"
    >
      <div
        ref="vThumbRef"
        class="cp-scrollbar__thumb is-vertical"
        :style="vThumbStyle"
        @mousedown.prevent="handleVDragStart"
      ></div>
    </div>

    <!-- 水平滚动条 -->
    <div
      v-show="showHorizontal"
      ref="hTrackRef"
      class="cp-scrollbar__track is-horizontal"
      @mousedown="handleHorizontalTrackClick"
    >
      <div
        ref="hThumbRef"
        class="cp-scrollbar__thumb is-horizontal"
        :style="hThumbStyle"
        @mousedown.prevent="handleHDragStart"
      ></div>
    </div>

    <!-- 滚动角 -->
    <div v-show="showVertical && showHorizontal" class="cp-scrollbar__corner"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';

defineOptions({
  name: 'CyberScrollbar',
})

const props = defineProps({
  height: {
    type: [String, Number],
    default: '',
  },
  maxHeight: {
    type: [String, Number],
    default: '',
  },
  theme: {
    type: String,
    default: 'primary',
    validator: (v: string) => ['primary', 'success', 'warning', 'danger', 'info'].includes(v),
  },
  size: {
    type: String,
    default: 'default',
    validator: (v: string) => ['small', 'default', 'large'].includes(v),
  },
  always: {
    type: Boolean,
    default: false,
  },
})

// 状态
const wrapRef = ref<HTMLElement | null>(null)
const viewRef = ref<HTMLElement | null>(null)
const vTrackRef = ref<HTMLElement | null>(null)
const vThumbRef = ref<HTMLElement | null>(null)
const hTrackRef = ref<HTMLElement | null>(null)
const hThumbRef = ref<HTMLElement | null>(null)

const scrollTop = ref(0)
const scrollLeft = ref(0)
const vThumbTop = ref(0)
const hThumbLeft = ref(0)
const vThumbHeight = ref(20)
const hThumbWidth = ref(20)
const showVertical = ref(false)
const showHorizontal = ref(false)

let isDragging = false
let dragAxis: 'v' | 'h' = 'v'
let dragStart = 0
let dragStartScroll = 0
let resizeObs: ResizeObserver | null = null

const sizeMap: Record<string, number> = { small: 5, default: 7, large: 10 }

const containerStyle = computed(() => {
  const s: Record<string, string> = {}
  if (props.height) s.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  if (props.maxHeight) s.maxHeight = typeof props.maxHeight === 'number' ? `${props.maxHeight}px` : props.maxHeight
  return s
})

const vThumbStyle = computed(() => ({
  height: `${vThumbHeight.value}px`,
  transform: `translateY(${vThumbTop.value}px)`,
}))

const hThumbStyle = computed(() => ({
  width: `${hThumbWidth.value}px`,
  transform: `translateX(${hThumbLeft.value}px)`,
}))

// 更新滚动条状态
const update = () => {
  if (!wrapRef.value || !viewRef.value) return

  const wrap = wrapRef.value
  const view = viewRef.value

  const wrapH = wrap.clientHeight
  const wrapW = wrap.clientWidth
  const viewH = view.scrollHeight
  const viewW = view.scrollWidth
  const trackW = sizeMap[props.size] + 4
  const trackH = sizeMap[props.size] + 4

  const hasV = viewH > wrapH
  const hasH = viewW > wrapW

  showVertical.value = hasV || props.always
  showHorizontal.value = hasH || props.always

  if (hasV || props.always) {
    const availH = hasH ? wrapH - trackH : wrapH
    const ratio = availH / viewH
    vThumbHeight.value = Math.max(18, availH * ratio)
    const maxTop = availH - vThumbHeight.value
    const scrollRatio = viewH - wrapH
    vThumbTop.value = scrollRatio > 0 ? (scrollTop.value / scrollRatio) * maxTop : 0
  }

  if (hasH || props.always) {
    const availW = hasV ? wrapW - trackW : wrapW
    const ratio = availW / viewW
    hThumbWidth.value = Math.max(18, availW * ratio)
    const maxLeft = availW - hThumbWidth.value
    const scrollRatio = viewW - wrapW
    hThumbLeft.value = scrollRatio > 0 ? (scrollLeft.value / scrollRatio) * maxLeft : 0
  }
}

// 滚动到指定位置
const scrollToY = (y: number) => {
  if (!wrapRef.value || !viewRef.value) return
  const maxScroll = viewRef.value.scrollHeight - wrapRef.value.clientHeight
  scrollTop.value = Math.max(0, Math.min(y, maxScroll))
  wrapRef.value.scrollTop = scrollTop.value
}

const scrollToX = (x: number) => {
  if (!wrapRef.value || !viewRef.value) return
  const maxScroll = viewRef.value.scrollWidth - wrapRef.value.clientWidth
  scrollLeft.value = Math.max(0, Math.min(x, maxScroll))
  wrapRef.value.scrollLeft = scrollLeft.value
}

// 原生滚动同步
const handleScroll = () => {
  if (!wrapRef.value || isDragging) return
  scrollTop.value = wrapRef.value.scrollTop
  scrollLeft.value = wrapRef.value.scrollLeft
  update()
}

// 滚轮事件
const handleWheel = (e: WheelEvent) => {
  if (!wrapRef.value || !viewRef.value) return

  const wrap = wrapRef.value
  const view = viewRef.value
  const maxSY = view.scrollHeight - wrap.clientHeight
  const maxSX = view.scrollWidth - wrap.clientWidth

  // Shift + 滚轮 或触控板横向滑动 → 优先横向
  if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && maxSX > 0) {
    scrollToX(scrollLeft.value + e.deltaX)
    return
  }

  // 普通滚轮：有纵向就滚纵向，否则把 deltaY 转用于横向
  if (maxSY > 0) {
    scrollToY(scrollTop.value + e.deltaY)
  } else if (maxSX > 0) {
    scrollToX(scrollLeft.value + e.deltaY)
  }
}

// 垂直拖拽
const handleVDragStart = (e: MouseEvent) => {
  isDragging = true
  dragAxis = 'v'
  dragStart = e.clientY
  dragStartScroll = scrollTop.value
  document.addEventListener('mousemove', handleDragMove)
  document.addEventListener('mouseup', handleDragEnd)
}

const handleHDragStart = (e: MouseEvent) => {
  isDragging = true
  dragAxis = 'h'
  dragStart = e.clientX
  dragStartScroll = scrollLeft.value
  document.addEventListener('mousemove', handleDragMove)
  document.addEventListener('mouseup', handleDragEnd)
}

const handleDragMove = (e: MouseEvent) => {
  if (!isDragging || !wrapRef.value || !viewRef.value) return

  const wrap = wrapRef.value
  const view = viewRef.value

  if (dragAxis === 'v') {
    const delta = e.clientY - dragStart
    const trackH = (vTrackRef.value?.clientHeight || 0) - vThumbHeight.value
    const scrollRange = view.scrollHeight - wrap.clientHeight
    if (trackH > 0) {
      const ratio = scrollRange / trackH
      scrollToY(dragStartScroll + delta * ratio)
    }
  } else {
    const delta = e.clientX - dragStart
    const trackW = (hTrackRef.value?.clientWidth || 0) - hThumbWidth.value
    const scrollRange = view.scrollWidth - wrap.clientWidth
    if (trackW > 0) {
      const ratio = scrollRange / trackW
      scrollToX(dragStartScroll + delta * ratio)
    }
  }
  update()
}

const handleDragEnd = () => {
  isDragging = false
  document.removeEventListener('mousemove', handleDragMove)
  document.removeEventListener('mouseup', handleDragEnd)
}

// 点击轨道跳转
const handleVerticalTrackClick = (e: MouseEvent) => {
  if (!vTrackRef.value || !wrapRef.value || !viewRef.value) return
  if (e.target === vThumbRef.value) return

  const track = vTrackRef.value
  const wrap = wrapRef.value
  const view = viewRef.value
  const clickY = e.clientY - track.getBoundingClientRect().top - vThumbHeight.value / 2
  const trackH = track.clientHeight - vThumbHeight.value
  const ratio = clickY / trackH
  scrollToY(ratio * (view.scrollHeight - wrap.clientHeight))
}

const handleHorizontalTrackClick = (e: MouseEvent) => {
  if (!hTrackRef.value || !wrapRef.value || !viewRef.value) return
  if (e.target === hThumbRef.value) return

  const track = hTrackRef.value
  const wrap = wrapRef.value
  const view = viewRef.value
  const clickX = e.clientX - track.getBoundingClientRect().left - hThumbWidth.value / 2
  const trackW = track.clientWidth - hThumbWidth.value
  const ratio = clickX / trackW
  scrollToX(ratio * (view.scrollWidth - wrap.clientWidth))
}

onMounted(async () => {
  await nextTick()
  if (!wrapRef.value) return

  wrapRef.value.addEventListener('scroll', handleScroll)

  if (viewRef.value) {
    resizeObs = new ResizeObserver(() => update())
    resizeObs.observe(viewRef.value)
    resizeObs.observe(wrapRef.value)
  }

  update()
})

onUnmounted(() => {
  wrapRef.value?.removeEventListener('scroll', handleScroll)
  resizeObs?.disconnect()
  document.removeEventListener('mousemove', handleDragMove)
  document.removeEventListener('mouseup', handleDragEnd)
})

defineExpose({
  update,
  scrollToY,
  scrollToX,
  wrapRef,
})
</script>

<style lang="scss" scoped>
// ========= 尺寸变量 =========
$thumb-w-small: 5px;
$thumb-w-default: 7px;
$thumb-w-large: 10px;

.cp-scrollbar {
  position: relative;
  overflow: hidden;
  height: 100%;

  &.size-small  { --sb-size: #{$thumb-w-small};  --sb-track: 9px; }
  &.size-default { --sb-size: #{$thumb-w-default}; --sb-track: 12px; }
  &.size-large  { --sb-size: #{$thumb-w-large};  --sb-track: 16px; }
}

.cp-scrollbar__wrap {
  height: 100%;
  overflow: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
}

.cp-scrollbar__view {
  display: inline-block;
  min-width: 100%;
}

// ========= 轨道 =========
.cp-scrollbar__track {
  position: absolute;
  z-index: 1;
  background: transparent;
  transition: background 0.2s;

  .cp-scrollbar:hover &,
  .cp-scrollbar.is-always & {
    background: rgba(0, 0, 0, 0.45);
  }

  &.is-vertical {
    top: 0;
    right: 0;
    bottom: 0;
    width: var(--sb-track);
    border-left: 1px solid rgba(255, 255, 255, 0.06);
  }

  &.is-horizontal {
    left: 0;
    right: 0;
    bottom: 0;
    height: var(--sb-track);
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }
}

// ========= 滑块 =========
.cp-scrollbar__thumb {
  position: absolute;
  cursor: pointer;
  background: var(--thumb-color, var(--cp-primary-color, #00e6f6));
  box-shadow: 0 0 4px var(--thumb-glow, var(--cp-primary-color, #00e6f6));
  transition: box-shadow 0.15s;

  // 凌厉边角 — 多边形切角替代圆角
  clip-path: polygon(
    3px 0%, calc(100% - 3px) 0%,
    100% 3px, 100% calc(100% - 3px),
    calc(100% - 3px) 100%, 3px 100%,
    0% calc(100% - 3px), 0% 3px
  );

  .cp-scrollbar:hover &,
  .cp-scrollbar.is-always & {
    box-shadow: 0 0 8px var(--thumb-glow, var(--cp-primary-color, #00e6f6));
  }

  &:hover {
    box-shadow: 0 0 12px var(--thumb-glow, var(--cp-primary-color, #00e6f6));
  }

  &:active {
    box-shadow: 0 0 16px var(--thumb-glow, var(--cp-primary-color, #00e6f6));
    filter: brightness(1.2);
  }

  &.is-vertical {
    right: 2px;
    width: var(--sb-size);
    // 垂直方向保留方角（只切左右两侧）
    clip-path: polygon(
      2px 0%, calc(100% - 2px) 0%,
      100% 2px, 100% calc(100% - 2px),
      calc(100% - 2px) 100%, 2px 100%,
      0% calc(100% - 2px), 0% 2px
    );
  }

  &.is-horizontal {
    bottom: 2px;
    height: var(--sb-size);
    clip-path: polygon(
      2px 0%, calc(100% - 2px) 0%,
      100% 2px, 100% calc(100% - 2px),
      calc(100% - 2px) 100%, 2px 100%,
      0% calc(100% - 2px), 0% 2px
    );
  }
}

// ========= 滚动角 =========
.cp-scrollbar__corner {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 2;
  width: var(--sb-track);
  height: var(--sb-track);
  background: rgba(0, 0, 0, 0.6);

  // 左下角切一道斜线
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
}

// ========= 主题色 =========
.theme-primary {
  --thumb-color: var(--cp-primary-color, #00e6f6);
  --thumb-glow: var(--cp-primary-color, #00e6f6);
}
.theme-success {
  --thumb-color: var(--cp-success-color, #22c55e);
  --thumb-glow: var(--cp-success-color, #22c55e);
}
.theme-warning {
  --thumb-color: var(--cp-warning-color, #f59e0b);
  --thumb-glow: var(--cp-warning-color, #f59e0b);
}
.theme-danger {
  --thumb-color: var(--cp-danger-color, #ef4444);
  --thumb-glow: var(--cp-danger-color, #ef4444);
}
.theme-info {
  --thumb-color: var(--cp-info-color, #3b82f6);
  --thumb-glow: var(--cp-info-color, #3b82f6);
}
</style>
