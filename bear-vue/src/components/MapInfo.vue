<template>
  <el-row >
    <el-col :span="12"><div><i class="el-icon-user-solid"></i>姓名:</div></el-col>
    <el-col :span="12"><div v-text="videoInfo.user.userName"></div></el-col>
    <el-col :span="12"><div><i class="el-icon-phone"></i>手机号:</div></el-col>
    <el-col :span="12"><div v-text="videoInfo.userTel"></div></el-col>
    <el-col :span="12"><div><i class="el-icon-add-location"></i>经度:</div></el-col>
    <el-col :span="12"><div v-text="videoInfo.lat"></div></el-col>
    <el-col :span="12"><div><i class="el-icon-add-location"></i>纬度:</div></el-col>
    <el-col :span="12"><div v-text="videoInfo.lng"></div></el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return{
      videoInfo:this.mapInfo
    }
  },
  props: {
    mapInfo:{
      type:Object,
      default(){
        return{}
      }
    }
  }
}
</script>

<style scoped>
i{
  color:blue;
  margin-right:10px;
}
</style>