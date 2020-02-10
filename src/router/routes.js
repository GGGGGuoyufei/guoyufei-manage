import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'

import Group from '../views/group/Group.vue'
import Menu from '../views/menu/Menu.vue'
import Tabs from '../views/tabs/Tabs.vue'

export default [
  {
		path: '/home',
    component: Home,
    meta: { title: '自述文件' },
    children:[
     {
      path: '/group',
      component: Group,
      meta: { title: '组织管理' },
     },
     {
      path: '/menu',
      component: Menu,
      meta: { title: '菜单管理' },
     },
     {
      path: '/tabs',
      component: Tabs,
      meta: { title: '基础表格' },
     },
  ]
	},
  {
		path: '/login',
    component: Login
	},
	{
    path:'',
    redirect: '/login'
  }
]