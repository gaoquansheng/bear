/* eslint-disable */
<template>
  <div>
    <!-- <el-row>
      <el-col :span="6">
        <VideoPlayer :options="videoOptions"></VideoPlayer>
      </el-col>
    </el-row> -->
    <el-row :gutter="20" v-for="(video, key) in videoOptions" :key="key">
      <el-col :span="6">
        <VideoPlayer :options="video"></VideoPlayer>
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
      videoOptions: [],
      liveVideoList: ""
    };
  },
  components: {
    VideoPlayer
  },
  mounted() {
    var _this = this;
    getRequest("http://localhost:8080/video/live").then(
      resp => {
        _this.liveVideoList = resp.data;
        //这里遍历循环,
        for (let item of resp.data) {
          _this.videoOptions.push({
            controls: true,
            height: "200px",
            sources: [
              {
                src: item.url,
                type: "rtmp/flv"
              }
            ]
          });
        }
        console.log(_this.videoOptions)
      },
      resp => {
        console.log(resp.data);
      }
    );
  }
};
</script>

<style></style>
