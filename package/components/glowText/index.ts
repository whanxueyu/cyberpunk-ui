import { withInstall } from '../../utils/index'
import GlowText from './src/glowText.vue'

export const CyberGlowText = withInstall(GlowText)
export default CyberGlowText

export type { GlowTextInstance } from './src/instance.ts'