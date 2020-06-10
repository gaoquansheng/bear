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
        <el-button
          type="success"
          :title="patten?'切换地图模式':'切换列表模式'"
          icon="el-icon-s-operation"
          @click="patten = !patten"
        ></el-button>
      </el-col>
    </el-row>
    <!-- 默认为列表模式 -->
    <div v-if="patten">
      <el-row :gutter="10">
        <el-col :span="6" v-for="(video,id) in liveVideoList" :key="video.videoId">
          <div class="dislike" @click="dislikeVideo(video,id)">x</div>
          <VideoPlayer
            :options="{controls:true,autoplay:true,muted:true,fluid:true,liveui: true,sources:[{src:video.url,type:'rtmp/flv'}]}"
          ></VideoPlayer>
          <VideoInfo :videoInfo="video"></VideoInfo>
          <el-input placeholder="请输入消息" />
        </el-col>
      </el-row>
    </div>
    <div v-else>
      <VideoMap :videoPoints="liveVideoList"></VideoMap>
    </div>
    <button @click="websocketsend">点击发送</button>
  </div>
</template>

<script>
import { postRequest } from "../../utils/api";
import VideoPlayer from "@/components/VideoPlayer.vue";
import VideoMap from "@/components/VideoMap.vue";
import VideoInfo from "@/components/VideoInfo.vue";
export default {
  data() {
    return {
      // 直播列表
      liveVideoList: [],
      dislikeVideoList: [],
      //监听器
      // timer: "",
      //筛选的直播标题
      title: "",
      patten: true, //true代表列表模式,false代表map模式

      websock: null,
      websocketUrl: "ws://localhost:8080/imserver/15516392394"
    };
  },
  components: {
    VideoPlayer,
    VideoMap,
    VideoInfo
  },
  methods: {
    initVideos() {
      var _this = this;
      var video = {
        flag: 1,
        title: this.title
      };
      postRequest("/web/liveVideos", video).then(
        resp => {
          //这里遍历循环,
          for (let item of resp.data) {
            //判断这一项原来的列表中有吗,如果有就跳过,没有就push进去
            if (
              JSON.stringify(_this.liveVideoList).indexOf(
                JSON.stringify(item)
              ) == -1 &&
              JSON.stringify(_this.dislikeVideoList).indexOf(
                JSON.stringify(item)
              ) == -1
            ) {
              _this.liveVideoList.push(item);
            }
          }
          //这里再来个for循环,删除不存在的视频
          for (var i = 0; i < _this.liveVideoList.length; i++) {
            if (
              JSON.stringify(resp.data).indexOf(
                JSON.stringify(_this.liveVideoList[i])
              ) == -1
            ) {
              _this.liveVideoList.splice(i, 1);
            }
          }
        },
        resp => {
          console.log(resp.data);
        }
      );
    },
    // eslint-disable-next-line
    dislikeVideo(video, id) {
      //首先将此直播资源从直播列表中移除
      this.liveVideoList.splice(id, 1);
      this.dislikeVideoList.push(video);
    },

    initWebSocket() {
      //初始化weosocket
      this.websock = new WebSocket(this.websocketUrl);
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    //下面这些是回调函数
    websocketonopen() {
      //连接建立之后执行send方法发送数据
      console.log("连接成功");
    },
    websocketonerror() {
      //连接建立失败重连
      console.log("连接失败重新连接");
      this.initWebSocket();
    },
    websocketonmessage(e) {
      //这里会接受两个数据,一个直播数据,一个交互信息
      console.log("接受数据");
      let data = JSON.parse(e.data);
      if (data.message != null){
        //这里是消息
        console.log(data)
      }else {
        //这里是直播
        this.liveVideoList.push(data);
      }
    },

    //两个方法
    websocketsend() {
      //数据发送
      let data = {
        "sendUserTel":"15516392395",
        "message": "111111111111",
        "receivedUserTel": "15516392395",
        "sendTime": new Date()
      };
      this.websock.send(JSON.stringify(data));
    },
    //eslint-ignore-next-line
    websocketclose() {
      console.log("断开连接");
    }
  },

  mounted() {
    this.initVideos();
    //放置一个定时器,
    // this.timer = setInterval(this.initVideos,10000)
  },
  created() {
    this.initWebSocket();
  },
  destroyed() {
    this.websock.close(); //离开路由之后断开websocket连接
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
  width: 14px;
  height: 14px;
  line-height: 14px;
  border-radius: 50%;
  cursor: pointer;
}
.dislike:hover {
  background-color: red;
  color: white;
}
</style>
