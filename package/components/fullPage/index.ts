import { withInstall } from '../../utils/index'
import FullPage from './src/fullPage.vue'

export const CyberFullPage = withInstall(FullPage)
export default CyberFullPage

export type { FullPageInstance } from './src/instance.ts'