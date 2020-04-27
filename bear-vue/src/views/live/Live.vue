/* eslint-disable */
<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="8">
        <el-input v-model="title" placeholder="请输入标题"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="success" @click="initVideos">确定</el-button>
      </el-col>
      <el-col :span="2" :offset="12">
        <el-button type="success" :title="patten?'切换地图模式':'切换列表模式'"  icon="el-icon-s-operation" @click="patten = !patten"></el-button>
      </el-col>
    </el-row>
    <!-- 默认为列表模式 -->
    <div v-if="patten">
      <el-row :gutter="20">
        <el-col :span="8" v-for="video in liveVideoList" :key="video.videoId">
          <div class="dislike" @click="dislikeVideo(video,id)">x</div>
          <VideoPlayer :options="{controls:true,autoplay:true,muted:true,width:'358px',sources:[{src:video.url,type:'rtmp/flv'}]}"></VideoPlayer>
          <VideoInfo :videoInfo="video"></VideoInfo>
        </el-col>
      </el-row>
    </div>
    <div v-else>
      <VideoMap :videoPoints="liveVideoList"></VideoMap>
    </div>
  </div>
</template>

<script>
import { postRequest} from "../../utils/api";
import VideoPlayer from "@/components/VideoPlayer.vue";
import VideoMap from "@/components/VideoMap.vue";
import VideoInfo from "@/components/VideoInfo.vue"
export default {
  data() {
    return {
      // 直播列表
      liveVideoList: [],
      dislikeVideoList:[],
      //监听器
      timer: "",
      //筛选的直播标题
      title: "",
      patten: true //true代表列表模式,false代表map模式
    };
  },
  components: {
    VideoPlayer,
    VideoMap,
    VideoInfo
  },
  methods: {
    initVideos(){
      var _this = this;
      var video = {
        flag: 1,
        title: this.title
      }
      postRequest("http://localhost:8080/web/liveVideos",video).then(
        resp => {
          //这里遍历循环,
          for (let item of resp.data) {
            //判断这一项原来的列表中有吗,如果有就跳过,没有就push进去
            if(JSON.stringify(_this.liveVideoList).indexOf(JSON.stringify(item)) == -1 && JSON.stringify(_this.dislikeVideoList).indexOf(JSON.stringify(item)) == -1){
              _this.liveVideoList.push(item)
            }
          }
          //这里再来个for循环,删除不存在的视频
          for(var i = 0;i<_this.liveVideoList.length;i++){
            if(JSON.stringify(resp.data).indexOf(JSON.stringify(_this.liveVideoList[i])) == -1){
              _this.liveVideoList.splice(i,1)
            }
          }
        },
        resp => {
          console.log(resp.data);
        }
      );
    },
    // eslint-disable-next-line
    dislikeVideo(video,id){
      //首先将此直播资源从直播列表中移除
      this.liveVideoList.splice(id,1);
      this.dislikeVideoList.push(video);
    }
  },

  mounted() {
    this.initVideos()
    //放置一个定时器,
    // this.timer = setInterval(this.initVideos,10000)
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
