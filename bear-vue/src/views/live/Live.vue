/* eslint-disable */
<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="8">
        <el-input v-model="title" placeholder="请输入标题"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="success" @click="videoFilter">确定</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8" v-for="(video, key) in liveVideoList" :key="key">
        <div class="dislike" @click="dislikeVideo(video)">x</div>
        <VideoPlayer :options="{controls:true,autoplay:true,muted:true,height:'200px',sources:[{src:video.url,type:'rtmp/flv'}]}"></VideoPlayer>
        <el-row>{{video.title}}</el-row>
        <el-row>
          <el-col :span="12">{{video.user.userName}}</el-col>
          <el-col :span="12">{{video.startTime | timeFormat}}</el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getRequest } from "../../utils/api";
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  data() {
    return {
      // 直播列表
      liveVideoList: [],
      dislikeVideos:[],
      //监听器
      timer: "",
      title: ""

    };
  },
  components: {
    VideoPlayer
  },
  methods: {
    videoFilter(){
      //这里应该调用initVideos,但是我先测试吧
      var _this = this;
      var tmp = "&title="+this.title;
      getRequest("http://localhost:8080/web/videos?flag=1"+tmp).then(
        resp => {
          //这里遍历循环,
          for (let item of resp.data) {
            //这里应该比较两个列表,如果一样则什么都不做,如果不一样的,添加进来,
            //判断这一项原来的列表中有吗,如果有就跳过,没有就push进去
            // console.log(JSON.stringify(_this.liveVideoList).indexOf(JSON.stringify(item)))
            if(JSON.stringify(_this.liveVideoList).indexOf(JSON.stringify(item)) == -1 && JSON.stringify(_this.dislikeVideos).indexOf(JSON.stringify(item)) == -1){
              _this.liveVideoList.push(item)
            }
          }
        },
        resp => {
          console.log(resp.data);
        }
      );
    },
    initVideos(){
      var _this = this;
      //首先清空liveVideoList,如果清空当前的播放列表,则会出现暂停现象
      getRequest("http://localhost:8080/web/videos?flag=1").then(
        resp => {
          //这里遍历循环,
          for (let item of resp.data) {
            //这里应该比较两个列表,如果一样则什么都不做,如果不一样的,添加进来,
            //判断这一项原来的列表中有吗,如果有就跳过,没有就push进去
            // console.log(JSON.stringify(_this.liveVideoList).indexOf(JSON.stringify(item)))
            if(JSON.stringify(_this.liveVideoList).indexOf(JSON.stringify(item)) == -1 && JSON.stringify(_this.dislikeVideos).indexOf(JSON.stringify(item)) == -1){
              _this.liveVideoList.push(item)
            }
          }
        },
        resp => {
          console.log(resp.data);
        }
      );
    },
    dislikeVideo(video){
      //首先将此直播资源从直播列表中移除
      this.liveVideoList.pop(video);
      this.dislikeVideos.push(video);
    }
  },
  filters: {
    timeFormat(time){
      var date = new Date(time);
      return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
      // return  '1';
    }
  },
  mounted() {
    this.initVideos()
    //放置一个定时器,
    this.timer = setInterval(this.initVideos,10000)
  },
  beforeDestroy(){
    clearInterval(this.timer);
  }
};
</script>

<style>
  .el-col {
    border-radius: 20px;
    margin-bottom: 20px;
    position: relative;
  }
  .dislike {
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(50%, -50%);
  font-size: 16px;
  width:14px;
  height:14px;
  line-height: 14px;
  border-radius: 50%;
  cursor: pointer;
}
  .dislike:hover{
    background-color:red;
    color:white;
  }

</style>
