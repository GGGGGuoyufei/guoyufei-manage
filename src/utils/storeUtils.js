/* 
操作local数据的工具函数模块
*/
const USER_KEY = 'user_key'

export default {
  /* 
  保存user
  */
  saveUser (user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
  },
  //读取
  getUser () {
    return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
  },

  /* 
  删除保存的user
  */
  removeUser () {
    localStorage.removeItem(USER_KEY)
  },
}