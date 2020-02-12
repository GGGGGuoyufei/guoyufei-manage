import Vue from 'vue'

import App from './App.vue'
import router from './router'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI)
//解决双击路由出现的报错
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

Vue.prototype.$globalEventBus =new Vue()
new Vue({
    render: h => h(App),
    router
}).$mount('#app')