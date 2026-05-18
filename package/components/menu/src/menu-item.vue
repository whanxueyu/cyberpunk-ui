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
        'is-horizontal': direction === 'horizontal',
        'is-vertical': direction === 'vertical'
      }
    ]"
  >
    <div
      class="menu-item-content"
      @click="handleClick"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      :tabindex="item.disabled ? -1 : 0"
      :aria-disabled="item.disabled"
      :aria-expanded="hasChildren ? isExpanded : undefined"
    >
      <span v-if="item.icon" class="menu-icon">
        <i :class="item.icon"></i>
      </span>
      <span class="menu-label">{{ item.label }}</span>
      <span v-if="hasChildren" class="menu-arrow">
        <i class="arrow-icon"></i>
      </span>
    </div>

    <!-- 子菜单：横向菜单绝对定位，不占空间 -->
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
import { computed, ref } from 'vue';

defineOptions({ name: 'CyberMenuItem' });

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

const isHovered = ref(false);

const hasChildren = computed(() => {
  return props.item.children && props.item.children.length > 0;
});

const isActive = computed(() => props.activeValue === props.item.value);
const isExpanded = computed(() => props.expandedValues.includes(props.item.value));

const handleClick = (e: MouseEvent) => {
  if (props.item.disabled) return;
  e.stopPropagation();
  if (hasChildren.value) {
    emit('toggle-expand', props.item.value);
  } else {
    emit('select', props.item);
  }
};

const handleMouseEnter = () => {
  if (props.item.disabled) return;
  isHovered.value = true;
  if (props.direction === 'horizontal' && hasChildren.value) {
    emit('toggle-expand', props.item.value);
  }
};

const handleMouseLeave = () => {
  isHovered.value = false;
  if (props.direction === 'horizontal' && hasChildren.value) {
    setTimeout(() => {
      if (!isHovered.value) emit('toggle-expand', props.item.value);
    }, 200);
  }
};
</script>

<style lang="scss" scoped>
.menu-item {
  position: relative;
  list-style: none;
  white-space: nowrap;
  box-shadow: 0 -4px 12px rgba(0, 159, 199, 0.3);

  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    .menu-item-content {
      cursor: not-allowed;
      pointer-events: none;
    }
  }

  /* 横向菜单：关键修复 */
  &.is-horizontal {
    display: inline-block;
    position: relative;
    z-index: 1000;

    &.depth-0 {
      margin: 0 2px;
      .menu-item-content {
        padding: 12px 20px;
      }
    }
  }

  &.is-vertical {
    display: block;
    &.depth-0 .menu-item-content { padding: 12px 16px; }
    &.depth-1 { padding-left: 20px; .menu-item-content { padding: 10px 16px; } }
    &.depth-2 { padding-left: 40px; .menu-item-content { padding: 8px 16px; font-size: 13px; } }
  }

  &.is-active .menu-item-content,
  &:hover:not(.is-disabled) .menu-item-content {
    background: var(--menu-active);
    color: var(--menu-primary);
    .menu-label { text-shadow: 0 0 8px var(--menu-primary); }
  }
}

.menu-item-content {
  display: flex;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--menu-bg);
  border-left: 3px solid transparent;

  &:hover:not(.is-disabled) {
    background: var(--menu-hover);
    border-left-color: var(--menu-primary);
  }

  .is-active & {
    border-left-color: var(--menu-primary);
    background: var(--menu-active);
  }

  .is-horizontal & {
    border-left: none;
    border-bottom: 3px solid transparent;
    &:hover {
      border-bottom-color: var(--menu-primary);
    }
    .is-active & {
      border-bottom-color: var(--menu-primary);
    }
  }
}

.menu-icon { margin-right: 10px; font-size: 14px; flex-shrink:0; }
.menu-label { flex:1; color: var(--menu-text); font-size:14px; }
.menu-arrow { margin-left:8px; flex-shrink:0; }
.arrow-icon {
  width:0; height:0;
  border-top:4px solid transparent;
  border-bottom:4px solid transparent;
  border-left:4px solid var(--menu-muted);
  transition: all 0.2s;
}
.is-expanded .arrow-icon {
  transform: rotate(90deg);
  border-left-color: var(--menu-primary);
}

/* 核心：横向子菜单绝对定位，不占用父级空间 */
.submenu-list {
  list-style: none;
  margin:0; padding:0;
  background: var(--menu-bg);
  // box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  border-radius:4px;
  z-index:999;

  /* 横向菜单：绝对定位 + 脱离文档流 */
  .is-horizontal.depth-0 & {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 180px;
    border-top: 3px solid var(--menu-primary);
  }

  /* 竖向菜单：正常流 */
  .is-vertical & {
    margin-left:8px; margin-top:2px; margin-bottom:8px;
  }
}

.submenu-fade-enter-active,
.submenu-fade-leave-active { transition: opacity 0.2s, transform 0.2s; }
.submenu-fade-enter-from { opacity:0; transform: translateY(5px); }
.submenu-fade-leave-to { opacity:0; transform: translateY(-5px); }
</style>