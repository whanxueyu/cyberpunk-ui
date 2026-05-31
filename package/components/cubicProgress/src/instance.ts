import type cubicProgress from './cubicProgress.vue'

/** 组件实例类型 */
export type CubicProgressInstance = InstanceType<typeof cubicProgress>

/** 预设配色方案名称 */
export type ColorPreset = 'pink' | 'cyan' | 'green' | 'gold' | 'purple'

/** 配色集合 */
export interface ColorSet {
  primary: string
  secondary: string
  empty: string
}
