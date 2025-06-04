import type { App } from 'vue'
import CyberNotification from './cyberNotification.vue'

export { CyberNotification }
export default {
  install(app: App) {
    app.component(CyberNotification.name, CyberNotification)
  }
}
