<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>


export default {
    watch:{
      '$route'(to){
        document.title=`${to.meta.title}|管理系统`;
        // document.title=`${to.name}|管理系统`;
        // console.log(to)
      }
    }
}
</script>

<style>
html,
body,
#app,
.wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
body {
    font-family: 'PingFang SC', "Helvetica Neue", Helvetica, "microsoft yahei", arial, STHeiTi, sans-serif;
}
</style>
