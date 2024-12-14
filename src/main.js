import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from './router/index'

const app=createApp(App)

//挂载路由
app.use(router)

app.mount('#app')