<template>
    <div class="tabs">
      <el-input class="search"  size="small" v-model="search.name" placeholder="按名称搜索"></el-input>
      <el-input class="search"  size="small" v-model="search.describe" placeholder="按描述搜索"></el-input>
      <el-date-picker class="search" size="small" v-model="search.Time" type="daterange"  range-separator="至"  start-placeholder="开始日期"  end-placeholder="结束日期">
      </el-date-picker>
      <el-button type="primary" size="small" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" size="small" icon="el-icon-circle-plus-outline">新增</el-button>
      <!-- 表格 -->
      <el-table :data="tableData" class="table" style="width: 100%;margin:20px 0px 20px 0px;"  border>
          <el-table-column prop="date" label="时间" ></el-table-column>
          <el-table-column  prop="name"  label="名称"></el-table-column>
          <el-table-column  prop="address"  label="地址"></el-table-column>
          <el-table-column prop="sex" label="性别"></el-table-column>
      </el-table>
    </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
		search:{
			name:'',
			describe:'',
			Time:[]
		},
		//tableData: Object.freeze[{}],
		tableData:[]
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
		let tableArr = [];
        let tableItem = {};
        for(let i= 1;i<10;i++){
            tableItem ={
                id:i,
                date: '2016-05-02',
                name: Math.random().toString(36).slice(-8),
                address:`上海市普陀区金沙江路${i}弄`,
                sex: i % 2 == 0 ? '高级' : '普通'
            }
            tableArr.push(tableItem)
		}
		this.tableData = tableArr
	}
    
  }
};
</script>

<style scoped>
  
  .el-input{
    width: 80%;
  }
  .search{
    width:234px;
    margin-right:10px;
  }
</style>
