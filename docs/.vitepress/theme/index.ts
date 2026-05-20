// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import CyberpunkUI from 'cyberpunk-ui'
import 'cyberpunk-ui/lib/style.css'
import './rainbow.css'
import './vars.css'
import './overrides.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
      app.use(CyberpunkUI)
  }
} satisfies Theme
