import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { createPinia } from "pinia"

App.use(router)
   .use(createPinia)

createApp(App).mount('#app')
