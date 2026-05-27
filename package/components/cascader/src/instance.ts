import type { Component } from 'vue';

export type OptionValue = string | number

export interface CascaderOption {
  label?: string;
  value?: OptionValue;
  disabled?: boolean;
  children?: CascaderOption[];
  [key: string]: any;
}

export interface CascaderProps {
  options: CascaderOption[];
  modelValue?: OptionValue | OptionValue[];
  placeholder?: string;
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
}

export type CascaderInstance = Component & {
  setOpen: (visible: boolean) => void;
};
