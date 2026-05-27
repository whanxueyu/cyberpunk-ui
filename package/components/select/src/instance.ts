import type Select from './select.vue'

export type SelectInstance = InstanceType<typeof Select>

export type OptionValue = string | number | boolean | null
export type ModelValue = OptionValue | OptionValue[]

export interface SelectOption {
  label?: string
  value?: OptionValue
  disabled?: boolean
  options?: SelectOption[]
  icon?: any
  shortcut?: string
  divider?: boolean
  key?: string
  [key: string]: any
}

export interface OptionGroup {
  key: string
  label: string
  options: SelectOption[]
}
