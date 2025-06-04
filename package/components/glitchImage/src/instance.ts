import type { App } from 'vue'
import GlitchImage from './glitchImage.vue'

export { GlitchImage }
export default {
  install(app: App) {
    app.component(GlitchImage.name, GlitchImage)
  }
}
