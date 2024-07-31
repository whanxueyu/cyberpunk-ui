// .vitepress/theme/index.ts
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme'
import 'cyberpunk-ui/lib/style.css'
import './rainbow.css'
import './vars.css'
import './overrides.css'
export default {
  extends: DefaultTheme,
  async enhanceApp({ app }) {
      const CyberpunkUI = await import('cyberpunk-ui')
      app.use(CyberpunkUI)
  }
} satisfies Theme