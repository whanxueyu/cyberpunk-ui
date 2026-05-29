import type Text from './text.vue'

export type TextInstance = InstanceType<typeof Text>

/** 故障效果类型 */
export type CyberTextEffect = 'glitch' | 'flicker' | 'pulse' | 'static'

/** 动画播放速度 */
export type AnimationSpeed = 'slow' | 'normal' | 'fast'
