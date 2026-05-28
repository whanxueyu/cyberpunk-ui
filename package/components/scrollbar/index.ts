import { withInstall } from '../../utils/index'
import Scrollbar from './src/scrollbar.vue'

export const CyberScrollbar = withInstall(Scrollbar)
export default CyberScrollbar

export type { ScrollbarInstance } from './src/instance'
