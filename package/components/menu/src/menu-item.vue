<template>
  <li
    :class="[
      'menu-item',
      `depth-${depth}`,
      {
        'is-active': isActive,
        'is-disabled': item.disabled,
        'has-children': hasChildren,
        'is-expanded': isExpanded,
      },
    ]"
  >
    <div
      class="menu-item-content"
      @click="handleClick"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
    >
      <!-- Icon -->
      <span v-if="item.icon" class="menu-icon">
        <i :class="item.icon"></i>
      </span>
      
      <!-- Label with glitch effect -->
      <span 
        class="menu-label"
        :data-content="item.label"
      >
        {{ item.label }}
      </span>
      
      <!-- Arrow indicator for items with children -->
      <span v-if="hasChildren" class="menu-arrow">
        <i class="arrow-icon"></i>
      </span>
      
      <!-- Glitch effect overlay -->
      <div class="item-glitch-overlay"></div>
    </div>
    
    <!-- Submenu -->
    <transition name="submenu-fade">
      <ul 
        v-if="hasChildren && isExpanded" 
        class="submenu-list"
        :class="[
          `submenu-depth-${depth + 1}`,
          { 'is-horizontal-submenu': direction === 'horizontal' }
        ]"
      >
        <CyberMenuItem
          v-for="child in item.children"
          :key="child.value"
          :item="child"
          :depth="depth + 1"
          :direction="direction"
          :active-value="activeValue"
          :expanded-values="expandedValues"
          @select="$emit('select', $event)"
          @toggle-expand="$emit('toggle-expand', $event)"
        />
      </ul>
    </transition>
  </li>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({
  name: 'CyberMenuItem',
});

interface MenuItem {
  label: string;
  value: string | number;
  icon?: string;
  disabled?: boolean;
  children?: MenuItem[];
}

const props = defineProps<{
  item: MenuItem;
  depth: number;
  direction: 'horizontal' | 'vertical';
  activeValue: string | number;
  expandedValues: (string | number)[];
}>();

const emit = defineEmits<{
  (e: 'select', item: MenuItem): void;
  (e: 'toggle-expand', value: string | number): void;
}>();

const hasChildren = computed(() => {
  return props.item.children && props.item.children.length > 0;
});

const isActive = computed(() => {
  return props.activeValue === props.item.value;
});

const isExpanded = computed(() => {
  return props.expandedValues.includes(props.item.value);
});

const handleClick = () => {
  if (props.item.disabled) return;
  
  if (hasChildren.value) {
    emit('toggle-expand', props.item.value);
  } else {
    emit('select', props.item);
  }
};

const handleMouseEnter = () => {
  // Add hover effects
};

const handleMouseLeave = () => {
  // Remove hover effects
};
</script>

<style lang="scss" scoped>
.menu-item {
  position: relative;
  list-style: none;
  
  // 横向菜单项需要明确的边界
  .direction-horizontal & {
    position: relative;
    display: inline-block; // 确保每个项是独立的块
    
    &.has-children {
      z-index: 10;
    }
  }
  
  // 竖向菜单的子菜单缩进，增强父子关系
  .direction-vertical &.has-children.is-expanded {
    > .menu-item-content {
      // 展开的父菜单添加特殊标记
      &::after {
        content: '';
        position: absolute;
        right: 12px;
        top: 50%;
        width: 6px;
        height: 6px;
        background: var(--menu-primary);
        border-radius: 50%;
        transform: translateY(-50%);
        box-shadow: 0 0 8px var(--menu-primary);
      }
    }
  }
  
  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    
    .menu-item-content {
      cursor: not-allowed;
    }
  }
  
  &.is-active {
    .menu-item-content {
      background: var(--menu-active);
      
      // 横向菜单：底部高亮
      .direction-horizontal & {
        border-bottom: 3px solid var(--menu-primary);
        border-left: 3px solid transparent;
        box-shadow: 0 4px 12px rgba(var(--menu-primary-rgb), 0.3);
        
        &::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--menu-primary);
          box-shadow: 0 0 15px var(--menu-primary), 0 0 30px var(--menu-primary);
        }
      }
      
      // 竖向菜单：左侧高亮
      .direction-vertical & {
        border-left: 3px solid var(--menu-primary);
        border-bottom: 3px solid transparent;
        
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--menu-primary);
          box-shadow: 0 0 10px var(--menu-primary);
        }
      }
    }
    
    .menu-label {
      color: var(--menu-primary);
      text-shadow: 0 0 8px var(--menu-primary);
    }
  }
}

.menu-item-content {
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-left: 3px solid transparent;
  border-bottom: 3px solid transparent;
  
  // 横向菜单项需要有独立的背景容器
  .direction-horizontal & {
    position: relative;
    display: inline-flex;
    padding: 14px 28px;
    margin: 4px 2px;
    background: rgba(8, 16, 28, 0.6);
    border: 1px solid rgba(0, 230, 246, 0.1);
    border-radius: 4px;
    z-index: 2;
    isolation: isolate;
    
    // 确保hover效果只在当前项内生效
    &:hover {
      background: rgba(0, 230, 246, 0.1);
      border-color: rgba(0, 230, 246, 0.3);
    }
    
    &.is-active {
      background: rgba(0, 230, 246, 0.2);
      border-color: rgba(0, 230, 246, 0.5);
    }
  }
  
  // 为子菜单项添加缩进指示线
  .has-children.is-expanded > & {
    &::before {
      content: '';
      position: absolute;
      left: -12px;
      top: 50%;
      width: 10px;
      height: 2px;
      background: var(--menu-primary);
      opacity: 0.6;
      transform: translateY(-50%);
      box-shadow: 0 0 6px var(--menu-primary);
    }
  }
  
  &:hover:not(.is-disabled) {
    background: var(--menu-hover);
    
    // 横向菜单：悬停时底部显示
    .direction-horizontal & {
      border-bottom-color: var(--menu-primary);
      border-left-color: transparent;
      box-shadow: 0 2px 8px rgba(var(--menu-primary-rgb), 0.2);
    }
    
    // 竖向菜单：悬停时左侧显示
    .direction-vertical & {
      border-left-color: var(--menu-primary);
      border-bottom-color: transparent;
    }
    
    .menu-label {
      color: var(--menu-primary);
      text-shadow: 0 0 5px var(--menu-primary);
    }
    
    .menu-arrow .arrow-icon {
      transform: rotate(90deg);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover::after {
    left: 100%;
  }
}

.menu-icon {
  margin-right: 10px;
  color: var(--menu-muted);
  font-size: 14px;
  
  i {
    display: block;
  }
}

.menu-label {
  flex: 1;
  color: var(--menu-text);
  font-size: 14px;
  position: relative;
  transition: all 0.2s ease;
  
  &::after {
    content: attr(data-content);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: var(--menu-secondary);
    clip-path: inset(0 0 0 0);
    opacity: 0;
    pointer-events: none;
  }
  
  .menu-item-content:hover &::after {
    animation: label-glitch 0.3s steps(2, end);
  }
  
  // Glitch effect on active state
  .is-active & {
    &::before {
      content: attr(data-content);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      color: var(--menu-secondary);
      clip-path: inset(0 0 0 0);
      opacity: 0.7;
      pointer-events: none;
      animation: active-glitch 2s infinite;
    }
  }
}

.menu-arrow {
  margin-left: 8px;
  transition: transform 0.2s ease;
  
  .arrow-icon {
    display: block;
    width: 0;
    height: 0;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-left: 4px solid var(--menu-muted);
    transition: all 0.2s ease;
  }
  
  .is-expanded & .arrow-icon {
    transform: rotate(90deg);
    border-left-color: var(--menu-primary);
  }
}

// 不同深度的样式差异化
.menu-item.depth-1 {
  .menu-item-content {
    padding: 14px 16px;
    font-weight: 500;
  }
}

.menu-item.depth-2 {
  .menu-item-content {
    padding: 10px 16px;
    font-size: 13px;
    
    // 二级菜单项左侧添加连接点
    &::before {
      content: '';
      position: absolute;
      left: -18px;
      top: 50%;
      width: 8px;
      height: 2px;
      background: var(--menu-primary);
      opacity: 0.7;
      transform: translateY(-50%);
      box-shadow: 0 0 4px var(--menu-primary);
    }
  }
  
  .menu-label {
    opacity: 0.9;
  }
}

.menu-item.depth-3 {
  .menu-item-content {
    padding: 8px 16px;
    font-size: 12px;
    
    // 三级菜单项左侧添加更短的连接线
    &::before {
      content: '';
      position: absolute;
      left: -18px;
      top: 50%;
      width: 6px;
      height: 1px;
      background: var(--menu-primary);
      opacity: 0.5;
      transform: translateY(-50%);
    }
  }
  
  .menu-label {
    opacity: 0.85;
  }
}

.submenu-list {
  list-style: none;
  margin: 0;
  padding: 4px 0;
  background: rgba(5, 10, 20, 0.95);
  position: relative;
  
  // 添加明显的连接线指示器
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background: linear-gradient(
      to bottom,
      var(--menu-primary) 0%,
      var(--menu-primary) 100%
    );
    box-shadow: 0 0 8px var(--menu-primary);
    opacity: 0.6;
  }
  
  // 竖向菜单的子菜单容器也需要相对定位
  .direction-vertical & {
    position: relative;
  }
}

.submenu-depth-1 {
  margin-left: 24px;
  padding-left: 12px;
}

.submenu-depth-2 {
  margin-left: 24px;
  padding-left: 12px;
  background: rgba(3, 7, 15, 0.97);
}

.submenu-depth-3 {
  margin-left: 24px;
  padding-left: 12px;
  background: rgba(2, 5, 12, 0.99);
}

// 横向菜单的子菜单样式 - 向下展开
.is-horizontal-submenu {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  min-width: 200px;
  margin-left: 0 !important;
  padding-left: 0 !important;
  z-index: 1000;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 20px rgba(var(--menu-primary-rgb), 0.2);
  border-radius: 4px;
  border: 1px solid var(--menu-border-color);
  
  // 移除连接线，改为顶部指示线
  &::before {
    left: 0;
    right: 0;
    top: 0;
    bottom: auto;
    width: auto;
    height: 3px;
    background: linear-gradient(
      to right,
      var(--menu-primary) 0%,
      var(--menu-primary) 100%
    );
  }
}

.item-glitch-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  opacity: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.1) 0px,
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px,
    transparent 6px
  );
  mix-blend-mode: overlay;
}

@keyframes label-glitch {
  0% {
    clip-path: inset(20% 0 80% 0);
    transform: translate(-2px, 1px);
  }
  20% {
    clip-path: inset(60% 0 10% 0);
    transform: translate(2px, -1px);
  }
  40% {
    clip-path: inset(40% 0 50% 0);
    transform: translate(-1px, 2px);
  }
  60% {
    clip-path: inset(80% 0 5% 0);
    transform: translate(1px, -2px);
  }
  80% {
    clip-path: inset(10% 0 70% 0);
    transform: translate(-2px, 1px);
  }
  100% {
    clip-path: inset(30% 0 60% 0);
    transform: translate(0);
  }
}

@keyframes active-glitch {
  0%, 100% {
    clip-path: inset(0 0 0 0);
    transform: translate(0);
  }
  20% {
    clip-path: inset(20% 0 60% 0);
    transform: translate(-2px, 1px);
  }
  40% {
    clip-path: inset(60% 0 20% 0);
    transform: translate(2px, -1px);
  }
  60% {
    clip-path: inset(40% 0 40% 0);
    transform: translate(-1px, 2px);
  }
  80% {
    clip-path: inset(80% 0 10% 0);
    transform: translate(1px, -2px);
  }
}

.submenu-fade-enter-active,
.submenu-fade-leave-active {
  transition: opacity 0.2s ease, max-height 0.2s ease;
}

.submenu-fade-enter-from,
.submenu-fade-leave-to {
  opacity: 0;
  max-height: 0;
}

.submenu-fade-enter-to,
.submenu-fade-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
