import { withInstall } from '../../utils/index'
import ShadowText from './src/shadowText.vue'

export const CpShadowText = withInstall(ShadowText)
export default CpShadowText

export type { ShadowTextInstance } from './src/instance.ts'