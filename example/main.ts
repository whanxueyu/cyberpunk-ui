import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import CyberpunkUi from '../package/cyberpunk-ui'
// import CyberpunkUi from 'cyberpunk-ui'
// import "cyberpunk-ui/lib/style.css";
const app = createApp(App)
app.use(CyberpunkUi)
app.mount('#app')