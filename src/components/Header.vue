<template>
  <div class="header">
    <div class="header-left">
			<i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">
      郭宇飞后台管理系统
    </div>
    <div class="header-right">
			<div class="btn-fullscreen">
        <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
            <i class="el-icon-rank"></i>
        </el-tooltip>
      </div>
      <div class="user-avator">
        <img src="../assets/backgroundImg.webp" alt="">
      </div>
      <el-dropdown class="user-name" trigger="click" >
        <span class="el-dropdown-link">
            username
            <i class="el-icon-caret-bottom"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
                <el-dropdown-item>项目仓库</el-dropdown-item>
            </a>
            <el-dropdown-item >退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data(){
		return{
			collapse:true,
      fullscreen:false	
		}
  }
}
</script>

<style>
.header{
  width: 100%;
  height: 70px;
  box-sizing: border-box;
  font-size: 22px;
  color: #fff;
  padding:0px 20px;
  background: pink;
  line-height:70px;
}
.header-left{
  float: left;
  margin-right:10px;
  cursor: pointer;
}
.header .logo {
    float: left;
    width: 250px;
}
.header-right {
  float: right;
  padding-right: 50px;
}

.btn-fullscreen{
  display:inline;
  color:black;
  margin-right: 5px;
  font-size: 24px;
}
.el-icon-rank{
  transform: rotate(45deg);
  line-height:70px;
}
.user-avator{
  display: inline;
}
.user-avator img{
    width: 40px;
    height: 40px;
    border-radius: 50%; 
    margin:0px 10px;
}
</style>