import { withInstall } from '../../utils/index'
import DigitalCounter from './src/digitalCounter.vue'
export const CyberDigitalCounter = withInstall(DigitalCounter)
export default CyberDigitalCounter
export type { DigitalCounterInstance } from './src/instance.ts'
