<template>
  <div
    :class="[
      'cp-cyber-menu',
      `cp-cyber-menu--${direction}`,
      `cp-cyber-menu--${theme}`,
      {
        [`cp-cyber-menu--${effect}`]: effect !== 'none',
      }
    ]"
  >
    <ul class="cp-cyber-menu-list">
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
        @expand="handleExpand"
        @collapse="handleCollapse"
      />
    </ul>

    <!-- 扫描线特效 -->
    <div v-if="effect === 'scanline'" class="cp-cyber-menu-scanline"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import CyberMenuItem from './menu-item.vue'
import type { MenuItem, MenuDirection, MenuTheme, MenuEffect } from './instance'

defineOptions({ name: 'CyberMenu' })

const props = withDefaults(defineProps<{
  modelValue?: string | number
  items?: MenuItem[]
  direction?: MenuDirection
  theme?: MenuTheme
  effect?: MenuEffect
  expandedValues?: (string | number)[]
}>(), {
  modelValue: '',
  items: () => [],
  direction: 'vertical',
  theme: 'neon',
  effect: 'none',
  expandedValues: () => [],
})

const emit = defineEmits<{
  (e: 'update:modelValue', v: string | number): void
  (e: 'change', v: string | number): void
  (e: 'select', item: MenuItem): void
  (e: 'update:expandedValues', v: (string | number)[]): void
}>()

const activeValue = ref<string | number>(props.modelValue)
const expandedValues = ref<(string | number)[]>([...props.expandedValues])
const menuItems = ref<MenuItem[]>([...props.items])

const handleSelect = (item: MenuItem) => {
  activeValue.value = item.value
  emit('update:modelValue', item.value)
  emit('change', item.value)
  emit('select', item)
}

const handleExpand = (value: string | number) => {
  if (props.direction === 'horizontal') {
    expandedValues.value = [value]
  } else {
    if (!expandedValues.value.includes(value)) {
      expandedValues.value = [...expandedValues.value, value]
    }
  }
  emit('update:expandedValues', [...expandedValues.value])
}

const handleCollapse = (value: string | number) => {
  expandedValues.value = expandedValues.value.filter(v => v !== value)
  emit('update:expandedValues', [...expandedValues.value])
}

const handleToggleExpand = (value: string | number) => {
  const arr = [...expandedValues.value]
  const i = arr.indexOf(value)
  if (i > -1) {
    arr.splice(i, 1)
  } else {
    if (props.direction === 'horizontal') arr.length = 0
    arr.push(value)
  }
  expandedValues.value = arr
  emit('update:expandedValues', [...arr])
}

watch(() => props.modelValue, v => { activeValue.value = v })
watch(() => props.items, v => { menuItems.value = [...v] }, { deep: true, immediate: true })
watch(() => props.expandedValues, v => { expandedValues.value = [...v] }, { deep: true, immediate: true })
</script>

<style lang="scss" scoped>
/* ========== 根容器 ========== */
.cp-cyber-menu {
  position: relative;
  font-family: 'Courier New', 'Consolas', monospace;

  /* 每个主题的 CSS 变量由 :deep() 注入到子组件可见 */
  --menu-bg: rgba(8, 16, 28, 0.95);
  --menu-hover: rgba(0, 230, 246, 0.12);
  --menu-active: rgba(0, 230, 246, 0.22);
  --menu-text: #e0f7ff;
  --menu-muted: rgba(180, 220, 255, 0.5);
  --menu-primary: #00e6f6;
  --menu-primary2: #00c8d8;
  --menu-border: rgba(0, 230, 246, 0.2);
}

/* ========== 菜单列表 ========== */
.cp-cyber-menu-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

/* ========== 方向：垂直 ========== */
.cp-cyber-menu--vertical {
  min-width: 200px;
  background: var(--menu-bg);
  border: 1px solid var(--menu-border);

  .cp-cyber-menu-list {
    display: flex;
    flex-direction: column;
    padding: 4px 0;
  }
}

/* ========== 方向：水平 ========== */
.cp-cyber-menu--horizontal {
  display: inline-flex;
  background: var(--menu-bg);
  border: 1px solid var(--menu-border);

  .cp-cyber-menu-list {
    display: flex;
    flex-direction: row;
  }
}

/* ========== 主题：neon（默认） ========== */
.cp-cyber-menu--neon {
  --menu-bg: rgba(8, 16, 28, 0.95);
  --menu-hover: rgba(0, 230, 246, 0.12);
  --menu-active: rgba(0, 230, 246, 0.22);
  --menu-text: #e0f7ff;
  --menu-muted: rgba(180, 220, 255, 0.5);
  --menu-primary: #00e6f6;
  --menu-primary2: #00c8d8;
  --menu-border: rgba(0, 230, 246, 0.25);
}

/* ========== 主题：terminal ========== */
.cp-cyber-menu--terminal {
  --menu-bg: #0a140a;
  --menu-hover: rgba(71, 242, 107, 0.1);
  --menu-active: rgba(71, 242, 107, 0.2);
  --menu-text: #d0ffd0;
  --menu-muted: rgba(100, 200, 100, 0.5);
  --menu-primary: #47f26b;
  --menu-primary2: #34d055;
  --menu-border: rgba(71, 242, 107, 0.2);
}

/* ========== 主题：matrix ========== */
.cp-cyber-menu--matrix {
  --menu-bg: #000a00;
  --menu-hover: rgba(0, 255, 65, 0.1);
  --menu-active: rgba(0, 255, 65, 0.18);
  --menu-text: #00ff41;
  --menu-muted: rgba(0, 200, 50, 0.5);
  --menu-primary: #00ff41;
  --menu-primary2: #00cc33;
  --menu-border: rgba(0, 255, 65, 0.2);
}

/* ========== 主题：hologram ========== */
.cp-cyber-menu--hologram {
  --menu-bg: rgba(10, 0, 20, 0.92);
  --menu-hover: rgba(255, 0, 255, 0.1);
  --menu-active: rgba(255, 0, 255, 0.18);
  --menu-text: #f0e0ff;
  --menu-muted: rgba(200, 160, 220, 0.5);
  --menu-primary: #ff40ff;
  --menu-primary2: #d020d0;
  --menu-border: rgba(255, 0, 255, 0.2);
}

/* ========================================
   特效：glitch — 故障抖动
   ======================================== */
.cp-cyber-menu--glitch {
  animation: menuGlitch 4s infinite steps(1);
}

@keyframes menuGlitch {
  0%, 90%, 100% { transform: translateX(0); }
  91% { transform: translateX(-2px); }
  92% { transform: translateX(2px); }
  93% { transform: translateX(-1px); }
  94% { transform: translateX(1px); }
  95% { transform: translateX(0); }
}

/* ========================================
   特效：scanline — 扫描线
   ======================================== */
.cp-cyber-menu-scanline {
  position: absolute;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent,
    var(--menu-primary),
    var(--menu-primary2),
    var(--menu-primary),
    transparent
  );
  z-index: 10;
  pointer-events: none;
  opacity: 0.7;
  animation: menuScanline 2.5s linear infinite;
}

@keyframes menuScanline {
  0% { top: 0%; opacity: 0; }
  5% { opacity: 0.7; }
  95% { opacity: 0.7; }
  100% { top: 100%; opacity: 0; }
}

/* ========================================
   特效：pulse — 脉冲边框
   ======================================== */
.cp-cyber-menu--pulse {
  animation: menuPulse 2s ease-in-out infinite;
}

@keyframes menuPulse {
  0%, 100% {
    box-shadow:
      inset 0 0 6px rgba(0, 230, 246, 0.1),
      0 0 6px rgba(0, 230, 246, 0.05);
  }
  50% {
    box-shadow:
      inset 0 0 16px rgba(0, 230, 246, 0.2),
      0 0 16px rgba(0, 230, 246, 0.12);
  }
}

/* ========================================
   亮色模式
   ======================================== */
:root:not(.dark) .cp-cyber-menu--neon {
  --menu-bg: rgba(240, 248, 255, 0.95);
  --menu-hover: rgba(0, 180, 210, 0.1);
  --menu-active: rgba(0, 180, 210, 0.18);
  --menu-text: #0a2a3a;
  --menu-muted: rgba(0, 80, 120, 0.5);
  --menu-primary: #0088aa;
  --menu-primary2: #006688;
  --menu-border: rgba(0, 160, 200, 0.25);
}

:root:not(.dark) .cp-cyber-menu--terminal {
  --menu-bg: #f0faf0;
  --menu-hover: rgba(40, 180, 80, 0.1);
  --menu-active: rgba(40, 180, 80, 0.18);
  --menu-text: #1a3a1a;
  --menu-muted: rgba(40, 120, 40, 0.5);
  --menu-primary: #2a8a3a;
  --menu-primary2: #1a6a2a;
  --menu-border: rgba(40, 180, 80, 0.25);
}

:root:not(.dark) .cp-cyber-menu--matrix {
  --menu-bg: #f5fff5;
  --menu-hover: rgba(0, 200, 40, 0.1);
  --menu-active: rgba(0, 200, 40, 0.18);
  --menu-text: #004400;
  --menu-muted: rgba(0, 120, 0, 0.5);
  --menu-primary: #008800;
  --menu-primary2: #006600;
  --menu-border: rgba(0, 200, 40, 0.25);
}

:root:not(.dark) .cp-cyber-menu--hologram {
  --menu-bg: rgba(250, 245, 255, 0.95);
  --menu-hover: rgba(180, 0, 200, 0.08);
  --menu-active: rgba(180, 0, 200, 0.15);
  --menu-text: #2a1a3a;
  --menu-muted: rgba(120, 40, 140, 0.5);
  --menu-primary: #8822aa;
  --menu-primary2: #661888;
  --menu-border: rgba(160, 40, 200, 0.25);
}

:root:not(.dark) .cp-cyber-menu--pulse {
  animation-name: menuPulseLight;
}

@keyframes menuPulseLight {
  0%, 100% {
    box-shadow:
      inset 0 0 6px rgba(0, 0, 0, 0.04),
      0 0 6px rgba(0, 0, 0, 0.03);
  }
  50% {
    box-shadow:
      inset 0 0 14px rgba(0, 0, 0, 0.08),
      0 0 14px rgba(0, 0, 0, 0.06);
  }
}
</style>
