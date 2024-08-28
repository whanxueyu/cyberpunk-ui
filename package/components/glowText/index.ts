import { withInstall } from '../../utils/index'
import GlowText from './src/glowText.vue'

export const CpGlowText = withInstall(GlowText)
export default CpGlowText

export type { GlowTextInstance } from './src/instance.ts'