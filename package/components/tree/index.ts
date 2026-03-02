import { withInstall } from '../../utils/index'
import Tree from './src/tree.vue'
export const CyberTree = withInstall(Tree)
export default CyberTree

export type { TreeInstance } from './src/instance.ts'
