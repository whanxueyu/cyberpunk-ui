import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import CyberpunkUI from '../../package/cyberpunk-ui';
import 'cyberpunk-ui/lib/style.css';
console.log(CyberpunkUI);
const app = createApp(App);
app.use(CyberpunkUI);
app.mount('#app');
//# sourceMappingURL=main.js.map