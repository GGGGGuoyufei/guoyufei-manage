// import Home from '../components/Home.vue'
// import Login from '../views/login/Login.vue'
// import Dashboard from '../views/dashboard/Dashboard.vue'
// import Group from '../views/group/Group.vue'
// import Menu from '../views/menu/Menu.vue'
// import Table from '../views/table/Table.vue'
// import TableDetail from '../views/table/tableDetail.vue'

/* 
 import(module): 被动态引入的模块就会被单独打包    webpack做的
 路由组件配置是一个函数: 返回包含路由组件的promise对象
 */
const Home = () => import('../components/Home.vue')
const Login = () => import('../views/login/Login.vue')
const Dashboard = () => import('../views/dashboard/Dashboard.vue')
const Group = () => import('../views/group/Group.vue')
const Menu = () => import('../views/menu/Menu.vue')
const Table = () => import('../views/table/Table.vue')
const TableDetail = () => import('../views/table/tableDetail.vue')
export default [
  {
		path: '/home',
    component: Home,
    meta: { title: '首页' },
    children:[
        {
          path: '/dashboard',
          component: Dashboard,
          name:'系统主页',
          meta: { title: '系统主页' },
        },
        {
          path: '/group',
          component: Group,
          name:'封装表格测试',
          meta: { title: '封装表格测试' },
        },
        {
          path: '/menu',
          component: Menu,
          name:'菜单管理',
          meta: { title: '菜单管理' },
        },
        {
          path: '/table',
          component: Table,
          name:'表格相关',
          meta: { title: '表格相关' },
          children:[
            {
              path: '/table/tableDetail',
              component: TableDetail,
              name:'表格相关Detail',
              meta: { title: '表格相关Detail' },
            }
          ]
      },
    ]
	},
  {
		path: '/login',
    component: Login
	},
	{
    path:'/',
    redirect: '/dashboard'
  }
]