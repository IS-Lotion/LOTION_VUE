import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueCookies from 'vue-cookies'
import store from './store'



createApp(App)
    .use(router)
    .use(VueCookies)
    .use(store)
    .mount('#app');
