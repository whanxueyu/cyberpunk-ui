import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import CyberpunkUi from '../package/index'
// import CyberpunkUi from '../cyberpunk-ui'
console.log(CyberpunkUi);
// import "cyberpunk-ui/style.css";
const app = createApp(App)
// CyberpunkUi.install(app); //注册组件
app.use(CyberpunkUi)
app.mount('#app')