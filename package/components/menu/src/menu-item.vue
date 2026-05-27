<template>
  <li
    :class="[
      'cp-menu-item',
      `cp-menu-item--depth-${depth}`,
      {
        'is-active': isActive,
        'is-disabled': item.disabled,
        'has-children': hasChildren,
        'is-expanded': isExpanded,
        'is-horizontal': direction === 'horizontal',
        'is-vertical': direction === 'vertical',
      }
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      class="cp-menu-item-content"
      :class="{ 'cp-menu-item-content--active': isActive }"
      @click="handleClick"
      :tabindex="item.disabled ? -1 : 0"
      :aria-disabled="item.disabled"
      :aria-expanded="hasChildren ? isExpanded : undefined"
    >
      <!-- 选中指示条 -->
      <span v-if="isActive && depth === 0" class="cp-menu-item-indicator"></span>

      <!-- 图标 -->
      <span v-if="item.icon" class="cp-menu-item-icon">
        <i :class="item.icon"></i>
      </span>

      <!-- 文字 -->
      <span class="cp-menu-item-label">{{ item.label }}</span>

      <!-- 展开箭头 -->
      <span v-if="hasChildren" class="cp-menu-item-arrow">
        <svg viewBox="0 0 16 16" class="cp-menu-item-arrow-icon">
          <path d="M5.5 2.5 L10.5 8 L5.5 13.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </span>
    </div>

    <!-- 子菜单 -->
    <transition name="cp-submenu">
      <ul
        v-if="hasChildren && isExpanded"
        class="cp-submenu-list"
        :class="`cp-submenu-list--depth-${depth + 1}`"
        @mouseenter="handleSubmenuEnter"
        @mouseleave="handleSubmenuLeave"
      >
        <CyberMenuItem
          v-for="child in item.children"
          :key="child.value"
          :item="child"
          :depth="depth + 1"
          :direction="direction"
          :active-value="activeValue"
          :expanded-values="expandedValues"
          @select="(item: MenuItem) => emit('select', item)"
          @toggle-expand="(v: string | number) => emit('toggle-expand', v)"
          @expand="(v: string | number) => emit('expand', v)"
          @collapse="(v: string | number) => emit('collapse', v)"
        />
      </ul>
    </transition>
  </li>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { MenuItem } from './instance'

defineOptions({ name: 'CyberMenuItem' })

const props = defineProps<{
  item: MenuItem
  depth: number
  direction: 'horizontal' | 'vertical'
  activeValue: string | number
  expandedValues: (string | number)[]
}>()

const emit = defineEmits<{
  (e: 'select', item: MenuItem): void
  (e: 'toggle-expand', value: string | number): void
  (e: 'expand', value: string | number): void
  (e: 'collapse', value: string | number): void
}>()

const isHovered = ref(false)
const collapseTimer = ref<ReturnType<typeof setTimeout> | null>(null)

const hasChildren = computed(() => {
  return !!(props.item.children && props.item.children.length > 0)
})

const isActive = computed(() => props.activeValue === props.item.value)
const isExpanded = computed(() => props.expandedValues.includes(props.item.value))

/* ========== 点击：Toggle 展开 / 选中 ========== */
const handleClick = (e: MouseEvent) => {
  if (props.item.disabled) return
  e.stopPropagation()
  if (hasChildren.value) {
    emit('toggle-expand', props.item.value)
  } else {
    emit('select', props.item)
  }
}

/* ========== 鼠标进入 ========== */
const handleMouseEnter = () => {
  if (props.item.disabled) return
  isHovered.value = true
  cancelCollapseTimer()
  if (props.direction === 'horizontal' && hasChildren.value) {
    emit('expand', props.item.value)
  }
}

/* ========== 鼠标离开 ========== */
const handleMouseLeave = () => {
  isHovered.value = false
  if (props.direction === 'horizontal' && hasChildren.value) {
    collapseTimer.value = setTimeout(() => {
      emit('collapse', props.item.value)
    }, 180)
  }
}

/* ========== 子菜单鼠标进入：取消折叠计时 ========== */
const handleSubmenuEnter = () => {
  cancelCollapseTimer()
}

/* ========== 子菜单鼠标离开：触发折叠 ========== */
const handleSubmenuLeave = () => {
  if (props.direction === 'horizontal' && hasChildren.value) {
    collapseTimer.value = setTimeout(() => {
      emit('collapse', props.item.value)
    }, 150)
  }
}

const cancelCollapseTimer = () => {
  if (collapseTimer.value) {
    clearTimeout(collapseTimer.value)
    collapseTimer.value = null
  }
}
</script>

<style lang="scss" scoped>
/* ========== 菜单项容器 ========== */
.cp-menu-item {
  position: relative;
  list-style: none;
  white-space: nowrap;

  &.is-disabled {
    opacity: 0.4;
    cursor: not-allowed;
    pointer-events: none;
  }

  /* 横向顶级：行内块；子菜单项必须块级垂直堆叠 */
  &.is-horizontal {
    z-index: 100;

    &.cp-menu-item--depth-0 {
      display: inline-block;
      margin: 0 1px;
    }

    &.cp-menu-item--depth-1,
    &.cp-menu-item--depth-2 {
      display: block;
    }
  }

  /* 垂直：块级 */
  &.is-vertical {
    display: block;
  }
}

/* ========== 菜单项内容区 ========== */
.cp-menu-item-content {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--menu-text);
  border-left: 2px solid transparent;
  outline: none;

  &:hover {
    background: var(--menu-hover);
    color: var(--menu-primary);
  }

  &:focus-visible {
    box-shadow: inset 0 0 0 1px var(--menu-primary);
  }

  /* 激活态 */
  &--active {
    background: var(--menu-active);
    color: var(--menu-primary);
    border-left-color: var(--menu-primary);

    .cp-menu-item-label {
      text-shadow: 0 0 6px var(--menu-primary);
    }
  }

  /* 水平顶级菜单项：底部下划线指示 */
  .is-horizontal.cp-menu-item--depth-0 & {
    border-left: none;
    border-bottom: 2px solid transparent;

    &--active {
      border-bottom-color: var(--menu-primary);
    }

    &:hover {
      border-bottom-color: var(--menu-primary2);
    }
  }

  /* 横向下拉子菜单项：保持左侧边框指示（与垂直模式一致） */
  .is-horizontal.cp-menu-item--depth-1 &,
  .is-horizontal.cp-menu-item--depth-2 & {
    border-left: 2px solid transparent;

    &--active {
      border-left-color: var(--menu-primary);
      border-bottom: none;
    }

    &:hover {
      border-left-color: var(--menu-primary2);
    }
  }
}

/* ========== 选中指示条（垂直模式 0 级） ========== */
.cp-menu-item-indicator {
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--menu-primary);
  box-shadow: 0 0 8px var(--menu-primary), 0 0 16px var(--menu-primary);
  animation: indicatorGlow 1.5s ease-in-out infinite;
}

@keyframes indicatorGlow {
  0%, 100% { opacity: 0.7; }
  50% { opacity: 1; }
}

/* ========== 图标 ========== */
.cp-menu-item-icon {
  display: flex;
  align-items: center;
  margin-right: 8px;
  font-size: 15px;
  flex-shrink: 0;
  opacity: 0.8;
}

/* ========== 文字 ========== */
.cp-menu-item-label {
  flex: 1;
  font-size: 14px;
  line-height: 1.4;
  transition: text-shadow 0.2s ease;
}

/* ========== 展开箭头 ========== */
.cp-menu-item-arrow {
  display: flex;
  align-items: center;
  margin-left: 8px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.is-expanded > .cp-menu-item-content .cp-menu-item-arrow {
  transform: rotate(90deg);
}

.cp-menu-item-arrow-icon {
  width: 14px;
  height: 14px;
  color: var(--menu-muted);
  transition: color 0.2s ease;
}

.cp-menu-item-content:hover .cp-menu-item-arrow-icon {
  color: var(--menu-primary);
}

/* ========== 尺寸 / 缩进 ========== */
.is-vertical.cp-menu-item--depth-0 {
  & > .cp-menu-item-content {
    padding: 11px 16px;
  }
}

.is-vertical.cp-menu-item--depth-1 {
  padding-left: 18px;

  & > .cp-menu-item-content {
    padding: 9px 14px;
    font-size: 13px;
  }
}

.is-vertical.cp-menu-item--depth-2 {
  padding-left: 36px;

  & > .cp-menu-item-content {
    padding: 7px 12px;
    font-size: 13px;
  }
}

/* 水平顶级菜单项 */
.is-horizontal.cp-menu-item--depth-0 {
  & > .cp-menu-item-content {
    padding: 12px 18px;
  }
}

/* 横向下拉子菜单项（垂直堆叠，与竖向风格一致） */
.is-horizontal.cp-menu-item--depth-1 {
  & > .cp-menu-item-content {
    padding: 10px 16px;
  }
}

.is-horizontal.cp-menu-item--depth-2 {
  & > .cp-menu-item-content {
    padding: 8px 16px;
    font-size: 13px;
  }
}

/* ========== 子菜单列表 ========== */
.cp-submenu-list {
  list-style: none;
  margin: 0;
  padding: 4px 0;
  background: var(--menu-bg);
  border: 1px solid var(--menu-border);
  z-index: 200;

  /* 横向：绝对定位下拉 */
  .is-horizontal & {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 170px;
    border-top: 2px solid var(--menu-primary);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  /* 竖向：内嵌缩进 */
  .is-vertical & {
    margin: 2px 0 2px 0;
    border-left: 1px solid var(--menu-border);
  }
}

/* 嵌套子菜单（横向悬浮层的下一层） */
.is-horizontal .cp-submenu-list .cp-submenu-list {
  top: -1px;
  left: 100%;
  border-top: 1px solid var(--menu-border);
  border-left: 2px solid var(--menu-primary);
}

/* ========== 子菜单过渡动画 ========== */
.cp-submenu-enter-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.cp-submenu-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.cp-submenu-enter-from {
  opacity: 0;
  transform: translateY(-6px);
}

.cp-submenu-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

/* 横向二级子菜单从左侧进入 */
.is-horizontal .cp-submenu-list .cp-submenu-enter-from {
  transform: translateX(-6px);
}

.is-horizontal .cp-submenu-list .cp-submenu-leave-to {
  transform: translateX(-4px);
}
</style>
