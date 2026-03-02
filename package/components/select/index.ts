import { withInstall } from '../../utils/index'
import Select from './src/select.vue'
export const CyberSelect = withInstall(Select)
export default CyberSelect

export type { SelectInstance } from './src/instance.ts'