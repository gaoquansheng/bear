<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  created() {
    //首先在页面加载的时候判断是否有数据
    if(sessionStorage.getItem("store")){
      this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    }
//what fuck 
//这里sessionStorage的键竟然有要求，user就报错?
    //在页面刷新之前将数据存储,
    window.addEventListener("beforeunload",() => {  
      sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
};
</script>

<style>
html {
 font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.el-form-item {
  margin-bottom: 22px !important;
}
</style>
