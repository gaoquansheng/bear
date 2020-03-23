<template>
  <div>
    <el-row>
      <el-col :span="6">
        <VideoPlayer :options="videoOptions"></VideoPlayer>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  data() {
    return {
      videoOptions: {
        autoplay: true,
        controls: true,
        height: "200px",
        sources: [
          {
            src: "http://localhost:80/hls/bear.m3u8",
            type: "application/x-mpegURL"
          }
        ]
      }
    };
  },
  components: {
    VideoPlayer
  },
  mounted() {
    console.log(this.$router);
  }
};
</script>

<style>
</style>