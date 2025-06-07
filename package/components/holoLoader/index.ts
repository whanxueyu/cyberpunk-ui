import { withInstall } from '../../utils/index'
import holoLoader from './src/holoLoader.vue'
export const CyberHoloLoader = withInstall(holoLoader)
export default CyberHoloLoader
export type { HoloLoaderInstance } from './src/instance.ts'
