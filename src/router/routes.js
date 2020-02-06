// import Home from '@views/home/Home.vue'
import Login from '../views/login/Login.vue'

export default [
  {
		path: '/login',
    component: Login
	},
	{
    path:'',
    redirect: '/login'
  }
]