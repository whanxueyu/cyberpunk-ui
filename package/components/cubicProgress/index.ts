import { withInstall } from '../../utils/index'
import cubicProgress from './src/cubicProgress.vue'

export const CyberCubicProgress = withInstall(cubicProgress)
export default CyberCubicProgress

export type { CubicProgressInstance, ColorPreset, ColorSet } from './src/instance.ts'
