/* 
封装的接口函数
*/
import ajax from './ajax'
const BASE = '/api'
// 登录
export const reqLogin=(username,password)=> ajax.post(BASE + '/login', {username, password})

//获取分类列表
export const reqCategorys = () => ajax('/manage/category/list')
//添加分类
export const reqAddCategory = (categoryName) => ajax.post('/manage/category/add',{
  categoryName
})
//编辑分类
export const reqUpdateCategory = ({categoryId,categoryName}) => ajax.post('/manage/category/update',{
  categoryId,
  categoryName
})
export const reqVidao = ()=>{'https://v.douyin.com/7C6aco/'}