import { withInstall } from '../../utils/index'
import infiniteTable from './src/infiniteTable.vue'
export const CyberInfiniteTable = withInstall(infiniteTable)
export default CyberInfiniteTable
export type { InfiniteTableInstance } from './src/instance.ts'
