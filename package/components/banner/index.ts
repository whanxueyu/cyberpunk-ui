import { withInstall } from '../../utils/index'
import Banner from './src/banner.vue'
export const CyberBanner = withInstall(Banner)
export default CyberBanner
export type { BannerInstance } from './src/instance.ts'
