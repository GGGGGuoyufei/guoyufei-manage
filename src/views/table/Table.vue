<template>
    <div class="tabs">
      <el-input class="search" v-model="searchContent" placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary" icon="el-icon-circle-plus-outline">新增</el-button>
      <!-- 表格 -->
      <el-table :data="tableData" class="table" style="width: 100%;margin:20px 0px 20px 0px;"
       border>
        <el-table-column prop="date" label="时间" ></el-table-column>
        <el-table-column  prop="name"  label="名称"></el-table-column>
        <el-table-column  prop="address"  label="地址"></el-table-column>
        <el-table-column prop="describe" label="描述"></el-table-column>
        <el-table-column label="操作" width="180" align="center">                      
          <template slot-scope="scope" >
            <el-button type="danger" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="warning" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>             
        </el-table-column>
      </el-table>
    <!-- 编辑 -->
      <el-dialog title="编辑" :visible.sync="EditDialog" :destroy-on-close="true">
        <el-form :model="form">
          <el-form-item label="名称" >
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="地址" >
            <el-cascader v-model="cityValue" :options="city" @change="handleCityChange"></el-cascader>
          </el-form-item>
          <el-form-item label="描述" >
            <el-input v-model="form.describe" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="EditDialog = false">取 消</el-button>
          <el-button type="primary" @click="EditDialog = false">确 定</el-button>
        </div>
      </el-dialog>
      <!-- 分页 -->
      <el-pagination background layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>
</template>

<script>

export default {
  name: "SideBar",
  data() {
    return {
      searchContent:'',
      EditDialog:false,//编辑
      cityValue:'',//选择地址
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          describe:'普通'
        }, {
          date: '2016-05-04',
          name: '小明',
          address: '上海市普陀区金沙江路 1517 弄',
          describe:'普通'
        }, {
          date: '2016-05-01',
          name: '小李',
          address: '上海市普陀区金沙江路 1519 弄',
          describe:'普通'
        }, {
          date: '2016-05-03',
          name: '小红',
          address: '上海市普陀区金沙江路 1516 弄',
          describe:'普通'
        }],
      form:{
        name:'',
        describe:'',
        address:''
      },//编辑dialog
      city:[{
        value: 'hebei',
        label: '河北',
        children:[{
          value: 'shijiazhuang',
          label: '石家庄',
        },
        {
          value: 'handan',
          label: '邯郸',
          children:[{
            value: 'linzhang',
            label: '临漳',
          },
          {
            value: 'weixian',
            label: '魏县',
          },
          {
            value: 'chengan',
            label: '成安',
          },
          {
            value: 'hanshanqu',
            label: '邯山区',
          },
          {
            value: 'cixian',
            label: '磁县',
          }]
        },
        {
          value: 'xingtai',
          label: '邢台',
        },
        {
          value: 'tangshan',
          label: '唐山',
        },
        {
          value: 'chengde',
          label: '承德',
        },
        {
          value: 'qinhuangtao',
          label: '秦皇岛',
        }]
      }],//城市
    }
  },
  methods:{
    //编辑
    handleEdit(index,row){
      this.EditDialog = true
      this.form.name = row.name
      this.form.describe = row.describe
      this.form.address = row.address
    },
    //删除
    handleDelete(){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },
    //选择城市
    handleCityChange(){

    }
  }
};
</script>

<style  scoped>
  
  .el-input{
    width: 80%;
  }
  .search{
    width:234px;
    margin-right:10px;
  }
</style>
