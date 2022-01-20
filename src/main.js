import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/variables.css'
import router from "./router/index"
createApp(App).use(router).mount('#app')
