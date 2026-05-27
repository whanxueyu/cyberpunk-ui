import { withInstall } from '../../utils/index'
import Cascader from './src/cascader.vue'

export const CyberCascader = withInstall(Cascader)
export default CyberCascader

export type { CascaderInstance, CascaderOption } from './src/instance.ts'
