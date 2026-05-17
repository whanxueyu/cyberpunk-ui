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
        :class="`submenu-depth-${depth + 1}`"
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
      border-left: 3px solid var(--menu-primary);
      
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
  
  &:hover:not(.is-disabled) {
    background: var(--menu-hover);
    border-left-color: var(--menu-primary);
    
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

.submenu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  background: rgba(5, 10, 20, 0.9);
  border-left: 1px solid var(--menu-border-color);
}

.submenu-depth-1 {
  margin-left: 16px;
}

.submenu-depth-2 {
  margin-left: 32px;
}

.submenu-depth-3 {
  margin-left: 48px;
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
