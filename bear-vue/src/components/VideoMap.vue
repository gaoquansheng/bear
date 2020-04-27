<template>
<div>
  <baidu-map 
    class="bm-view" 
    :center="baiduMap.center" 
    :scroll-wheel-zoom="baiduMap.scrollWheelZoom" 
    :zoom="baiduMap.zoom" 
    ak="MaNFkHxfgMEfEodDwDsB6pbE95pj3dCB"
    @ready="handler"
  >
    <!-- 地图上面的点以及infowindow -->
    <template v-for="video in videoLists" >
      <bm-marker :position="{lng:video.lng , lat:video.lat }" :key="video.videoId" :clicking="true" @click="clickPoint(video)" animation="BMAP_ANIMATION_BOUNCE">
        <!-- <bm-info-window  :position="{lng: point.lng, lat: point.lat}"  title="用户信息" :show="flag == id" >
        </bm-info-window> -->
      </bm-marker>
    </template>

    <!-- 自定义控件 -->
    <!-- <bm-control>
      <el-radio-group v-model="videoType" @change="videoSelectChange">
        <el-radio-button label="1" >直播</el-radio-button>
        <el-radio-button label="0" >录播</el-radio-button>
      </el-radio-group>
    </bm-control> -->
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
  </baidu-map>
  
  <!-- 这里外层加一个template标签(或者div标签都可以)很关键!!!,因为加了这个标签之后才不会影响videoplayer组件多次的执行初始化与销毁方法-->
  <template v-if="videoDialog">
    <el-dialog title="视频资源" :visible.sync="videoDialog" width="50%">
      <el-row :gutter="40">
        <el-col :span="12">
          <VideoPlayer  :options="options"></VideoPlayer>
        </el-col>
        <el-col :span="12">
          <el-row >
            <el-col :span="12"><div><i class="el-icon-user-solid"></i>姓名:</div></el-col>
            <el-col :span="12"><div v-text="selectVideo.user.userName"></div></el-col>
            <el-col :span="12"><div><i class="el-icon-phone"></i>手机号:</div></el-col>
            <el-col :span="12"><div v-text="selectVideo.userTel"></div></el-col>
            <el-col :span="12"><div><i class="el-icon-add-location"></i>经度:</div></el-col>
            <el-col :span="12"><div v-text="selectVideo.lat"></div></el-col>
            <el-col :span="12"><div><i class="el-icon-add-location"></i>纬度:</div></el-col>
            <el-col :span="12"><div v-text="selectVideo.lng"></div></el-col>
            <!-- <el-col :span="12" :offset="6">
              <el-button type="success" @click="videoDialog = true">{{videoType == "1"? "观看直播":"观看录播"}}</el-button>
            </el-col> -->
          </el-row>
        </el-col>
      </el-row>
    </el-dialog>
  </template>
    
</div>
</template>

<script>
// import { getRequest} from "../utils/api";
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  data(){
    return{
      baiduMap: {
        center: {lng: "116.1", lat: "39.820"},//设置中心点,合法的字符串或者经纬度json对象{lng: 0, lat: 0},
        zoom: 10 ,//缩放级别
        scrollWheelZoom: true
      },

      videoLists:this.videoPoints,
      selectVideo: "",
      videoDialog: false,
      //这里是el-dialog中video的资源
      options: {
            controls: true,
            autoplay:true,
            muted: true,
            height: "200px",
            sources: [
              {
                src: "",
                type: "rtmp/flv"
              }
            ]
          }
    }
  },
  props: {
    videoPoints: {
      type:Array,
      default(){
        return [];
      }
    }
  },
  watch: {
    videoLists(newValue){
      this.$message.success("当前有"+newValue.length+"个视频资源")
      console.log(newValue[0].lat);
      this.baiduMap.center.lat = newValue.length>0? newValue[0].lat:"39.820";
      this.baiduMap.center.lng =newValue.length>0? newValue[0].lng:"116.1";
    }
  },
  methods: {
    clickPoint(video){
      this.videoDialog = true;
      this.selectVideo = video;
      console.log(video);
      // this.flag = id;
      //在这里将对应的视频url传递过来,这里应该判断一下类型然后选择将url和videoUrl传过来
      if(video.flag == 1){
        this.options.sources[0].src=video.url;
      }else{
        this.options.sources[0].src=video.videoUrl;
      }
    },
    handler(){
      this.baiduMap.center.lat = this.videoLists.length>0? this.videoLists[0].lat:"39.820";
      this.baiduMap.center.lng = this.videoLists.length>0? this.videoLists[0].lng:"116.1";
    }
  },
  mounted(){
    this.$message.success("当前有"+this.videoLists.length+"个视频资源")
  },
  components:{
    VideoPlayer
  }
}
</script>

<style>
.bm-view {
  width: 100%;
  height: 500px;
}
.videoSelect{
  margin-bottom: 20px;
}
.el-form-item{
  margin-bottom: 1px;
}
</style>