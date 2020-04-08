/* eslint-disable */
<template>
  <div>
    <!-- <el-row>
      <el-col :span="6">
        <VideoPlayer :options="videoOptions"></VideoPlayer>
      </el-col>
    </el-row> -->
    <el-row  :gutter="20" v-for="(video,key) in videoOptions" :key="key">
      <el-col :span="6">
        <VideoPlayer :options="video"></VideoPlayer>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getRequest} from "../../utils/api"
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  data() {
    return {
      videoOptions: [{
        // autoplay: true,
        controls: true,
        height: "200px",
        sources: [
          {
            src: "rtmp://localhost:1935/vod/meng-1585885739.flv",
            type: "rtmp/flv"
          }
        ]
      }],

    };
  },
  components: {
    VideoPlayer
  },
  mounted() {
    var _this = this;
    // getRequest("/video/live").then{
    //   resp => {
    //     _this
    //   }
    // }
  }
};
</script>

<style>
</style>