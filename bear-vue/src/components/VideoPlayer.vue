<template>
  <div class="videoPlayer" >
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
      player: null
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
    dis(){
      this.player.dispose();
    },
    open(){
      this.player.paly();
    },
    init() {
      // videojs.options.flash.swf = "https://cdn.bootcss.com/videojs-swf/5.4.1/video-js.swf";
      this.player = videojs(
        this.$refs.videoPlayer,
        this.options
      );
    },
    setCurrentTime(startTime,latestTime){
      let seconds = this.getSeconds(startTime,latestTime);
      
      this.player.currentTime(seconds);
    },
    getSeconds(startTime,latestTime){
      //这里先不管几月几号，先算小时一下的时间吧
      let hour = latestTime.getHours() - startTime.getHours();
      let min = latestTime.getMinutes() - startTime.getMinutes();
      let sec = latestTime.getSeconds() - startTime.getSeconds();
      return hour*3600 + min * 60 + sec;
    }
  }
};
</script>
<style scoped>

.title {
  text-align: left;
  font-size: 20px;
}
.infoBody {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: grey;
}
</style>
