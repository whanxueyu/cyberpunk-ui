import type MagicText from './magicText.vue'

export type MagicTextInstance = InstanceType<typeof MagicText>

/** 动画播放速度 */
export type MagicTextSpeed = 'slow' | 'normal' | 'fast'

/** 渐变预设 */
export type MagicTextGradient = 'cyberpunk' | 'aurora' | 'fire' | 'ocean' | 'sunset' | 'neon'

/** 高光混合模式 */
export type MagicTextBlendMode = 'color-dodge' | 'overlay' | 'soft-light' | 'screen' | 'hard-light'

/** 动画播放方向 */
export type MagicTextDirection = 'normal' | 'reverse' | 'alternate'
