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
    <template v-for="(video,id) in videoLists" >
      <bm-marker :position="{lng:video.lng , lat:video.lat }" :key="id" :clicking="true" @click="clickPoint(video)" animation="BMAP_ANIMATION_BOUNCE">
        <!-- <bm-info-window  :position="{lng: point.lng, lat: point.lat}"  title="用户信息" :show="flag == id" >
          
        </bm-info-window> -->
      </bm-marker>
    </template>


    <!-- 自定义控件 -->
    <bm-control>
      <el-radio-group v-model="videoType" @change="videoSelectChange">
        <el-radio-button label="1" >直播</el-radio-button>
        <el-radio-button label="0" >录播</el-radio-button>
      </el-radio-group>
    </bm-control>
    <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
  </baidu-map>
  
  <!-- 这里外层加一个template标签(或者div标签都可以)很关键!!!,因为加了这个标签之后才不会影响videoplayer组件多次的执行初始化与销毁方法-->
  <template v-if="videoDialog">
    <el-dialog :title="videoType==1?'直播资源':'录播资源'" :visible.sync="videoDialog" width="50%">
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
import { getRequest} from "../../utils/api";
import VideoPlayer from "@/components/VideoPlayer.vue";
export default {
  data(){
    return{
      videoType: "1",
      baiduMap: {
        center: {lng: "116.1", lat: "39.820"},//设置中心点,合法的字符串或者经纬度json对象{lng: 0, lat: 0},
        zoom: 10 ,//缩放级别
        scrollWheelZoom: true
      },
      videoLists:[],
      selectVideo: "",
      //通过一个辅助变量来控制每个窗体的弹出和隐藏,
      // flag: -1,
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
  methods: {
    videoSelectChange(){
      //弹出信息框
      this.initVideo(this.videoType);
      // 当前有videoLists.length+"个"}}{{videoType==1?"直播资源":"录播资源"}}
      //因为这里是异步执行的,所以就暂时设置个1秒之后显示吧.
      setTimeout(()=>{
        if(this.videoType == "1"){
          this.$message.success("当前有"+this.videoLists.length+"个直播资源")
        }else{
          this.$message.success("当前有"+this.videoLists.length+"个录播资源")
        }
      },500)
      //将flag设置为-1从而不会在切换的时候直接打开infowindow
      this.flag = -1;
    },
    handler ({BMap, map}){
      //地图组件渲染完毕时触发，返回一个百度地图的核心类和地图实例。百度地图组件是异步加载，
      //请不要尝试在组件的生命周期中访问 BMap 核心类和 map 实例，如有需要，请在所需组件的 ready 事件回调函数的参数中获取。
      console.log(BMap, map)
    },
    clickPoint(video){
      this.videoDialog = true;
      this.selectVideo = video;
      // this.flag = id;
      //在这里将对应的视频url传递过来,这里应该判断一下类型然后选择将url和videoUrl传过来
      if(this.videoType == "1"){
        this.options.sources[0].src=video.url;
      }else{
        this.options.sources[0].src=video.videoUrl;
      }
    },
    initVideo(videoType){
      var _this = this;
      getRequest("/web/videos/?flag="+videoType).then(
        resp => {
        console.log(resp.data)
        _this.videoLists = resp.data;
        //将加载的第一个点的坐标当做中心点,有待验证
        if(resp.data.length != 0){
          _this.baiduMap.center.lng = _this.videoLists[0].lng;
          _this.baiduMap.center.lat = _this.videoLists[0].lat;
        }
      }
    )
    }
  },
  mounted(){
    //获取用户坐标信息
    this.initVideo(this.videoType);
    //这里也延时一下吧
    setTimeout(()=>{
      this.$message.success("当前有"+this.videoLists.length+"个直播资源")
    },500)
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