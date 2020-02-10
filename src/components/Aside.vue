<template>
  <div class="aside" style="width:430px">
    <el-row class="tac">
      <el-col :span="12">
				<el-menu
					default-active="2"
					class="el-menu-vertical-demo"
					background-color="#545c64"
					text-color="#fff"
					active-text-color="#ffd04b">
					<el-submenu index="1">
						<template slot="title">
							<i class="el-icon-location"></i>
							<span>系统首页</span>
						</template>
						<el-menu-item-group>
							<el-menu-item index="1-1" @click="goto('/tabs')">基础表格</el-menu-item>
							<el-menu-item index="1-3" @click="goto('/group')">组织管理</el-menu-item>
							<el-menu-item index="1-2" @click="goto('/menu')">菜单管理</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-col>
    </el-row>
  </div>
</template>

<script>


export default {
  data(){
    return{

    }
  },
  methods:{
		goto(path){
			this.$router.push(path)
			//alert('哈哈')
		}
	}
}
</script>

<style>
.el-aside {
  color: #333;
  background:#263238;
  position: absolute;
  left:0;
  top:50px;
  bottom:0;
}
</style>