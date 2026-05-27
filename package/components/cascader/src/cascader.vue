<template>
  <div
    ref="cascaderRef"
    class="cp-cyber-cascader"
    :class="[
      `theme-${theme}`,
      `size-${size}`,
      {
        'is-open': isOpen,
        'is-disabled': disabled,
        'is-multiple': multiple,
      },
    ]"
  >
    <!-- 触发器 -->
    <div
      class="cascader-control"
      tabindex="0"
      role="combobox"
      :aria-expanded="isOpen"
      :aria-disabled="disabled"
      @click="toggleDropdown"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown="handleKeydown"
    >
      <div class="cascader-value">
        <template v-if="multiple && selectedValues.length">
          <span
            v-for="(value, index) in selectedValues"
            :key="index"
            class="cascader-tag"
          >
            {{ getDisplayValue(value) }}
            <button
              class="tag-close"
              type="button"
              :aria-label="`移除 ${getDisplayValue(value)}`"
              @click.stop="removeValue(value)"
            ></button>
          </span>
        </template>

        <span v-else-if="!multiple && currentValue" class="cascader-single">
          {{ getDisplayValue(currentValue) }}
        </span>

        <span v-else class="cascader-placeholder">
          {{ placeholder }}
        </span>
      </div>

      <button
        v-if="clearable && hasValue && !disabled"
        class="clear-button"
        type="button"
        aria-label="清空"
        @click.stop="clearSelection"
      ></button>

      <span class="cascader-arrow"></span>
    </div>

    <!-- 下拉面板 -->
    <transition name="cascader-dropdown">
      <div v-if="isOpen" class="cascader-dropdown" :style="dropdownStyle">
        <div class="cascader-options">
          <CascaderOptionTree
            :options="props.options"
            :selected-values="multiple ? selectedValues : [currentValue]"
            :multiple="multiple"
            :label-key="labelKey"
            :value-key="valueKey"
            :children-key="childrenKey"
            @select="handleOptionSelect"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import CascaderOptionTree from './option-tree.vue';
import type { CascaderOption, OptionValue } from './instance'

defineOptions({
  name: 'CyberCascader',
})

type ModelValue = OptionValue | OptionValue[]

const props = withDefaults(defineProps<{
  modelValue?: ModelValue;
  options?: CascaderOption[];
  placeholder?: string;
  noDataText?: string;
  disabled?: boolean;
  clearable?: boolean;
  multiple?: boolean;
  showAllLevels?: boolean;
  filterable?: boolean;
  size?: 'large' | 'default' | 'small';
  theme?: 'neon' | 'terminal' | 'matrix' | 'hologram';
  labelKey?: string;
  valueKey?: string;
  childrenKey?: string;
}>(), {
  modelValue: '',
  options: () => [],
  placeholder: '请选择',
  noDataText: '暂无数据',
  disabled: false,
  clearable: true,
  multiple: false,
  showAllLevels: true,
  filterable: false,
  size: 'default',
  theme: 'neon',
  labelKey: 'label',
  valueKey: 'value',
  childrenKey: 'children',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: ModelValue): void;
  (e: 'change', value: ModelValue): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'visible-change', visible: boolean): void;
  (e: 'clear'): void;
}>()

const cascaderRef = ref<HTMLElement>();
const isOpen = ref(false);
const currentValue = ref<OptionValue>('');
const selectedValues = ref<OptionValue[]>([]);

const hasValue = computed(() => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.length > 0;
  }
  return props.modelValue !== '' && props.modelValue !== null && props.modelValue !== undefined;
});

// 获取显示值（支持显示完整路径）
const getDisplayValue = (value: OptionValue): string => {
  if (!props.showAllLevels) {
    // 只显示最后一级
    const option = findOptionByValue(props.options, value);
    return option ? getOptionLabel(option) : String(value);
  }

  // 显示完整路径
  const path = findOptionPath(props.options, value);
  return path.map(opt => getOptionLabel(opt)).join(' / ');
};

// 根据值查找选项
const findOptionByValue = (options: CascaderOption[], value: OptionValue): CascaderOption | null => {
  for (const option of options) {
    if (getOptionValue(option) === value) {
      return option;
    }
    const children = getChildren(option);
    if (children.length) {
      const found = findOptionByValue(children, value);
      if (found) return found;
    }
  }
  return null;
};

// 查找选项的完整路径
const findOptionPath = (options: CascaderOption[], value: OptionValue): CascaderOption[] => {
  for (const option of options) {
    if (getOptionValue(option) === value) {
      return [option];
    }
    const children = getChildren(option);
    if (children.length) {
      const path = findOptionPath(children, value);
      if (path.length) {
        return [option, ...path];
      }
    }
  }
  return [];
};

const getOptionLabel = (option: CascaderOption) => {
  return String(option[props.labelKey] ?? option.label ?? option[props.valueKey] ?? option.value ?? '');
};

const getOptionValue = (option: CascaderOption): OptionValue => {
  return option[props.valueKey] ?? option.value ?? '';
};

const getChildren = (option: CascaderOption): CascaderOption[] => {
  return option[props.childrenKey] ?? option.children ?? [];
};

const setOpen = (visible: boolean) => {
  if (props.disabled || isOpen.value === visible) return;

  isOpen.value = visible;
  emit('visible-change', visible);
};

const toggleDropdown = () => {
  setOpen(!isOpen.value);
};

const handleOptionSelect = ({ value }: { value: OptionValue }) => {
  if (props.disabled) return;

  if (props.multiple) {
    const index = selectedValues.value.indexOf(value);
    if (index > -1) {
      selectedValues.value.splice(index, 1);
    } else {
      selectedValues.value.push(value);
    }
    emit('update:modelValue', [...selectedValues.value]);
    emit('change', [...selectedValues.value]);
  } else {
    currentValue.value = value;
    emit('update:modelValue', value);
    emit('change', value);
    setOpen(false);
  }
};

const removeValue = (value: OptionValue) => {
  if (!props.multiple) return;
  selectedValues.value = selectedValues.value.filter(v => v !== value);
  emit('update:modelValue', [...selectedValues.value]);
  emit('change', [...selectedValues.value]);
};

const clearSelection = () => {
  if (props.multiple) {
    selectedValues.value = [];
    emit('update:modelValue', []);
  } else {
    currentValue.value = '';
    emit('update:modelValue', '');
  }
  emit('change', props.multiple ? [] : '');
  emit('clear');
};

const handleFocus = (event: FocusEvent) => {
  if (props.disabled) return;
  emit('focus', event);
};

const handleBlur = (event: FocusEvent) => {
  emit('blur', event);
};

const handleKeydown = (event: KeyboardEvent) => {
  if (props.disabled) return;

  if (event.key === 'Enter' || event.key === ' ') {
    if (!isOpen.value) {
      event.preventDefault();
      setOpen(true);
    }
  }

  if (event.key === 'Escape') {
    setOpen(false);
  }
};

const handleClickOutside = (event: MouseEvent) => {
  if (!cascaderRef.value?.contains(event.target as Node)) {
    setOpen(false);
  }
};

const dropdownStyle = computed(() => {
  return {
    width: `${cascaderRef.value?.offsetWidth || 260}px`,
  };
});

// 初始化选中值
watch(() => props.modelValue, (newVal) => {
  if (props.multiple) {
    selectedValues.value = Array.isArray(newVal) ? [...newVal] : [];
  } else {
    currentValue.value = newVal as OptionValue;
  }
}, { immediate: true });

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style lang="scss" scoped>
.cp-cyber-cascader {
  position: relative;
  width: 260px;
  color: var(--cascader-text);
  font-size: 14px;

  --cascader-primary: #00e6f6;
  --cascader-primary-rgb: 0, 230, 246;
  --cascader-secondary: #ff2f70;
  --cascader-accent: #47f2c6;
  --cascader-text: rgba(245, 252, 255, 0.95);
  --cascader-muted: rgba(206, 232, 245, 0.58);
  --cascader-bg: rgba(8, 16, 28, 0.88);
  --cascader-panel-bg: rgba(7, 13, 24, 0.96);
  --cascader-border: rgba(0, 230, 246, 0.38);
  --cascader-hover: rgba(0, 230, 246, 0.14);
  --cascader-selected: rgba(0, 230, 246, 0.22);
  --cascader-shadow: rgba(0, 230, 246, 0.3);

  &.theme-terminal {
    --cascader-primary: #47f26b;
    --cascader-primary-rgb: 71, 242, 107;
    --cascader-secondary: #ff5252;
    --cascader-accent: #c2f132;
    --cascader-border: rgba(71, 242, 107, 0.42);
    --cascader-hover: rgba(71, 242, 107, 0.14);
    --cascader-selected: rgba(71, 242, 107, 0.22);
    --cascader-shadow: rgba(71, 242, 107, 0.25);
  }

  &.theme-matrix {
    --cascader-primary: #00ff41;
    --cascader-primary-rgb: 0, 255, 65;
    --cascader-secondary: #f7da66;
    --cascader-accent: #00ff41;
    --cascader-border: rgba(0, 255, 65, 0.42);
    --cascader-hover: rgba(0, 255, 65, 0.14);
    --cascader-selected: rgba(0, 255, 65, 0.22);
    --cascader-shadow: rgba(0, 255, 65, 0.24);
  }

  &.theme-hologram {
    --cascader-primary: #b78cff;
    --cascader-primary-rgb: 183, 140, 255;
    --cascader-secondary: #ff4fd8;
    --cascader-accent: #71f6ff;
    --cascader-border: rgba(183, 140, 255, 0.44);
    --cascader-hover: rgba(183, 140, 255, 0.16);
    --cascader-selected: rgba(183, 140, 255, 0.24);
    --cascader-shadow: rgba(183, 140, 255, 0.28);
  }

  &.size-large {
    width: 320px;
    font-size: 16px;

    .cascader-control {
      min-height: 36px;
      padding: 8px 42px 8px 14px;
    }
  }

  &.size-small {
    width: 220px;
    font-size: 12px;

    .cascader-control {
      min-height: 22px;
      padding: 5px 36px 5px 10px;
    }
  }

  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.55;

    .cascader-control {
      cursor: not-allowed;
    }
  }

  &.is-open {
    .cascader-control {
      border-color: var(--cascader-primary);
      box-shadow: 0 0 18px var(--cascader-shadow), inset 0 0 18px rgba(255, 255, 255, 0.03);
    }

    .cascader-arrow {
      transform: translateY(-50%) rotate(180deg);
    }
  }
}

.cascader-control {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 28px;
  padding: 6px 40px 6px 12px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--cascader-bg), rgba(255, 255, 255, 0.03));
  border: 1px solid var(--cascader-border);
  border-radius: 6px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.025);
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.08), transparent);
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 0.2s ease, transform 0.35s ease;
  }

  &:hover,
  &:focus {
    border-color: var(--cascader-primary);
    box-shadow: 0 0 14px var(--cascader-shadow);

    &::before {
      opacity: 1;
      transform: translateX(100%);
    }
  }
}

.cascader-value {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  gap: 6px;
  flex-wrap: wrap;
}

.cascader-single,
.cascader-placeholder {
  display: block;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cascader-placeholder {
  color: var(--cascader-muted);
}

.cascader-tag {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  gap: 6px;
  padding: 3px 7px;
  color: var(--cascader-text);
  background: var(--cascader-selected);
  border: 1px solid var(--cascader-border);
  border-radius: 4px;
  line-height: 1.2;
}

.tag-close,
.clear-button {
  position: relative;
  width: 14px;
  height: 14px;
  padding: 0;
  flex: 0 0 14px;
  background: transparent;
  border: 0;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 2px;
    width: 10px;
    height: 1px;
    background: currentColor;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
}

.tag-close {
  color: var(--cascader-muted);

  &:hover {
    color: var(--cascader-secondary);
  }
}

.clear-button {
  position: absolute;
  right: 28px;
  top: 50%;
  color: var(--cascader-muted);
  transform: translateY(-50%);

  &:hover {
    color: var(--cascader-secondary);
  }
}

.cascader-arrow {
  position: absolute;
  right: 13px;
  top: 50%;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid var(--cascader-primary);
  filter: drop-shadow(0 0 6px var(--cascader-primary));
  transform: translateY(-50%);
  transition: transform 0.2s ease;
}

.cascader-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 80;
  width: 100%;
  max-height: 280px;
  overflow: hidden;
  background: var(--cascader-panel-bg);
  border: 1px solid var(--cascader-border);
  border-radius: 6px;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.38), 0 0 24px var(--cascader-shadow);
}

.cascader-options {
  max-height: 230px;
  overflow-y: auto;
  padding: 6px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(var(--cascader-primary-rgb), 0.05);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--cascader-border);
    border-radius: 3px;

    &:hover {
      background: var(--cascader-primary);
    }
  }
}

.cascader-dropdown-enter-active,
.cascader-dropdown-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.cascader-dropdown-enter-from,
.cascader-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
