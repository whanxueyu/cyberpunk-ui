import { withInstall } from '../../utils/index'
import Button from './src/button.vue'

export const CyberButton = withInstall(Button)
export default CyberButton

export type { ButtonInstance } from './src/instance'