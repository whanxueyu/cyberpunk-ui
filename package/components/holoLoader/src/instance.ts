import type { App } from 'vue'
import HoloLoader from './holoLoader.vue'

export { HoloLoader }
export default {
  install(app: App) {
    app.component(HoloLoader.name, HoloLoader)
  }
}
