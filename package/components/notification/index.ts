import { withInstall } from '../../utils/index'
import Notification from './src/notification.vue'
export const CyberNotification = withInstall(Notification)
export default CyberNotification
export type { NotificationInstance } from './src/instance.ts'
