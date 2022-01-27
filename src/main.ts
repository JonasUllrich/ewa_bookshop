import { createApp } from 'vue'
import App from './app.vue'
import router from './routes'
import { createPinia } from 'pinia'

import './tailwind.css'

createApp(App).use(createPinia()).use(router).mount('#vue-shop')
