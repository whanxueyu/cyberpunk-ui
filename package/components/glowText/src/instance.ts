import type GlowText from './glowText.vue'

export type GlowTextInstance = InstanceType<typeof GlowText>

/** 霓虹光效类型 */
export type GlowEffect = 'neon' | 'flux' | 'turnon' | 'blink'

/** 文字尺寸 */
export type GlowTextSize = 'small' | 'default' | 'large'

/** 动画播放速度（turnon 不适用） */
export type AnimationSpeed = 'slow' | 'normal' | 'fast'
