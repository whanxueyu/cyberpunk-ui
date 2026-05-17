<template>
  <div
    :class="[
      'cp-cyber-menu',
      `direction-${direction}`,
      `theme-${theme}`,
      `effect-${effect}`,
      {
        'is-horizontal': direction === 'horizontal',
        'is-vertical': direction === 'vertical',
        'is-glitching': isGlitching,
      },
    ]"
  >
    <ul class="menu-list">
      <CyberMenuItem
        v-for="item in menuItems"
        :key="item.value"
        :item="item"
        :depth="0"
        :direction="direction"
        :active-value="activeValue"
        :expanded-values="expandedValues"
        @select="handleSelect"
        @toggle-expand="handleToggleExpand"
      />
    </ul>
    
    <!-- Glitch effect overlay -->
    <div v-if="effect === 'glitch'" class="menu-glitch-overlay"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import CyberMenuItem from './menu-item.vue';

defineOptions({
  name: 'CyberMenu',
});

type MenuDirection = 'horizontal' | 'vertical';
type MenuTheme = 'neon' | 'terminal' | 'matrix' | 'hologram';
type MenuEffect = 'none' | 'glitch' | 'scanline' | 'pulse';

interface MenuItem {
  label: string;
  value: string | number;
  icon?: string;
  disabled?: boolean;
  children?: MenuItem[];
}

const props = withDefaults(defineProps<{
  modelValue?: string | number;
  items?: MenuItem[];
  direction?: MenuDirection;
  theme?: MenuTheme;
  effect?: MenuEffect;
}>(), {
  modelValue: '',
  items: () => [],
  direction: 'vertical',
  theme: 'neon',
  effect: 'none',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
  (e: 'change', value: string | number): void;
  (e: 'select', item: MenuItem): void;
}>();

const activeValue = ref<string | number>(props.modelValue);
const expandedValues = ref<(string | number)[]>([]);
const isGlitching = ref(false);

const menuItems = ref<MenuItem[]>(props.items);

// Handle menu item selection
const handleSelect = (item: MenuItem) => {
  if (item.disabled) return;
  
  activeValue.value = item.value;
  emit('update:modelValue', item.value);
  emit('change', item.value);
  emit('select', item);
  
  // Trigger glitch effect on selection
  if (props.effect === 'glitch') {
    triggerGlitchEffect();
  }
};

// Handle submenu expand/collapse
const handleToggleExpand = (value: string | number) => {
  const index = expandedValues.value.indexOf(value);
  if (index > -1) {
    expandedValues.value.splice(index, 1);
  } else {
    expandedValues.value.push(value);
  }
};

// Trigger glitch effect
const triggerGlitchEffect = () => {
  isGlitching.value = true;
  setTimeout(() => {
    isGlitching.value = false;
  }, 300);
};

// Watch for external modelValue changes
watch(() => props.modelValue, (newVal) => {
  activeValue.value = newVal;
});

// Watch for items changes
watch(() => props.items, (newItems) => {
  menuItems.value = newItems;
}, { deep: true });
</script>

<style lang="scss" scoped>
.cp-cyber-menu {
  position: relative;
  display: inline-block;
  min-width: 200px;
  background: rgba(8, 16, 28, 0.85);
  border: 1px solid var(--menu-border-color, rgba(0, 230, 246, 0.3));
  border-radius: 4px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 20px rgba(0, 230, 246, 0.15);
  
  --menu-primary: #00e6f6;
  --menu-primary-rgb: 0, 230, 246;
  --menu-secondary: #ff2f70;
  --menu-accent: #47f2c6;
  --menu-text: rgba(245, 252, 255, 0.95);
  --menu-muted: rgba(206, 232, 245, 0.58);
  --menu-bg: rgba(8, 16, 28, 0.85);
  --menu-hover: rgba(0, 230, 246, 0.12);
  --menu-active: rgba(0, 230, 246, 0.25);
  --menu-border-color: rgba(0, 230, 246, 0.3);
  --menu-shadow: rgba(0, 230, 246, 0.25);
  
  &.theme-terminal {
    --menu-primary: #47f26b;
    --menu-primary-rgb: 71, 242, 107;
    --menu-secondary: #ff5252;
    --menu-accent: #c2f132;
    --menu-border-color: rgba(71, 242, 107, 0.4);
    --menu-hover: rgba(71, 242, 107, 0.12);
    --menu-active: rgba(71, 242, 107, 0.25);
    --menu-shadow: rgba(71, 242, 107, 0.25);
  }
  
  &.theme-matrix {
    --menu-primary: #00ff41;
    --menu-primary-rgb: 0, 255, 65;
    --menu-secondary: #f7da66;
    --menu-accent: #00ff41;
    --menu-border-color: rgba(0, 255, 65, 0.4);
    --menu-hover: rgba(0, 255, 65, 0.12);
    --menu-active: rgba(0, 255, 65, 0.25);
    --menu-shadow: rgba(0, 255, 65, 0.25);
  }
  
  &.theme-hologram {
    --menu-primary: #b78cff;
    --menu-primary-rgb: 183, 140, 255;
    --menu-secondary: #ff4fd8;
    --menu-accent: #71f6ff;
    --menu-border-color: rgba(183, 140, 255, 0.4);
    --menu-hover: rgba(183, 140, 255, 0.12);
    --menu-active: rgba(183, 140, 255, 0.25);
    --menu-shadow: rgba(183, 140, 255, 0.25);
  }
  
  &.direction-horizontal {
    .menu-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  
  &.direction-vertical {
    .menu-list {
      display: flex;
      flex-direction: column;
    }
  }
  
  &.effect-glitch {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
      z-index: 1;
      animation: glitch-scan 3s linear infinite;
      pointer-events: none;
    }
    
    .menu-list {
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.1) 0px,
          rgba(0, 0, 0, 0.1) 1px,
          transparent 1px,
          transparent 8px
        );
        pointer-events: none;
        opacity: 0.3;
        mix-blend-mode: overlay;
      }
    }
  }
  
  &.effect-scanline {
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--menu-primary);
      opacity: 0.3;
      animation: scanline-move 4s linear infinite;
      pointer-events: none;
    }
  }
  
  &.effect-pulse {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  
  &.is-glitching {
    animation: menu-glitch 0.3s steps(2, end);
    
    .menu-list {
      animation: list-glitch 0.3s steps(2, end);
    }
  }
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  z-index: 2;
}

.menu-glitch-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 3;
  opacity: 0;
  background: repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.15) 0px,
    rgba(0, 0, 0, 0.15) 1px,
    transparent 1px,
    transparent 8px
  );
  mix-blend-mode: overlay;
}

@keyframes glitch-scan {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes scanline-move {
  0% {
    top: 0;
  }
  100% {
    top: 100%;
  }
}

@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px var(--menu-shadow);
  }
  50% {
    box-shadow: 0 0 30px var(--menu-shadow), 0 0 40px rgba(var(--menu-primary-rgb), 0.3);
  }
}

@keyframes menu-glitch {
  0% {
    clip-path: inset(40% 0 61% 0);
    transform: translate(-2px, 2px);
  }
  20% {
    clip-path: inset(92% 0 1% 0);
    transform: translate(1px, -1px);
  }
  40% {
    clip-path: inset(43% 0 1% 0);
    transform: translate(-1px, 2px);
  }
  60% {
    clip-path: inset(25% 0 58% 0);
    transform: translate(2px, 1px);
  }
  80% {
    clip-path: inset(54% 0 7% 0);
    transform: translate(-2px, -2px);
  }
  100% {
    clip-path: inset(58% 0 43% 0);
    transform: translate(0);
  }
}

@keyframes list-glitch {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(2px);
  }
  75% {
    transform: translateX(-1px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
