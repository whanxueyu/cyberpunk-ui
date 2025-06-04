import type { App } from 'vue'
import InfiniteTable from './infiniteTable.vue'

export { InfiniteTable }
export default {
  install(app: App) {
    app.component(InfiniteTable.name, InfiniteTable)
  }
}
