<template>
  <div>
    <el-row>{{video.title}}</el-row>
    <el-row>
      <el-col :span="12">{{video.user.userName}}</el-col>
      <el-col :span="12">{{video.startTime | timeFormat}}</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{
      video:this.videoInfo
    }
  },
  props:{
    videoInfo:{
      type:Object
    }
  },
  filters: {
    timeFormat(time){
      var date = new Date(time);
      return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
    }
  },
}
</script>

<style>

</style>