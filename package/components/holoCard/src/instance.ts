import type { App } from 'vue'
import HoloCard from './holoCard.vue'

export { HoloCard }
export default {
  install(app: App) {
    app.component(HoloCard.name, HoloCard)
  }
}
