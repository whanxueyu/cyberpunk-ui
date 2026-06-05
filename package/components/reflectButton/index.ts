import { withInstall } from '../../utils/index'
import ReflectButton from './src/reflectButton.vue'

export const CyberReflectButton = withInstall(ReflectButton)
export default CyberReflectButton

export type { ReflectButtonInstance } from './src/instance.ts'