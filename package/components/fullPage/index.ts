import { withInstall } from '../../utils/index'
import FullPage from './src/fullPage.vue'

export const CpFullPage = withInstall(FullPage)
export default CpFullPage

export type { FullPageInstance } from './src/instance.ts'