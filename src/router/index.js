import Vue from 'vue'
import VueRouter from 'vue-router' //引入路由器插件

import routes from './routes'//引入路由组件对象
import store from '../utils/storeUtils'
Vue.use(VueRouter)//声明使用

const router = new VueRouter({
    mode: 'history',
    routes
})
// 定义全局前置守卫
// router.beforeEach((to, from, next) => {
//     // 如果目标path是需要检查的, 判断用户如果不存在, 跳转到登陆界面
//     let user = store.getUser()
//     if (!user._id) {
//         return next('/login')
//     }else{
//         // 放行
//          next()
//     }
    
//   })
  export default router