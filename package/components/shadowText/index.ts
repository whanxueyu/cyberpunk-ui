import { withInstall } from '../../utils/index'
import ShadowText from './src/shadowText.vue'

export const CyberShadowText = withInstall(ShadowText)
export default CyberShadowText

export type { ShadowTextInstance } from './src/instance.ts'