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
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from '../../components/Header.vue'
import Aside from '../../components/Aside.vue'
import Tags from '../../components/tags.vue'
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
  mounted(){
    
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