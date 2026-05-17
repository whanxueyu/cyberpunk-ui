# CyberCascader 级联选择器

级联选择器用于多层级数据的选择，支持单选和多选模式。

## 基础用法

```vue
<template>
  <cyber-cascader 
    v-model="value"
    :options="options"
    placeholder="请选择"
  />
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
const options = ref([
  {
    label: '电子产品',
    value: 'electronics',
    children: [
      { label: '手机', value: 'phone' },
      { label: '电脑', value: 'computer' },
    ],
  },
]);
</script>
```

## 多选模式

```vue
<cyber-cascader 
  v-model="values"
  :options="options"
  multiple
/>
```

## 只显示最后一级

默认显示完整路径（如：电子产品 / 手机 / iPhone），设置 `show-all-levels` 为 `false` 可只显示最后一级。

```vue
<cyber-cascader 
  v-model="value"
  :options="options"
  :show-all-levels="false"
/>
```

## 不同主题

```vue
<cyber-cascader theme="neon" :options="options" />
<cyber-cascader theme="terminal" :options="options" />
<cyber-cascader theme="matrix" :options="options" />
<cyber-cascader theme="hologram" :options="options" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|--------|
| modelValue | 绑定值 | `string \| number \| (string \| number)[]` | - |
| options | 选项数据 | `CascaderOption[]` | `[]` |
| placeholder | 占位文本 | `string` | `'请选择'` |
| noDataText | 无数据文本 | `string` | `'暂无数据'` |
| disabled | 是否禁用 | `boolean` | `false` |
| clearable | 是否可清空 | `boolean` | `true` |
| multiple | 是否多选 | `boolean` | `false` |
| showAllLevels | 是否显示完整路径 | `boolean` | `true` |
| size | 尺寸 | `'large' \| 'default' \| 'small'` | `'default'` |
| theme | 主题 | `'neon' \| 'terminal' \| 'matrix' \| 'hologram'` | `'neon'` |
| labelKey | 选项标签键名 | `string` | `'label'` |
| valueKey | 选项值键名 | `string` | `'value'` |
| childrenKey | 子选项键名 | `string` | `'children'` |

### Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| update:modelValue | 绑定值变化时触发 | `(value: ModelValue) => void` |
| change | 选中值变化时触发 | `(value: ModelValue) => void` |
| focus | 获得焦点时触发 | `(event: FocusEvent) => void` |
| blur | 失去焦点时触发 | `(event: FocusEvent) => void` |
| visible-change | 下拉框出现/隐藏时触发 | `(visible: boolean) => void` |
| clear | 点击清空按钮时触发 | `() => void` |

### CascaderOption

```typescript
interface CascaderOption {
  label?: string;
  value?: string | number;
  disabled?: boolean;
  children?: CascaderOption[];
  [key: string]: any;
}
```

## 交互方式

Cascader 组件采用**树形展开**的交互方式：
- 点击有子菜单的选项会展开/收起子菜单
- 子菜单以缩进形式显示在父选项下方
- 点击叶子节点（没有子菜单的选项）进行选择
- 支持递归展开多级菜单

这种方式相比面包屑导航更加直观，用户可以同时看到多个层级的选项。
