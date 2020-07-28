<template>
    <div class="menu">
      <h3>能使用v-show ，就别使用v-if</h3>
      <h3>路由组件懒加载 被动态引入的模块就会被单独打包</h3>
      <h3>v-for 比 v-if 优先级高，如果每一次都需要遍历整个数组，将会影响速度，尤其是当之需要渲染很小一部分的时候，必要情况下应该替换成 computed 属性。</h3>
      <h3>图片懒加载,需要下载插件 v-lazy="/static/img/1.png</h3>
      <p>{{obj.name}}</p>
      <p>{{obj.age}}</p>
      <p>{{obj.sex}}</p>
      <p>{{obj.address}}</p>
      <p>{{obj.mony}}+1111111111</p>
      <p>{{obj.hahah}}+2222222</p>
      <!-- <p>{{obj.body.head}}</p> -->
    </div>
</template>

<script>

export default {
  name: "SideBar",
  data() {
    return {
      //点击按钮显示表格问题
      obj:{

      },
		tableData:[
			{序号:'1',审核类型:'硬认证审批',曹亚杰:'1',李可嘉:'2',总数:'20'},
			{序号:'2',审核类型:'软认证审批',曹亚杰:'1',李可嘉:'2',总数:'20'},
			{序号:'3',审核类型:'客户变更审批',曹亚杰:'1',李可嘉:'2',总数:'20'},
			{序号:'4',审核类型:'重绑定uk审批',曹亚杰:'1',李可嘉:'2',总数:'20'},
		]
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
        this.obj = {name:'guoyufei',age:18,sex:'nan',address:'changping',}
        // for (const key in this.obj) {
        //   if (this.obj.hasOwnProperty(key)) {
        //     const element = this.obj[key];
        //     console.log(this.obj[key])
        //   }
          
        // }
       var arr = [{
            name: "小提莫",
            age: "0"
        }, {
            name: "小鲁班",
            age: "0"
        },{
            name: "小鲁班",
            age: "0"
        },{
            name: "小鲁班",
            age: "0"
        }]
        var result_one = arr.some(function(item) {
            if (item.name == "小提莫") { //item.name == "小百里守约"
                return true;  //返回false
            }else if(item.age =='0'){
               return true;
            }
        })
        console.log(result_one );
    }
  },
  computed:{
      
  },
  
};
</script>

<style lang="scss" scoped>

</style>
