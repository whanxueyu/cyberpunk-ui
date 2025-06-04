import type { App } from 'vue'
import NeonToggle from './neonToggle.vue'

export { NeonToggle }
export default {
  install(app: App) {
    app.component(NeonToggle.name, NeonToggle)
  }
}
