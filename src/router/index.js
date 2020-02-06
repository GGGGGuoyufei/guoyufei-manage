import Vue from 'vue'
import VueRouter from 'vue-router' //引入路由器插件

import routes from './routes'//引入路由组件对象

Vue.use(VueRouter)//声明使用

export default new VueRouter({
    mode: 'history',
    routes
})