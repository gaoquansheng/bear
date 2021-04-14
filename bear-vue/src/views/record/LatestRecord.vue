/* eslint-disable */
<template>
  <div>
    <!-- 这里是头部过滤条件部分 -->
    <el-row :gutter="10">
      <el-col :span="8">
        <el-date-picker
          v-model="timeRange"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :default-time="['00:00:00','23:59:59']"
          >
        </el-date-picker>
      </el-col>
      <el-col :span="2">
        <el-button type="success" @click="initVideos">搜索</el-button>
      </el-col>
      <el-col :span="2">
        <el-button
          type="success"
          :disabled="checkedVideos.length == 0"
          @click="dialogVisible = true"
          >添加标题</el-button
        >
      </el-col>
      <el-col :span="2">
        <el-button
          type="success"
          :disabled="checkedVideos.length == 0"
          @click="synVideos"
          >同步播放</el-button
        >
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
    <!-- 这里是录播的列表模式 -->
    <div v-if="patten">
      <el-row v-show="recordVideoList.length != 0" :gutter="20">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >全选</el-checkbox>
        <el-checkbox-group v-model="checkedVideos">
          <draggable :list="recordVideoList" class="list-group" :animation='200'>
          <el-col
            :span="6"
            v-for="video in recordVideoList"
            :key="video.videoId"
          >
          <!-- <flv-player ref="myvideo" :options="video" ></flv-player> -->
          <video-player :options="{
                      controls: true,
                      fluid: true,
                      sources: [{ src: video.url, type: 'application/x-mpegURL' }]
                    }"></video-player>
            <VideoInfo :videoInfo="video"></VideoInfo>
            <el-checkbox :label="video">
              <!-- 这里必须要有值,不然就会显示label中的值 -->
              <div style="display:none">1</div>
            </el-checkbox>
          </el-col>
          </draggable>
        </el-checkbox-group>
      </el-row>
    </div>
    <!-- 这里是录播的地图模式 -->
    <div v-else>
      <VideoMap :videoPoints="recordVideoList"></VideoMap>
    </div>
    <!-- 统一给视频添加标题的弹出框部分 -->
    <el-dialog title="添加标题" :visible.sync="dialogVisible" width="30%">
      <el-input v-model="title" placeholder="请输入标题"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTitle">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
//eslint-disable-next-line
import { getRequest, postRequest,dateToString} from "../../utils/api";
import VideoPlayer from "@/components/VideoPlayer.vue";
import VideoMap from "@/components/VideoMap.vue";
import VideoInfo from "@/components/VideoInfo.vue";
import draggable from "vuedraggable"
import FlvPlayer from "@/components/FlvPlayer.vue"
import VideoPlayer from '../../components/VideoPlayer.vue';

export default {
  data() {
    return {
      patten: true, //true代表列表模式,flase代表地图模式
      title: "",
      dialogVisible: false,
      isIndeterminate: true,
      checkAll: false,
      checkedVideos: [],
      recordVideoList: [],
      timeRange: "",
      playing: false
    };
  },
  components: {
    VideoPlayer,
    VideoMap,
    VideoInfo,
    draggable,
    FlvPlayer
    VideoPlayer
  },  
  mounted() {
    this.initVideos();
  },
  methods: {

    handleCheckAllChange(val) {
      this.checkedVideos = val ? this.recordVideoList : [];
      this.isIndeterminate = false;
    },
    addTitle() {
      //eslint-disable-next-line
      let _this = this;
      let ids = this.checkedVideos.map(video => video.videoId).join();
      let data = {
        ids: ids,
        title: this.title
      }
      getRequest("/web/addTitle",data).then(
        resp => {
          resp.data.statusCode == 200?this.$message({message:resp.data.msg,type:'success'}):this.$message({message:resp.data.msg,type:'error'});
          //这里成功之后刷新数据
          _this.title = "";
          _this.initVideos();
        }
      );
      this.dialogVisible = false;
    },
    //获取最新录播的数据
    initVideos() {
      let _this = this;
      //这里将日期设定为当天,默认显示当天数据
      if(!this.timeRange){
        let startTime = dateToString()+"00:00:00";
        let endTime = dateToString()+"23:59:59";
        this.timeRange = [startTime,endTime];
      }
      let video = {
          startTime: this.timeRange[0],
          endTime: this.timeRange[1]
        };
      postRequest("/web/latestVideos", video).then(
        resp => {
          console.log(resp);
          _this.recordVideoList = resp;
          // _this.recordVideoList.splice(0, _this.recordVideoList.length); //重新赋值数组后会无法追踪数组
          //直接将数组进行赋值就会使得vue无法跟踪数组吗?
          //为什么修改数组之后没办法触发呢
          //这里是因为数组的更新检测 what fuck!
          // for (let item of resp.data) {
          //   //判断这一项原来的列表中有吗,如果有就跳过,没有就push进去
          //   _this.recordVideoList.push(item);
          // }
        },
        resp => {
          console.log(resp);
        }
      );
    },
    synVideos(){
      let latestTime = this.getLatestTime(this.checkedVideos);
      let videos = this.$refs['myvideo'];
      videos.forEach(video => {
        video.seek(latestTime);
      })
      //这里调用子组件的seek方法，
      // this.checkedVideos.forEach(video => {
      //   //这里的调用方式也是固定的需要一个索引[0]
      //   this.$refs[`video${video.videoId}`][0].setCurrentTime(new Date(video.startTime),latestTime)
      // });
    },
    getLatestTime(videos){
      let timeList = videos.map(video => {
        return new Date(video.startTime);
      })      
      let latestTime = timeList.reduce((time1,time2) => {
        return time1>time2?time1:time2;
      })
      return latestTime;
    },

  }
};
</script>

<style>
.el-col {
  border-radius: 20px;
  margin-bottom: 20px;
}
</style>
