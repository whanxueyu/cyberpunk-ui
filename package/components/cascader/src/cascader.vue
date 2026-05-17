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
            >×</button>
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
      >
        <span class="clear-icon">×</span>
      </button>

      <span class="arrow" :class="{ 'is-reverse': isOpen }"></span>
    </div>

    <!-- 下拉面板 -->
    <transition name="cascader-dropdown">
      <div v-if="isOpen" class="cascader-dropdown" :style="dropdownStyle">
        <div class="cascader-panel-wrapper">
          <!-- 递归渲染选项树 -->
          <CascaderMenu
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
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch, defineComponent, h } from 'vue';

defineOptions({
  name: 'CyberCascader',
})

type OptionValue = string | number;
type ModelValue = OptionValue | OptionValue[];

interface CascaderOption {
  label?: string;
  value?: OptionValue;
  disabled?: boolean;
  children?: CascaderOption[];
  [key: string]: any;
}

interface BreadcrumbItem {
  label: string;
  options: CascaderOption[];
  value?: OptionValue;
}

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

// 递归菜单组件
const CascaderMenu = defineComponent({
  name: 'CascaderMenu',
  props: {
    options: { type: Array as () => CascaderOption[], required: true },
    selectedValues: { type: Array as () => OptionValue[], required: true },
    multiple: { type: Boolean, default: false },
    labelKey: { type: String, default: 'label' },
    valueKey: { type: String, default: 'value' },
    childrenKey: { type: String, default: 'children' },
  },
  emits: ['select'],
  setup(props, { emit }) {
    const expandedKeys = ref<Set<OptionValue>>(new Set());

    const getOptionLabel = (option: CascaderOption) => {
      return String(option[props.labelKey] ?? option.label ?? option[props.valueKey] ?? option.value ?? '');
    };

    const getOptionValue = (option: CascaderOption): OptionValue => {
      return option[props.valueKey] ?? option.value ?? '';
    };

    const hasChildren = (option: CascaderOption) => {
      const children = option[props.childrenKey] ?? option.children;
      return Array.isArray(children) && children.length > 0;
    };

    const getChildren = (option: CascaderOption): CascaderOption[] => {
      return option[props.childrenKey] ?? option.children ?? [];
    };

    const isSelected = (option: CascaderOption) => {
      const value = getOptionValue(option);
      return props.selectedValues.includes(value);
    };

    const toggleExpand = (option: CascaderOption, event: Event) => {
      event.stopPropagation();
      const value = getOptionValue(option);
      if (expandedKeys.value.has(value)) {
        expandedKeys.value.delete(value);
      } else {
        expandedKeys.value.add(value);
      }
    };

    const handleOptionClick = (option: CascaderOption) => {
      if (option.disabled) return;

      const value = getOptionValue(option);
      const children = getChildren(option);

      if (hasChildren(option)) {
        // 有子菜单，切换展开状态
        toggleExpand(option, new MouseEvent('click'));
      } else {
        // 叶子节点，选择该项
        emit('select', { option, value });
      }
    };

    return () => {
      return h('div', { class: 'cascader-menu' }, [
        ...(props.options || []).map((option) => {
          const value = getOptionValue(option);
          const isExpanded = expandedKeys.value.has(value);
          const optionChildren = getChildren(option);

          return h('div', { key: String(value), class: 'cascader-menu-item' }, [
            // 选项按钮
            h(
              'button',
              {
                class: [
                  'cascader-option',
                  { 
                    selected: isSelected(option),
                    disabled: option.disabled,
                    'has-children': hasChildren(option),
                  },
                ],
                type: 'button',
                onClick: (e: Event) => handleOptionClick(option),
              },
              [
                // 多选框
                props.multiple && h('span', { class: 'option-check' }, [
                  isSelected(option) && h('span', { class: 'check-icon' }, '✓')
                ]),
                // 标签
                h('span', { class: 'option-label' }, getOptionLabel(option)),
                // 箭头
                hasChildren(option) && h('span', { 
                  class: ['option-arrow', { 'is-expanded': isExpanded }]
                }),
              ]
            ),
            // 子菜单
            hasChildren(option) && isExpanded && h(
              'div',
              { class: 'cascader-submenu' },
              [h(CascaderMenu, {
                options: optionChildren,
                selectedValues: props.selectedValues,
                multiple: props.multiple,
                labelKey: props.labelKey,
                valueKey: props.valueKey,
                childrenKey: props.childrenKey,
                onSelect: (data: any) => emit('select', data),
              })]
            ),
          ]);
        }),
        props.options.length === 0 && h('div', { class: 'cascader-empty' }, '暂无数据'),
      ]);
    };
  },
});

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

const getOptionLabel = (option: CascaderOption) => {
  return String(option[props.labelKey] ?? option.label ?? option[props.valueKey] ?? option.value ?? '');
};

const getOptionValue = (option: CascaderOption): OptionValue => {
  return option[props.valueKey] ?? option.value ?? '';
};

const hasChildren = (option: CascaderOption) => {
  const children = option[props.childrenKey] ?? option.children;
  return Array.isArray(children) && children.length > 0;
};

const getChildren = (option: CascaderOption): CascaderOption[] => {
  return option[props.childrenKey] ?? option.children ?? [];
};

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

const isOptionSelected = (option: CascaderOption) => {
  const value = getOptionValue(option);
  if (props.multiple) {
    return selectedValues.value.includes(value);
  }
  return currentValue.value === value;
};

const setOpen = (visible: boolean) => {
  if (props.disabled || isOpen.value === visible) return;

  isOpen.value = visible;
  emit('visible-change', visible);
};

const toggleDropdown = () => {
  setOpen(!isOpen.value);
};

const handleOptionSelect = ({ option, value }: { option: CascaderOption; value: OptionValue }) => {
  if (props.disabled || option.disabled) return;

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
      padding: 0 12px;
    }
  }

  &.size-small {
    width: 200px;
    font-size: 12px;

    .cascader-control {
      min-height: 28px;
      padding: 0 8px;
    }
  }

  &.is-open {
    .cascader-control {
      border-color: var(--cascader-primary);
      box-shadow: 0 0 10px var(--cascader-shadow);
    }
  }

  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;

    .cascader-control {
      cursor: not-allowed;
    }
  }
}

.cascader-control {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 32px;
  padding: 0 10px;
  background: var(--cascader-bg);
  border: 1px solid var(--cascader-border);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(.is-disabled) {
    border-color: var(--cascader-primary);
  }

  &:focus {
    outline: none;
    border-color: var(--cascader-primary);
    box-shadow: 0 0 8px var(--cascader-shadow);
  }
}

.cascader-value {
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 0;
  overflow: hidden;
}

.cascader-tag {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  margin-right: 6px;
  background: rgba(var(--cascader-primary-rgb), 0.15);
  border: 1px solid rgba(var(--cascader-primary-rgb), 0.3);
  border-radius: 3px;
  font-size: 12px;
  white-space: nowrap;
}

.tag-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  margin-left: 4px;
  background: none;
  border: none;
  color: var(--cascader-primary);
  cursor: pointer;
  font-size: 14px;
  line-height: 1;

  &:hover {
    color: var(--cascader-secondary);
  }
}

.cascader-single {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.cascader-placeholder {
  color: var(--cascader-muted);
}

.clear-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  background: none;
  border: none;
  color: var(--cascader-muted);
  cursor: pointer;
  font-size: 16px;
  line-height: 1;

  &:hover {
    color: var(--cascader-primary);
  }
}

.clear-icon {
  display: block;
}

.arrow {
  position: relative;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid var(--cascader-primary);
  filter: drop-shadow(0 0 3px var(--cascader-primary));
  transition: transform 0.2s ease;

  &.is-reverse {
    transform: rotate(180deg);
  }
}

.cascader-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 1000;
  min-width: 260px;
  max-height: 400px;
  background: var(--cascader-panel-bg);
  border: 1px solid var(--cascader-border);
  border-radius: 6px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4), 0 0 16px var(--cascader-shadow);
  overflow-y: auto;
  backdrop-filter: blur(10px);
}

.cascader-panel-wrapper {
  padding: 6px 0;
}

.cascader-menu {
  display: flex;
  flex-direction: column;
}

.cascader-menu-item {
  position: relative;
}

.cascader-dropdown::-webkit-scrollbar {
  width: 6px;
}

.cascader-dropdown::-webkit-scrollbar-track {
  background: rgba(var(--cascader-primary-rgb), 0.05);
}

.cascader-dropdown::-webkit-scrollbar-thumb {
  background: var(--cascader-border);
  border-radius: 3px;

  &:hover {
    background: var(--cascader-primary);
  }
}

.cascader-option {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 34px;
  padding: 6px 12px;
  background: none;
  border: 1px solid transparent;
  color: var(--cascader-text);
  cursor: pointer;
  font-size: inherit;
  text-align: left;
  transition: all 0.2s ease;

  &:hover:not(.disabled) {
    background: var(--cascader-hover);
    border-color: var(--cascader-border);
  }

  &.selected {
    background: var(--cascader-selected);
    border-color: var(--cascader-primary);
  }

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &.has-children {
    .option-label {
      color: var(--cascader-primary);
    }
  }
}

.cascader-submenu {
  margin-left: 16px;
  padding-left: 8px;
  border-left: 1px solid var(--cascader-border);
}

.option-check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border: 1px solid var(--cascader-border);
  border-radius: 2px;
  flex-shrink: 0;

  .check-icon {
    color: var(--cascader-primary);
    font-size: 12px;
    font-weight: bold;
  }
}

.option-label {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.option-arrow {
  position: relative;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid var(--cascader-primary);
  filter: drop-shadow(0 0 4px var(--cascader-primary));
  margin-left: 8px;
  flex-shrink: 0;
  transition: transform 0.2s ease;

  &.is-expanded {
    transform: rotate(180deg);
  }
}

.cascader-empty {
  padding: 18px;
  color: var(--cascader-muted);
  text-align: center;
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
