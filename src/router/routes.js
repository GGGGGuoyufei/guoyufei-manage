import Home from '../components/Home.vue'
import Login from '../views/login/Login.vue'

import Dashboard from '../views/dashboard/Dashboard.vue'
import Group from '../views/group/Group.vue'
import Menu from '../views/menu/Menu.vue'
import Table from '../views/table/Table.vue'

export default [
  {
		path: '/home',
    component: Home,
    meta: { title: '首页吧' },
    children:[
    {
      path: '/dashboard',
      component: Dashboard,
      meta: { title: '系统主页' },
     },
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
      path: '/table',
      component: Table,
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
    redirect: '/dashboard'
  }
]