<template>
  <div
    ref="selectRef"
    class="cp-cyber-select"
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
    <div
      class="select-control"
      tabindex="0"
      role="combobox"
      :aria-expanded="isOpen"
      :aria-disabled="disabled"
      @click="toggleDropdown"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown="handleKeydown"
    >
      <div class="select-value">
        <template v-if="multiple && selectedOptions.length">
          <span
            v-for="option in selectedOptions"
            :key="String(getOptionValue(option))"
            class="select-tag"
            @click.stop
          >
            {{ getOptionLabel(option) }}
            <button
              class="tag-close"
              type="button"
              :aria-label="`Remove ${getOptionLabel(option)}`"
              @click.stop="removeOption(option)"
            ></button>
          </span>
        </template>

        <span
          v-else-if="!multiple && selectedOptions.length"
          class="select-single"
        >
          {{ getOptionLabel(selectedOptions[0]) }}
        </span>

        <span v-else class="select-placeholder">
          {{ placeholder }}
        </span>
      </div>

      <button
        v-if="clearable && hasValue && !disabled"
        class="clear-button"
        type="button"
        aria-label="Clear selected value"
        @click.stop="clearSelection"
      ></button>

      <span class="select-arrow"></span>
    </div>

    <transition name="select-dropdown">
      <div v-if="isOpen" class="select-dropdown">
        <div v-if="filterable" class="select-search">
          <input
            ref="searchInputRef"
            v-model="searchQuery"
            type="text"
            :placeholder="searchPlaceholder"
            @click.stop
            @keydown="handleKeydown"
          />
        </div>

        <div v-if="filteredGroups.length" class="select-options">
          <template
            v-for="group in filteredGroups"
            :key="group.key"
          >
            <div v-if="group.label" class="select-group-label">
              {{ group.label }}
            </div>

            <!-- 渲染选项 -->
            <template v-for="option in group.options">
              <!-- 分隔线 -->
              <div v-if="option.divider" class="select-divider" :key="`divider-${option.key || Math.random()}`" />

              <!-- 普通选项 -->
              <button
                v-else
                :key="`${group.key}-${String(getOptionValue(option))}`"
                class="select-option"
                :class="{
                  selected: isSelected(option),
                  disabled: option.disabled,
                }"
                type="button"
                :disabled="option.disabled"
                @click.stop="selectOption(option)"
              >
                <span v-if="shouldShowCheck" class="option-check"></span>
                <span class="option-icon" v-if="option.icon">
                  <component :is="option.icon" />
                </span>
                <span class="option-label">{{ getOptionLabel(option) }}</span>
                <span v-if="option.shortcut" class="option-shortcut">{{ option.shortcut }}</span>
              </button>
            </template>
          </template>
        </div>

        <div v-else class="select-empty">
          {{ noDataText }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

defineOptions({
  name: 'CyberSelect',
})

type OptionValue = string | number | boolean | null;
type ModelValue = OptionValue | OptionValue[];

interface SelectOption {
  label?: string;
  value?: OptionValue;
  disabled?: boolean;
  options?: SelectOption[]; // 分组选项
  icon?: any; // 图标组件
  shortcut?: string; // 快捷键提示
  divider?: boolean; // 分隔线
  key?: string; // 唯一标识
  [key: string]: any;
}

interface OptionGroup {
  key: string;
  label: string;
  options: SelectOption[];
}

const props = withDefaults(defineProps<{
  modelValue?: ModelValue;
  options?: SelectOption[];
  placeholder?: string;
  searchPlaceholder?: string;
  noDataText?: string;
  disabled?: boolean;
  clearable?: boolean;
  filterable?: boolean;
  multiple?: boolean;
  showCheck?: boolean; // 是否显示勾选框
  size?: 'large' | 'default' | 'small';
  theme?: 'neon' | 'terminal' | 'matrix' | 'hologram';
  labelKey?: string;
  valueKey?: string;
}>(), {
  modelValue: '',
  options: () => [],
  placeholder: '请选择',
  searchPlaceholder: '搜索选项',
  noDataText: '暂无数据',
  disabled: false,
  clearable: true,
  filterable: false,
  multiple: false,
  showCheck: undefined, // 默认 undefined，由组件内部决定
  size: 'default',
  theme: 'neon',
  labelKey: 'label',
  valueKey: 'value',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: ModelValue): void;
  (e: 'change', value: ModelValue, option?: SelectOption | SelectOption[]): void;
  (e: 'focus', event: FocusEvent): void;
  (e: 'blur', event: FocusEvent): void;
  (e: 'visible-change', visible: boolean): void;
  (e: 'clear'): void;
}>()

const selectRef = ref<HTMLElement>();
const searchInputRef = ref<HTMLInputElement>();
const isOpen = ref(false);
const searchQuery = ref('');

// 是否显示勾选框：默认多选时显示，单选时不显示，可通过 showCheck 属性覆盖
const shouldShowCheck = computed(() => {
  if (props.showCheck !== undefined) {
    return props.showCheck;
  }
  return props.multiple;
});

const normalizedGroups = computed<OptionGroup[]>(() => {
  const groups: OptionGroup[] = [];
  const normalOptions: SelectOption[] = [];

  props.options.forEach((item, index) => {
    if (Array.isArray(item.options)) {
      groups.push({
        key: `group-${index}`,
        label: getOptionLabel(item),
        options: item.options,
      });
    } else {
      normalOptions.push(item);
    }
  });

  if (normalOptions.length) {
    groups.unshift({
      key: 'default',
      label: '',
      options: normalOptions,
    });
  }

  return groups;
});

const flatOptions = computed(() => {
  return normalizedGroups.value.flatMap(group => group.options);
});

const filteredGroups = computed(() => {
  const keyword = searchQuery.value.trim().toLowerCase();

  if (!keyword) {
    return normalizedGroups.value;
  }

  return normalizedGroups.value
    .map(group => ({
      ...group,
      options: group.options.filter(option => {
        return getOptionLabel(option).toLowerCase().includes(keyword);
      }),
    }))
    .filter(group => group.options.length);
});

const selectedOptions = computed(() => {
  const values: OptionValue[] = props.multiple
    ? Array.isArray(props.modelValue) ? props.modelValue : []
    : Array.isArray(props.modelValue) ? [] : [props.modelValue ?? null];

  return flatOptions.value.filter(option => {
    return values.some(value => isSameValue(value, getOptionValue(option)));
  });
});

const hasValue = computed(() => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.length > 0;
  }

  return props.modelValue !== '' && props.modelValue !== null && props.modelValue !== undefined;
});

const getOptionLabel = (option: SelectOption) => {
  const label = option[props.labelKey] ?? option.label ?? option[props.valueKey] ?? option.value ?? '';
  return String(label);
};

const getOptionValue = (option: SelectOption): OptionValue => {
  const value = option[props.valueKey] ?? option.value;
  return value ?? null;
};

const isSameValue = (left: OptionValue | undefined, right: OptionValue | undefined) => {
  return left === right;
};

const isSelected = (option: SelectOption) => {
  const value = getOptionValue(option);

  if (props.multiple) {
    const values = Array.isArray(props.modelValue) ? props.modelValue : [];
    return values.some(item => isSameValue(item, value));
  }

  return isSameValue(props.modelValue as OptionValue, value);
};

const setOpen = (visible: boolean) => {
  if (props.disabled || isOpen.value === visible) return;

  isOpen.value = visible;
  emit('visible-change', visible);

  if (visible && props.filterable) {
    nextTick(() => searchInputRef.value?.focus());
  }
};

const toggleDropdown = () => {
  setOpen(!isOpen.value);
};

const selectOption = (option: SelectOption) => {
  if (props.disabled || option.disabled) return;

  const value = getOptionValue(option);

  if (props.multiple) {
    const currentValue = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
    const valueIndex = currentValue.findIndex(item => isSameValue(item, value));

    if (valueIndex > -1) {
      currentValue.splice(valueIndex, 1);
    } else {
      currentValue.push(value);
    }

    const currentOptions = flatOptions.value.filter(item => {
      return currentValue.some(selected => isSameValue(selected, getOptionValue(item)));
    });

    emit('update:modelValue', currentValue);
    emit('change', currentValue, currentOptions);
    return;
  }

  emit('update:modelValue', value);
  emit('change', value, option);
  setOpen(false);
};

const removeOption = (option: SelectOption) => {
  if (!props.multiple || props.disabled) return;

  const value = getOptionValue(option);
  const currentValue = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
  const nextValue = currentValue.filter(item => !isSameValue(item, value));
  const nextOptions = flatOptions.value.filter(item => {
    return nextValue.some(selected => isSameValue(selected, getOptionValue(item)));
  });

  emit('update:modelValue', nextValue);
  emit('change', nextValue, nextOptions);
};

const clearSelection = () => {
  const value = props.multiple ? [] : '';
  emit('update:modelValue', value);
  emit('change', value, props.multiple ? [] : undefined);
  emit('clear');
  searchQuery.value = '';
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
  if (!selectRef.value?.contains(event.target as Node)) {
    setOpen(false);
  }
};

watch(isOpen, visible => {
  if (!visible) {
    searchQuery.value = '';
  }
});

watch(() => props.multiple, multiple => {
  if (multiple && !Array.isArray(props.modelValue)) {
    emit('update:modelValue', []);
  }
});

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style lang="scss" scoped>
.cp-cyber-select {
  position: relative;
  width: 260px;
  color: var(--select-text);
  font-size: 14px;

  --select-primary: #00e6f6;
  --select-primary-rgb: 0, 230, 246;
  --select-secondary: #ff2f70;
  --select-accent: #47f2c6;
  --select-text: rgba(245, 252, 255, 0.95);
  --select-muted: rgba(206, 232, 245, 0.58);
  --select-bg: rgba(8, 16, 28, 0.88);
  --select-panel-bg: rgba(7, 13, 24, 0.96);
  --select-border: rgba(0, 230, 246, 0.38);
  --select-hover: rgba(0, 230, 246, 0.14);
  --select-selected: rgba(0, 230, 246, 0.22);
  --select-shadow: rgba(0, 230, 246, 0.3);

  &.theme-terminal {
    --select-primary: #47f26b;
    --select-primary-rgb: 71, 242, 107;
    --select-secondary: #ff5252;
    --select-accent: #c2f132;
    --select-border: rgba(71, 242, 107, 0.42);
    --select-hover: rgba(71, 242, 107, 0.14);
    --select-selected: rgba(71, 242, 107, 0.22);
    --select-shadow: rgba(71, 242, 107, 0.25);
  }

  &.theme-matrix {
    --select-primary: #00ff41;
    --select-primary-rgb: 0, 255, 65;
    --select-secondary: #f7da66;
    --select-accent: #00ff41;
    --select-border: rgba(0, 255, 65, 0.42);
    --select-hover: rgba(0, 255, 65, 0.14);
    --select-selected: rgba(0, 255, 65, 0.22);
    --select-shadow: rgba(0, 255, 65, 0.24);
  }

  &.theme-hologram {
    --select-primary: #b78cff;
    --select-primary-rgb: 183, 140, 255;
    --select-secondary: #ff4fd8;
    --select-accent: #71f6ff;
    --select-border: rgba(183, 140, 255, 0.44);
    --select-hover: rgba(183, 140, 255, 0.16);
    --select-selected: rgba(183, 140, 255, 0.24);
    --select-shadow: rgba(183, 140, 255, 0.28);
  }

  &.size-large {
    width: 320px;
    font-size: 16px;

    .select-control {
      min-height: 36px;
      padding: 8px 42px 8px 14px;
    }
  }

  &.size-small {
    width: 220px;
    font-size: 12px;

    .select-control {
      min-height: 22px;
      padding: 5px 36px 5px 10px;
    }
  }

  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.55;

    .select-control {
      cursor: not-allowed;
    }
  }

  &.is-open {
    .select-control {
      border-color: var(--select-primary);
      box-shadow: 0 0 18px var(--select-shadow), inset 0 0 18px rgba(255, 255, 255, 0.03);
    }

    .select-arrow {
      transform: translateY(-50%) rotate(180deg);
    }
  }
}

.select-control {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 28px;
  padding: 6px 40px 6px 12px;
  overflow: hidden;
  background: linear-gradient(135deg, var(--select-bg), rgba(255, 255, 255, 0.03));
  border: 1px solid var(--select-border);
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
    border-color: var(--select-primary);
    box-shadow: 0 0 14px var(--select-shadow);

    &::before {
      opacity: 1;
      transform: translateX(100%);
    }
  }
}

.select-value {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
  gap: 6px;
  flex-wrap: wrap;
}

.select-single,
.select-placeholder {
  display: block;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select-placeholder {
  color: var(--select-muted);
}

.select-tag {
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  gap: 6px;
  padding: 3px 7px;
  color: var(--select-text);
  background: var(--select-selected);
  border: 1px solid var(--select-border);
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
  color: var(--select-muted);

  &:hover {
    color: var(--select-secondary);
  }
}

.clear-button {
  position: absolute;
  right: 28px;
  top: 50%;
  color: var(--select-muted);
  transform: translateY(-50%);

  &:hover {
    color: var(--select-secondary);
  }
}

.select-arrow {
  position: absolute;
  right: 13px;
  top: 50%;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid var(--select-primary);
  filter: drop-shadow(0 0 6px var(--select-primary));
  transform: translateY(-50%);
  transition: transform 0.2s ease;
}

.select-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  z-index: 80;
  width: 100%;
  max-height: 280px;
  overflow: hidden;
  background: var(--select-panel-bg);
  border: 1px solid var(--select-border);
  border-radius: 6px;
  box-shadow: 0 18px 36px rgba(0, 0, 0, 0.38), 0 0 24px var(--select-shadow);
}

.select-search {
  padding: 8px;
  border-bottom: 1px solid var(--select-border);

  input {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 10px;
    color: var(--select-text);
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--select-border);
    border-radius: 4px;
    outline: none;

    &:focus {
      border-color: var(--select-primary);
      box-shadow: 0 0 10px var(--select-shadow);
    }
  }
}

.select-options {
  max-height: 230px;
  overflow-y: auto;
  padding: 6px;
}

.select-group-label {
  padding: 8px 9px 5px;
  color: var(--select-accent);
  font-size: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.select-option {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 34px;
  padding: 7px 9px;
  color: var(--select-text);
  text-align: left;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.18s ease, border-color 0.18s ease;

  &:hover:not(.disabled) {
    background: var(--select-hover);
    border-color: var(--select-border);
  }

  &.selected {
    color: #fff;
    background: var(--select-selected);
    border-color: var(--select-primary);

    .option-check {
      border-color: var(--select-primary);
      background: var(--select-primary);
      box-shadow: 0 0 10px var(--select-primary);

      &::after {
        opacity: 1;
      }
    }
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.42;
  }
}

.option-check {
  position: relative;
  width: 12px;
  height: 12px;
  margin-right: 9px;
  flex: 0 0 12px;
  border: 1px solid var(--select-border);
  border-radius: 3px;

  &::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 1px;
    width: 4px;
    height: 7px;
    border: solid #06111f;
    border-width: 0 2px 2px 0;
    opacity: 0;
    transform: rotate(45deg);
  }
}

.option-label {
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.select-empty {
  padding: 18px;
  color: var(--select-muted);
  text-align: center;
}

// 分隔线样式
.select-divider {
  height: 1px;
  margin: 6px 0;
  background: var(--select-border);
}

// 有子菜单的选项
.select-option.has-children {
  position: relative;
  cursor: pointer;
  background: rgba(var(--select-primary-rgb), 0.05);
  border-color: rgba(var(--select-primary-rgb), 0.3);
  
  &:hover {
    background: var(--select-hover);
    border-color: var(--select-primary);
  }
  
  &.is-expanded {
    background: rgba(var(--select-primary-rgb), 0.1);
    border-color: var(--select-primary);
  }
}

// 选项图标
.option-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  flex-shrink: 0;
}

// 快捷键
.option-shortcut {
  margin-left: auto;
  padding-left: 12px;
  color: var(--select-muted);
  font-size: 12px;
}

.select-dropdown-enter-active,
.select-dropdown-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.select-dropdown-enter-from,
.select-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
