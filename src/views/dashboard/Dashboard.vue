<template>
    <div>
        <p v-for="(item,i) in list" :key="i">{{ item.value + '---------list' }}</p>
        <!-- <p v-for="(item,i) in list2" :key="i">{{ item.value }}</p> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: Object.freeze([
                { value: 1 },
                { value: 2 }
            ]),
            //list:[]
        };
    },
    computed: {
        
    },
    mounted(){
        /**
         * Vue 会通过 Object.defineProperty 对数据进行劫持，来实现视图响应数据的变化，
            然而有些时候我们的组件就是纯粹的数据展示，不会有任何改变，我们就不需要 Vue 来劫持我们的数据，
            在大量数据展示的情况下，这能够很明显的减少组件初始化的时间，那如何禁止 Vue 劫持我们的数据呢？
            可以通过 Object.freeze 方法来冻结一个对象，一旦被冻结的对象就再也不能被修改了。
         * 
         */
        let arr = [];
        let obj = {};
        for(let i= 1;i<100000;i++){
            obj ={
                value : i 
            }
            arr.push(obj)
        }
        this.list = [{value: 1},{value: 2}] 
        //this.list = Object.freeze(arr);
    },
    methods: {
      
    }
};
</script>


<style scoped>

</style>
