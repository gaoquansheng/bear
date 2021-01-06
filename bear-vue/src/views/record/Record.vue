/* eslint-disable */
<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-date-picker
          v-model="videoFilterFactors.timeRange"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd HH:mm:ss"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </el-col>
      <el-col :span="6">
        <el-input
          v-model="videoFilterFactors.title"
          placeholder="请输入标题"
        ></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="success" @click="initVideos">搜索</el-button>
      </el-col>
      <el-col :span="2" >
        <el-button
          type="success"
          :title="patten ? '切换地图模式' : '切换列表模式'"
          icon="el-icon-s-operation"
          @click="patten = !patten"
        ></el-button>
      </el-col>
    </el-row>
    <!-- 列表模式 -->
    <div v-if="patten">
      <el-row :gutter="40">
        <el-col ref="videoWidth" :span="6" v-for="video in recordVideoList" :key="video.videoId">
          <VideoPlayer
            :options="{
              controls: true,
              autoplay: true,
              muted: true,
              //fluid: true,
              height: '300',
              width: '400',
              sources: [{ src: video.videoUrl, type: 'rtmp/flv' }]
            }"
          ></VideoPlayer>
          <VideoInfo :videoInfo="video"></VideoInfo>
        </el-col>
      </el-row>
    </div>
    <!-- 地图模式 -->
    <div v-else>
      <VideoMap :videoPoints="recordVideoList"></VideoMap>
    </div>
  </div>
</template>

<script>
//eslint-disable-next-line
import { getRequest, postRequest } from "../../utils/api";
import VideoPlayer from "@/components/VideoPlayer.vue";
import VideoMap from "@/components/VideoMap.vue";
import VideoInfo from "@/components/VideoInfo.vue";
export default {
  data() {
    return {
      patten: true,
      recordVideoList: [],
      //日期选择模块
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      //视频筛选条件对象
      videoFilterFactors: {
        timeRange: "",
        title: ""
      }
    };
  },
  components: {
    VideoPlayer,
    VideoMap,
    VideoInfo
  },

  methods: {
    initVideos() {
      let _this = this;
      let video = {
        title: this.videoFilterFactors.title,
        startTime: this.videoFilterFactors.timeRange[0],
        endTime: this.videoFilterFactors.timeRange[1]
      };
      console.log(video);
      
      // if (
      //   this.videoFilterFactors.timeRange == null ||
      //   this.videoFilterFactors.timeRange == ""
      // ) {
      //   video = {
      //     flag: 0,
      //     title: this.videoFilterFactors.title
      //   };
      // } else {
      //   video = {
      //     flag: 0,
      //     title: this.videoFilterFactors.title,
      //     startTime: this.videoFilterFactors.timeRange[0],
      //     endTime: this.videoFilterFactors.timeRange[1]
      //   };

      // }
      postRequest("/web/videos", video).then(resp => {
        _this.recordVideoList = resp;

      });
    }
  },
  mounted() {
    //这个可以计算出来视频的宽度和高度
    this.initVideos();
   
    
  },

};
</script>

<style>
.el-col {
  border-radius: 20px;
  margin-bottom: 20px;
}
</style>
