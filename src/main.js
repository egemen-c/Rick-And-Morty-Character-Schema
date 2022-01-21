import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import './assets/css/variables.css'
import router from "./router/index"
import store from './store'
createApp(App).use(router).use(store).mount('#app')
