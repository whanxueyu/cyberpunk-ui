import { withInstall } from '../../utils/index'
import Progress from './src/cyberProgress.vue'

export const CyberProgress = withInstall(Progress)
export default CyberProgress

export type { ProgressInstance } from './src/instance'
