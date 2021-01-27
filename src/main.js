import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)
Vue.http.options.emulateJSON = true;

import './assets/css/style.scss'

Vue.config.productionTip = false
    // router.beforeEach((to, from, next) => {
    //     /* 路由发生变化修改页面meta */
    //     if (to.meta.content) {
    //         let head = document.getElementsByTagName('head');
    //         let meta = document.createElement('meta');
    //         meta.content = to.meta.content;
    //         head[0].appendChild(meta)
    //     }
    //     /* 路由发生变化修改页面title */
    //     if (to.meta.title) {
    //         document.title = to.meta.title;
    //     }
    //     next()
    // });

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')