import type { App } from 'vue'
import GlitchProgress from './glitchProgress.vue'

export { GlitchProgress }
export default {
  install(app: App) {
    app.component(GlitchProgress.name, GlitchProgress)
  }
}
