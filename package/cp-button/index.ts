import type { App } from 'vue'
import CpButton from './cp-button.vue'

// 使用install方法，在app.use挂载
CpButton.install = (app: App) => {
  app.component('CpButton', CpButton)
}

export default CpButton