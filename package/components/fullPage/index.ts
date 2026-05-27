import { withInstall } from '../../utils/index'
import FullPage from './src/fullPage.vue'

export const CyberFullPage = withInstall(FullPage)
export default CyberFullPage

export type { FullPageInstance, FullPageItem } from './src/instance.ts'