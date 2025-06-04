import type { App } from 'vue'
import DigitalCounter from './digitalCounter.vue'

export { DigitalCounter }
export default {
  install(app: App) {
    app.component(DigitalCounter.name, DigitalCounter)
  }
}
