<template>
  <div class="cascader-tree">
    <template v-for="option in options" :key="String(getOptionValue(option))">
      <div class="cascader-menu-item">
        <!-- 选项按钮 -->
        <button
          class="cascader-option"
          :class="{
            selected: isSelected(option),
            disabled: option.disabled,
            'has-children': hasChildren(option),
            'is-expanded': isExpanded(option),
          }"
          type="button"
          :disabled="option.disabled"
          @click.stop="handleOptionClick(option)"
        >
          <span v-if="multiple" class="option-check"></span>
          <span class="option-label">{{ getOptionLabel(option) }}</span>
          <span v-if="hasChildren(option)" class="option-arrow"></span>
        </button>

        <!-- 递归渲染子菜单 -->
        <div v-if="hasChildren(option) && isExpanded(option)" class="cascader-submenu">
          <CascaderOptionTree
            :options="getChildren(option)"
            :selected-values="selectedValues"
            :multiple="multiple"
            :label-key="labelKey"
            :value-key="valueKey"
            :children-key="childrenKey"
            @select="$emit('select', $event)"
          />
        </div>
      </div>
    </template>

    <div v-if="!options || options.length === 0" class="cascader-empty">
      暂无数据
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CascaderOptionTree',
});
</script>

<script setup lang="ts">
import { ref } from 'vue';
import type { CascaderOption, OptionValue } from './instance'

const props = defineProps<{
  options: CascaderOption[];
  selectedValues: OptionValue[];
  multiple: boolean;
  labelKey: string;
  valueKey: string;
  childrenKey: string;
}>();

const emit = defineEmits<{
  (e: 'select', data: { option: CascaderOption; value: OptionValue }): void;
}>();

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

const isExpanded = (option: CascaderOption) => {
  const value = getOptionValue(option);
  return expandedKeys.value.has(value);
};

const handleOptionClick = (option: CascaderOption) => {
  if (option.disabled) return;

  const value = getOptionValue(option);

  if (hasChildren(option)) {
    // 有子菜单，切换展开状态
    // 创建新的 Set 实例触发响应式更新
    const newSet = new Set(expandedKeys.value);
    if (newSet.has(value)) {
      newSet.delete(value);
    } else {
      newSet.add(value);
    }
    expandedKeys.value = newSet;
  } else {
    // 叶子节点，选择该项
    emit('select', { option, value });
  }
};
</script>

<style lang="scss" scoped>
.cascader-tree {
  display: flex;
  flex-direction: column;
}

.cascader-menu-item {
  position: relative;
}

.cascader-option {
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 34px;
  padding: 7px 9px;
  color: var(--cascader-text);
  text-align: left;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  font-size: inherit;
  transition: background 0.18s ease, border-color 0.18s ease;

  &:hover:not(.disabled) {
    background: var(--cascader-hover);
    border-color: var(--cascader-border);
  }

  &.selected {
    color: #fff;
    background: var(--cascader-selected);
    border-color: var(--cascader-primary);

    .option-check {
      border-color: var(--cascader-primary);
      background: var(--cascader-primary);
      box-shadow: 0 0 10px var(--cascader-primary);

      &::after {
        opacity: 1;
      }
    }
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.42;
  }

  &.has-children {
    .option-label {
      color: var(--cascader-primary);
    }
  }

  &.is-expanded {
    background: rgba(var(--cascader-primary-rgb), 0.1);
    border-color: var(--cascader-primary);
  }
}

.option-check {
  position: relative;
  width: 12px;
  height: 12px;
  margin-right: 9px;
  flex: 0 0 12px;
  border: 1px solid var(--cascader-border);
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
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid var(--cascader-primary);
  filter: drop-shadow(0 0 6px var(--cascader-primary));
  margin-left: 8px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.cascader-option.is-expanded .option-arrow {
  transform: rotate(180deg);
}

.cascader-submenu {
  margin-left: 16px;
  padding-left: 8px;
  border-left: 1px solid var(--cascader-border);
}

.cascader-empty {
  padding: 18px;
  color: var(--cascader-muted);
  text-align: center;
}
</style>
