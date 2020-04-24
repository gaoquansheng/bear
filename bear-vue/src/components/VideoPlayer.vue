<template>
  <div class="videoPlayer">
    <video ref="videoPlayer" class="video-js vjs-big-play-centered"></video>
    <!-- <div class="time">时间</div> -->
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-flash";

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      player: null,
    };
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
  methods: {
    init(){
      this.player = videojs(
      this.$refs.videoPlayer,
      this.options
      // function onPlayerReady() {
      //   console.log("onPlayerReady", this);
      // }
    );
    }
  }
};
</script>
<style scoped>

/* .time{
  position: relative;
  font-size: 30px;
  top: 160px;
} */
.info{
  /* width: 300px; */
  /* background-color: red; */
}
.title{
  text-align: left;
  font-size:20px;
}
.infoBody{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  color: grey;
}
</style>
