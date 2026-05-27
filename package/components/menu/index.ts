import { withInstall } from '../../utils/index'
import Menu from './src/menu.vue'

export const CyberMenu = withInstall(Menu)
export default CyberMenu

export type { MenuInstance } from './src/instance'
