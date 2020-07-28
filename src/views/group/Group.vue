<template>
    <div class="group">
        <Table :tableData="tableData" :columns="columns" isBorder :loading="loading" :pageObj="pageObj"
		 isStripe :height="height" isCheckout :showSummary="showSummary"
		 @ClickRow="getRow">
            <el-table-column slot="operate" label="操作" align="center" fixed="right" >
                <template slot-scope="scope">
                    <el-button size="small" type="warning" icon='el-icon-edit' @click="edit(scope.row)">编辑</el-button>       
                </template>
            </el-table-column>
        </Table>
    </div>
</template>

<script>
	import Table from '../../components/Table.vue'
export default {
	data() {
		return {
			isBorder:true,//是否有边框
			isStripe:true,//斑马纹
			height:"500",//固定表头，
			loading: false,//是否加载中
			isCheckout:false,//是否多选
			showSummary:false,//底部计算合计
			tableData:[],//表格数据
			columns: [
				{	label: '日期',
					prop: 'date',
					hasSort:true,//是否排序
				},
				{label: '姓名', prop: 'name'},
				{label: '省份', prop: 'province'},
				{label: '市区', prop: 'city'},
				{label: '地区', prop: 'address',width:200,hasSort:true},
				{label: '性别', prop: 'gender'},
				{label: '邮编', prop: 'zip'},
				{slot: 'operate'}
			], // 表头数据
			
			pageObj: {
				size: 1,
				total: 1,
				currentPage: 1,
				func:(currentPage) =>{
					this.pageTurning(currentPage)
				}
			},
		}
	},
	components:{
		Table
	},
	mounted(){
		this.init()
	},
	methods:{
		edit(row){
			console.log(row)
		},
		init(){
			let tableArr = [];
			let tableItem = {};
			for(let i= 1;i<10;i++){
				tableItem ={
					id:i,
					date: '2016-05-02',
					name: i%2==0 ?'小虎': '大虎',
					province: '上海',
					city: '普陀区',
					gender:i%2==0 ?'男': '女',
					address: `上海市金沙江路${i}弄`,
					zip: 200333
				}
				tableArr.push(tableItem)
			}
			this.tableData = tableArr;
			this.$set(this.pageObj,'total',this.tableData.length);
		},
		//获取点击的当前行
		getRow(value){
			console.log(value)
		}
		
	},
  
};
</script>

<style lang="scss" scoped>

</style>
