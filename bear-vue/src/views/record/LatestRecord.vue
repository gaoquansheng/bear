/* eslint-disable */
<template>
  <div>
    <!-- 这里是头部过滤条件部分 -->
    <el-row :gutter="10">
      <el-col :span="8">
        <el-date-picker
          v-model="timeRange"
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
      <el-row :gutter="20">
        <el-checkbox
          :indeterminate="isIndeterminate"
          v-model="checkAll"
          @change="handleCheckAllChange"
          >全选</el-checkbox>
        <el-checkbox-group v-model="checkedVideos">
          <el-col
            :span="6"
            v-for="video in recordVideoList"
            :key="video.videoId"
          >
          <!-- 模板字符串写法 -->
            <VideoPlayer
              :ref="`video${video.videoId}`"
              :options="{
                controls: true,
                autoplay: true,
                muted: true,
                fluid: true,
                sources: [{ src: video.videoUrl, type: 'rtmp/flv' }]
              }"
            ></VideoPlayer>
            <VideoInfo :videoInfo="video"></VideoInfo>
            <el-checkbox :label="video">
              <!-- 这里必须要有值,不然就会显示label中的值 -->
              <div style="display:none">1</div>
            </el-checkbox>
          </el-col>
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

      
      timeRange: ""
      
    };
  },
  components: {
    VideoPlayer,
    VideoMap,
    VideoInfo
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
    
      getRequest("/web/addTitle?ids=" + ids + "&title=" + this.title).then(
        resp => {
          console.log(resp);
          //这里成功之后刷新数据
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
          flag: 0,
          startTime: this.timeRange[0],
          endTime: this.timeRange[1]
        };
      postRequest("/web/latestVideos", video).then(
        resp => {
          _this.recordVideoList.splice(0, _this.recordVideoList.length); //重新赋值数组后会无法追踪数组
          //直接将数组进行赋值就会使得vue无法跟踪数组吗?
          //为什么修改数组之后没办法触发呢
          //这里是因为数组的更新检测
          for (let item of resp.data) {
            //判断这一项原来的列表中有吗,如果有就跳过,没有就push进去
            _this.recordVideoList.push(item);
          }
        },
        resp => {
          console.log(resp.data);
        }
      );
    },
    synVideos(){
      let latestTime = this.getLatestTime(this.checkedVideos);
      this.checkedVideos.forEach(video => {
        //这里的调用方式也是固定的需要一个索引[0]
        this.$refs[`video${video.videoId}`][0].setCurrentTime(new Date(video.startTime),latestTime)
      });
    },
    getLatestTime(videos){
      let timeList = videos.map(video => {
        return new Date(video.startTime);
      })      
      let latestTime = timeList.reduce((time1,time2) => {
        return time1>time2?time1:time2;
      })
      return latestTime;
    }
  },
  mounted() {
    this.initVideos();
  }
};
</script>

<style>
.el-col {
  border-radius: 20px;
  margin-bottom: 20px;
}
</style>
