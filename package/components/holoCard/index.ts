import { withInstall } from '../../utils/index'
import holoCard from './src/holoCard.vue'
export const CyberHoloCard = withInstall(holoCard)
export default CyberHoloCard
export type { HoloCardInstance } from './src/instance.ts'
