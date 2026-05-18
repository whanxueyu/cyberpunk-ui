<template>
  <div
    :class="[
      'cp-cyber-menu',
      `direction-${direction}`,
      `theme-${theme}`
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
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import CyberMenuItem from './menu-item.vue';

defineOptions({ name: 'CyberMenu' });

type MenuDirection = 'horizontal' | 'vertical';
type MenuTheme = 'neon' | 'terminal' | 'matrix' | 'hologram';

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
  expandedValues?: (string | number)[];
}>(), {
  modelValue: '',
  items: () => [],
  direction: 'vertical',
  theme: 'neon',
  expandedValues: () => [],
});

const emit = defineEmits<{
  (e: 'update:modelValue', v: string | number): void;
  (e: 'change', v: string | number): void;
  (e: 'select', item: MenuItem): void;
  (e: 'update:expandedValues', v: (string | number)[]): void;
}>();

const activeValue = ref(props.modelValue);
const expandedValues = ref([...props.expandedValues]);
const menuItems = ref([...props.items]);

const handleSelect = (item: MenuItem) => {
  activeValue.value = item.value;
  emit('update:modelValue', item.value);
  emit('change', item.value);
  emit('select', item);
};

const handleToggleExpand = (value: string | number) => {
  const arr = [...expandedValues.value];
  const i = arr.indexOf(value);
  if (i > -1) arr.splice(i, 1);
  else {
    if (props.direction === 'horizontal') arr.length = 0;
    arr.push(value);
  }
  expandedValues.value = arr;
  emit('update:expandedValues', arr);
};

watch(() => props.modelValue, v => activeValue.value = v, { immediate: true });
watch(() => props.items, v => menuItems.value = [...v], { deep: true, immediate: true });
watch(() => props.expandedValues, v => expandedValues.value = [...v], { deep: true, immediate: true });

const themeStyles = computed(() => {
  const t = {
    neon: { primary: '#00e6f6', bg: 'rgba(8,16,28,0.95)', hover: 'rgba(0,230,246,0.15)', active: 'rgba(0,230,246,0.25)', text: '#fff', muted: '#aaa' },
    terminal: { primary: '#47f26b', bg: '#0a140a', hover: 'rgba(71,242,107,0.15)', active: 'rgba(71,242,107,0.25)', text: '#fff', muted: '#aaa' },
    matrix: { primary: '#00ff41', bg: '#000000', hover: 'rgba(0,255,65,0.15)', active: 'rgba(0,255,65,0.25)', text: '#00ff41', muted: '#00aa2a' },
    hologram: { primary: '#ff00ff', bg: 'rgba(10,0,20,0.9)', hover: 'rgba(255,0,255,0.15)', active: 'rgba(255,0,255,0.25)', text: '#ffffff', muted: '#cccccc' }
  };
  return t[props.theme];
});
</script>

<style lang="scss" scoped>
.cp-cyber-menu {
  font-family: 'Inter', sans-serif;
  --menu-primary: v-bind('themeStyles.primary');
  --menu-bg: v-bind('themeStyles.bg');
  --menu-hover: v-bind('themeStyles.hover');
  --menu-active: v-bind('themeStyles.active');
  --menu-text: v-bind('themeStyles.text');
  --menu-muted: v-bind('themeStyles.muted');
}

/* 横向菜单：不被撑开 */
.direction-horizontal {
  display: inline-flex;
  background: var(--menu-bg);
  border: 1px solid rgba(0,230,246,0.2);
  .menu-list {
    display: flex;
    flex-direction: row;
    margin:0; padding:0;
    list-style: none;
  }
}

.direction-vertical {
  background: var(--menu-bg);
  border: 1px solid rgba(0,230,246,0.2);
  min-width: 200px;
  .menu-list {
    display: flex;
    flex-direction: column;
    margin:0; padding:0;
    list-style: none;
  }
}
</style>