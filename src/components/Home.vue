<template>
  <div class="wrapper">
    <Header/>
    <Aside/>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <Tags/>
      <div class="content">
        <transition name="move" mode="out-in">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <!-- <el-backtop target=".content"></el-backtop> -->
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from './Header.vue'
import Aside from './Aside.vue'
import Tags from './tags.vue'
export default {
  components:{
    Header,
    Aside,
    Tags
  },
  data(){
    return{
      collapse:false
    }
  },
  methods:{
    
  },
  created(){
    //控制左侧菜单折叠
    this.$globalEventBus.$on('collapse-content', msg => {
      this.collapse = msg;
    });
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    this.$globalEventBus.$on('tags', msg => {
        let arr = [];
        for (let i = 0, len = msg.length; i < len; i++) {
            msg[i].name && arr.push(msg[i].name);
        }
        this.tagsList = arr;
    })
  }
}
</script>

<style>
 .content-box {
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom: 0;
    padding-bottom: 30px;
    -webkit-transition: left .3s ease-in-out;
    transition: left .3s ease-in-out;
    background: #f0f0f0;
}

.content {
    width: auto;
    height: 100%;
    padding: 20px;
    overflow-y: scroll;
    box-sizing: border-box;
}

.content-collapse {
    left: 65px;
}
</style>