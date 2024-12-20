import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from './router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app=createApp(App)


//全局引入icon
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//挂载路由
app.use(router)


app.mount('#app')
