import type { App } from 'vue'
import CpButtton from './cp-button'

// 所有组件列表
const components = [
  CpButtton
]
// 定义 install 方法
const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name as string, component)
  })
}
export { CpButtton }
const CyberpunkUI = {
  install
}

export default CyberpunkUI
