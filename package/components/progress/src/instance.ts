import type CyberProgress from './progress.vue'

/** 进度条组件实例类型 */
export type ProgressInstance = InstanceType<typeof CyberProgress>

/** 进度条主题类型 */
export type ProgressTheme = 'neon' | 'hologram' | 'terminal' | 'matrix'

/** 进度条方向类型 */
export type ProgressDirection = 'horizontal' | 'vertical'
