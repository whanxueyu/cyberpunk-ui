import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import CyberpunkUi from '../package/cyberpunk-ui';
const app = createApp(App);
app.use(CyberpunkUi);
app.mount('#app');
//# sourceMappingURL=main.js.map