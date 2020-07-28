<template>
  <div class="login-wrapp">
    <div class="login-content">
      <div class="login-title">
        <h1>郭宇飞后台练习系统</h1>
      </div>
      <div class="input-wrapp">
        <div>
          <el-input placeholder="请输入用户名" v-model="username">
            <template slot="prepend">
              <i class="el-icon-user"></i>
            </template>
          </el-input>
        </div>
        <div>
          <el-input type="password" placeholder="请输入密码" v-model="password">
            <template slot="prepend">
              <i class="el-icon-goods"></i>
            </template>
          </el-input>
        </div>
      </div>
      <el-button type="primary" style="width:100%;margin-top:15px;" @click="Login()">登录</el-button>
    </div>
  </div>
</template>

<script>
import {reqLogin} from '../../api/index'
import storeUtils from '../../utils/storeUtils.js'
export default {
  data(){
    return{
      username:'',
      password:''
    }
  },
  methods:{
    Login(){
      const {username,password} = this
      reqLogin(username,password).then((res)=>{
        if(res.status === 0){
          this.$router.push('/')
          this.$message({
            message: `${res.data.username}登录成功`,
            type: 'success'
          })
          storeUtils.saveUser(res.data)
        }else{
          this.$message.error(res.msg)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login-wrapp{
    background-image: url(../../assets/backgroundImg.webp);
    background-size: 100%;
    width:100%;
    height:100%;
    .login-content{
      position:absolute;
      left:0;
      top:0;
      right:0;
      bottom:0;
      margin:auto;
      width:393px;
      height:263px;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.3);
      padding:20px;
      .login-title{
        h1{
          font-size: 37px;
          text-align: center;
          color: white;
          margin-bottom:10px;
        }
      }
      .input-wrapp{
        .el-input{
          margin:5px 0px;
        }
      }
      
    }
  }
</style>