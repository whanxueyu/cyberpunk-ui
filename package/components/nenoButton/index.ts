import { withInstall } from '../../utils/index'
import NenoButton from './src/nenoButton.vue'

export const CyberNenoButton = withInstall(NenoButton)
export default CyberNenoButton

export type { NenoButtonInstance } from './src/instance.ts'