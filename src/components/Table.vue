<template>
    <div class="data-table">
        <el-table :data="tableData" style="width: 100%" 
        :border="isBorder" 
        v-loading="loading"
        :stripe="isStripe"
        :height="height"
        :show-summary='showSummary'
        @row-click="handleClickCell"
        :header-cell-style="{'text-align':'center'}" :cell-style="{'text-align':'center'}">
            <el-table-column v-if="isCheckout" show-overflow-tooltip type="selection"></el-table-column>
            <el-table-column label="序号" type="index" width="50" >
                <template scope="scope">
                    <!-- 有分页时，序号显示 -->
                    <span v-if="pageObj">{{(pageObj.currentPage - 1)*pageObj.size + scope.$index + 1}}</span>
                    <!-- 无分页时，序号显示 -->
                    <span v-else>{{scope.$index + 1}}</span>
                </template>
            </el-table-column>
            <template v-for="(col, index) in columns">
                <!-- 操作列/自定义列 -->
                <slot v-if="col.slot" :name="col.slot"></slot>
                <!-- 普通列 -->
                <el-table-column v-else 
                    :key="index" 
                    :prop="col.prop" 
                    :label="col.label" 
                    :width="col.width" 
                    :formatter="col.formatter"
                    :sortable="col.hasSort"
                    :align="col.align" >
                </el-table-column>
            </template>
        </el-table>
        <!-- 是否调用分页 -->
        <el-pagination v-if="pageObj" background style="margin-top:20px"
            layout="total, prev, pager, next, jumper"
            :page-size="pageObj.size"
            :total="pageObj.total"
            :current-page="pageObj.currentPage"
            @current-change="pageObj.func">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "Table",
        props:{
            tableData:Array,//表格源数据
            columns:Array,//表头
            loading:Boolean,//是否加载中
            pageObj:Object,//分页
            isBorder:Boolean,//是否有边框
            isStripe:Boolean,//是否有斑马纹
            height:String,//固定表头/宽度
            isCheckout:Boolean,//是否多选
            showSummary:Boolean//是否自动求和
        },
        methods: {
            //点击当前行
            handleClickCell(row){
                this.$emit('ClickRow',row)
            }
        },
    }
</script>