import type { App } from 'vue'
import CyberTooltip from './cyberTooltip.vue'

export { CyberTooltip }
export default {
  install(app: App) {
    app.component(CyberTooltip.name, CyberTooltip)
  }
}
